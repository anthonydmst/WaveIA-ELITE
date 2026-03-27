"use client";


import { MapPin, Building2, History, Users, CheckCircle2 } from "lucide-react";
import NextImage from "next/image";
import { City } from "@/lib/data/types";

interface Props {
  city: City;
  silo?: string; // Grade A++++ : Adapt title based on silo
}

/**
 * Grade A++++ Enhanced Local Context
 * Shows factual city data (history, stats, zones) with silo-adapted title
 * Complementary to TerritorialContext (expertise/trust signals)
 */
export function LocalContextSection({ city, silo = "service" }: Props) {
  if (!city.localSEO) return null;

  const { localSEO } = city;
  
  // Grade A++++ : Dynamic title based on silo (avoid duplicate)
  const getSiloTitle = (): string => {
    switch (silo) {
      case "web":
      case "service":
      case "local":
        return `Création site internet à ${city.name}`;
      case "seo":
        return `Référencement SEO local à ${city.name}`;
      case "agence":
        return `Agence communication à ${city.name}`;
      case "metier":
        return `Solutions métier à ${city.name}`;
      default:
        return `Services digitaux à ${city.name}`;
    }
  };

  // Grade A+ Visuals: Curated Unsplash Images + Custom Generated AI Visuals
  const CITY_IMAGES: Record<string, string> = {
    "bayonne": "/images/cities/bayonne.webp",
    "biarritz": "/images/cities/biarritz.webp",
    "anglet": "/images/cities/anglet.webp",
    "saint-jean-de-luz": "/images/cities/saint-jean-de-luz.jpg",
    "hossegor": "/images/cities/hossegor.jpg",
    "hendaye": "/images/cities/hendaye.jpg",
    "guethary": "/images/cities/guethary.jpg",
    "capbreton": "/images/cities/capbreton.jpg",
    "dax": "/images/cities/dax.jpg",
    "cambo-les-bains": "/images/cities/cambo-les-bains.jpg",
    "espelette": "/images/cities/espelette.jpg",
  };

  const cityImage = CITY_IMAGES[city.slug] || "https://images.unsplash.com/photo-1497366216548-37526070297c"; // Default Office High Quality

  return (
    <div className="flex flex-col gap-20 py-12">
      
      {/* 1. CITY IDENTITY & HISTORY - VISUAL REDESIGN */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="relative z-10 animate-in-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-xs font-bold mb-6">
              <MapPin className="w-3 h-3" />
              {city.name.toUpperCase()} ({city.zipCode})
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">
              {getSiloTitle()}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-ocean/30 pl-6">
              {localSEO.identity}
            </p>

            <div className="space-y-6">
                <div className="p-6 bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-ocean/20 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3 text-ocean">
                        <History className="w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-wider">Un peu d&apos;histoire</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {localSEO.history}
                    </p>
                </div>
                
                <div className="p-6 bg-card/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-ocean/20 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3 text-white">
                        <Building2 className="w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-wider">Contexte Économique</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {localSEO.economicContext}
                    </p>
                </div>
            </div>
          </div>

          {/* Right Visual & Stats */}
          <div className="relative animate-scale-in">
            {/* Main Image Container */}
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                {/* Fallback pattern or Real Image */}
                 <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-black overflow-hidden select-none">
                    {/* Dynamic City Image with Premium Filters */}
                    <NextImage 
                        src={cityImage}
                        alt={`Paysage de ${city.name}`}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={true}
                    />
                    <div className="absolute inset-0 bg-ocean/20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-transparent to-transparent" />
                 </div>
                 
                 {/* Floating Stats Overlay - Glassmorphism */}
                 <div className="absolute inset-x-6 bottom-6 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                     <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
                        {localSEO.localStats.businesses && (
                            <div className="px-2">
                                <div className="text-2xl font-bold text-white mb-1">{localSEO.localStats.businesses.split(" ")[0]}</div>
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Entreprises</div>
                            </div>
                        )}
                        {localSEO.localStats.digitalNeed && (
                            <div className="px-2">
                                <div className="text-2xl font-bold text-ocean mb-1">{localSEO.localStats.digitalNeed.split(" ")[0]}</div>
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Digitalisation</div>
                            </div>
                        )}
                        {localSEO.localStats.opportunity && (
                             <div className="px-2">
                                <div className="text-2xl font-bold text-emerald-400 mb-1">+</div>
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Croissance</div>
                            </div>
                        )}
                     </div>
                 </div>
            </div>
            
            {/* Decor Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-ocean/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
          </div>

        </div>
      </section>

      {/* 2. ZONES D'INTERVENTION */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-12 animate-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-xs font-bold mb-4">
            <MapPin className="w-3 h-3" />
            ZONES D&apos;INTERVENTION
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold">
            Nous intervenons dans tout {city.name}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quartiers */}
          <div className="p-8 bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl animate-in-left">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-ocean rounded-full" />
              Quartiers de {city.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {localSEO.zones.map((zone, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-muted-foreground hover:border-ocean/30 hover:text-ocean transition-colors cursor-default"
                >
                  📍 {zone}
                </span>
              ))}
            </div>
          </div>

          {/* Villes proches */}
          <div className="p-8 bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl animate-in-right">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Communes alentour
            </h4>
            <div className="flex flex-wrap gap-2">
              {localSEO.nearbyAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-muted-foreground hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                >
                  🗺️ {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. POURQUOI NOUS À [CITY] */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="bg-linear-to-br from-gray-900 to-gray-950 border border-white/5 rounded-3xl p-8 lg:p-12 overflow-hidden relative animate-in">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ocean/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-ocean" />
              <h3 className="font-heading text-2xl font-bold">
                Pourquoi nous choisir à {city.name} ?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {localSEO.localUSPs.map((usp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 animate-in"
                >
                  <div className="w-6 h-6 rounded-full bg-ocean/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-ocean" />
                  </div>
                  <span className="text-muted-foreground">{usp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEO KEYWORDS CLOUD (Hidden for users, visible for SEO) */}
      <section className="sr-only" aria-hidden="true">
        <h4>Mots-clés principaux</h4>
        <ul>
          {localSEO.primaryKeywords.map((kw, idx) => (
            <li key={idx}>{kw}</li>
          ))}
        </ul>
        <h4>Mots-clés secondaires</h4>
        <ul>
          {localSEO.secondaryKeywords.map((kw, idx) => (
            <li key={idx}>{kw}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
