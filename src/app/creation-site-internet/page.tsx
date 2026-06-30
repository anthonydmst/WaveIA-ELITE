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
  if (!service) return { title: "Page introuvable" };
  
  return {
    title: `${service.title} - WaveIA`,
    description: service.description,
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
