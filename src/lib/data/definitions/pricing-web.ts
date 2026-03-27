import { PricingPlan } from "../types";

// Web Development Plans
export const PRICING_WEB: PricingPlan[] = [
  {
    name: "Le Pottok",
    description: "Start-up / Lancement. Propriété à 100%.",
    price: "790",
    popular: false,
    features: [
      { text: "Site One-Page (Landing) optimisé", included: true },
      { text: "Propriété Totale du Code Source", included: true },
      { text: "Hébergement Vercel (Gratuit à vie)", included: true },
      { text: "Design Mobile First & Rapide", included: true },
      { text: "Formulaire de Contact sécurisé", included: true },
      { text: "Nom de domaine offert (1 an)", included: true },
      { text: "Livraison 5 jours", included: true },
      { text: "Référencement SEO Naturel (Base)", included: true },
      { text: "Pas de frais mensuels cachés", included: true },
      { text: "Analytics Privacy-First", included: true },
    ],
    cta: "Lancer mon activité",
    color: "border-white/10 hover:border-white/20",
  },
  {
    name: "Le Mondarrain",
    description: "La référence Vitrine. Supérieur à WordPress.",
    price: "1 290",
    popular: true,
    features: [
      { text: "Site Vitrine Complet (5-7 pages)", included: true },
      { text: "Stack Next.js (Techno Netflix/Uber)", included: true },
      { text: "CMS Administrable (Textes/Photos)", included: true },
      { text: "Score Google PageSpeed 95+", included: true },
      { text: "SEO Technique Avancé & Local", included: true },
      { text: "Blog / Actualités optimisé SEO", included: true },
      { text: "Propriété Totale (Pas de location)", included: true },
      { text: "Animations & Design Premium", included: true },
      { text: "Formation prise en main (1h)", included: true },
      { text: "Conformité RGPD totale", included: true },
    ],
    cta: "Commander mon site",
    color: "border-ocean",
  },
  {
    name: "La Rhune",
    description: "E-Commerce & Plateforme sur-mesure.",
    price: "2 490",
    popular: false,
    features: [
      { text: "Architecture E-Commerce Scalable", included: true },
      { text: "Paiements Stripe / Paypal sécurisés", included: true },
      { text: "Dashboard Admin sur-mesure", included: true },
      { text: "Composants React Server (RSC)", included: true },
      { text: "Hébergement Edge Global (CDN)", included: true },
      { text: "SEO E-commerce (Schema Products)", included: true },
      { text: "Import/Export Produits", included: true },
      { text: "Design System Complet (Figma)", included: true },
      { text: "Support Ingénieur Dédié", included: true },
      { text: "Audit de conversion offert", included: true },
    ],
    cta: "Voir grand",
    color: "border-white/10 hover:border-white/20",
  },
];

export const PRICING_WEB_MAINTENANCE: PricingPlan[] = [
  {
    name: "Maintenance Essentielle",
    description: "Tranquillité d'esprit totale.",
    price: "49",
    popular: false,
    features: [
      { text: "Hébergement Sécurisé", included: true },
      { text: "Sauvegardes Quotidiennes", included: true },
      { text: "Mises à jour de sécurité", included: true },
      { text: "Monitoring 24/7", included: true },
      { text: "Certificat SSL inclus", included: true },
    ],
    cta: "Sécuriser mon site",
    color: "border-white/10 hover:border-white/20",
    period: "/mois"
  },
  {
    name: "Maintenance Sérénité",
    description: "On gère tout pour vous.",
    price: "99",
    popular: true,
    features: [
      { text: "Tout le pack Essentiel", included: true },
      { text: "1h de modifications / mois", included: true },
      { text: "Support Prioritaire (WhatsApp)", included: true },
      { text: "Rapport mensuel de performance", included: true },
      { text: "Optimisation continue des images", included: true },
    ],
    cta: "Déléguer la technique",
    color: "border-ocean",
    period: "/mois"
  },
];

export const PRICING_WEB_REDESIGN: PricingPlan[] = [
  {
    name: "Refonte Visuelle",
    description: "Modernisation du design existant.",
    price: "990",
    popular: false,
    features: [
      { text: "Nouveau Design UI/UX", included: true },
      { text: "Conservation du contenu", included: true },
      { text: "Optimisation Mobile", included: true },
      { text: "Nettoyage du code", included: true },
    ],
    cta: "Moderniser",
    color: "border-white/10 hover:border-white/20",
  },
  {
    name: "Migration Next.js",
    description: "Passez de WP à la vitesse supérieure.",
    price: "1 490",
    popular: true,
    features: [
      { text: "Migration complète des données", included: true },
      { text: "Performance x10 (Garantie)", included: true },
      { text: "Sécurité renforcée", included: true },
      { text: "SEO : Redirections 301 incluses", included: true },
    ],
    cta: "Migrer vers le futur",
    color: "border-ocean",
  },
];
