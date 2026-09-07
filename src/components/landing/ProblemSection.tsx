export function ProblemSection() {
  return (
    <>
<section className="w-full bg-surface-bright py-unit-2xl">
<div className="max-w-7xl mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
{/*Section Header*/}
<div className="max-w-3xl flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Institutional Bottlenecks</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">Addressing Document Overload at KMRL</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          As a multi-modal mass transit utility running metro rail, waterways, and feeder bus networks, Kochi Metro Rail Limited processes hundreds of technical, civil, and regulatory dossiers daily.
        </p>
</div>
{/*4 Problem Cards Grid*/}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-unit-base">
{/*Problem 1*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-unit-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">folder_copy</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Document Overload</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Large volumes of reports, contracts, records, correspondence, and operational documents make vital municipal information difficult to manage and index in standard storage.
            </p>
</div>
<div className="mt-unit-md pt-unit-xs font-code-sm text-code-sm text-error flex items-center gap-unit-2xs">
<span className="material-symbols-outlined text-[16px]">priority_high</span>
<span>Est. 1,400+ pages / day</span>
</div>
</div>
{/*Problem 2*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-unit-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">hourglass_bottom</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Manual Processing</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Engineers and civil officers spend significant hours reading, classifying, extracting, and cross-referencing information from unstructured technical scans.
            </p>
</div>
<div className="mt-unit-md pt-unit-xs font-code-sm text-code-sm text-error flex items-center gap-unit-2xs">
<span className="material-symbols-outlined text-[16px]">timer</span>
<span>Over 3.5 hrs/officer/day</span>
</div>
</div>
{/*Problem 3*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-unit-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">hub</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Information Silos</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Critical data remains distributed across disparate directorates: civil contractors, signaling logs, and water metro asset dockets do not cross-talk seamlessly.
            </p>
</div>
<div className="mt-unit-md pt-unit-xs font-code-sm text-code-sm text-error flex items-center gap-unit-2xs">
<span className="material-symbols-outlined text-[16px]">link_off</span>
<span>Fragmented Repositories</span>
</div>
</div>
{/*Problem 4*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-unit-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">pending_actions</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Workflow Delays</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Important statutory approvals, maintenance deadlines, contract risks, and multi-tier escalations are prone to manual oversight and untracked bottlenecks.
            </p>
</div>
<div className="mt-unit-md pt-unit-xs font-code-sm text-code-sm text-error flex items-center gap-unit-2xs">
<span className="material-symbols-outlined text-[16px]">warning</span>
<span>Compliance Vulnerability</span>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
