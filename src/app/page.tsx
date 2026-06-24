import { Suspense } from "react";
import type { Metadata } from "next";

// SEO Metadata (Grade A+)
export const metadata: Metadata = {
  title: "Agence Web Biarritz | Création Site Internet Côte Basque - WaveIA",
  description: "Agence web locale spécialisée en création de sites internet, SEO et communication digitale. Tarifs transparents dès 790€. Biarritz, Bayonne, Anglet.",
  openGraph: {
    title: "WaveIA | Agence Web Premium Pays Basque",
    description: "Sites web sur-mesure à partir de 790€. Score PageSpeed 100/100. Support local 24/7.",
    url: "https://waveia.fr",
    type: "website",
  },
  keywords: ["agence web biarritz", "création site internet pays basque", "seo bayonne", "agence digitale anglet", "développement web côte basque"],
};


import { HeroWrapper } from "@/components/sections/HeroWrapper";
import { StatsBand } from "@/components/sections/StatsBand";
import { ArchitectureBlock } from "@/components/sections/ArchitectureBlock";
import { ServicesBlock } from "@/components/sections/ServicesBlock";
import { MethodBlock } from "@/components/sections/MethodBlock";
import { WhyChooseUsBlock } from "@/components/sections/WhyChooseUsBlock";
import { WhyChooseUsFAQ } from "@/components/sections/WhyChooseUsFAQ";
import { WhyChooseUsCTA } from "@/components/sections/WhyChooseUsCTA";
import { ProcessBlock } from "@/components/sections/ProcessBlock";
import { ModulesGridBlock } from "@/components/sections/ModulesGridBlock";
import { AddonsBlock } from "@/components/sections/AddonsBlock";
import { PlatformCarouselBlock } from "@/components/sections/PlatformCarouselBlock";
import { AnimatedFeatures } from "@/components/sections/AnimatedFeatures";
import { AnimatedServices } from "@/components/sections/AnimatedServices";
import { AnimatedTestimonials } from "@/components/sections/AnimatedTestimonials";
import { AnimatedLocalSection } from "@/components/sections/AnimatedLocalSection";
import { ServicesTripartite } from "@/components/sections/ServicesTripartite";
import { ServicesInteractiveBlock } from "@/components/sections/ServicesInteractiveBlock";
import { WaveBento } from "@/components/sections/WaveBento";
import { LocalExpertsBlock } from "@/components/sections/CreationSiteDetails";
import { WaveDiagnosticForm } from "@/components/sections/WaveDiagnosticForm";
import { CreationRefonteBlock } from "@/components/sections/CreationRefonteBlock";
import { ReferencementVisibiliteBlock } from "@/components/sections/ReferencementVisibiliteBlock";
import { CommunicationIdentiteBlock } from "@/components/sections/CommunicationIdentiteBlock";
import { HomePageRealisationsBlock } from "@/components/sections/HomePageRealisationsBlock";
import { InterventionZone } from "@/components/sections/InterventionZone";
import { AgencyStatsBlock } from "@/components/templates/AgencyStatsBlock";
import { ComparisonTable } from "@/components/templates/ComparisonTable";
import { PricingPreviewHome } from "@/components/sections/PricingPreviewHome";
import { AGENCY_STATS, AGENCY_COMPARISON } from "@/lib/data";
import {
  TestimonialsSkeleton,
  LocalSectionSkeleton,
} from "@/components/skeletons/HomepageSkeletons";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* AIDA: ATTENTION - Hero */}
      <HeroWrapper />

      {/* STATS BAND (Reassurance) */}
      <StatsBand />

      {/* AIDA: INTEREST - Nos Services (Tripartite) */}
      <ServicesTripartite />

      {/* NOTRE METHODE BLOCK */}
      <MethodBlock />

      {/* POURQUOI NOUS CHOISIR */}
      <WhyChooseUsBlock />
      <WhyChooseUsFAQ />
      <WhyChooseUsCTA />

      {/* ARCHITECTURE BLOCK */}
      <ArchitectureBlock />

      {/* SERVICES BLOCK */}
      <ServicesBlock />

      {/* PROCESS BLOCK */}
      <ProcessBlock />

      {/* MODULES GRID BLOCK */}
      <ModulesGridBlock />

      {/* ADDONS BLOCK */}
      <AddonsBlock />

      {/* PLATFORM CAROUSEL BLOCK */}
      <PlatformCarouselBlock />

      {/* NOUVEAU BLOC SERVICES INTERACTIF */}
      <ServicesInteractiveBlock />

      {/* WAVE BENTO - Ingénierie web */}
      <WaveBento />

      {/* AIDA: INTEREST - Diagnostic IA */}
      <WaveDiagnosticForm />

      {/* AIDA: INTEREST - Création & Refonte */}
      <CreationRefonteBlock />

      {/* AIDA: INTEREST - SEO & Visibilité */}
      <ReferencementVisibiliteBlock />

      {/* AIDA: INTEREST - Communication & Identité */}
      <CommunicationIdentiteBlock />

      {/* AIDA: DESIRE - Nos Réalisations Carousel */}
      <HomePageRealisationsBlock />

      {/* ZONE D'INTERVENTION CÔTE BASQUE */}
      <InterventionZone />

      {/* AIDA: ACTION - Local CTA */}
      <Suspense fallback={<LocalSectionSkeleton />}>
        <AnimatedLocalSection />
      </Suspense>

      {/* AIDA: DESIRE - Local Experts */}
      <LocalExpertsBlock />

      {/* AIDA: INTEREST/DESIRE - How we do it */}
      <AnimatedFeatures />

      {/* AIDA: DESIRE - Social Proof */}
      <Suspense fallback={<TestimonialsSkeleton />}>
        <AnimatedTestimonials />
      </Suspense>

      {/* AIDA: DESIRE - Pricing Transparency */}
      <PricingPreviewHome />

      {/* AIDA: DESIRE - Competitive Advantage */}
      <ComparisonTable 
        title="Pourquoi WaveIA ?"
        subtitle="Engineering vs Agence Classique"
        competitors={AGENCY_COMPARISON.competitors}
        rows={AGENCY_COMPARISON.rows}
      />

      {/* AIDA: INTEREST - Proof (Stats) */}
      <AgencyStatsBlock 
        title="Des Résultats Mesurables"
        metrics={AGENCY_STATS.metrics}
      />

      {/* AIDA: DESIRE - Services Portfolio */}
      <AnimatedServices />

    </div>
  );
}