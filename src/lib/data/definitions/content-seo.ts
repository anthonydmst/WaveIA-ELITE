import { DeepContent } from "../types";

/**
 * CONTENT SEO - Variantes uniques par service
 * Anti-Duplicate Content Grade A+
 */

// ============================================================
// HUB SEO - /referencement-seo
// ============================================================
export const CONTENT_SEO_HUB: DeepContent = {
  problem: {
    title: "Invisible sur Google sans stratégie ?",
    text: "Au Pays Basque, la compétition digitale est sous-estimée. Plombiers, restaurants, agences immo : tout le monde veut la 1ère place. Sans une stratégie technique et sémantique chirurgicale, votre site reste un fantôme en page 2. Être 'juste là' ne suffit plus.",
    painPoints: [
      "Site techniquement sain mais mal positionné",
      "Trafic existant mais peu qualifié (taux de rebond > 60%)",
      "Visibilité locale inexistante sur Google Maps",
      "Dépendance totale à la publicité payante (Ads)"
    ]
  },
  solution: {
    title: "Domination Sémantique & Technique",
    text: "Le SEO n'est pas de la magie, c'est de la data-science. Nous déployons une stratégie triple : Conformité Technique Totale (Core Web Vitals), Domination Sémantique (Contenu Expert) et Autorité Off-Site (Netlinking Éthique). Votre site devient la référence incontournable de votre secteur.",
    methodology: [
      { step: "Audit Technique", details: "Crawl complet (50+ points) pour éliminer tout frein technique." },
      { step: "Cluster Sémantique", details: "Architecture de contenu en silos pour saturer vos mots-clés." },
      { step: "Campagne Netlinking", details: "Acquisition de liens haute autorité pour booster le Trust Flow." }
    ]
  },
  tech_stack: {
    title: "Notre Labo SEO & Data",
    description: "Nous ne devinons pas, nous mesurons. Nos outils d'analyse nous donnent un avantage déloyal sur vos concurrents.",
    items: [
      { 
        name: "Screaming Frog", 
        benefit: "Simulation des robots Google pour un site 100% crawlable.", 
        icon: "Zap" 
      },
      { 
        name: "Semrush Pro", 
        benefit: "Espionnage concurrentiel et analyse de traffic market.", 
        icon: "Target" 
      },
      { 
        name: "Google Search Console", 
        benefit: "La seule donnée qui compte : celle de Google.", 
        icon: "Globe" 
      }
    ]
  },
  local_market_fit: {
    title: "SEO Local : La Guerre du BAB",
    subtitle: "Se positionner à Biarritz, Anglet ou Bayonne demande une finesse géographique.",
    points: [
      { 
        title: "Intention Hyper-Locale", 
        description: "Capturer les recherches 'Près de chez moi' avec une précision quartier par quartier." 
      },
      { 
        title: "Tourisme vs Résidents", 
        description: "Adapter les mots-clés selon la saisonnalité (touristes l'été, locaux l'année)." 
      },
      { 
        title: "Réputation & Avis", 
        description: "Gestion proactive des avis Google pour rassurer une clientèle locale exigeante." 
      }
    ]
  },
  process_detailed: {
    title: "Route vers la 1ère Position",
    steps: [
      { name: "Audit & Roadmap", duration: "Mois 1", deliverables: ["Rapport Technique", "Stratégie Mots-Clés"] },
      { name: "Optimisation On-Site", duration: "Mois 2", deliverables: ["Pages Optimisées", "Vitesse Corrigée"] },
      { name: "Content & Links", duration: "Mois 3-6", deliverables: ["Articles Blog", "Backlinks Premium"] },
      { name: "Monitoring & Ajustement", duration: "Continu", deliverables: ["Rapport Mensuel", "KPIs Tracking"] }
    ]
  },
  benefits: {
    title: "Pourquoi le SEO WaveIA ?",
    items: [
      { title: "Trafic Qualifié", text: "Des visiteurs qui cherchent EXACTEMENT ce que vous vendez.", icon: "Target" },
      { title: "ROI Long Terme", text: "Investissement durable vs pub qui s'arrête le jour où on ne paie plus.", icon: "TrendingUp" },
      { title: "Transparence Totale", text: "Sachez exactement où va votre budget et ce qu'il rapporte.", icon: "Award" }
    ]
  },
  stats: {
    title: "Performance SEO WaveIA",
    metrics: [
      { value: "+147%", label: "Trafic Organique", proof: "Moyenne Clients" },
      { value: "Top 3", label: "Objectif Position", proof: "Mots-Clés Cibles" },
      { value: "95+", label: "Score PageSpeed", proof: "Optimisation Tech" },
      { value: "4.9/5", label: "Satisfaction", proof: "Google Reviews" }
    ]
  },
  testimonial: {
    quote: "En 6 mois on est passé de la page 4 au top 3 sur nos mots-clés principaux. Le trafic a explosé et les demandes de devis avec.",
    author: "Marc Dubois",
    role: "Gérant",
    company: "Plomberie Dubois",
    rating: 5
  },
  comparison: {
    title: "SEO Expert vs Agence Généraliste",
    competitors: ["Agence Généraliste", "Pas de SEO"],
    rows: [
      { feature: "Audit technique complet", us: true, them: ["Partiel", false] },
      { feature: "Stratégie de contenu", us: true, them: ["Variable", false] },
      { feature: "Netlinking éthique", us: true, them: [false, false] },
      { feature: "Suivi positions mensuel", us: true, them: ["Variable", false] },
      { feature: "Expertise locale Pays Basque", us: true, them: [false, false] }
    ]
  },
  relatedServices: [
    { slug: "/creation-site-internet/refonte-site-web", label: "Refonte Technique" },
    { slug: "/referencement-seo/google-my-business", label: "Pack Local Map" },
    { slug: "/referencement-seo/netlinking", label: "Campagne Netlinking" }
  ]
};

// ============================================================
// AUDIT SEO GRATUIT - /referencement-seo/audit-seo-gratuit
// ============================================================
export const CONTENT_SEO_AUDIT: DeepContent = {
  problem: {
    title: "Vous ne savez pas où vous en êtes ?",
    text: "Performances techniques, positionnement mots-clés, qualité du contenu, profil de liens... Sans audit, vous naviguez à l'aveugle. Vous pourriez avoir un site techniquement désastreux sans le savoir.",
    painPoints: [
      "Aucune visibilité sur vos performances actuelles",
      "Erreurs techniques qui plombent votre référencement",
      "Contenu mal optimisé (ou sur-optimisé)",
      "Liens toxiques qui pénalisent votre site"
    ]
  },
  solution: {
    title: "Audit SEO Complet & Gratuit",
    text: "Nous analysons votre site sous tous les angles : technique, sémantique, UX et backlinks. Vous recevez un rapport détaillé avec priorisation des actions. Zéro engagement, juste de la valeur.",
    methodology: [
      { step: "Crawl Technique", details: "Analyse de 50+ facteurs techniques (vitesse, mobile, erreurs)." },
      { step: "Audit Sémantique", details: "Analyse de vos contenus et opportunités mots-clés." },
      { step: "Rapport Priorisé", details: "Actions classées par impact et effort. Quick wins identifiés." }
    ]
  },
  benefits: {
    title: "Pourquoi un Audit ?",
    items: [
      { title: "État des Lieux", text: "Savoir précisément où vous en êtes.", icon: "Search" },
      { title: "Priorisation", text: "Identifier les quick wins à fort impact.", icon: "ListOrdered" },
      { title: "Feuille de Route", text: "Un plan d'action clair pour progresser.", icon: "Map" }
    ]
  },
  tech_stack: {
    title: "Outils d'Audit Pro",
    description: "Nous voyons ce que vos concurrents ignorent.",
    items: [
      { name: "Screaming Frog", benefit: "Analyse technique 100% du site", icon: "Search" },
      { name: "Lighthouse", benefit: "Audit Performance & UX Google", icon: "Zap" },
      { name: "Search Console", benefit: "Données réelles de trafic", icon: "BarChart" }
    ]
  },
  local_market_fit: {
    title: "Analyse Marché Local",
    subtitle: "Pourquoi je ne suis pas premier à Biarritz ?",
    points: [
      { title: "Benchmarking", description: "Comparaison directe avec vos 3 concurrents locaux principaux." },
      { title: "Mots-clés Géo", description: "Vérification de votre présence sur les requêtes 'Service + Ville'." },
      { title: "E-Réputation", description: "Audit de l'impact de vos avis Google sur votre visibilité." }
    ]
  },
  process_detailed: {
    title: "Votre Audit en 48h",
    steps: [
      { name: "Scan Automatisé", duration: "Jour 1", deliverables: ["Crawl Technique"] },
      { name: "Analyse Experte", duration: "Jour 1", deliverables: ["Interprétation Data"] },
      { name: "Restitution Visio", duration: "Jour 2", deliverables: ["Plan d'Action PDF"] }
    ]
  },
  stats: {
    title: "Ce que révèle l'Audit",
    metrics: [
      { value: "50+", label: "Facteurs Analysés", proof: "Technique + Contenu" },
      { value: "3-5", label: "Quick Wins", proof: "Par Audit" },
      { value: "48h", label: "Délai Livraison", proof: "Rapport Complet" },
      { value: "100%", label: "Gratuit", proof: "Sans Engagement" }
    ]
  },
  testimonial: {
    quote: "L'audit a révélé des erreurs 404 qu'on ne voyait pas et un temps de chargement désastreux. En corrigeant juste ça, on a gagné 15 positions sur notre mot-clé principal.",
    author: "Julie Mendez",
    role: "Directrice",
    company: "Institut Beauté Ocean",
    rating: 5
  },
  comparison: {
    title: "Audit WaveIA vs Outils Automatiques",
    competitors: ["SEMRush/Ahrefs", "Google Search Console"],
    rows: [
      { feature: "Analyse humaine experte", us: true, them: [false, false] },
      { feature: "Recommandations priorisées", us: true, them: ["Limité", false] },
      { feature: "Contexte business local", us: true, them: [false, false] },
      { feature: "Plan d'action actionnable", us: true, them: [false, false] },
      { feature: "Appel de restitution", us: true, them: [false, false] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo/local", label: "Correction SEO Local" },
    { slug: "/creation-site-internet/maintenance-web", label: "Maintenance Technique" }
  ]
};

// ============================================================
// RÉFÉRENCEMENT LOCAL - /referencement-seo/referencement-local
// ============================================================
export const CONTENT_SEO_LOCAL_SPECIFIC: DeepContent = {
  problem: {
    title: "Invisible dans votre ville ?",
    text: "Quand quelqu'un tape 'plombier Biarritz' ou 'restaurant Bayonne', ce n'est pas vous qui apparaissez. Les 3 premiers résultats du Local Pack captent 60% des clics. Vous êtes à côté mais personne ne vous trouve.",
    painPoints: [
      "Fiche Google absente ou mal renseignée",
      "Pas d'avis clients (ou pire, mauvais avis)",
      "Non affiché dans le 'Local Pack' Google Maps",
      "Mauvaise catégorisation GMB"
    ]
  },
  solution: {
    title: "Dominez Votre Zone",
    text: "Optimisation Google My Business, stratégie d'avis, citations NAP cohérentes et contenu géolocalisé. Nous vous positionnons dans le Local Pack pour que les clients de votre zone vous trouvent en premier.",
    methodology: [
      { step: "GMB Premium", details: "Optimisation complète de votre fiche Google Business." },
      { step: "Stratégie Avis", details: "Mise en place d'un système pour collecter des avis." },
      { step: "Citations NAP", details: "Cohérence Nom-Adresse-Téléphone sur 50+ annuaires." }
    ]
  },
  tech_stack: {
    title: "Outils SEO Local",
    description: "La boîte à outils pour dominer la carte.",
    items: [
      { name: "Google Business", benefit: "Interface de gestion fiche établissement", icon: "MapPin" },
      { name: "Schema.org", benefit: "Données structurées LocalBusiness", icon: "Code" },
      { name: "Yext / Partoo", benefit: "Multidiffusion coordonnées", icon: "Globe" }
    ]
  },
  local_market_fit: {
    title: "Hyper-Proximité",
    subtitle: "Être le premier choix du quartier.",
    points: [
      { title: "Pack Local", description: "Objectif Top 3 sur la carte Google." },
      { title: "Confiance Locale", description: "Les avis rassurent vos voisins immédiats." },
      { title: "Conversion GPS", description: "Optimisé pour 'Itinéraire vers...' sur mobile." }
    ]
  },
  process_detailed: {
    title: "Votre Visibilité Locale",
    steps: [
      { name: "Setup GMB", duration: "Semaine 1", deliverables: ["Fiche Validée", "Photos HD"] },
      { name: "Citations", duration: "Semaine 2", deliverables: ["20+ Annuaires Locaux"] },
      { name: "Campagne Avis", duration: "Semaine 3", deliverables: ["Templates SMS/Email"] }
    ]
  },
  benefits: {
    title: "Pourquoi le SEO Local ?",
    items: [
      { title: "Proximité", text: "Captez les clients qui cherchent 'près de chez moi'.", icon: "MapPin" },
      { title: "Confiance", text: "Les avis rassurent et déclenchent l'action.", icon: "Star" },
      { title: "Mobile First", text: "76% des recherches locales = visite sous 24h.", icon: "Smartphone" }
    ]
  },
  stats: {
    title: "Impact SEO Local",
    metrics: [
      { value: "76%", label: "Visite sous 24h", proof: "Recherche Locale" },
      { value: "+312%", label: "Clics GMB", proof: "Après Optimisation" },
      { value: "50+", label: "Citations NAP", proof: "Par Client" },
      { value: "4.7", label: "Note Moyenne", proof: "Stratégie Avis" }
    ]
  },
  testimonial: {
    quote: "On n'apparaissait même pas sur Maps. Maintenant on est dans le Top 3 du Local Pack sur 'garage auto Bayonne'. Les appels ont triplé en 2 mois.",
    author: "Pierre Hiriart",
    role: "Gérant",
    company: "Garage Basque Auto",
    rating: 5
  },
  comparison: {
    title: "SEO Local Pro vs DIY",
    competitors: ["Faire Soi-Même", "Pas de SEO Local"],
    rows: [
      { feature: "Optimisation GMB complète", us: true, them: ["Partiel", false] },
      { feature: "Stratégie collecte avis", us: true, them: [false, false] },
      { feature: "Citations 50+ annuaires", us: true, them: [false, false] },
      { feature: "Réponse aux avis", us: true, them: ["Variable", false] },
      { feature: "Suivi positions locales", us: true, them: [false, false] }
    ]
  },
  relatedServices: [
    { slug: "/agence-communication/reseaux-sociaux", label: "Publicité Locale" },
    { slug: "/creation-site-internet/site-vitrine", label: "Site Vitrine" }
  ]
};
