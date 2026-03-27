"use client";

import { Zap, Shield, Clock, Sparkles, Check, TrendingUp } from "lucide-react";
import Image from "next/image";

const features = [
  { 
    icon: Zap, 
    title: "Ultra-rapide", 
    description: "Livraison en 2-4 semaines",
    stat: "2-4 sem",
    color: "from-ocean to-accent"
  },
  { 
    icon: Shield, 
    title: "Garanti", 
    description: "Satisfait ou remboursé",
    stat: "100%",
    color: "from-accent to-ocean-light"
  },
  { 
    icon: Clock, 
    title: "Support 24/7", 
    description: "Maintenance incluse",
    stat: "24/7",
    color: "from-ocean-light to-ocean"
  },
];

const advantages = [
  "Design sur-mesure par des experts",
  "Code optimisé automatiquement",
  "Contenu SEO généré et optimisé",
  "Tests qualité automatisés",
];

const delayClasses = ["", "delay-100", "delay-200", "delay-300"];

export function AnimatedFeatures() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6 animate-scale-in">
            <TrendingUp className="w-4 h-4" />
            Pourquoi Waveia
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            L&apos;innovation au service de <br className="hidden sm:block" />
            <span className="text-gradient">votre succès digital</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Nous combinons expertise humaine et intelligence artificielle pour créer 
            des sites web d&apos;exception à des prix imbattables sur la Côte Basque.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative animate-in ${delayClasses[index] ?? ""}`}
              style={{ willChange: "transform", backfaceVisibility: "hidden" }}
            >
              {/* Card */}
              <div className="relative h-full p-8 glass-card glass-card-hover overflow-hidden">
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-ocean/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-ocean/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon with Gradient */}
                  <div className="relative w-14 h-14 mb-6">
                    <div className="absolute inset-0 bg-ocean/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`relative w-full h-full flex items-center justify-center bg-linear-to-br ${feature.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-7 h-7 text-background" />
                    </div>
                  </div>
                  
                  {/* Stat Badge */}
                  <div className="absolute top-0 right-0 px-3 py-1 bg-glass-bg border border-glass-border rounded-full">
                    <span className="text-xs font-bold text-ocean">{feature.stat}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-ocean transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Advantage Block */}
        <div className="relative overflow-hidden glass-card group animate-in delay-300">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--ocean)_0%,transparent_50%)] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sunset/10 border border-sunset/20 text-sunset text-sm font-medium rounded-full mb-6 animate-in-left">
                <Sparkles className="w-4 h-4" />
                Notre avantage
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                L&apos;IA nous permet de vous offrir <span className="text-ocean">plus, pour moins</span>
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Là où les agences traditionnelles facturent 2000€ minimum pour un site vitrine, 
                nous proposons la même qualité à moins de 1000€. Comment ? En automatisant les 
                tâches répétitives grâce à l&apos;intelligence artificielle, tout en conservant 
                l&apos;expertise humaine pour la stratégie et la créativité.
              </p>
              
              <ul className="space-y-4">
                {advantages.map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center gap-4 text-sm group/item animate-in-left ${delayClasses[index] ?? ""}`}
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-ocean/20 rounded-full group-hover/item:bg-ocean/30 group-hover/item:scale-110 transition-all duration-300">
                      <Check className="w-3.5 h-3.5 text-ocean" />
                    </span>
                    <span className="group-hover/item:text-ocean transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden border border-glass-border shadow-2xl animate-scale-in">
                <Image
                  src="/images/home/team-working-biarritz.webp"
                  alt="Équipe Waveia au travail à Biarritz"
                  fill
                  sizes="(max-width: 1024px) 90vw, 640px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 p-5 bg-glass-bg backdrop-blur-sm rounded-2xl border border-glass-border shadow-2xl group-hover:shadow-ocean/20 transition-all duration-500 animate-in delay-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-linear-to-br from-ocean to-accent rounded-xl shadow-lg shadow-ocean/30">
                    <Zap className="w-7 h-7 text-background" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-ocean">-40%</div>
                    <div className="text-xs text-muted-foreground">vs agences classiques</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
