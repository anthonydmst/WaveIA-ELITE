"use client";

import { 
  CheckCircle2, 
  Search, 
  Rocket, 
  Users,
  BrainCircuit,
  ArrowRight,
  Target,
  ShieldAlert,
  Handshake
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Link } from "next-view-transitions";

export function SuccessStepsBlock() {
  const steps = [
    {
      title: "Partie 1",
      subtitle: "Auditer votre écosystème, lever les verrous techniques et clarifier votre vision",
      icon: Search,
      text: "Cette première étape est le socle de votre réussite : votre niveau d'implication ici détermine la performance finale de votre futur site. Nous allons déconstruire vos idées reçues sur le web pour que vous soyez prêt(e) à franchir un cap et à vous libérer des freins techniques ou des blocages marketing qui entravent votre croissance jusqu'ici."
    },
    {
      title: "Partie 2",
      subtitle: "Architecture stratégique avancée et création de votre tunnel de conversion",
      icon: BrainCircuit,
      text: "Ce processus de remise en question est parfois intense, mais il est le seul moyen de construire un outil qui se démarque réellement de la concurrence. Nous t'aiderons, grâce à des audits de performance et une approche orientée utilisateur, à comprendre ce qui freine tes ventes ou ta visibilité aujourd'hui pour aller vers une plateforme qui booste ton activité à 100%."
    },
    {
      title: "Partie 3",
      subtitle: "Déploiement de votre site internet et activation de votre stratégie de croissance",
      icon: Rocket,
      text: "Cette étape finale est la concrétisation de toute la stratégie, de l'identité visuelle et des optimisations que nous avons élaborées ensemble. Vous allez capitaliser sur cette dynamique pour activer un plan de lancement à la fois ambitieux et réaliste. À l'issue de cette phase, vous aurez toutes les cartes en main pour concrétiser le succès de votre activité et enfin OSER briller sur le web."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-hero-fade-up">
          <SectionHeader as="h2" size="section">
            On détaille les <span className="font-heading italic text-ocean-text">étapes de votre succès</span>
          </SectionHeader>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-glass-bg backdrop-blur-sm border border-glass-border p-8 rounded-2xl relative group hover:border-ocean/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-6xl font-black text-foreground/[0.03] absolute top-4 right-6 pointer-events-none group-hover:text-ocean/[0.05] transition-colors">
                0{idx + 1}
              </div>
              <div className="w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center mb-6 text-ocean-light group-hover:bg-primary group-hover:text-white transition-colors">
                <step.icon className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold tracking-wider text-ocean mb-2 uppercase">{step.title}</div>
              <h3 className="text-xl font-bold mb-4">{step.subtitle}</h3>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalExpertsBlock() {
  return (
    <section className="py-24 relative bg-card/20 overflow-hidden border-y border-glass-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-hero-fade-up">
          <SectionHeader as="h2" size="section">
            Vos <span className="font-heading italic text-ocean-text">Experts Locaux</span> de Proximité
          </SectionHeader>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Anthony */}
          <div className="bg-glass-bg backdrop-blur-sm border border-glass-border p-8 md:p-10 rounded-2xl flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sunset to-ocean-dark flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">AD</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Anthony DAMESTOY</h3>
            <div className="text-sunset font-semibold mb-6">Le Stratège</div>
            <p className="text-muted-foreground leading-relaxed">
              Fort d'une solide expérience en tant que Responsable Commercial (B2B/B2C) et en Marketing Stratégique, il est le cerveau analytique de votre projet. Son obsession ? La conversion et la pérennité de votre business. Son objectif n'est pas seulement de lancer votre site, mais de construire une stratégie qui permet à votre activité de se développer et de durer dans le temps.
            </p>
          </div>

          {/* Julien */}
          <div className="bg-glass-bg backdrop-blur-sm border border-glass-border p-8 md:p-10 rounded-2xl flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ocean to-accent flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">JH</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Julien HOANG</h3>
            <div className="text-ocean-light font-semibold mb-6">L'Architecte Digital</div>
            <p className="text-muted-foreground leading-relaxed">
              Curieux insatiable et passionné par l'optimisation des processus, il est le maître d'œuvre qui transforme la stratégie en une réalité numérique fluide et puissante. Pour lui, un site ne doit pas seulement être beau : il doit être une machine de guerre technique. Expert en référencement naturel, il optimise chaque ligne de code pour que votre site soit non seulement aimé par vos utilisateurs, mais surtout propulsé en tête des résultats de recherche.
            </p>
          </div>
        </div>

        <div className="bg-ocean/10 border border-ocean/20 rounded-xl p-6 text-center max-w-3xl mx-auto flex items-center justify-center gap-4">
          <Users className="w-6 h-6 text-ocean shrink-0" />
          <p className="text-foreground font-medium text-lg">
            Nous nous déplaçons directement dans vos locaux pour répondre à vos questions de vive voix et vous aider à franchir chaque palier stratégique.
          </p>
        </div>
      </div>
    </section>
  );
}


export function RevolutionCTABlock() {
  return (
    <section className="py-12 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-linear-to-br from-ocean/20 to-accent/5 border border-ocean/30 rounded-3xl p-10 lg:p-16 text-center shadow-2xl shadow-ocean/5 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,var(--ocean)_0%,transparent_60%)] opacity-10 pointer-events-none blur-3xl" />
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 relative z-10 text-foreground">
            Prêt à révolutionner votre présence digitale ?
          </h2>
          <p className="text-xl text-ocean-light font-medium mb-8 uppercase tracking-wide">
            Réservez votre audit et démarrez votre projet 2026
          </p>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Proposition tarifaires : différentes formules suivant le type d'accompagnement. Des sites premiums à moins de 1000€ grâce à la puissance de l'Intelligence Artificielle.
          </p>
          
          <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-ocean-dark shadow-lg px-8 h-14 text-base relative z-10 group">
            <Link href="/tarifs">
              Voir nos formules d'accompagnement
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function AgencyHowItWorksBlock() {
  const steps = [
    {
      title: "Choisissez votre niveau d'impact",
      text: "Consultez les spécificités de chaque pack pour identifier l'offre qui correspond à l'ambition de votre business : Essentiel, Performance ou Élite ?"
    },
    {
      title: "Lancez votre audit de positionnement",
      text: "Complétez votre profil stratégique en quelques minutes. Nos experts analyseront votre marché et votre présence actuelle pour s'assurer que la structure de votre futur projet est parfaitement alignée avec les réalités de votre secteur avant même le premier coup de pinceau digital."
    },
    {
      title: "L'Immersion Stratégique",
      text: "C'est ici que l'aventure commence réellement. Nos experts vous rencontrent lors d'une session de travail dédiée pour définir ensemble chaque jalon de votre projet."
    }
  ];

  return (
    <section className="py-24 relative bg-card/10 overflow-hidden border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Comment ça Marche */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <SectionHeader as="h2" size="section">
              <span className="font-heading italic text-ocean-text">Comment</span> ça marche
            </SectionHeader>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-glass-bg border border-glass-border">
                <div className="w-10 h-10 rounded-full bg-ocean/20 text-ocean flex items-center justify-center font-black shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agency Mission & Support */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-24 h-24 text-ocean" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 relative z-10">WAVE IA : L'Agence qui vous donne toutes les clés</h3>
            <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
              Chez Wave IA, notre mission va bien au-delà de la simple ligne de code. Nous sommes l'accélérateur qui permet à chaque entrepreneur et chaque entreprise de réaliser son plein potentiel et de bénéficier des meilleures chances de réussite dans l'ère digitale.
            </p>
          </div>

          <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldAlert className="w-24 h-24 text-sunset" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 relative z-10">Soutien face aux blocages digitaux</h3>
            <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
              Nous intervenons spécifiquement auprès des entrepreneurs en "souffrance technique" (sentiment d'être dépassé, manque de clarté, peur de l'obsolescence). Nous agissons comme le partenaire solide qui vous manque pour restaurer l'estime de votre projet.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
