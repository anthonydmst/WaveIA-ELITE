"use client";
import { PricingPageFactory } from "./PricingPageFactory";
import { PricingCard } from "./PricingCard";
import { 
  PRICING_WEB, 
  PRICING_ADDONS, 
  PRICING_FAQS,
  PRICING_WEB_MAINTENANCE,
  PRICING_WEB_REDESIGN 
} from "@/lib/data";
import { ShieldCheck, RefreshCw, Zap, Rocket } from "lucide-react";
import { TechnoTranslator } from "../pedagogic/TechnoTranslator";
import { PedagogicBlock } from "../pedagogic/PedagogicBlock";
import { BreadcrumbItem } from "@/lib/breadcrumbs";

export function PricingWebClient({ breadcrumbItems }: { breadcrumbItems?: BreadcrumbItem[] }) {

  return (
    <>
      {/* AIDA: Attention (Title/Hero) -> Interest (Pedagogic) -> Desire (Tech) -> Action (Pricing) */}
      <PricingPageFactory
        title="Votre Vitrine Digitale"
        subtitle="Plus qu'un site internet : une machine à convaincre. Vitesse, design et conversion pour transformer vos visiteurs en clients."
        badge={{ icon: Rocket, text: "Site Web & E-Commerce" }}
        plans={PRICING_WEB}
        addons={PRICING_ADDONS}
        faqs={PRICING_FAQS}
        breadcrumbItems={breadcrumbItems}
      >
        {/* AIDA: Interest - WHY */}
        <div className="relative py-20 bg-background/50">
          <div className="container px-4 mx-auto">
             <PedagogicBlock 
              title="Votre Présence en Mouvement"
              subtitle="Un site statique est un site mort. Surfez sur la croissance."
              description="Dans l'océan numérique, ceux qui ne bougent pas coulent. Votre site WaveIA est conçu pour anticiper les vagues : ultra-rapide, fluide, et taillé pour convertir chaque visiteur en opportunité."
              icon={<Zap />}
              benefits={[
                "Un commercial digital actif 24/7/365",
                "Crédibilité instantanée : l'effet 'Wahou' garanti",
                "Machine à leads : capturez le flux de visiteurs"
              ]}
            />
          </div>
        </div>

        {/* AIDA: Desire - HOW/WHAT */}
        <div className="relative z-10 py-20 bg-background/50 border-t border-border">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <TechnoTranslator 
                  title="On traduit le jargon pour vous" 
                  terms={[
                    {
                      tech: "Next.js & React",
                      human: "Vitesse Instantanée",
                      description: "Fini les chargements interminables. Votre site s'affiche en un clin d'œil, ce qui retient vos clients et plaît à Google (qui déteste attendre)."
                    },
                    {
                      tech: "Vercel Hosting",
                      human: "Site Toujours En Ligne",
                      description: "Une infrastructure de classe mondiale. Votre site ne plante pas, même si vous passez à la télé. C'est la fiabilité utilisée par Uber ou Airbnb."
                    },
                    {
                      tech: "Code Propriétaire",
                      human: "Liberté Totale",
                      description: "Vous êtes chez vous. Contrairement à Wix ou Shopify, vous possédez votre site à 100%. Vous pouvez partir avec les clés quand vous voulez."
                    },
                    {
                      tech: "Responsive Design",
                      human: "Parfait sur Mobile",
                      description: "60% de vos clients sont sur téléphone. Votre site s'adapte comme une application native pour une expérience fluide partout."
                    }
                  ]}
              />
            </div>
          </div>
        </div>
      </PricingPageFactory>
          
      <div className="relative z-10 py-20 bg-background/50 border-t border-border">
        <div className="container px-4 mx-auto space-y-32">
          
          {/* Maintenance Section */}
          <div>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium mb-6">
                <ShieldCheck className="w-3 h-3" />
                <span>Sérénité Totale</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Maintenance & Hébergement
              </h2>
              <p className="text-muted-foreground text-lg">
                Concentrez-vous sur votre business, on s&apos;occupe de la technique. Sécurité, mises à jour et performances garanties.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {PRICING_WEB_MAINTENANCE.map((plan, index) => (
                 <PricingCard key={index} plan={plan} index={index} />
              ))}
            </div>
          </div>

          {/* Redesign Section */}
          <div>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-medium mb-6">
                <RefreshCw className="w-3 h-3" />
                <span>Transformation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Refonte & Migration
              </h2>
              <p className="text-muted-foreground text-lg">
                Votre site actuel est lent ou vieillissant ? Offrez-lui une seconde jeunesse avec nos offres de refonte.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {PRICING_WEB_REDESIGN.map((plan, index) => (
                 <PricingCard key={index} plan={plan} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
