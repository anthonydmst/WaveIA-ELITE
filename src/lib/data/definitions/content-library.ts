import { DeepContent } from "../types";
import { CONTENT_SEO_HUB } from "./content-seo";
import { CONTENT_AGENCE_HUB } from "./content-agence";

export const CONTENT_SITE_VITRINE: DeepContent = {
  problem: {
    title: "Votre image ne reflète pas votre expertise ?",
    text: "85% des consommateurs visitent le site web d'une entreprise avant de se déplacer ou d'appeler. Un site amateur, lent ou inexistant envoie un signal désastreux : 'Cette entreprise n'est pas fiable'.",
    painPoints: [
      "Vous perdez des clients au profit de concurrents plus 'visibles'",
      "Votre site actuel est introuvable sur Google",
      "Vous avez honte de donner l'adresse de votre site à vos prospects",
      "Le design est resté bloqué dans les années 2010"
    ]
  },
  solution: {
    title: "Un Site Vitrine Premium qui convertit",
    text: "Nous ne créons pas de simples pages web. Nous bâtissons votre meilleur commercial digital, disponible 24h/24. Une vitrine immersive, rapide et conçue pour convaincre en moins de 3 secondes.",
    methodology: [
      { step: "Architecture Séduisante", details: "UX Design étudié pour guider le visiteur vers le contact." },
      { step: "Copywriting Persuasif", details: "Des textes qui parlent à vos clients, pas du jargon technique." },
      { step: "Technologie de Pointe", details: "Next.js & React pour une vitesse instantanée inégalée par WordPress." }
    ]
  },
  benefits: {
    title: "Pourquoi les leaders locaux nous choisissent",
    items: [
      { title: "Vitesse Éclair", text: "Score Google PageSpeed 95+. Google adore, vos clients aussi.", icon: "Zap" },
      { title: "Design Unique", text: "Pas de templates vus et revus. Une identité propre à vous.", icon: "Palette" },
      { title: "SEO Native", text: "Structure optimisée pour le référencement naturel dès la première ligne de code.", icon: "Search" }
    ]
  },
  stats: {
    title: "Nos Résultats en Chiffres",
    metrics: [
      { value: "95+", label: "Score PageSpeed Moyen", proof: "Google Lighthouse" },
      { value: "+147%", label: "Trafic Moyen Client", proof: "Analytics 2024" },
      { value: "<3s", label: "Temps de Chargement", proof: "GTMetrix" },
      { value: "4.9/5", label: "Satisfaction Client", proof: "Google Reviews" }
    ]
  },
  testimonial: {
    quote: "Notre nouveau site a complètement transformé notre image. On reçoit maintenant des demandes de devis qualifiées chaque semaine. L'investissement a été rentabilisé en 3 mois.",
    author: "Marie Dupont",
    role: "Gérante",
    company: "Boulangerie Le Fournil",
    rating: 5
  },
  comparison: {
    title: "WaveIA vs Les Alternatives",
    subtitle: "Pourquoi nous choisir plutôt qu'un template ou une agence classique ?",
    competitors: ["WordPress/Template", "Wix/Squarespace"],
    rows: [
      { feature: "Vitesse de chargement", us: "< 1 seconde", them: ["3-5 secondes", "2-4 secondes"] },
      { feature: "Design sur-mesure", us: true, them: [false, false] },
      { feature: "SEO optimisé natif", us: true, them: [false, false] },
      { feature: "Propriété du code", us: true, them: [true, false] },
      { feature: "Support humain local", us: true, them: [false, false] },
      { feature: "Évolutions illimitées", us: true, them: [false, false] }
    ]
  },
  tech_stack: {
    title: "Stack Technique Vitrine",
    description: "Le combo gagnant pour des performances Google optimales.",
    items: [
      { name: "Next.js 15", benefit: "Rendu instantané (RSC)", icon: "Zap" },
      { name: "Tailwind v4", benefit: "Design ultra-léger (0kb runtime)", icon: "Palette" },
      { name: "Vercel Edge", benefit: "Hébergement mondial <50ms", icon: "Globe" }
    ]
  },
  local_market_fit: {
    title: "Conçu pour le Pays Basque",
    subtitle: "Un site qui parle aux codes locaux.",
    points: [
      { title: "Mobile First", description: "Indispensable pour capter les touristes et locaux sur smartphone." },
      { title: "SEO Local", description: "Architecture optimisée pour ressortir sur 'Activité + Ville'." },
      { title: "Multilingue Ready", description: "Facilement traduisible (ES/EN) pour la clientèle frontalière." }
    ]
  },
  process_detailed: {
    title: "Déroulement du Projet",
    steps: [
      { name: "Discovery", duration: "Semaine 1", deliverables: ["Arborescence", "Maquettes UX"] },
      { name: "Design UI", duration: "Semaine 2", deliverables: ["Maquettes Haute-Fidélité Figma"] },
      { name: "Développement", duration: "Semaine 3", deliverables: ["Déploiement Vercel", "Contenu"] }
    ]
  },
  relatedServices: [
    { slug: "/agence-communication/identite-visuelle", label: "Création de Logo" },
    { slug: "/referencement-seo", label: "Référencement SEO" }
  ]
};

export const CONTENT_ECOMMERCE: DeepContent = {
  problem: {
    title: "Votre boutique en ligne stagne ?",
    text: "Avoir un e-commerce ne suffit plus. La concurrence est féroce. Si votre site est lent, complexe à naviguer ou n'inspire pas confiance, vos visiteurs partent sans acheter. Le 'Panier Abandonné' est l'ennemi n°1.",
    painPoints: [
      "Taux de conversion bloqué sous les 1%",
      "Pages produits qui mettent du temps à charger sur mobile",
      "Processus de commande (Checkout) trop long et frictionnel",
      "Gestion des stocks et des commandes chaotique"
    ]
  },
  solution: {
    title: "Une Machine de Guerre E-commerce",
    text: "Transformez vos visiteurs en acheteurs fidèles. Nous concevons des boutiques Shopify ou WooCommerce optimisées pour la performance commerciale. Chaque pixel est pensé pour vendre.",
    methodology: [
      { step: "UX Transactionnelle", details: "Parcours d'achat simplifié en 3 clics maximum." },
      { step: "Réassurance Totale", details: "Intégration visible des avis, sécurisation SSL et badges de confiance." },
      { step: "Marketing Intégré", details: "Modules de relance panier, upsell et cross-sell natifs." }
    ]
  },
  benefits: {
    title: "Boostez votre Chiffre d'Affaires",
    items: [
      { title: "Mobile First", text: "70% des achats se font sur mobile. Votre site sera parfait sur smartphone.", icon: "Smartphone" },
      { title: "Paiement Fluide", text: "Intégration Stripe/Paypal optimisée pour réduire les abandons.", icon: "CreditCard" },
      { title: "Gestion Facile", text: "Interface d'administration intuitive pour gérer vos produits en autonomie.", icon: "LayoutDashboard" }
    ]
  },
  stats: {
    title: "Impact Mesurable sur vos Ventes",
    metrics: [
      { value: "+85%", label: "Conversion Mobile", proof: "A/B Testing" },
      { value: "-47%", label: "Panier Abandonné", proof: "Hotjar Analytics" },
      { value: "+62%", label: "Panier Moyen", proof: "Upsell Module" },
      { value: "24/7", label: "Ventes Automatisées", proof: "Shopify" }
    ]
  },
  testimonial: {
    quote: "Depuis la refonte de notre boutique, nos ventes ont explosé. Le checkout optimisé a divisé par 2 les abandons de panier. C'est du concret.",
    author: "Thomas Martin",
    role: "Fondateur",
    company: "Maison Basque",
    rating: 5
  },
  tech_stack: {
    title: "Stack E-Commerce Performance",
    description: "L'infrastructure des géants adaptée à votre échelle.",
    items: [
      { name: "Shopify / Woo", benefit: "Back-office puissant & intuitif", icon: "LayoutDashboard" },
      { name: "Stripe Payment", benefit: "Encaissement sécurisé universel", icon: "CreditCard" },
      { name: "Algolia Search", benefit: "Recherche produits instantanée", icon: "Search" }
    ]
  },
  local_market_fit: {
    title: "Vendre Ici et Ailleurs",
    subtitle: "Hybridation physique/digital pour commerçants locaux.",
    points: [
      { title: "Click & Collect", description: "Module de retrait en boutique pour vos clients locaux." },
      { title: "Zones Livraison", description: "Frais de port différenciés (Local vs National)." },
      { title: "Stock Unifié", description: "Synchronisation possible avec votre caisse physique." }
    ]
  },
  process_detailed: {
    title: "Votre Boutique en 4 Étapes",
    steps: [
      { name: "Setup Catalogue", duration: "Semaine 1", deliverables: ["Import Produits", "Kategorisation"] },
      { name: "Design Store", duration: "Semaine 2-3", deliverables: ["Thème Premium", "UX Mobile"] },
      { name: "Paiements", duration: "Semaine 4", deliverables: ["Connexion Banque", "Tests Caddie"] }
    ]
  },
  comparison: {
    title: "Notre Solution vs Les Plateformes",
    competitors: ["Shopify Standard", "WooCommerce DIY"],
    rows: [
      { feature: "Performance optimisée", us: true, them: [false, false] },
      { feature: "Design unique", us: true, them: [false, false] },
      { feature: "Stratégie conversion", us: true, them: [false, false] },
      { feature: "Formation incluse", us: true, them: [false, false] },
      { feature: "Support réactif", us: true, them: [false, false] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo/google-my-business", label: "SEO Local & Maps" },
    { slug: "/agence-communication/reseaux-sociaux", label: "Publicité Social Ads" }
  ]
};

// ... (CONTENT_SEO et CONTENT_AGENCE sont ici aussi, mais on va les traiter dans leurs fichiers respectifs s'ils sont exportés, ou ici s'ils sont définis ici. Attends, je vois CONTENT_SEO et CONTENT_AGENCE définis ici mais exportés aussi ? Non, ils sont définis ici dans le fichier library.ts qui semble être un fourre-tout. Je vais les update ici aussi.)

export const CONTENT_SEO: DeepContent = CONTENT_SEO_HUB;

export const CONTENT_AGENCE: DeepContent = CONTENT_AGENCE_HUB;

export const CONTENT_LOCAL: DeepContent = {
  problem: {
    title: "Le Digital Global ne marche pas ici",
    text: "Le Pays Basque et les Landes ont des codes uniques. Utiliser une communication standardisée parisienne ou un template générique ne résonne pas avec la clientèle locale. Pour vendre ici, il faut parler la langue du territoire.",
    painPoints: [
      "Site web déconnecté de la réalité locale",
      "Absence de référencement géographique précis",
      "Design qui manque d'authenticité",
      "Pas de connexion avec l'écosystème local"
    ]
  },
  solution: {
    title: "Ancrage Territorial Fort",
    text: "Nous concevons des plateformes digitales qui respirent le Sud-Ouest. Design inspiré par l'environnement local, SEO optimisé pour les requêtes géographiques (Villes & Quartiers), et tonalité qui crée un lien immédiat avec vos voisins et clients.",
    methodology: [
      { step: "Codes Locaux", details: "Intégration subtile de l'identité basco-landaise." },
      { step: "SEO Géographique", details: "Maillage interne dense sur vos zones d'intervention." },
      { step: "Preuve Sociale Locale", details: "Mise en avant des avis et réalisations de proximité." }
    ]
  },
  benefits: {
    title: "Devenez Prophète en votre Pays",
    items: [
      { title: "Proximité", text: "Créez une relation de confiance immédiate.", icon: "MapPin" },
      { title: "Visibilité", text: "Soyez le premier résultat sur votre ville.", icon: "Search" },
      { title: "Identité", text: "Une marque fière de ses racines.", icon: "Heart" }
    ]
  },
  testimonial: {
    quote: "Enfin une agence qui vient nous voir ! On a pu discuter de visu, comprendre nos besoins réels. La différence avec les prestataires parisiens est énorme.",
    author: "Jean-Michel Etcheverry",
    role: "Directeur",
    company: "Transports Etcheverry",
    rating: 5
  },
  relatedServices: [
    { slug: "/referencement-seo/local", label: "Référencement Local" },
    { slug: "/a-propos", label: "Notre Équipe" }
  ]
};

export const CONTENT_METIER_RESTO: DeepContent = {
  problem: {
    title: "Les plateformes vous étouffent ?",
    text: "TheFork, UberEats et TripAdvisor ont pris le contrôle de vos clients. Vous payez des commissions énormes (jusqu'à 30%) pour des clients qui ne vous appartiennent pas vraiment. Votre marge fond et votre indépendance aussi.",
    painPoints: [
      "Commissions excessives sur chaque couvert",
      "Pas de base de données clients propriétaire",
      "Dépendance aux algorithmes de classement",
      "Site web vitrine qui ne convertit pas"
    ]
  },
  solution: {
    title: "Reprenez le Contrôle de votre Salle",
    text: "Un site web restaurant qui est une véritable machine à réservations directes.  Système de réservation sans commission (Zenchef/GuestOnline), menu digital alléchant, et module click & collect. Fidélisez vos clients en direct.",
    methodology: [
      { step: "Réservation Directe", details: "Intégration moteur de résa 0% commission." },
      { step: "Menu Digital", details: "Carte interactive et photos food porn." },
      { step: "SEO Restaurant", details: "Positionnement sur 'Restaurant + Ville' et spécialités." }
    ]
  },
  benefits: {
    title: "Plus de Marge, Plus de Liberté",
    items: [
      { title: "0% Commission", text: "Gardez 100% de la valeur de vos menus.", icon: "DollarSign" },
      { title: "Data Client", text: "Constituez votre fichier pour relancer (Newsletter/SMS).", icon: "Users" },
      { title: "Image Food", text: "Un design qui met l'eau à la bouche instantanément.", icon: "Camera" }
    ]
  },
  comparison: {
    title: "Notre Solution vs Les Plateformes",
    competitors: ["TheFork", "UberEats"],
    rows: [
      { feature: "Commission par réservation", us: "0%", them: ["15-30%", "25-35%"] },
      { feature: "Propriété data client", us: true, them: [false, false] },
      { feature: "Menu modifiable en temps réel", us: true, them: [false, "Limité"] },
      { feature: "Fidélisation intégrée", us: true, them: [false, false] },
      { feature: "Indépendance algorithme", us: true, them: [false, false] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo/local", label: "SEO Local Restaurant" },
    { slug: "/agence-communication/photographie", label: "Shooting Food" }
  ]
};

export const CONTENT_METIER_IMMO: DeepContent = {
  problem: {
    title: "Noyé dans la masse des annonces ?",
    text: "Sur SeLoger ou Leboncoin, vos mandats sont en concurrence directe avec 50 autres agences. Difficile de justifier vos honoraires ou de décrocher des mandats exclusifs quand votre seule vitrine est un portail tiers standardisé.",
    painPoints: [
      "Dépendance coûteuse aux portails immobiliers",
      "Difficulté à capter des mandats exclusifs",
      "Site agence lent et mal synchronisé",
      "Image de marque peu valorisante"
    ]
  },
  solution: {
    title: "L'Écrin Digital de vos Biens",
    text: "Un site immobilier haut de gamme connecté à votre logiciel métier (Apimo, Hektor...). Mettez en valeur vos exclusivités avec un design immersif, des visites virtuelles et une génération de leads vendeurs (estimation).",
    methodology: [
      { step: "Synchro Passerelle", details: "Mise à jour automatique de vos annonces depuis votre logiciel." },
      { step: "Module Estimation", details: "Outil de captation de leads vendeurs propriétaires." },
      { step: "Design Prestige", details: "Mise en page magazine pour valoriser vos mandats." }
    ]
  },
  benefits: {
    title: "Signez plus de Mandats",
    items: [
      { title: "Exclusivité", text: "Un site premium aide à convaincre les vendeurs exigeants.", icon: "Award" },
      { title: "Automatisation", text: "Fini la double saisie des annonces.", icon: "RefreshCw" },
      { title: "SEO Immo", text: "Rankez sur 'Agence Immo + Ville' devant les portails.", icon: "TrendingUp" }
    ]
  },
  comparison: {
    title: "Site Sur-Mesure vs Portails",
    competitors: ["SeLoger", "Site Template"],
    rows: [
      { feature: "Synchro logiciel métier", us: true, them: [false, "Payant"] },
      { feature: "Design premium", us: true, them: [false, false] },
      { feature: "Outil estimation", us: true, them: [false, false] },
      { feature: "Propriété des leads", us: true, them: [false, true] },
      { feature: "Visites 360 intégrées", us: true, them: ["Payant", false] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo/google-my-business", label: "Fiche GMB Immo" },
    { slug: "/agence-communication/video", label: "Vidéo Drone Bien" }
  ]
};

export const CONTENT_METIER_HOTEL: DeepContent = {
  problem: {
    title: "Les OTAs grignotent votre marge",
    text: "Booking.com et Expedia sont indispensables mais coûteux (17%+ de commission). Si votre site officiel n'est pas meilleur que leur page, pourquoi le client réserverait-il en direct ? Le manque de rassurance et d'expérience utilisateur sur votre site vous coûte cher.",
    painPoints: [
      "Commissions OTAs élevées",
      "Perte de la relation client directe",
      "Taux de conversion bas sur le site officiel",
      "Difficulté à vendre les services annexes (Spa, PDJ)"
    ]
  },
  solution: {
    title: "Réservation Directe First",
    text: "Votre site officiel devient le canal de vente préféré. Design immersif qui vend le rêve, moteur de réservation fluide, et incitations claires au booking direct (meilleur tarif garanti, avantages). Récupérez vos marges.",
    methodology: [
      { step: "Immersion Visuelle", details: "Grands visuels et vidéos pour projeter le client." },
      { step: "Booking Engine", details: "Intégration moteur sans friction (D-Edge, Availpro)." },
      { step: "Offres Directes", details: "Mise en avant des packages exclusifs site web." }
    ]
  },
  benefits: {
    title: "Optimisez votre RevPAR",
    items: [
      { title: "Marge Nette", text: "Économisez 17% sur chaque réservation directe.", icon: "TrendingUp" },
      { title: "Upsell", text: "Vendez plus facilement les extras et packages.", icon: "PlusCircle" },
      { title: "Fidélité", text: "Possédez la donnée client pour le faire revenir.", icon: "Users" }
    ]
  },
  comparison: {
    title: "Site Direct vs OTAs",
    competitors: ["Booking.com", "Expedia"],
    rows: [
      { feature: "Commission par nuitée", us: "0%", them: ["15-18%", "15-20%"] },
      { feature: "Propriété data client", us: true, them: [false, false] },
      { feature: "Contrôle tarifs & promos", us: true, them: ["Limité", "Limité"] },
      { feature: "Fidélisation directe", us: true, them: [false, false] },
      { feature: "Avis clients indépendants", us: true, them: ["Payant", "Payant"] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo", label: "SEO International" },
    { slug: "/agence-communication/photographie", label: "Shooting Hôtel" }
  ]
};

export const CONTENT_METIER_BTP: DeepContent = {
  problem: {
    title: "Le bouche-à-oreille ne suffit plus",
    text: "Compter uniquement sur la recommandation est risqué. Les périodes creuses font mal. De plus, les clients cherchent désormais leurs artisans sur Google. Sans site pro avec des photos de vos réalisations, vous perdez les plus beaux chantiers au profit de concurrents plus 'visibles'.",
    painPoints: [
      "Activité en dents de scie (saisonnalité)",
      "Difficulté à montrer la qualité de votre travail",
      "Appels pour des bricoles non rentables",
      "Image 'petit artisan' qui bloque les gros devis"
    ]
  },
  solution: {
    title: "La Vitrine de votre Savoir-Faire",
    text: "Un site web qui prouve votre expertise. Galerie avant/après impressionnante, présentation de vos certifications (RGE, Qualibat), et formulaires de devis qualifiants pour filtrer les demandes sérieuses. Attirez les chantiers que vous méritez.",
    methodology: [
      { step: "Portfolio Pro", details: "Galerie filtrable par type de chantier." },
      { step: "SEO Local", details: "Positionnement sur vos villes d'intervention principales." },
      { step: "Lead Gen", details: "Formulaires détaillés pour qualifier le besoin en amont." }
    ]
  },
  benefits: {
    title: "Remplissez le Carnet de Commandes",
    items: [
      { title: "Chantiers Qualifiés", text: "Attirez des clients prêts à investir pour la qualité.", icon: "CheckCircle" },
      { title: "Crédibilité", text: "Rassurez instantanément avec vos réalisations.", icon: "Shield" },
      { title: "Visibilité 24/7", text: "Soyez trouvable même quand vous êtes sur le chantier.", icon: "Search" }
    ]
  },
  comparison: {
    title: "Site Pro vs Bouche-à-Oreille Seul",
    competitors: ["Pas de Site", "Site Template"],
    rows: [
      { feature: "Portfolio avant/après", us: true, them: [false, "Photos basiques"] },
      { feature: "Formulaire qualifiant", us: true, them: [false, "Contact simple"] },
      { feature: "Preuve sociale visible", us: true, them: [false, false] },
      { feature: "Zone d'intervention SEO", us: true, them: [false, false] },
      { feature: "Génération leads 24/7", us: true, them: [false, "Limité"] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo/local", label: "SEO Local Artisan" },
    { slug: "/agence-communication/identite-visuelle", label: "Logo & Flocage" }
  ]
};
