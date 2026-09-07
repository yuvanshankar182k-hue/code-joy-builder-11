import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";

import { SiteHeader } from "@/components/landing/SiteHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { InfoStrip } from "@/components/landing/InfoStrip";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { DepartmentsSection } from "@/components/landing/DepartmentsSection";
import { AgenticSection } from "@/components/landing/AgenticSection";
import { WorkflowSection } from "@/components/landing/WorkflowSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { CtaSection } from "@/components/landing/CtaSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { LoginModal } from "@/components/landing/LoginModal";

const title = "KMRL Intelligent Document Management Platform";
const description =
  "Agentic AI document intelligence for Kochi Metro Rail Limited: organize, analyze, route and act on engineering, operations, finance, HR and project documents.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [department, setDepartment] = useState("ENG");

  const onLogin = useCallback((dept?: string) => {
    if (dept) setDepartment(dept);
    setModalOpen(true);
  }, []);

  const onClose = useCallback(() => setModalOpen(false), []);

  return (
    <div className="bg-background font-body-md text-on-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          <HeroSection onLogin={onLogin} />
          <InfoStrip />
          <ProblemSection />
          <SolutionSection />
          <DepartmentsSection onLogin={onLogin} />
          <AgenticSection />
          <WorkflowSection />
          <SecuritySection />
          <CtaSection onLogin={onLogin} />
        </div>
      </main>
      <SiteFooter onLogin={onLogin} />
      <LoginModal open={modalOpen} department={department} onClose={onClose} />
    </div>
  );
}
