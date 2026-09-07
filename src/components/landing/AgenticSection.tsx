export function AgenticSection() {
  return (
    <>
<section className="w-full bg-surface-container-low py-unit-2xl">
<div className="max-w-7xl mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
{/*Section Header*/}
<div className="max-w-3xl flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Active Operational Agency</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">Agentic AI for Document Intelligence</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Unlike passive optical character recognition software, KMRL Agentic AI actively orchestrates approvals, flags compliance infractions, and triggers downstream operational tasks.
        </p>
</div>
{/*6 Capability Cards*/}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-unit-base">
{/*1. Classify*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">category</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">1. Classify</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Identifies document type, issuing authority, sensitivity clearance, and relevant KMRL operational department with high confidence scores.
          </p>
<div className="mt-auto pt-unit-xs font-code-sm text-code-sm text-secondary">
            Score: &gt;99.2% Taxonomic Precision
          </div>
</div>
{/*2. Extract*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">data_object</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">2. Extract</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Transforms unstructured engineering PDFs, scanned bills, and vendor blueprints into structured tabular databases without manual typing.
          </p>
<div className="mt-auto pt-unit-xs font-code-sm text-code-sm text-secondary">
            Output: JSON / ISO 8601 / GeoJSON
          </div>
</div>
{/*3. Summarize*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">short_text</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">3. Summarize</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Generates concise executive synopses of 300+ page technical audits and civil engineering specifications for station directors.
          </p>
<div className="mt-auto pt-unit-xs font-code-sm text-code-sm text-secondary">
            Context: Contextual Executive Bulletins
          </div>
</div>
{/*4. Detect Risks*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">gavel</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">4. Detect Risks</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Automatically surfaces missing indemnities, penalty clauses, safety violations, deviations from RDSO standards, and liability overlaps.
          </p>
<div className="mt-auto pt-unit-xs font-code-sm text-code-sm text-secondary">
            Rules: RDSO / CVC Standard Guidelines
          </div>
</div>
{/*5. Monitor Deadlines*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">event_repeat</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">5. Monitor Deadlines</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Detects key statutory dates, warranty expires, bank guarantee extensions, and tender submission cutoffs, generating proactive alerts.
          </p>
<div className="mt-auto pt-unit-xs font-code-sm text-code-sm text-secondary">
            Notification: Real-time Intranet Escalation
          </div>
</div>
{/*6. Execute Workflows*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">dynamic_form</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">6. Execute Workflows</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Creates sign-off tasks, routes multi-level clearance tickets to designated officers, and logs verifiable approvals on the ledger.
          </p>
<div className="mt-auto pt-unit-xs font-code-sm text-code-sm text-secondary">
            Action: 1-Click Institutional Approvals
          </div>
</div>
</div>
</div>
</section>
    </>
  );
}
