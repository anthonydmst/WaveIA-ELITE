"use client";

import { useState } from "react";


import { Link } from "next-view-transitions";
import Image from "next/image";
import { ArrowRight, Globe, ShoppingCart, Palette, TrendingUp, Star, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbItem } from "@/lib/breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";

import { AgencyStatsBlock } from "@/components/templates/AgencyStatsBlock";
import { TestimonialsGrid } from "@/components/templates/TestimonialsGrid";
import { AGENCY_STATS, AGENCY_TESTIMONIALS, PROJECTS_SHOWCASE, LOCAL_CITIES } from "@/lib/data";

const categories = [
  { id: "all", label: "Tous" },
  { id: "sites", label: "Sites web" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "branding", label: "Identité visuelle" },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  ShoppingCart,
  Palette,
};

export function RealisationsPageClient({ items }: { items?: BreadcrumbItem[] }) {

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_SHOWCASE
      : PROJECTS_SHOWCASE.filter((p) => p.category === activeCategory);

  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-20 light:opacity-30" />
          <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-50 light:block hidden" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex justify-start">
             <Breadcrumbs items={items} />

          </div>
          <div className="text-center max-w-3xl mx-auto animate-hero-fade-up">

            <span className="text-ocean text-sm font-semibold uppercase tracking-wider">
              Portfolio
            </span>
            <SectionHeader as="h1" size="page" align="center" className="mt-4 mb-6">
              Des résultats, <span className="text-gradient">pas juste des pixels</span>
            </SectionHeader>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pour dominer votre marché local, un &quot;joli site&quot; ne suffit plus. 
              Découvrez comment nous transformons les visiteurs en clients pour les entreprises de la Côte Basque.
            </p>
          </div>

          
          {/* Hero Stats */}
          <AgencyStatsBlock metrics={AGENCY_STATS.metrics} variant="hero" />
        </div>
      </section>

      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 animate-hero-fade-up [animation-delay:200ms]">

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-background"
                    : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Methodology Section (Desire) */}
      <section className="relative py-12 lg:py-20 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-12">
             <span className="text-ocean text-sm font-semibold uppercase tracking-wider">Notre Secret</span>
             <SectionHeader as="h2" size="section" align="center" className="mt-2">Comment nous <span className="text-gradient">garantissons</span> ces résultats ?</SectionHeader>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "1. Audit IA", desc: "Analyse algorithmique de vos concurrents et opportunités inexploitées.", icon: TrendingUp },
               { title: "2. Design Persuasif", desc: "UX psychologique conçue pour guider l'utilisateur vers l'achat.", icon: Star },
               { title: "3. Tech Ultra-Rapide", desc: "Next.js & Vercel pour un chargement instantané (Google adore).", icon: Globe }
             ].map((item, i) => (
                <div 
                  key={i} 
                  className={`p-6 bg-card/50 rounded-xl border border-border hover:border-ocean/30 transition-colors group animate-in ${i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-ocean" />
                    </div>
                    <SectionHeader as="h3" size="subsection">
                      {item.title}
                    </SectionHeader>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


              {filteredProjects.map((project) => {
                const IconComponent = iconMap[project.category === "ecommerce" ? "ShoppingCart" : project.category === "branding" ? "Palette" : "Globe"] || Globe;
                return (
                  <article
                    key={project.id}
                    className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-ocean/30 transition-all hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] animate-in"
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
                      <div className={`absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-linear-to-br ${project.color} rounded-xl`}>
                        <IconComponent className="w-5 h-5 text-background" />
                      </div>
                      {/* City Badge */}
                      {project.city && (
                        <div className="absolute top-4 right-4 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-ocean" />
                          {project.city}
                        </div>
                      )}
                    </div>
                    <div className="relative p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-foreground/5 rounded-full text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <SectionHeader as="h3" size="subsection" className="mb-2 group-hover:text-ocean transition-colors">
                        {project.title}
                      </SectionHeader>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </article>

                );
              })}

          </div>

        </div>
      </section>

      {/* Local Impact Section (Interest) */}
      <section className="relative py-20 lg:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <SectionHeader as="h2" size="section" align="center" className="mb-6">
              L&apos;impact <span className="text-ocean">Local</span> avant tout
            </SectionHeader>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Nous ne travaillons pas pour des startups anonymes de la Silicon Valley. 
              Nous propulsons les restaurants de <strong>Biarritz</strong>, les artisans d&apos;<strong>Anglet</strong> et les commerçants de <strong>Bayonne</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
               {LOCAL_CITIES.slice(0, 8).map((city) => (
                 <Link 
                   key={city.slug} 
                   href={`/creation-site-internet/${city.slug}`}
                   className="px-4 py-2 rounded-full bg-foreground/5 border border-border font-medium text-muted-foreground hover:border-ocean/30 hover:text-ocean transition-all"
                 >
                   📍 {city.name}
                 </Link>
               ))}
            </div>
        </div>
      </section>

      {/* Testimonials: only rendered once real, client-approved quotes exist */}
      {AGENCY_TESTIMONIALS.length > 0 && (
        <TestimonialsGrid
          testimonials={AGENCY_TESTIMONIALS.slice(0, 2)}
          title="Ils nous font confiance"
          showCTA={false}
        />
      )}

      {/* Stats Section */}
      <AgencyStatsBlock 
        title="Nos Résultats en Chiffres"
        metrics={AGENCY_STATS.metrics}
      />

      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl animate-scale-in">
            <div className="absolute inset-0 bg-linear-to-r from-ocean via-accent to-ocean-light animate-gradient" />
            <div className="absolute inset-0 bg-noise opacity-10" />
            <div className="relative px-8 py-16 lg:py-20 lg:px-16 text-center">
              <SectionHeader as="h2" size="section" align="center" className="text-background mb-4">
                Votre projet est le prochain ?
              </SectionHeader>
              <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
                Rejoignez les entrepreneurs de la Côte Basque qui nous font
                confiance. Consultation gratuite pour discuter de vos objectifs.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:bg-background/90 transition-colors"
              >
                Démarrer mon projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
