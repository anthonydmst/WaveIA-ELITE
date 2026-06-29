"use client";

import { Link } from "next-view-transitions";
import { ArrowRight, Sparkles } from "lucide-react";

interface RelatedServicesProps {
  services: {
    slug: string;
    label: string;
  }[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full mt-12 mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-ocean/10 border border-ocean/20">
            <Sparkles className="w-5 h-5 text-ocean" />
        </div>
        <h2 className="font-heading text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Découvrez aussi
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <Link 
            key={idx} 
            href={service.slug}
            className="group relative p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-ocean/30 hover:bg-ocean/5 transition-all duration-300"
          >
             <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">
                    {service.label}
                </span>
                <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
             </div>
             <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explorer ce service &rarr;
             </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
