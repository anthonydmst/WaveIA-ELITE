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
import { AnimatedFeatures } from "@/components/sections/AnimatedFeatures";
import { AnimatedServices } from "@/components/sections/AnimatedServices";
import { AnimatedTestimonials } from "@/components/sections/AnimatedTestimonials";
import { AnimatedLocalSection } from "@/components/sections/AnimatedLocalSection";
import { ServicesTripartite } from "@/components/sections/ServicesTripartite";
import { WaveDiagnostic } from "@/components/sections/WaveDiagnostic";
import { CreationRefonteBlock } from "@/components/sections/CreationRefonteBlock";
import { ReferencementVisibiliteBlock } from "@/components/sections/ReferencementVisibiliteBlock";
import { CommunicationIdentiteBlock } from "@/components/sections/CommunicationIdentiteBlock";
import { HomePageRealisationsBlock } from "@/components/sections/HomePageRealisationsBlock";
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

      {/* AIDA: INTEREST - Nos Services (Tripartite) */}
      <ServicesTripartite />

      {/* AIDA: INTEREST - Diagnostic IA */}
      <WaveDiagnostic />

      {/* AIDA: INTEREST - Création & Refonte */}
      <CreationRefonteBlock />

      {/* AIDA: INTEREST - SEO & Visibilité */}
      <ReferencementVisibiliteBlock />

      {/* AIDA: INTEREST - Communication & Identité */}
      <CommunicationIdentiteBlock />

      {/* AIDA: DESIRE - Nos Réalisations Carousel */}
      <HomePageRealisationsBlock />

      {/* AIDA: INTEREST - Proof (Stats) */}
      <AgencyStatsBlock 
        title="Des Résultats Mesurables"
        metrics={AGENCY_STATS.metrics}
      />

      {/* AIDA: INTEREST/DESIRE - How we do it */}
      <AnimatedFeatures />


      {/* AIDA: DESIRE - Services Portfolio */}
      <AnimatedServices />


      {/* AIDA: DESIRE - Pricing Transparency */}
      <PricingPreviewHome />

      {/* AIDA: DESIRE - Social Proof */}
      <Suspense fallback={<TestimonialsSkeleton />}>
        <AnimatedTestimonials />
      </Suspense>

      {/* AIDA: DESIRE - Competitive Advantage */}
      <ComparisonTable 
        title="Pourquoi WaveIA ?"
        subtitle="Engineering vs Agence Classique"
        competitors={AGENCY_COMPARISON.competitors}
        rows={AGENCY_COMPARISON.rows}
      />

      {/* AIDA: ACTION - Local CTA */}
      <Suspense fallback={<LocalSectionSkeleton />}>
        <AnimatedLocalSection />
      </Suspense>
    </div>
  );
}