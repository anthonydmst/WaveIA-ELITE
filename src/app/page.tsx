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
import { MethodBlock } from "@/components/sections/MethodBlock";
import { WhyChooseUsBlock } from "@/components/sections/WhyChooseUsBlock";
import { WhyChooseUsFAQ } from "@/components/sections/WhyChooseUsFAQ";
import { WhyChooseUsCTA } from "@/components/sections/WhyChooseUsCTA";
import { AnimatedLocalSection } from "@/components/sections/AnimatedLocalSection";
import { ServicesTripartite } from "@/components/sections/ServicesTripartite";
import { LocalExpertsBlock } from "@/components/sections/CreationSiteDetails";
import { WaveDiagnosticForm } from "@/components/sections/WaveDiagnosticForm";
import { CreationRefonteBlock } from "@/components/sections/CreationRefonteBlock";
import { ReferencementVisibiliteBlock } from "@/components/sections/ReferencementVisibiliteBlock";
import { CommunicationIdentiteBlock } from "@/components/sections/CommunicationIdentiteBlock";
import { HomePageRealisationsBlock } from "@/components/sections/HomePageRealisationsBlock";
import {
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

      {/* AIDA: ACTION - Local CTA */}
      <Suspense fallback={<LocalSectionSkeleton />}>
        <AnimatedLocalSection />
      </Suspense>

      {/* AIDA: DESIRE - Local Experts */}
      <LocalExpertsBlock />

    </div>
  );
}