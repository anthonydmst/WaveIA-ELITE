"use client";

import { CalendarCheck, FileText, ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function WhyChooseUsCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="contact-cta">
      {/* Living ambient background */}
      <div className="absolute inset-0 bg-ambient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--ocean-glow)_0%,transparent_50%)] opacity-[0.10]" />
      
      <div className="relative max-w-5xl mx-auto px-6 text-center mb-16">
        <SectionHeader as="h2" size="page" align="center" className="mb-6 leading-tight">
          Prêt à structurer <br className="hidden sm:block" />
          <span className="italic text-gradient-brand font-heading">votre acquisition ?</span>
        </SectionHeader>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Discutons de vos enjeux commerciaux. Sans engagement, sans jargon technique.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Option 1 : L'échange direct */}
        <div className="flex flex-col p-8 sm:p-10 rounded-2xl bg-glass-bg border border-glass-border shadow-card hover:border-ocean/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <div className="w-14 h-14 shrink-0 rounded-xl bg-ocean/10 flex items-center justify-center mb-6">
            <CalendarCheck className="w-7 h-7 text-ocean" />
          </div>
          <p className="text-2xl font-bold mb-2">L&apos;échange direct</p>
          <p className="text-sm text-ocean-text font-medium mb-4 uppercase tracking-wider">Pour les urgences ou le local</p>
          <p className="text-muted-foreground leading-relaxed flex-1 mb-8 text-lg">
            Autour d&apos;un café au Pays Basque ou en visio. Faisons connaissance et évaluons ensemble le potentiel de votre projet.
          </p>
          <Button asChild size="lg" className="w-full h-auto py-4 text-base font-semibold shadow-glow">
            <Link href="#calendly">
              Réserver un échange de 15 min
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Option 2 : Le cadrage */}
        <div className="flex flex-col p-8 sm:p-10 rounded-2xl bg-glass-bg border border-glass-border shadow-card hover:border-ocean/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <div className="w-14 h-14 shrink-0 rounded-xl bg-ocean/10 flex items-center justify-center mb-6">
            <FileText className="w-7 h-7 text-ocean" />
          </div>
          <p className="text-2xl font-bold mb-2">Le cadrage</p>
          <p className="text-sm text-ocean-text font-medium mb-4 uppercase tracking-wider">Vous avez déjà un cahier des charges</p>
          <p className="text-muted-foreground leading-relaxed flex-1 mb-8 text-lg">
            Vous avez une idée précise de vos besoins ? Décrivez-nous votre projet en quelques clics pour obtenir une première estimation.
          </p>
          <Button asChild size="lg" className="w-full h-auto py-4 text-base font-semibold shadow-glow">
            <Link href="#devis">
              Obtenir un chiffrage
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
