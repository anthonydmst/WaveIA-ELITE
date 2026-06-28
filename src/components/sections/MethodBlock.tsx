"use client";

import { useRef } from "react";
import { CheckCircle2, TrendingUp, Search, Palette, Code, Target, Anchor, Shield, Users, Zap, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MethodBlock() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: "Audit & Cadrage Stratégique",
      desc: "Nous ne commençons jamais par dessiner. Nous analysons d'abord votre modèle économique, vos cibles et l'écosystème de vos concurrents. Qu'il s'agisse d'un rendez-vous physique ou en visio, ce cadrage permet de définir des objectifs de conversion clairs et de poser les fondations de votre futur outil de croissance.",
      icon: Search,
    },
    {
      title: "UX/UI Design & Parcours de Conversion",
      desc: "Fini les templates rigides. Nous concevons des interfaces sur-mesure dont l'unique but est de guider vos visiteurs vers l'action (contact, achat, devis). Chaque maquette est pensée pour refléter l'autorité de votre marque tout en offrant une navigation parfaitement fluide sur mobile comme sur ordinateur.",
      icon: Palette,
    },
    {
      title: "Développement Hautes Performances & Process IA",
      desc: "C'est ici que notre maîtrise technologique fait la différence. L'assistance par l'IA nous permet d'automatiser les tâches de développement répétitives avec une précision d'orfèvre. Résultat : un code plus propre, des délais de livraison accélérés, et un budget intelligemment alloué aux fonctionnalités qui génèrent vraiment du chiffre d'affaires.",
      icon: Code,
    },
    {
      title: "Recettage & Assurance Qualité",
      desc: "Avant toute mise en ligne, votre site passe par une phase de tests intensifs (recettage). Vitesse de chargement, affichage sur tous les navigateurs, sécurité des formulaires et fluidité des paiements : nous traquons la moindre friction pour vous livrer une plateforme techniquement irréprochable.",
      icon: Shield,
    },
    {
      title: "Lancement, SEO & Pilotage Continu",
      desc: "Le lancement n'est que le début. Votre site est déployé avec une architecture nativement optimisée pour Google (SEO). Surtout, nous mettons en place les outils de suivi analytique qui nous permettront de mesurer vos performances, d'analyser le comportement de vos prospects et d'itérer pour maximiser votre retour sur investissement dans la durée.",
      icon: TrendingUp,
    }
  ];

  const cards = [
    {
      title: "Investissement 100% optimisé",
      desc: "L'intégration de nos process IA réduit drastiquement les coûts de développement répétitifs. Votre budget est investi là où il crée un véritable ROI : la stratégie, l'UX et la conversion.",
      icon: Target
    },
    {
      title: "Déploiement accéléré",
      desc: "Le web n'attend pas. Grâce à nos workflows structurés, nous réduisons les délais de livraison. Votre plateforme est testée, optimisée et opérationnelle en quelques semaines, sans compromis sur la qualité.",
      icon: Clock
    },
    {
      title: "Haute performance technique",
      desc: "Un site lent fait fuir vos clients. Nous garantissons une architecture allégée, des temps de réponse ultra-rapides et un score PageSpeed de premier plan pour maximiser la rétention utilisateur.",
      icon: Zap
    },
    {
      title: "Proximité & Ancrage local",
      desc: "Implantés au cœur du tissu économique local (Bayonne, Biarritz, bassin de l'Adour), nous allions l'exigence technologique d'une agence nationale à la réactivité d'un partenaire de proximité.",
      icon: Anchor
    },
    {
      title: "Indépendance totale",
      desc: "Vous êtes l'unique propriétaire de votre code source et de vos données. Aucune dépendance toxique à une plateforme tierce : vous gardez le contrôle absolu sur votre outil de travail.",
      icon: Shield
    },
    {
      title: "Accompagnement humain dédié",
      desc: "L'Intelligence Artificielle propulse la technique, mais l'humain pilote la stratégie. Vous bénéficiez d'un chef de projet dédié, expert en acquisition, pour vous conseiller bien au-delà de la mise en ligne.",
      icon: Users
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Living ambient background */}
      <div className="absolute inset-0 bg-ambient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--ocean-glow)_0%,transparent_70%)] opacity-[0.10]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--ocean-glow-sec)_0%,transparent_50%)] opacity-[0.06]" />
      
      <div className="relative max-w-4xl mx-auto px-6 mb-20 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean-text text-sm font-semibold uppercase tracking-wider mb-6">
          Notre méthode
        </span>
        <SectionHeader as="h2" size="page" align="center" className="mt-4 mb-6 leading-tight">
          Un process structuré pour<br className="hidden sm:block" />
          <span className="italic text-gradient-brand font-heading ml-0 sm:ml-3">sécuriser votre investissement.</span>
        </SectionHeader>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          De l&apos;analyse de votre marché au pilotage de vos performances, notre process élimine le hasard pour garantir un site livré dans les temps et pensé pour la rentabilité.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 relative mb-12 flex flex-col items-center">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="w-full flex flex-col items-center">
              {/* Dot and Line Top (Arrow inside circle) */}
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_var(--ocean)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              </div>
              <div className="w-px h-12 bg-ocean/30 shrink-0" />

              {/* Step Content */}
              <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
                {/* Desktop: Alternate left/right. Mobile: Stack. */}
                {isEven ? (
                  <>
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <span className="text-[13px] text-muted-foreground uppercase tracking-widest font-medium">Étape</span>
                        <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-heading">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-tight">{step.title}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {step.desc}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <span className="text-[13px] text-muted-foreground uppercase tracking-widest font-medium">Étape</span>
                        <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-heading">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-tight">{step.title}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {step.desc}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Line Bottom */}
              <div className="w-px h-16 bg-ocean/30 shrink-0" />
            </div>
          );
        })}

        {/* Final dot before conclusion */}
        <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center shrink-0 z-10 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-ocean/50"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>

        {/* Final step */}
        <div className="relative flex flex-col items-center text-center mt-8">
          <div className="w-14 h-14 rounded-full bg-glass-bg border border-ocean/30 flex items-center justify-center z-10 mb-8 shadow-glow">
            <CheckCircle2 className="w-7 h-7 text-ocean" />
          </div>
          <SectionHeader as="h3" size="section" align="center" className="mb-4 font-heading text-gradient-brand">
            Le point de départ de votre croissance.
          </SectionHeader>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            Votre site web est en ligne, sans friction et sans mauvaise surprise. Plus qu&apos;une simple vitrine, vous disposez désormais d&apos;un actif commercial performant, pensé pour générer des résultats. Et nous restons à vos côtés pour la suite.
          </p>
        </div>
      </div>

      {/* 6 Reassurance Cards - 2 Columns Grid */}
      <div className="w-full max-w-5xl mx-auto relative px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="flex flex-col p-8 rounded-2xl shadow-card bg-glass-bg border border-glass-border backdrop-blur-md hover:border-ocean/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-ocean/10 flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-ocean" />
                </div>
                <p className="text-lg font-bold leading-tight">{card.title}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Hide scrollbar styles directly in component for simplicity */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
