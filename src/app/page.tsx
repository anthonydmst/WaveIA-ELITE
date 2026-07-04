import type { Metadata } from "next";

// SEO Metadata (Grade A+)
export const metadata: Metadata = {
  title: "Agence Web Biarritz | Création Site Internet Côte Basque - WaveIA",
  description: "Agence web locale spécialisée en création de sites internet, SEO et communication digitale. Tarifs transparents dès 790€. Biarritz, Bayonne, Anglet.",
  alternates: { canonical: "/" },
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
import { ServicesTripartite } from "@/components/sections/ServicesTripartite";
import StructuredData from "@/components/seo/StructuredData";
import { WHY_CHOOSE_US_FAQS } from "@/lib/data/definitions/faq-master";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WHY_CHOOSE_US_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } as const;

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
      <StructuredData data={faqSchema} />
      <WhyChooseUsFAQ />
      <WhyChooseUsCTA />

    </div>
  );
}