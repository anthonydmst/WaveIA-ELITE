import { Service } from "../types";
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
    features: [
      { title: "Conversion Prioritaire", description: "Chaque page est pensée pour transformer un visiteur en prospect, pas juste pour être belle." },
      { title: "Copywriting Sur-Mesure", description: "Des textes qui parlent à vos clients, pas du remplissage générique." },
      { title: "Structure SEO Dès le Départ", description: "Arborescence et balises pensées pour Google dès la conception, pas en rustine." },
      { title: "Livraison en 2-3 Semaines", description: "Une mise en ligne rapide pour ne pas retarder le lancement de votre activité." },
    ],
    process: [
      { title: "Découverte & Arborescence (Semaine 1)", description: "Cahier des charges et structure des pages définis avec vous." },
      { title: "Maquettes Haute-Fidélité (Semaine 2)", description: "Design Figma validé avant tout développement." },
      { title: "Développement & Contenu (Semaine 3)", description: "Intégration Next.js et rédaction des textes définitifs." },
      { title: "Mise en Ligne & Formation", description: "Déploiement, indexation Google et prise en main du back-office." },
    ],
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
      { title: "Catalogue Sans Limite", description: "Gestion autonome de vos produits, variantes et stocks depuis un back-office simple." },
      { title: "SEO Fiches Produits", description: "Chaque fiche produit est optimisée pour ressortir sur les recherches précises de vos clients." },
    ],
    process: [
      { title: "Audit Catalogue & Concurrence", description: "Analyse de vos produits, de votre tunnel d'achat actuel et de la concurrence." },
      { title: "Design Tunnel de Conversion", description: "Maquettes du parcours d'achat, du produit jusqu'au paiement." },
      { title: "Développement & Intégration Paiement", description: "Boutique Next.js connectée à Stripe/Paypal et à vos stocks." },
      { title: "Lancement & Tests d'Achat", description: "Mise en ligne après des tests de commande réels de bout en bout." },
    ],
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
    features: [
      { title: "Audit de l'Existant", description: "Identification de ce qui fonctionne et de ce qui freine votre conversion aujourd'hui." },
      { title: "Migration Sans Perte SEO", description: "Redirections 301 et conservation de votre historique de positions Google." },
      { title: "Design Modernisé", description: "Un nouveau visuel sans repartir de zéro sur votre identité existante." },
      { title: "Bascule Zéro Downtime", description: "Mise en production sans interruption de votre activité." },
    ],
    process: [
      { title: "Audit Complet (Semaine 1)", description: "Analyse technique, SEO et UX de votre site actuel." },
      { title: "Plan de Migration", description: "Cartographie des redirections et des contenus à conserver." },
      { title: "Refonte Design & Dev", description: "Nouvelle maquette et développement Next.js du site modernisé." },
      { title: "Bascule & Vérification SEO", description: "Mise en ligne et contrôle du maintien de vos positions Google." },
    ],
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
