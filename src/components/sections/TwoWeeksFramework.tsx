"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    title: "Le blocage",
    subtitle: "Problème",
    description: "Vous arrivez avec un blocage : Une image de marque floue, un site qui ne vous ressemble plus (ou n'existe pas), la sensation d'être invisible sur Google, ou la peur technique qui vous empêche d'avancer. Vous sentez que votre potentiel est là, mais votre vitrine digitale le dessert. Vous perdez des clients face à vos concurrents à Bayonne, Biarritz ou Anglet.",
    gradient: "from-sunset/20 to-destructive/20",
    borderGlow: "group-hover:border-sunset/40 group-hover:shadow-[0_0_30px_-5px_var(--sunset)]"
  },
  {
    title: "La transition",
    subtitle: "Agitation",
    description: "Nous changeons d'angle : Nous déconstruisons vos freins et analysons votre message. Grâce à notre expertise stratégique, au design d'expérience (UX) et à une co-création étroite, vous commencez à voir votre activité sous un jour nouveau : celui d'une marque forte et structurée.",
    gradient: "from-ocean-dark/20 to-accent/20",
    borderGlow: "group-hover:border-ocean-dark/40 group-hover:shadow-[0_0_30px_-5px_var(--ocean-dark)]"
  },
  {
    title: "La solution",
    subtitle: "Résultat",
    description: "Vous repartez avec un outil puissant : Un site web moderne, une stratégie de contenu claire et surtout, un plan d'action pour attirer vos clients idéaux. Vous ne repartez pas juste avec un site, mais avec la confiance nécessaire pour passer au niveau supérieur : un site \"Next-Gen\" affichant un score de 100% sur Google PageSpeed.",
    gradient: "from-ocean-light/20 to-ocean/20",
    borderGlow: "group-hover:border-ocean-light/40 group-hover:shadow-[0_0_30px_-5px_var(--ocean-light)]"
  }
];

export function TwoWeeksFramework() {
  return (
    <section className="relative py-24 lg:py-32 bg-card/10 border-y border-glass-border overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-hero-fade-up">
          <SectionHeader as="h2" size="section" className="mb-6">
            <span className="font-heading italic text-ocean-text">Vos deux semaines</span>, en bref
          </SectionHeader>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-ocean/40 to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative animate-hero-fade-up-rapid delay-200">
          
          {steps.map((step, idx) => {
            return (
              <div 
                key={idx} 
                className={`relative z-10 flex flex-col p-8 lg:p-10 rounded-[2rem] bg-glass-bg backdrop-blur-md border border-glass-border shadow-lg transition-all duration-500 hover:-translate-y-2 group overflow-hidden ${step.borderGlow}`}
              >
                {/* Subtle Ambient Glow */}
                <div className={`absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br ${step.gradient} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className="text-6xl lg:text-7xl font-black text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors duration-500 leading-none">
                    {idx + 1}
                  </div>
                  <div className="h-0.5 w-12 bg-glass-border group-hover:w-20 transition-all duration-500 mt-4" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2 relative z-10 transition-colors">
                  {step.title}
                </h3>
                <div className="text-sm font-semibold uppercase tracking-widest text-ocean-light mb-6 relative z-10">
                  {step.subtitle}
                </div>
                
                <p className="text-muted-foreground text-base leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
