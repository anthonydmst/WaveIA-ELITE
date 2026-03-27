import { DeepContent } from "../types";

/**
 * CONTENT AGENCE - Variantes Photo/Video et Réseaux Sociaux
 * Anti-Duplicate Content Grade A+
 */

// ============================================================
// PHOTO & VIDÉO - /agence-communication/photo-video
// ============================================================
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

// ============================================================
// RÉSEAUX SOCIAUX - /agence-communication/reseaux-sociaux
// ============================================================
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
