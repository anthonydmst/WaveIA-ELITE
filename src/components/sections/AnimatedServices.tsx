"use client";

import { Link } from "next-view-transitions";
import { 
  Globe, 
  Search, 
  Palette, 
  ArrowRight,
  ExternalLink,
  Building2
} from "lucide-react";
import { SERVICES } from "@/lib/data/services";

// Homepage Featured Services (curated selection)
// Strategy: 3 Hubs + 1 Silo Métier + 2 Services Ciblés = 6 total
const HOMEPAGE_SERVICE_SLUGS = [
  "creation-site-internet",     // Hub Web
  "referencement-seo",           // Hub SEO  
  "agence-communication",        // Hub Com
  "solutions",                   // Silo Métier
  "audit-seo-gratuit",           // Service Ciblé (Lead Magnet)
  "refonte-site-web",            // Service Ciblé (Besoin Récurrent)
];

// Icon mapping for services
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "creation-site-internet": Globe,
  "referencement-seo": Search,
  "agence-communication": Palette,
  "solutions": Building2,
  "audit-seo-gratuit": Search,
  "refonte-site-web": Globe,
};

// Get featured services with fallback to hardcoded if slug not found
const featuredServices = HOMEPAGE_SERVICE_SLUGS.map(slug => {
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return null;
  
  return {
    icon: iconMap[slug] || Building2,
    title: service.title,
    description: service.description,
    href: service.type === "hub" 
      ? `/${service.slug}` 
      : `/${service.silo === 'web' || service.silo === 'local' ? 'creation-site-internet' : service.silo === 'seo' ? 'referencement-seo' : service.silo === 'agence' ? 'agence-communication' : 'solutions'}/${service.slug}`,
    color: slug.includes('web') || slug.includes('creation') || slug.includes('refonte') ? "from-ocean to-accent" :
           slug.includes('seo') || slug.includes('audit') ? "from-ocean-light to-ocean" :
           slug.includes('communication') || slug.includes('agence') ? "from-sunset to-sand" :
           slug.includes('solutions') ? "from-accent to-ocean-light" :
           "from-ocean to-accent",
    tag: slug === "audit-seo-gratuit" ? "Gratuit" : 
         slug === "refonte-site-web" ? "Upgrade" :
         slug === "solutions" ? "Sur-Mesure" : undefined
  };
}).filter((s): s is NonNullable<typeof s> => s !== null);

export function AnimatedServices() {
  return (
    <section id="expertises" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Waveia Services Section */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--ocean)_0%,transparent_70%)] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            Nos expertises
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Des services complets pour<br className="hidden sm:block" />
            <span className="font-heading italic text-ocean-text">votre réussite digitale</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className={`group relative animate-in ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : index === 4 ? "delay-400" : index === 5 ? "delay-500" : ""}`}
              style={{ willChange: "transform", backfaceVisibility: "hidden" }}
            >
              <Link href={service.href} className="block h-full">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl blur-md`} />
                
                {/* Main Card */}
                <div className="relative h-full p-8 bg-glass-bg backdrop-blur-sm rounded-2xl border border-glass-border overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:translate-y-[-8px] shadow-card group-hover:shadow-card-hover">
                  
                  {/* Tag */}
                  {service.tag && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-ocean/20 border border-ocean/30 rounded-full">
                      <span className="text-xs font-bold text-ocean">{service.tag}</span>
                    </div>
                  )}
                  
                  {/* Glow Effect */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="relative w-16 h-16 mb-6">
                      <div className={`absolute inset-0 bg-linear-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className={`relative w-full h-full flex items-center justify-center bg-linear-to-br ${service.color} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <service.icon className="w-8 h-8 text-background" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-ocean transition-colors duration-300">{service.title}</h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-ocean/70 group-hover:text-ocean transition-all duration-300">
                      <span className="relative">
                        En savoir plus
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                      </span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-in delay-400">
          <Link
            href="/creation-site-internet"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-glass-bg hover:bg-glass-bg-hover border border-glass-border hover:border-ocean/30 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_var(--glass-glow)]"
          >
            <span>Découvrir tous nos services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
