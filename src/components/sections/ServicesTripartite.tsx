"use client";

import { Link } from "next-view-transitions";
import { Globe, Search, Palette, ArrowRight } from "lucide-react";
import { useHaptics } from "@/hooks/use-haptics";

const services = [
  {
    icon: Globe,
    title: "Création & Refonte Web",
    description:
      "Votre site est le cœur de votre réacteur commercial. Nous développons des plateformes (vitrine ou e-commerce) structurées pour la conversion. En alliant une base technique irréprochable et nos process IA, nous créons un outil fiable, rapide et conçu pour générer des leads qualifiés.",
    gradient: "from-ocean to-accent",
    glowColor: "var(--ocean)",
    href: "/creation-site-internet",
  },
  {
    icon: Search,
    title: "Acquisition de Trafic (SEO & SEA)",
    description:
      "Nous attirons ceux qui vous cherchent déjà. À travers une stratégie de référencement naturel (SEO) pérenne et des campagnes publicitaires ciblées (SEA), nous pilotons votre visibilité par la donnée. L'objectif : un trafic qualifié et un retour sur investissement transparent et maîtrisé.",
    gradient: "from-ocean-light to-ocean",
    glowColor: "var(--ocean-light)",
    href: "/referencement-seo",
  },
  {
    icon: Palette,
    title: "Branding & Identité Visuelle",
    description:
      "L'expertise ne suffit plus si elle ne se voit pas. Nous structurons une identité visuelle forte et une communication cohérente. Plus qu'un simple \"beau design\", nous créons un discours de marque professionnel et rassurant qui installe votre autorité et votre crédibilité sur votre marché.",
    gradient: "from-ocean to-accent",
    glowColor: "var(--ocean)",
    href: "/agence-communication",
  },
];

export function ServicesTripartite() {
  const { trigger } = useHaptics();

  return (
    <section
      id="nos-services"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_60%)] opacity-[0.04]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-ocean/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            NOS EXPERTISES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Trois leviers stratégiques pour
            <br className="hidden sm:block" />
            <span className="font-heading italic text-ocean-light">
              structurer votre croissance.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Nous alignons la technique, l&apos;acquisition de trafic et votre image de marque pour transformer votre présence en ligne en un véritable actif commercial, mesurable et performant.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${
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
              <Link 
                href={service.href} 
                className="block h-full"
                onClick={() => trigger("light")}
              >
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

                  <div className="relative flex flex-col h-full">
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-ocean transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-8 grow">
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
