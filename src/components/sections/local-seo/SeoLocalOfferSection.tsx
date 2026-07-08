"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function SeoLocalOfferSection() {
  const inclusions = [
    "Audit complet de votre visibilité locale actuelle",
    "Optimisation complète de votre fiche Google Business Profile",
    "Création de pages locales optimisées sur votre site",
    "Correction et harmonisation de votre NAP sur le web",
    "Stratégie de collecte d'avis clients",
    "Acquisition de backlinks locaux qualitatifs",
    "Suivi de position mensuel et reporting"
  ];

  return (
    <section className="py-24 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-in">
           <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> CE QUI EST INCLUS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
            Ce que comprend notre accompagnement <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">SEO Local.</em>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto glass-card bg-card/50 backdrop-blur-xl border border-border p-10 md:p-14 rounded-3xl relative overflow-hidden">
          {/* Subtle Glow Background */}
          <div className="absolute -top-[100px] right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.08)_0%,transparent_70%)] pointer-events-none" />
          
          <ul className="grid sm:grid-cols-2 gap-6 mb-12 relative z-10">
            {inclusions.map((item, i) => (
              <li key={i} className="flex gap-4 text-[0.95rem] font-medium">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-center pt-8 border-t border-border/50 relative z-10">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-10 py-4 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
              📞 Demander mon devis personnalisé
            </a>
            <p className="mt-4 text-xs text-muted-foreground italic">
              Réponse sous 24h ouvrées, sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
