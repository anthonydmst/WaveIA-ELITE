import { DeepContent } from "../types";

/**
 * CONTENT TECH - Refonte & Maintenance
 * Anti-Duplicate Content Grade A++++
 */

// ============================================================
// REFONTE SITE WEB
// ============================================================
export const CONTENT_REFONTE: DeepContent = {
  problem: {
    title: "Votre site fait fuir vos clients ?",
    text: "Design daté, temps de chargement insupportable, pas adapté mobile. Votre site a 5 ans et ça se voit. En 2024, 88% des internautes ne reviendront jamais sur un site lent ou moche. Vous perdez des clients chaque jour.",
    painPoints: [
      "Design années 2010 qui fait amateur",
      "Plus de 5 secondes de chargement (abandon garanti)",
      "Non responsive (60% de vos visiteurs sont sur mobile)",
      "Aucune optimisation SEO (invisible sur Google)"
    ]
  },
  solution: {
    title: "Refonte Moderne Sans Casser l'Existant",
    text: "Nous modernisons votre site en conservant ce qui fonctionne. Design 2024, vitesse fulgurante, mobile-first et SEO natif. Migration zéro downtime, redirections 301 automatiques, formation incluse.",
    methodology: [
      { step: "Audit Complet", details: "Analyse de l'existant : ce qu'on garde, ce qu'on jette, ce qu'on améliore." },
      { step: "Design Modern", details: "Maquettes 2024 qui WOW au premier regard. Mobile-first obligatoire." },
      { step: "Migration Sécurisée", details: "Zéro coupure, redirections SEO, test avant mise en prod." }
    ]
  },
  tech_stack: {
    title: "Stack de Modernisation",
    description: "Les outils pour passer de la 2CV à la Ferrari.",
    items: [
      { name: "Migration Assistant", benefit: "Transfert contenu zéro perte", icon: "Database" },
      { name: "301 Redirects", benefit: "Préservation jus SEO", icon: "GitMerge" },
      { name: "Next.js 14", benefit: "Performance top 1%", icon: "Zap" }
    ]
  },
  local_market_fit: {
    title: "Le Standard Basque",
    subtitle: "Rattrapez vos concurrents locaux.",
    points: [
      { title: "Design Actuel", description: "Fini le site qui ressemble à 2010. Alignement sur les standards premium locaux." },
      { title: "Mobile First", description: "Indispensable pour la clientèle touristique smartphone." },
      { title: "Conformité", description: "Mise aux normes RGPD et mentions légales françaises." }
    ]
  },
  process_detailed: {
    title: "Refonte Sans Douleur",
    steps: [
      { name: "Audit Existant", duration: "Semaine 1", deliverables: ["Plan de Migration"] },
      { name: "Nouveau Design", duration: "Semaine 2", deliverables: ["Maquettes 2024"] },
      { name: "Bascule", duration: "Semaine 4", deliverables: ["Zéro Downtime"] }
    ]
  },
  benefits: {
    title: "Pourquoi Refondre ?",
    items: [
      { title: "Crédibilité Retrouvée", text: "Un site moderne inspire confiance. Le vieux tue la conversion.", icon: "Award" },
      { title: "Vitesse x10", text: "De 8 secondes à moins de 2s. Google ET vos visiteurs adorent.", icon: "Zap" },
      { title: "SEO Boosté", text: "Migration = opportunité d'optimiser structure, contenus, maillage.", icon: "TrendingUp" }
    ]
  },
  stats: {
    title: "Impact Refonte",
    metrics: [
      { value: "+156%", label: "Taux de Conversion", proof: "Moyenne Clients Post-Refonte" },
      { value: "-75%", label: "Temps Chargement", proof: "8s → 2s" },
      { value: "+220%", label: "Trafic Organique", proof: "Après 6 mois" },
      { value: "0", label: "Downtime", proof: "Migration Transparente" }
    ]
  },
  testimonial: {
    quote: "Notre site WordPress de 2016 ramait grave. La refonte a tout changé : design premium, vitesse hallucinante et surtout +180% de conversions en 3 mois. ROI immédiat.",
    author: "Stéphane Larrieu",
    role: "Directeur Commercial",
    company: "Solutions BTP Côte Basque",
    rating: 5
  },
  comparison: {
    title: "Refonte Pro vs Ajustements Cosmétiques",
    competitors: ["Changement de thème WordPress", "Retouches CSS"],
    rows: [
      { feature: "Refonte UX complète", us: true, them: [false, false] },
      { feature: "Migration technologique (Next.js)", us: true, them: [false, false] },
      { feature: "Optimisation SEO intégrée", us: true, them: ["Limité", false] },
      { feature: "Design système cohérent", us: true, them: [false, false] },
      { feature: "Performance garantie <2s", us: true, them: [false, false] }
    ]
  }
};

// ============================================================
// MAINTENANCE & SÉCURITÉ
// ============================================================
export const CONTENT_MAINTENANCE: DeepContent = {
  problem: {
    title: "Votre site peut exploser à tout moment ?",
    text: "Aucune mise à jour depuis 18 mois, pas de backup, vulnérabilités connues non patchées. Votre site est une bombe à retardement. Un hack = site down pendant des jours, perte de données clients, catastrophe SEO.",
    painPoints: [
      "Plugins WordPress obsolètes (failles de sécurité béantes)",
      "Pas de sauvegarde (si ça plante, vous perdez TOUT)",
      "Temps de downtime imprévisibles (vous le découvrez par un client)",
      "Aucune surveillance (le site peut être down depuis 2 jours sans que vous le sachiez)"
    ]
  },
  solution: {
    title: "Tranquillité d'Esprit 24/7",
    text: "Contrat de maintenance tout-inclus : mises à jour sécurité, backups quotidiens externes, monitoring temps réel et support tech sous 4h. Vous dormez tranquille, on veille.",
    methodology: [
      { step: "Audit Sécurité Initial", details: "Scan complet des vulnérabilités + mise à jour critique immédiate." },
      { step: "Mise en Place", details: "Installation monitoring, backups auto, pare-feu applicatif." },
      { step: "Veille Permanente", details: "Surveillance 24/7, interventions proactives, rapport mensuel." }
    ]
  },
  tech_stack: {
    title: "Bouclier Numérique",
    description: "Protection de niveau bancaire.",
    items: [
      { name: "Cloudflare WAF", benefit: "Pare-feu anti-DDoS", icon: "Shield" },
      { name: "Uptime Robot", benefit: "Monitoring chaque minute", icon: "Activity" },
      { name: "AWS S3 Glacier", benefit: "Backups cryptés quotidiens", icon: "HardDrive" }
    ]
  },
  local_market_fit: {
    title: "Support de Proximité",
    subtitle: "On n'est pas un call center à l'autre bout du monde.",
    points: [
      { title: "Réponse < 4h", description: "Intervention rapide garantie contractuellement." },
      { title: "Contact Direct", description: "Numéro de portable d'astreinte, pas de ticket anonyme." },
      { title: "Hébergement France", description: "Données stockées en France (RGPD)." }
    ]
  },
  process_detailed: {
    title: "Garde Rapprochée",
    steps: [
      { name: "Setup", duration: "Jour 1", deliverables: ["Installation Sondes"] },
      { name: "Monitoring", duration: "24/7", deliverables: ["Alertes Temps Réel"] },
      { name: "Reporting", duration: "Mensuel", deliverables: ["État de Santé"] }
    ]
  },
  benefits: {
    title: "Pourquoi un Contrat Maintenance ?",
    items: [
      { title: "Zéro Downtime", text: "On intervient AVANT que ça casse. Monitoring temps réel.", icon: "Shield" },
      { title: "Backup Quotidien", text: "Sauvegarde complète chaque jour sur serveur externe sécurisé.", icon: "Database" },
      { title: "Support Réactif", text: "Un pépin ? On intervient sous 4h, pas dans 3 jours.", icon: "Clock" }
    ]
  },
  stats: {
    title: "Protection Active",
    metrics: [
      { value: "0", label: "Hack Clients", proof: "Depuis 5 Ans" },
      { value: "99.9%", label: "Uptime Garanti", proof: "SLA Contractuel" },
      { value: "<4h", label: "Temps Réponse", proof: "Support Tech" },
      { value: "365j", label: "Backups/An", proof: "Automatiques" }
    ]
  },
  testimonial: {
    quote: "Notre site s'était fait hacker 2 fois en un an. Depuis qu'on est avec WaveIA en maintenance, plus aucun problème. Et quand on a une question, réponse en moins de 2h. Impeccable.",
    author: "Nathalie Berger",
    role: "Gérante",
    company: "Agence Immobilière Anglet",
    rating: 5
  },
  comparison: {
    title: "Maintenance Pro vs DIY",
    competitors: ["Gestion Interne", "Pas de Maintenance"],
    rows: [
      { feature: "Monitoring uptime 24/7", us: true, them: [false, false] },
      { feature: "Backup quotidien externe", us: true, them: ["Variable", false] },
      { feature: "Veille vulnérabilités", us: true, them: [false, false] },
      { feature: "Intervention sous 4h", us: true, them: ["Variable", "N/A"] },
      { feature: "Pare-feu applicatif (WAF)", us: true, them: [false, false] }
    ]
  }
};

// ============================================================
// VIDEO (AGENCE)
// ============================================================
export const CONTENT_AGENCE_VIDEO: DeepContent = {
  problem: {
    title: "Vos vidéos font amateur ?",
    text: "Vidéo smartphone tremblante, montage inexistant, son inaudible. Sur les réseaux sociaux, la vidéo représente 82% du trafic. Si vos contenus sont médiocres, vous êtes invisible. Le scroll est impitoyable : 1.3 seconde pour capter l'attention.",
    painPoints: [
      "Aucune vidéo de présentation (pendant que vos concurrents en ont)",
      "Vidéos amateur qui desservent votre image",
      "Format inadapté (16:9 horizontal alors que le mobile = vertical 9:16)",
      "Montage plat sans dynamique (personne ne regarde jusqu'au bout)"
    ]
  },
  solution: {
    title: "Vidéos Qui Stoppent le Scroll",
    text: "Production vidéo pro format Reels/TikTok : scénarisation, tournage dynamique, montage rythmé et étalonnage cinema. Du corporate aux formats viraux, nous créons des vidéos qu'on REGARDE.",
    methodology: [
      { step: "Storyboard", details: "Script détaillé, plan par plan. Rien n'est laissé au hasard." },
      { step: "Tournage Pro", details: "Caméra cinema 4K, stabilisateur, éclairage et prise son broadcast." },
      { step: "Montage Dynamique", details: "Cuts rapides, sound design percutant, étalonnage pro. Style viral." }
    ]
  },
  tech_stack: {
    title: "Studio Mobile",
    description: "Qualité Cinéma, Agilité Smartphone.",
    items: [
      { name: "Sony A7S III", benefit: "Image 4K HDR Cinématique", icon: "Camera" },
      { name: "DJI Ronin", benefit: "Plans fluides ultra-stables", icon: "Video" },
      { name: "DaVinci Resolve", benefit: "Étalonnage couleur Hollywood", icon: "Monitor" }
    ]
  },
  local_market_fit: {
    title: "Tournage Pays Basque",
    subtitle: "Lumière et paysages sublimés.",
    points: [
      { title: "Golden Hour", description: "Planification des tournages selon la lumière unique de la côte." },
      { title: "Lieux Emblématiques", description: "Intégration du territoire (Océan, Montagne) dans votre image." },
      { title: "Interviews", description: "Coaching face caméra pour vous mettre à l'aise." }
    ]
  },
  process_detailed: {
    title: "Action !",
    steps: [
      { name: "Scénario", duration: "J-7", deliverables: ["Script Validé"] },
      { name: "Tournage", duration: "Jour J", deliverables: ["Rushs 4K"] },
      { name: "Livraison", duration: "J+5", deliverables: ["Vidéos Montées"] }
    ]
  },
  benefits: {
    title: "Pourquoi la Vidéo ?",
    items: [
      { title: "Engagement x12", text: "Les posts vidéo génèrent 1200% plus d'engagement que texte/image.", icon: "TrendingUp" },
      { title: "Conversion", text: "86% des acheteurs regardent une vidéo avant d'acheter.", icon: "ShoppingCart" },
      { title: "Viral Potential", text: "Un format Reels/TikTok bien fait peut exploser votre notoriété.", icon: "Zap" }
    ]
  },
  stats: {
    title: "ROI Vidéo",
    metrics: [
      { value: "1200%", label: "Engagement vs Image", proof: "Meta Data" },
      { value: "9:16", label: "Format Mobile", proof: "TikTok/Reels/Stories" },
      { value: "+300%", label: "Partages", proof: "vs Contenu Statique" },
      { value: "4K 60fps", label: "Qualité Pro", proof: "Broadcast Ready" }
    ]
  },
  testimonial: {
    quote: "On a fait une vidéo Reels de présentation de notre hôtel. 150k vues en 10 jours, des centaines de commentaires et surtout 40+ réservations directes tracées depuis ce Reel. Incroyable ROI.",
    author: "Pierre Etchegaray",
    role: "Gérant",
    company: "Hôtel Villa Koegui",
    rating: 5
  },
  comparison: {
    title: "Production Pro vs Smartphone",
    competitors: ["Vidéo Smartphone", "Freelance Vidéaste"],
    rows: [
      { feature: "Scénarisation complète", us: true, them: [false, "Variable"] },
      { feature: "Matériel broadcast (4K HDR)", us: true, them: [false, "Variable"] },
      { feature: "Direction artistique", us: true, them: [false, "Variable"] },
      { feature: "Montage cut/sound design", us: true, them: ["Basique", "Variable"] },
      { feature: "Formats multi-plateformes", us: true, them: [false, "Payant"] }
    ]
  }
};
