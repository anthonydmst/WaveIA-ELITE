import { notFound } from "next/navigation";
import { ServicePageFactory } from "@/components/factories/ServicePageFactory";
import { SERVICES } from "@/lib/data/services";
import { PedagogicBlock } from "@/components/sections/pedagogic/PedagogicBlock";
import { Laptop } from "lucide-react";
import { CreationSiteSiloLanding } from "@/components/sections/CreationSiteSiloLanding";
import { CustomHeroCreationSite } from "@/components/sections/CustomHeroCreationSite";
import { CreationRefonteBlock } from "@/components/sections/CreationRefonteBlock";
import { HomePageRealisationsBlock } from "@/components/sections/HomePageRealisationsBlock";
import { TwoWeeksFramework } from "@/components/sections/TwoWeeksFramework";
import { TargetAudienceBlock } from "@/components/sections/TargetAudienceBlock";
import { SuccessStepsBlock, LocalExpertsBlock, RevolutionCTABlock, AgencyHowItWorksBlock } from "@/components/sections/CreationSiteDetails";

export function generateMetadata() {
  const service = SERVICES.find((s) => s.slug === "creation-site-internet");
  if (!service) return { title: "Page introuvable", robots: { index: false, follow: false } };
  
  return {
    title: "Création Site Internet à Bayonne, Biarritz | WaveIA",
    description: "Agence web locale au Pays Basque : création de sites internet sur-mesure, rapides et optimisés SEO, pour les entreprises de Bayonne, Biarritz, Anglet et Hossegor.",
    alternates: { canonical: "/creation-site-internet" },
  };
}


export default function Page() {
  const service = SERVICES.find((s) => s.slug === "creation-site-internet");
  if (!service) return notFound();

  return (
    <ServicePageFactory 
      service={service} 
      standaloneHeroOnly={true}
      renderHero={(breadcrumbs) => (
        <>
          <CreationSiteSiloLanding />
        </>
      )}
    />
  );
}
