import { 
  Globe, 
  ShoppingCart, 
  Search, 
  Palette, 
  Megaphone, 
  Code, 
  Smartphone, 
  BarChart3, 
  Zap,
  type LucideIcon 
} from "lucide-react";

// ===========================
// SERVICES PAGE CONTENT
// ===========================

export interface MainServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  price: string;
  href: string;
}

export interface AdditionalServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export interface WorkProcessStep {
  step: string;
  title: string;
  description: string;
}

export const SERVICES_PAGE_CONTENT = {
  mainServices: [
    {
      id: "sites",
      icon: Globe,
      title: "Création de Sites Web A+",
      subtitle: "Sites vitrines & Landing Pages",
      description:
        "Création de site web Bayonne Anglet Biarritz : vitrine A+ (Core Web Vitals, SEO local) livrée en 2-3 semaines.",
      features: [
        "Score A+ mobile et desktop",
        "Design responsive sur-mesure",
        "SEO technique + schema local",
        "CMS modifiable (textes, médias)",
        "Hébergement premium + SSL",
        "Formulaire leads avec tracking",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "from-ocean to-accent",
      price: "À partir de 1 490€",
      href: "/creation-site-internet/site-vitrine",
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      title: "E-Commerce A+",
      subtitle: "Boutiques en ligne performantes",
      description:
        "Boutiques en ligne rapides qui convertissent les clients de Bayonne, Anglet et Biarritz.",
      features: [
        "Parcours d'achat optimisé",
        "Paiement sécurisé (CB, Stripe, PayPal)",
        "Catalogue illimité + variantes",
        "SEO e-commerce local Bayonne/Anglet/Biarritz",
        "Automations emails + relance panier",
        "Analytics conversion détaillée",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      color: "from-accent to-ocean-light",
      price: "À partir de 2 990€",
      href: "/creation-site-internet/site-ecommerce",
    },
    {
      id: "seo",
      icon: Search,
      title: "SEO local + IA",
      subtitle: "Visibilité Google",
      description:
        "Création de site web Bayonne Anglet Biarritz portée par du contenu IA relu humain et du netlinking local.",
      features: [
        "Audit technique et sémantique",
        "Rich snippets et schema",
        "Contenus IA relus humain",
        "Netlinking local et sectoriel",
        "Suivi positions + rapports",
        "Optimisation Core Web Vitals",
      ],
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1f9?w=600&h=400&fit=crop",
      color: "from-ocean-light to-ocean",
      price: "À partir de 490€/mois",
      href: "/referencement-seo",
    },
    {
      id: "branding",
      icon: Palette,
      title: "Identité Visuelle A+",
      subtitle: "Logos & Chartes graphiques",
      description:
        "Identité forte alignée à votre site A+ pour renforcer confiance et conversions locales.",
      features: [
        "Logo + système UI complet",
        "Charte graphique multi-supports",
        "Déclinaisons print et web",
        "Fichiers sources fournis",
        "Guide d'utilisation",
        "Révisions incluses",
      ],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      color: "from-sunset to-sand",
      price: "À partir de 790€",
      href: "/agence-communication/identite-visuelle",
    },
    {
      id: "communication",
      icon: Megaphone,
      title: "Communication 360°",
      subtitle: "Stratégie digitale complète",
      description:
        "Présence cohérente sur tous les canaux pour amplifier votre nouveau site A+ et convertir plus vite.",
      features: [
        "Stratégie réseaux sociaux",
        "Création de contenu",
        "Community management",
        "Publicité en ligne",
        "Email marketing",
        "Analyse et reporting",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      color: "from-sand to-sunset",
      price: "Sur devis",
      href: "/agence-communication",
    },
  ] as MainServiceItem[],

  additionalServices: [
    {
      icon: Code,
      title: "Développement Sur-Mesure",
      description: "Applications web complexes et fonctionnalités personnalisées",
      href: "/contact?subject=dev",
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description: "Apps iOS et Android natives ou hybrides",
      href: "/contact?subject=mobile",
    },
    {
      icon: BarChart3,
      title: "Analytics & Data",
      description: "Tableaux de bord et analyse de données",
      href: "/referencement-seo",
    },
    {
      icon: Zap,
      title: "Maintenance & Support",
      description: "Accompagnement technique continu",
      href: "/creation-site-internet/maintenance-web",
    },
  ] as AdditionalServiceItem[],

  workProcess: [
    {
      step: "01",
      title: "Découverte",
      description:
        "Nous analysons vos besoins, votre marché et vos objectifs lors d'un appel de 30 minutes.",
    },
    {
      step: "02",
      title: "Proposition",
      description:
        "Vous recevez un devis détaillé et une maquette de votre futur site sous 48h.",
    },
    {
      step: "03",
      title: "Création",
      description:
        "Notre équipe développe votre projet avec des points d'étape réguliers.",
    },
    {
      step: "04",
      title: "Lancement",
      description:
        "Mise en ligne, formation et suivi pour assurer votre succès.",
    },
  ] as WorkProcessStep[],
};
