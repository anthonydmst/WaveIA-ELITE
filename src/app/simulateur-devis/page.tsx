import { Metadata } from "next";
import { CostSimulator } from "@/components/sections/simulator/CostSimulator";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { PedagogicBlock } from "@/components/sections/pedagogic/PedagogicBlock";
import { DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Simulateur de Devis en Ligne | WaveIA",
  description: "Estimez le coût de votre projet web, SEO ou communication en quelques clics. Transparence totale, prix garantis.",
};

export default function SimulatorPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <BreadcrumbSchema items={generateBreadcrumbs("/simulateur-devis")} />
      
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Estimez votre <span className="text-gradient">investissement</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Obtenez une idée précise du budget nécessaire pour votre projet. 
          Selectionnez vos besoins, nous calculons le reste.
        </p>
      </div>

      <CostSimulator />
      
      {/* Explain Pricing Logic */}
      <div className="container mx-auto px-4 mt-32">
        <PedagogicBlock 
          title="Comprendre Votre Investissement"
          subtitle="Pourquoi ces prix ?"
          description="Le Digital n'est pas une dépense, c'est un investissement qui génère du retour. Mais comment se calcule un prix juste ? Voici ce qui compose votre devis, sans langue de bois."
          icon={<DollarSign />}
          benefits={[
            "Chaque heure de développement produit un actif que VOUS possédez (code source)",
            "Un site rapide génère + de conversions qu'un site lent (ROI mesurable)",
            "La maintenance évite les pannes qui vous font perdre des ventes"
          ]}
        />
      </div>
    </main>
  );
}
