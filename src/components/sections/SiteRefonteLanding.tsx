import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { RefonteModeleSection } from './RefonteModeleSection';
import { RefonteDiagnosticSection } from './RefonteDiagnosticSection';
import { RefonteApprocheSection } from './RefonteApprocheSection';
import { RefonteMigrationProtocolSection } from './RefonteMigrationProtocolSection';
import { RefontePerformanceSection } from './RefontePerformanceSection';
import { RefonteFAQSection } from './RefonteFAQSection';
import { RefonteCTASection } from './RefonteCTASection';

export function SiteRefonteLanding() {
  return (
    <div className="w-full relative z-10 pt-20">
      
      {/* ─── HERO ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden pt-[70px]">
        {/* Glow & Grid Backgrounds */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              REFONTE DE SITE WEB | MIGRATION SÉCURISÉE
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Ne faites pas qu&apos;un simple coup de pinceau.<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Exigez un site qui génère du CA.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Design vieillissant, chargement lent, parcours client chaotique... Votre site actuel n&apos;est plus à la hauteur de votre expertise et vous fait perdre des opportunités face à la concurrence. Chez Waveia, une refonte n&apos;est pas qu&apos;une question d&apos;esthétique. Nous effaçons votre dette technique, sécurisons vos positions historiques sur Google (SEO) et reconstruisons une plateforme rapide, taillée pour convertir vos visiteurs en clients.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Demander l&apos;audit gratuit de mon site <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#pourquoi-refonte" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-[0.95rem] font-medium px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir notre méthode de refonte
              </a>
            </div>
            
            <div className="mt-12 flex justify-center gap-6 flex-wrap text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Audit de vos failles actuelles</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Migration SEO sans perte de trafic</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Zéro coupure pendant la transition</span>
            </div>
          </div>
        </div>
      </section>

      <RefonteDiagnosticSection />
      
      <RefonteApprocheSection />

      <RefonteModeleSection />

      <RefonteMigrationProtocolSection />
      
      <RefontePerformanceSection />

      <RefonteFAQSection />

      <RefonteCTASection />

    </div>
  );
}
