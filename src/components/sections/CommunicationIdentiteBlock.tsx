"use client";

import { Link } from "next-view-transitions";
import {
  Palette,
  Share2,
  Camera,
  Megaphone,
  ArrowRight,
  MessageCircleHeart,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Identité Visuelle",
    description:
      "Forgez une marque unique et reconnaissable avec un univers graphique cohérent (logo, charte, typographie) qui reflète vos valeurs et inspire instantanément confiance.",
    gradient: "from-ocean to-accent",
    href: "/agence-communication",
  },
  {
    icon: Share2,
    title: "Réseaux Sociaux",
    description:
      "Fédérez votre communauté et boostez votre notoriété grâce à une gestion dynamique de vos plateformes, incluant stratégie éditoriale, création de contenus et interaction.",
    gradient: "from-ocean-light to-ocean",
    href: "/agence-communication",
  },
  {
    icon: Camera,
    title: "Shooting Photo & Vidéo",
    description:
      "Sublimez votre offre avec des visuels haute définition et des formats vidéo immersifs, conçus pour captiver l'attention et humaniser votre présence digitale.",
    gradient: "from-sunset to-sand",
    href: "/agence-communication",
  },
  {
    icon: Megaphone,
    title: "Publicité & Ads",
    description:
      "Diffusez votre message au bon moment et à la bonne cible avec des campagnes publicitaires performantes sur les réseaux, optimisées pour un retour sur investissement immédiat.",
    gradient: "from-accent to-ocean-dark",
    href: "/agence-communication",
  },
];

export function CommunicationIdentiteBlock() {
  return (
    <section id="communication-identite" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--ocean)_0%,transparent_50%)] opacity-[0.03]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-light/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            <MessageCircleHeart className="w-4 h-4" />
            Social &amp; Brand
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-8">
            Communication &amp;{" "}
            <span className="font-heading italic text-ocean-light">
              Identité
            </span>
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Nous donnons vie à votre vision à travers des{" "}
              <strong className="text-foreground font-semibold font-normal">
                contenus percutants
              </strong>{" "}
              et une{" "}
              <strong className="text-foreground font-semibold font-normal">
                identité de marque forte
              </strong>
              .
            </p>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              De la création visuelle à l&apos;engagement social, nous alignons votre image sur vos ambitions pour créer un{" "}
              <strong className="text-ocean-light font-semibold font-normal">
                impact fort et authentique
              </strong>{" "}
              auprès de votre audience.
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
