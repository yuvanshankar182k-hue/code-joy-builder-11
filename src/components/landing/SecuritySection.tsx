export function SecuritySection() {
  return (
    <>
<section className="w-full bg-surface-container-low py-unit-2xl" id="security">
<div className="max-w-7xl mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
{/*Section Header*/}
<div className="max-w-3xl flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Institutional Governance</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">Secure by Design</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Built under strict public sector data stewardship guidelines, ensuring complete sovereignty of KMRL's infrastructure and financial documentation.
        </p>
</div>
{/*6 Security Principle Cards*/}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-unit-base">
{/*Security 1*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">manage_accounts</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Role-Based Access Control</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Strict compartmentalization ensures that sensitive civil tender pricing or executive payroll is never accessible outside designated clearance levels.
          </p>
</div>
{/*Security 2*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">dataset</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Department-Level Data Isolation</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Logical database multi-tenancy ensures complete segregation across Operations, Projects, Finance, HR, and Engineering repositories.
          </p>
</div>
{/*Security 3*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">fingerprint</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Secure Authentication</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Zero-trust identity verification integrated seamlessly with KMRL Employee Intranet, SAML 2.0 single sign-on, and hardware token protocols.
          </p>
</div>
{/*Security 4*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">history_edu</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Immutable Audit Trail</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Every file ingestion, view, extraction, query, and administrative routing decision is recorded in an unalterable append-only audit log.
          </p>
</div>
{/*Security 5*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">policy</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Controlled Document Access</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Dynamic cryptographic watermarking with employee ID timestamps, view-only modes, and restricted external downloads prevent data leaks.
          </p>
</div>
{/*Security 6*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col gap-unit-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Enterprise Data Protection</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            End-to-end data encryption using AES-256 at rest and TLS 1.3 in transit, hosted entirely on sovereign domestic rail cloud infrastructure.
          </p>
</div>
</div>
{/*Infrastructure Security Photo & Fact Card*/}
<div className="bg-surface-container-lowest p-unit-md rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-12 gap-unit-base items-center">
<div className="md:col-span-4 rounded-lg overflow-hidden h-44">
<img className="w-full h-full object-cover" data-alt="High tech railway operations command control center in Kochi with engineers at workstations monitoring multi-screen wall displays showing track maps and real time telemetry in deep navy blue ambient lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5qwnwbMQUf9Omloqg1Br7o-PUguxC0-tITTMqS3LOP5Hya3PivBmahDXZHa5Ct8x2NPdJTAwR87v9a-BpNsVPiVlVfaVyD5azhcJ7J4JGpbcZK5IFUCsP8U7TCPD1XRg1RbZibIu892aXixFAQlhGXS5o2TBe2YXP2YK-aNuFA56mG0plsY0kVAVbzXPWDE7dYOuUnLi5IZri34zygCTEy7XHfbyP8T3LwFUqgATSMKbAQC6RE1MU3A"/>
</div>
<div className="md:col-span-8 flex flex-col gap-unit-xs">
<div className="flex items-center gap-unit-xs text-secondary font-semibold font-label-sm text-label-sm uppercase">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Operations Command Center (OCC) Integration</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary">Sovereign On-Premise Air-Gapped Deployment</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
            Document intelligence nodes are hosted within KMRL's private on-premise cloud at Muttom Depot and JLN Metro Command Center, ensuring that sensitive civil engineering blueprints and operational procedures never leave the transit network.
          </p>
</div>
</div>
</div>
</section>
{/*SECTION I: ROLE-BASED ACCESS HIERARCHY*/}
<section className="w-full bg-surface-bright py-unit-2xl">
<div className="max-w-7xl mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
{/*Section Header*/}
<div className="max-w-3xl flex flex-col gap-unit-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Governance Tiers</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">Role-Based Access Hierarchy</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Administrative control matrix ensuring clear separation of duties between central oversight, divisional heads, and operational field personnel.
        </p>
</div>
{/*3 Hierarchical Tiers*/}
<div className="grid grid-cols-1 md:grid-cols-3 gap-unit-base items-stretch">
{/*Tier 1: Super Admin*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-unit-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm bg-primary text-on-primary px-unit-xs py-0.5 rounded uppercase font-semibold">Tier 01</span>
<span className="material-symbols-outlined text-primary text-[28px]">admin_panel_settings</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Super Admin</h3>
<span className="font-body-sm text-body-sm text-secondary font-semibold">Central IT &amp; Executive Oversight</span>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Organization-wide administration, full system monitoring, global model tuning, user provisioning, and high-level audit governance.
            </p>
<div className="bg-surface-container-low p-unit-sm rounded-lg space-y-unit-2xs mt-unit-xs">
<div className="flex items-center gap-unit-2xs font-body-sm text-body-sm text-primary">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>All 5 Department Directories</span>
</div>
<div className="flex items-center gap-unit-2xs font-body-sm text-body-sm text-primary">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>System Policy Configuration</span>
</div>
<div className="flex items-center gap-unit-2xs font-body-sm text-body-sm text-primary">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Global Audit Ledger Access</span>
</div>
</div>
</div>
<div className="mt-unit-base pt-unit-xs font-code-sm text-code-sm text-on-surface-variant">
            Scope: KMRL Authority Wide
          </div>
</div>
{/*Tier 2: Department Admin*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-unit-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm bg-secondary text-white px-unit-xs py-0.5 rounded uppercase font-semibold">Tier 02</span>
<span className="material-symbols-outlined text-secondary text-[28px]">supervisor_account</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Department Admin</h3>
<span className="font-body-sm text-body-sm text-secondary font-semibold">Divisional Chief Engineers &amp; Managers</span>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Manage documents, workflows, approvals, and user permissions strictly within the assigned operational department.
            </p>
<div className="bg-surface-container-low p-unit-sm rounded-lg space-y-unit-2xs mt-unit-xs">
<div className="flex items-center gap-unit-2xs font-body-sm text-body-sm text-primary">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Departmental Document Approval</span>
</div>
<div className="flex items-center gap-unit-2xs font-body-sm text-body-sm text-primary">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Assign Field Tasks &amp; Milestones</span>
</div>
<div className="flex items-center gap-unit-2xs font-body-sm text-body-sm text-primary">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Departmental Audit Reports</span>
</div>
</div>
</div>
<div className="mt-unit-base pt-unit-xs font-code-sm text-code-sm text-on-surface-variant">
            Scope: Single Directorate (ENG / OPS / FIN / HR / PRJ)
          </div>
</div>
{/*Tier 3: Employee*/}
<div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-unit-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm bg-surface-container text-primary px-unit-xs py-0.5 rounded uppercase font-semibold">Tier 03</span>
<span className="material-symbols-outlined text-primary text-[28px]">person</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Employee</h3>
<span className="font-body-sm text-body-sm text-secondary font-semibold">Station Masters, Engineers, Officers</span>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Upload documents, access permitted files, complete assigned operational tasks, and interact with conversational document Q&amp;A.
            </p>
<div className="bg-surface-container-low p-unit-sm rounded-lg space-y-unit-2xs mt-unit-xs">
<div className="flex items-center gap-unit-2xs font-body-sm text-body-sm text-primary">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Document Upload &amp; Basic Query</span>
</div>
<div className="flex items-center gap-unit-2xs font-body-sm text-body-sm text-primary">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Personal Task Completion</span>
</div>
<div className="flex items-center gap-unit-2xs font-body-sm text-body-sm text-primary">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Authorized File Reference</span>
</div>
</div>
</div>
<div className="mt-unit-base pt-unit-xs font-code-sm text-code-sm text-on-surface-variant">
            Scope: Permitted Operational Queues
          </div>
</div>
</div>
</div>
</section>
    </>
  );
}
