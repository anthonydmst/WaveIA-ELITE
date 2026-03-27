"use client";

import { Link } from "next-view-transitions";
import { Globe, Search, Palette, ArrowRight, Check } from "lucide-react";

const pricingPreviews = [
  {
    icon: Globe,
    service: "Site Vitrine",
    price: "790€",
    period: "one-time",
    features: [
      "Design sur-mesure",
      "Mobile-first responsive",
      "SEO optimisé inclus",
      "Hébergement 1 an offert"
    ],
    href: "/tarifs/creation-site-internet",
    color: "from-ocean to-accent",
    tag: "Populaire"
  },
  {
    icon: Search,
    service: "SEO Mensuel",
    price: "149€",
    period: "/mois",
    features: [
      "Audit complet offert",
      "Optimisations techniques",
      "Rapports mensuels détaillés",
      "Support prioritaire"
    ],
    href: "/tarifs/referencement-seo",
    color: "from-ocean-light to-ocean",
    tag: "Best ROI"
  },
  {
    icon: Palette,
    service: "Logo Pro",
    price: "490€",
    period: "one-time",
    features: [
      "3 propositions créatives",
      "Fichiers vectoriels HD",
      "Charte couleur incluse",
      "Révisions illimitées"
    ],
    href: "/tarifs/agence-communication",
    color: "from-sunset to-sand",
  },
];

const delayClasses = ["", "delay-100", "delay-200"];

export function PricingPreviewHome() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--ocean)_0%,transparent_70%)] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            Tarifs Transparents
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Des prix <span className="text-gradient">clairs et justes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Pas de devis fantaisiste. Nos tarifs sont affichés publiquement et garantis sans surprise.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingPreviews.map((pricing, index) => (
            <div
              key={index}
              className={`group relative animate-in ${delayClasses[index] ?? ""}`}
            >
              <Link href={pricing.href} className="block h-full">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-linear-to-br ${pricing.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl blur-md`} />
                
                {/* Main Card */}
                <div className="relative h-full p-8 bg-glass-bg backdrop-blur-sm rounded-2xl border border-glass-border overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_40px_var(--glass-glow)]">
                  
                  {/* Tag */}
                  {pricing.tag && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-ocean/20 border border-ocean/30 rounded-full">
                      <span className="text-xs font-bold text-ocean">{pricing.tag}</span>
                    </div>
                  )}
                  
                  {/* Glow Effect */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-linear-to-br ${pricing.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="relative w-14 h-14 mb-6">
                      <div className={`absolute inset-0 bg-linear-to-br ${pricing.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className={`relative w-full h-full flex items-center justify-center bg-linear-to-br ${pricing.color} rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <pricing.icon className="w-7 h-7 text-background" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{pricing.service}</h3>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-ocean">{pricing.price}</span>
                      {pricing.period !== "one-time" && (
                        <span className="text-muted-foreground text-sm ml-2">{pricing.period}</span>
                      )}
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {pricing.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-ocean/70 group-hover:text-ocean transition-all duration-300">
                      <span className="relative">
                        Voir tous les tarifs
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-ocean group-hover:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-muted-foreground animate-in delay-300">
          Prix TTC. Paiement en 3x sans frais disponible à partir de 1000€. 
          <Link href="/tarifs" className="text-ocean hover:underline ml-1">
            Voir la grille tarifaire complète →
          </Link>
        </p>
      </div>
    </section>
  );
}
