export function WorkflowSection() {
  return (
    <>
<section className="w-full bg-surface-bright py-unit-2xl">
<div className="max-w-7xl mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
{/*Section Header*/}
<div className="max-w-3xl flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Orchestration Architecture</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">Autonomous Agent Pipeline Topology</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Structural routing diagram illustrating how documents flow through decentralized cognitive agents before creating authoritative approvals.
        </p>
</div>
{/*Architectural UI Flow Box*/}
<div className="bg-surface-container-lowest p-unit-lg md:p-unit-xl rounded-xl shadow-sm flex flex-col items-center">
{/*STEP 1: INGESTION*/}
<div className="w-full max-w-md bg-surface-bright p-unit-md rounded-lg shadow-sm flex items-center justify-between">
<div className="flex items-center gap-unit-sm">
<div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">attachment</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Input Artifact</span>
<div className="font-headline-md text-headline-md text-primary">PDF / Scan / Contract / Incident</div>
</div>
</div>
<span className="font-code-sm text-code-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">256-bit Encrypted</span>
</div>
{/*Connector Down 1*/}
<div className="h-8 w-0.5 bg-secondary my-1 relative">
<div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-secondary rotate-45"></div>
</div>
{/*STEP 2: MASTER ORCHESTRATOR*/}
<div className="w-full max-w-lg bg-primary text-on-primary p-unit-md rounded-lg shadow-md flex items-center justify-between">
<div className="flex items-center gap-unit-sm">
<div className="w-9 h-9 rounded bg-primary-container flex items-center justify-center text-tertiary-fixed">
<span className="material-symbols-outlined text-[20px]">hub</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">Primary Dispatch Controller</span>
<div className="font-headline-md text-headline-md text-white font-bold">AI ORCHESTRATOR AGENT</div>
</div>
</div>
<div className="flex items-center gap-unit-2xs font-code-sm text-code-sm text-tertiary-fixed">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
<span>Active Router</span>
</div>
</div>
{/*Branching Connector SVG Visual*/}
<div className="w-full max-w-4xl py-unit-xs hidden md:flex justify-center">
<svg className="w-full h-12 text-secondary" fill="none" preserveaspectratio="none" viewbox="0 0 768 48">
{/*Center drop*/}
<path d="M384 0 V24 M128 24 H640 M128 24 V48 M384 24 V48 M640 24 V48" stroke="currentColor" stroke-dasharray="4 4" stroke-width="2" /></path>
</svg>
</div>
{/*STEP 3: THREE PARALLEL SPECIALIZED AGENTS*/}
<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-unit-base my-unit-xs">
{/*Sub-Agent 1*/}
<div className="bg-surface-bright p-unit-md rounded-lg shadow-sm flex flex-col gap-unit-xs">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-secondary text-[22px]">label_important</span>
<span className="font-code-sm text-code-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Conf: 99.8%</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary">Classification Agent</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Infers metadata taxonomy and identifies whether docket relates to Civil, Signal, or Revenue.
            </p>
<div className="mt-unit-2xs bg-surface-container-lowest p-unit-xs rounded font-code-sm text-code-sm text-primary">
              tag: "ROLLING-STOCK-MAINT"
            </div>
</div>
{/*Sub-Agent 2*/}
<div className="bg-surface-bright p-unit-md rounded-lg shadow-sm flex flex-col gap-unit-xs">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-secondary text-[22px]">table_rows</span>
<span className="font-code-sm text-code-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">24 Tables Extr</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary">Extraction Agent</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Parses vendor GST numbers, milestones, torque ratings, warranty dockets, and ledger entries.
            </p>
<div className="mt-unit-2xs bg-surface-container-lowest p-unit-xs rounded font-code-sm text-code-sm text-primary">
              inv_total: "₹1,42,80,000"
            </div>
</div>
{/*Sub-Agent 3*/}
<div className="bg-surface-bright p-unit-md rounded-lg shadow-sm flex flex-col gap-unit-xs">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-secondary text-[22px]">security</span>
<span className="font-code-sm text-code-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Clause Scan</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary">Risk &amp; Clause Agent</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Flags missing bank guarantees, late penalty clauses, and non-compliance with KMRL standards.
            </p>
<div className="mt-unit-2xs bg-surface-container-lowest p-unit-xs rounded font-code-sm text-code-sm text-primary">
              clause_14: "PASS WITH NOTE"
            </div>
</div>
</div>
{/*Reverse Branching Connector SVG Visual*/}
<div className="w-full max-w-4xl py-unit-xs hidden md:flex justify-center">
<svg className="w-full h-12 text-secondary" fill="none" preserveaspectratio="none" viewbox="0 0 768 48">
<path d="M128 0 V24 M640 0 V24 M384 0 V24 M128 24 H640 M384 24 V48" stroke="currentColor" stroke-dasharray="4 4" stroke-width="2" /></path>
</svg>
</div>
{/*STEP 4: ROUTING AGENT*/}
<div className="w-full max-w-lg bg-surface-container-high p-unit-md rounded-lg shadow-sm flex items-center justify-between my-unit-2xs">
<div className="flex items-center gap-unit-sm">
<div className="w-9 h-9 rounded bg-secondary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">call_split</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-secondary-container uppercase font-semibold">Autonomous Escalation Unit</span>
<div className="font-headline-md text-headline-md text-primary font-bold">WORKFLOW ROUTING AGENT</div>
</div>
</div>
<span className="font-code-sm text-code-sm bg-surface-container-lowest px-unit-xs py-0.5 rounded text-primary">Policy Match: KMRL-R09</span>
</div>
{/*Connector Down 2*/}
<div className="h-8 w-0.5 bg-secondary my-1 relative">
<div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-secondary rotate-45"></div>
</div>
{/*STEP 5: FINAL ACTION CONSUMER*/}
<div className="w-full max-w-2xl bg-surface-container p-unit-base rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-unit-sm">
<div className="flex items-center gap-unit-sm">
<div className="w-9 h-9 rounded bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Institutional Outflow</span>
<span className="font-headline-md text-headline-md text-primary">Automated Action Execution</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-unit-xs">
<span className="font-label-sm text-label-sm bg-surface-container-lowest text-primary px-unit-xs py-1 rounded shadow-sm font-semibold">Task Created</span>
<span className="font-label-sm text-label-sm bg-surface-container-lowest text-primary px-unit-xs py-1 rounded shadow-sm font-semibold">3-Tier Approval Sent</span>
<span className="font-label-sm text-label-sm bg-surface-container-lowest text-secondary px-unit-xs py-1 rounded shadow-sm font-semibold">Audit Ledger Synced</span>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
