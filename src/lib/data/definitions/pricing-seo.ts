import { PricingPlan } from "../types";

// Netlinking & SEO Plans
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
