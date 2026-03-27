import { notFound } from "next/navigation";
import { ServicePageFactory } from "@/components/factories/ServicePageFactory";
import { SERVICES } from "@/lib/data/services";
import { PedagogicBlock } from "@/components/sections/pedagogic/PedagogicBlock";
import { TrendingUp } from "lucide-react";

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
      extraContent={
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 lg:-mt-20 relative z-10 mb-24">
           <PedagogicBlock 
            title="L'Immobilier Digital N°1"
            subtitle="L'emplacement fait toute la différence."
            description="Sur Google, la première place vaut de l'or. C'est l'équivalent d'une boutique sur les Champs-Élysées, mais accessible à tous ceux qui investissent intelligemment. Ne laissez pas vos concurrents occuper le meilleur trottoir."
            icon={<TrendingUp />}
            benefits={[
              "Trafic qualifié (ceux qui cherchent achètent)",
              "Rentabilité long terme (contrairement à la pub)",
              "Autorité de marché incontestable"
            ]}
          />
        </div>
      } 
    />
  );
}
