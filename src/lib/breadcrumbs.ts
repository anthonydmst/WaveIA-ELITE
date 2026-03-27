export interface BreadcrumbItem {
  label: string;
  href: string;
}

const ROUTE_LABELS: Record<string, string> = {
  services: "Nos Services",
  realisations: "Réalisations",
  temoignages: "Témoignages",
  tarifs: "Tarifs & Offres",
  "simulateur-devis": "Simulateur de Devis",
  "a-propos": "À Propos",
  contact: "Contact",
  legal: "Mentions Légales",
  privacy: "Confidentialité",
  cgv: "CGV",
  "mentions-legales": "Mentions Légales",
  confidentialite: "Confidentialité",
  // Silo Routes
  "creation-site-internet": "Création Site Internet",
  solutions: "Solutions Métiers",
  "referencement-seo": "Expertise SEO",
  "agence-communication": "Agence Communication",
  bayonne: "Bayonne", // Optional: Common cities can be labeled
  biarritz: "Biarritz",
};

/**
 * Generates breadcrumb items from a pathname.
 * @param pathname - The current path (e.g., /services/creation-site-web)
 * @returns Array of BreadcrumbItem
 */
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  // Remove query params and trailing slash
  const cleanPath = (pathname.split("?")[0] ?? pathname).replace(/\/$/, "");
  
  if (!cleanPath || cleanPath === "/") {
    return [];
  }

  const segments = cleanPath.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [];

  // Add Home
  items.push({ label: "Accueil", href: "/" });

  let currentPath = "";

  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    
    // Check if we have a predefined label, otherwise format the slug
    let label = ROUTE_LABELS[segment];
    
    if (!label) {
      // Fallback: capitalize and replace dashes
      label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    items.push({
      label,
      href: currentPath,
    });
  });

  return items;
}
