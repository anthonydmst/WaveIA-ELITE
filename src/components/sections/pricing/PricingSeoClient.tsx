"use client";
import { PricingPageFactory } from "./PricingPageFactory";
import { PricingCard } from "./PricingCard";
import { 
  PRICING_SEO, 
  PRICING_CONTENT, 
  PRICING_FAQS,
  PRICING_SEO_AUDIT,
  PRICING_SEO_LOCAL
} from "@/lib/data";
import { Search, PenTool, Sparkles, MapPin, Target, TrendingUp } from "lucide-react";
import { TechnoTranslator } from "../pedagogic/TechnoTranslator";
import { PedagogicBlock } from "../pedagogic/PedagogicBlock";
import { BreadcrumbItem } from "@/lib/breadcrumbs";

export function PricingSeoClient({ breadcrumbItems }: { breadcrumbItems?: BreadcrumbItem[] }) {

  const promoAnnouncement = (
    <div className="inline-flex items-center gap-3 px-4 py-2 bg-ocean/10 border border-ocean/20 rounded-2xl text-ocean text-sm font-medium backdrop-blur-sm shadow-sm transition-all hover:bg-ocean/15">
      <Sparkles className="w-4 h-4" />
      <p>
        <span className="font-bold">OFFRE EXCLUSIVE :</span> 
        Audit SEO complet (300€) <span className="text-white font-bold underline decoration-ocean underline-offset-4">OFFERT</span> pour tout engagement {">"} 4 mois.
      </p>
    </div>
  );

  return (
    <>
      {/* AIDA: Attention (Title/Hero) -> Interest (Pedagogic) -> Desire (Tech) -> Action (Pricing) */}
      <PricingPageFactory
        title="Visibilité & Croissance Google"
        subtitle="Ne cherchez plus des clients, faites en sorte qu'ils vous trouvent. Une stratégie claire pour dominer votre marché local."
        badge={{ icon: Target, text: "Acquisition Clients" }}
        plans={PRICING_SEO}
        faqs={PRICING_FAQS}
        promoBanner={promoAnnouncement}
        breadcrumbItems={breadcrumbItems}
      >
        {/* AIDA: Interest - WHY */}
        <div className="relative py-20 bg-background/50">
          <div className="container px-4 mx-auto">
            <PedagogicBlock 
              title="Dominez la Marée Montante"
              subtitle="Google est l'océan. Nous sommes votre capitaine."
              description="93% des parcours clients commencent par une recherche. Sans SEO, vous êtes une île déserte au milieu du Pacifique. Avec WaveIA, devenez le phare incontournable que tout le monde voit depuis la côte."
              icon={<TrendingUp />}
              benefits={[
                "Visibilité durable : ancrez-vous en première page",
                "Trafic qualifié : attirez le bon courant de prospects",
                "ROI exponentiel : les vagues travaillent pour vous"
              ]}
            />
          </div>
        </div>

        {/* AIDA: Desire - HOW/WHAT */}
        <div className="relative z-10 py-20 bg-background/50 border-t border-border">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <TechnoTranslator 
                  title="Le SEO sans charabia" 
                  terms={[
                    {
                      tech: "Netlinking / Backlinks",
                      human: "Bouche-à-oreille Digital",
                      description: "Imaginez que le journal 'Le Monde' parle de vous. Google voit cela comme un vote de confiance puissant. Plus vous avez de recommandations de qualité, plus vous montez."
                    },
                    {
                      tech: "Audit Technique",
                      human: "Contrôle Technique du Site",
                      description: "Comme pour une voiture, on vérifie sous le capot. Si Google n'arrive pas à 'lire' votre site à cause de bugs invisibles, il ne vous montrera pas."
                    },
                    {
                      tech: "Mots-clés Transactionnels",
                      human: "Clients Prêts à Acheter",
                      description: "On ne veut pas juste du trafic, on veut des ventes. On cible les gens qui cherchent 'Plombier Urgence' (achat) plutôt que 'Comment réparer fuite' (tuto)."
                    },
                    {
                      tech: "SERP & Ranking",
                      human: "Votre Place en Rayon",
                      description: "Google est un supermarché. Être en page 2, c'est être dans la réserve. Notre travail est de vous mettre en tête de gondole, à hauteur des yeux."
                    }
                  ]}
              />
            </div>
          </div>
        </div>
      </PricingPageFactory>

      <div className="relative z-10 py-20 bg-background/50">
        <div className="container px-4 mx-auto space-y-32">
          
          {/* Pedagogic Block: The Google Cake */}
          <PedagogicBlock 
            title="L'Algorithme Décrypté"
            subtitle="Pas de magie, juste de l'hydrodynamisme."
            description="Pour monter en haut de la vague Google, il faut trois forces alignées : une technique insubmersible (le site), un contenu propulseur (le moteur) et une autorité reconnue (le vent). Nous maîtrisons les courants pour vous porter au sommet."
            icon={<TrendingUp />}
            benefits={[
              "Technique clean : plaire aux robots Google",
              "Contenu roi : répondre à l'intention de recherche",
              "Autorité forte : devenir la référence du secteur"
            ]}
          />
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-medium mb-6">
              <PenTool className="w-3 h-3" />
              <span>Contenu & Rédaction</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stratégie Éditoriale
            </h2>
            <p className="text-muted-foreground text-lg">
              Le contenu est roi. Nos packs de rédaction optimisée pour nourrir votre SEO et convertir vos visiteurs.
            </p>
          </div>
          
          {/* Re-using the grid structure manually for the second section to ensure visual consistency */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {PRICING_CONTENT.map((plan, index) => (
               <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>

          {/* Audit & Local Section */}
          <div className="space-y-32">
             {/* Audit Section */}
            <div>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium mb-6">
                  <Search className="w-3 h-3" />
                  <span>Diagnostic</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Audits SEO
                </h2>
                <p className="text-muted-foreground text-lg">
                  Avant d&apos;avancer, il faut savoir d&apos;où on part. Nos audits révèlent tous les freins à votre croissance.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {PRICING_SEO_AUDIT.map((plan, index) => (
                  <PricingCard key={index} plan={plan} index={index} />
                ))}
              </div>
            </div>

            {/* Local Section */}
            <div>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium mb-6">
                  <MapPin className="w-3 h-3" />
                  <span>SEO Local & GMB</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Visibilité Locale
                </h2>
                <p className="text-muted-foreground text-lg">
                  Soyez le premier choix des clients de votre ville sur Google Maps.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {PRICING_SEO_LOCAL.map((plan, index) => (
                  <PricingCard key={index} plan={plan} index={index} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

// Minimal local component for the second section if not exported from Factory.
// Ideally PricingPageFactory should export PricingCard. 
// I will check if PricingCard is exported from Factory or defined locally.
// If it works, great. If not, I might need to duplicating the card code or exporting it. 
// Let's first CHECK PricingPageFactory.tsx. 
// I CANNOT blindly write this without checking exports.

