"use client";

import { Link } from "next-view-transitions";
import { Globe, Search, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création ou refonte de site internet",
    description:
      "De la création à la refonte, WaveIA donne vie à votre vision digitale. Site vitrine ou e-commerce, nous concevons des plateformes sur-mesure et performantes pour faire déferler votre plein potentiel sur le web. Une solution unique, fluide et pensée pour captiver vos futurs clients dès le premier clic.",
    gradient: "from-ocean to-accent",
    glowColor: "var(--ocean)",
    href: "/creation-site-internet",
  },
  {
    icon: Search,
    title: "Référencement naturel et payant",
    description:
      "Nous aidons les internautes à trouver le chemin vers votre site grâce à une stratégie complète. Que ce soit par le référencement naturel (SEO) pour une présence durable ou par la publicité ciblée (SEA) pour des résultats immédiats, nous attirons des visiteurs qualifiés. Une visibilité rentable sur Google, sans termes compliqués.",
    gradient: "from-ocean-light to-ocean",
    glowColor: "var(--ocean-light)",
    href: "/referencement-seo",
  },
  {
    icon: Palette,
    title: "Communication et identité visuelle",
    description:
      "Propulsez votre marque avec une identité visuelle forte et cohérente. De la gestion de vos réseaux sociaux à la création de contenus percutants (web et posts), nous orchestrons vos publicités pour amplifier votre impact global. WaveIA unifie votre communication pour que votre message rayonne sur tous les canaux.",
    gradient: "from-sunset to-sand",
    glowColor: "var(--sunset, #f97316)",
    href: "/agence-communication",
  },
];

export function ServicesTripartite() {
  return (
    <section
      id="nos-services"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_60%)] opacity-[0.04]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            Nos services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Trois expertises pour
            <br className="hidden sm:block" />
            <span className="font-heading italic text-ocean-light">
              une présence digitale complète
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Chaque projet est unique. Nous l&apos;abordons sous trois angles
            complémentaires pour maximiser votre impact en ligne.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative animate-in ${
                index === 1
                  ? "delay-100"
                  : index === 2
                    ? "delay-200"
                    : ""
              }`}
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <Link href={service.href} className="block h-full">
                {/* Gradient Border Glow on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl blur-md`}
                />

                {/* Card */}
                <div className="relative h-full p-8 lg:p-10 bg-glass-bg backdrop-blur-sm rounded-2xl border border-glass-border overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_40px_var(--glass-glow)]">
                  {/* Corner Glow */}
                  <div
                    className={`absolute top-0 right-0 w-48 h-48 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.12] blur-3xl transition-opacity duration-700`}
                  />

                  {/* Decorative Number */}
                  <div className="absolute top-6 right-6 text-7xl font-black text-foreground/[0.03] select-none leading-none pointer-events-none group-hover:text-foreground/[0.07] transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex flex-col h-full">
                    {/* Icon */}
                    <div className="relative w-16 h-16 mb-8">
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                      />
                      <div
                        className={`relative w-full h-full flex items-center justify-center bg-linear-to-br ${service.gradient} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                      >
                        <service.icon className="w-8 h-8 text-background" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-ocean transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-ocean/70 group-hover:text-ocean transition-all duration-300 mt-auto">
                      <span className="relative">
                        Découvrir
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
      </div>
    </section>
  );
}
