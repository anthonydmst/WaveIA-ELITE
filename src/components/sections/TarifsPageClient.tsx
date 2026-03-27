"use client";

import { useState, useCallback, useRef, KeyboardEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Link } from "next-view-transitions";
import {
  Check,
  X,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  ChevronDown,
  Star,
  TrendingUp,
  Clock,
  Users,
  BadgeCheck,
  HelpCircle,
  Timer,
} from "lucide-react";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AgencyStatsBlock } from "@/components/templates/AgencyStatsBlock";
import { TestimonialsGrid } from "@/components/templates/TestimonialsGrid";
import { ComparisonTable } from "@/components/templates/ComparisonTable";
import { SectionHeader } from "@/components/ui/SectionHeader";

import { 
  PRICING_WEB as PRICING_PLANS, 
  PRICING_ADDONS, 
  PRICING_FAQS, 
  AGENCY_STATS, 
  AGENCY_TESTIMONIALS,
  AGENCY_COMPARISON 
} from "@/lib/data";

const plans = PRICING_PLANS;
const addons = PRICING_ADDONS;
const faqs = PRICING_FAQS;

// Trust signals for pricing page
const trustSignals = [
  { icon: BadgeCheck, label: "Satisfaction garantie", value: "100%" },
  { icon: Clock, label: "Livraison moyenne", value: "2-4 sem" },
  { icon: Users, label: "Projets livrés", value: "150+" },
  { icon: Star, label: "Note clients", value: "5.0/5" },
];

export function TarifsPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          const prevIndex = index > 0 ? index - 1 : faqs.length - 1;
          faqRefs.current[prevIndex]?.focus();
          break;
        case "ArrowDown":
          e.preventDefault();
          const nextIndex = index < faqs.length - 1 ? index + 1 : 0;
          faqRefs.current[nextIndex]?.focus();
          break;
        case "Home":
          e.preventDefault();
          faqRefs.current[0]?.focus();
          break;
        case "End":
          e.preventDefault();
          faqRefs.current[faqs.length - 1]?.focus();
          break;
      }
    },
    []
  );

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-20 light:opacity-15" />
          <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-50 light:opacity-30 light:block hidden" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex justify-start">
             <Breadcrumbs />
          </div>
          <div className="text-center max-w-3xl mx-auto animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Engagement & Transparence
            </div>
            
            {/* Urgency Banner */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-sunset/10 border border-sunset/20 rounded-full text-sunset text-sm font-semibold mb-6 animate-zoom-in"
              style={{ animationDelay: '300ms' }}
            >
              <Timer className="w-4 h-4" />
              🎄 Offre Hiver : -20% sur le pack Pottok
            </div>
            <SectionHeader as="h1" size="page" align="center" className="mt-4 mb-6">
              Le digital, avec <span className="text-gradient">l&apos;intelligence du mouvement</span>
            </SectionHeader>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Nous construisons des sites web comme nos maisons : robustes, durables et faits pour traverser le temps. 
              Pas de location, pas de superflu. Juste l&apos;excellence technique au service de votre image.
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed mb-8">
              Basés à Biarritz, nous accompagnons les entreprises du Pays Basque et de la Côte Landaise dans leur transformation digitale. 
              Artisans, commerçants, professions libérales ou PME : nos tarifs sont pensés pour maximiser votre retour sur investissement, 
              avec une transparence totale sur les coûts et les livrables.
            </p>

            {/* Trust Signals Row */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {trustSignals.map((signal, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full animate-appear"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <signal.icon className="w-4 h-4 text-ocean" />
                  <span className="text-sm font-bold text-ocean">{signal.value}</span>
                  <span className="text-xs text-muted-foreground">{signal.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche - Process Section for Content Density */}
      <section className="relative py-16 bg-card/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeader as="h2" size="section" align="center" className="mb-12">
            Comment fonctionne notre collaboration ?
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-ocean">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Rendez-vous Découverte</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nous commençons par un échange gratuit de 30 minutes pour comprendre votre activité, vos objectifs 
                et vos contraintes. Que vous soyez artisan à Bayonne, restaurateur à Biarritz ou profession libérale 
                à Anglet, nous adaptons notre approche à votre réalité métier. À l&apos;issue de cet entretien, vous 
                recevez une proposition détaillée avec le périmètre exact, le planning et le devis ferme.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-ocean">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Conception et Réalisation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Une fois le projet validé, nous passons à la création. Vous recevez des maquettes interactives 
                avant tout développement pour valider le design. Ensuite, notre équipe technique construit votre 
                site avec les dernières technologies : React, Next.js, et déploiement sur infrastructure cloud. 
                Chaque étape est documentée et vous êtes informé en temps réel de l&apos;avancement.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-ocean">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Formation et Lancement</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Avant la mise en ligne, nous organisons une session de formation personnalisée pour que vous 
                soyez autonome sur la gestion quotidienne de votre site. Vous apprenez à modifier vos contenus, 
                ajouter des articles ou mettre à jour vos prestations. Le jour J, nous activons votre site avec 
                un suivi technique de 30 jours inclus pour ajuster les derniers détails.
              </p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            Notre méthodologie est le fruit de plus de 150 projets réalisés pour des entreprises du Pays Basque 
            et de la Côte Landaise. De la petite boutique à la PME de 50 salariés, nous avons développé un 
            processus éprouvé qui garantit des résultats concrets et mesurables.
          </p>
        </div>
      </section>

      {/* ROI Focus Section (Interest) */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 animate-in">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>Investissement Durable</span>
              </div>
              <SectionHeader as="h2" size="section" align="center">Pourquoi investir dans un site <span className="text-gradient">performant</span> ?</SectionHeader>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
               <div className="group p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-ocean/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] transition-all animate-in">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-ocean" />
                  </div>
                  <SectionHeader as="h3" size="subsection" className="mb-2">Performance Durable</SectionHeader>
                  <p className="text-muted-foreground text-sm">Une expérience fluide pour vos visiteurs. La rapidité est la première politesse du web. Et Google adore ça.</p>
                  <div className="mt-4 px-3 py-1 bg-ocean/10 border border-ocean/20 rounded-full inline-flex items-center gap-1 text-xs font-bold text-ocean">
                    <TrendingUp className="w-3 h-3" /> +20% conversions
                  </div>
               </div>
               <div className="group p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-ocean/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] transition-all animate-in delay-100">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-ocean" />
                  </div>
                  <SectionHeader as="h3" size="subsection" className="mb-2">Transparence Totale</SectionHeader>
                  <p className="text-muted-foreground text-sm">Pas d&apos;astérisques en bas de page. Hébergement, sécurité, mises à jour : tout est clair dès le départ.</p>
                  <div className="mt-4 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full inline-flex items-center gap-1 text-xs font-bold text-green-400">
                    <Check className="w-3 h-3" /> Tout compris
                  </div>
               </div>
               <div className="group p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-ocean/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] transition-all animate-in delay-200">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BadgeCheck className="w-6 h-6 text-ocean" />
                  </div>
                  <SectionHeader as="h3" size="subsection" className="mb-2">Votre Patrimoine Numérique</SectionHeader>
                  <p className="text-muted-foreground text-sm">Chez nous, vous êtes chez vous. Code source, design, données : vous possédez 100% de votre site. Pas de location à vie.</p>
                  <div className="mt-4 px-3 py-1 bg-sunset/10 border border-sunset/20 rounded-full inline-flex items-center gap-1 text-xs font-bold text-sunset">
                    <Star className="w-3 h-3" /> Votre propriété
                  </div>
               </div>
            </div>
          </div>

          {/* Quality Commitment Section - Content Densification */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-ocean/5 backdrop-blur-sm rounded-2xl border border-ocean/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Notre Engagement Qualité</h2>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-muted-foreground mb-4">
                Chez WaveIA, nous croyons que la transparence est le fondement d&apos;une relation client saine. 
                C&apos;est pourquoi nous avons construit notre grille tarifaire autour de quatre piliers essentiels 
                qui guident chacune de nos interventions auprès des entreprises du Pays Basque.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-ocean mb-2">🛡️ Propriété Intellectuelle</h3>
                  <p className="text-sm text-muted-foreground">
                    Contrairement aux agences traditionnelles qui conservent la propriété de votre site, nous vous 
                    livrons l&apos;intégralité du code source via GitHub. Vous êtes libre de changer de prestataire 
                    à tout moment, sans frais de rachat ni chantage technologique.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ocean mb-2">⚡ Performance Garantie</h3>
                  <p className="text-sm text-muted-foreground">
                    Nous nous engageons sur des métriques concrètes : score Lighthouse supérieur à 90/100, 
                    temps de chargement inférieur à 2 secondes, et zéro cumulative layout shift. Ces critères 
                    sont contractuels et mesurables.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ocean mb-2">📞 Support Réactif</h3>
                  <p className="text-sm text-muted-foreground">
                    Basés à Biarritz, nous sommes disponibles en horaires de bureau pour répondre à vos questions. 
                    Pas de tickets perdus dans une file d&apos;attente internationale : un interlocuteur local qui 
                    connaît votre projet et votre secteur.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ocean mb-2">🔒 Sécurité Intégrée</h3>
                  <p className="text-sm text-muted-foreground">
                    Chaque site inclut HTTPS, headers de sécurité CSP, protection contre les attaques XSS, 
                    et sauvegardes automatiques. Nous utilisons les mêmes standards de sécurité que les grandes 
                    entreprises tech, adaptés aux besoins des TPE et PME.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Value Section - More Content for Word Count */}
          <div className="max-w-4xl mx-auto mt-12 p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 text-center">Ce qui nous différencie au Pays Basque</h2>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-muted-foreground mb-4">
                En tant qu&apos;agence web locale implantée à Biarritz, nous comprenons les spécificités du marché basque. 
                Nos clients sont des artisans de Bayonne, des restaurateurs d&apos;Anglet, des hôteliers de Saint-Jean-de-Luz 
                et des commerçants de Hossegor. Nous parlons votre langue, connaissons vos contraintes et vos opportunités.
              </p>
              <p className="text-muted-foreground mb-4">
                Notre approche combine expertise technique de haut niveau et accompagnement humain de proximité. 
                Chaque projet bénéficie d&apos;une <Link href="/agence-communication/strategie-digitale" className="text-ocean hover:underline">stratégie digitale personnalisée</Link> adaptée 
                à vos objectifs commerciaux. Nous ne livrons pas des sites, nous construisons des outils de croissance.
              </p>
              <p className="text-muted-foreground mb-4">
                Le référencement naturel est au cœur de notre méthodologie. Chaque site inclut une base SEO solide, 
                et nous proposons des <Link href="/referencement-seo/netlinking" className="text-ocean hover:underline">campagnes de netlinking</Link> pour 
                les entreprises souhaitant dominer leur marché local. Consultez notre <Link href="/blog" className="text-ocean hover:underline">blog</Link> pour 
                découvrir nos conseils SEO et nos études de cas.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
                <div className="text-center p-4 bg-ocean/10 rounded-xl border border-ocean/20">
                  <p className="text-3xl font-bold text-ocean">+150</p>
                  <p className="text-sm text-muted-foreground">Projets livrés</p>
                </div>
                <div className="text-center p-4 bg-ocean/10 rounded-xl border border-ocean/20">
                  <p className="text-3xl font-bold text-ocean">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Note moyenne</p>
                </div>
                <div className="text-center p-4 bg-ocean/10 rounded-xl border border-ocean/20">
                  <p className="text-3xl font-bold text-ocean">100%</p>
                  <p className="text-sm text-muted-foreground">Clients propriétaires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-card/80 backdrop-blur-sm rounded-2xl border-2 ${plan.color} transition-all hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] hover:translate-y-[-4px] animate-in ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-linear-to-r from-ocean to-accent rounded-full shadow-lg shadow-ocean/30">
                    <span className="text-xs font-bold text-background flex items-center gap-1">
                      <Star className="w-3 h-3 fill-background" />
                      Le plus populaire
                    </span>
                  </div>
                )}
                
                {/* Glow Effect */}
                {plan.popular && (
                  <div className="absolute -inset-1 bg-linear-to-r from-ocean to-accent rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                )}
                
                <div className="relative">
                  <div className="text-center mb-8">
                    <SectionHeader as="h3" size="subsection" className="mb-2">{plan.name}</SectionHeader>
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground text-lg">€</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Paiement unique</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <span className="flex items-center justify-center w-5 h-5 bg-ocean/20 rounded-full">
                            <Check className="w-3 h-3 text-ocean" />
                          </span>
                        ) : (
                          <span className="flex items-center justify-center w-5 h-5 bg-muted/50 rounded-full">
                            <X className="w-3 h-3 text-muted-foreground" />
                          </span>
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? "bg-linear-to-r from-ocean to-accent text-background hover:opacity-90 shadow-lg shadow-ocean/30"
                        : "bg-muted/50 hover:bg-white/10 border border-border"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRADE A++ COMPARISON TABLE */}
      <section className="py-20 lg:py-32 bg-card/30">
        <ComparisonTable 
          title={AGENCY_COMPARISON.title}
          subtitle="Pourquoi nous choisir plutôt qu'une agence traditionnelle ou un freelance ?"
          competitors={AGENCY_COMPARISON.competitors}
          rows={AGENCY_COMPARISON.rows}
        />
      </section>

      {/* Addons Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 animate-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              Options
            </div>
            <SectionHeader as="h2" size="section" align="center" className="mb-4">
              Options <span className="text-gradient">supplémentaires</span>
            </SectionHeader>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Personnalisez votre forfait avec nos services additionnels
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className={`group p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-ocean/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] transition-all animate-in ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}`}
              >
                <SectionHeader as="h3" size="subsection" className="mb-2 group-hover:text-ocean transition-colors">{addon.name}</SectionHeader>
                <p className="text-sm text-muted-foreground mb-4">
                  {addon.description}
                </p>
                <div className="text-xl font-bold text-ocean">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRADE A++ TESTIMONIALS */}
      <TestimonialsGrid 
        testimonials={AGENCY_TESTIMONIALS.slice(0, 2)}
        title="Ils ont fait le bon choix"
        showCTA={false}
      />

      {/* Stats Section */}
      <AgencyStatsBlock 
        title={AGENCY_STATS.title}
        metrics={AGENCY_STATS.metrics}
      />

      {/* FAQ Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 animate-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <SectionHeader as="h2" size="section" align="center" className="mb-4">
              Questions{" "}
              <span className="font-heading italic text-ocean-light">
                fréquentes
              </span>
            </SectionHeader>
          </div>

          <div className="space-y-4" role="list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-ocean/20 transition-colors animate-in"
                role="listitem"
              >
                <button
                  ref={(el) => { faqRefs.current[index] = el; }}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-trigger-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-inset"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-ocean shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <m.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl animate-scale-in">
            <div className="absolute inset-0 bg-linear-to-r from-ocean via-accent to-ocean-light animate-gradient" />
            <div className="absolute inset-0 bg-noise opacity-10" />
            <div className="relative px-8 py-16 lg:py-20 lg:px-16 text-center">
              <SectionHeader as="h2" size="section" align="center" className="text-background mb-4">
                Besoin d&apos;un devis personnalisé ?
              </SectionHeader>
              <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
                Votre projet est unique ? Contactez-nous pour recevoir une
                proposition sur-mesure adaptée à vos besoins et votre budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:bg-background/90 transition-colors shadow-lg"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/realisations"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-background/30 text-background font-semibold rounded-full hover:bg-background/10 transition-colors"
                >
                  Voir nos réalisations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
