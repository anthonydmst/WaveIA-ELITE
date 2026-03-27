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
import { PedagogicBlock } from "@/components/sections/pedagogic/PedagogicBlock";
import { AgencyStatsBlock } from "@/components/templates/AgencyStatsBlock";
import { ComparisonTable } from "@/components/templates/ComparisonTable";
import { PricingPreviewHome } from "@/components/sections/PricingPreviewHome";
import { AGENCY_STATS, AGENCY_COMPARISON } from "@/lib/data";
import {
  TestimonialsSkeleton,
  LocalSectionSkeleton,
} from "@/components/skeletons/HomepageSkeletons";
import { TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* AIDA: ATTENTION - Hero */}
      <HeroWrapper />


      {/* AIDA: INTEREST - Value Proposition */}
      <div className="relative py-20 bg-background/50">
        <div className="container px-4 mx-auto">
          <PedagogicBlock 
            title="Pourquoi votre site est votre meilleur commercial"
            subtitle="Un investissement qui rapporte, pas une dépense."
            description="Votre site travaille 24/7, ne prend pas de congés et ne demande jamais d'augmentation. Il transforme chaque visiteur en opportunité de vente. C'est le seul employé qui génère des leads pendant que vous dormez."
            icon={<TrendingUp />}
            benefits={[
              "Acquisition client : 10x moins cher qu'un commercial terrain",
              "Crédibilité : 80% des clients vérifient votre site avant d'acheter",
              "Scalabilité : Gérez 1000 visiteurs/jour sans embaucher"
            ]}
          />
        </div>
      </div>

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