import { PricingPlan, Addon, FAQItem } from "../types";

// Content Strategy Plans (Upsell)
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

export const PRICING_FAQS: FAQItem[] = [
  {
    question: "Pourquoi Next.js plutôt que WordPress ?",
    answer:
      "WordPress est un outil de blogging conçu en 2003, qui repose sur une architecture PHP vieillissante et des plugins souvent vulnérables. Next.js est le framework React utilisé par Netflix, Uber, TikTok et Twitch. Il offre une vitesse de chargement quasi-instantanée (moins de 100ms), une sécurité native sans dépendance à des extensions tierces, et une évolutivité illimitée. C'est un investissement pérenne qui positionne votre site web à l'avant-garde technologique.",
  },
  {
    question: "Le code m'appartient-il vraiment ?",
    answer:
      "Oui, à 100%. Contrairement aux agences qui vous louent un site via des plateformes comme Wix ou Shopify (et vous facturent chaque mois), nous vous livrons le dépôt GitHub complet avec tout le code source. Vous êtes propriétaire de votre actif numérique comme vous le seriez d'un local commercial. Il n'y a pas de 'vendor lock-in' : vous pouvez changer de prestataire d'hébergement ou de développeur quand vous le souhaitez.",
  },
  {
    question: "Qu'est-ce que le 'Vercel Edge Network' ?",
    answer:
      "Au lieu d'héberger votre site sur un seul serveur centralisé (souvent à Paris ou Amsterdam), nous le déployons sur un réseau mondial de serveurs appelé CDN (Content Delivery Network). Concrètement, votre site charge aussi vite à Biarritz qu'à New York ou Tokyo. C'est l'infrastructure utilisée par les géants de la Tech pour garantir une disponibilité de 99.99% et des temps de réponse inférieurs à 50 millisecondes.",
  },
  {
    question: "L'Intelligence Artificielle écrit-elle tout mon site ?",
    answer:
      "Non, et c'est une distinction importante. L'IA que nous utilisons (comme GPT-4 ou Claude) génère le code répétitif, optimise la structure technique, et accélère les phases de prototypage. Cela réduit significativement les coûts de développement. Cependant, la stratégie marketing, le design émotionnel, l'architecture système et le copywriting de vente sont conçus par nos ingénieurs et consultants seniors. C'est l'alliance de l'expertise humaine et de la puissance de calcul.",
  },
  {
    question: "Puis-je modifier le contenu sans savoir coder ?",
    answer:
      "Absolument. Nous connectons systématiquement votre site à un CMS 'Headless' comme Sanity.io ou Contentful. Vous bénéficiez d'une interface d'administration ultra-simple (comparable à Word) pour modifier textes, images et même créer de nouvelles pages, sans aucun risque de casser le site. Nous vous formons en moins d'une heure lors de la livraison.",
  },
  {
    question: "Et si je veux ajouter des fonctionnalités plus tard ?",
    answer:
      "C'est justement la force de notre stack modulaire. Contrairement à un template WordPress figé où chaque nouvelle fonctionnalité nécessite un plugin (et ses failles de sécurité), notre architecture permet d'ajouter n'importe quelle fonctionnalité au fur et à mesure de votre croissance : système de réservation, espace membre sécurisé, intégration API tierce (CRM, comptabilité, paiement), e-commerce... Le tout sans compromettre la stabilité existante.",
  },
  {
    question: "Travaillez-vous avec les entreprises du Pays Basque ?",
    answer:
      "Oui, c'est notre ancrage principal. Nous sommes basés à Biarritz et nous travaillons avec des artisans, commerçants, restaurants, hôtels et PME de tout le BAB (Bayonne-Anglet-Biarritz) ainsi que de la côte landaise (Hossegor, Capbreton, Dax). Nous connaissons le tissu économique local et adaptons nos solutions aux besoins spécifiques des entreprises de la région : saisonnalité, clientèle touristique, concurrence locale.",
  },
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Pour un site vitrine standard (Pack Pottok), comptez 2 à 3 semaines ouvrées. Pour un projet e-commerce ou sur-mesure (Pack Haizea), nous planifions 4 à 6 semaines de développement. Ces délais incluent les phases de conception, développement, tests et formation. Nous privilégions la qualité à la précipitation car un site bien construit vous servira pendant des années.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer:
      "Oui, nous comprenons que l'investissement peut être conséquent pour une TPE ou un artisan. Nous proposons un paiement en 2 fois sans frais (50% à la commande, 50% à la livraison) sur tous nos packs. Pour les projets supérieurs à 3000€, un échelonnement en 3 fois est possible. Nous acceptons les virements bancaires et les paiements par carte via Stripe.",
  },
];
