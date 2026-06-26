"use client";

import React, { useState } from 'react';
import { ArrowRight, Check, X, ShieldCheck, Gauge, Smartphone, Monitor, ShoppingBag, PenTool, Wrench, Search, Code, Cpu, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'next-view-transitions';

export function CreationSiteSiloLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  // Schema.org for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien de temps faut-il à Wave IA pour créer un site ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grâce à notre processus augmenté à l'IA, nous divisons les délais classiques par deux. Un site vitrine performant peut être déployé en 2 à 3 semaines, et un e-commerce complet en 4 à 6 semaines, sans compromis sur la qualité."
        }
      },
      {
        "@type": "Question",
        "name": "L'IA remplace-t-elle les développeurs chez Wave IA ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument pas. L'IA est un co-pilote qui accélère la production, automatise les tâches répétitives (optimisation de base, génération de maquettes structurelles) et teste des milliers de variations. L'expertise humaine reste au centre pour la stratégie, l'UX avancée et l'assurance qualité."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le budget moyen pour la création d'un site web ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le budget varie selon la complexité : un site vitrine ultra-performant démarre souvent autour de 990€, tandis qu'une plateforme e-commerce ou sur-mesure commence vers 2500€. Nous proposons toujours des devis transparents et adaptés à votre retour sur investissement."
        }
      },
      {
        "@type": "Question",
        "name": "Mon site sera-t-il optimisé pour le référencement (SEO) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, c'est notre signature. Chaque site livré par Wave IA intègre nativement une architecture sémantique parfaite, un balisage Schema.org, et des temps de chargement records (Core Web Vitals) pour plaire immédiatement à Google."
        }
      }
    ]
  };

  return (
    <div className="w-full relative z-10 pt-20">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll-left 25s linear infinite;
        }
      `}} />

      {/* ─── BLOC 1 : HERO HEADER ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden pt-[70px]">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-ocean rounded-full animate-pulse-glow" />
              EXPERTISE STRATÉGIQUE
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Création & refonte <br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Bâtissez votre actif commercial.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Plus qu'une simple vitrine, nous concevons des plateformes optimisées pour la conversion. De la création à la refonte, alliez la rigueur de nos process IA à une stratégie sur-mesure pour accélérer votre croissance en ligne.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact-final" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Obtenir un chiffrage de mon projet <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#solutions" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir nos solutions
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">14 JOURS</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">DÉLAI MOYEN DE LIVRAISON</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100/100</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">SCORE DE PERFORMANCE WEB</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">ORIENTÉ CONVERSION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOC 2 : SOLUTIONS D'ACQUISITION ─── */}
      <section id="solutions" className="relative pt-8 pb-24 lg:pt-12 lg:pb-32 overflow-hidden">
        {/* Background Decorators */}
        <div className="absolute inset-0 bg-card/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--ocean)_0%,transparent_50%)] opacity-[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-ocean/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              SOLUTIONS D'ACQUISITION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mb-8 leading-tight">
              Quel levier digital structurera{" "}
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                votre chiffre d'affaires ?
              </em>
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed">
                Chaque écosystème répond à un objectif de rentabilité précis. Découvrez la méthodologie et les outils que nous déployons pour sécuriser votre investissement.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { icon: Monitor, title: 'Site vitrine', tag: 'Le plus demandé', desc: 'Générez des prospects qualifiés 24h/24 grâce à une plateforme qui installe votre autorité et fluidifie le premier contact.', link: '/creation-site-internet/site-vitrine', gradient: "from-ocean to-accent" },
              { icon: ShoppingBag, title: 'Site e-commerce', tag: null, desc: 'Automatisez vos ventes avec une boutique sécurisée, ultra-rapide et structurée pour maximiser votre taux de conversion.', link: '/creation-site-internet/site-ecommerce', gradient: "from-ocean-light to-ocean" },
              { icon: PenTool, title: 'Refonte de site web', tag: null, desc: 'Transformez une interface obsolète en une véritable machine de conversion, tout en préservant et bonifiant votre historique SEO.', link: '/creation-site-internet/refonte-site-web', gradient: "from-ocean to-ocean-dark" },
              { icon: Wrench, title: 'Maintenance web', tag: null, desc: 'Déléguez la sécurité technique et les mises à jour. Concentrez vos équipes sur votre cœur de métier, nous gérons la technique.', link: '/creation-site-internet/maintenance-web', gradient: "from-accent to-ocean-dark" }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative ${
                    index === 1
                      ? "delay-100"
                      : index === 2
                        ? "delay-200"
                        : index === 3
                          ? "delay-300"
                          : ""
                  }`}
                  style={{
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Link
                    href={service.link}
                    className="block h-full group outline-none"
                  >
                    {/* Gradient Border Glow on Hover */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl blur-md`}
                    />

                    {/* Card */}
                    <div className="relative h-full p-8 lg:p-10 bg-glass-bg backdrop-blur-sm rounded-2xl border border-glass-border overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_40px_var(--glass-glow)] flex flex-col items-start relative overflow-hidden">
                      
                      {/* Corner Glow */}
                      <div
                        className={`absolute top-0 right-0 w-48 h-48 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.12] blur-3xl transition-opacity duration-700`}
                      />
                      
                      {service.tag && (
                        <div className="absolute top-4 right-4 bg-ocean/10 text-ocean text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-ocean/20 z-20">
                          {service.tag}
                        </div>
                      )}

                      <div className="relative flex flex-col h-full z-10 w-full">
                        {/* Text */}
                        <div className="flex-1 w-full">
                          <h3 className="text-xl lg:text-2xl font-bold font-heading mb-4 group-hover:text-ocean transition-colors duration-300 leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-8 grow">
                            {service.desc}
                          </p>
                        </div>

                        {/* Footer / CTA */}
                        <div className="flex items-center justify-between w-full text-sm font-semibold text-ocean/70 group-hover:text-ocean transition-all duration-300 mt-auto pt-4 border-t border-glass-border group-hover:border-transparent">
                          <span className="relative">
                            Découvrir la méthode
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-ocean group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BLOC 3 : L'INGÉNIERIE WAVEIA ─── */}
      <section className="py-24 relative overflow-hidden bg-card border-y border-border">
        {/* Background Decorators */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--ocean)_0%,transparent_40%)] opacity-[0.03]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div> L'INGÉNIERIE WAVEIA
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              L'alliance de l'expertise humaine et de la <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">puissance IA.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Un site internet n'est pas une ligne de dépense, c'est un <strong className="text-foreground font-semibold">centre de profit</strong>. Voici l'exigence opérationnelle que nous appliquons à chaque plateforme déployée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                title: "Design orienté conversion (UX/UI)",
                text: <>Nous ne faisons pas de simple "décoration", nous concevons des parcours clients fluides qui guident vos visiteurs vers l'action commerciale (devis, appel, achat). Pas de template pré-fabriqué, uniquement du <strong className="text-foreground font-semibold">sur-mesure</strong>.</>
              },
              {
                num: "02",
                title: "Développement propulsé par l'IA",
                text: <>L'Intelligence Artificielle nous permet de coder vos modules plus rapidement, avec une rigueur absolue. Résultat : nous divisons les temps de production et optimisons votre budget pour l'investir là où se trouve le vrai <strong className="text-foreground font-semibold">ROI</strong>.</>
              },
              {
                num: "03",
                title: "Architecture technique SEO-Ready",
                text: <>Vitesse de chargement (<strong className="text-foreground font-semibold">Core Web Vitals</strong>), structure Hn, balisage Schema.org : nous livrons une base technique irréprochable prête à être référencée par Google dès sa mise en ligne.</>
              },
              {
                num: "04",
                title: "Fonctionnalités métier automatisées",
                text: <>Qualification de leads, agendas connectés, générateurs de devis automatiques : nous intégrons directement les <strong className="text-foreground font-semibold">outils</strong> qui feront gagner des heures de travail à vos équipes.</>
              },
              {
                num: "05",
                title: "Proximité et ancrage local",
                text: <>Implantés au Pays Basque, nous accompagnons les dirigeants avec la réactivité d'un <strong className="text-foreground font-semibold">partenaire de proximité</strong> et l'exigence technologique d'une agence nationale. Un interlocuteur dédié qui ne disparaît pas après la livraison.</>
              },
              {
                num: "06",
                title: "Indépendance totale garantie",
                text: <>Aucune dépendance toxique. À la livraison, vous êtes <strong className="text-foreground font-semibold">propriétaire à 100%</strong> de votre code source, de vos données et de votre nom de domaine. Vous restez maître de votre entreprise.</>
              }
            ].map((item, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-2 hover:border-ocean/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group bg-background/50 backdrop-blur-sm">
                <div className="absolute -right-4 -top-6 text-[8rem] font-black font-heading text-ocean opacity-[0.03] group-hover:opacity-10 transition-opacity duration-300 pointer-events-none select-none">
                  {item.num}
                </div>
                <div className="relative z-10">
                  <div className="text-ocean font-heading font-black text-2xl mb-4">
                    {item.num}.
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-4 leading-tight group-hover:text-ocean transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 4 : LE STANDARD QUALITÉ ─── */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div> LE STANDARD QUALITÉ
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Un socle technique infaillible, <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">sans coûts cachés.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Notre rigueur impose que chaque plateforme embarque systématiquement ces éléments de base. Pas de devis à tiroirs, votre investissement de départ est <strong className="text-foreground font-semibold">clair et transparent</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Performance & Design",
                icon: <Monitor className="w-6 h-6" />,
                features: [
                  "UX/UI 100% sur-mesure (zéro template)",
                  "Navigation mobile (Responsive garanti)",
                  "Architecture SEO prête pour Google",
                  "Vitesse de chargement maximale"
                ]
              },
              {
                title: "Sécurité & Technique",
                icon: <ShieldCheck className="w-6 h-6" />,
                features: [
                  "Hébergement Premium",
                  "Certificat de sécurité SSL (Site en HTTPS)",
                  "Formulaires intelligents (Filtres anti-spam)",
                  "Tests de fiabilité avant mise en ligne"
                ]
              },
              {
                title: "Autonomie & Accompagnement",
                icon: <Code className="w-6 h-6" />,
                features: [
                  "Propriété totale (Le site vous appartient à 100%)",
                  "Outils d'analyse de visites (Conformes RGPD)",
                  "Formation dédiée à la prise en main de l'outil",
                  "Suivi de performance"
                ]
              }
            ].map((col, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-2 hover:border-ocean/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group bg-card">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocean to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 text-ocean flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                    {col.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground">{col.title}</h3>
                </div>
                <ul className="space-y-4">
                  {col.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-1 shrink-0 bg-ocean/20 rounded-full p-1">
                        <Check className="w-3.5 h-3.5 text-ocean" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 5 : LA MÉTHODOLOGIE ─── */}
      <section className="py-24 bg-card border-y border-border">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-ocean"></div> NOTRE MÉTHODOLOGIE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              De l'audit initial au lancement : <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">un pilotage transparent.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Nous éliminons les zones d'ombre. Notre processus est structuré pour sécuriser votre investissement et respecter des délais de mise sur le marché ambitieux sur <strong className="text-foreground font-semibold">14 jours</strong>.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent z-0"></div>
            
            {[
              { num: "01", icon: <Search className="w-5 h-5"/>, title: "Cadrage Stratégique & Objectifs [ J1 à J3 ]", desc: "Rencontre à nos bureaux (Pays Basque) ou en visio. Nous analysons votre business model, vos cibles et vos concurrents pour définir l'arborescence et le parcours de conversion idéal." },
              { num: "02", icon: <PenTool className="w-5 h-5"/>, title: "Maquettage & Validation UX/UI [ J4 à J7 ]", desc: "Conception des interfaces (mobile et desktop). Vous validez le design et la logique de navigation avant l'écriture de la moindre ligne de code pour éviter tout décalage technique." },
              { num: "03", icon: <Code className="w-5 h-5"/>, title: "Développement Haute Performance (IA) [ J7 à J12 ]", desc: "Développement de l'architecture et intégration des fonctionnalités métier. Nos process IA nous permettent de coder proprement et de réduire drastiquement les délais de livraison." },
              { num: "04", icon: <Cpu className="w-5 h-5"/>, title: "Recettage, Déploiement & Suivi [ J14 ]", desc: "Tests de sécurité, validation des Core Web Vitals, mise en production. Nous assurons la formation de vos équipes et un suivi analytique durant 30 jours pour garantir la bonne prise en main de l'outil." }
            ].map((step, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full border border-ocean/30 flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-card relative z-20 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                  {step.num}
                </div>
                <div className="pt-2 relative z-10">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed md:w-[90%]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* ─── BLOC 6 : PREUVE PAR LE RÉSULTAT ─── */}
      <section className="py-24 bg-background">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 mx-auto text-center mb-16">
               <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
                 <div className="w-5 h-[1.5px] bg-ocean"></div> PREUVE PAR LE RÉSULTAT <div className="w-5 h-[1.5px] bg-ocean"></div>
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading leading-tight mb-6">
                La performance validée par <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">nos clients.</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ne nous croyez pas sur parole. Découvrez comment notre ingénierie web a structuré l'acquisition de ces entreprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
               {[
                 {
                   stars: "★★★★★",
                   text: "« Enfin une agence qui parle de chiffre d'affaires avant de parler de couleurs. Waveia a repensé notre parcours de conversion. Résultat : une plateforme livrée en deux semaines et nos premiers prospects qualifiés générés dès le premier mois. Un investissement immédiatement rentabilisé. »",
                   sector: "Secteur Industrie & Bâtiment",
                   location: "Biarritz (64)",
                   initial: "I"
                 },
                 {
                   stars: "★★★★★",
                   text: "« Leurs process accélérés par l'IA ne sont pas un argument marketing, c'est une réalité opérationnelle. Notre site a été développé avec une rigueur technique impressionnante. L'interface est ultra-rapide et l'architecture SEO nous a fait gagner un temps précieux sur Google. »",
                   sector: "Secteur Services Tech",
                   location: "Bordeaux (33)",
                   initial: "S"
                 },
                 {
                   stars: "★★★★★",
                   text: "« Nous avions été déçus par des agences classiques par le passé (délais non tenus, coûts cachés). Avec Waveia, le cadrage est chirurgical. Tout est transparent, de l'audit initial à la mise en ligne. Avoir un partenaire local aussi réactif en Nouvelle-Aquitaine change la donne. »",
                   sector: "Secteur Conseil B2B",
                   location: "Bayonne (64)",
                   initial: "C"
                 }
               ].map((testimonial, i) => (
                  <div key={i} className="glass-card p-8 border border-border rounded-2xl flex flex-col hover:-translate-y-2 hover:border-ocean/40 transition-all duration-300 relative group bg-card">
                     <div className="text-yellow-400 text-2xl tracking-widest mb-6">
                       {testimonial.stars}
                     </div>
                     <p className="italic text-muted-foreground mb-8 flex-1 leading-relaxed text-sm">
                       {testimonial.text}
                     </p>
                     <div className="flex items-center gap-4 border-t border-border pt-6">
                        <div className="w-10 h-10 rounded-full bg-ocean/10 text-ocean flex items-center justify-center font-bold text-lg">
                          {testimonial.initial}
                        </div>
                        <div>
                           <div className="font-bold text-foreground text-sm">{testimonial.sector}</div>
                           <div className="text-muted-foreground text-xs flex items-center gap-1 mt-0.5">
                             <MapPin className="w-3 h-3" /> {testimonial.location}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="text-center">
              <Link href="/business-cases" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-xl font-bold hover:bg-ocean hover:text-white transition-colors duration-300 shadow-lg group">
                Voir nos dernières réalisations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
         </div>
      </section>

      {/* ─── BLOC 7 : L'ÉDITO SEO ─── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
           <h2 className="text-2xl md:text-4xl font-extrabold font-heading mb-6 leading-tight">
             Pourquoi confier votre projet web à une agence <em className="not-italic text-ocean">nouvelle génération</em> ?
           </h2>
           <p className="text-lg text-muted-foreground leading-relaxed">
             Le web a changé. Hier, un site n'était qu'une simple vitrine numérique. Aujourd'hui, face à la concurrence accablante, il doit s'imposer comme le noyau de votre stratégie de croissance. Chez Wave IA, nous avons révolutionné le <strong>développement web</strong> et le <strong>design UX/UI</strong> grâce à l'intelligence artificielle. Que ce soit pour une conception de zéro ou une <strong>refonte de site</strong> complète, nous intégrons le <strong>SEO technique</strong>, l'intelligence de la <strong>conversion</strong> et les meilleurs <strong>CMS</strong> du marché au cœur de chaque ligne de code. L'objectif ? Vous offrir un outil commercial autonome, évolutif et d'une puissance redoutable.
           </p>
        </div>
      </section>



      {/* ─── BLOC 6 : LES PILIERS DE LA PERFORMANCE WEB ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-ocean"></div> Architecture Technique
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Un socle technique irréprochable pour <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Google et vos utilisateurs</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Les critères algorithmiques deviennent de plus en plus exigeants sur les signaux web essentiels. Nous repoussons les standards de l'industrie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Smartphone />, title: "Mobile-First Intégral", desc: "Pensé, conçu et codé en priorité pour les smartphones, répondant à 100% de l’indexation orientée mobile par Google." },
              { icon: <Gauge />, title: "Vitesse Fulgurante", desc: "Pas de thèmes surchargés. Des plateformes ultra-légères pour des chargements sous la seconde." },
              { icon: <Search />, title: "SEO Technique Natif", desc: "Balises Schema, canonicals, micro-données sémantiques et architecture générés avec précision dès le premier jour." },
              { icon: <ShieldCheck />, title: "Sécurité & Données", desc: "Protocoles de chiffrement, serveurs sécurisés et formulaires conformes aux lois européennes sur la protection des données." }
            ].map((p, i) => (
              <div key={i} className="glass-card border border-border rounded-xl p-6 hover:border-ocean/40 transition-colors bg-background/50">
                <div className="w-10 h-10 rounded-lg bg-ocean/10 text-ocean flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 7 : FAQ ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
             <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               Foire Aux Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Vos interrogations <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">clarifiées</em></h2>
          </div>
          
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq: any, i: number) => (
              <div key={i} className="glass-card border border-border rounded-2xl overflow-hidden hover:border-ocean/30 transition-colors">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 flex justify-between font-heading font-extrabold text-foreground text-left items-center group"
                >
                  <h3 className="m-0 text-base">{faq.name}</h3>
                  <span className={`text-ocean text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : 'group-hover:scale-110'}`}>+</span>
                </button>
                <div className={`px-6 text-sm text-muted-foreground leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  {faq.acceptedAnswer.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 8 : LE CONTENT SEO DEEP DIVE ─── */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
           <details className="group glass-card border border-border rounded-2xl p-6 cursor-pointer outline-none">
              <summary className="font-heading font-bold text-lg text-ocean flex justify-between items-center outline-none list-none marker:hidden">
                Guide complet pour la création de votre plateforme digitale en 2026
                <span className="group-open:-rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="mt-6 prose prose-slate prose-invert max-w-none text-sm text-muted-foreground leading-relaxed">
                <p>
                  Dans un paysage numérique ultra-concurrentiel, la simple possession d'une vitrine web est devenue obsolète. Le <strong>processus de création de site internet</strong> s'est métamorphosé. Il ne s'agit plus de lier des pages par de simples hyperliens, mais de construire une architecture algorithmiquement optimisée pour se positionner sur les moteurs de recherche et sémantiquement pensée pour convertir l'audience.
                </p>
                <p>
                  Chez Wave IA, notre modèle disruptif associe les meilleurs standards du <strong>développement web</strong> moderne à l'intelligence artificielle. Ce croisement nous permet de réduire les cycles de production, un défi majeur des agences digitales historiques embourbées dans des processus manuels lourds. Nous concevons le maillage interne, la logique et la gestion de contenu à l'aide de données génératives afin de cibler avec justesse la demande de l'utilisateur.
                </p>
                <p>
                  La <strong>refonte d'un site web</strong> ou la <strong>création d'un site e-commerce</strong> nécessitent aujourd'hui la considération drastique des indicateurs de performance UX de Google (Core Web Vitals). L'utilisation de bibliothèques réactives, le chargement intelligent des ressources et la livraison adaptative garantissent une acquisition de trafic fluide. Il devient primordial de se départir de la masse des sites lents qui perdent continuellement du trafic. De l'audit stratégique à la mise en ligne technique, nous intégrons la performance, la sécurité et la vitesse nativement, faisant de l'interface de votre entreprise le premier palier d'acquisition client de votre processus global.
                </p>
              </div>
           </details>
        </div>
      </section>

      {/* ─── BLOC 9 : CTA FINAL ─── */}
      <section id="contact-final" className="py-24 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none blur-[60px]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">
            Prêt à dominer <em className="not-italic text-ocean">votre marché</em> ?
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-10 max-w-2xl mx-auto">
            Laissez l'IA et nos experts transformer votre vision en réalité. Démarrez votre croissance dès aujourd'hui avec un outil conçu pour la performance.
          </p>
          
          <div className="glass-card max-w-xl mx-auto p-8 border border-border rounded-2xl bg-background/50 backdrop-blur-xl">
             <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="sr-only">Votre Nom</label>
                     <input type="text" placeholder="Votre Nom" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                   </div>
                   <div>
                     <label className="sr-only">Email professionnel</label>
                     <input type="email" placeholder="Email professionnel" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                   </div>
                </div>
                <div>
                   <label className="sr-only">URL de votre site actuel</label>
                   <input type="url" placeholder="URL de votre site actuel (si applicable)" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                </div>
                <button type="button" className="bg-ocean text-white w-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] font-heading font-bold text-lg py-4 rounded-xl mt-4 transition-transform hover:-translate-y-0.5">
                   Lancer mon projet 🚀
                </button>
                <p className="text-xs text-muted-foreground/70 mt-3 text-center">Un expert Wave IA vous recontacte sous 24h ouvrées.</p>
             </form>
          </div>
        </div>
      </section>

    </div>
  );
}
