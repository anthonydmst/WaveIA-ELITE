import { DeepContent } from "../types";

// ============================================================
// HUB MÉTIER - Content principal du silo
// ============================================================
export const CONTENT_HUB_METIER: DeepContent = {
  problem: {
    title: "Le Généralisme tue votre Business",
    text: "Un site 'vitrine' classique ne sert à rien pour un restaurateur qui a besoin de réservations, ou un agent immobilier qui doit synchroniser ses mandats. Utiliser un template générique pour un métier spécifique, c'est comme opérer avec des gants de boxe : inefficace et dangereux.",
    painPoints: [
      "Perte de temps administrative (pas d'automatisation)",
      "Outils métier non connectés (double saisie)",
      "Expérience client frustrante (pas de services en ligne)",
      "Design qui ne respecte pas les codes de votre secteur"
    ]
  },
  solution: {
    title: "Solutions Verticales Sur-Mesure",
    text: "Nous développons des infrastructures digitales dédiées à VOTRE métier. Passerelles immobilières, moteurs de réservation, click & collect, prise de RDV médicale. Votre site n'est pas une brochure, c'est le cœur opérationnel de votre activité.",
    methodology: [
      { step: "Audit Opérationnel", details: "Analyse de vos flux de travail et choix des outils à intégrer." },
      { step: "Développement Connecté", details: "Intégration API de vos logiciels métier (Zenchef, Apimo...)." },
      { step: "Automatisation", details: "Mise en place de scénarios pour réduire votre charge mentale." }
    ]
  },
  tech_stack: {
    title: "L'Outillage Vertical",
    description: "Nous connectons votre site aux meilleurs outils de votre industrie. Fini les silos de données.",
    items: [
      { name: "Passerelles API", benefit: "Synchro auto avec vos logiciels (Apimo, Hektor, Doctolib).", icon: "Zap" },
      { name: "Booking Engines", benefit: "Réservation directe sans commission (Zenchef, GuestOnline).", icon: "Calendar" },
      { name: "Paiement & Devis", benefit: "Encaissement sécurisé et signature électronique intégrée.", icon: "CreditCard" }
    ]
  },
  local_market_fit: {
    title: "Business Local : La Réalité du Terrain",
    subtitle: "Entre saisonnalité et clientèle exigeante, le Pays Basque ne pardonne pas.",
    points: [
      { title: "Saisonnalité Extrême", description: "Votre structure digitale doit tenir le choc quand vous faites 60% du CA en 3 mois." },
      { title: "Clientèle Premium", description: "Les codes du 'Luxe' sont attendus partout, même chez l'artisan local." },
      { title: "Réputation & Avis", description: "Dans une zone où 'tout se sait', votre e-réputation doit être blindée." }
    ]
  },
  process_detailed: {
    title: "Intégration Métier",
    steps: [
      { name: "Immersion", duration: "Semaine 1", deliverables: ["Audit Workflow", "Choix Tech"] },
      { name: "Intégration", duration: "Semaine 2-3", deliverables: ["Connexion API", "Tests Flux"] },
      { name: "Setup Design", duration: "Semaine 4", deliverables: ["UI Sectorielle", "Contenu"] },
      { name: "Formation", duration: "Semaine 5", deliverables: ["Notice Utilisation", "Support"] }
    ]
  },
  benefits: {
    title: "Pourquoi la Spécialisation ?",
    items: [
      { title: "Conversion Max", text: "Un parcours client pensé pour VOTRE service convertit mieux.", icon: "TrendingUp" },
      { title: "Gain de Temps", text: "L'automatisation vous rend 10h par semaine de gestion.", icon: "Clock" },
      { title: "Crédibilité", text: "Un site qui 'parle' votre métier rassure instantanément.", icon: "Award" }
    ]
  },
  stats: {
    title: "Impact Solutions Métier",
    metrics: [
      { value: "8", label: "Verticales", proof: "Secteurs Maîtrisés" },
      { value: "+210%", label: "Conversion", proof: "vs Site Généraliste" },
      { value: "10h+", label: "Temps Gagné", proof: "Par Semaine" },
      { value: "100%", label: "Connecté", proof: "API Métier" }
    ]
  },
  comparison: {
    title: "Expertise Métier vs Agence Généraliste",
    competitors: ["Agence Généraliste", "Template WordPress"],
    rows: [
      { feature: "Module métier dédié", us: true, them: [false, false] },
      { feature: "Tunnel de conversion sectoriel", us: true, them: [false, false] },
      { feature: "Design adapté au secteur", us: true, them: ["Basique", "Template"] },
      { feature: "Compréhension business model", us: true, them: [false, false] },
      { feature: "Formation utilisation", us: true, them: ["Option", false] }
    ]
  },
  relatedServices: [
    { slug: "/creation-site-internet/site-vitrine", label: "Site Vitrine Pro" },
    { slug: "/referencement-seo/local", label: "SEO Local" }
  ]
};

// ============================================================
// SANTÉ - Médecins, Dentistes, Kinés
// ============================================================
export const CONTENT_METIER_SANTE: DeepContent = {
  problem: {
    title: "Les RDV téléphoniques paralysent votre secrétariat ?",
    text: "En moyenne, un cabinet médical passe 10h/semaine au téléphone pour gérer les prises de rendez-vous. Sans site de RDV en ligne, vos patients appellent en plein consultation, saturent votre ligne et 30% des RDV finissent en no-show.",
    painPoints: [
      "Secrétariat surchargé par les appels de RDV",
      "30% de no-shows faute de rappels automatiques",
      "Impossible de prendre RDV hors horaires d'ouverture",
      "Pas de pré-consultation pour optimiser le temps médical"
    ]
  },
  solution: {
    title: "Le Cabinet Médical 2.0",
    text: "Un site médical conforme RGPD avec prise de RDV en ligne 24/7. Vos patients réservent leur créneau, remplissent un questionnaire de pré-consultation et reçoivent des rappels SMS automatiques. Votre secrétariat respire, vos consultations sont mieux préparées.",
    methodology: [
      { step: "Agenda Médical", details: "Intégration Doctolib, Maiia ou système propriétaire avec plages horaires." },
      { step: "Pré-Consultation RGPD", details: "Formulaire sécurisé SSL pour collecter les symptômes avant la consultation." },
      { step: "Rappels Automatiques", details: "SMS/Email J-1 et H-2 pour réduire les no-shows de 30% à 5%." }
    ]
  },
  tech_stack: {
    title: "HealthTech Stack",
    description: "Sécurité maximale pour données sensibles.",
    items: [
      { name: "Hébergement HDS", benefit: "Données de santé sécurisées", icon: "Shield" },
      { name: "Doctolib API", benefit: "Synchro agenda temps réel", icon: "Calendar" },
      { name: "Stripe Santé", benefit: "Paiement téléconsultation", icon: "CreditCard" }
    ]
  },
  local_market_fit: {
    title: "Déserts Médicaux & Proximité",
    subtitle: "Rendre le soin accessible.",
    points: [
      { title: "Accessibilité", description: "Design contrasté pour séniors et malvoyants (WCAG AAA)." },
      { title: "SEO Local Santé", description: "Être visible sur 'Médecin + quartier' pour les nouveaux arrivants." },
      { title: "Urgences", description: "Affichage clair des numéros d'urgence et gardes locales." }
    ]
  },
  process_detailed: {
    title: "Digitalisation Cabinet",
    steps: [
      { name: "Audit RGPD", duration: "Semaine 1", deliverables: ["Conformité Données"] },
      { name: "Agenda", duration: "Semaine 2", deliverables: ["Paramétrage Crénaux"] },
      { name: "Lancement", duration: "Semaine 3", deliverables: ["Formation Secrétariat"] }
    ]
  },
  benefits: {
    title: "Libérez Votre Secrétariat",
    items: [
      { title: "-60% Appels", text: "La majorité des RDV se prennent en ligne, même la nuit.", icon: "Phone" },
      { title: "-80% No-Shows", text: "Les rappels automatiques divisent les absences par 4.", icon: "Calendar" },
      { title: "Gain Médical", text: "Pré-consultation : vous gagnez 5min par patient.", icon: "Clock" }
    ]
  },
  stats: {
    title: "ROI Cabinet Médical",
    metrics: [
      { value: "24/7", label: "Prise RDV", proof: "En Ligne" },
      { value: "-75%", label: "No-Shows", proof: "Rappels Auto" },
      { value: "10h", label: "Gagnées/Sem", proof: "Secrétariat" },
      { value: "100%", label: "RGPD Compliant", proof: "Hébergement Santé" }
    ]
  },
  comparison: {
    title: "RDV en Ligne vs Téléphone Seul",
    competitors: ["Téléphone Seul", "Doctolib Sans Site"],
    rows: [
      { feature: "Prise RDV 24/7", us: true, them: [false, true] },
      { feature: "Pré-consultation intégrée", us: true, them: [false, false] },
      { feature: "Identité visuelle cabinet", us: true, them: [false, "Limité"] },
      { feature: "Infos pratiques & équipe", us: true, them: [false, "Basique"] },
      { feature: "Propriété des données", us: true, them: [true, false] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo/google-my-business", label: "Fiche Doctolib/GMB" },
    { slug: "/solutions/site-web-bien-etre", label: "Spa & Bien-Être" },
    { slug: "/solutions/site-web-avocat", label: "Site Avocat" }
  ]
};

// ============================================================
// JURIDIQUE - Avocats, Notaires, Experts-Comptables
// ============================================================
export const CONTENT_METIER_JURIDIQUE: DeepContent = {
  problem: {
    title: "Votre expertise reste invisible ?",
    text: "Le marché juridique est saturé. Sans site professionnel qui démontre votre expertise, les clients potentiels choisissent l'avocat avec le meilleur référencement Google, pas forcément le plus compétent. 85% des particuliers cherchent leur avocat en ligne avant de téléphoner.",
    painPoints: [
      "Aucune visibilité sur Google pour vos domaines d'expertise",
      "Pas de blog juridique pour démontrer vos compétences",
      "Formulaire de contact non sécurisé (problème de confidentialité)",
      "Image amateur qui ne reflète pas votre niveau d'excellence"
    ]
  },
  solution: {
    title: "Le Cabinet Juridique d'Autorité",
    text: "Un site avocat premium qui positionne votre expertise. Blog juridique pour le SEO, pages spécialisées par domaine de droit, formulaire confidentiel chiffré et design sobre qui inspire confiance. Vous ne vendez pas des heures, vous vendez de l'expertise.",
    methodology: [
      { step: "Pages Expertises", details: "Une page SEO par domaine : Droit Pénal, Famille, Commercial..." },
      { step: "Blog d'Autorité", details: "Articles juridiques pour ranker sur Google et prouver votre maîtrise." },
      { step: "Contact Confidentiel", details: "Formulaire SSL avec mention confidentialité pour rassurer." }
    ]
  },
  tech_stack: {
    title: "Legal Tech",
    description: "Confidentialité et sécurité avant tout.",
    items: [
      { name: "Chiffrement SSL", benefit: "Échanges clients 100% sécurisés", icon: "Lock" },
      { name: "CMS Blog Pro", benefit: "Publication articles simplifiée", icon: "FileText" },
      { name: "Module RDV", benefit: "Consultation payante pré-payée", icon: "CreditCard" }
    ]
  },
  local_market_fit: {
    title: "Avocat à la Barre",
    subtitle: "Une présence forte au barreau local.",
    points: [
      { title: "Barreau Local", description: "Mise en avant de votre appartenance au barreau (Bayonne, Pau...)." },
      { title: "Droit Local", description: "Expertise sur les spécificités transfrontalières ou immobilières locales." },
      { title: "Réseau", description: "Partenariats avec notaires et huissiers locaux affichés." }
    ]
  },
  process_detailed: {
    title: "Votre Site Cabinet",
    steps: [
      { name: "Shooting Portrait", duration: "Semaine 1", deliverables: ["Photos Officielles"] },
      { name: "Architecture", duration: "Semaine 2", deliverables: ["Silo Expertises"] },
      { name: "Rédaction", duration: "Semaine 3", deliverables: ["Contenu Juridique"] }
    ]
  },
  benefits: {
    title: "Positionnez Votre Expertise",
    items: [
      { title: "Autorité SEO", text: "Rankez sur 'avocat [spécialité] [ville]' grâce au blog juridique.", icon: "Search" },
      { title: "Confiance Client", text: "Design sobre et professionnel qui rassure instantanément.", icon: "Shield" },
      { title: "Leads Qualifiés", text: "Le contenu filtre les clients sérieux des tire-au-flanc.", icon: "Target" }
    ]
  },
  stats: {
    title: "Impact Cabinet Juridique",
    metrics: [
      { value: "+320%", label: "Trafic Organique", proof: "Blog Juridique" },
      { value: "1er", label: "Position Google", proof: "Mots-Clés Métier" },
      { value: "100%", label: "SSL Chiffré", proof: "Confidentialité" },
      { value: "4.8/5", label: "Satisfaction", proof: "Reviews" }
    ]
  },
  comparison: {
    title: "Site Avocat Premium vs Annuaire",
    competitors: ["Annuaire Avocat", "Pas de Site"],
    rows: [
      { feature: "Blog expertise juridique", us: true, them: [false, false] },
      { feature: "SEO par spécialité", us: true, them: [false, false] },
      { feature: "Contact confidentiel", us: true, them: ["Basique", false] },
      { feature: "Image professionnelle", us: true, them: [false, false] },
      { feature: "Propriété des leads", us: true, them: [false, true] }
    ]
  },
  relatedServices: [
    { slug: "/referencement-seo/audit-seo-gratuit", label: "Audit Visibilité Avocat" },
    { slug: "/solutions/site-web-formation", label: "Formation & Consulting" },
    { slug: "/solutions/site-web-medecin", label: "Site Profession Médicale" }
  ]
};

// Exports
export { CONTENT_METIER_RESTO, CONTENT_METIER_HOTEL, CONTENT_METIER_IMMO, CONTENT_METIER_BTP } from "./content-library";
export { CONTENT_METIER_BIEN_ETRE, CONTENT_METIER_FORMATION } from "./content-metier-2";
