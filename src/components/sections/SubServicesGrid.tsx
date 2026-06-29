"use client";

import { Link } from "next-view-transitions";
import { ArrowRight, Globe, ShoppingCart, RefreshCw, Settings, Utensils, Building2, Hammer, Briefcase } from "lucide-react";
import { Service } from "@/lib/data/types";

interface SubServicesGridProps {
  services: Service[];
  title?: string;
}

const SILO_ROUTES: Record<string, string> = {
  local: "creation-site-internet",
  web: "creation-site-internet",
  metier: "solutions",
  seo: "referencement-seo",
  agence: "agence-communication",
  service: "creation-site-internet",
};

// Icons mapping for services
const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "site-vitrine": Globe,
  "site-ecommerce": ShoppingCart,
  "refonte-site-web": RefreshCw,
  "maintenance-web": Settings,
  "site-web-restaurant": Utensils,
  "site-web-hotel": Building2,
  "site-web-artisan-btp": Hammer,
  "site-web-immobilier": Building2,
};

export function SubServicesGrid({ services, title = "Nos Solutions" }: SubServicesGridProps) {
  if (!services || services.length === 0) return null;

  const getServicePath = (service: Service) => {
    let finalPath = '#';

    // 1. Explicit href overrides everything
    if ('href' in service && service.href) {
      finalPath = service.href;
    } else {
      // 2. Resolve Base Path from Silo
      const basePath = SILO_ROUTES[service.silo];
      
      if (!basePath) {
        // Fallback: use service.slug if it looks like a path
        if (service.slug.startsWith('/')) {
          finalPath = service.slug;
        } else {
          // Fallback logic
          finalPath = '#';
        }
      } else {
        // 3. Construct Path
        const slugLeaf = service.slug.split('/').pop();
        if (slugLeaf && slugLeaf !== 'undefined') {
          finalPath = `/${basePath}/${slugLeaf}`;
        }
      }
    }

    // S-Tier Defense: Absolute Guard against "undefined" in URL
    // This catches any upstream data issues or string concatenation errors
    if (finalPath.includes('undefined')) {
      if (process.env.NODE_ENV === 'development') {
        console.error(`[SubServicesGrid] Prevented invalid URL generation for: ${service.slug}`, finalPath);
      }
      return '#';
    }

    return finalPath;
  };

  const getIcon = (slug: string) => {
    return SERVICE_ICONS[slug] || Briefcase;
  };

  return (
    <section className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--ocean)_0%,transparent_70%)] opacity-5" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-in">
          <span className="text-ocean text-sm font-semibold uppercase tracking-wider">
            Explorez
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez l&apos;ensemble de nos expertises dédiées à votre réussite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.slug);
            
            return (
              <div
                key={service.slug}
                className={`group relative animate-in ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : index === 4 ? "delay-400" : index === 5 ? "delay-500" : ""}`}
              >
                <Link
                  href={getServicePath(service)}
                  className="block h-full relative"
                >
                  {/* Card Background with Gradient Border Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-ocean/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Main Card */}
                  <div className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border group-hover:border-ocean/30 transition-all duration-300 group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]">
                    
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-ocean/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon Container */}
                    <div className="relative w-14 h-14 mb-6">
                      <div className="absolute inset-0 bg-ocean/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-full h-full flex items-center justify-center bg-foreground/5 border border-border rounded-xl group-hover:bg-ocean/10 group-hover:border-ocean/30 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-ocean transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-ocean transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-ocean/70 group-hover:text-ocean transition-all duration-300">
                      <span className="relative">
                        Découvrir
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
