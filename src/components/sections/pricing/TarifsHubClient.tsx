"use client";



import { Link } from "next-view-transitions";
import { 
  Laptop, 
  Search, 
  Megaphone, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbItem } from "@/lib/breadcrumbs";


const pricingCategories = [
  {
    icon: Laptop,
    title: "Création Site Internet",
    description: "Sites vitrines, e-commerce et applications web sur-mesure.",
    price: "Dès 990€",
    href: "/tarifs/creation-site-internet",
    color: "from-ocean to-accent",
    delay: 0.1
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description: "Audits, stratégie de contenu et netlinking pour dominer Google.",
    price: "Dès 490€",
    href: "/tarifs/referencement-seo",
    color: "from-accent to-ocean-light",
    delay: 0.2
  },
  {
    icon: Megaphone,
    title: "Agence Communication",
    description: "Identité visuelle, branding et stratégie réseaux sociaux.",
    price: "Dès 990€",
    href: "/tarifs/agence-communication",
    color: "from-ocean-light to-ocean",
    delay: 0.3
  },
];

export function TarifsHubClient({ items }: { items?: BreadcrumbItem[] }) {

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen flex flex-col justify-center">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--ocean)_0%,transparent_60%)] opacity-10 light:opacity-20" />
          <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-40 light:block hidden" />
          <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="mb-8 flex justify-start">
             <Breadcrumbs items={items} />

          </div>

          <div className="text-center max-w-3xl mx-auto mb-20 animate-hero-fade-up">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              Nos Offres
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mt-4 mb-6">
              Quel est votre besoin <br/>
              <span className="text-gradient">aujourd&apos;hui ?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Une grille tarifaire transparente, adaptée à chaque étape de votre croissance.
            </p>
          </div>


          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingCategories.map((cat, index) => (
              <div key={index} className="group relative animate-hero-fade-up" style={{ animationDelay: `${cat.delay * 1000}ms` }}>

                <Link href={cat.href} className="block h-full">
                  <div className={`absolute inset-0 bg-linear-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl`} />
                  
                  <div className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border overflow-hidden transition-all duration-500 group-hover:border-ocean/30 group-hover:translate-y-[-4px] group-hover:shadow-2xl">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-8 border border-border group-hover:scale-110 transition-transform duration-500">
                      <cat.icon className="w-8 h-8 text-ocean group-hover:text-ocean transition-colors" />
                    </div>

                    <h2 className="text-2xl font-bold mb-4">{cat.title}</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-sm font-medium text-ocean">
                        {cat.price}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
