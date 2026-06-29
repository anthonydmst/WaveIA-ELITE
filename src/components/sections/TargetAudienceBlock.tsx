"use client";

import { Target, Zap, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const audienceProfiles = [
  {
    icon: Target,
    text: "Celles et ceux qui en ont marre des sites « vitrines » invisibles, des promesses techniques complexes qui ne rapportent rien, et des designs génériques qui ne reflètent en rien la valeur réelle de leur activité ou de leur expertise.",
  },
  {
    icon: Zap,
    text: "Celles et ceux qui aspirent à reprendre le contrôle de leur image, qui ont compris que leur croissance dépend d'un outil digital performant et qui n'attendent pas que les clients tombent du ciel sans une stratégie de conversion solide.",
  },
  {
    icon: Rocket,
    text: "Celles et ceux déterminés à réaliser leur vraie ambition business, quelle qu'elle soit : lancer une boutique en ligne florissante, devenir la référence incontournable de leur secteur, automatiser leur acquisition de clients, ou simplement créer une plateforme qui travaille pour eux 24h/24 pour enfin vivre de leur passion.",
  }
];

export function TargetAudienceBlock() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--ocean)_0%,transparent_50%)] opacity-[0.03]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-hero-fade-up">
          <SectionHeader as="h2" size="section">
            Le projet web est <span className="font-heading italic text-ocean-text">destiné à...</span>
          </SectionHeader>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-hero-fade-up-rapid delay-200">
          {audienceProfiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <div 
                key={idx} 
                className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-ocean/30 hover:shadow-xl hover:shadow-ocean/5 group"
              >
                <div className="w-16 h-16 rounded-full bg-ocean/10 flex items-center justify-center mb-6 group-hover:bg-ocean/20 transition-colors">
                  <Icon className="w-8 h-8 text-ocean-light" />
                </div>
                <p className="text-muted-foreground text-base leading-relaxed text-balance">
                  {profile.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
