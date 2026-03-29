import { notFound } from "next/navigation";
import { ServicePageFactory } from "@/components/factories/ServicePageFactory";
import { SERVICES } from "@/lib/data/services";
import { PedagogicBlock } from "@/components/sections/pedagogic/PedagogicBlock";
import { Laptop } from "lucide-react";
import { CustomHeroCreationSite } from "@/components/sections/CustomHeroCreationSite";
import { CreationRefonteBlock } from "@/components/sections/CreationRefonteBlock";
import { HomePageRealisationsBlock } from "@/components/sections/HomePageRealisationsBlock";
import { TwoWeeksFramework } from "@/components/sections/TwoWeeksFramework";
import { TargetAudienceBlock } from "@/components/sections/TargetAudienceBlock";
import { SuccessStepsBlock, LocalExpertsBlock, RevolutionCTABlock, AgencyHowItWorksBlock } from "@/components/sections/CreationSiteDetails";

export function generateMetadata() {
  const service = SERVICES.find((s) => s.slug === "creation-site-internet");
  if (!service) return { title: "Page introuvable" };
  
  return {
    title: `${service.title} - WaveIA`,
    description: service.description,
  };
}


export default function Page() {
  const service = SERVICES.find((s) => s.slug === "creation-site-internet");
  if (!service) return notFound();

  return (
    <ServicePageFactory 
      service={service} 
      renderHero={(breadcrumbs) => (
        <>
          <CustomHeroCreationSite breadcrumbItems={breadcrumbs} />
          <CreationRefonteBlock />
          <HomePageRealisationsBlock />
          <TwoWeeksFramework />
          <TargetAudienceBlock />
          <SuccessStepsBlock />
          <LocalExpertsBlock />
          <RevolutionCTABlock />
          <AgencyHowItWorksBlock />
        </>
      )}
      extraContent={
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 lg:-mt-20 relative z-10 mb-24">
           <PedagogicBlock 
            title="Votre Meilleur Commercial 24/7"
            subtitle="Un site web ne dort jamais."
            description="Pendant que vous dormez, votre site travaille. Il accueille vos prospects, répond à leurs questions et prend leurs commandes. En 2024, ne pas avoir de site performant, c'est comme fermer boutique à 17h quand vos clients arrivent à 18h."
            icon={<Laptop />}
            benefits={[
              "Disponible 24h/24 et 7j/7 sans salaire",
              "Crédibilise votre entreprise instantanément",
              "Automatise la prise de contact et les ventes"
            ]}
          />
        </div>
      } 
    />
  );
}
