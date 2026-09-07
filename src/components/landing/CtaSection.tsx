export function CtaSection({ onLogin }: { onLogin: (dept?: string) => void }) {
  return (
    <>
<section className="w-full bg-surface-container-lowest py-unit-2xl">
<div className="max-w-7xl mx-auto px-gutter-desktop">
<div className="bg-primary text-on-primary rounded-xl p-unit-xl md:p-unit-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-unit-xl relative overflow-hidden">
{/*Ambient Water Metro / Rail Abstract Line*/}
<div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-2xl flex flex-col gap-unit-sm relative z-10">
<span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">Civic Operational Excellence</span>
<h2 className="font-headline-xl text-headline-xl text-white font-bold">Transform KMRL Document Operations</h2>
<p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
            A centralized intelligent platform for managing organizational documents, workflows, statutory risks, and transit operational knowledge across Kochi Metro Rail Limited.
          </p>
</div>
<div className="flex flex-col sm:flex-row gap-unit-sm shrink-0 relative z-10 w-full sm:w-auto">
<button className="inline-flex items-center justify-center gap-unit-xs bg-secondary hover:bg-secondary-container hover:text-on-secondary-container text-white font-label-md text-label-md px-unit-xl py-unit-base rounded-lg transition-all shadow-md" onClick={() => onLogin()}>
<span className="material-symbols-outlined text-[20px]">login</span>
<span>Access Employee Portal</span>
</button>
</div>
</div>
</div>
</section>
    </>
  );
}
