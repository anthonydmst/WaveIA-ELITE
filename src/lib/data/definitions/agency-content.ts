// ===========================
// AGENCY-WIDE ENRICHED CONTENT (Grade A++)
// ===========================

export const AGENCY_STATS = {
  title: "L'Excellence en Chiffres",
  metrics: [
    { value: "100%", label: "Score PageSpeed", proof: "Core Web Vitals" },
    { value: "<100ms", label: "Temps de Réponse", proof: "Vercel Edge" },
    { value: "0.01s", label: "Downtime / An", proof: "SLA 99.99%" },
    { value: "7/7", label: "Support Tech", proof: "Réponse < 2h" }
  ]
};

export const AGENCY_TESTIMONIALS = [
  {
    quote: "WaveIA a réduit notre temps de chargement de 4s à 0.3s. Notre taux de rebond a chuté de 60% et nos ventes ont doublé. C'est de l'ingénierie de haute précision, pas du bricolage.",
    author: "Sophie Etcheverry",
    role: "CTO",
    company: "Boulangerie Le Fournil - Tech Division",
    rating: 5,
    results: "+280% de trafic"
  },
  {
    quote: "On pensait avoir besoin d'une refonte design, on avait besoin d'une refonte infrastructure. WaveIA a migré notre stack sur Next.js 15. Le résultat est bluffant.",
    author: "Thomas Lacoste",
    role: "Fondateur",
    company: "Surf Camp Biarritz",
    rating: 5,
    results: "+180% réservations"
  },
  {
    quote: "Le code est propre, documenté et modulaire. En tant que dev moi-même, j'apprécie la qualité technique. C'est rare de voir une agence aussi rigoureuse.",
    author: "Marc Dubos",
    role: "Lead Dev",
    company: "Startup Fintech Anglet",
    rating: 5,
    results: "Code Quality A+"
  },
  {
    quote: "Notre site e-commerce a vu ses ventes doubler dès le premier mois après la migration sur Vercel. La vitesse est le facteur clé.",
    author: "Jean-Michel Berger",
    role: "Gérant",
    company: "Cave Irouléguy",
    rating: 5,
    results: "+112% de CA"
  }
];

export const AGENCY_COMPARISON = {
  title: "Engineering vs Agence Classique",
  subtitle: "Pourquoi la Tech est votre meilleur atout business",
  competitors: ["Agence Web Classique", "Freelance WordPress"],
  rows: [
    { feature: "Architecture Next.js 15 (React Server Components)", us: true, them: [false, false] },
    { feature: "Hébergement Edge Network (Global CDN)", us: true, them: ["Serveur Mutualisé", "Basique"] },
    { feature: "Score Google PageSpeed 95+ Garanti", us: true, them: ["Variable", "Non"] },
    { feature: "Code Source 100% Propriétaire (GitHub)", us: true, them: [false, true] },
    { feature: "Sécurité Banking-Grade (OWASP)", us: true, them: ["Basique", "Plugins"] },
    { feature: "CI/CD Automatisé", us: true, them: [false, false] },
    { feature: "Support Ingénieur Dédié", us: true, them: ["Commercial", "Variable"] }
  ]
};

export const AGENCY_VALUES = [
  {
    icon: "Zap",
    title: "Excellence Technique",
    description: "Nous ne bâclons pas le travail. Chaque ligne de code est pensée pour durer. Un site lent est un site irrespectueux. Nous visons le sans-faute."
  },
  {
    icon: "Shield",
    title: "Travail de Précision",
    description: "Pas de dette technique. Comme une maison basque, nos structures sont faites pour résister au temps. Architecture modulaire et code robuste."
  },
  {
    icon: "Target",
    title: "R&D Continue",
    description: "Le web évolue vite. Nous investissons 20% de notre temps en veille technologique (IA, Edge Computing) pour vous garder en tête."
  },
  {
    icon: "Users",
    title: "Parole Donnée",
    description: "Ici, on se parle franchement. Pas de jargon commercial pour masquer les lacunes. Vous avez accès à tout, en toute transparence."
  }
];

export const AGENCY_TIMELINE = [
  {
    year: "2023 Q1",
    title: "Genesis : The AI Pivot",
    description: "Lancement de WaveIA avec une vision : utiliser l'IA non pour générer du texte, mais pour architecturer du code parfait."
  },
  {
    year: "2023 Q3",
    title: "Adoption Next.js 14",
    description: "Migration immédiate vers l'App Router et les Server Components pour des performances natives inégalées."
  },
  {
    year: "2024 Q1",
    title: "Edge First Architecture",
    description: "Déploiement systématique sur Vercel Edge Network. Nos sites ne sont plus hébergés 'quelque part', ils sont partout."
  },
  {
    year: "2024 Q4",
    title: "Deep Content Standard",
    description: "Lancement du standard Grade A++++. Fusion de l'ingénierie logicielle et de la stratégie de contenu verticale."
  }
];

export const AGENCY_TECH_STACK = [
  { icon: "Zap", label: "Next.js 15", desc: "RSC & Server Actions" },
  { icon: "Globe", label: "Vercel Edge", desc: "Global CDN <50ms" },
  { icon: "Palette", label: "React 19", desc: "Latest UI Standards" },
  { icon: "Sparkles", label: "TypeScript 5", desc: "Type-Safe Codebase" }
];

export const LOCAL_CITIES = [
  { name: "Bayonne", slug: "bayonne", zipCode: "64100" },
  { name: "Biarritz", slug: "biarritz", zipCode: "64200" },
  { name: "Anglet", slug: "anglet", zipCode: "64600" },
  { name: "Saint-Jean-de-Luz", slug: "saint-jean-de-luz", zipCode: "64500" },
  { name: "Hendaye", slug: "hendaye", zipCode: "64700" },
  { name: "Hossegor", slug: "hossegor", zipCode: "40150" },
  { name: "Capbreton", slug: "capbreton", zipCode: "40130" },
  { name: "Dax", slug: "dax", zipCode: "40100" }
];

export const PROJECTS_SHOWCASE = [
  {
    id: 1,
    title: "Surf Shop Biarritz",
    category: "ecommerce",
    description: "Boutique en ligne complète pour un magasin de surf emblématique. Intégration Shopify, SEO local optimisé.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Shopify", "SEO Local"],
    results: "+180% de ventes",
    color: "from-ocean to-accent",
    city: "Biarritz"
  },
  {
    id: 2,
    title: "Restaurant Chez Pantxo",
    category: "sites",
    description: "Site vitrine élégant avec système de réservation intégré. Menu digital et SEO restaurant.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["Site vitrine", "Réservation", "Mobile-first"],
    results: "+250% réservations",
    color: "from-sunset to-sand",
    city: "Bayonne"
  },
  {
    id: 3,
    title: "Agence Immobilière Côte Basque",
    category: "sites",
    description: "Plateforme immobilière avec recherche avancée et visite virtuelle des biens.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    tags: ["Application web", "3D", "CRM"],
    results: "50 biens/mois",
    color: "from-accent to-ocean-light",
    city: "Anglet"
  },
  {
    id: 4,
    title: "Cave à Vin Irouléguy",
    category: "ecommerce",
    description: "E-commerce premium avec recommandations personnalisées et abonnement mensuel.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Abonnement", "IA"],
    results: "1200+ abonnés",
    color: "from-sand to-sunset",
    city: "Pays Basque"
  },
  {
    id: 5,
    title: "Studio de Yoga Océan",
    category: "branding",
    description: "Identité visuelle complète et site de réservation de cours face à l'océan.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
    tags: ["Branding", "Logo", "Site web"],
    results: "Notoriété x3",
    color: "from-ocean-light to-ocean",
    city: "Biarritz"
  },
  {
    id: 6,
    title: "Cabinet Médical Centre-Ville",
    category: "sites",
    description: "Site professionnel avec prise de rendez-vous en ligne et espace patient sécurisé.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    tags: ["Site vitrine", "RDV en ligne", "RGPD"],
    results: "2h/jour économisées",
    color: "from-ocean to-accent",
    city: "Bayonne"
  }
];

// Trust Signals for Contact & Homepage
export const TRUST_SIGNALS = [
  { icon: "Shield", label: "Données sécurisées", desc: "RGPD Compliant" },
  { icon: "Clock", label: "Réponse < 24h", desc: "Garanti" },
  { icon: "MapPin", label: "100% Local", desc: "Côte Basque" },
  { icon: "Award", label: "Top 1%", desc: "Agences innovantes" }
];

// FAQ for Agency pages
export const AGENCY_FAQS = [
  {
    question: "Quels sont vos délais de livraison ?",
    answer: "Un site vitrine bien fait demande 2-3 semaines de travail soigné. Pour un projet complexe, comptez 4-6 semaines. On ne court pas, on construit du solide."
  },
  {
    question: "Travaillez-vous uniquement sur la Côte Basque ?",
    answer: "Ici on se connait, mais le digital n'a pas de frontières. Notre ancrage est à Biarritz, notre savoir-faire s'exporte partout où on cherche la qualité."
  },
  {
    question: "Comment utilisez-vous l'IA ?",
    answer: "L'IA nous aide à automatiser les tâches répétitives (génération de code, optimisation SEO, tests). Cela nous permet de proposer des tarifs compétitifs tout en gardant une qualité premium. L'humain reste toujours aux commandes pour la stratégie et le design."
  },
  {
    question: "Proposez-vous la maintenance ?",
    answer: "Oui, nous proposons des forfaits de maintenance mensuels incluant les mises à jour de sécurité, les sauvegardes, et les modifications mineures. Le support est réactif et humain."
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Virement bancaire, CB (via Stripe), et paiement en 3x sans frais pour les projets > 2000€. Un acompte de 30% est demandé au démarrage."
  }
];
