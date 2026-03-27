import { 
  PRICING_WEB, 
  PRICING_SEO, 
  PRICING_COM,
} from "./pricing";

export type SimulatorStepType = "objective" | "project_type" | "options" | "budget_range" | "contact";

export interface SimulatorOption {
  id: string;
  label: string;
  description?: string;
  price: number;
  icon?: string;
  recommended?: boolean;
}

export interface SimulatorStep {
  id: string;
  type: SimulatorStepType;
  title: string;
  subtitle: string;
  options: SimulatorOption[];
  multiSelect?: boolean;
}

// Helper to clean price string (e.g. "790") to number (790)
const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^0-9]/g, "")) || 0;

export const SIMULATOR_STEPS: SimulatorStep[] = [
  {
    id: "objective",
    type: "objective",
    title: "Quel est votre objectif principal ?",
    subtitle: "Aidez-nous à comprendre vos besoins pour vous proposer la solution idéale.",
    options: [
      { id: "launch", label: "Lancer mon activité", description: "Je pars de zéro, tout est à faire.", price: 0, icon: "Rocket" },
      { id: "growth", label: "Accélérer ma croissance", description: "J'ai déjà une base, je veux passer un cap.", price: 0, icon: "TrendingUp" },
      { id: "refresh", label: "Moderniser mon image", description: "Mon site/marque a besoin d'un coup de jeune.", price: 0, icon: "Brush" },
    ],
    multiSelect: false,
  },
  {
    id: "project_type",
    type: "project_type",
    title: "De quoi avez-vous besoin en priorité ?",
    subtitle: "Sélectionnez le socle de votre projet.",
    options: [
      { 
        id: "web_vitrine", 
        label: "Site Vitrine", 
        description: "Présenter mon activité et rassurer mes prospects.", 
        price: parsePrice(PRICING_WEB[1]?.price ?? "990"), // Mondarrain
        icon: "Layout",
        recommended: true
      },
      { 
        id: "web_ecommerce", 
        label: "Site E-Commerce", 
        description: "Vendre mes produits en ligne 24/7.", 
        price: parsePrice(PRICING_WEB[2]?.price ?? "1990"), // Rhune
        icon: "ShoppingBag" 
      },
      { 
        id: "seo_boost", 
        label: "Campagne SEO", 
        description: "Être visible sur Google et attirer du trafic.", 
        price: parsePrice(PRICING_SEO[1]?.price ?? "690"), // Accélération
        icon: "Search" 
      },
      { 
        id: "identity", 
        label: "Identité de Marque", 
        description: "Logo, charte graphique et supports.", 
        price: parsePrice(PRICING_COM[0]?.price ?? "490"), // Identité
        icon: "Palette" 
      },
    ],
    multiSelect: false,
  },
  {
    id: "options",
    type: "options",
    title: "On ajoute des boosters ?",
    subtitle: "Sélectionnez les options pour maximiser votre impact.",
    options: [
      { 
        id: "maintenance", 
        label: "Maintenance Sérénité", 
        description: "On gère la technique, vous gérez le business.", 
        price: 99, // Maintenance Sérénité
        icon: "ShieldCheck" 
      },
      { 
        id: "seo_local", 
        label: "Dominance Locale", 
        description: "Soyez le n°1 sur votre ville (Google Maps).", 
        price: 390, // Domination Locale
        icon: "MapPin" 
      },
      { 
        id: "content", 
        label: "Pack Contenu", 
        description: "Rédaction de vos pages par nos experts.", 
        price: 500, // Content Growth
        icon: "PenTool" 
      },
      { 
        id: "audit", 
        label: "Audit Approfondi", 
        description: "Analyse complète technique et sémantique.", 
        price: 490, // Audit 360
        icon: "FileSearch" 
      },
    ],
    multiSelect: true,
  },
];
