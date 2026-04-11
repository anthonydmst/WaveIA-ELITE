"use client";

import React, { useState } from 'react';
import { ArrowRight, Check, X, ShieldCheck, Gauge, Smartphone, Monitor, ShoppingBag, PenTool, Wrench, Search, Code, Cpu } from 'lucide-react';
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
              Agence Web IA — Pays Basque & France
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Création de Site Internet Sur-Mesure &<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Propulsé par l'IA.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Vitesse inatteignable, conversion chirurgicale et référencement natif. Votre site web ne doit plus être une simple vitrine, mais <strong>un moteur de croissance dopé à l'intelligence artificielle</strong> fonctionnant 24/7.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact-final" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Estimer mon projet <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#solutions" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir nos solutions
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Score Lighthouse</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">-50%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Temps de livraison</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+120</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Centres de profit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOC 2 : L'ÉDITO SEO ─── */}
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

      {/* ─── BLOC 3 : HUB DE MAILLAGE INTERNE ─── */}
      <section id="solutions" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div> Nos Expertises
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Des fondations web conçues <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">pour la conversion</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Nous choisissons la technologie qui s'adapte à votre modèle économique, et non l'inverse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Monitor className="w-6 h-6" />, title: 'Site Vitrine', desc: 'Présentez votre entreprise avec un design premium et attirez des prospects qualifiés en continu.', link: '/creation-site-internet/site-vitrine' },
              { icon: <ShoppingBag className="w-6 h-6" />, title: 'Site E-commerce', desc: 'Transformez vos visiteurs en acheteurs avec une plateforme fluide et sécurisée.', link: '/creation-site-internet/site-ecommerce' },
              { icon: <PenTool className="w-6 h-6" />, title: 'Refonte de site web', desc: 'Modernisez votre présence digitale avec une nouvelle architecture performante.', link: '/creation-site-internet/refonte-site-web' },
              { icon: <Wrench className="w-6 h-6" />, title: 'Maintenance web', desc: 'Sécurisez vos opérations avec une surveillance technique et préventive continue.', link: '/creation-site-internet/maintenance-web' }
            ].map((svc, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-7 hover:-translate-y-2 hover:border-ocean/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start group">
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 text-ocean flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{svc.desc}</p>
                <Link href={svc.link} className="mt-6 text-sm font-bold text-ocean flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Découvrir ce service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 4 : LA MÉTHODE WAVE IA ─── */}
      <section className="py-24 bg-card border-y border-border">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-ocean"></div> Performance Maximisée
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Notre processus augmenté à l'IA : <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Plus rapide, plus loin</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              L'humain pilote la créativité et la stratégie, tandis que l'IA exécute, teste et optimise les données algorithmiques.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent z-0"></div>
            
            {[
              { num: "01", icon: <Search className="w-5 h-5"/>, title: "Stratégie & Analyse ciblée", desc: "Nous utilisons l'IA pour auditer votre marché et vos concurrents locaux. Positionnement, intentions de recherche et structure sémantique sont définis par les données, pas par nos intuitions." },
              { num: "02", icon: <PenTool className="w-5 h-5"/>, title: "Design UX/UI Génératif", desc: "Création d'une identité visuelle immersive avec assistance algorithmique pour tester instantanément des dizaines de variations d'interfaces, ciblant celles qui convertissent le mieux." },
              { num: "03", icon: <Code className="w-5 h-5"/>, title: "Développement React & Déploiement", desc: "Génération de code assistée par l'IA accélérant la production. Résultat : un code extrêmement propre, sans composants inutiles, propulsant le site vers un score Google Lighthouse parfait de 100/100." },
              { num: "04", icon: <Cpu className="w-5 h-5"/>, title: "Tests & Optimisations prédictifs", desc: "Déploiement et apprentissage. L'IA étudie les cartes de chaleur et le comportement de vos utilisateurs pour nous permettre d'ajuster les textes et appels à l'action en temps réel." }
            ].map((step, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative z-10 w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full glass-card border flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-background/80 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                  {step.num}
                </div>
                <div className="pt-2">
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

      {/* ─── BLOC 5 : PREUVE SOCIALE ─── */}
      <section className="py-24 text-center">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               Histoires à succès
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">Ils ont accéléré leur croissance <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">avec Wave IA</em></h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-8 border border-border rounded-2xl flex flex-col items-center">
                 <div className="text-4xl mb-4 opacity-50">🏢</div>
                 <p className="italic text-muted-foreground mb-6">"Notre vieux site WordPress mettait 8 secondes à charger et nous perdions nos prospects mobiles. En 3 semaines, Wave IA a redéveloppé une plateforme ultra-réactive. Notre taux de conversion a doublé."</p>
                 <div className="font-bold text-foreground">Cabinet Immobilier Côte Basque</div>
                 <div className="flex gap-4 mt-6 border-t border-border pt-6 w-full justify-center">
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">-75%</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Temps de charge</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">+110%</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Contacts entrants</div>
                    </div>
                 </div>
              </div>

              <div className="glass-card p-8 border border-border rounded-2xl flex flex-col items-center">
                 <div className="text-4xl mb-4 opacity-50">🛍️</div>
                 <p className="italic text-muted-foreground mb-6">"Une méthode incisive et transparente. Le maillage interne et la hiérarchie créés ont propulsé notre plateforme sur Google en quelques mois, bien au-delà de nos espérances locales."</p>
                 <div className="font-bold text-foreground">Boutique Artisanale Premium</div>
                 <div className="flex gap-4 mt-6 border-t border-border pt-6 w-full justify-center">
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">100/100</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Performances SEO</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">x3</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Trafic Organique</div>
                    </div>
                 </div>
              </div>
            </div>
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
