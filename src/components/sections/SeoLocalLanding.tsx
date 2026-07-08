"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, MapPin, Search, Bot, Zap, TrendingUp, Navigation, Radar } from 'lucide-react';
import { SeoLocalProblemSection } from './local-seo/SeoLocalProblemSection';
import { SeoLocalSolutionSection } from './local-seo/SeoLocalSolutionSection';
import { SeoLocalMethodologySection } from './local-seo/SeoLocalMethodologySection';
import { SeoLocalStatsSection } from './local-seo/SeoLocalStatsSection';
import { SeoLocalProofSection } from './local-seo/SeoLocalProofSection';
import { SeoLocalDiffSection } from './local-seo/SeoLocalDiffSection';
import { SeoLocalOfferSection } from './local-seo/SeoLocalOfferSection';
import { SeoLocalLexiconSection } from './local-seo/SeoLocalLexiconSection';
import { SeoLocalFaqSection } from './local-seo/SeoLocalFaqSection';
import { SeoLocalCtaSection } from './local-seo/SeoLocalCtaSection';
import { LandingLeadForm } from '@/components/forms/LandingLeadForm';

export function SeoLocalLanding() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full relative z-10 pt-20">
      
      {/* Inline Styles for specific custom animations  */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll-left 25s linear infinite;
        }
      `}} />

      {/* ─── HERO ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-12 md:py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              Offre : SEO Local pour TPE/PME
            </div>
            
            {/* User requested pas de dégradé dans les titres */}
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Devenez l'entreprise que<br />
              vos clients trouvent <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">en premier</em><br />
              sur Google
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Le <strong>SEO Local</strong> transforme les recherches "près de chez moi" en appels, devis et clients en magasin. Wave optimise votre présence Google pour capter ce trafic — sans dépenser un centime en publicité.
            </p>
            
            <div className="mt-8 mb-12 flex justify-center gap-6 flex-wrap text-sm text-foreground">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ocean" /> Top 3 du Pack Local = 75 % des clics</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> 92 % consultent les avis Google</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Navigation className="w-4 h-4 text-ocean" /> 76 % visitent en magasin sous 24h</span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                🎯 Recevoir mon audit SEO local gratuit <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <a href="#methode" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir comment ça fonctionne ↓
              </a>
            </div>
            
            <p className="mt-9 text-xs text-muted-foreground/70 tracking-wider">
              <b className="text-muted-foreground font-normal">⚡ Analyse offerte · Réponse sous 24h · Sans engagement</b>
            </p>
          </div>
        </div>
      </section>

      <SeoLocalProblemSection />
      <SeoLocalSolutionSection />
      <SeoLocalMethodologySection />
      <SeoLocalStatsSection />
      <SeoLocalProofSection />
      <SeoLocalDiffSection />
      <SeoLocalOfferSection />
      <SeoLocalLexiconSection />
      <SeoLocalFaqSection />
      <SeoLocalCtaSection />

    </div>
  );
}