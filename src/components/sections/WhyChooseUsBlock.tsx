"use client";

import { CheckCircle2, Calculator, Calendar, MousePointerClick, Lock, Bot, Sparkles, LineChart, Cpu, BarChart, MapPin, ArrowRight, Database } from "lucide-react";
import { Link } from "next-view-transitions";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyChooseUsBlock() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Living ambient background */}
      <div className="absolute inset-0 bg-ambient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,var(--ocean-glow)_0%,transparent_50%)] opacity-[0.10]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--ocean-glow-sec)_0%,transparent_50%)] opacity-[0.06]" />
      
      <div className="relative max-w-5xl mx-auto px-6 mb-16 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean-text text-sm font-semibold uppercase tracking-wider mb-6">
          Pourquoi nous choisir
        </span>
        <SectionHeader as="h2" size="page" align="center" className="mt-4 mb-6 leading-tight">
          Plus qu&apos;une agence web.<br className="hidden sm:block" />
          <span className="italic text-ocean-text font-heading ml-0 sm:ml-3">L&apos;ingénierie de votre croissance.</span>
        </SectionHeader>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          Nous ne livrons pas de simples &quot;cartes de visite digitales&quot;. Nous concevons des écosystèmes connectés où la technologie, l&apos;Intelligence Artificielle et la stratégie commerciale travaillent ensemble pour votre rentabilité.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 space-y-32 lg:space-y-40">
        {/* Section 1: Fonctionnalités */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeader as="h3" size="section" className="leading-tight">
              Un apporteur d&apos;affaires automatisé, <br className="hidden sm:block" />
              <span className="text-ocean-text">disponible 24h/7j.</span>
            </SectionHeader>
            <p className="text-muted-foreground text-lg">
              Au-delà d&apos;un design irréprochable, votre plateforme embarque des modules sur-mesure pour transformer l&apos;intérêt en action commerciale concrète :
            </p>
            <ul className="space-y-4 mt-6">
              {[
                { title: "Qualification de prospects", desc: "Des formulaires intelligents qui filtrent et qualifient vos leads avant même qu'ils ne vous contactent.", icon: CheckCircle2 },
                { title: "Chiffrage immédiat", desc: "Générateurs de devis automatiques pour répondre instantanément et raccourcir votre cycle de vente.", icon: Calculator },
                { title: "Prise de rendez-vous fluide", desc: "Synchronisation directe avec vos agendas pour éliminer les allers-retours par email.", icon: Calendar },
                { title: "Expériences interactives", desc: "Simulateurs 3D et configurateurs de prix pour engager vos visiteurs de manière ludique.", icon: MousePointerClick },
                { title: "Espaces privés", desc: "Accès conditionnés à des ressources premium en échange de données qualifiées (génération de base de données).", icon: Lock },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-ocean/10 flex items-center justify-center">
                    <item.icon className="w-3.5 h-3.5 text-ocean" />
                  </div>
                  <div>
                    <strong className="text-foreground">{item.title} : </strong>
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="#modules" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-ocean-dark text-white font-semibold transition-all shadow-glow">
                Découvrir nos modules sur-mesure
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-2xl border border-glass-border bg-glass-bg shadow-card p-8 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--ocean)_0%,transparent_60%)] opacity-10" />
            <div className="relative z-10 w-full space-y-4">
               {[
                 { text: "+ de prospects", icon: CheckCircle2, ml: "ml-0" },
                 { text: "+ de rendez-vous", icon: Calendar, ml: "ml-4 sm:ml-8" },
                 { text: "+ de devis transmis", icon: Calculator, ml: "ml-0" },
                 { text: "+ de personnalisation", icon: Sparkles, ml: "ml-4 sm:ml-8" },
                 { text: "+ de data exploitable", icon: Database, ml: "ml-0" },
               ].map((item, i) => (
                 <div key={i} className={`w-full rounded-xl bg-background/50 border border-ocean/20 flex items-center p-4 gap-4 backdrop-blur-sm shadow-sm hover:border-ocean/40 transition-colors ${item.ml}`}>
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-ocean/20 flex items-center justify-center">
                      <item.icon className="text-ocean w-6 h-6"/>
                    </div>
                    <div className="font-semibold text-lg text-foreground">
                      {item.text}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Section 2: IA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-full min-h-[400px] rounded-2xl border border-glass-border bg-glass-bg shadow-card p-8 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--ocean)_0%,transparent_60%)] opacity-10" />
            <div className="relative z-10 w-full grid grid-cols-2 gap-4">
               <div className="aspect-square rounded-xl bg-background/50 border border-ocean/20 flex flex-col items-center justify-center gap-3 backdrop-blur-sm p-4 text-center shadow-sm">
                 <Bot className="w-8 h-8 text-ocean" />
                 <span className="text-sm font-medium">Automatisation</span>
               </div>
               <div className="aspect-square rounded-xl bg-background/50 border border-ocean/20 flex flex-col items-center justify-center gap-3 backdrop-blur-sm p-4 text-center translate-y-4 shadow-sm">
                 <Sparkles className="w-8 h-8 text-ocean" />
                 <span className="text-sm font-medium">Personnalisation</span>
               </div>
               <div className="aspect-square rounded-xl bg-background/50 border border-ocean/20 flex flex-col items-center justify-center gap-3 backdrop-blur-sm p-4 text-center -translate-y-4 shadow-sm">
                 <LineChart className="w-8 h-8 text-ocean" />
                 <span className="text-sm font-medium">Autorité SEO</span>
               </div>
               <div className="aspect-square rounded-xl bg-background/50 border border-ocean/20 flex flex-col items-center justify-center gap-3 backdrop-blur-sm p-4 text-center shadow-sm">
                 <Cpu className="w-8 h-8 text-ocean" />
                 <span className="text-sm font-medium">Moteur IA</span>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 lg:pl-8">
            <SectionHeader as="h3" size="section" className="leading-tight">
              L&apos;Intelligence Artificielle au service de <span className="text-ocean-text">vos marges.</span>
            </SectionHeader>
            <p className="text-muted-foreground text-lg">
              Nous n&apos;utilisons pas l&apos;IA comme un simple mot à la mode, mais comme un véritable levier de productivité intégré à votre écosystème :
            </p>
            <ul className="space-y-4 mt-6">
              {[
                { title: "Automatisation administrative", desc: "Traitement des demandes, qualification des emails et génération de réponses pré-formatées.", icon: Bot },
                { title: "Personnalisation de l'expérience", desc: "Moteurs de recommandation poussant le bon produit ou service selon le profil du visiteur.", icon: Sparkles },
                { title: "Autorité SEO", desc: "Aide à la rédaction et à la structuration de vos contenus pour plaire en continu aux algorithmes de Google.", icon: LineChart },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-ocean/10 flex items-center justify-center">
                    <item.icon className="w-3.5 h-3.5 text-ocean" />
                  </div>
                  <div>
                    <strong className="text-foreground">{item.title} : </strong>
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3: Humain */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeader as="h3" size="section" className="leading-tight">
              Le circuit court : <br className="hidden sm:block" />
              <span className="text-ocean-text">deux experts, zéro intermédiaire.</span>
            </SectionHeader>
            <p className="text-muted-foreground text-lg">
              Oubliez les standards téléphoniques et les chefs de projet juniors qui découvrent votre dossier. Vous travaillez en direct avec un binôme de fondateurs aux compétences croisées :
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex gap-4 items-center p-4 rounded-xl bg-glass-bg border border-glass-border hover:border-ocean/50 transition-colors shadow-sm">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-ocean/10 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-ocean" />
                </div>
                <div>
                  <strong className="text-foreground block text-lg">Un expert Technique & IA</strong>
                  <span className="text-muted-foreground">Pour une architecture infaillible.</span>
                </div>
              </li>
              <li className="flex gap-4 items-center p-4 rounded-xl bg-glass-bg border border-glass-border hover:border-ocean/50 transition-colors shadow-sm">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-ocean/10 flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-ocean" />
                </div>
                <div>
                  <strong className="text-foreground block text-lg">Un expert Stratégie & Conversion</strong>
                  <span className="text-muted-foreground">Pour garantir la rentabilité.</span>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-5 rounded-xl border border-ocean/20 bg-ocean/5 flex gap-4">
               <MapPin className="w-6 h-6 text-ocean shrink-0 mt-0.5" />
               <p className="text-sm">
                 <strong className="text-foreground">Proximité locale :</strong> Disponibles pour des rendez-vous physiques au Pays Basque / Sud-Ouest, et pour un accompagnement continu bien au-delà de la mise en ligne.
               </p>
            </div>

            <div className="pt-4">
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-ocean-dark text-white font-semibold transition-all shadow-glow">
                Faire connaissance avec l&apos;équipe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px] rounded-2xl border border-glass-border bg-glass-bg shadow-card overflow-hidden flex items-center justify-center p-8">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--ocean)_0%,transparent_70%)] opacity-10" />
             <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center gap-7">
                <div className="flex -space-x-6">
                   <div className="w-24 h-24 rounded-full border-4 border-card bg-linear-to-br from-ocean/25 to-ocean/5 flex items-center justify-center shadow-lg">
                     <span className="font-bold text-2xl text-foreground">A</span>
                   </div>
                   <div className="w-24 h-24 rounded-full border-4 border-card bg-linear-to-br from-ocean/25 to-ocean/5 flex items-center justify-center shadow-lg">
                     <span className="font-bold text-2xl text-foreground">J</span>
                   </div>
                </div>
                <div>
                  <p className="text-2xl font-bold">Anthony &amp; Julien</p>
                  <p className="text-ocean-text font-medium text-lg">Fondateurs de WaveIA</p>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  &laquo;&nbsp;Vous échangez en direct avec les deux personnes qui conçoivent, codent et pilotent votre croissance. Aucun intermédiaire.&nbsp;&raquo;
                </p>
                <div className="flex items-center justify-center gap-5 w-full pt-6 border-t border-glass-border">
                   <div>
                     <p className="text-2xl font-bold text-foreground">2</p>
                     <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">Experts dédiés</p>
                   </div>
                   <div className="w-px h-10 bg-glass-border" />
                   <div>
                     <p className="text-2xl font-bold text-foreground">0</p>
                     <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">Intermédiaire</p>
                   </div>
                   <div className="w-px h-10 bg-glass-border" />
                   <div>
                     <p className="text-2xl font-bold text-foreground">{"<"} 24h</p>
                     <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">Réponse</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
