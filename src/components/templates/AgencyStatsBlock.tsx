"use client";

import { TrendingUp, Star, Users, Clock } from "lucide-react";

interface Metric {
  value: string;
  label: string;
  proof?: string;
}

interface Props {
  title?: string;
  metrics: Metric[];
  variant?: "default" | "compact" | "hero";
}

const iconMap = [TrendingUp, Star, Users, Clock];

export function AgencyStatsBlock({ title, metrics, variant = "default" }: Props) {
  if (variant === "compact") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className={`p-4 bg-card/50 border border-white/5 rounded-xl text-center animate-in ${idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "delay-300" : ""}`}
          >
            <div className="text-2xl font-heading font-bold text-gradient mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className="flex flex-wrap justify-center gap-8 py-8">
        {metrics.slice(0, 4).map((metric, idx) => (
          <div
            key={idx}
            className={`text-center animate-scale-in ${idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "delay-300" : ""}`}
          >
            <div className="text-3xl md:text-4xl font-heading font-bold text-ocean">
              {metric.value}
            </div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>
    );
  }

  
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-ocean/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            {title && (
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-xs font-bold mb-4">
                  <TrendingUp className="w-3 h-3" />
                  RÉSULTATS PROUVÉS
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold">{title}</h2>
              </div>
            )}
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, idx) => {
                const IconComponent = iconMap[idx % 4] ?? TrendingUp;
                return (
                  <div
                    key={idx}
                    className={`group text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-ocean/30 transition-all duration-300 animate-in ${idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "delay-300" : ""}`}
                  >
                    <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-ocean/10 flex items-center justify-center text-ocean group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
