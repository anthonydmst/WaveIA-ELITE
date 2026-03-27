import {
  ServicePageFactory,
  generateStaticParamsForSilo,
  generateMetadataForSilo,
} from "@/components/factories/ServicePageFactory";

export function generateStaticParams() {
  return generateStaticParamsForSilo("metier");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return generateMetadataForSilo(params, "metier");
}

import { TechnoTranslator } from "@/components/sections/pedagogic/TechnoTranslator";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let extraContent = null;

  if (slug === "site-web-restaurant") {
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="Le Digital au Service du Goût" 
            terms={[
              {
                tech: "Module de Réservation Sans Commission",
                human: "Indépendance Financière",
                description: "Fini les 2€ par couvert reversés aux plateformes. Votre site prend vos réservations gratuitement, 24/7."
              },
              {
                tech: "Menu QR Code Dynamique",
                human: "Carte Toujours à Jour",
                description: "Changez le plat du jour à 11h50 depuis votre téléphone. Le QR code sur les tables affiche instantanément la nouveauté."
              },
              {
                tech: "Click & Collect",
                human: "Vente à Emporter Simplifiée",
                description: "Vos clients commandent et paient en ligne. Vous recevez un ticket en cuisine. Zéro attente au téléphone."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "site-web-immobilier") {
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="L'Immobilier 2.0" 
            terms={[
              {
                tech: "Passerelle API (Hektor/Apimo)",
                human: "Synchronisation Magique",
                description: "Vous saisissez l'annonce une seule fois dans votre logiciel. Elle apparaît automatiquement sur votre site 5 min après."
              },
              {
                tech: "Recherche par Critères",
                human: "Chasseur d'Appart Automatisé",
                description: "Vos clients filtrent (T3, Balcon, <300k€). Ils trouvent leur bonheur sans vous appeler pour des biens qui ne matchent pas."
              },
              {
                tech: "Lead Magnet (Estimation)",
                human: "Aimant à Vendeurs",
                description: "Un formulaire 'Estimez votre bien' qui capture les coordonnées des propriétaires vendeurs. De l'or pour votre stock."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "site-web-avocat") {
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="La Confiance Digitale" 
            terms={[
              {
                tech: "Protocole SSL / Chiffrement",
                human: "Confidentialité Totale",
                description: "Les échanges via votre formulaire de contact sont cryptés. Le secret professionnel commence dès la prise de contact."
              },
              {
                tech: "Blog Juridique SEO",
                human: "Preuve d'Expertise",
                description: "Des articles qui répondent aux questions de vos clients ('Divorce amiable', 'Licenciement'). Google vous positionne comme LA référence."
              },
              {
                tech: "Prise de RDV Synchronisée",
                human: "Secrétariat Ouvert 24/7",
                description: "Le client réserve sa consultation quand il y pense (souvent le soir). Votre agenda se remplit sans déranger votre assistante."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "site-web-artisan-btp") {
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="Le Chantier Digital" 
            terms={[
              {
                tech: "Galerie Avant/Après",
                human: "Preuve par l'Image",
                description: "Rien ne vend mieux votre savoir-faire qu'un slider interactif montrant la transformation d'un chantier."
              },
              {
                tech: "Devis Qualifié",
                human: "Filtre Anti-Touristes",
                description: "Un formulaire précis (Surface, Budget, Type de travaux) qui vous évite de vous déplacer pour des projets non viables."
              },
              {
                tech: "Local SEO (GMB)",
                human: "L'Artisan du Quartier",
                description: "Quand on cherche 'Plombier + Ville', c'est vous qui sortez. Indispensable pour capter la clientèle de proximité."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "site-web-hotel") {
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="L'Hôtellerie Indépendante" 
            terms={[
              {
                tech: "Moteur de Réservation Directe",
                human: "Adieu les Commissions",
                description: "Incitez les visiteurs à réserver chez vous plutôt sur Booking.com. 15% de marge en plus dans votre poche."
              },
              {
                tech: "Expérience Immersive",
                human: "Coup de Foudre Visuel",
                description: "Des photos plein écran et des vidéos d'ambiance qui vendent le rêve. Le client se projette déjà dans le lit."
              },
              {
                tech: "Channel Manager",
                human: "Chef d'Orchestre",
                description: "Une seule interface pour gérer les dispos partout (Site, Booking, Expedia). Fini le surbooking."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "site-web-medecin") {
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="Le Cabinet Connecté" 
            terms={[
              {
                tech: "Conformité RGPD Santé",
                human: "Secret Médical 2.0",
                description: "Vos données patients sont hébergées sur des serveurs certifiés HDS (Hébergement Données de Santé). Sécurité maximale."
              },
              {
                tech: "Pré-admission en ligne",
                human: "Salle d'Attente Fluide",
                description: "Le patient remplit son dossier administratif avant de venir. Vous gagnez 5 min par consultation."
              },
              {
                tech: "Intégration Doctolib/Maiia",
                human: "Agenda Centralisé",
                description: "On ne change pas vos habitudes. Votre site est simplement une nouvelle porte d'entrée vers votre agenda habituel."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "site-web-bien-etre") {
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="Le Bien-Être Digital" 
            terms={[
              {
                tech: "Réservation par Créneaux",
                human: "Planning Auto-Rempli",
                description: "Vos clients réservent leur massage de 60min en un clic. Votre agenda se remplit sans que vous décrochiez le téléphone."
              },
              {
                tech: "Vente de Forfaits en Ligne",
                human: "Revenus Récurrents",
                description: "Vendez vos abonnements (10 séances, carte 3 mois...). Le paiement est automatique, vous vous concentrez sur le soin."
              },
              {
                tech: "Ambiance Visuelle Zen",
                human: "Premier Contact Apaisant",
                description: "Des couleurs douces, des transitions fluides. Le site reflète l'atmosphère relaxante de votre espace physique."
              }
            ]}
         />
      </div>
    );
  } else if (slug === "site-web-formation") {
    extraContent = (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8 relative z-10 mb-20">
         <TechnoTranslator 
            title="La Formation en Ligne" 
            terms={[
              {
                tech: "LMS (Learning Management System)",
                human: "École Virtuelle Clé en Main",
                description: "Vos apprenants accèdent aux vidéos, quiz et ressources depuis un espace membre sécurisé. Tout est centralisé."
              },
              {
                tech: "Certification Qualiopi Compatible",
                human: "Éligibilité CPF",
                description: "Le système génère les attestations de présence et certificats requis pour être financé par les OPCO et le CPF."
              },
              {
                tech: "Paiement Échelonné",
                human: "Accessible Financièrement",
                description: "Proposez un paiement en 3x, 6x ou 12x. Plus de formations vendues car plus abordables pour vos clients."
              }
            ]}
         />
      </div>
    );
  }

  return (
    <ServicePageFactory params={params} silo="metier" rootPath="/solutions" extraContent={extraContent} />
  );
}
