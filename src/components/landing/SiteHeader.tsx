import { useEffect, useState } from "react";

type Props = {
  onLogin?: (dept?: string) => void;
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "platform", label: "Platform" },
  { id: "departments", label: "Departments" },
  { id: "ai-capabilities", label: "AI Capabilities" },
  { id: "security", label: "Security" },
  { id: "about", label: "About" },
];

export function SiteHeader({ onLogin }: Props) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + 140;
      let current = NAV[0].id;
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= marker) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(11,37,69,0.06)]">
      <div className="bg-primary px-gutter-desktop py-unit-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
          <span>Government of Kerala &amp; Ministry of Housing and Urban Affairs Undertaking</span>
          <div className="flex items-center gap-unit-md font-code-sm text-code-sm text-primary-fixed-dim">
            <span className="flex items-center gap-unit-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>KMRL Enterprise AI
              Gateway
            </span>
            <span>ISO 27001 Certified</span>
          </div>
        </div>
      </div>
      <div className="h-16 max-w-7xl mx-auto px-gutter-desktop flex items-center justify-between gap-unit-base">
        <div className="flex items-center gap-unit-md">
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md text-primary leading-tight tracking-tight">
              Kochi Metro Rail Limited
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Intelligent Document Management Platform
            </span>
          </div>
          <button
            type="button"
            className="hidden md:inline-flex items-center gap-unit-xs border border-outline-variant hover:border-secondary text-primary font-label-md text-label-md px-unit-sm py-unit-xs rounded-lg transition-colors"
            onClick={() => onLogin?.()}
          >
            <span className="material-symbols-outlined text-[18px]">badge</span>
            <span>Employee ID</span>
          </button>
        </div>
        <nav className="hidden lg:flex items-center gap-unit-lg h-full">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActive(item.id)}
                className={
                  isActive
                    ? "font-label-md text-label-md text-secondary border-b-2 border-secondary font-bold transition-colors py-unit-sm"
                    : "font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-unit-sm border-b-2 border-transparent"
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-unit-md">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-unit-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-unit-base py-unit-sm rounded-lg transition-colors shadow-sm"
            onClick={() => onLogin?.()}
          >
            Employee Login
          </button>
          <div className="w-8 h-8 rounded-full bg-primary text-primary-fixed flex items-center justify-center font-label-sm text-label-sm ring-1 ring-outline-variant">
            KM
          </div>
        </div>
      </div>
    </header>
  );
}
