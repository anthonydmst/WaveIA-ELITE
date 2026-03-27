import { NavLink, SocialLink, FooterSection } from "./types";

export const NAV_LINKS: NavLink[] = [
  { href: "/creation-site-internet", label: "Création Site", iconName: "Globe" },
  { href: "/referencement-seo", label: "Référencement SEO", iconName: "Search" },

  { href: "/agence-communication", label: "Communication", iconName: "Megaphone" },
  { href: "/realisations", label: "Projets", iconName: "FolderOpen" },
  { href: "/tarifs", label: "Tarifs", iconName: "CreditCard" },
];

export const MEGA_MENU_ITEMS = [
  {
    label: "Création Site",
    href: "/creation-site-internet",
    iconName: "Globe",
    description: "Sites web performants et design exclusif.",
    featured: { title: "Pôle Création Web", href: "/creation-site-internet", desc: "Expertise complète : Vitrine, E-commerce et Sur-mesure." },
    links: [
      { label: "Site Vitrine", href: "/creation-site-internet/site-vitrine" },
      { label: "Site E-commerce", href: "/creation-site-internet/site-ecommerce" },
      { label: "Refonte Site Web", href: "/creation-site-internet/refonte-site-web" },
      { label: "Maintenance Web", href: "/creation-site-internet/maintenance-web" },
    ],
    cities: [] as { label: string; href: string }[]
  },
  {
    label: "Référencement SEO",
    href: "/referencement-seo",
    iconName: "Search",
    description: "Dominez Google et attirez des clients.",
    featured: { title: "Pôle Référencement", href: "/referencement-seo", desc: "Expertise complète : Audit, SEO Local et Netlinking." },
    links: [
      { label: "Audit SEO", href: "/referencement-seo/audit-seo-gratuit" },
      { label: "SEO Local", href: "/referencement-seo/local" },
      { label: "Google My Business", href: "/referencement-seo/google-my-business" },
      { label: "Netlinking", href: "/referencement-seo/netlinking" },
    ],
    cities: [] as { label: string; href: string }[]
  },

  {
    label: "Communication",
    href: "/agence-communication",
    iconName: "Megaphone",
    description: "Image de marque et identité forte.",
    featured: { title: "Pôle Communication", href: "/agence-communication", desc: "Expertise complète : Identité, Photo et Vidéo." },
    links: [
      { label: "Identité Visuelle", href: "/agence-communication/identite-visuelle" },
      { label: "Réseaux Sociaux", href: "/agence-communication/reseaux-sociaux" },
      { label: "Shooting Photo", href: "/agence-communication/photographie" },
      { label: "Vidéo & Publicité", href: "/agence-communication/video" },
    ],
    cities: [] as { label: string; href: string }[]
  },
  {
    label: "L'Agence",
    href: "/a-propos",
    iconName: "Users",
    description: "Qui sommes-nous ?",
    featured: { title: "Waveia", href: "/a-propos", desc: "Notre mission : Rendre le web premium accessible à tous." },
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Nos Réalisations", href: "/realisations" },
      { label: "Contact", href: "/contact" },
    ],
    cities: [] as { label: string; href: string }[]
  },
  {
    label: "Tarifs & Offres",
    href: "/tarifs",
    iconName: "CreditCard",
    description: "Investissez dans votre croissance.",
    featured: { title: "Gardena (Transparence)", href: "/tarifs", desc: "Une approche honnête et directe. Pas de frais cachés, que de la performance." },
    links: [
      { label: "Création Site", href: "/tarifs/creation-site-internet" },
      { label: "Référencement SEO (Audit Gratuit)", href: "/tarifs/referencement-seo" },
      { label: "Agence Communication", href: "/tarifs/agence-communication" },
      { label: "Calculer mon devis", href: "/simulateur-devis" },
    ],
    cities: [] as { label: string; href: string }[]
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://twitter.com/waveia", label: "Twitter", icon: "Twitter" },
  { href: "https://linkedin.com/company/waveia", label: "LinkedIn", icon: "Linkedin" },
  { href: "https://instagram.com/waveia", label: "Instagram", icon: "Instagram" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Services",
    href: "/creation-site-internet",
    links: [
      { label: "Site Vitrine", href: "/creation-site-internet/site-vitrine" },
      { label: "E-commerce", href: "/creation-site-internet/site-ecommerce" },
      { label: "Refonte Web", href: "/creation-site-internet/refonte-site-web" },
      { label: "SEO", href: "/referencement-seo" },
    ],
  },
  {
    title: "Agence",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Témoignages", href: "/temoignages" },
      { label: "Tarifs", href: "/tarifs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions Métiers",
    href: "/solutions",
    links: [
      { label: "Restaurant", href: "/solutions/site-web-restaurant" },
      { label: "Hôtellerie", href: "/solutions/site-web-hotel" },
      { label: "Immobilier", href: "/solutions/site-web-immobilier" },
      { label: "Artisan BTP", href: "/solutions/site-web-artisan-btp" },
    ],
  },
  {
    title: "Zones d'intervention",
    href: "/creation-site-internet",
    links: [
      { label: "Agence Web Bayonne", href: "/creation-site-internet/bayonne" },
      { label: "Agence Web Biarritz", href: "/creation-site-internet/biarritz" },
      { label: "Agence Web Anglet", href: "/creation-site-internet/anglet" },
      { label: "Agence Web Hossegor", href: "/creation-site-internet/hossegor" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/legal" },
      { label: "Confidentialité", href: "/privacy" },
      { label: "CGV", href: "/cgv" },
    ],
  },
];
