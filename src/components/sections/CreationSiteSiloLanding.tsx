"use client";

import React, { useState } from 'react';
import { ArrowRight, Check, X, ShieldCheck, Gauge, Smartphone, Monitor, ShoppingBag, PenTool, Wrench, Search, Code, Cpu, Sparkles } from 'lucide-react';
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
        "name": "Vous mettez en avant l'Intelligence Artificielle. Mon site sera-t-il un simple \"template\" généré automatiquement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument pas. L'expérience utilisateur (UX), le design et la stratégie commerciale sont conçus par notre binôme humain, sur-mesure. Nous utilisons l'IA en coulisses (pour l'écriture du code complexe, l'automatisation des tests de sécurité et l'optimisation des requêtes). L'IA est notre moteur pour développer plus vite et sans bugs, mais l'âme de votre site restera unique."
        }
      },
      {
        "@type": "Question",
        "name": "Quel budget prévoir pour un projet digital avec Waveia ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chaque écosystème est chiffré sur-mesure. Toutefois, l'utilisation de nos process IA nous permet d'être très compétitifs. Un site vitrine optimisé conversion démarre à 990 €, tandis qu'un e-commerce se situe entre 2 490 € et 5 000 €. Le chiffrage exact est réalisé après un échange gratuit de 30 minutes, sans frais cachés."
        }
      },
      {
        "@type": "Question",
        "name": "Comment pourrai-je mesurer concrètement ce que me rapporte cet investissement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un actif commercial doit être mesurable. Nous livrons votre plateforme avec des outils d'analyse de trafic intégrés et 100% conformes au RGPD. Surtout, nous configurons le suivi de vos conversions (nombre de formulaires qualifiés remplis, clics sur l'agenda, demandes de devis). Vous saurez exactement combien de chiffre d'affaires votre site génère chaque mois."
        }
      },
      {
        "@type": "Question",
        "name": "Devons-nous rédiger nous-mêmes tous les textes de notre futur site ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est vous qui choisissez, selon votre temps disponible. Si vous avez déjà vos textes de présentation, nous les intégrons en les optimisant pour la conversion. Si vous manquez de temps en interne, nous pouvons prendre en charge la rédaction (orientée SEO et copywriting commercial) et la recherche visuelle. Notre but est que ce projet ne devienne pas une surcharge de travail pour vos équipes."
        }
      },
      {
        "@type": "Question",
        "name": "Si nous procédons à une refonte, allons-nous perdre notre positionnement actuel sur Google ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est un risque majeur avec les refontes mal gérées, mais c'est impossible avec notre méthode. Avant de toucher à quoi que ce soit, nous cartographions vos pages existantes. Nous mettons en place un plan de redirections (301) strict et transférons votre \"jus SEO\" vers la nouvelle plateforme. Votre historique est préservé, et votre référencement sera même bonifié grâce à notre nouvelle architecture technique beaucoup plus rapide."
        }
      },
      {
        "@type": "Question",
        "name": "Sommes-nous réellement propriétaires de notre site ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "À 100%. Contrairement à certaines agences qui \"louent\" leurs solutions, nous vous remettons tous les accès administrateurs et les droits sur le nom de domaine une fois le solde réglé. Vous restez totalement indépendant."
        }
      },
      {
        "@type": "Question",
        "name": "Puis-je gérer mon site moi-même après la livraison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Chaque site est livré avec une interface d'administration intuitive. Une formation à la prise en main est incluse. Pour les évolutions techniques ou la sécurité, notre équipe reste disponible via nos offres de maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "Que se passe-t-il en cas de bug technique ou de faille de sécurité une fois le site en ligne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous ne faisons pas de \"livré et oublié\". Votre projet inclut systématiquement 30 jours de suivi post-lancement pour garantir une stabilité parfaite. Passé ce délai, nous proposons des contrats de maintenance préventive (mises à jour de sécurité, sauvegardes) pour que vous n'ayez jamais à gérer les aspects techniques. Vous vous concentrez sur votre métier, nous gérons l'outil."
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
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-12 md:py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
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
              <a href="#contact-final" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
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
                    <div className="relative h-full p-8 lg:p-10 bg-glass-bg backdrop-blur-sm rounded-2xl border border-glass-border overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:translate-y-[-8px] shadow-card group-hover:shadow-card-hover flex flex-col items-start relative overflow-hidden">
                      
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
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
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
              <div className="w-5 h-[1.5px] bg-primary"></div> L'INGÉNIERIE WAVEIA
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
              <div className="w-5 h-[1.5px] bg-primary"></div> LE STANDARD QUALITÉ
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
               <div className="w-5 h-[1.5px] bg-primary"></div> NOTRE MÉTHODOLOGIE
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

      {/* ─── BLOC 6 : RÉALISATIONS ─── */}
      <section className="py-24 bg-background">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 mx-auto text-center mb-16">
               <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
                 <div className="w-5 h-[1.5px] bg-primary"></div> NOS RÉALISATIONS <div className="w-5 h-[1.5px] bg-primary"></div>
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading leading-tight mb-6">
                Ne nous croyez pas sur parole, <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">regardez le résultat.</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Découvrez comment notre ingénierie web a structuré l'acquisition de nos clients.
              </p>
              <Link href="/realisations" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg group">
                Voir nos dernières réalisations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
         </div>
      </section>







      {/* ─── BLOC 7 : FAQ ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
             <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               QUESTIONS FRÉQUENTES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Clarifions vos derniers doutes <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">avant d'échanger.</em></h2>
          </div>
          
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, i: number) => (
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
      <section id="contact-final" className="py-32 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none blur-[60px]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">
            Prêt à structurer votre <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">acquisition digitale ?</em>
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Échangeons sur vos enjeux de rentabilité en visio, ou autour d'un café à nos locaux de Biarritz. <strong className="text-foreground">Gratuit et sans jargon technique.</strong>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
             <div className="flex items-center gap-2 text-sm font-bold text-foreground bg-background border border-border px-5 py-2.5 rounded-full shadow-sm">
                <Check className="w-4 h-4 text-ocean" /> Étude de faisabilité
             </div>
             <div className="flex items-center gap-2 text-sm font-bold text-foreground bg-background border border-border px-5 py-2.5 rounded-full shadow-sm">
                <Check className="w-4 h-4 text-ocean" /> Chiffrage transparent
             </div>
             <div className="flex items-center gap-2 text-sm font-bold text-foreground bg-background border border-border px-5 py-2.5 rounded-full shadow-sm">
                <Check className="w-4 h-4 text-ocean" /> Zéro engagement
             </div>
          </div>

          <div className="flex justify-center">
             <Link href="/contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] font-heading font-bold text-lg px-10 py-5 rounded-xl transition-all hover:-translate-y-1 flex items-center gap-3 group">
                Réserver mon appel de cadrage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
