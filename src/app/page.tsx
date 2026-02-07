import { Nav } from "@/components/nav";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { KpiSection } from "@/components/sections/kpis";
import { CompetitiveSection } from "@/components/sections/competitive";
import { PersonasSection } from "@/components/sections/personas";
import { FeaturesSection } from "@/components/sections/features";
import { ArchitectureSection } from "@/components/sections/architecture";
import { BuildVsBuySection } from "@/components/sections/build-vs-buy";
import { TimelineSection } from "@/components/sections/timeline-section";
import { PricingSection } from "@/components/sections/pricing";
import { RisksSection } from "@/components/sections/risks";
import { DecisionsSection } from "@/components/sections/decisions";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="lg:ml-56">
        <HeroSection />
        <ProblemSection />
        <KpiSection />
        <CompetitiveSection />
        <PersonasSection />
        <FeaturesSection />
        <ArchitectureSection />
        <BuildVsBuySection />
        <TimelineSection />
        <PricingSection />
        <RisksSection />
        <DecisionsSection />
      </main>
    </>
  );
}
