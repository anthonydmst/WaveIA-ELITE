"use client";

import React from 'react';
import { ArrowRight, MapPin, Target, Star } from 'lucide-react';

export function SeoLocalSolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div>
            L'APPROCHE WAVE
            <div className="w-5 h-[1.5px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Wave, l'agence qui maîtrise les rouages<br className="hidden md:block" /> du référencement local
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Chez Wave, le SEO Local n'est pas une case cochée dans une offre généraliste. C'est un <strong>pôle dédié</strong>, piloté par une méthodologie construite autour des <strong>3 piliers fondamentaux</strong> de l'algorithme local de Google.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-in delay-100 mb-16">
          {/* Pillar 1 */}
          <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[350px]">
            <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">01</div>
            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-ocean/10 text-ocean flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Proximité</h3>
              <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">L'ancrage géographique.</strong>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                Nous optimisons votre visibilité auprès des internautes proches de votre zone de chalandise. Plus l'utilisateur est près de vous, plus vous avez de chances d'apparaître en premier.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[350px]">
            <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">02</div>
            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-ocean/10 text-ocean flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Pertinence</h3>
              <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">L'alignement avec l'intention.</strong>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                L'alignement exact entre vos services, vos catégories et les mots-clés tapés par vos futurs clients. Nous structurons vos offres pour répondre précisément aux recherches locales.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[350px]">
            <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">03</div>
            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-ocean/10 text-ocean flex items-center justify-center mb-6">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Notoriété</h3>
              <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">La confiance numérique.</strong>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                Votre crédibilité aux yeux de Google (volume et qualité des avis, citations sur les annuaires, backlinks locaux). C'est ce qui fait la différence entre la 4ème et la 1ère place.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-foreground font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
            📊 Je veux savoir où j'en suis face à mes concurrents <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
