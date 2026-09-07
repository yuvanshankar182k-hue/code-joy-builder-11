export function SolutionSection() {
  return (
    <>
<section className="w-full bg-surface-container-low py-unit-2xl scroll-mt-20" id="platform">
<div className="max-w-7xl mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
{/*Section Header with Autonomous Badge*/}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-base">
<div className="max-w-2xl flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">The Core System Architecture</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">From Documents to Decisions</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            A continuous, closed-loop processing lifecycle converting complex municipal transit papers into structured actions.
          </p>
</div>
<div className="self-start md:self-auto bg-surface-container-lowest px-unit-md py-unit-xs rounded-lg shadow-sm flex items-center gap-unit-xs">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
            Autonomous Agentic AI Execution Loop
          </span>
</div>
</div>
{/*5-Step Process Flow*/}
<div className="grid grid-cols-1 md:grid-cols-5 gap-unit-base relative">
{/*Step 1: Upload*/}
<div className="bg-surface-container-lowest p-unit-base rounded-xl shadow-sm flex flex-col gap-unit-sm relative">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">01</span>
<span className="material-symbols-outlined text-secondary text-[22px]">upload_file</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Upload</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Securely submit organizational documents via web, air-gapped FTP, or batch scanner integration.
          </p>
<div className="mt-auto font-code-sm text-code-sm text-secondary pt-unit-xs">PDF / CAD / TIFF / Docx</div>
</div>
{/*Step 2: Understand*/}
<div className="bg-surface-container-lowest p-unit-base rounded-xl shadow-sm flex flex-col gap-unit-sm relative">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">02</span>
<span className="material-symbols-outlined text-secondary text-[22px]">auto_stories</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Understand</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            AI identifies document classification, statutory tags, language, and institutional department relevance.
          </p>
<div className="mt-auto font-code-sm text-code-sm text-secondary pt-unit-xs">Neural Semantic Parser</div>
</div>
{/*Step 3: Analyze*/}
<div className="bg-surface-container-lowest p-unit-base rounded-xl shadow-sm flex flex-col gap-unit-sm relative">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">03</span>
<span className="material-symbols-outlined text-secondary text-[22px]">analytics</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Analyze</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Extract tabular telemetry, executive summaries, contractual liability risks, and strict milestone deadlines.
          </p>
<div className="mt-auto font-code-sm text-code-sm text-secondary pt-unit-xs">Entity Extraction Engine</div>
</div>
{/*Step 4: Route*/}
<div className="bg-surface-container-lowest p-unit-base rounded-xl shadow-sm flex flex-col gap-unit-sm relative">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">04</span>
<span className="material-symbols-outlined text-secondary text-[22px]">alt_route</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Route</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Automatically direct documents and contextual briefs directly to responsible wing leads and station masters.
          </p>
<div className="mt-auto font-code-sm text-code-sm text-secondary pt-unit-xs">RBAC Matrix Dispatch</div>
</div>
{/*Step 5: Act*/}
<div className="bg-surface-container-lowest p-unit-base rounded-xl shadow-sm flex flex-col gap-unit-sm relative">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">05</span>
<span className="material-symbols-outlined text-secondary text-[22px]">task_alt</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Act</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Create workflows, approval chains, SMS/intranet alerts, and audit follow-up actions without manual lag.
          </p>
<div className="mt-auto font-code-sm text-code-sm text-secondary pt-unit-xs">Action Escalation Hub</div>
</div>
</div>
{/*Photographic Illustration Card for Public Transport Infrastructure Context*/}
<div className="bg-surface-container-lowest p-unit-md rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-unit-md items-center">
<div className="md:col-span-1 rounded-lg overflow-hidden h-44">
<img className="w-full h-full object-cover" data-alt="High quality architectural photo of Kochi Metro rail viaduct cutting through modern lush green cityscape with sleek blue and silver train traversing elevated track in bright morning light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQEEw7E6taBAUmcCBs9m3jw8-pPe7c5YJ67OzZX1NRET3hSbRUuR0dzKtsQ7V7h1omwnUm7rC9LJWcfZsopAWTcYTA3KqT0h0AQ8o4kxYlvt4xKKM5WdO8F1u_hNOKL0ml-KkDU4eRQAsIf-Mek4ylSNp9jg4KTMyByzIuj0oy7AOjWc1k9x6zs6leDcofrK06hsJ8_dPbCglWYPui49cBhQtqpN904SHRq1oYtt81ImmQFmUz5EDq7w"/>
</div>
<div className="md:col-span-2 flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Infrastructure Modernization</span>
<h4 className="font-headline-md text-headline-md text-primary">Unified Multimodal Intelligence Framework</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
            From Line 1 Viaduct stress tests to Water Metro battery charging telemetry dockets, the AI platform maintains a single verifiable record across all 25 metro stations and 15 water metro terminals.
          </p>
</div>
</div>
</div>
</section>
    </>
  );
}
