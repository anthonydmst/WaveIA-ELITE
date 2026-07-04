import { Service } from "../types";
import { CITIES } from "./cities";
import { POWER_5_CITIES } from "../whitelist";
import { PROCESS_AGENCE_PREMIUM, FEATURES_AGENCE_PREMIUM } from "./premium-defaults";
import { 
  CONTENT_AGENCE_HUB, 
  CONTENT_AGENCE_IDENTITE, 
  CONTENT_AGENCE_STRATEGIE,
  CONTENT_AGENCE_PHOTO, 
  CONTENT_AGENCE_RESEAUX,
  AGENCY_FAQS as AGENCE_FAQS_MASTER
} from "./agency-master";
import { CONTENT_AGENCE_VIDEO } from "./content-tech";
import { getSiloLocalContext } from "./silo-local-context";
import { generateHeroDescription, generateHeroSubtitle } from "./hero-descriptions";

export const AGENCE_SERVICES: Service[] = [
  // Hub
  {
    slug: "agence-communication",
    type: "hub",
    silo: "agence",
    title: "Agence de Communication 360",
    description: "Agence de communication Pays Basque. Identité visuelle, stratégie de marque et réseaux sociaux.",
    hero: {
      title: "Agence Communication 360° & Branding",
      subtitle: "Identité Visuelle Forte",
      description: "Ne passez plus inaperçu. De la création de logo à la stratégie social media, nous construisons l'image de marque qui vous rend unique.",
      badge: "Consultation + Audit Offert ✨",
    },
    features: FEATURES_AGENCE_PREMIUM,
    process: PROCESS_AGENCE_PREMIUM,
    faq: AGENCE_FAQS_MASTER,
    content: CONTENT_AGENCE_HUB,
  },
  // Services
  {
    slug: "identite-visuelle",
    silo: "agence",
    title: "Identité Visuelle & Logo",
    description: "Création de logo et charte graphique. Donnez une âme à votre entreprise.",
    hero: {
      title: "Identité Visuelle",
      subtitle: "Branding",
      description: "Un logo unique et une charte graphique cohérente pour marquer les esprits.",
      badge: "Design 100% Original 💎",
    },
    features: [
      { title: "Logo Sur-mesure", description: "Création originale par nos designers seniors. Pas de banques d'images." },
      { title: "Charte Graphique", description: "Les règles d'or pour utiliser votre image partout (Web, Print, Social)." },
      { title: "Déclinaisons Illimitées", description: "Favicon, réseaux sociaux, signature email : tous vos formats sont couverts." },
      { title: "Fichiers Sources Fournis", description: "Vecteurs modifiables livrés : vous n'êtes jamais bloqué chez un prestataire." },
    ],
    process: [
      { title: "Brief Créatif & Positionnement", description: "Exploration de vos valeurs, votre cible et vos concurrents pour cadrer le projet." },
      { title: "Exploration Visuelle", description: "3 pistes créatives avec moodboards et premières ébauches de logo." },
      { title: "Vectorisation & Déclinaisons", description: "Finalisation du logo dans tous les formats et usages nécessaires." },
      { title: "Livraison Charte Graphique", description: "Remise du brand book complet et formation à son utilisation." },
    ],
    faq: AGENCE_FAQS_MASTER,
    content: CONTENT_AGENCE_IDENTITE,
  },
  {
    slug: "reseaux-sociaux",
    silo: "agence",
    title: "Gestion Réseaux Sociaux",
    description: "Community Management Instagram, Facebook, LinkedIn. Engagez votre communauté.",
    hero: {
      title: "Social Media",
      subtitle: "Community Management",
      description: "Développez votre audience et créez de l'engagement sur les plateformes sociales.",
      badge: "Croissance Organique 📈",
    },
    features: [
      { title: "Stratégie Éditoriale", description: "On ne poste pas au hasard. Calendrier planifié pour un mix contenu valeur/vente optimal." },
      { title: "Création de Contenu", description: "Visuels, Reels, Carrousels... Nous produisons tout en interne." },
      { title: "Community Management", description: "Modération et réponses à vos messages et commentaires au quotidien." },
      { title: "Publicités Ciblées", description: "Campagnes Meta Ads pour amplifier le contenu qui performe déjà organiquement." },
    ],
    process: [
      { title: "Audit Comptes & Concurrence", description: "Analyse de vos réseaux actuels et benchmark de vos concurrents." },
      { title: "Ligne Éditoriale", description: "Définition du ton, des formats et du calendrier de publication." },
      { title: "Production de Contenu", description: "Création des visuels, Reels et carrousels du premier mois." },
      { title: "Animation & Reporting Mensuel", description: "Publication, modération et rapport de croissance chaque mois." },
    ],
    faq: AGENCE_FAQS_MASTER,
    content: CONTENT_AGENCE_RESEAUX,
  },
  {
    slug: "photographie",
    silo: "agence",
    title: "Photographie Professionnelle",
    description: "Shooting photo entreprise, produits, culinaire. Des visuels haute qualité.",
    hero: {
      title: "Shooting Photo",
      subtitle: "L'image fait vendre",
      description: "Mettez en valeur vos produits et vos équipes avec des photos professionnelles.",
      badge: "Qualité Studio Pro 📸",
    },
    features: [
        { title: "Qualité Studio", description: "Matériel haut de gamme et retouche professionnelle Lightroom/Photoshop." },
        { title: "Direction Artistique", description: "On vous guide sur les poses, le décor et l'ambiance." },
        { title: "Droits d'Usage Illimités", description: "Vos photos vous appartiennent, sans limite de support ni de durée." },
        { title: "Banque d'Images Propriétaire", description: "Un stock de visuels réutilisable pour tous vos futurs contenus." },
    ],
    process: [
        { title: "Brief Visuel & Moodboard", description: "Définition du style et des usages prévus pour vos photos." },
        { title: "Repérage & Planning Shooting", description: "Organisation du tournage selon la lumière et vos disponibilités." },
        { title: "Shooting Sur Site", description: "Captation avec équipement studio mobile haut de gamme." },
        { title: "Retouche & Livraison Galerie", description: "Post-production et livraison multi-format sous une semaine." },
    ],
    faq: AGENCE_FAQS_MASTER,
    content: CONTENT_AGENCE_PHOTO,
  },
  {
    slug: "video",
    silo: "agence",
    title: "Vidéo & Publicité",
    description: "Production vidéo corporate, Reels, Publicité. Le format roi du web.",
    hero: {
      title: "Production Vidéo",
      subtitle: "Captivez votre audience",
      description: "Des vidéos dynamiques pour présenter votre activité ou vos services.",
      badge: "Format Viral Reels/TikTok 🎥",
    },
    features: [
        { title: "Scénarisation", description: "Storyboarding complet avant de tourner. Rien n'est laissé au hasard." },
        { title: "Montage Dynamique", description: "Cuts rapides, sound design, étalonnage. Le style TikTok/Reels qui retient l'attention." },
        { title: "Formats Multi-plateformes", description: "Livraison optimisée en 9:16 (Reels/TikTok) et 16:9 (Web/YouTube)." },
        { title: "Étalonnage Cinéma", description: "Colorimétrie professionnelle pour une image qui inspire confiance." },
    ],
    process: [
        { title: "Storyboard & Script", description: "Écriture du scénario plan par plan avant tout tournage." },
        { title: "Repérage & Préparation", description: "Choix des lieux et logistique du jour de tournage." },
        { title: "Tournage Pro", description: "Captation caméra cinéma, stabilisateur et prise de son broadcast." },
        { title: "Montage & Étalonnage", description: "Montage rythmé, sound design et livraison multi-format." },
    ],
    faq: AGENCE_FAQS_MASTER,
    content: CONTENT_AGENCE_VIDEO,
  },
  {
    slug: "strategie-digitale",
    silo: "agence",
    title: "Stratégie Digitale & Conseil",
    description: "Audit, conseil et plan d'action marketing pour booster votre croissance.",
    hero: {
      title: "Stratégie Digitale",
      subtitle: "Conseil & Planning",
      description: "Une feuille de route claire pour atteindre vos objectifs business.",
      badge: "Audit Offert 🚀",
    },
    features: [
      { title: "Audit 360", description: "Analyse complète de votre présence en ligne et de vos concurrents." },
      { title: "Plan d'Action", description: "Calendrier éditorial et marketing sur 6 à 12 mois." },
      { title: "Tableaux de Bord KPIs", description: "Reporting mensuel lisible pour piloter vos décisions avec des données réelles." },
      { title: "Révision Trimestrielle", description: "Ajustement de la stratégie selon les résultats mesurés sur le terrain." },
    ],
    process: [
      { title: "Audit 360° & Benchmark", description: "Analyse de votre présence actuelle et de vos concurrents directs." },
      { title: "Définition des Objectifs SMART", description: "Cadrage des priorités et des indicateurs à suivre." },
      { title: "Plan d'Action Éditorial", description: "Calendrier à 6-12 mois avec canaux prioritaires et messages clés." },
      { title: "Mise en Place du Tracking", description: "Configuration Analytics/Pixel et premier point de suivi." },
    ],
    faq: AGENCE_FAQS_MASTER,
    content: CONTENT_AGENCE_STRATEGIE,
  },
  // Power 5 Cities (Dynamic)
  ...CITIES
    .filter(c => POWER_5_CITIES.includes(c.slug))
    .map((city): Service => {
      // Natural Content Generators (Reused Logic for Consistency)
      const neighborhoodText = city.neighborhoods && city.neighborhoods.length > 0
      ? `De ${city.neighborhoods[0]} à ${city.neighborhoods[1] || city.neighborhoods[0]}`
      : "Dans toute la ville";

      return {
        slug: city.slug,
        silo: "agence",
        title: `Agence Com ${city.name}`,
        description: `Agence de communication à ${city.name}. Identité visuelle et stratégie digitale. Nous intervenons ${neighborhoodText.toLowerCase()}.`,
        hero: {
          title: `Communication à ${city.name}`,
          subtitle: generateHeroSubtitle(city, "agence"),
          description: generateHeroDescription(city, "agence"), // ✅ Unique, no duplicate
          badge: `Expert Local ${city.name} 📍`,
        },
        features: FEATURES_AGENCE_PREMIUM,
        process: PROCESS_AGENCE_PREMIUM,
        faq: AGENCE_FAQS_MASTER,
        // ✅ PAS DE CONTENT ICI - Pages ville ont TerritorialContext unique via siloContext
        localContext: { 
          city: city.name, 
          zipCode: city.zipCode,
          siloContext: getSiloLocalContext(city, "agence")
        },
      };
    }),
];
