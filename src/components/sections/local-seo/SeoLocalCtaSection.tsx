"use client";

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function SeoLocalCtaSection() {
  return (
    <section className="py-24 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <div className="glass-card bg-ocean/10 border-ocean/30 p-10 md:p-16 text-center animate-in rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Prêt à devenir la référence locale de votre secteur ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Obtenez un <strong>audit gratuit et sans engagement</strong> de votre visibilité locale actuelle, réalisé par un expert Wave.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-lg px-10 py-5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                🎯 Je réserve mon audit gratuit <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground font-medium">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Sans engagement</span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Réponse sous 24h</span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Diagnostic personnalisé</span>
            </div>
         </div>
      </div>
    </section>
  );
}
