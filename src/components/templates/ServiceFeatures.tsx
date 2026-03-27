"use client";

import { Sparkles } from "lucide-react";
import { ServiceFeature } from "@/lib/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Props {
  features: ServiceFeature[];
}

const delayClasses = ["", "delay-100", "delay-200", "delay-300", "delay-400", "delay-500"];

export function ServiceFeatures({ features }: Props) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-in">
          <SectionHeader size="section" align="center" className="mb-6">
            Pourquoi choisir <span className="text-gradient">WaveIA</span> ?
          </SectionHeader>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une approche radicalement différente, centrée sur la performance, l&apos;esthétique et votre retour sur investissement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] hover:-translate-y-2 animate-scale-in ${
                index === 0 || index === 3 ? "md:col-span-2 bg-linear-to-br from-card/60 to-card/40" : "md:col-span-1"
              } ${delayClasses[index % 6] ?? ""}`}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-ocean/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-ocean/30 group-hover:bg-ocean/10 transition-all duration-300">
                  <Sparkles className="w-6 h-6 text-muted-foreground group-hover:text-ocean transition-colors" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold mb-4 text-foreground group-hover:text-ocean transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>

               {/* Decorative Background Elements */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-ocean/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

