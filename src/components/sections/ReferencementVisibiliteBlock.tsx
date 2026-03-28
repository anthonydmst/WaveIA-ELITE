"use client";

import { Link } from "next-view-transitions";
import {
  Search,
  MapPin,
  Store,
  Link as LinkIcon,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Audit SEO",
    description:
      "Décelez les opportunités de croissance cachées de votre site via une analyse 360° (technique, contenu, popularité) pour définir une stratégie de positionnement infaillible.",
    gradient: "from-ocean to-accent",
    href: "/referencement-seo",
  },
  {
    icon: MapPin,
    title: "SEO Local",
    description:
      "Devenez la référence incontournable de votre secteur géographique en optimisant votre présence sur les requêtes locales pour capter les clients à proximité immédiate.",
    gradient: "from-ocean-light to-ocean",
    href: "/referencement-seo",
  },
  {
    icon: Store,
    title: "Google My Business",
    description:
      "Maximisez l'impact de votre fiche établissement pour apparaître dans le \"Local Pack\" de Google et convertir les recherches locales en visites réelles ou appels directs.",
    gradient: "from-sunset to-sand",
    href: "/referencement-seo",
  },
  {
    icon: LinkIcon,
    title: "Netlinking",
    description:
      "Accélérez votre montée en puissance dans les classements grâce à une stratégie d'acquisition de liens de haute qualité, renforçant la confiance des algorithmes envers votre site.",
    gradient: "from-accent to-ocean-dark",
    href: "/referencement-seo",
  },
];

export function ReferencementVisibiliteBlock() {
  return (
    <section id="referencement-visibilite" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--accent)_0%,transparent_50%)] opacity-[0.03]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            <TrendingUp className="w-4 h-4" />
            SEO & Visibilité
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-8">
            Référencement &amp;{" "}
            <span className="font-heading italic text-ocean-light">
              Visibilité
            </span>
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Nous propulsons votre site en tête des résultats de recherche grâce à une{" "}
              <strong className="text-foreground font-semibold font-normal">
                synergie entre expertise technique
              </strong>{" "}
              et{" "}
              <strong className="text-foreground font-semibold font-normal">
                stratégie sémantique
              </strong>
              .
            </p>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              De l&apos;analyse de votre potentiel à la conquête de positions dominantes, nous bâtissons une{" "}
              <strong className="text-ocean-light font-semibold font-normal">
                autorité numérique solide
              </strong>{" "}
              pour attirer un trafic qualifié et durable.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className=""
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link
                  href={service.href}
                  className="block h-full group outline-none"
                >
                  <div className="relative h-full bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-6 lg:p-8 overflow-hidden transition-all duration-300 hover:border-ocean/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ocean/10">
                    
                    {/* Hover Glow */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.gradient} opacity-0 blur-2xl transition-opacity duration-500 pointer-events-none group-hover:opacity-20`}
                    />

                    {/* Number Deco */}
                    <div className="absolute top-4 right-6 text-6xl font-black text-foreground/[0.02] select-none pointer-events-none transition-colors duration-500 group-hover:text-foreground/[0.04]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative flex flex-col h-full z-10">
                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`w-14 h-14 flex items-center justify-center rounded-xl bg-linear-to-br ${service.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                        >
                          <IconComponent className="w-6 h-6 text-background" />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-foreground transition-colors duration-300 group-hover:text-ocean-light">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Footer / CTA */}
                      <div className="mt-auto pt-4 border-t border-glass-border transition-colors duration-300 group-hover:border-ocean/20">
                        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-ocean-light">
                          <span>Découvrir le service</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
