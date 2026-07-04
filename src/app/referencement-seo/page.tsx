import { notFound } from "next/navigation";
import { ServicePageFactory } from "@/components/factories/ServicePageFactory";
import { SERVICES } from "@/lib/data/services";
import { PedagogicBlock } from "@/components/sections/pedagogic/PedagogicBlock";
import { TrendingUp } from "lucide-react";
import { SeoSiloLanding } from "@/components/sections/SeoSiloLanding";

export function generateMetadata() {
  const service = SERVICES.find((s) => s.slug === "referencement-seo");
  if (!service) return { title: "Page introuvable", robots: { index: false, follow: false } };
  
  return {
    title: "Référencement SEO Pays Basque | Audit & Stratégie - WaveIA",
    description: "Expert en référencement naturel Google au Pays Basque : audit technique, stratégie de contenu et netlinking pour propulser votre site en 1ère page durablement.",
    alternates: { canonical: "/referencement-seo" },
  };
}


export default function Page() {
  const service = SERVICES.find((s) => s.slug === "referencement-seo");
  if (!service) return notFound();

  return (
    <ServicePageFactory 
      service={service} 
      standaloneHeroOnly={true}
      renderHero={() => (
        <SeoSiloLanding />
      )}
    />
  );
}
