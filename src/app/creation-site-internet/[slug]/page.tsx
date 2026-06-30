import {
  ServicePageFactory,
  generateStaticParamsForSilo,
  generateMetadataForSilo,
} from "@/components/factories/ServicePageFactory";



// Génère les params pour les silos "local" ET "web" (fusionnés sous /creation-site-internet)
export async function generateStaticParams() {
  const localParams = await generateStaticParamsForSilo("local");
  const webParams = await generateStaticParamsForSilo("web");
  return [...localParams, ...webParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Essaie d'abord "web", puis "local" si non trouvé
  const webMeta = await generateMetadataForSilo(params, "web");
  if (webMeta.title && !webMeta.title.toString().includes("introuvable")) return webMeta;
  return generateMetadataForSilo(params, "local");
}

import { TechnoTranslator } from "@/components/sections/pedagogic/TechnoTranslator";
import { SiteVitrineLanding } from "@/components/sections/SiteVitrineLanding";
import { SiteEcommerceLanding } from "@/components/sections/SiteEcommerceLanding";
import { SiteRefonteLanding } from "@/components/sections/SiteRefonteLanding";
import { MaintenanceWebLanding } from "@/components/sections/MaintenanceWebLanding";
import { ServiceHero } from "@/components/templates/ServiceHero";
import { SERVICES } from "@/lib/data/services";
import { BreadcrumbItem } from "@/lib/breadcrumbs";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  
  const extraContent = null;
  let renderHeroFn: ((breadcrumbs: BreadcrumbItem[]) => React.ReactNode) | undefined = undefined;
  let isStandalone = false;

  if (slug === "site-vitrine") {
    renderHeroFn = (breadcrumbs) => <SiteVitrineLanding />;
    isStandalone = true;
  } else if (slug === "site-ecommerce") {
    renderHeroFn = (breadcrumbs) => <SiteEcommerceLanding />;
    isStandalone = true;
  } else if (slug === "maintenance-web") {
    renderHeroFn = (breadcrumbs) => <MaintenanceWebLanding />;
    isStandalone = true;
  } else if (slug === "refonte-site-web") {
    renderHeroFn = (breadcrumbs) => <SiteRefonteLanding />;
    isStandalone = true;
  }

  return (
    <ServicePageFactory
      params={params}
      silo={["web", "local"]}
      rootPath="/creation-site-internet"
      extraContent={extraContent}
      renderHero={renderHeroFn}
      standaloneHeroOnly={isStandalone}
    />
  );
}
