import { notFound } from "next/navigation";
import { ServicePageFactory } from "@/components/factories/ServicePageFactory";
import { SERVICES } from "@/lib/data/services";
import { PedagogicBlock } from "@/components/sections/pedagogic/PedagogicBlock";
import { Palette } from "lucide-react";
import { CommunicationSiloLanding } from "@/components/sections/CommunicationSiloLanding";

export function generateMetadata() {
  const service = SERVICES.find((s) => s.slug === "agence-communication");
  if (!service) return { title: "Page introuvable" };
  
  return {
    title: `${service.title} - WaveIA`,
    description: service.description,
  };
}


export default function Page() {
  const service = SERVICES.find((s) => s.slug === "agence-communication");
  if (!service) return notFound();

  return (
    <ServicePageFactory 
      service={service} 
      renderHero={() => (
        <CommunicationSiloLanding />
      )}
      extraContent={
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 lg:-mt-20 relative z-10 mb-24">
           <PedagogicBlock 
            title="La Confiance au Premier Regard"
            subtitle="On n'achète pas ce qu'on ne comprend pas."
            description="Votre image est votre première vente. Un logo daté ou une charte incohérente envoient un signal de risque. Nous construisons une identité qui rassure, séduit et justifie vos prix premium."
            icon={<Palette />}
            benefits={[
              "Augmentation du taux de conversion",
              "Justification de tarifs plus élevés",
              "Fidélisation par l'émotion"
            ]}
          />
        </div>
      } 
    />
  );
}
