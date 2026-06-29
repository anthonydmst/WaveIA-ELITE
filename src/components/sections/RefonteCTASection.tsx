"use client";

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function RefonteCTASection() {
  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center animate-in">
        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
          <div className="w-5 h-[1.5px] bg-ocean"></div>
          RESTRUCTURATION STRATÉGIQUE
          <div className="w-5 h-[1.5px] bg-ocean"></div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight text-foreground">
          Faites de votre site web <br className="hidden md:block" />
          <span className="text-ocean">votre premier levier de rentabilité</span>.
        </h2>
        
        <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Il est temps de purger votre dette technique et de réaligner votre vitrine digitale sur la qualité réelle de votre entreprise. Ne laissez plus un outil obsolète freiner votre acquisition. Échangeons sur vos objectifs de croissance et dessinons ensemble l'architecture de votre future plateforme.
        </p>

        <div className="flex flex-col items-center justify-center gap-5">
          <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
            Planifier un échange <ArrowRight className="w-4 h-4" />
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-ocean" /> Échange technique direct</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-ocean" /> Analyse de vos KPIs actuels</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-ocean" /> Zéro engagement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
