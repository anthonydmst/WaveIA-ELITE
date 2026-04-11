"use client";

import { useRef } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ChevronLeft, ChevronRight, ExternalLink, MapPin, ArrowRight } from "lucide-react";
import { PROJECTS_SHOWCASE } from "@/lib/data";
import { useHaptics } from "@/hooks/use-haptics";

export function HomePageRealisationsBlock() {
  const { trigger } = useHaptics();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    trigger("light");
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = window.innerWidth > 768 ? container.clientWidth / 2 : container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="nos-realisations" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--ocean-dark)_0%,transparent_50%)] opacity-10" />

      <div className="relative max-w-360 mx-auto px-6 lg:px-8">
        {/* Header & Controls Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-8">
            Nos réalisations au service de{" "}
            <span className="font-heading italic text-ocean-light">
              votre réussite
            </span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
            <p>
              WaveIA est née pour répondre aux nouveaux codes du marché. Là où les méthodes traditionnelles s&apos;essoufflent, nous proposons un modèle d&apos;efficacité radical, conçu pour les exigences de 2026.
            </p>
            <p>
              Sémantique assistée par IA, architectures ultra-performantes et nouveau référencement : nous maîtrisons les méthodes neuves qu&apos;il est désormais indispensable d&apos;adopter pour rester à la page. Au Pays Basque comme ailleurs, nous cassons les codes pour offrir à nos clients une longueur d&apos;avance immédiate. Découvrez comment notre dynamisme transforme vos ambitions en références technologiques.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden lg:flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full bg-card border border-glass-border hover:border-ocean/30 hover:bg-glass-bg-hover transition-all group shadow-sm shadow-black/20"
              aria-label="Projets précédents"
            >
              <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-ocean transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-card border border-glass-border hover:border-ocean/30 hover:bg-glass-bg-hover transition-all group shadow-sm shadow-black/20"
              aria-label="Projets suivants"
            >
              <ChevronRight className="w-5 h-5 text-foreground group-hover:text-ocean transition-colors" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-6 lg:-mx-8 px-6 lg:px-8">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PROJECTS_SHOWCASE.map((project) => (
              <div
                key={project.id}
                className="w-[85vw] md:w-[45vw] lg:w-[30vw] shrink-0 snap-center lg:snap-start group cursor-pointer"
                onClick={() => trigger("light")}
              >
                <article className="relative h-full bg-card rounded-2xl border border-glass-border overflow-hidden transition-all duration-300 hover:border-ocean/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-video lg:aspect-4/3 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-80" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <div className={`w-10 h-10 flex items-center justify-center bg-linear-to-br ${project.color} rounded-xl shadow-lg`}>
                        <ExternalLink className="w-4 h-4 text-background" />
                      </div>
                      
                      {project.city && (
                        <div className="px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                          <MapPin className="w-3.5 h-3.5 text-ocean" />
                          {project.city}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 lg:p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-ocean transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm lg:text-base mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-glass-border flex items-center justify-between">
                      <span className="inline-flex items-center justify-center px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-sm font-bold text-ocean">
                        {project.results}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        Découvrir
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
            
            {/* View All Card */}
            <div className="w-[85vw] md:w-[45vw] lg:w-[30vw] shrink-0 snap-center lg:snap-start">
              <div className="h-full min-h-[400px] rounded-2xl border border-dashed border-glass-border hover:border-ocean/40 transition-colors flex flex-col items-center justify-center p-8 text-center bg-glass-bg/50 backdrop-blur-sm group">
                <div className="w-16 h-16 rounded-full bg-ocean/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-8 h-8 text-ocean" />
                </div>
                <h3 className="text-xl font-bold mb-2">Voir tous les projets</h3>
                <p className="text-muted-foreground mb-8">Découvrez plus de réalisations sur notre page dédiée.</p>
                <Link
                  href="/realisations"
                  onClick={() => trigger("medium")}
                  className="px-6 py-3 bg-ocean text-background font-semibold rounded-full hover:bg-ocean-light transition-colors"
                >
                  Ouvrir le portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll("left")}
            className="p-4 rounded-full bg-card border border-glass-border active:bg-glass-bg-hover transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
             onClick={() => scroll("right")}
             className="p-4 rounded-full bg-card border border-glass-border active:bg-glass-bg-hover transition-colors"
          >
             <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
