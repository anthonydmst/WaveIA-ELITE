import { PricingPlan } from "../types";

// Communication & Branding Plans
export const PRICING_COM: PricingPlan[] = [
  {
    name: "Identité",
    description: "Les fondations visuelles de votre marque.",
    price: "1 290",
    popular: false,
    features: [
      { text: "Logo (3 propositions)", included: true },
      { text: "Charte Graphique Complète", included: true },
      { text: "Polices & Couleurs", included: true },
      { text: "Déclinaisons (Social, Web, Print)", included: true },
      { text: "Brand Book PDF", included: true },
      { text: "Cession droits d'auteur", included: true },
      { text: "Supports Print", included: false },
      { text: "Stratégie Social Media", included: false },
    ],
    cta: "Créer ma marque",
    color: "border-white/10 hover:border-white/20",
  },
  {
    name: "360° Launch",
    description: "Tout ce qu'il faut pour lancer votre activité.",
    price: "2 490",
    popular: true,
    features: [
      { text: "Pack Identité Visuelle complet", included: true },
      { text: "Design Cartes de Visite", included: true },
      { text: "Design Plaquette Commerciale", included: true },
      { text: "Templates Réseaux Sociaux (Canva)", included: true },
      { text: "Signature Email HTML", included: true },
      { text: "Cover LinkedIn & Facebook", included: true },
      { text: "Shooting Photo (Demi-journée)", included: true },
      { text: "Gestion mensuelle", included: false },
    ],
    cta: "Lancer mon activité",
    color: "border-ocean",
  },
  {
    name: "Social Growth",
    description: "Votre présence sociale clé en main.",
    price: "990",
    popular: false,
    features: [
      { text: "Stratégie Éditoriale", included: true },
      { text: "Calendrier de publication", included: true },
      { text: "Création de contenus (12 posts/mois)", included: true },
      { text: "Rédaction des légendes & hashtags", included: true },
      { text: "Programmation des posts", included: true },
      { text: "Modération commentaire basique", included: true },
      { text: "Rapport mensuel d'engagement", included: true },
      { text: "Reels / TikTok", included: false },
    ],
    cta: "Devenir viral",
    color: "border-white/10 hover:border-white/20",
    period: "/mois"
  },
];

export const PRICING_COM_IDENTITY: PricingPlan[] = [
  {
    name: "Pack Logo",
    description: "L'essentiel pour démarrer.",
    price: "490",
    popular: false,
    features: [
      { text: "Logo Vectoriel", included: true },
      { text: "2 pistes créatives", included: true },
      { text: "Déclinaisons N&B", included: true },
      { text: "Cession droits", included: true },
    ],
    cta: "Créer mon logo",
    color: "border-white/10 hover:border-white/20",
  },
  {
    name: "Pack Print",
    description: "Vos supports physiques.",
    price: "290",
    popular: false,
    features: [
      { text: "Design Cartes de Visite", included: true },
      { text: "Design Flyer ou Dépliant", included: true },
      { text: "Préparation fichiers imprimeur", included: true },
      { text: "Conseil papier/finition", included: true },
    ],
    cta: "Imprimer",
    color: "border-white/10 hover:border-white/20",
  },
];

export const PRICING_COM_MEDIA: PricingPlan[] = [
  {
    name: "Shooting Photo",
    description: "Mettez en valeur votre activité.",
    price: "490",
    popular: false,
    features: [
      { text: "Shooting sur site (Demi-journée)", included: true },
      { text: "Retouches HD incluses", included: true },
      { text: "20 photos livrées", included: true },
      { text: "Droits d'utilisation web & print", included: true },
    ],
    cta: "Réserver",
    color: "border-white/10 hover:border-white/20",
  },
  {
    name: "Pack Vidéo",
    description: "Engagez sur les réseaux.",
    price: "690",
    popular: true,
    features: [
      { text: "Vidéo présentation ou Réel", included: true },
      { text: "Montage dynamique", included: true },
      { text: "Musique libre de droits", included: true },
      { text: "Format Vertical & Horizontal", included: true },
    ],
    cta: "Tourner",
    color: "border-ocean",
  },
];

export const PRICING_COM_ADS: PricingPlan[] = [
  {
    name: "Setup Campagne",
    description: "Création compte & pixels.",
    price: "290",
    popular: false,
    features: [
      { text: "Configuration Business Manager", included: true },
      { text: "Installation Pixel / Tracking", included: true },
      { text: "Création des audiences cibles", included: true },
      { text: "Création des visuels pub (x3)", included: true },
    ],
    cta: "Lancer la pub",
    color: "border-white/10 hover:border-white/20",
  },
  {
    name: "Régie Publicitaire",
    description: "Gestion mensuelle de vos ads.",
    price: "490",
    popular: true,
    features: [
      { text: "Optimisation quotidienne", included: true },
      { text: "A/B Testing visuels & textes", included: true },
      { text: "Reporting ROI hebdomadaire", included: true },
      { text: "Budget géré jusqu'à 3k€/mois", included: true },
    ],
    cta: "Déléguer mes pubs",
    color: "border-ocean",
    period: "/mois"
  },
];
