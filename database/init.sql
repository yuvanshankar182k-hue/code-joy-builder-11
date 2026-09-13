-- =====================================================================
-- KMRL Document Management System
-- PostgreSQL 16 schema + Row-Level Security (RLS) isolation bootstrap
-- =====================================================================
-- Security model:
--   * Every request opens a transaction that sets two session-local GUCs:
--       app.current_department  -> department code from the Keycloak JWT
--       app.current_role        -> realm role ('ADMIN' | 'USER')
--   * All authorization filtering happens HERE, at the database
--     transaction boundary. Application code never filters by department.
-- =====================================================================

BEGIN;

-- ---------------------------------------------------------------------
-- Extensions
-- ---------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "vector";

-- ---------------------------------------------------------------------
-- Application role used by the FastAPI connection pool.
-- NOT a superuser and NOT the table owner, so RLS always applies.
-- ---------------------------------------------------------------------
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'kmrl_app') THEN
        CREATE ROLE kmrl_app LOGIN PASSWORD 'CHANGE_ME_IN_PRODUCTION';
    END IF;
END
$$;

-- ---------------------------------------------------------------------
-- Enumerated department codes (mirrors Keycloak groups /OM /FINANCE /LEGAL /HR)
-- ---------------------------------------------------------------------
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'department_code') THEN
        CREATE TYPE department_code AS ENUM ('OM', 'FINANCE', 'LEGAL', 'HR');
    END IF;
END
$$;

-- ---------------------------------------------------------------------
-- Helper functions reading the session-local security context.
-- current_setting(..., true) returns NULL instead of erroring when unset,
-- which makes an unconfigured session deny-by-default.
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION app_current_department()
RETURNS TEXT
LANGUAGE sql
STABLE
AS $$
    SELECT NULLIF(current_setting('app.current_department', true), '');
$$;

CREATE OR REPLACE FUNCTION app_current_role()
RETURNS TEXT
LANGUAGE sql
STABLE
AS $$
    SELECT NULLIF(current_setting('app.current_role', true), '');
$$;

CREATE OR REPLACE FUNCTION app_is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
AS $$
    SELECT app_current_role() = 'ADMIN';
$$;

-- ---------------------------------------------------------------------
-- documents
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS documents (
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    title           TEXT            NOT NULL CHECK (length(btrim(title)) > 0),
    department      department_code NOT NULL,
    storage_path    TEXT            NOT NULL UNIQUE,
    is_confidential BOOLEAN         NOT NULL DEFAULT FALSE,
    created_by      TEXT            NOT NULL,
    created_at      TIMESTAMPTZ     NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_documents_department ON documents (department);
CREATE INDEX IF NOT EXISTS idx_documents_created_at ON documents (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_documents_created_by ON documents (created_by);

-- ---------------------------------------------------------------------
-- Vector store for semantic retrieval over document chunks.
-- Inherits isolation transitively through the documents FK + its own policy.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS document_embeddings (
    id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id  UUID        NOT NULL REFERENCES documents (id) ON DELETE CASCADE,
    chunk_index  INTEGER     NOT NULL,
    content      TEXT        NOT NULL,
    embedding    VECTOR(1536),
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (document_id, chunk_index)
);

CREATE INDEX IF NOT EXISTS idx_document_embeddings_vector
    ON document_embeddings USING hnsw (embedding vector_cosine_ops);

-- ---------------------------------------------------------------------
-- Immutable access audit trail.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS access_audit_log (
    id          BIGGSERIAL_PLACEHOLDER
);
DROP TABLE IF EXISTS access_audit_log;

CREATE TABLE IF NOT EXISTS access_audit_log (
    id           BIGSERIAL    PRIMARY KEY,
    occurred_at  TIMESTAMPTZ  NOT NULL DEFAULT now(),
    actor        TEXT         NOT NULL,
    actor_role   TEXT         NOT NULL,
    actor_dept   TEXT,
    action       TEXT         NOT NULL,
    document_id  UUID
);

CREATE INDEX IF NOT EXISTS idx_audit_occurred_at ON access_audit_log (occurred_at DESC);

-- ---------------------------------------------------------------------
-- Privileges (PostgREST-style default grants are not assumed).
-- ---------------------------------------------------------------------
GRANT USAGE ON SCHEMA public TO kmrl_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON documents           TO kmrl_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON document_embeddings TO kmrl_app;
GRANT SELECT, INSERT                  ON access_audit_log   TO kmrl_app;
GRANT USAGE, SELECT ON SEQUENCE access_audit_log_id_seq     TO kmrl_app;

-- ---------------------------------------------------------------------
-- Row-Level Security
-- FORCE guarantees the policy also applies to the table owner, so no
-- migration/maintenance path can silently bypass departmental isolation.
-- ---------------------------------------------------------------------
ALTER TABLE documents            ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents            FORCE  ROW LEVEL SECURITY;
ALTER TABLE document_embeddings  ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_embeddings  FORCE  ROW LEVEL SECURITY;

DROP POLICY IF EXISTS departmental_isolation_policy ON documents;
CREATE POLICY departmental_isolation_policy
    ON documents
    AS PERMISSIVE
    FOR ALL
    TO PUBLIC
    USING (
        app_is_admin()
        OR department::TEXT = app_current_department()
    )
    WITH CHECK (
        app_is_admin()
        OR department::TEXT = app_current_department()
    );

DROP POLICY IF EXISTS embedding_isolation_policy ON document_embeddings;
CREATE POLICY embedding_isolation_policy
    ON document_embeddings
    AS PERMISSIVE
    FOR ALL
    TO PUBLIC
    USING (
        app_is_admin()
        OR EXISTS (
            SELECT 1
            FROM documents d
            WHERE d.id = document_embeddings.document_id
              AND d.department::TEXT = app_current_department()
        )
    )
    WITH CHECK (
        app_is_admin()
        OR EXISTS (
            SELECT 1
            FROM documents d
            WHERE d.id = document_embeddings.document_id
              AND d.department::TEXT = app_current_department()
        )
    );

COMMIT;

-- =====================================================================
-- Manual verification (run as kmrl_app):
--
--   BEGIN;
--     SET LOCAL app.current_department = 'FINANCE';
--     SET LOCAL app.current_role       = 'USER';
--     SELECT count(*) FROM documents;   -- FINANCE rows only
--   ROLLBACK;
--
--   BEGIN;
--     SET LOCAL app.current_department = 'FINANCE';
--     SET LOCAL app.current_role       = 'ADMIN';
--     SELECT count(*) FROM documents;   -- all rows
--   ROLLBACK;
-- =====================================================================
