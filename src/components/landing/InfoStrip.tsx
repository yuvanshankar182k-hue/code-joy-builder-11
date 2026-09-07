export function InfoStrip() {
  return (
    <>
<section className="w-full bg-surface-container-low py-unit-base shadow-sm">
<div className="max-w-7xl mx-auto px-gutter-desktop">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-unit-base">
{/*Item 1*/}
<div className="flex items-center gap-unit-sm bg-surface-container-lowest p-unit-md rounded-lg shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">corporate_fare</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-primary">5 Key Wings</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Integrated Directorate Ops</span>
</div>
</div>
{/*Item 2*/}
<div className="flex items-center gap-unit-sm bg-surface-container-lowest p-unit-md rounded-lg shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[24px]">psychology</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-primary">Agentic Models</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Autonomous Document Intelligence</span>
</div>
</div>
{/*Item 3*/}
<div className="flex items-center gap-unit-sm bg-surface-container-lowest p-unit-md rounded-lg shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">shield</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-primary">Role-Based RBAC</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Granular Cryptographic Isolation</span>
</div>
</div>
{/*Item 4*/}
<div className="flex items-center gap-unit-sm bg-surface-container-lowest p-unit-md rounded-lg shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[24px]">account_tree</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-primary">Closed Loop</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Automated Workflow Routing</span>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
