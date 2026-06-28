"use client";


import { MapPin, Calendar, Heart, CheckCircle2 } from "lucide-react";

interface TerritorialContextProps {
  siloContext: {
    intro: string;
    hook: string;
    expertise: string[];
    cta: string;
    localTrust: string;
    eventReference?: string;
    culturalProof: string;
  };
  cityName: string;
}

/**
 * Grade A++++ Territorial Context Section
 * Displays ultra-localized content proving territorial expertise
 */
export function TerritorialContext({ siloContext, cityName }: TerritorialContextProps) {
  return (
    <section className="relative py-16 overflow-hidden bg-linear-to-b from-background via-background/50 to-background">
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-4">
            <MapPin className="w-4 h-4 text-ocean" />
            <span className="text-sm font-medium">Ancrage Local {cityName}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-linear-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Expertise Territoriale
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {siloContext.intro}
          </p>
        </div>

        {/* Hook Section */}
        <div className="mb-12 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border animate-in delay-100">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            <span className="text-ocean font-semibold">&ldquo;</span>
            {siloContext.hook}
            <span className="text-ocean font-semibold">&rdquo;</span>
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {siloContext.expertise.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border hover:border-ocean/30 transition-colors animate-in-left ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}`}
            >
              <CheckCircle2 className="w-5 h-5 text-ocean shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Local Trust */}
          <div className="p-6 rounded-xl bg-linear-to-br from-ocean/10 to-ocean/5 border border-ocean/20 animate-scale-in">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-5 h-5 text-ocean" />
              <h3 className="font-heading font-semibold text-foreground">Confiance Locale</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siloContext.localTrust}
            </p>
          </div>

          {/* Event Reference */}
          {siloContext.eventReference && (
            <div className="p-6 rounded-xl bg-linear-to-br from-accent/10 to-accent/5 border border-accent/20 animate-scale-in delay-100">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-accent" />
                <h3 className="font-heading font-semibold text-foreground">Événements Locaux</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {siloContext.eventReference}
              </p>
            </div>
          )}
        </div>

        {/* Cultural Proof */}
        <div className="text-center p-6 rounded-xl bg-card/10 backdrop-blur-sm border border-border animate-in delay-200">
          <p className="text-sm italic text-muted-foreground mb-4">
            {siloContext.culturalProof}
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-ocean to-accent text-white font-medium hover:shadow-lg hover:shadow-ocean/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {siloContext.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
