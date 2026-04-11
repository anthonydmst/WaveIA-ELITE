import {
  ServicePageFactory,
  generateStaticParamsForSilo,
  generateMetadataForSilo,
} from "@/components/factories/ServicePageFactory";

export function generateStaticParams() {
  return generateStaticParamsForSilo("agence");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return generateMetadataForSilo(params, "agence");
}

import { TechnoTranslator } from "@/components/sections/pedagogic/TechnoTranslator";
import { IdentiteVisuelleLanding } from "@/components/sections/IdentiteVisuelleLanding";
import { ReseauxSociauxLanding } from "@/components/sections/ReseauxSociauxLanding";
import { PhotographieLanding } from "@/components/sections/PhotographieLanding";
import { VideoLanding } from "@/components/sections/VideoLanding";
import { ServiceHero } from "@/components/templates/ServiceHero";
import { SERVICES } from "@/lib/data/services";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  
  let extraContent = null;
  let renderHeroFn: ((breadcrumbs: any[]) => React.ReactNode) | undefined = undefined;

  if (slug === "identite-visuelle") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <IdentiteVisuelleLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="Le Branding Décrypté" 
            terms={[
              {
                tech: "Fichier Vectoriel (SVG/AI)",
                human: "Qualité Infinie",
                description: "Un logo qui reste net aussi bien sur une carte de visite que sur une affiche de 4 mètres."
              },
              {
                tech: "Charte Graphique",
                human: "Mode d'Emploi Visuel",
                description: "Le document qui garantit que votre marque est respectée partout (couleurs exactes, polices, interdits)."
              },
              {
                tech: "Déclinaisons",
                human: "Adaptabilité Totale",
                description: "Votre logo en version noir, blanc, icône seule... Pour être lisible sur tous les supports."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "reseaux-sociaux") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <ReseauxSociauxLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="Les Réseaux Sociaux Expliqués" 
            terms={[
              {
                tech: "Reach / Portée",
                human: "Personnes Touchées",
                description: "Le nombre de vrais humains qui ont vu votre message passer sur leur écran."
              },
              {
                tech: "Taux d'Engagement",
                human: "Intérêt Réel",
                description: "Ceux qui aiment, commentent ou partagent. C'est la preuve que votre contenu intéresse."
              },
              {
                tech: "Calendrier Éditorial",
                human: "Régularité Sans Stress",
                description: "Savoir quoi poster et quand, 1 mois à l'avance. Fini l'angoisse de la page blanche."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "photographie") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <PhotographieLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="La Photo Pro" 
            terms={[
              {
                tech: "HDR / Retouche",
                human: "Magie Visuelle",
                description: "On sublime la réalité sans la trahir. Vos produits donnent envie, vos locaux paraissent accueillants."
              },
              {
                tech: "Haute Résolution",
                human: "Netteté Impeccable",
                description: "Des images qui restent parfaites même si on zoome ou si on les imprime en grand (4x3)."
              },
              {
                tech: "Droit à l'image",
                human: "Sérénité Juridique",
                description: "On gère les autorisations pour que vous puissiez utiliser les photos partout sans risque."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "video") {
    renderHeroFn = (breadcrumbs) => (
      <>
        <VideoLanding />
        {service && <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbs} />}
      </>
    );
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="La Vidéo qui Convertit" 
            terms={[
              {
                tech: "Format Vertical (9:16)",
                human: "Prêt pour Mobile",
                description: "Des vidéos faites pour être vues sur téléphone en plein écran (TikTok, Reels, Shorts)."
              },
              {
                tech: "Sound Design",
                human: "Immersion Sonore",
                description: "La musique et les bruitages qui donnent du rythme et de l'émotion à vos images."
              },
              {
                tech: "Sous-titrage",
                human: "Lecture Silencieuse",
                description: "80% des gens regardent les vidéos sans le son. On écrit tout ce qui se dit pour ne perdre personne."
              }
            ]}
         />
      </div>
    );
  }

  return (
    <ServicePageFactory
      params={params}
      silo="agence"
      rootPath="/agence-communication"
      extraContent={extraContent}
      renderHero={renderHeroFn}
    />
  );
}
