import { notFound } from "next/navigation";
import { ServicePageFactory } from "@/components/factories/ServicePageFactory";
import { SERVICES } from "@/lib/data/services";
import { PedagogicBlock } from "@/components/sections/pedagogic/PedagogicBlock";
import { TrendingUp } from "lucide-react";
import { SeoSiloLanding } from "@/components/sections/SeoSiloLanding";

export function generateMetadata() {
  const service = SERVICES.find((s) => s.slug === "referencement-seo");
  if (!service) return { title: "Page introuvable" };
  
  return {
    title: `${service.title} - WaveIA`,
    description: service.description,
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
