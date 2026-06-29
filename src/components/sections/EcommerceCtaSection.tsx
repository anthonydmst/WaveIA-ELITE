"use client";

import React from 'react';
import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import { Link } from 'next-view-transitions';

export function EcommerceCtaSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
      {/* Dark massive block effect */}
      <div className="absolute inset-0 bg-ocean/5" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ocean/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none blur-[60px]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
          <div className="w-5 h-[1.5px] bg-primary"></div>
          CONSULTATION INITIALE
          <div className="w-5 h-[1.5px] bg-primary"></div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
          Prêt à déployer votre plateforme de <em className="not-italic text-ocean">croissance e-commerce</em> ?
        </h2>
        
        <p className="text-lg text-muted-foreground font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Que vous partiez d&apos;une feuille blanche pour lancer votre marque ou que vous souhaitiez migrer votre catalogue vers une architecture plus rapide et automatisée, ne laissez plus la technique freiner vos ventes. Discutons 30 minutes de vos objectifs de volume et de vos flux logistiques. Un échange factuel pour dessiner la feuille de route la plus rentable pour votre entreprise.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
            Réserver mon diagnostic E-commerce <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="https://wa.me/33695913669" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-foreground hover:text-[#25D366] hover:border-[#25D366] font-heading font-bold text-[0.95rem] px-8 py-4 rounded-xl border border-border transition-all">
            <MessageCircle className="w-5 h-5" /> Contactez-nous via WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Échange confidentiel de 30 min</span>
          <span className="hidden md:inline text-border">•</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Cadrage technique ERP/SI inclus</span>
          <span className="hidden md:inline text-border">•</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Sans engagement</span>
        </div>
      </div>
    </section>
  );
}
