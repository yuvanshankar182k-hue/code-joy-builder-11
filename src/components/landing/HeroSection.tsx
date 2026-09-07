export function HeroSection({ onLogin }: { onLogin: (dept?: string) => void }) {
  return (
    <>
<section className="relative w-full bg-surface-bright overflow-hidden pt-unit-xl pb-unit-2xl" id="home">
<div className="max-w-7xl mx-auto px-gutter-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-center">
{/*Left Hero Narrative*/}
<div className="lg:col-span-6 flex flex-col gap-unit-base">
{/*Institutional Eyebrow*/}
<div className="inline-flex items-center gap-unit-xs self-start bg-surface-container px-unit-sm py-unit-2xs rounded-lg shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
              Kochi Metro Rail Limited | Public Sector Enterprise
            </span>
</div>
{/*Main Title*/}
<h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
            Intelligent Document Management for KMRL
          </h1>
{/*Primary & Secondary Copy*/}
<p className="font-body-lg text-body-lg text-secondary font-medium leading-relaxed">
            Transforming complex organizational documents into actionable intelligence with Agentic AI.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-normal">
            The platform helps KMRL departments securely organize, understand, analyze, route, and act on critical organizational documents across high-frequency urban transit corridors and infrastructure domains.
          </p>
{/*CTAs*/}
<div className="flex flex-wrap items-center gap-unit-md pt-unit-xs">
<button className="inline-flex items-center gap-unit-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-unit-lg py-unit-sm rounded-lg shadow-sm transition-all" onClick={() => onLogin()}>
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Employee Login</span>
</button>
<a className="inline-flex items-center gap-unit-xs bg-surface-container-lowest text-primary hover:bg-surface-container font-label-md text-label-md px-unit-lg py-unit-sm rounded-lg shadow-sm transition-all" href="#platform-solution">
<span>Explore Platform</span>
<span className="material-symbols-outlined text-[16px]">arrow_downward</span>
</a>
</div>
{/*Live Orchestrator Footnote*/}
<div className="flex items-center gap-unit-md pt-unit-xs">
<div className="flex items-center gap-unit-2xs font-code-sm text-code-sm text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
<span>Cluster: JLN-CORE-01</span>
</div>
<span className="text-outline-variant font-code-sm text-code-sm">•</span>
<div className="flex items-center gap-unit-2xs font-code-sm text-code-sm text-secondary">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span>Air-Gapped Intranet Ingestion Active</span>
</div>
</div>
</div>
{/*Right Terminal / HUD Live Visualization*/}
<div className="lg:col-span-6 relative">
{/*Background Glow Accent*/}
<div className="absolute -top-10 -right-10 w-96 h-96 bg-surface-container-high rounded-full blur-3xl opacity-60 pointer-events-none"></div>
{/*Institutional Document-Intelligence HUD*/}
<div className="relative bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">
{/*HUD Window Header*/}
<div className="bg-primary px-unit-base py-unit-xs flex items-center justify-between">
<div className="flex items-center gap-unit-sm">
<span className="w-2.5 h-2.5 rounded-full bg-error inline-block"></span>
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container inline-block"></span>
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed inline-block"></span>
<span className="font-code-sm text-code-sm text-primary-fixed ml-unit-xs tracking-wider">KMRL-AGENT-ORCHESTRATOR // DOC-PARSER</span>
</div>
<div className="flex items-center gap-unit-xs bg-primary-container px-unit-xs py-0.5 rounded">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping"></span>
<span className="font-code-sm text-code-sm text-primary-fixed uppercase">Real-Time</span>
</div>
</div>
{/*HUD Inner Canvas*/}
<div className="p-unit-base space-y-unit-md bg-surface-bright">
{/*Active Document Ingestion Card*/}
<div className="bg-surface-container-lowest p-unit-md rounded-lg shadow-sm flex flex-col gap-unit-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-unit-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">description</span>
<span className="font-label-md text-label-md text-primary font-bold">KMRL/ENG/2026/TRK-0841.pdf</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-high text-on-secondary-container px-unit-xs py-0.5 rounded font-semibold uppercase">
                    Stage: Parsing &amp; Synthesis
                  </span>
</div>
<div className="text-on-surface-variant font-body-sm text-body-sm">
                  Dossier: <span className="font-semibold text-primary">Line 2 Aluva-Pettah Ultrasonic Rail Inspection &amp; Traction Review</span>
</div>
{/*Live Parse Meter*/}
<div className="w-full bg-surface-container rounded-full h-1.5 mt-unit-2xs overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full w-4/5 animate-pulse"></div>
</div>
<div className="flex justify-between font-code-sm text-code-sm text-on-surface-variant">
<span>Extracting Structural Signatures (92/108 Pages)</span>
<span className="text-primary font-bold">85% Complete</span>
</div>
</div>
{/*Real-time Multi-Agent Telemetry Grid*/}
<div className="grid grid-cols-2 gap-unit-sm">
{/*Extraction Entity Slot*/}
<div className="bg-surface-container-lowest p-unit-sm rounded-lg shadow-sm flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Tender Clearance</span>
<div className="font-headline-md text-headline-md text-primary mt-unit-2xs">₹42.8 Cr</div>
</div>
<div className="flex items-center gap-unit-2xs mt-unit-xs font-code-sm text-code-sm text-secondary">
<span className="material-symbols-outlined text-[14px]">done_all</span>
<span>Verified CVC Threshold</span>
</div>
</div>
{/*Track Integrity Status*/}
<div className="bg-surface-container-lowest p-unit-sm rounded-lg shadow-sm flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Corridor Integrity</span>
<div className="font-headline-md text-headline-md text-primary mt-unit-2xs">99.98%</div>
</div>
<div className="flex items-center gap-unit-2xs mt-unit-xs font-code-sm text-code-sm text-secondary">
<span className="material-symbols-outlined text-[14px]">sensors</span>
<span>24 Track Sensors Synced</span>
</div>
</div>
</div>
{/*Terminal Event Stream Mock*/}
<div className="bg-primary p-unit-sm rounded-lg font-code-sm text-code-sm text-primary-fixed space-y-1">
<div className="flex items-center gap-unit-xs text-secondary-fixed">
<span>[09:42:11]</span>
<span>Agent-Classification: Tagged to Directorate of Rolling Stock &amp; Traction.</span>
</div>
<div className="flex items-center gap-unit-xs text-tertiary-fixed-dim">
<span>[09:42:15]</span>
<span>Agent-Extractor: 18 Key Metric tables vectorized to Schema 4.2.</span>
</div>
<div className="flex items-center gap-unit-xs text-primary-fixed">
<span>[09:42:19]</span>
<span>Agent-Risk: 0 Discrepancies detected against safety standard ISO-9001.</span>
</div>
</div>
{/*System Status Footer*/}
<div className="flex items-center justify-between pt-unit-xs font-code-sm text-code-sm text-on-surface-variant">
<span>Inference Latency: 42ms</span>
<span>Active Model: KMRL-Llama-Rail-70B-V3</span>
<span className="text-secondary font-semibold">Ready for Next Batch</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
