"use client";
import { PricingPageFactory } from "./PricingPageFactory";
import { PricingCard } from "./PricingCard";
import { 
  PRICING_COM, 
  PRICING_FAQS,
  PRICING_COM_IDENTITY,
  PRICING_COM_MEDIA,
  PRICING_COM_ADS
} from "@/lib/data";
import { Palette, Camera, Target } from "lucide-react";
import { PedagogicBlock } from "../pedagogic/PedagogicBlock";
import { BreadcrumbItem } from "@/lib/breadcrumbs";


export function PricingComClient({ breadcrumbItems }: { breadcrumbItems?: BreadcrumbItem[] }) {

  return (
    <>
      {/* AIDA: Attention (Title/Hero) -> Interest (Pedagogic) -> Action (Pricing) */}
      <PricingPageFactory
        title="Image de Marque & Perception"
        subtitle="Vous n'aurez jamais une deuxième chance de faire une bonne première impression. Donnez à votre business l'allure d'un leader."
        badge={{ icon: Palette, text: "Branding & Design" }}
        plans={PRICING_COM}
        faqs={PRICING_FAQS}
        breadcrumbItems={breadcrumbItems}
      >
        {/* AIDA: Interest - WHY */}
        <div className="relative py-20 bg-background/50">
          <div className="container px-4 mx-auto">
            <PedagogicBlock 
              title="L'Onde de Choc Visuelle"
              subtitle="L'impact se joue en 0.05 seconde."
              description="Votre image de marque est la première vague qui touche vos clients. Elle doit être puissante, claire et mémorable. Ne laissez pas votre identité se diluer dans la masse. Créez une onde de choc qui résonne."
              icon={<Palette />}
              benefits={[
                "Perception Premium : valorisez votre offre",
                "Marque Mémorable : ancrez-vous dans les esprits",
                "Cohérence Totale : du web au print"
              ]}
            />
          </div>
        </div>
      </PricingPageFactory>

      <div className="relative z-10 py-20 bg-background/50 border-t border-white/5">
        <div className="container px-4 mx-auto space-y-32">
          
          {/* Identity Section */}
          <div>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-medium mb-6">
                <Palette className="w-3 h-3" />
                <span>Branding & Print</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Identité Visuelle
              </h2>
              <p className="text-muted-foreground text-lg">
                Au-delà du digital : nous créons l&apos;univers graphique complet de votre marque, du logo à la carte de visite.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {PRICING_COM_IDENTITY.map((plan, index) => (
                 <PricingCard key={index} plan={plan} index={index} />
              ))}
            </div>
          </div>

          {/* Media Section */}
          <div>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-xs font-medium mb-6">
                <Camera className="w-3 h-3" />
                <span>Photo & Vidéo</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Production Contenu
              </h2>
              <p className="text-muted-foreground text-lg">
                Des visuels professionnels pour humaniser votre communication et engager votre audience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {PRICING_COM_MEDIA.map((plan, index) => (
                 <PricingCard key={index} plan={plan} index={index} />
              ))}
            </div>
          </div>

          {/* Ads Section */}
          <div>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-medium mb-6">
                <Target className="w-3 h-3" />
                <span>Publicité & Ads</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Acquisition Payante
              </h2>
              <p className="text-muted-foreground text-lg">
                Accélérez vos résultats avec des campagnes publicitaires ciblées sur Google et les réseaux sociaux.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {PRICING_COM_ADS.map((plan, index) => (
                 <PricingCard key={index} plan={plan} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
