"use client";

import { Link } from "next-view-transitions";
import { ArrowRight, MapPin, Navigation } from "lucide-react";
import { CITIES } from "@/lib/data/definitions/cities";
import { ServiceSilo } from "@/lib/data/types";
import { POWER_5_CITIES } from "@/lib/data/whitelist";

interface ServiceZoneLinksProps {
  silo: ServiceSilo;
  serviceSlug: string;
  currentCity?: string; 
  mode?: "hub" | "sibling"; // "hub" links to /silo/[city], "sibling" links to /silo/[service]/[city]
}

export function ServiceZoneLinks({ silo, serviceSlug, currentCity, mode = "hub" }: ServiceZoneLinksProps) {
  // S-Tier Defense: Metier Silo (Solutions) does NOT have generic city pages.
  // We disable this component entirely for metier in hub mode to prevent ghost links like /solutions/bayonne
  if (silo === "metier" && mode === "hub") return null;

  // PLAN:
  // 1. If currentCity provided -> Find that city -> Get its "nearbyAreas"
  // 2. Filter CITIES to match those names
  // 3. Fallback to top cities if no currentCity or no matches
  
  // FILTER: Only show cities that are whitelisted (POWER_5) to avoid 404s
  const validCities = CITIES.filter(c => POWER_5_CITIES.includes(c.slug));

  let displayCities = validCities.slice(0, 12); // Default fallback
  let title = "Intervention Locale";
  let Icon = MapPin;

  if (currentCity) {
    const cityData = CITIES.find(c => c.name === currentCity || c.slug === currentCity);
    if (cityData && cityData.localSEO?.nearbyAreas) {
      // Filter VALID CITIES that are mentioned in nearbyAreas
      const nearby = validCities.filter(c => 
        cityData.localSEO!.nearbyAreas.some(area => 
          c.name.includes(area) || area.includes(c.name)
        )
      );
      
      if (nearby.length > 0) {
        displayCities = nearby;
        title = mode === "sibling" ? `Autres villes pour ce service` : `À proximité de ${currentCity}`;
        Icon = Navigation;
      }
    }
  }

  // Helper to reconstruct URL based on Silo
  const getUrl = (citySlug: string) => {
    const root = 
      silo === "local" || silo === "web" || silo === "service" ? "creation-site-internet" : 
      silo === "seo" ? "referencement-seo" : 
      silo === "agence" ? "agence-communication" :
      silo === "metier" ? "solutions" :
      "creation-site-internet";
      
    if (mode === "sibling") {
        return `/${root}/${serviceSlug}/${citySlug}`;
    }
    return `/${root}/${citySlug}`;
  };

  return (
    <section className="relative z-20 py-8 bg-card/50 border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-ocean/10 flex items-center justify-center border border-ocean/20 animate-pulse">
              <Icon className="w-4 h-4 text-ocean" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest whitespace-nowrap">
              {title}
            </span>
          </div>

          <div className="h-8 w-px bg-foreground/10 hidden md:block" />

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {displayCities.map((city) => (
              <Link
                key={city.slug}
                href={getUrl(city.slug)}
                className="group relative px-3 py-1.5 rounded-full border border-border bg-foreground/5 hover:bg-ocean/10 hover:border-ocean/30 transition-all duration-300"
                title={`Agence Web ${city.name}`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-ocean transition-colors">
                    {city.name}
                  </span>
                  <ArrowRight className="w-2.5 h-2.5 text-ocean/50 -rotate-45 group-hover:rotate-0 group-hover:text-ocean transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
