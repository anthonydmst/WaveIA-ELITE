import { DeepContent } from "../types";

/**
 * CONTENT SEO - Variantes GMB et Netlinking
 * Anti-Duplicate Content Grade A+
 */

// ============================================================
// GOOGLE MY BUSINESS - /referencement-seo/google-my-business
// ============================================================
export const CONTENT_SEO_GMB: DeepContent = {
  problem: {
    title: "Votre fiche Google fait vide ?",
    text: "Horaires incorrects, photos floues ou inexistantes, pas de posts, aucun avis. Votre fiche Google Business ressemble à une entreprise fantôme. Les clients passent à côté ou vont chez le concurrent avec 150 avis 5 étoiles.",
    painPoints: [
      "Fiche incomplète (infos manquantes/obsolètes)",
      "Zéro photos ou photos amateur",
      "Aucun Google Post depuis la création",
      "Moins de 10 avis (contre 100+ chez les concurrents)"
    ]
  },
  solution: {
    title: "Fiche GMB 5 Étoiles",
    text: "Optimisation complète de votre fiche Google Business Profile. Catégories, attributs, photos pro, posts réguliers et stratégie d'obtention d'avis. Votre fiche devient votre meilleur commercial local.",
    methodology: [
      { step: "Audit GMB", details: "Analyse de votre fiche vs concurrents du Local Pack." },
      { step: "Optimisation 100%", details: "Catégories, attributs, photos, description optimisée." },
      { step: "Animation & Avis", details: "Posts mensuels + système de collecte d'avis automatisé." }
    ]
  },
  tech_stack: {
    title: "Stack Visibilité Locale",
    description: "Les outils pour dominer la carte.",
    items: [
      { name: "Grid My Business", benefit: "Tracking position GPS précis", icon: "MapPin" },
      { name: "Review Flow", benefit: "Automatisaton collecte avis", icon: "MessageSquare" },
      { name: "GeoImager", benefit: "Géotagging photos EXIF", icon: "Camera" }
    ]
  },
  local_market_fit: {
    title: "Le Réflexe Local",
    subtitle: "Être le choix évident du quartier.",
    points: [
      { title: "Horaires Locaux", description: "Gestion jours fériés et saisonnalité (Bayonne Fêtes, etc)." },
      { title: "Photos Réelles", description: "Vrais visuels de votre devanture, pas de stock photo." },
      { title: "Réponse Avis", description: "Ton adapté à la clientèle locale (proche et pro)." }
    ]
  },
  process_detailed: {
    title: "Objectif Top 3",
    steps: [
      { name: "Audit Fiche", duration: "Semaine 1", deliverables: ["Diagnostic Visibilité"] },
      { name: "Optimisation", duration: "Semaine 2", deliverables: ["Mise à jour Fiche"] },
      { name: "Booster Avis", duration: "Semaine 3", deliverables: ["Campagne SMS/Email"] }
    ]
  },
  benefits: {
    title: "Pourquoi Optimiser GMB ?",
    items: [
      { title: "Visibilité Maps", text: "Apparaissez dans le Local Pack (3 premiers résultats).", icon: "Map" },
      { title: "Confiance Avis", text: "Les avis sont LE facteur de décision local.", icon: "Star" },
      { title: "Trafic Gratuit", text: "Clics GMB = trafic qualifié sans payer de pub.", icon: "MousePointer" }
    ]
  },
  stats: {
    title: "ROI Google Business",
    metrics: [
      { value: "+400%", label: "Vues Fiche", proof: "Post Optimisation" },
      { value: "7x", label: "Plus de Clics", proof: "Itinéraires & Appels" },
      { value: "4.8", label: "Note Moyenne", proof: "Après Stratégie Avis" },
      { value: "100+", label: "Avis Collectés", proof: "En 12 Mois" }
    ]
  },
  testimonial: {
    quote: "Notre fiche avait 8 avis et des photos de 2018. Après l'opti WaveIA, on a 87 avis à 4.9 étoiles et +300% d'appels depuis Google Maps. Incroyable.",
    author: "Sandrine Loustau",
    role: "Gérante",
    company: "Boulangerie Loustau",
    rating: 5
  },
  comparison: {
    title: "GMB Optimisé vs Non Optimisé",
    competitors: ["Fiche Basique", "Pas de Fiche"],
    rows: [
      { feature: "Apparition Local Pack", us: true, them: ["Rare", false] },
      { feature: "Système collecte avis", us: true, them: [false, false] },
      { feature: "Google Posts réguliers", us: true, them: [false, false] },
      { feature: "Photos professionnelles", us: true, them: [false, false] },
      { feature: "Réponses aux avis", us: true, them: ["Aléatoire", false] }
    ]
  }
};

// ============================================================
// NETLINKING - /referencement-seo/netlinking
// ============================================================
export const CONTENT_SEO_NETLINKING: DeepContent = {
  problem: {
    title: "Google ne vous fait pas confiance ?",
    text: "Les backlinks sont le vote de confiance du web. Sans liens entrants de qualité, Google considère votre site comme un inconnu. Vos concurrents avec de bons liens vous passent devant systématiquement.",
    painPoints: [
      "Profil de liens quasi inexistant",
      "Liens de mauvaise qualité ou toxiques",
      "Pas de stratégie d'acquisition de liens",
      "TrustFlow/Citation Flow déséquilibré"
    ]
  },
  solution: {
    title: "Netlinking Éthique & Puissant",
    text: "Acquisition de backlinks naturels via guest posting, linkbaiting et partenariats. Nous construisons un profil de liens varié, thématique et durable. Pas de PBN ni techniques risquées.",
    methodology: [
      { step: "Audit Backlinks", details: "Analyse de votre profil de liens et celui des concurrents." },
      { step: "Stratégie Éditoriale", details: "Identification des opportunités de liens thématiques." },
      { step: "Acquisition Progressive", details: "2-5 liens de qualité par mois, rythme naturel." }
    ]
  },
  tech_stack: {
    title: "SEO Intelligence",
    description: " Analyse de données Big Data.",
    items: [
      { name: "Majestic SEO", benefit: "Analyse TrustFlow/Citation Flow", icon: "BarChart" },
      { name: "Ahrefs", benefit: "Espionnage backlinks concurrents", icon: "Search" },
      { name: "SEObserver", benefit: "Suivi positions & liens", icon: "Eye" }
    ]
  },
  local_market_fit: {
    title: "Maillage Territorial",
    subtitle: "Des liens qui ont du sens ici.",
    points: [
      { title: "Liens Locaux", description: "Partenariats avec acteurs locaux (Associations, Mairies, Presse Sud-Ouest)." },
      { title: "Ancrage Régional", description: "Renforce la pertinence sur les requêtes géolocalisées." },
      { title: "Qualité > Quantité", description: "Un lien local pertinent vaut 10 liens génériques." }
    ]
  },
  process_detailed: {
    title: "Campagne d'Influence",
    steps: [
      { name: "Selection Spots", duration: "Mensuel", deliverables: ["Liste Sites Validés"] },
      { name: "Rédaction", duration: "J+7", deliverables: ["Articles Sponsorisés"] },
      { name: "Publication", duration: "J+14", deliverables: ["Liens Actifs"] }
    ]
  },
  benefits: {
    title: "Pourquoi le Netlinking ?",
    items: [
      { title: "Autorité", text: "Les liens = votes de confiance pour Google.", icon: "Shield" },
      { title: "Positions", text: "Facteur #1 pour passer devant les concurrents.", icon: "TrendingUp" },
      { title: "Durabilité", text: "Un bon lien travaille pour vous pendant des années.", icon: "Clock" }
    ]
  },
  stats: {
    title: "Impact Netlinking",
    metrics: [
      { value: "2-5", label: "Liens/Mois", proof: "Rythme Naturel" },
      { value: "50+", label: "TrustFlow Moyen", proof: "Sites Partenaires" },
      { value: "+45%", label: "Autorité Domaine", proof: "Après 6 Mois" },
      { value: "0", label: "Liens Toxiques", proof: "Que du White Hat" }
    ]
  },
  testimonial: {
    quote: "On stagnait en page 2 depuis 2 ans. Après 6 mois de netlinking, on est top 3. La différence c'était vraiment les backlinks de qualité qu'il nous manquait.",
    author: "Benoît Harriague",
    role: "CEO",
    company: "Immobilier Côte Basque",
    rating: 5
  },
  comparison: {
    title: "Netlinking Éthique vs Black Hat",
    competitors: ["Achat Liens PBN", "Pas de Netlinking"],
    rows: [
      { feature: "Sécurité pénalité Google", us: true, them: [false, true] },
      { feature: "Liens thématiques", us: true, them: ["Variable", false] },
      { feature: "Durabilité des gains", us: true, them: [false, false] },
      { feature: "Profil naturel", us: true, them: [false, true] },
      { feature: "Croissance autorité", us: true, them: ["Risqué", false] }
    ]
  }
};

// ============================================================
// TECH HUB - /creation-site-internet
// ============================================================
export const CONTENT_TECH_HUB: DeepContent = {
  problem: {
    title: "Le Syndrome du Site \"Invisible\" au Pays Basque",
    text: "Au Pays Basque, la concurrence est féroce. Avoir un site \"joli\" ne suffit plus quand vos concurrents à Biarritz ou Bayonne investissent massivement. Les sites standards (WordPress/Wix) sont lents, mal référencés et invisibles sur Google. Votre site doit être une machine de guerre, pas une carte de visite virtuelle.",
    painPoints: [
      "Site lent (>3s) qui fait fuir 53% des visiteurs mobiles",
      "Design \"Template\" qui dilue votre image de marque premium",
      "Invisible sur Google (Page 2 = Cimetière)",
      "Zéro conversion : du trafic mais aucun appel"
    ]
  },
  solution: {
    title: "Digital Asset Engineering",
    text: "Nous ne faisons pas de \"création de site\". Nous construisons des Actifs Numériques Haute Performance. Architecture Next.js (utilisée par Netflix, Uber), design sur-mesure validé par data, et SEO natif. Votre site devient le meilleur commercial de votre entreprise, disponible 24/7.",
    methodology: [
      { step: "Audit & Stratégie", details: "Analyse profonde de votre marché local et concurrence." },
      { step: "UX/UI Design", details: "Maquettes haute-fidélité orientées conversion pure." },
      { step: "Dev Next.js", details: "Code propre, ultra-rapide et sécurisé (jamais de hack WordPress)." }
    ]
  },
  tech_stack: {
    title: "L'Arsenal Technique WaveIA",
    description: "Nous n'utilisons pas les outils du passé. Votre site est propulsé par la stack technique du TOP 1% mondial.",
    items: [
      { 
        name: "Next.js 14", 
        benefit: "Vitesse instantanée & SEO natif (Google adore).", 
        icon: "Zap" 
      },
      { 
        name: "Vercel Edge", 
        benefit: "Hébergement mondial, chargement <100ms.", 
        icon: "Globe" 
      },
      { 
        name: "Tailwind v4", 
        benefit: "Design 100% unique, zéro code mort.", 
        icon: "Palette" 
      }
    ]
  },
  local_market_fit: {
    title: "Pourquoi une approche spécifique Pays Basque ?",
    subtitle: "Notre région a des codes uniques. Votre site doit les maîtriser.",
    points: [
      { 
        title: "Saisonnalité Intense", 
        description: "Votre site doit encaisser les pics de trafic estivaux sans broncher." 
      },
      { 
        title: "Clientèle Exigeante", 
        description: "Le marché local (Luxe, Immo, Tourisme) demande une esthétique irréprochable." 
      },
      { 
        title: "Bilinguisme Contextuel", 
        description: "Intégration subtile de l'identité basque sans clichés." 
      }
    ]
  },
  process_detailed: {
    title: "De la Vision à la Réalité",
    steps: [
      { name: "Kickoff & Discovery", duration: "Semaine 1", deliverables: ["Cahier des charges", "Moodboard"] },
      { name: "Design System", duration: "Semaine 2", deliverables: ["Maquettes Figma", "Prototypes"] },
      { name: "Développement", duration: "Semaine 3-4", deliverables: ["Site Staging", "Optimisations"] },
      { name: "Launch & Growth", duration: "Semaine 5", deliverables: ["Mise en ligne", "Formation"] }
    ]
  },
  benefits: {
    title: "L'Avantage Injuste WaveIA",
    items: [
      { title: "Performance Absolue", text: "Score Lighthouse 100/100. Chargement instantané.", icon: "Gauge" },
      { title: "SEO First", text: "Architecture pensée pour le référencement dès la ligne 1.", icon: "Search" },
      { title: "Évolutivité", text: "Un site qui grandit avec votre business, sans tout refaire.", icon: "TrendingUp" }
    ]
  },
  stats: {
    title: "Impact Mesuré",
    metrics: [
      { value: "0.1s", label: "Chargement", proof: "Time to First Byte" },
      { value: "+150%", label: "Trafic SEO", proof: "Moyenne Client 6 mois" },
      { value: "x3", label: "Taux Conversion", proof: "Vs ancien site" },
      { value: "100%", label: "Sécurité", proof: "Architecture Jamstack" }
    ]
  },
  testimonial: {
    quote: "On pensait avoir un bon site WordPress. WaveIA nous a montré ce qu'était la vraie performance. Nos leads ont triplé en 2 mois, et nos clients nous complimentent sur la vitesse du site.",
    author: "Thomas Etcheverry",
    role: "Fondateur",
    company: "Immo Côte Ouest",
    rating: 5
  },
  comparison: {
    title: "Agence Next.js vs Agence Classique",
    competitors: ["Agence WordPress", "Freelance Wix"],
    rows: [
      { feature: "Technologie", us: "Next.js (React)", them: ["PHP (Vieux)", "Constructeur"] },
      { feature: "Vitesse Chargement", us: "Instantané (Edge)", them: ["Lent (Serveur)", "Moyen"] },
      { feature: "Sécurité", us: "Inviolable (Static)", them: ["Failles Plugins", "Standard"] },
      { feature: "Design", us: "100% Sur-mesure", them: ["Thème Acheté", "Template"] },
      { feature: "Propriété", us: "Code à vous", them: ["Sauvegarde complexe", "Locataire"] }
    ]
  }
};
