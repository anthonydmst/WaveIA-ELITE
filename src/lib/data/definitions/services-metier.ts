import { Service } from "../types";
import { PROCESS_WAVE_PREMIUM } from "./premium-defaults";
import { TECH_FAQS } from "./specific-faqs";
import { 
  CONTENT_HUB_METIER,
  CONTENT_METIER_RESTO, 
  CONTENT_METIER_HOTEL, 
  CONTENT_METIER_IMMO, 
  CONTENT_METIER_BTP,
  CONTENT_METIER_SANTE,
  CONTENT_METIER_JURIDIQUE,
  CONTENT_METIER_BIEN_ETRE,
  CONTENT_METIER_FORMATION
} from "./content-metier";

export const METIER_SERVICES: Service[] = [
  // Hub
  {
    slug: "solutions",
    type: "hub",
    silo: "metier",
    title: "Solutions Métiers",
    description: "Sites web spécialisés par secteur : Restaurant, Hôtel, Immobilier, Artisan. Des fonctionnalités sur-mesure pour votre activité.",
    hero: {
      title: "Solutions Web par Métier",
      subtitle: "Expertise Sectorielle",
      description: "On ne fait pas le même site pour un restaurant et un artisan. Découvrez nos solutions digitales 100% dédiées à votre activité.",
      badge: "Expertise Verticale 🚀",
    },
    features: [
      {
        title: "Fonctionnalités Métier",
        description: "Booking, Click & Collect, Passerelles Immo... Des outils qui servent votre business.",
      },
      {
        title: "Design Sectoriel",
        description: "Des codes visuels adaptés à votre industrie pour rassurer vos prospects instantanément.",
      },
      {
        title: "Performance Commerciale",
        description: "Des tunnels de conversion pensés pour transformer vos visiteurs en clients.",
      },
      {
        title: "Formation Dédiée",
        description: "On vous apprend à utiliser VOS outils (Menu, Réservations, Annonces).",
      },
    ],
    process: PROCESS_WAVE_PREMIUM,
    faq: TECH_FAQS,
    content: CONTENT_HUB_METIER,
  },
  
  // ========================================
  // RESTAURATION & HÔTELLERIE
  // ========================================
  {
    slug: "site-web-restaurant",
    silo: "metier",
    title: "Site Internet Restaurant",
    description: "Solution web pour restaurateurs. Menu digital, Réservation sans commission, Click & Collect.",
    hero: {
      title: "Solution Restaurant",
      subtitle: "Remplissez votre salle",
      description: "Plus de commissions excessives. Un site qui vous rend votre indépendance.",
      badge: "Zéro Commission 🍔",
    },
    features: [
      { title: "Réservation Directe", description: "Module de réservation zéro commission intégré. Gardez 100% de votre marge." },
      { title: "Menu QR Code", description: "Changez votre carte en un clic, sans réimpression." },
      { title: "SEO Local Restaurant", description: "Positionnement sur 'restaurant + votre ville' et fiche Google optimisée pour le Local Pack." },
      { title: "Menu 100% Responsive", description: "Une carte lisible et engageante sur mobile, là où se fait la majorité des recherches avant réservation." },
    ],
    process: [
      { title: "Audit Concurrence Locale (48h)", description: "Analyse des restaurants concurrents et de votre potentiel de réservation directe en ligne." },
      { title: "Design Appétissant", description: "Maquettes qui mettent en valeur votre carte et l'ambiance de votre salle." },
      { title: "Intégration Réservation & Menu", description: "Connexion du module de réservation zéro commission et du menu digital QR Code." },
      { title: "Lancement & Formation Équipe", description: "Mise en ligne et formation de votre personnel à la gestion du menu et des réservations." },
    ],
    faq: TECH_FAQS,
    content: CONTENT_METIER_RESTO,
  },
  {
    slug: "site-web-hotel",
    silo: "metier",
    title: "Site Internet Hôtel",
    description: "Site web hôtelier. Moteur de réservation direct, galerie photo immersive.",
    hero: {
      title: "Solution Hôtellerie",
      subtitle: "Boostez vos réservations directes",
      description: "Un site conçu pour réduire la part des OTAs (Booking, Expedia) et augmenter votre marge.",
      badge: "Marge Restaurée 🛎️",
    },
    features: [
      { title: "Moteur de Réservation", description: "Intégration fluide de votre PMS ou Booking Engine." },
      { title: "Expérience Visuelle", description: "Mettez en valeur vos chambres avec des galeries immersives." },
      { title: "SEO Multilingue", description: "Visibilité sur les recherches internationales de votre clientèle touristique." },
      { title: "Réservation Mobile", description: "Un parcours de réservation en 2 taps depuis un smartphone, où se décide la majorité des séjours." },
    ],
    process: [
      { title: "Audit Canal Direct", description: "Analyse de votre taux de commission OTA actuel et de votre potentiel de réservation directe." },
      { title: "Design Immersif", description: "Maquettes avec galeries photo et vidéo qui vendent l'expérience de séjour." },
      { title: "Intégration Booking Engine", description: "Connexion de votre moteur de réservation direct sans commission (D-Edge, Availpro...)." },
      { title: "Lancement & Suivi RevPAR", description: "Mise en ligne et suivi des indicateurs de conversion en réservation directe." },
    ],
    faq: TECH_FAQS,
    content: CONTENT_METIER_HOTEL,
  },

  // ========================================
  // IMMOBILIER & BTP
  // ========================================
  {
    slug: "site-web-immobilier",
    silo: "metier",
    title: "Site Agence Immobilière",
    description: "Site pour agence immo. Passerelle logiciel (Apimo, Hektor), Moteur de recherche biens.",
    hero: {
      title: "Solution Immobilier",
      subtitle: "Vendez plus de biens",
      description: "Synchronisation automatique avec votre logiciel de transaction. Vos annonces toujours à jour.",
      badge: "Synchro Hektor/Apimo 🏠",
    },
    features: [
      { title: "Passerelle Logiciel", description: "Compatible avec tous les grands logiciels (Hektor, Apimo, AdaptImmo...)." },
      { title: "Alerte Email", description: "Vos clients reçoivent les nouveaux biens avant tout le monde." },
      { title: "SEO par Quartier", description: "Positionnement sur 'agence immobilière + ville ou quartier' pour capter les recherches locales." },
      { title: "Consultation Mobile des Biens", description: "Annonces et photos optimisées pour la consultation sur smartphone." },
    ],
    process: [
      { title: "Audit Mandats & Logiciel", description: "Analyse de votre logiciel métier (Apimo, Hektor) et de vos mandats actuels." },
      { title: "Design Vitrine Biens", description: "Maquettes façon magazine pour sublimer vos annonces et exclusivités." },
      { title: "Synchronisation API", description: "Connexion automatique de vos annonces depuis votre logiciel de transaction." },
      { title: "Lancement & Formation Estimation", description: "Mise en ligne et formation à l'outil de captation de leads vendeurs." },
    ],
    faq: TECH_FAQS,
    content: CONTENT_METIER_IMMO,
  },
  {
    slug: "site-web-artisan-btp",
    silo: "metier",
    title: "Site Internet Artisan BTP",
    description: "Site web pour artisan, BTP, rénovation. Demande de devis en ligne, galerie réalisations.",
    hero: {
      title: "Solution Artisan BTP",
      subtitle: "Trouvez des chantiers",
      description: "Un site simple et efficace pour rassurer vos prospects et recevoir des demandes de devis qualifiées.",
      badge: "Devis Qualifiés 🏗️",
    },
    features: [
      { title: "Devis en Ligne", description: "Formulaire complet pour qualifier la demande avant le premier appel." },
      { title: "Portfolio Chantier", description: "Montrez la qualité de votre travail avec des galeries avant/après." },
      { title: "SEO Zone d'Intervention", description: "Visibilité sur vos villes de chantier, là où vos clients cherchent un artisan." },
      { title: "Galerie Mobile Optimisée", description: "Photos avant/après qui chargent vite même en 4G, consultées depuis le chantier." },
    ],
    process: [
      { title: "Audit Chantiers & Devis", description: "Analyse de vos réalisations existantes et de votre process actuel de devis." },
      { title: "Design Portfolio Avant/Après", description: "Maquettes centrées sur la preuve visuelle de la qualité de votre travail." },
      { title: "Développement Formulaire Qualifiant", description: "Intégration du formulaire de devis détaillé pour filtrer les demandes sérieuses." },
      { title: "Lancement & Référencement Local", description: "Mise en ligne et positionnement sur vos villes d'intervention." },
    ],
    faq: TECH_FAQS,
    content: CONTENT_METIER_BTP,
  },

  // ========================================
  // SANTÉ & BIEN-ÊTRE
  // ========================================
  {
    slug: "site-web-medecin",
    silo: "metier",
    title: "Site Internet Médecin",
    description: "Site web médical. Prise de RDV en ligne, formulaire de pré-consultation, présentation de l'équipe.",
    hero: {
      title: "Solution Médecin",
      subtitle: "Digitalisez votre cabinet",
      description: "Facilitez la prise de rendez-vous et réduisez les no-shows. Un site médical conforme RGPD et sécurisé.",
      badge: "RGPD Médical ⚕️",
    },
    features: [
      { title: "Agenda en Ligne", description: "Intégration Doctolib, Maiia ou système propriétaire de RDV." },
      { title: "Formulaire Sécurisé", description: "Pré-consultation RGPD pour gagner du temps en consultation." },
      { title: "SEO Santé Locale", description: "Visibilité sur 'médecin' ou 'spécialiste + quartier' pour les nouveaux patients." },
      { title: "Accessibilité Renforcée", description: "Contrastes et tailles de police adaptés à une patientèle senior (WCAG AAA)." },
    ],
    process: [
      { title: "Audit RGPD & Flux Patients", description: "Analyse de votre parcours de prise de RDV actuel et des exigences RGPD santé." },
      { title: "Design Rassurant & Accessible", description: "Maquettes sobres, conformes accessibilité, qui inspirent la confiance médicale." },
      { title: "Intégration Agenda & Pré-consultation", description: "Connexion Doctolib/Maiia et formulaire de pré-consultation sécurisé." },
      { title: "Lancement & Formation Secrétariat", description: "Mise en ligne et formation de l'équipe à la gestion des rappels automatiques." },
    ],
    faq: TECH_FAQS,
    content: CONTENT_METIER_SANTE,
  },
  {
    slug: "site-web-bien-etre",
    silo: "metier",
    title: "Site Bien-Être & Spa",
    description: "Site web spa, institut beauté, coach sportif. Réservation soins, forfaits, abonnements.",
    hero: {
      title: "Solution Bien-Être",
      subtitle: "Remplissez votre planning",
      description: "Mettez en avant vos soins avec un site zen et élégant. Réservation soins et vente de forfaits en ligne.",
      badge: "Zen & Rentable 🧘",
    },
    features: [
      { title: "Résa Soins", description: "Système de réservation par créneaux et durée de soin." },
      { title: "Vente Forfaits", description: "Vendez vos abonnements et cartes cadeaux en ligne." },
      { title: "SEO Beauté & Bien-être", description: "Positionnement sur 'massage' ou 'soin + ville' pour capter la recherche locale." },
      { title: "Galerie Ambiance Mobile", description: "Immersion dans l'univers de votre institut dès le smartphone." },
    ],
    process: [
      { title: "Audit Planning & Créneaux", description: "Analyse de vos horaires de forte et faible affluence pour cibler les priorités." },
      { title: "Design Ambiance Zen", description: "Maquettes qui reflètent l'univers et la sérénité de votre institut." },
      { title: "Intégration Résa & Forfaits", description: "Connexion réservation de soins et vente de cartes cadeaux/abonnements en ligne." },
      { title: "Lancement & Shooting Galerie", description: "Mise en ligne accompagnée d'une séance photo de vos espaces." },
    ],
    faq: TECH_FAQS,
    content: CONTENT_METIER_BIEN_ETRE,
  },

  // ========================================
  // JURIDIQUE & CONSEIL
  // ========================================
  {
    slug: "site-web-avocat",
    silo: "metier",
    title: "Site Internet Avocat",
    description: "Site web avocat, cabinet juridique. Présentation expertises, formulaire confidentiel, blog juridique.",
    hero: {
      title: "Solution Avocat",
      subtitle: "Attirez des clients qualifiés",
      description: "Démontrez votre expertise juridique. Un site professionnel qui inspire confiance et génère des consultations.",
      badge: "Confidentiel & Sécurisé ⚖️",
    },
    features: [
      { title: "Blog Juridique", description: "Positionnez-vous en expert avec des articles SEO." },
      { title: "Contact Sécurisé", description: "Formulaire chiffré pour la confidentialité des échanges." },
      { title: "SEO par Spécialité", description: "Une page positionnée par domaine de droit (Pénal, Famille, Commercial...)." },
      { title: "Consultation Confidentielle Mobile", description: "Formulaire chiffré accessible et rassurant, même depuis un smartphone." },
    ],
    process: [
      { title: "Audit Positionnement Expertise", description: "Analyse de vos domaines de droit et de la concurrence au barreau local." },
      { title: "Design Sobre & Autorité", description: "Maquettes qui inspirent confiance et reflètent votre sérieux professionnel." },
      { title: "Rédaction Silo Expertises & Blog", description: "Création des pages par domaine de droit et des premiers articles juridiques." },
      { title: "Lancement & Suivi Leads Qualifiés", description: "Mise en ligne et suivi des demandes de consultation générées." },
    ],
    faq: TECH_FAQS,
    content: CONTENT_METIER_JURIDIQUE,
  },

  // ========================================
  // FORMATION & COACHING
  // ========================================
  {
    slug: "site-web-formation",
    silo: "metier",
    title: "Site Organisme de Formation",
    description: "Site web centre de formation. Catalogue cours, inscription en ligne, plateforme e-learning.",
    hero: {
      title: "Solution Formation",
      subtitle: "Vendez vos formations",
      description: "Catalogue de cours attractif, paiement en ligne et espace membre pour vos apprenants.",
      badge: "E-Learning Pro 🎓",
    },
    features: [
      { title: "LMS Intégré", description: "Plateforme d'apprentissage en ligne avec vidéos et quizz." },
      { title: "Paiement Formations", description: "Vente et paiement sécurisé de vos parcours de formation." },
      { title: "SEO Catalogue Formations", description: "Visibilité sur vos intitulés de formation et votre ville d'implantation." },
      { title: "Inscription Mobile Fluide", description: "Paiement et inscription en quelques taps, sans friction, depuis un smartphone." },
    ],
    process: [
      { title: "Audit Catalogue & Financement", description: "Analyse de vos formations et des dispositifs de financement (CPF, OPCO)." },
      { title: "Design Catalogue Attractif", description: "Maquettes du catalogue filtrable par thème, durée et modalité." },
      { title: "Intégration LMS & Paiement", description: "Connexion de la plateforme d'apprentissage et du paiement CPF/CB." },
      { title: "Lancement & Formation Équipe", description: "Mise en ligne et formation de l'équipe pédagogique à la gestion des inscriptions." },
    ],
    faq: TECH_FAQS,
    content: CONTENT_METIER_FORMATION,
  },
];

// ============================================================
// City Combos for Metier Services (with localContext)
// ============================================================
import { COMBO_WHITELIST } from "../whitelist";
import { CITIES } from "./cities";
import { getSiloLocalContext } from "./silo-local-context";

// Generate city-specific variants for whitelisted metier services
const METIER_CITY_COMBOS: Service[] = [];

Object.entries(COMBO_WHITELIST).forEach(([serviceSlug, citySlugs]) => {
  const baseService = METIER_SERVICES.find(s => s.slug === serviceSlug);
  if (!baseService) return;

  citySlugs.forEach(citySlug => {
    const city = CITIES.find(c => c.slug === citySlug);
    if (!city) return;

    METIER_CITY_COMBOS.push({
      ...baseService,
      slug: `${serviceSlug}/${citySlug}`,
      title: `${baseService.title} ${city.name}`,
      description: `${baseService.description} Agence locale à ${city.name} (${city.zipCode}).`,
      hero: {
        ...baseService.hero,
        title: `${baseService.hero.title} ${city.name}`,
        description: `${baseService.hero.description} Expert local ${city.name}.`,
        badge: `${city.name} 🚀`,
      },
      localContext: { 
        city: city.name, 
        zipCode: city.zipCode,
        siloContext: getSiloLocalContext(city, "metier")
      },
    });
  });
});

// Export all metier services (base + city combos)
export const ALL_METIER_SERVICES = [...METIER_SERVICES, ...METIER_CITY_COMBOS];
