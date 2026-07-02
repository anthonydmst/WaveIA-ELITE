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
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> Ce qui est inclus
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Ce que comprend notre accompagnement SEO Local</h2>
        </div>

        <div className="glass-card border border-border rounded-3xl p-10 lg:p-14 animate-in fade-in slide-in-from-bottom-4">
          <ul className="grid sm:grid-cols-2 gap-6 mb-12">
            {inclusions.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm font-medium">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-center pt-8 border-t border-border/50">
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
