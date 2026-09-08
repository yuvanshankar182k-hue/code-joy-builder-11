import { useEffect, useState, type FormEvent } from "react";

type Props = {
  open: boolean;
  department: string;
  onClose: () => void;
};

const DEPARTMENTS = [
  { code: "ENG", label: "Engineering (ENG) - Technical, Maintenance & Catenary" },
  { code: "OPS", label: "Operations (OPS) - Station Ops, OCC & Water Metro" },
  { code: "FIN", label: "Finance (FIN) - Accounts, Tenders & Invoices" },
  { code: "HR", label: "Human Resources (HR) - Personnel & Rostering" },
  { code: "PRJ", label: "Projects (PRJ) - Phase II Extension & Civil Works" },
];

export function LoginModal({ open, department, onClose }: Props) {
  const [dept, setDept] = useState(department || "ENG");
  const [empId, setEmpId] = useState("");
  const [feedback, setFeedback] = useState<{ text: string; tone: "pending" | "success" } | null>(
    null,
  );

  useEffect(() => {
    if (open) {
      setDept(department || "ENG");
      setFeedback(null);
    }
  }, [open, department]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const steps: { text: string; tone: "pending" | "success" }[] = [
      { text: `Verifying credentials for ${empId || "employee"}...`, tone: "pending" },
      { text: `Checking intranet access for ${dept} directory...`, tone: "pending" },
      { text: `Authenticated. Redirecting to ${dept} Workbench...`, tone: "success" },
    ];
    steps.forEach((step, i) => {
      window.setTimeout(() => setFeedback(step), i * 900);
    });
    window.setTimeout(onClose, steps.length * 900 + 900);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm flex items-center justify-center p-gutter-mobile"
      id="login-modal"
    >
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-primary text-on-primary p-unit-base flex items-center justify-between">
          <div className="flex items-center gap-unit-sm">
            <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-primary-fixed">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
            </div>
            <div>
              <span className="font-headline-md text-headline-md text-on-primary">
                KMRL Staff Portal
              </span>
              <div className="font-code-sm text-code-sm text-primary-fixed-dim">
                Secure Intranet Single Sign-On
              </div>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close login dialog"
            className="text-on-primary-container hover:text-on-primary transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <form className="p-unit-lg space-y-unit-md bg-surface-bright" onSubmit={onSubmit}>
          <div className="space-y-unit-2xs">
            <label
              className="font-label-md text-label-md text-primary font-semibold block"
              htmlFor="dept-select"
            >
              Select Operational Directorate
            </label>
            <select
              className="w-full h-10 px-unit-sm bg-surface-container-lowest text-primary font-body-md text-body-md rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              id="dept-select"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            >
              {DEPARTMENTS.map((d) => (
                <option key={d.code} value={d.code}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-unit-2xs">
            <label
              className="font-label-md text-label-md text-primary font-semibold block"
              htmlFor="emp-id"
            >
              KMRL Employee ID / NIC UID
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">
                badge
              </span>
              <input
                className="w-full h-10 pl-10 pr-unit-sm bg-surface-container-lowest text-primary font-body-md text-body-md rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                id="emp-id"
                placeholder="e.g. KMRL-2024-ENG-082"
                required
                type="text"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-unit-2xs">
            <div className="flex items-center justify-between">
              <label
                className="font-label-md text-label-md text-primary font-semibold block"
                htmlFor="emp-pwd"
              >
                Intranet Passcode / Smart Token
              </label>
              <a className="font-code-sm text-code-sm text-secondary hover:underline" href="#">
                Self-service Reset
              </a>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">
                lock
              </span>
              <input
                className="w-full h-10 pl-10 pr-unit-sm bg-surface-container-lowest text-primary font-body-md text-body-md rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                id="emp-pwd"
                placeholder="••••••••••••"
                required
                type="password"
              />
            </div>
          </div>

          <div className="bg-surface-container p-unit-sm rounded-lg flex items-start gap-unit-xs">
            <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
              info
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Authorized for KMRL personnel only. Access logged with IP address and hardware
              credential in compliance with institutional IT regulations.
            </p>
          </div>

          <button
            className="w-full h-11 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-md flex items-center justify-center gap-unit-xs transition-all"
            type="submit"
          >
            <span className="material-symbols-outlined text-[18px]">lock_open</span>
            <span>Authenticate with KMRL Intranet</span>
          </button>

          {feedback ? (
            <div
              className={
                feedback.tone === "pending"
                  ? "p-unit-xs rounded font-code-sm text-code-sm text-center bg-surface-container text-primary block"
                  : "p-unit-xs rounded font-code-sm text-code-sm text-center bg-primary text-primary-fixed block"
              }
            >
              {feedback.text}
            </div>
          ) : null}
        </form>

        <div className="bg-surface-container-low px-unit-lg py-unit-xs flex items-center justify-between font-code-sm text-code-sm text-on-surface-variant">
          <span>Gateway: KMRL-AUTH-NODE-A</span>
          <span>2FA Enforcement: ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
