/**
 * 🏢 AGENCY MASTER CONTENT (Grade A++ God Mode)
 * Single Source of Truth for all agency-wide marketing content.
 * Consolidated from legacy fragments to optimize LLM context and hygiene.
 */

import { DeepContent } from "../types";

// ============================================
// PART 1: AGENCY-WIDE SIGNALS
// ============================================

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

export const TRUST_SIGNALS = [
  { icon: "Shield", label: "Données sécurisées", desc: "RGPD Compliant" },
  { icon: "Clock", label: "Réponse < 24h", desc: "Garanti" },
  { icon: "MapPin", label: "100% Local", desc: "Côte Basque" },
  { icon: "Award", label: "Top 1%", desc: "Agences innovantes" }
];

// ============================================
// PART 2: VERTICAL CONTENT (DeepContent)
// ============================================

export const CONTENT_AGENCE_HUB: DeepContent = {
  problem: {
    title: "Votre marque est-elle mémorable ?",
    text: "Dans le Sud-Ouest, les marques se ressemblent toutes. Logo inspiré du piment d'Espelette, typo basique, couleurs fades. Pour attirer une clientèle premium (Luxe, Immobilier, Tourisme), votre identité doit incarner vos ambitions, pas votre géographie. Ne soyez pas une autre agence locale, soyez une Marque.",
    painPoints: [
      "Identité visuelle \"bricolée\" qui manque de cohérence",
      "Réseaux sociaux alimentés sans ligne directrice",
      "Supports print qui finissent à la poubelle",
      "Aucun sentiment d'appartenance pour vos clients"
    ]
  },
  solution: {
    title: "Branding & Stratégie 360°",
    text: "Nous construisons des écosystèmes de marque complets. De l'identité visuelle (Logo, Typos) à la tonalité éditoriale, en passant par la stratégie digitale. Nous transformons votre entreprise en une Marque Forte, capable de justifier des prix premium et de fidéliser sans effort.",
    methodology: [
      { step: "Identité de Marque", details: "Création de votre ADN visuel et verbal unique." },
      { step: "Système de Design", details: "Déclinaison cohérente sur le Web, Print, et Social." },
      { step: "Activation Digitale", details: "Lancement de campagnes ciblées pour engager votre audience." }
    ]
  },
  tech_stack: {
    title: "Notre Studio Créatif",
    description: "Des outils de pointe pour une direction artistique de niveau international.",
    items: [
      { name: "Figma Pro", benefit: "Collaboration design temps réel et prototypage haute-fidélité.", icon: "Palette" },
      { name: "Adobe CC", benefit: "Suite complète pour des visuels vectoriels et retouchés.", icon: "Zap" },
      { name: "Midjourney v6", benefit: "Génération d'assets IA uniques pour enrichir vos visuels.", icon: "Globe" }
    ]
  },
  local_market_fit: {
    title: "L'Esthétique 'Côte Basque' Réinventée",
    subtitle: "Incarner le territoire sans tomber dans le folklore.",
    points: [
      { title: "Élégance Océanique", description: "Des codes visuels épurés qui rappellent l'océan sans mettre des vagues partout." },
      { title: "Cible CSP+", description: "Un branding calibré pour séduire la clientèle haut de gamme de la région." },
      { title: "Bilinguisme Subtil", description: "Intégration du Basque dans la communication de manière moderne et inclusive." }
    ]
  },
  process_detailed: {
    title: "La Genèse de Votre Marque",
    steps: [
      { name: "Workshop Identité", duration: "Semaine 1", deliverables: ["Plateforme de Marque", "Moodboard"] },
      { name: "Création Logo", duration: "Semaine 2-3", deliverables: ["3 Pistes Créatives", "Déclinaisons"] },
      { name: "Design System", duration: "Semaine 4", deliverables: ["Charte Graphique", "Templates RS"] },
      { name: "Brand Guidelines", duration: "Semaine 5", deliverables: ["Brand Book PDF", "Assets Finaux"] }
    ]
  },
  benefits: {
    title: "Pourquoi une Agence ?",
    items: [
      { title: "Cohérence Totale", text: "Chaque support véhicule le même message, la même émotion.", icon: "Palette" },
      { title: "Différenciation", text: "Sortez du lot face à des concurrents interchangeables.", icon: "Star" },
      { title: "Crédibilité", text: "Une image pro inspire confiance dès le premier regard.", icon: "Award" }
    ]
  },
  stats: {
    title: "L'Impact d'une Marque Forte",
    metrics: [
      { value: "89%", label: "Achat par Confiance", proof: "Étude Nielsen" },
      { value: "3x", label: "Mémorisation Logo Pro", proof: "vs Amateur" },
      { value: "+45%", label: "Engagement Social", proof: "Clients WaveIA" },
      { value: "4.9/5", label: "Satisfaction", proof: "Google Reviews" }
    ]
  },
  testimonial: {
    quote: "Avant WaveIA, notre image était floue. Aujourd'hui on a une marque forte, reconnaissable. On nous dit souvent 'j'ai vu votre pub, j'aurais su que c'était vous même sans le logo'.",
    author: "Céline Durand",
    role: "Fondatrice",
    company: "Maison Côte Basque",
    rating: 5
  },
  comparison: {
    title: "Agence Créative vs Freelance",
    competitors: ["Freelance Graphiste", "Outils DIY (Canva)"],
    rows: [
      { feature: "Vision stratégique globale", us: true, them: [false, false] },
      { feature: "Cohérence multi-support", us: true, them: ["Variable", false] },
      { feature: "Charte graphique complète", us: true, them: ["Partiel", false] },
      { feature: "Suivi long terme", us: true, them: [false, false] },
      { feature: "Direction artistique", us: true, them: ["Limité", false] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo", label: "Visibilité SEO" },
    { slug: "/agence-communication/identite-visuelle", label: "Identité Visuelle" }
  ]
};

export const CONTENT_AGENCE_IDENTITE: DeepContent = {
  problem: {
    title: "Votre logo date de l'époque MSN ?",
    text: "Un logo vieillot, des couleurs qui clash, une typographie illisible. Votre identité visuelle raconte une histoire que vous n'avez pas écrite. Pire : elle fait fuir vos prospects avant même qu'ils découvrent vos services.",
    painPoints: [
      "Logo qui ne passe pas en petit format (favicon, réseaux)",
      "Aucune déclinaison (monochrome, inversé, icône)",
      "Couleurs non définies (chaque support a sa 'version')",
      "Pas de charte pour guider vos prestataires"
    ]
  },
  solution: {
    title: "Une Identité Qui Respire la Crédibilité",
    text: "Nous créons des identités visuelles qui durent. Logo polyvalent, palette de couleurs harmonieuse, typographies assorties et charte graphique complète. Votre marque devient instantanément reconnaissable, professionnelle et mémorable.",
    methodology: [
      { step: "Brief Créatif", details: "Exploration de vos valeurs, votre cible, votre positionnement." },
      { step: "Exploration Visuelle", details: "3 pistes créatives avec moodboards et premières ébauches." },
      { step: "Charte Complète", details: "Livraison logo + déclinaisons + charte d'usage détaillée." }
    ]
  },
  tech_stack: {
    title: "Studio Design",
    description: "Des outils professionnels pour des marques professionnelles.",
    items: [
      { name: "Adobe Illustrator", benefit: "Vecteurs infinis pour impression HD", icon: "PenTool" },
      { name: "Pantone Connect", benefit: "Couleurs fidèles sur tous supports", icon: "Palette" },
      { name: "Figma", benefit: "Librairie de composants partagée", icon: "Layout" }
    ]
  },
  local_market_fit: {
    title: "Design Sud-Ouest",
    subtitle: "L'équilibre entre tradition et modernité.",
    points: [
      { title: "Codes Culturels", description: "Comprendre l'imagerie basque/landaise sans tomber dans le cliché." },
      { title: "Standing", description: "Une esthétique épurée qui parle à la clientèle CSP+ de la côte." },
      { title: "Print Ready", description: "Fichiers optimisés pour les imprimeurs locaux." }
    ]
  },
  process_detailed: {
    title: "Création de Logo",
    steps: [
      { name: "Immersion", duration: "Semaine 1", deliverables: ["Moodboard", "Benchmark"] },
      { name: "Esquisses", duration: "Semaine 2", deliverables: ["3 Concepts N&B"] },
      { name: "Finalisation", duration: "Semaine 3", deliverables: ["Vectorisation", "Charte"] }
    ]
  },
  benefits: {
    title: "Le Pouvoir d'un Logo Pro",
    items: [
      { title: "1ère Impression", text: "7 secondes pour convaincre. Votre logo parle pour vous.", icon: "Eye" },
      { title: "Cohérence", text: "Déclinaisons pour web, print, réseaux, PLV...", icon: "Layers" },
      { title: "Pérennité", text: "Un design intemporel qui vieillit bien.", icon: "Clock" }
    ]
  },
  stats: {
    title: "ROI Identité Visuelle",
    metrics: [
      { value: "80%", label: "Reconnaissance Couleur", proof: "Avant Logo" },
      { value: "10+", label: "Déclinaisons Logo", proof: "Par Projet" },
      { value: "5-10 ans", label: "Durée de Vie", proof: "Design Intemporel" },
      { value: "4.9/5", label: "Satisfaction", proof: "Clients" }
    ]
  },
  testimonial: {
    quote: "Notre ancien logo était sympa mais amateur. Le nouveau dégag une crédibilité folle. On ose enfin le mettre partout : camion, vitrine, réseaux. C'est nous, en mieux.",
    author: "Thomas Etcheverry",
    role: "Gérant",
    company: "Menuiserie Etcheverry",
    rating: 5
  },
  comparison: {
    title: "Création Pro vs Logo 5€",
    competitors: ["Fiverr/99designs", "Canva DIY"],
    rows: [
      { feature: "Brief stratégique approfondi", us: true, them: [false, false] },
      { feature: "Déclinaisons complètes", us: true, them: ["Payant", false] },
      { feature: "Fichiers sources vectoriels", us: true, them: ["Variable", false] },
      { feature: "Charte graphique", us: true, them: [false, false] },
      { feature: "Révisions illimitées", us: true, them: ["Payant", false] }
    ]
  },
  relatedServices: [
    { slug: "/creation-site-internet/site-vitrine", label: "Site Vitrine" },
    { slug: "/agence-communication/reseaux-sociaux", label: "Réseaux Sociaux" }
  ]
};

export const CONTENT_AGENCE_STRATEGIE: DeepContent = {
  problem: {
    title: "Vous communiquez... dans le vide ?",
    text: "Posts réseaux sociaux aléatoires, pub Facebook sans tracking, site sans analytics. Vous dépensez du temps et de l'argent sans savoir ce qui fonctionne. Aucune vision long terme, juste de l'improvisation.",
    painPoints: [
      "Pas de calendrier éditorial",
      "Réseaux sociaux gérés 'quand on a le temps'",
      "Aucun KPI défini (vous ne savez pas ce que vous visez)",
      "Budget pub sans mesure de ROI"
    ]
  },
  solution: {
    title: "Une Feuille de Route Claire",
    text: "Nous définissons votre stratégie digitale complète. Objectifs SMART, persona cibles, canaux prioritaires, calendrier éditorial et KPIs. Chaque action est mesurée, chaque euro investi est tracké. Fini l'improvisation.",
    methodology: [
      { step: "Audit 360°", details: "Analyse de votre présence actuelle et benchmark concurrence." },
      { step: "Stratégie Sur-Mesure", details: "Définition des objectifs, canaux et messages clés." },
      { step: "Plan d'Action", details: "Calendrier à 6-12 mois avec indicateurs de succès." }
    ]
  },
  tech_stack: {
    title: "Stack Marketing Digital",
    description: "Pilotage data-driven de votre croissance.",
    items: [
      { name: "Google Analytics 4", benefit: "Tracking précis du parcours client", icon: "BarChart" },
      { name: "Meta Business", benefit: "Gestion centralisée Pubs & Social", icon: "Share2" },
      { name: "Looker Studio", benefit: "Dashboards temps réel lisibles", icon: "PieChart" }
    ]
  },
  local_market_fit: {
    title: "Stratégie Territoriale",
    subtitle: "Parler aux locaux, pas aux robots.",
    points: [
      { title: "Ciblage Géographique", description: "Campagnes Ads ultra-précises (rayon km autour de votre point de vente)." },
      { title: "Influence Locale", description: "Identification des acteurs clés du territoire pour partenariats." },
      { title: "Saisonnalité", description: "Adapter le discours aux flux touristiques vs résidents." }
    ]
  },
  process_detailed: {
    title: "Déploiement Stratégique",
    steps: [
      { name: "Audit & Cibles", duration: "Semaine 1", deliverables: ["Personas", "Audit Concurrentiel"] },
      { name: "Plan d'Attaque", duration: "Semaine 2", deliverables: ["Calendrier Édito", "Budget Média"] },
      { name: "Setup Tracking", duration: "Semaine 3", deliverables: ["Pixel Facebook", "Events GA4"] }
    ]
  },
  benefits: {
    title: "Pourquoi une Stratégie ?",
    items: [
      { title: "Clarté", text: "Savoir quoi faire, quand et pourquoi.", icon: "Target" },
      { title: "Efficacité", text: "Concentrer les efforts sur ce qui performe.", icon: "Zap" },
      { title: "Mesure", text: "Prouver le ROI de chaque action.", icon: "BarChart" }
    ]
  },
  stats: {
    title: "Impact Stratégie Digitale",
    metrics: [
      { value: "+220%", label: "ROI Moyen", proof: "Clients Accompagnés" },
      { value: "12 mois", label: "Vision Stratégique", proof: "Minimum" },
      { value: "15+", label: "KPIs Suivis", proof: "Dashboard" },
      { value: "4.8/5", label: "Satisfaction", proof: "Reviews" }
    ]
  },
  testimonial: {
    quote: "On faisait des posts quand on y pensait, sans stratégie. Maintenant on a un planning, des objectifs et surtout des RÉSULTATS mesurables. Le game changer.",
    author: "Sophie Martin",
    role: "Directrice Marketing",
    company: "Surf & Travel",
    rating: 5
  },
  comparison: {
    title: "Stratégie Pro vs Improvisation",
    competitors: ["Gestion Interne", "CM Freelance"],
    rows: [
      { feature: "Vision stratégique 12 mois", us: true, them: [false, "Partiel"] },
      { feature: "Benchmark concurrence", us: true, them: [false, false] },
      { feature: "Tableaux de bord KPIs", us: true, them: [false, false] },
      { feature: "Formation équipe interne", us: true, them: [false, false] },
      { feature: "Révision trimestrielle", us: true, them: [false, "Variable"] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo", label: "SEO Technique" },
    { slug: "/agence-communication/reseaux-sociaux", label: "Social Media" }
  ]
};

export const CONTENT_AGENCE_PHOTO: DeepContent = {
  problem: {
    title: "Vos photos font fuir vos clients ?",
    text: "Photos smartphone floues, vidéos tremblantes, visuels récupérés sur Google. Votre image de marque en prend un coup. Sur Instagram, les internautes scrollent en 1.3 seconde. Vos visuels amateurs ne retiennent personne.",
    painPoints: [
      "Photos produits/locaux de qualité médiocre",
      "Aucune vidéo de présentation (pourtant 80% du trafic web)",
      "Visuels génériques de banque d'images",
      "Pas de cohérence visuelle dans vos contenus"
    ]
  },
  solution: {
    title: "Des Visuels Qui Vendent",
    text: "Shooting photo professionnel, vidéos corporate et réseaux adaptés aux codes de votre secteur. Nous créons une banque d'images propriétaire qui vous appartient et reflète vraiment votre identité. Fini les photos stock génériques.",
    methodology: [
      { step: "Brief Visuel", details: "Définition du mood, des formats et des usages prévus." },
      { step: "Shooting Sur Site", details: "Captation pro avec équipement broadcast/cinema." },
      { step: "Post-Production", details: "Retouche, montage, colorimétrie et livraison multi-format." }
    ]
  },
  tech_stack: {
    title: "Matériel Studio Pro",
    description: "La qualité magazine à votre service.",
    items: [
      { name: "Canon R5", benefit: "45 Mégapixels Haute Définition", icon: "Camera" },
      { name: "Profoto B10", benefit: "Éclairage Studio Mobile", icon: "Zap" },
      { name: "Lightroom", benefit: "Post-production colorimétrique", icon: "Edit3" }
    ]
  },
  local_market_fit: {
    title: "Image de Marque Sud-Ouest",
    subtitle: "Authenticité et Lifestyle.",
    points: [
      { title: "Lifestyle Basque", description: "Photos en situation réelle (océan, montagne, ville)." },
      { title: "Météo Compatible", description: "Équipement tropicalisé pour shooter même sous le crachin." },
      { title: "Casting Local", description: "Accès à un réseau de modèles et figurants locaux." }
    ]
  },
  process_detailed: {
    title: "Shooting Premium",
    steps: [
      { name: "Moodboard", duration: "J-7", deliverables: ["Direction Artistique"] },
      { name: "Shooting", duration: "Jour J", deliverables: ["Captation"] },
      { name: "Retouche", duration: "J+7", deliverables: ["Galerie HD"] }
    ]
  },
  benefits: {
    title: "L'Impact du Visuel Pro",
    items: [
      { title: "Crédibilité x10", text: "Des visuels pro inspirent confiance instantanément.", icon: "Camera" },
      { title: "Conversion", text: "Pages avec vidéo = +80% de conversion.", icon: "TrendingUp" },
      { title: "Réutilisation", text: "Une banque d'images pour tous vos supports.", icon: "FolderOpen" }
    ]
  },
  stats: {
    title: "ROI Production Visuelle",
    metrics: [
      { value: "+80%", label: "Conversion", proof: "Pages avec Vidéo" },
      { value: "1200%", label: "Partages Vidéo", proof: "vs Texte Seul" },
      { value: "50+", label: "Visuels Livrés", proof: "Par Shooting" },
      { value: "4K HDR", label: "Qualité Standard", proof: "Broadcast Ready" }
    ]
  },
  testimonial: {
    quote: "On hésitait sur le budget shooting. Résultat : notre page d'accueil avec la vidéo drone convertit 3x mieux. L'investissement a été rentabilisé en un mois.",
    author: "Marie Lacoste",
    role: "Gérante",
    company: "Hôtel Les Vagues",
    rating: 5
  },
  comparison: {
    title: "Shooting Pro vs Smartphone",
    competitors: ["Photo Smartphone", "Banque d'Images"],
    rows: [
      { feature: "Images 100% uniques", us: true, them: [true, false] },
      { feature: "Qualité broadcast/print", us: true, them: [false, "Variable"] },
      { feature: "Direction artistique", us: true, them: [false, false] },
      { feature: "Vidéo drone autorisée", us: true, them: [false, "Payant"] },
      { feature: "Droits d'usage illimités", us: true, them: [true, "Limité"] }
    ]
  }
};

export const CONTENT_AGENCE_RESEAUX: DeepContent = {
  problem: {
    title: "Vos réseaux sont un désert ?",
    text: "3 posts par mois, 12 likes de la famille, des commentaires qui restent sans réponse. Vos réseaux sociaux existent mais ne travaillent pas pour vous. Pendant ce temps, vos concurrents engagent leur communauté et captent vos prospects.",
    painPoints: [
      "Posts irréguliers sans calendrier",
      "Aucun engagement (likes de complaisance)",
      "Pas de stratégie de contenu (on poste pour poster)",
      "0 conversion (followers ≠ clients)"
    ]
  },
  solution: {
    title: "Des Réseaux Qui Convertissent",
    text: "Stratégie social media, création de contenu, community management et publicité ciblée. Nous transformons vos réseaux en véritables canaux d'acquisition. Vos followers deviennent des prospects, puis des clients.",
    methodology: [
      { step: "Audit Social", details: "Analyse de vos comptes et benchmark concurrentiel." },
      { step: "Plan Éditorial", details: "Calendrier 30/60/90 jours avec types de posts." },
      { step: "Animation & Ads", details: "Publication, modération et campagnes payantes optimisées." }
    ]
  },
  tech_stack: {
    title: "Social Toolset",
    description: "Pilotez vos réseaux comme un pro.",
    items: [
      { name: "Metricool", benefit: "Planification & Analytics unifiés", icon: "BarChart" },
      { name: "Canva Pro", benefit: "Design rapide & Templates marque", icon: "Layout" },
      { name: "Meta Business", benefit: "Gestion Ads & Audience", icon: "Target" }
    ]
  },
  local_market_fit: {
    title: "Community Management Local",
    subtitle: "Parler aux gens d'ici.",
    points: [
      { title: "Influence Locale", description: "Collaboration avec influenceurs et comptes locaux (Biarritz, Bayonne)." },
      { title: "Événements", description: "Couverture en live de vos événements locaux." },
      { title: "Langage", description: "Ton adapté à la culture locale (surf, rugby, gastronomie)." }
    ]
  },
  process_detailed: {
    title: "Machine Sociale",
    steps: [
      { name: "Audit & Strat", duration: "Semaine 1", deliverables: ["Ligne Éditoriale"] },
      { name: "Création", duration: "Mensuelle", deliverables: ["Calendrier Validé"] },
      { name: "Reporting", duration: "Mensuel", deliverables: ["KPIs & Croissance"] }
    ]
  },
  benefits: {
    title: "Pourquoi un CM Pro ?",
    items: [
      { title: "Régularité", text: "La constance est la clé de l'algorithme.", icon: "Calendar" },
      { title: "Engagement", text: "Du contenu qui fait réagir, pas juste défiler.", icon: "MessageCircle" },
      { title: "Conversion", text: "Des followers qui deviennent clients.", icon: "ShoppingCart" }
    ]
  },
  stats: {
    title: "Performance Social Media",
    metrics: [
      { value: "+340%", label: "Engagement", proof: "Moyenne Clients" },
      { value: "12", label: "Posts/Mois", proof: "Minimum" },
      { value: "24h", label: "Temps Réponse", proof: "Community Mgmt" },
      { value: "5.2%", label: "Taux Engagement", proof: "vs 1.2% Moyenne" }
    ]
  },
  testimonial: {
    quote: "En 3 mois, on est passé de 200 à 2500 followers. Mais surtout, on a des demandes en DM chaque semaine qui se transforment en reservations. Les réseaux travaillent enfin pour nous.",
    author: "Nicolas Aguirre",
    role: "Chef",
    company: "Restaurant Zuberoa",
    rating: 5
  },
  comparison: {
    title: "CM Agence vs Gestion Interne",
    competitors: ["Gestion Interne", "CM Freelance"],
    rows: [
      { feature: "Stratégie intégrée à la marque", us: true, them: [false, "Variable"] },
      { feature: "Création visuels professionnels", us: true, them: [false, "Variable"] },
      { feature: "Gestion des campagnes Ads", us: true, them: [false, "Parfois"] },
      { feature: "Reporting mensuel détaillé", us: true, them: [false, "Variable"] },
      { feature: "Modération 7j/7", us: true, them: ["Limité", "Variable"] }
    ]
  }
};

import { AGENCY_FAQS } from "./faq-master";

// ============================================
// PART 3: AGENCY FAQS & UTILS
// ============================================

export { AGENCY_FAQS };
