import {
  ServicePageFactory,
  generateStaticParamsForSilo,
  generateMetadataForSilo,
} from "@/components/factories/ServicePageFactory";

export function generateStaticParams() {
  return generateStaticParamsForSilo("seo");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return generateMetadataForSilo(params, "seo");
}

import { TechnoTranslator } from "@/components/sections/pedagogic/TechnoTranslator";
import { LocalSeoStatsBlock } from "@/components/sections/LocalSeoStatsBlock";
import { AuditSeoLanding } from "@/components/sections/AuditSeoLanding";
import { SeoLocalLanding } from "@/components/sections/SeoLocalLanding";
import { SeoGmbLanding } from "@/components/sections/SeoGmbLanding";
import { ServiceHero } from "@/components/templates/ServiceHero";
import { SERVICES } from "@/lib/data/services";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  
  let extraContent = null;
  let renderHeroFn: ((breadcrumbs: any[]) => React.ReactNode) | undefined = undefined;

  if (slug === "audit-seo-gratuit") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <AuditSeoLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="Comprendre l'Audit SEO" 
            terms={[
              {
                tech: "Crawlabilité & Indexation",
                human: "Lecture par Google",
                description: "Si Google ne peut pas lire vos pages, il ne peut pas les classer. C'est comme imprimer un livre avec de l'encre invisible."
              },
              {
                tech: "Core Web Vitals",
                human: "Expérience Utilisateur",
                description: "La vitesse et la stabilité visuelle. Un site lent frustre les visiteurs et est pénalisé par Google."
              },
              {
                tech: "Maillage Interne",
                human: "Guidage du Visiteur",
                description: "L'art de relier vos pages entre elles pour que le visiteur (et Google) navigue sans effort."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "local") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <SeoLocalLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <>
        <LocalSeoStatsBlock />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 mb-20 mt-8">
           <TechnoTranslator 
              title="Le SEO Local Décrypté" 
              terms={[
                {
                  tech: "Pack Local / Map Pack",
                  human: "Le Podium Google Maps",
                  description: "Les 3 premières entreprises affichées sur la carte. C'est là que se font 80% des clics locaux."
                },
                {
                  tech: "NAP (Name, Address, Phone)",
                  human: "Cohérence des Coordonnées",
                  description: "Google doit trouver la même adresse partout sur le web. La moindre erreur sème le doute et fait baisser votre classement."
                },
                {
                  tech: "Citations Locales",
                  human: "Annuaires de Confiance",
                  description: "Être listé sur PagesJaunes ou les annuaires locaux renforce votre crédibilité géographique."
                }
              ]}
           />
        </div>
      </>
    );
  } else if (slug === "google-my-business") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <SeoGmbLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="Votre Fiche Google Business" 
            terms={[
              {
                tech: "Fiche GBP Optimisée",
                human: "Vitrine 24/7",
                description: "C'est souvent la première chose que voient vos clients, avant même votre site. Elle doit être impeccable."
              },
              {
                tech: "Avis & E-Réputation",
                human: "Confiance Sociale",
                description: "Les étoiles font vendre. Nous vous aidons à en récolter plus et à gérer les critiques."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "netlinking") {
        extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="Le Netlinking pour les Nuls" 
            terms={[
              {
                tech: "Backlinks",
                human: "Recommandations Pro",
                description: "Un lien d'un autre site vers le vôtre, c'est comme un vote. Plus vous avez de 'votes' de sites importants, plus vous êtes élu N°1."
              },
              {
                tech: "TrustFlow",
                human: "Indice de Confiance",
                description: "Une note de 0 à 100 qui dit à quel point votre site est crédible. Nous visons > 20 pour dépasser vos concurrents."
              },
              {
                tech: "Ancre de lien",
                human: "Contexte du Vote",
                description: "Les mots sur lesquels on clique pour arriver chez vous. Ils disent à Google de quoi vous êtes l'expert (ex: 'Meilleur Plombier')."
              }
            ]}
         />
      </div>
    );
  }

  return (
    <ServicePageFactory
      params={params}
      silo="seo"
      rootPath="/referencement-seo"
      extraContent={extraContent}
      renderHero={renderHeroFn}
    />
  );
}
