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
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" />

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
              <strong className="text-foreground font-semibold">
                synergie entre expertise technique
              </strong>{" "}
              et{" "}
              <strong className="text-foreground font-semibold">
                stratégie sémantique
              </strong>
              .
            </p>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              De l&apos;analyse de votre potentiel à la conquête de positions dominantes, nous bâtissons une{" "}
              <strong className="text-ocean-light font-semibold">
                autorité numérique solide
              </strong>{" "}
              pour attirer un trafic qualifié et durable.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`group relative ${
                  index === 1
                    ? "delay-100"
                    : index === 2
                      ? "delay-200"
                      : index === 3
                        ? "delay-300"
                        : ""
                }`}
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                <Link
                  href={service.href}
                  className="block h-full group outline-none"
                >
                  {/* Gradient Border Glow on Hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl blur-md`}
                  />

                  {/* Card */}
                  <div className="relative h-full p-8 lg:p-10 bg-glass-bg backdrop-blur-sm rounded-2xl border border-glass-border overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:translate-y-[-8px] shadow-card group-hover:shadow-card-hover">
                    
                    {/* Corner Glow */}
                    <div
                      className={`absolute top-0 right-0 w-48 h-48 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.12] blur-3xl transition-opacity duration-700`}
                    />

                    <div className="relative flex flex-col h-full z-10">
                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-ocean transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-8 grow">
                          {service.description}
                        </p>
                      </div>

                      {/* Footer / CTA */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-ocean/70 group-hover:text-ocean transition-all duration-300 mt-auto pt-4 border-t border-glass-border group-hover:border-transparent">
                        <span className="relative">
                          Découvrir le service
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-ocean group-hover:w-full transition-all duration-300" />
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
