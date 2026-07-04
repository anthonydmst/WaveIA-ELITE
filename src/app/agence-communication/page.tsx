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
    title: "Agence de Communication 360° au Pays Basque | WaveIA",
    description: "Agence de communication au Pays Basque : identité visuelle, stratégie de marque, réseaux sociaux et photographie pour donner une image forte à votre entreprise.",
    alternates: { canonical: "/agence-communication" },
  };
}


export default function Page() {
  const service = SERVICES.find((s) => s.slug === "agence-communication");
  if (!service) return notFound();

  return (
    <ServicePageFactory 
      service={service} 
      standaloneHeroOnly={true}
      renderHero={() => (
        <CommunicationSiloLanding />
      )}
    />
  );
}
