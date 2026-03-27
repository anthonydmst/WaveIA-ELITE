"use client";

import { ServiceStep } from "@/lib/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Props {
  process: ServiceStep[];
}

export function ServiceProcess({ process }: Props) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
       {/* Background Ambience */}
      <div className="absolute inset-0 bg-cards/0">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -left-40 top-40 w-80 h-80 bg-ocean/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 lg:mb-32 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean/5 border border-ocean/10 text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-ocean animate-pulse" />
            Notre Méthode
          </div>
          <SectionHeader as="h2" size="page" align="center" className="mb-6 font-heading">
            Un processus <span className="text-gradient">fluide & transparent</span>
          </SectionHeader>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous avons simplifié chaque étape pour vous offrir une expérience sans friction, de la conception à la mise en ligne.
          </p>
        </div>

        <div className="relative">
          {/* Central Connecting Line (Desktop) - CSS Animation */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
            <div 
              className="w-full bg-linear-to-b from-ocean via-accent to-ocean-light opacity-50 animate-line-grow"
              style={{ height: '100%' }}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {process.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center animate-in ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                } ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left">
                  <div className={`group relative p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-white/5 hover:border-ocean/30 hover:bg-card/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,0.1)] ${
                    index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                  }`}>
                    <div className={`absolute top-0 w-20 h-20 bg-linear-to-br from-ocean/20 to-transparent blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity ${
                       index % 2 === 0 ? "right-0" : "left-0"
                    }`} />
                    
                    <SectionHeader as="h3" size="subsection" className="mb-4 group-hover:text-ocean transition-colors flex items-center gap-3 justify-center lg:justify-start lg:block font-heading">
                      {step.title}
                    </SectionHeader>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 flex-none w-16 h-16 rounded-full bg-card border-4 border-background shadow-[0_0_0_4px_rgba(255,255,255,0.05)] flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-ocean/10 flex items-center justify-center border border-ocean/20">
                    <span className="font-heading font-bold text-ocean">{index + 1}</span>
                  </div>
                   {/* Mobile Line Connector */}
                   {index !== process.length - 1 && (
                    <div className="lg:hidden absolute top-16 left-1/2 w-px h-12 bg-white/10 -translate-x-1/2" />
                  )}
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
