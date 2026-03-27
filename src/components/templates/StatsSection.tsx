"use client";

import { TrendingUp, Award, Users, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Metric {
  value: string;
  label: string;
  proof?: string;
}

interface Props {
  title: string;
  metrics: Metric[];
}

const iconMap: Record<number, React.ReactNode> = {
  0: <TrendingUp className="w-5 h-5" />,
  1: <Award className="w-5 h-5" />,
  2: <Users className="w-5 h-5" />,
  3: <Zap className="w-5 h-5" />,
};

const delayClasses = ["delay-100", "delay-200", "delay-300", "delay-400"];

export function StatsSection({ title, metrics }: Props) {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
        {/* Background Glow */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-ocean/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-xs font-bold mb-4">
              <TrendingUp className="w-3 h-3" />
              RÉSULTATS PROUVÉS
            </div>
            <SectionHeader size="section" align="center">
              {title}
            </SectionHeader>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`group text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-ocean/30 transition-all duration-300 animate-in ${delayClasses[idx % 4] ?? ""}`}
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-ocean/10 flex items-center justify-center text-ocean group-hover:scale-110 transition-transform">
                  {iconMap[idx % 4]}
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-ocean mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-foreground font-medium mb-1">
                  {metric.label}
                </div>
                {metric.proof && (
                  <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Source: {metric.proof}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

