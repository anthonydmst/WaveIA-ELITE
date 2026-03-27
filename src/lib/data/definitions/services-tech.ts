import { Service } from "../types";
import { PROCESS_WAVE_PREMIUM, FEATURES_TECH_PREMIUM } from "./premium-defaults";
import { TECH_FAQS } from "./specific-faqs";
import { CONTENT_SITE_VITRINE, CONTENT_ECOMMERCE } from "./content-library";
import { CONTENT_REFONTE, CONTENT_MAINTENANCE } from "./content-tech";

// Services techniques du silo "web" - sous /creation-site-internet/[slug]
export const TECH_SERVICES: Service[] = [
  {
    slug: "site-vitrine",
    silo: "web",
    title: "Création Site Vitrine",
    description: "Site vitrine professionnel pour artisans et libéraux. Design sur-mesure et SEO performant.",
    hero: {
      title: "Site Vitrine Premium",
      subtitle: "Présentez votre activité",
      description: "Un site web élégant et efficace pour convertir vos visiteurs en clients.",
      badge: "Google PageSpeed 99/100 ⚡",
    },
    features: FEATURES_TECH_PREMIUM,
    process: PROCESS_WAVE_PREMIUM,
    faq: TECH_FAQS,
    content: CONTENT_SITE_VITRINE,
  },
  {
    slug: "site-ecommerce",
    silo: "web",
    title: "Création Site E-commerce",
    description: "Boutique en ligne performante (Shopify/WooCommerce). Vendez vos produits 24/7.",
    hero: {
      title: "Votre Boutique en Ligne",
      subtitle: "E-commerce Performance",
      description: "Des tunnels de vente optimisés pour maximiser votre chiffre d'affaires.",
      badge: "Conversion Optimisée 🚀",
    },
    features: [
      { title: "Paiement Sécurisé", description: "Intégration Stripe/Paypal sans faille et processus de checkout optimisé." },
      { title: "Conversion Max", description: "Design pensé pour vendre : paniers abandonnés, upsells et cross-sells." },
      ...FEATURES_TECH_PREMIUM.slice(2)
    ],
    process: PROCESS_WAVE_PREMIUM,
    faq: TECH_FAQS,
    content: CONTENT_ECOMMERCE,
  },
  {
    slug: "refonte-site-web",
    silo: "web",
    title: "Refonte de Site Web",
    description: "Modernisez votre site web existant. Améliorez le design, la vitesse et le taux de conversion.",
    hero: {
      title: "Refonte & Modernisation",
      subtitle: "Donnez un coup de jeune",
      description: "Transformez votre site vieillissant en une machine de guerre marketing.",
      badge: "Audit Avant/Après Offert 📊",
    },
    features: FEATURES_TECH_PREMIUM,
    process: PROCESS_WAVE_PREMIUM,
    faq: TECH_FAQS,
    content: CONTENT_REFONTE,
  },
  {
    slug: "maintenance-web",
    silo: "web",
    title: "Maintenance & Sécurité",
    description: "Contrat de maintenance web. Mises à jour, sauvegardes et sécurité pour votre tranquillité.",
    hero: {
      title: "Maintenance & Support",
      subtitle: "Dormez tranquille",
      description: "Nous veillons sur votre site. Mises à jour, sécurité et sauvegardes quotidiennes.",
      badge: "Support 7j/7 - Réponse < 4h 🛡️",
    },
    features: [
      { title: "Sécurité Maximale", description: "Pare-feu applicatif, protection DDoS et veille active des vulnérabilités." },
      { title: "Support Réactif", description: "Une équipe technique à votre disposition sous 4h pour toute urgence." },
      { title: "Sauvegardes J+1", description: "Backup complet quotidien sur serveur externe sécurisé." },
      { title: "Performance Monitor", description: "Surveillance temps réel de la vitesse et de la disponibilité." },
    ],
    process: [
        { title: "Audit de Sécurité", description: "Scan complet des failles et mise à jour immédiate des composants critiques." },
        { title: "Mise en Place", description: "Installation des sondes de monitoring et configuration des backups automatiques." },
        { title: "Veille Mensuelle", description: "Rapport mensuel détaillé : interventions, mises à jour et état de santé." },
        { title: "Intervention", description: "En cas de pépin, nous intervenons immédiatement sans surcoût." }
    ],
    faq: TECH_FAQS,
    content: CONTENT_MAINTENANCE,
  },
];
