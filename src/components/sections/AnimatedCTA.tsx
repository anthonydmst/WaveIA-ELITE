"use client";

import { Link } from "next-view-transitions";
import { ArrowRight, Sparkles, Calendar, Clock, CheckCircle } from "lucide-react";

export function AnimatedCTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl group border border-border shadow-2xl animate-scale-in">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-r from-ocean via-accent to-ocean-light animate-gradient" />
          <div className="absolute inset-0 bg-noise opacity-10" />
          
          {/* Floating Orbs */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Content */}
          <div className="relative px-8 py-20 lg:py-28 lg:px-16">
            {/* Badge */}
            <div className="flex justify-center mb-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-border rounded-full">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Devis gratuit sous 24h</span>
              </div>
            </div>
            
            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-background text-center mb-6 leading-tight animate-in delay-100">
              Votre projet mérite<br />une technologie d&apos;exception
            </h2>
            
            <p className="max-w-2xl mx-auto text-background/80 text-lg lg:text-xl mb-12 text-center animate-in delay-200">
              Ancrés à Biarritz. Pas de commerciaux, juste des passionnés.
              Discutons de votre vision.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in delay-300">
              <Link
                href="/contact"
                className="group/btn relative px-10 py-5 bg-background text-foreground font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-linear-to-r from-ocean/20 to-accent/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-ocean" />
                  Démarrer mon projet
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                href="/tarifs"
                className="group/btn px-10 py-5 bg-white/10 hover:bg-white/20 text-background font-semibold rounded-full border border-border hover:border-border transition-all duration-300 flex items-center gap-3"
              >
                <Clock className="w-5 h-5" />
                Voir les tarifs
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-border animate-in delay-400">
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                Disponible maintenant
              </div>
              <div className="text-white/40 text-sm">•</div>
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <Clock className="w-4 h-4 text-white/70" />
                Réponse sous 24h
              </div>
              <div className="text-white/40 text-sm">•</div>
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-white/70" />
                Parole donnée
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
