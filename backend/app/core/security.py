"""KMRL DMS — Zero-Trust security core.

Responsibilities
----------------
1. Validate Keycloak-issued RS256 access tokens against the realm JWKS.
2. Extract an immutable ``CurrentUser`` context from the verified claims.
3. Yield a SQLAlchemy session whose transaction carries the PostgreSQL
   session-local GUCs ``app.current_department`` and ``app.current_role``.

Authorization is NEVER decided by string comparisons in application code.
This module's only job is to faithfully propagate the verified identity into
the database transaction, where Row-Level Security policies enforce it.
"""

from __future__ import annotations

import os
import threading
import time
from dataclasses import dataclass
from typing import Any, Generator, Iterable, Optional

import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jwt import PyJWKClient
from jwt.exceptions import (
    ExpiredSignatureError,
    ImmatureSignatureError,
    InvalidAudienceError,
    InvalidIssuerError,
    InvalidSignatureError,
    InvalidTokenError,
    MissingRequiredClaimError,
)
from sqlalchemy import create_engine, text
from sqlalchemy.orm import Session, sessionmaker

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

KEYCLOAK_BASE_URL: str = os.environ.get("KEYCLOAK_BASE_URL", "http://localhost:8080").rstrip("/")
KEYCLOAK_REALM: str = os.environ.get("KEYCLOAK_REALM", "kmrl-dms")
KEYCLOAK_CLIENT_ID: str = os.environ.get("KEYCLOAK_CLIENT_ID", "kmrl-backend-api")
JWT_ALGORITHMS: list[str] = ["RS256"]
JWT_LEEWAY_SECONDS: int = int(os.environ.get("JWT_LEEWAY_SECONDS", "10"))

REALM_URL: str = f"{KEYCLOAK_BASE_URL}/realms/{KEYCLOAK_REALM}"
JWKS_URL: str = f"{REALM_URL}/protocol/openid-connect/certs"
TOKEN_URL: str = f"{REALM_URL}/protocol/openid-connect/token"
AUTHORIZATION_URL: str = f"{REALM_URL}/protocol/openid-connect/auth"

DATABASE_URL: str = os.environ.get(
    "DATABASE_URL",
    "postgresql+psycopg://kmrl_app:CHANGE_ME_IN_PRODUCTION@localhost:5432/kmrl_dms",
)

VALID_ROLES: frozenset[str] = frozenset({"ADMIN", "USER"})
VALID_DEPARTMENTS: frozenset[str] = frozenset({"OM", "FINANCE", "LEGAL", "HR"})

# ---------------------------------------------------------------------------
# Database engine / session factory
# ---------------------------------------------------------------------------

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_size=int(os.environ.get("DB_POOL_SIZE", "10")),
    max_overflow=int(os.environ.get("DB_MAX_OVERFLOW", "20")),
    future=True,
)

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)

# ---------------------------------------------------------------------------
# JWKS client (thread-safe lazy singleton, caches signing keys)
# ---------------------------------------------------------------------------

_jwk_client: Optional[PyJWKClient] = None
_jwk_lock = threading.Lock()


def get_jwk_client() -> PyJWKClient:
    """Return the process-wide JWKS client, creating it on first use."""
    global _jwk_client
    if _jwk_client is None:
        with _jwk_lock:
            if _jwk_client is None:
                _jwk_client = PyJWKClient(
                    JWKS_URL,
                    cache_keys=True,
                    max_cached_keys=16,
                    lifespan=int(os.environ.get("JWKS_CACHE_SECONDS", "600")),
                )
    return _jwk_client


# ---------------------------------------------------------------------------
# Bearer token extraction
# ---------------------------------------------------------------------------

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl=TOKEN_URL,
    authorizationUrl=AUTHORIZATION_URL,
    scheme_name="KeycloakOAuth2",
    auto_error=True,
)


def _unauthorized(detail: str) -> HTTPException:
    return HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail=detail,
        headers={"WWW-Authenticate": 'Bearer realm="kmrl-dms"'},
    )


def _forbidden(detail: str) -> HTTPException:
    return HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=detail)


# ---------------------------------------------------------------------------
# Verified user context
# ---------------------------------------------------------------------------


@dataclass(frozen=True, slots=True)
class CurrentUser:
    """Immutable identity derived exclusively from verified JWT claims."""

    user_id: str
    username: str
    role: str
    department: Optional[str]
    email: Optional[str] = None
    issued_at: Optional[int] = None
    expires_at: Optional[int] = None

    @property
    def is_admin(self) -> bool:
        return self.role == "ADMIN"


# ---------------------------------------------------------------------------
# Claim helpers
# ---------------------------------------------------------------------------


def _normalize_group(raw: Any) -> Optional[str]:
    """Normalize a Keycloak group entry ('/FINANCE' or 'FINANCE') to a code."""
    if not isinstance(raw, str):
        return None
    code = raw.strip().strip("/").upper()
    return code if code in VALID_DEPARTMENTS else None


def _extract_department(claims: dict[str, Any]) -> Optional[str]:
    """Read the ``department`` claim produced by the group membership mapper."""
    raw = claims.get("department")
    candidates: Iterable[Any]
    if raw is None:
        candidates = ()
    elif isinstance(raw, (list, tuple, set)):
        candidates = raw
    else:
        candidates = (raw,)

    for candidate in candidates:
        code = _normalize_group(candidate)
        if code is not None:
            return code
    return None


def _extract_role(claims: dict[str, Any]) -> str:
    """Resolve the effective realm role; ADMIN wins over USER when both exist."""
    realm_access = claims.get("realm_access") or {}
    roles = realm_access.get("roles") if isinstance(realm_access, dict) else None
    role_set = {str(r).upper() for r in roles} if isinstance(roles, (list, tuple, set)) else set()

    if "ADMIN" in role_set:
        return "ADMIN"
    if "USER" in role_set:
        return "USER"
    raise _forbidden("Token carries no recognized KMRL realm role (ADMIN or USER).")


# ---------------------------------------------------------------------------
# Token verification
# ---------------------------------------------------------------------------


def decode_token(token: str) -> dict[str, Any]:
    """Verify an access token's signature, issuer, audience, and lifetime.

    Raises ``HTTPException(401)`` with a precise detail for every failure mode.
    """
    if not token or token.count(".") != 2:
        raise _unauthorized("Malformed bearer token: expected a compact JWS with three segments.")

    try:
        signing_key = get_jwk_client().get_signing_key_from_jwt(token)
    except InvalidTokenError as exc:
        raise _unauthorized(f"Unable to resolve signing key for token: {exc}") from exc
    except Exception as exc:  # network / JWKS endpoint failure
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Identity provider key set is temporarily unreachable.",
        ) from exc

    try:
        claims: dict[str, Any] = jwt.decode(
            token,
            signing_key.key,
            algorithms=JWT_ALGORITHMS,
            audience=KEYCLOAK_CLIENT_ID,
            issuer=REALM_URL,
            leeway=JWT_LEEWAY_SECONDS,
            options={
                "require": ["exp", "iat", "iss", "sub", "aud"],
                "verify_signature": True,
                "verify_exp": True,
                "verify_iat": True,
                "verify_aud": True,
                "verify_iss": True,
            },
        )
    except ExpiredSignatureError as exc:
        raise _unauthorized("Access token has expired. Refresh the session and retry.") from exc
    except ImmatureSignatureError as exc:
        raise _unauthorized("Access token is not yet valid (nbf/iat in the future).") from exc
    except InvalidSignatureError as exc:
        raise _unauthorized("Access token signature is invalid — possible tampering.") from exc
    except InvalidAudienceError as exc:
        raise _unauthorized(
            f"Access token audience mismatch: expected '{KEYCLOAK_CLIENT_ID}'."
        ) from exc
    except InvalidIssuerError as exc:
        raise _unauthorized(f"Access token issuer mismatch: expected '{REALM_URL}'.") from exc
    except MissingRequiredClaimError as exc:
        raise _unauthorized(f"Access token is missing a required claim: {exc.claim}.") from exc
    except InvalidTokenError as exc:
        raise _unauthorized(f"Access token is malformed or unverifiable: {exc}") from exc

    if claims.get("typ") not in (None, "Bearer"):
        raise _unauthorized("Only Bearer-type access tokens are accepted on this API.")

    return claims


def get_current_user(token: str = Depends(oauth2_scheme)) -> CurrentUser:
    """FastAPI dependency producing the verified caller identity."""
    claims = decode_token(token)

    subject = claims.get("sub")
    if not isinstance(subject, str) or not subject:
        raise _unauthorized("Access token has no usable subject ('sub') claim.")

    role = _extract_role(claims)
    department = _extract_department(claims)

    if role == "USER" and department is None:
        raise _forbidden(
            "Standard users must belong to exactly one KMRL department group "
            "(/OM, /FINANCE, /LEGAL, /HR)."
        )

    return CurrentUser(
        user_id=subject,
        username=str(claims.get("preferred_username") or subject),
        role=role,
        department=department,
        email=claims.get("email"),
        issued_at=claims.get("iat"),
        expires_at=claims.get("exp"),
    )


# ---------------------------------------------------------------------------
# RLS-scoped database dependency
# ---------------------------------------------------------------------------

_SET_DEPARTMENT = text("SELECT set_config('app.current_department', :department, true)")
_SET_ROLE = text("SELECT set_config('app.current_role', :role, true)")


def get_db_with_rls(
    current_user: CurrentUser = Depends(get_current_user),
) -> Generator[Session, None, None]:
    """Yield a session whose transaction is bound to the caller's RLS context.

    ``set_config(..., is_local => true)`` is the parameterized equivalent of
    ``SET LOCAL``; it is scoped to the surrounding transaction and reverts on
    COMMIT or ROLLBACK, so a pooled connection can never leak one user's
    department context into another request.
    """
    session: Session = SessionLocal()
    try:
        session.begin()
        session.execute(
            _SET_DEPARTMENT,
            {"department": current_user.department or ""},
        )
        session.execute(_SET_ROLE, {"role": current_user.role})
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()


def get_db_unscoped() -> Generator[Session, None, None]:
    """Session with NO security context — background/maintenance jobs only.

    RLS is FORCEd on ``documents``, so with neither GUC set every policy
    predicate evaluates to NULL and the table reads as empty (deny-by-default).
    """
    session: Session = SessionLocal()
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()


# ---------------------------------------------------------------------------
# Optional coarse gate — defence in depth only, never the primary control.
# ---------------------------------------------------------------------------


def require_admin(current_user: CurrentUser = Depends(get_current_user)) -> CurrentUser:
    """Gate administrative endpoints. Row filtering still happens in RLS."""
    if not current_user.is_admin:
        raise _forbidden("Elevated ADMIN clearance is required for this operation.")
    return current_user


def token_seconds_remaining(current_user: CurrentUser) -> int:
    """Seconds until the caller's access token expires (0 when unknown/past)."""
    if current_user.expires_at is None:
        return 0
    return max(0, int(current_user.expires_at) - int(time.time()))


__all__ = [
    "CurrentUser",
    "SessionLocal",
    "decode_token",
    "engine",
    "get_current_user",
    "get_db_unscoped",
    "get_db_with_rls",
    "oauth2_scheme",
    "require_admin",
    "token_seconds_remaining",
]
