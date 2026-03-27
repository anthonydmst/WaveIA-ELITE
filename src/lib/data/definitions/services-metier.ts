import { Service } from "../types";
import { PROCESS_WAVE_PREMIUM, FEATURES_TECH_PREMIUM } from "./premium-defaults";
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
      ...FEATURES_TECH_PREMIUM.slice(2)
    ],
    process: PROCESS_WAVE_PREMIUM,
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
      ...FEATURES_TECH_PREMIUM.slice(2)
    ],
    process: PROCESS_WAVE_PREMIUM,
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
      ...FEATURES_TECH_PREMIUM.slice(2)
    ],
    process: PROCESS_WAVE_PREMIUM,
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
      ...FEATURES_TECH_PREMIUM.slice(2)
    ],
    process: PROCESS_WAVE_PREMIUM,
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
      ...FEATURES_TECH_PREMIUM.slice(2)
    ],
    process: PROCESS_WAVE_PREMIUM,
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
      ...FEATURES_TECH_PREMIUM.slice(2)
    ],
    process: PROCESS_WAVE_PREMIUM,
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
      ...FEATURES_TECH_PREMIUM.slice(2)
    ],
    process: PROCESS_WAVE_PREMIUM,
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
      ...FEATURES_TECH_PREMIUM.slice(2)
    ],
    process: PROCESS_WAVE_PREMIUM,
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
