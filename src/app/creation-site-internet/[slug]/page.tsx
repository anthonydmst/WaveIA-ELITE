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

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  
  let extraContent = null;
  let renderHeroFn: ((breadcrumbs: any[]) => React.ReactNode) | undefined = undefined;

  if (slug === "site-vitrine") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <SiteVitrineLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-12 relative z-10 mb-20">
         <TechnoTranslator 
            title="Le Site Vitrine Expliqué" 
            terms={[
              {
                tech: "CMS (Content Management System)",
                human: "Autonomie Totale",
                description: "Une interface simple comme Word pour modifier vos textes et photos vous-même, sans appeler un développeur."
              },
              {
                tech: "Mobile First",
                human: "Priorité Smartphone",
                description: "On conçoit le site pour le téléphone d'abord (là où sont 70% de vos clients), puis on l'adapte aux grands écrans."
              },
              {
                tech: "SEO Native",
                human: "Aimant à Google",
                description: "Le site est codé pour plaire aux robots de Google dès le premier jour (structure, balises, vitesse)."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "site-ecommerce") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <SiteEcommerceLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-12 relative z-10 mb-20">
         <TechnoTranslator 
            title="L'E-commerce sans Stress" 
            terms={[
              {
                tech: "Tunnel de Vente",
                human: "Route vers l'Achat",
                description: "On supprime tous les obstacles entre le 'clic' et le 'paiement'. Moins de clics = plus de ventes."
              },
              {
                tech: "Passerelle de Paiement",
                human: "Caisse Sécurisée",
                description: "Vos clients paient par Carte ou Apple Pay en toute confiance. L'argent arrive directement sur votre compte."
              },
              {
                tech: "Gestion de Stock",
                human: "Inventaire Auto",
                description: "Quand un produit est vendu, le stock baisse tout seul. Vous savez toujours ce qu'il vous reste."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "maintenance-web") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <MaintenanceWebLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="La Sécurité Traduite" 
            terms={[
              {
                tech: "Backups J+1",
                human: "Machine à Remonter le Temps",
                description: "Une fausse manip ? On restaure la version d'hier en un clic. Vos données sont invincibles."
              },
              {
                tech: "Monitoring 24/7",
                human: "Gardien de Nuit",
                description: "Des robots surveillent votre site chaque minute. S'il ralentit ou plante, on intervient avant même que vous ne le sachiez."
              },
              {
                tech: "Mises à jour de Sécurité",
                human: "Vaccin Anti-Virus",
                description: "On bouche les failles de sécurité dès qu'elles sont découvertes pour empêcher les piratages."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "refonte-site-web") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <SiteRefonteLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-12 relative z-10 mb-20">
         <TechnoTranslator 
            title="La Refonte Intelligente" 
            terms={[
              {
                tech: "Migration SEO (301)",
                human: "Garder sa Réputation",
                description: "On dit à Google : 'J'ai déménagé ici'. Vous ne perdez pas votre classement actuel en changeant de site."
              },
              {
                tech: "UX (User Experience)",
                human: "Confort de Visite",
                description: "On rend la navigation fluide et intuitive. Le visiteur trouve ce qu'il cherche sans réfléchir."
              },
              {
                tech: "Optimisation Core Web Vitals",
                human: "Coup de Boost",
                description: "On nettoie le moteur pour que le nouveau site aille 2x plus vite que l'ancien."
              }
            ]}
         />
      </div>
    );
  }

  return (
    <ServicePageFactory
      params={params}
      silo={["web", "local"]}
      rootPath="/creation-site-internet"
      extraContent={extraContent}
      renderHero={renderHeroFn}
    />
  );
}
