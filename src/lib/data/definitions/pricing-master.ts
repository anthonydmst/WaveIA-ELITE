/**
 * 💰 PRICING MASTER (Grade A++ God Mode)
 * Single Source of Truth for all agency pricing plans, addons, and FAQs.
 * Consolidated from legacy fragments to optimize LLM context and hygiene.
 */

import { PricingPlan, Addon, FAQItem } from "../types";

// ============================================
// PART 1: WEB DEVELOPMENT
// ============================================

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

// ============================================
// PART 2: COMMUNICATION & BRANDING
// ============================================

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

// ============================================
// PART 3: SEO & NETLINKING
// ============================================

export const PRICING_SEO: PricingPlan[] = [
  {
    name: "Pack Démarrage",
    description: "Pour lancer un site vitrine ou poser les bases.",
    price: "290",
    popular: false,
    features: [
      { text: "5 Backlinks Thématiques", included: true },
      { text: "Sites à autorité vérifiée (DA 10-20)", included: true },
      { text: "Rédaction articles (500 mots)", included: true },
      { text: "Indexation garantie", included: true },
      { text: "Rapport de positionnement", included: true },
      { text: "Ancre optimisée (sémantique)", included: true },
      { text: "Audit technique Flash offert", included: true },
      { text: "Sans engagement", included: true },
      { text: "Stratégie de contenu", included: false },
    ],
    cta: "Lancer la machine",
    color: "border-white/10 hover:border-white/20",
    period: "/pack"
  },
  {
    name: "Pack Accélération",
    description: "Pour un site existant qui stagne. Débloquez la croissance.",
    price: "590",
    popular: true,
    features: [
      { text: "10 Backlinks Puissants", included: true },
      { text: "Sites à Trafic Réel (DA 20-30)", included: true },
      { text: "Rédaction Premium (800 mots)", included: true },
      { text: "Optimisation On-Page incluse", included: true },
      { text: "Audit Sémantique & Technique", included: true },
      { text: "Planning éditorial mensuel", included: true },
      { text: "Support prioritaire 7/7", included: true },
      { text: "Suivi ROI & Conversions", included: true },
      { text: "E-Réputation (Avis)", included: false },
    ],
    cta: "Accélérer mes ventes",
    color: "border-ocean",
    period: "/mois" 
  },
  {
    name: "Pack Dominance",
    description: "Pour les leaders et le E-commerce. Visibilité maximale.",
    price: "1 190",
    popular: false,
    features: [
      { text: "15 Backlinks Haute Autorité (DA 40+)", included: true },
      { text: "Partenariats Sites Presse / Médias", included: true },
      { text: "Stratégie de Contenu 'Cluster'", included: true },
      { text: "Netlinking International (Option)", included: true },
      { text: "Optimisation UX/CRO & A/B Testing", included: true },
      { text: "Accès Dashboard Live", included: true },
      { text: "Réunions stratégiques mensuelles", included: true },
      { text: "Formation équipes internes", included: true },
      { text: "Protection Anti-SEO Négatif", included: true },
    ],
    cta: "Dominer Google",
    color: "border-white/10 hover:border-white/20",
    period: "/mois"
  },
];

export const PRICING_SEO_AUDIT: PricingPlan[] = [
  {
    name: "Audit Flash",
    description: "État des lieux rapide. Idéal pour tester.",
    price: "Gratuit",
    popular: false,
    features: [
      { text: "Analyse Technique de base", included: true },
      { text: "Vérification Indexation", included: true },
      { text: "Liste des erreurs bloquantes", included: true },
      { text: "Appel de restitution (15min)", included: true },
    ],
    cta: "Auditer gratuitement",
    color: "border-white/10 hover:border-white/20",
  },
  {
    name: "Audit 360°",
    description: "La roadmap complète vers le succès.",
    price: "490",
    popular: true,
    features: [
      { text: "Audit Technique & Sémantique", included: true },
      { text: "Analyse de la concurrence", included: true },
      { text: "Opportunités de mots-clés", included: true },
      { text: "Plan d'action sur 6 mois", included: true },
      { text: "Checklist UX / Conversion", included: true },
    ],
    cta: "Commander l'audit",
    color: "border-ocean",
  },
];

export const PRICING_SEO_LOCAL: PricingPlan[] = [
  {
    name: "Setup GMB",
    description: "Création et optimisation fiche.",
    price: "190",
    popular: false,
    features: [
      { text: "Création Fiche Google Business", included: true },
      { text: "Validation Propriétaire", included: true },
      { text: "Optimisation Infos & Catégories", included: true },
      { text: "Intégration Photos HD", included: true },
    ],
    cta: "Être visible localement",
    color: "border-white/10 hover:border-white/20",
  },
  {
    name: "Domination Locale",
    description: "Soyez le n°1 dans votre ville.",
    price: "390",
    popular: true,
    features: [
      { text: "Gestion des avis clients", included: true },
      { text: "Posts Google Business Hebdo", included: true },
      { text: "Inscriptions Annuaires Locaux", included: true },
      { text: "Rapport de visibilité maps", included: true },
    ],
    cta: "Dominer ma ville",
    color: "border-ocean",
    period: "/mois"
  },
];

// ============================================
// PART 4: CONTENT & ADDONS
// ============================================

export const PRICING_CONTENT: PricingPlan[] = [
  {
    name: "Content Starter",
    description: "Pages secondaires, Blog simple.",
    price: "300",
    popular: false,
    features: [
      { text: "3 Pages ou Articles optimisés", included: true },
      { text: "Recherche de mots-clés", included: true },
      { text: "Structure Hn & Balisage", included: true },
      { text: "Intégration CMS", included: true },
      { text: "Méta-données offertes", included: true },
    ],
    cta: "Commander",
    color: "border-white/10 hover:border-white/20",
    period: "/pack"
  },
  {
    name: "Content Growth",
    description: "Site Vitrine complet ou Refonte.",
    price: "500",
    popular: true,
    features: [
      { text: "5 Pages Stratégiques", included: true },
      { text: "Optimisation Sémantique Poussée", included: true },
      { text: "Maillage interne intelligent", included: true },
      { text: "Copywriting Conversion", included: true },
      { text: "Illustration IA Midjourney", included: true },
    ],
    cta: "Commander",
    color: "border-ocean",
    period: "/pack"
  },
  {
    name: "Content Scale",
    description: "E-commerce, Portails, Clusters.",
    price: "800",
    popular: false,
    features: [
      { text: "8 Pages à fort enjeu", included: true },
      { text: "Cluster Sémantique complet", included: true },
      { text: "Briefing Content Expert", included: true },
      { text: "Optimisation Fiches Produits", included: true },
      { text: "Audit de l'existant inclus", included: true },
    ],
    cta: "Commander",
    color: "border-white/10 hover:border-white/20",
    period: "/pack"
  },
];

export const PRICING_ADDONS: Addon[] = [
  {
    name: "Maintenance DevOps",
    description: "Monitoring, updates de sécurité et backup",
    price: "49€/mois",
  },
  {
    name: "SEO Powerhouse",
    description: "Audit technique mensuel et content strategy",
    price: "490€/mois",
  },
  {
    name: "Content Engineering",
    description: "Articles techniques et landing pages performantes",
    price: "150€/article",
  },
  {
    name: "Training",
    description: "Formation équipe à la stack technique",
    price: "290€",
  },
];

import { TECH_FAQS as PRICING_FAQS } from "./faq-master";

export { PRICING_FAQS };
