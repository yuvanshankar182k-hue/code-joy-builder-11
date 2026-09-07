export function DepartmentsSection({ onLogin }: { onLogin: (dept?: string) => void }) {
  return (
    <>
<section className="w-full bg-surface-bright py-unit-2xl" id="departments">
<div className="max-w-7xl mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
{/*Section Header*/}
<div className="max-w-3xl flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Enterprise Scope</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">Built for KMRL's Key Departments</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Each directorate operates with tailored schemas, regulatory validation pipelines, and specific role boundaries.
        </p>
</div>
{/*5 Department Bento / Grid Cards*/}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-unit-base">
{/*Dept 1: Engineering (ENG)*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex flex-col gap-unit-sm">
<div className="flex items-center justify-between">
<span className="font-code-sm text-code-sm bg-primary text-on-primary px-unit-xs py-0.5 rounded font-bold">CODE: ENG</span>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">construction</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Engineering</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Technical reports, overhead catenary maintenance records, structural civil inspections, and rolling stock engineering dossiers.
            </p>
{/*Sample extracted tags*/}
<div className="flex flex-wrap gap-unit-2xs pt-unit-xs">
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Track Geometry</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">CAD Verification</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Sub-station Logs</span>
</div>
</div>
<button className="mt-unit-base pt-unit-xs flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors" onClick={() => onLogin("ENG")}>
<span>Explore Department Docs</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
{/*Dept 2: Operations (OPS)*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex flex-col gap-unit-sm">
<div className="flex items-center justify-between">
<span className="font-code-sm text-code-sm bg-primary text-on-primary px-unit-xs py-0.5 rounded font-bold">CODE: OPS</span>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">train</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Operations</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Daily metro operational dispatches, safety incident briefs, passenger flow reports, and Water Metro jetty logs.
            </p>
{/*Sample extracted tags*/}
<div className="flex flex-wrap gap-unit-2xs pt-unit-xs">
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">OCC Logs</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Water Metro Jetty</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Safety Logs</span>
</div>
</div>
<button className="mt-unit-base pt-unit-xs flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors" onClick={() => onLogin("OPS")}>
<span>Explore Department Docs</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
{/*Dept 3: Finance (FIN)*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex flex-col gap-unit-sm">
<div className="flex items-center justify-between">
<span className="font-code-sm text-code-sm bg-primary text-on-primary px-unit-xs py-0.5 rounded font-bold">CODE: FIN</span>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">account_balance</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Finance</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Contractor invoices, GST documentation, payment verification dockets, budget utilization statements, and statutory fiscal audits.
            </p>
{/*Sample extracted tags*/}
<div className="flex flex-wrap gap-unit-2xs pt-unit-xs">
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">3-Way Match</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">CVC Compliance</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Fiscal Audits</span>
</div>
</div>
<button className="mt-unit-base pt-unit-xs flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors" onClick={() => onLogin("FIN")}>
<span>Explore Department Docs</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
{/*Dept 4: Human Resources (HR)*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex flex-col gap-unit-sm">
<div className="flex items-center justify-between">
<span className="font-code-sm text-code-sm bg-primary text-on-primary px-unit-xs py-0.5 rounded font-bold">CODE: HR</span>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">badge</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Human Resources</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Staff personnel files, station operator training certifications, service rules, recruitment files, and administrative staff workflows.
            </p>
{/*Sample extracted tags*/}
<div className="flex flex-wrap gap-unit-2xs pt-unit-xs">
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Service Records</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Crew Rosters</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Training Accreditations</span>
</div>
</div>
<button className="mt-unit-base pt-unit-xs flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors" onClick={() => onLogin("HR")}>
<span>Explore Department Docs</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
{/*Dept 5: Projects (PRJ)*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all lg:col-span-2">
<div className="flex flex-col gap-unit-sm">
<div className="flex items-center justify-between">
<span className="font-code-sm text-code-sm bg-primary text-on-primary px-unit-xs py-0.5 rounded font-bold">CODE: PRJ</span>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">domain_verification</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Projects &amp; Metro Infrastructure</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Phase II Pink Line tender dossiers, civil construction milestones, land acquisition notifications, and French Development Agency (AFD) bilateral compliance dossiers.
            </p>
{/*Sample extracted tags*/}
<div className="flex flex-wrap gap-unit-2xs pt-unit-xs">
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Phase 2 Kakkanad Corridor</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">Tender Evaluation</span>
<span className="font-label-sm text-label-sm bg-surface-container px-unit-xs py-0.5 rounded text-primary">EIA Environmental Clearances</span>
</div>
</div>
<button className="mt-unit-base pt-unit-xs flex items-center justify-between text-secondary hover:text-primary font-label-md text-label-md transition-colors" onClick={() => onLogin("PRJ")}>
<span>Explore Department Docs</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
    </>
  );
}
