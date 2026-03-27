import { DeepContent } from "../types";

// ============================================================
// BIEN-ÊTRE - Spa, Institut Beauté, Coach Sportif, Yoga
// ============================================================
export const CONTENT_METIER_BIEN_ETRE: DeepContent = {
  problem: {
    title: "Créneaux vides et planning à trous ?",
    text: "Dans le bien-être, 40% des RDV se prennent hors horaires d'ouverture (soir, weekend). Sans système de réservation en ligne, vous perdez ces clients qui iront chez le concurrent avec un site. Résultat : planning sous-optimisé et CA en baisse.",
    painPoints: [
      "Appels manqués = créneaux vides = perte de CA",
      "Pas de vente en ligne de forfaits/cartes cadeaux",
      "Impossible de montrer l'ambiance zen de votre institut",
      "Clients perdus faute de réservation facile"
    ]
  },
  solution: {
    title: "L'Institut Bien-Être Connecté",
    text: "Un site zen et élégant avec réservation soins en ligne, vente de forfaits et abonnements, et galerie photo immersive de vos espaces. Vos clients réservent leur massage 24/7, achètent des cartes cadeaux pour Noël et découvrent votre univers avant même de pousser la porte.",
    methodology: [
      { step: "Agenda Soins", details: "Réservation par type de soin, durée et praticien disponible." },
      { step: "E-Commerce Forfaits", details: "Vendez vos abonnements, cartes 10 séances et cartes cadeaux en ligne." },
      { step: "Ambiance Visuelle", details: "Galerie photo professionnelle pour donner envie avant la visite." }
    ]
  },
  tech_stack: {
    title: "Zen & Tech",
    description: "Une expérience fluide, du site jusqu'au soin.",
    items: [
      { name: "Planity API", benefit: "Réservation beauté leader", icon: "Calendar" },
      { name: "Stripe", benefit: "Vente cartes cadeaux sécurisée", icon: "CreditCard" },
      { name: "Instagram Feed", benefit: "Ambiance visuelle temps réel", icon: "Instagram" }
    ]
  },
  local_market_fit: {
    title: "Soin de Soi Local",
    subtitle: "Devenir le réflexe bien-être du quartier.",
    points: [
      { title: "Offres Locales", description: "Tarifs résidents vs touristes (carte fidélité)." },
      { title: "Partenariats", description: "Cross-selling avec hôtels et maisons d'hôtes voisins." },
      { title: "SEO Beauté", description: "Positionnement sur 'Massage + Ville' et 'Soins + Quartier'." }
    ]
  },
  process_detailed: {
    title: "Digitalisation Institut",
    steps: [
      { name: "Shooting Zen", duration: "Semaine 1", deliverables: ["Photos Ambiance"] },
      { name: "Catalogue", duration: "Semaine 2", deliverables: ["Menu Soins"] },
      { name: "Formation", duration: "Semaine 3", deliverables: ["Gestion Planning"] }
    ]
  },
  benefits: {
    title: "Zen & Rentable",
    items: [
      { title: "+35% Réservations", text: "Les clients réservent quand ils y pensent, même à 22h.", icon: "Calendar" },
      { title: "Forfaits en Ligne", text: "Vendez des abonnements sans être au téléphone.", icon: "ShoppingCart" },
      { title: "Expérience Client", text: "La réservation en ligne améliore la satisfaction de 40%.", icon: "Smile" }
    ]
  },
  stats: {
    title: "Performance Bien-Être",
    metrics: [
      { value: "+35%", label: "Taux de Remplissage", proof: "Résa 24/7" },
      { value: "28%", label: "CA Forfaits Online", proof: "E-Commerce" },
      { value: "4.9/5", label: "Satisfaction Client", proof: "Reviews" },
      { value: "0", label: "Appels Manqués", proof: "Agenda Online" }
    ]
  },
  testimonial: {
    quote: "Depuis qu'on a mis la réservation en ligne, on a rempli nos créneaux creux (mardi matin, dimanche soir). La vente de forfaits en ligne représente maintenant 25% de notre CA.",
    author: "Émilie Martin",
    role: "Gérante",
    company: "Spa Côte des Basques",
    rating: 5
  },
  comparison: {
    title: "Résa Online vs Téléphone Seul",
    competitors: ["Téléphone Seul", "Planity Sans Site"],
    rows: [
      { feature: "Réservation 24/7", us: true, them: [false, true] },
      { feature: "Vente forfaits en ligne", us: true, them: [false, false] },
      { feature: "Galerie ambiance spa", us: true, them: [false, "Limité"] },
      { feature: "Identité visuelle propre", us: true, them: [false, "Basique"] },
      { feature: "SEO local optimisé", us: true, them: [false, false] }
    ]
  },
  // S-Tier SEO: Cross-linking with other métier services
  relatedServices: [
    { slug: "/solutions/site-web-medecin", label: "Site Médecin / Kiné" },
    { slug: "/solutions/site-web-formation", label: "Formation & Coaching" }
  ]
};

// ============================================================
// FORMATION - Centre Formation, Coach, Consultant
// ============================================================
export const CONTENT_METIER_FORMATION: DeepContent = {
  problem: {
    title: "Vos formations se vendent mal ?",
    text: "Un catalogue PDF ou une page Facebook ne suffisent plus. Les apprenants veulent voir les programmes détaillés, lire les avis, payer en ligne et accéder à leur espace membre. Sans plateforme dédiée, vous perdez 60% des prospects au moment de l'inscription.",
    painPoints: [
      "Catalogue formations illisible (PDF, Excel)",
      "Pas de paiement en ligne = abandon au moment de l'inscription",
      "Aucun espace membre pour vos apprenants",
      "Impossible de prouver la qualité de vos formations (avis, certif)"
    ]
  },
  solution: {
    title: "La Plateforme E-Learning Premium",
    text: "Catalogue de formations attractif avec filtres, fiches détaillées et avis. Paiement en ligne sécurisé et espace membre avec vidéos, ressources et certificats. Transformez votre site en véritable machine à inscrire des apprenants.",
    methodology: [
      { step: "Catalogue Intelligent", details: "Filtres par thème, durée, niveau et modalité (présentiel/distanciel)." },
      { step: "LMS Intégré", details: "Learning Management System avec vidéos, quizz et suivi progression." },
      { step: "Paiement CPF", details: "Intégration paiement CB + passerelle Mon Compte Formation." }
    ]
  },
  tech_stack: {
    title: "EdTech Stack",
    description: "Apprendre sans friction technique.",
    items: [
      { name: "LMS Custom", benefit: "Cours vidéos & Quizz", icon: "BookOpen" },
      { name: "Vidéo Ultra-Rapide", benefit: "Streaming HD adaptatif", icon: "Video" },
      { name: "Certificat PDF", benefit: "Génération auto diplôme", icon: "Award" }
    ]
  },
  local_market_fit: {
    title: "Formation Territoriale",
    subtitle: "Former les talents d'ici.",
    points: [
      { title: "Financement Local", description: "Intégration des infos OPCO locaux et Région Nouvelle-Aquitaine." },
      { title: "Réseau Alumni", description: "Cartographie des anciens élèves pour mailler le territoire." },
      { title: "Emploi", description: "Job board connecté aux entreprises locales qui recrutent." }
    ]
  },
  process_detailed: {
    title: "Lancement École en Ligne",
    steps: [
      { name: "Architecture Pédago", duration: "Semaine 1", deliverables: ["Arborescence Cours"] },
      { name: "Production", duration: "Semaine 2-3", deliverables: ["Upload Vidéos"] },
      { name: "Vente", duration: "Semaine 4", deliverables: ["Connexion Stripe"] }
    ]
  },
  benefits: {
    title: "Vendez Vos Formations x3",
    items: [
      { title: "Conversion", text: "Le paiement en ligne élimine les frictions d'inscription.", icon: "CreditCard" },
      { title: "Automatisation", text: "Envoi des accès et ressources automatique post-paiement.", icon: "Zap" },
      { title: "Fidélisation", text: "L'espace membre incite aux re-inscriptions.", icon: "Users" }
    ]
  },
  stats: {
    title: "ROI Formation",
    metrics: [
      { value: "+180%", label: "Inscriptions", proof: "Paiement Online" },
      { value: "42%", label: "Taux Re-Inscription", proof: "Espace Membre" },
      { value: "4.7/5", label: "Note Formations", proof: "Avis Apprenants" },
      { value: "100%", label: "Eligible CPF", proof: "Certif Qualiopi" }
    ]
  },
  testimonial: {
    quote: "Avant le site, on galérait à remplir nos sessions. Maintenant les inscriptions se font en ligne et on a même une liste d'attente sur certaines formations. Le ROI a été atteint en 6 semaines.",
    author: "Thomas Verdier",
    role: "Directeur",
    company: "Formation Pro Pays Basque",
    rating: 5
  },
  comparison: {
    title: "Plateforme LMS vs Catalogue PDF",
    competitors: ["PDF/Excel", "Google Forms"],
    rows: [
      { feature: "Catalogue filtrable", us: true, them: [false, false] },
      { feature: "Paiement en ligne", us: true, them: [false, false] },
      { feature: "Espace membre LMS", us: true, them: [false, false] },
      { feature: "Avis apprenants", us: true, them: [false, false] },
      { feature: "Certificats automatiques", us: true, them: [false, false] }
    ]
  },
  // S-Tier SEO: Cross-linking with other métier services
  relatedServices: [
    { slug: "/solutions/site-web-avocat", label: "Site Avocat / Consultant" },
    { slug: "/solutions/site-web-bien-etre", label: "Spa & Bien-Être" }
  ]
};
