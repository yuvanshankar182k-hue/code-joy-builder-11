export function SiteFooter({ onLogin }: { onLogin: (dept?: string) => void }) {
  return (
    <>
<footer className="w-full bg-primary text-on-primary pt-unit-xl pb-unit-lg mt-unit-2xl">
<div className="max-w-7xl mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
{/*Upper Footer Grid*/}
<div className="grid grid-cols-1 md:grid-cols-4 gap-unit-xl">
{/*Col 1: Platform Brand Identity*/}
<div className="flex flex-col gap-unit-xs md:col-span-1">
<div className="flex items-center gap-unit-xs">
<span className="material-symbols-outlined text-secondary text-[24px]">directions_subway</span>
<span className="font-headline-md text-headline-md text-primary-fixed">KMRL Agentic AI</span>
</div>
<span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">Kochi Metro Rail Limited</span>
<p className="font-body-sm text-body-sm text-on-primary-container mt-unit-2xs leading-relaxed">
            Intelligent Document Intelligence &amp; Workflow Management Platform. Supporting multi-modal municipal transit governance across Kerala.
          </p>
</div>
{/*Col 2: Institutional Nav*/}
<div className="flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold mb-unit-2xs">Platform Navigation</span>
<a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" href="#">Home</a>
<a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" href="#platform-solution">Platform</a>
<a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" href="#departments">Departments</a>
<a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" href="#security">Security</a>
<button className="text-left font-body-sm text-body-sm text-secondary-fixed hover:text-on-primary transition-colors" onClick={() => onLogin()}>Employee Login</button>
</div>
{/*Col 3: Operational Wings*/}
<div className="flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold mb-unit-2xs">Operational Wings</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Engineering (ENG)</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Operations (OPS)</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Finance &amp; Tenders (FIN)</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Human Resources (HR)</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Phase II Projects (PRJ)</span>
</div>
{/*Col 4: Statutory Compliance*/}
<div className="flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold mb-unit-2xs">Statutory Standards</span>
<span className="font-body-sm text-body-sm text-on-primary-container">ISO/IEC 27001 Certified System</span>
<span className="font-body-sm text-body-sm text-on-primary-container">CVC Guidelines for E-Procurement</span>
<span className="font-body-sm text-body-sm text-on-primary-container">RDSO Safety Technical Approvals</span>
<span className="font-body-sm text-body-sm text-on-primary-container">National Cyber Security Framework</span>
</div>
</div>
{/*Lower Footer Note & Copyright*/}
<div className="pt-unit-base flex flex-col md:flex-row items-center justify-between gap-unit-sm font-label-sm text-label-sm text-on-primary-container">
<p>© 2026 KMRL Agentic AI. Kochi Metro Rail Limited. All rights reserved.</p>
<div className="flex items-center gap-unit-md font-code-sm text-code-sm">
<span>Build: v4.8.2-PROD</span>
<span>•</span>
<span>System Health: 100% OPERATIONAL</span>
</div>
</div>
</div>
</footer>
{/*Vanilla JavaScript for Micro-interactions and Modal Control*/}

</div></main><footer className="w-full bg-primary text-on-primary mt-unit-2xl"><div className="max-w-7xl mx-auto px-gutter-desktop pt-unit-2xl pb-unit-xl"><div className="grid grid-cols-1 md:grid-cols-4 gap-unit-xl pb-unit-xl border-b border-primary-container"><div className="flex flex-col gap-unit-sm md:col-span-1"><span className="font-headline-md text-headline-md text-primary-fixed">KMRL DocuIntel</span><p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">Statutory workflow automation, tender evaluation synthesis, and predictive asset records infrastructure for Kochi Metro Rail Limited.</p><span className="font-code-sm text-code-sm text-tertiary-fixed-dim mt-unit-xs">System Node: KMRL-BLD-PROD-04</span></div><div className="flex flex-col gap-unit-xs"><span className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed mb-unit-xs">Operational Wings</span><a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="departments" href="#">Kochi Water Metro Directorate</a><a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="departments" href="#">Rolling Stock &amp; Traction Systems</a><a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="departments" href="#">Civil Works &amp; Infrastructure Tenders</a><a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="departments" href="#">Operations Control Command Center</a></div><div className="flex flex-col gap-unit-xs"><span className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed mb-unit-xs">Assurance &amp; Protocols</span><a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="security" href="#">CVC Compliance Directives</a><a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="security" href="#">Air-Gapped Document Isolation</a><a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="security" href="#">Immutable Ledger Audit Trail</a><a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary transition-colors" data-path="security" href="#">STQC Certification Repository</a></div><div className="flex flex-col gap-unit-xs"><span className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed mb-unit-xs">Civic Enterprise Gateway</span><p className="font-body-sm text-body-sm text-on-primary-container">JLN Metro Station, 4th Floor, Kaloor, Kochi, Ernakulam, Kerala - 682017</p><span className="font-body-sm text-body-sm text-on-primary-container">NIC Helpdesk: 0484-2846700</span><a className="inline-block mt-unit-xs font-label-sm text-label-sm text-secondary-fixed hover:text-on-primary transition-colors uppercase" data-path="login" href="#">Restricted Staff Portal →</a></div></div><div className="pt-unit-base flex flex-col md:flex-row items-center justify-between gap-unit-sm font-label-sm text-label-sm text-on-primary-container"><p>© 2025 Kochi Metro Rail Limited. An Enterprise AI Platform for Public Infrastructure.</p><div className="flex items-center gap-unit-md"><a className="hover:text-on-primary transition-colors" data-path="security" href="#">Information Security Policy</a><span className="text-primary-container">•</span><a className="hover:text-on-primary transition-colors" data-path="security" href="#">RTI Statutory Compliance</a><span className="text-primary-container">•</span><a className="hover:text-on-primary transition-colors" data-path="about" href="#">Terms of Service</a></div></div></div></footer>
    </>
  );
}
