import { DeepContent } from "../types";

/**
 * CONTENT AGENCE - Variantes uniques par service
 * Anti-Duplicate Content Grade A+
 */

// ============================================================
// HUB AGENCE - /agence-communication
// ============================================================
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
      { 
        name: "Figma Pro", 
        benefit: "Collaboration design temps réel et prototypage haute-fidélité.", 
        icon: "Palette" 
      },
      { 
        name: "Adobe CC", 
        benefit: "Suite complète pour des visuels vectoriels et retouchés.", 
        icon: "Zap" 
      },
      { 
        name: "Midjourney v6", 
        benefit: "Génération d'assets IA uniques pour enrichir vos visuels.", 
        icon: "Globe" 
      }
    ]
  },
  local_market_fit: {
    title: "L'Esthétique 'Côte Basque' Réinventée",
    subtitle: "Incarner le territoire sans tomber dans le folklore.",
    points: [
      { 
        title: "Élégance Océanique", 
        description: "Des codes visuels épurés qui rappellent l'océan sans mettre des vagues partout." 
      },
      { 
        title: "Cible CSP+", 
        description: "Un branding calibré pour séduire la clientèle haut de gamme de la région." 
      },
      { 
        title: "Bilinguisme Subtil", 
        description: "Intégration du Basque dans la communication de manière moderne et inclusive." 
      }
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

// ============================================================
// IDENTITÉ VISUELLE - /agence-communication/identite-visuelle
// ============================================================
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

// ============================================================
// STRATÉGIE DIGITALE - /agence-communication/strategie-digitale
// ============================================================
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
