"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, Shield, Zap, Search, Server, Activity, ArrowUpRight, 
  Check, X, Database, LifeBuoy, TrendingUp, Cpu, Maximize
} from 'lucide-react';

export function MaintenanceWebLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="w-full relative z-10 pt-20">
      
      {/* Inline Styles for specific custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll-left 25s linear infinite;
        }
      `}} />

      {/* ─── HERO ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              Maintenance Web augmentée par l'IA
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              La maintenance web qui<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                prédit, protège et performe.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Un site laissé sans surveillance est une porte ouverte aux pannes, aux pertes de clients et aux pénalités Google. Waveia surveille, optimise et sécurise votre présence digitale <strong>24h/24, 7j/7</strong>.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Demander un audit gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services-details" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir nos offres
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+200</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Sites maintenus</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">99.9%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Taux disponibilité</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">&lt;2h</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Délai d'intervention</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">24/7</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Surveillance IA</span>
              </div>
            </div>
            
            <p className="mt-9 text-xs text-muted-foreground/70 tracking-wider">
              <b className="text-muted-foreground font-normal">Bayonne · Biarritz · Anglet · Bidart · Hossegor · Saint-Jean-de-Luz · Boucau</b>
            </p>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="bg-background border-y border-border py-4 overflow-hidden flex">
        <div className="flex gap-12 whitespace-nowrap animate-scroll items-center">
          {Array(3).fill(['Sécurité IA', 'Performance Web', 'Uptime 99.9%', 'Monitoring 24/7', 'Sauvegardes J+1', 'Optimisation Vitesse', 'Support Réactif']).flat().map((item, i) => (
            <div key={i} className="font-heading text-xs font-bold tracking-widest uppercase text-muted-foreground/70 flex items-center gap-12">
              {item} <span className="text-ocean text-[10px]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── WHY SECTION ─── */}
      <section id="why" className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-16 animate-in">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ocean mb-4">Pourquoi c'est critique</div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-foreground leading-tight">
                Ne laissez pas votre site<br className="hidden md:block"/> travailler <em className="not-italic text-ocean">contre</em> vous
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">Un site web performant n'est pas une création ponctuelle — c'est un actif digital vivant qui nécessite une attention constante, des mises à jour précises et une surveillance proactive pour rester compétitif.</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-foreground font-medium text-[0.95rem] px-6 py-2.5 rounded-lg border border-border hover:border-ocean hover:text-ocean transition-all">
                Parler à un expert <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in delay-100">
            {[
              { icon: <Zap className="w-5 h-5 text-ocean" />, title: 'Prévenir les pannes critiques', desc: "Les conflits de plugins, thèmes obsolètes et mises à jour mal gérées peuvent mettre votre site hors ligne. Notre IA détecte les incompatibilités avant qu'elles deviennent des incidents." },
              { icon: <Activity className="w-5 h-5 text-ocean" />, title: 'Maintenir des performances maximales', desc: "Un site lent perd 53% de ses visiteurs mobiles. Nous optimisons en continu temps de chargement, cache, base de données et Core Web Vitals pour rester dans le top de Google." },
              { icon: <Shield className="w-5 h-5 text-ocean" />, title: 'Sécurité prédictive & anti-intrusion', desc: "Notre système de surveillance IA analyse 24h/24 les tentatives d'intrusion, les failles zero-day et les comportements anormaux pour protéger vos données et votre réputation." },
              { icon: <TrendingUp className="w-5 h-5 text-ocean" />, title: 'Protéger votre référencement naturel', desc: "Google pénalise les sites lents, non sécurisés ou cassés. Chaque maintenance Waveia intègre un audit SEO technique pour préserver et améliorer vos positions dans les résultats." },
              { icon: <TrendingUp className="w-5 h-5 text-ocean" />, title: 'Réduire les coûts d\'urgence', desc: "Une intervention d'urgence coûte 5 à 10× plus cher qu'une maintenance préventive. Notre approche proactive vous épargne des réparations imprévues et des journées sans activité." },
              { icon: <Check className="w-5 h-5 text-ocean" />, title: 'Pérenniser votre investissement', desc: "Votre site représente un investissement. La maintenance régulière l'entretient, l'améliore et le fait évoluer avec votre activité pour durer dans le temps." }
            ].map((card, i) => (
              <div key={i} className="glass-card hover:-translate-y-1 transition-all p-7 border-border group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-11 h-11 bg-ocean/10 border border-ocean/15 rounded-xl flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h4 className="text-base font-bold text-foreground mb-3">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services-details" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12 animate-in">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ocean mb-4">Ce que vous obtenez</div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-5">Maintenance <em className="not-italic text-ocean">360°</em> augmentée par l'intelligence artificielle</h2>
            <p className="text-muted-foreground">Contrairement à une maintenance classique, Waveia ne se contente pas de faire des mises à jour. Chaque action est guidée par des données, optimisée par l'IA et alignée avec vos objectifs business.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in delay-100">
            {[
              { num: "01", category: "TECHNIQUE", title: "Mises à jour intelligentes", desc: "Mise à jour du CMS, des plugins et du thème après validation de compatibilité par notre IA. Jamais une mise à jour aveugle." },
              { num: "02", category: "SÉCURITÉ", title: "Monitoring & protection 24/7", desc: "Surveillance continue des tentatives d'intrusion, pare-feu applicatif, analyse des logs et alertes en temps réel." },
              { num: "03", category: "PERFORMANCE", title: "Optimisation continue des vitesses", desc: "Analyse hebdomadaire des Core Web Vitals, optimisation des images, gestion du cache et nettoyage de DB." },
              { num: "04", category: "DATA", title: "Sauvegardes & restauration", desc: "Backup quotidien automatisé, stockage sécurisé multi-zones et restauration en moins de 30 minutes." },
              { num: "05", category: "SEO", title: "Audit & suivi SEO mensuel", desc: "Rapport mensuel sur vos positions, erreurs techniques, netlinking. La maintenance devient un levier de croissance." },
              { num: "06", category: "SUPPORT", title: "Interventions rapides", desc: "Modifications de contenu, corrections de bugs, ajout de fonctionnalités légères. Réactivité garantie." },
              { num: "07", category: "CONVERSION", title: "Optimisation parcours", desc: "Analyse comportementale, tests A/B et recommandations d'UX basées sur la data pour transformer vos visiteurs." },
              { num: "08", category: "REPORTING", title: "Dashboard mensuel", desc: "Rapport lisible chaque mois: trafic, performances, sécurité, évolutions. Vous pilotez avec des données." },
              { num: "09", category: "STRATÉGIE", title: "Conseil digital continu", desc: "Un interlocuteur Waveia dédié pour répondre à vos questions et aligner votre plateforme web avec votre stratégie." }
            ].map((service, i) => (
              <div key={i} className="glass-card p-6 border-border hover:bg-ocean/5 hover:border-ocean/20 transition-all cursor-default">
                <div className="font-heading text-[0.7rem] font-bold text-ocean tracking-wide mb-4">
                  {service.num} — {service.category}
                </div>
                <h4 className="text-base font-bold mb-2.5 text-foreground">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-in delay-200">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
              Obtenir mon devis personnalisé
            </a>
          </div>
        </div>
      </section>

      {/* ─── COMPARE ─── */}
      <section id="compare" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ocean mb-4">Avant / Après</div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Ce que la maintenance <br/>Waveia change <em className="not-italic text-ocean">concrètement</em></h2>
            <p className="text-muted-foreground">Voici la différence entre un site livré à lui-même et un site piloté par notre équipe et nos algorithmes.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 animate-in delay-100">
            <div className="border border-red-500/15 bg-red-500/5 rounded-2xl p-8 md:p-10">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                ✕ Sans Waveia
              </div>
              <h3 className="text-xl font-bold mb-6 text-foreground">Le site qui s'effondre lentement</h3>
              <ul className="space-y-4">
                {[
                  "Pannes imprévues — visiteurs perdus au moment clé",
                  "Chargement lent → taux de rebond élevé, SEO pénalisé",
                  "Failles de sécurité non détectées → risque de piratage",
                  "Plugins et CMS obsolètes → incompatibilités fréquentes",
                  "Pas de sauvegarde → perte de données irréversible",
                  "Urgences coûteuses et stressantes",
                  "Positions Google qui s'effritent silencieusement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground">
                    <span className="text-red-500 font-bold shrink-0">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-ocean/20 bg-ocean/5 rounded-2xl p-8 md:p-10">
              <div className="inline-flex items-center gap-2 bg-ocean/10 text-ocean border border-ocean/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                ✓ Avec Waveia
              </div>
              <h3 className="text-xl font-bold mb-6 text-foreground">Le site qui travaille pour vous</h3>
              <ul className="space-y-4">
                {[
                  "Disponibilité 99,9% garantie — zéro interruption business",
                  "Performances au top → score Google PageSpeed 90+",
                  "Sécurité prédictive IA — menaces neutralisées avant impact",
                  "Écosystème toujours à jour et stable",
                  "Sauvegardes quotidiennes — restauration en <30 min",
                  "Maintenance préventive — tranquillité et économies",
                  "SEO technique soigné — positions qui progressent"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-foreground">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="processus" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ocean mb-4">Notre méthode</div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">4 étapes pour une maintenance <em className="not-italic text-ocean">sans friction</em></h2>
            <p className="text-muted-foreground">Un processus structuré, transparent et piloté par la data pour prendre en charge votre site de A à Z.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative mt-16 animate-in delay-100">
            {/* Connecting line for Desktop */}
            <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-ocean to-transparent opacity-30"></div>

            {[
              { step: "01", title: "Audit complet", desc: "Analyse 360° de votre site : sécurité, perf, SEO. Rapport d'état par IA avec priorités." },
              { step: "02", title: "Plan d'action", desc: "Définition des actions mensuelles, alertes et calendrier d'interventions. Vous validez." },
              { step: "03", title: "Suivi continu", desc: "Surveillance 24/7, interventions automatiques et alertes instantanées hors seuils." },
              { step: "04", title: "Reporting & évolutions", desc: "Compte-rendu complet, recommandations et ajustements strak pour progression constante." }
            ].map((p, i) => (
              <div key={i} className="text-center px-4 relative z-10">
                <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center font-heading font-extrabold text-lg border relative
                  ${i === 0 ? 'bg-ocean/10 text-ocean border-ocean/30' : ''}
                  ${i === 1 ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' : ''}
                  ${i === 2 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : ''}
                  ${i === 3 ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : ''}
                `}>
                  {p.step}
                </div>
                <h4 className="text-base font-bold mb-3 text-foreground">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY WAVEIA ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="animate-in">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ocean mb-4">Pourquoi Waveia</div>
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">Une agence qui ne vous livre pas un site — elle le <em className="not-italic text-ocean">pilote</em></h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">Née au Pays Basque, Waveia est l'agence digitale qui a fait du duo humain-IA son avantage compétitif. Nous n'externalisons pas votre maintenance : nous la pilotons comme si c'était le nôtre.</p>

              <div className="space-y-6">
                {[
                  { icon: "🤖", title: "IA au cœur de chaque action", desc: "Nos outils propriétaires analysent votre site en temps réel et priorisent les actions. Pas de maintenance à l'aveugle." },
                  { icon: "🎯", title: "Interlocuteur unique", desc: "Un expert dédié connaît votre site et vos objectifs. La maintenance s'intègre dans la stratégie." },
                  { icon: "📊", title: "Transparence totale", desc: "Rapport détaillé, accès dashboard, zéro surprise de facturation. Vous savez tout." },
                  { icon: "📍", title: "Ancrés localement", desc: "Disponibles sur Bayonne, Biarritz, Anglet... avec la réactivité d'une équipe proche de vous." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 bg-ocean/10 border border-ocean/20 rounded-xl flex items-center justify-center text-lg">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-[0.95rem] mb-1">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in delay-100">
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="glass-card p-6 text-center border-border">
                  <div className="font-heading text-3xl font-extrabold bg-gradient-to-r from-ocean to-purple-500 bg-clip-text text-transparent">+200</div>
                  <div className="text-xs text-muted-foreground mt-1">Sites accompagnés</div>
                </div>
                <div className="glass-card p-6 text-center border-border">
                  <div className="font-heading text-3xl font-extrabold bg-gradient-to-r from-ocean to-purple-500 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-xs text-muted-foreground mt-1">Uptime garanti</div>
                </div>
                <div className="glass-card p-6 text-center border-border">
                  <div className="font-heading text-3xl font-extrabold bg-gradient-to-r from-ocean to-purple-500 bg-clip-text text-transparent">97%</div>
                  <div className="text-xs text-muted-foreground mt-1">Clients satisfaits</div>
                </div>
                <div className="glass-card p-6 text-center border-border">
                  <div className="font-heading text-3xl font-extrabold bg-gradient-to-r from-ocean to-purple-500 bg-clip-text text-transparent">&lt;2h</div>
                  <div className="text-xs text-muted-foreground mt-1">Délai d'intervention</div>
                </div>
              </div>

              <div className="bg-[#0A0F1A] border border-ocean/15 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-slate-900 px-4 py-3 flex items-center border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="ml-3 text-[0.75rem] text-muted-foreground font-mono">waveia-ai — analyse prédictive</span>
                </div>
                <div className="p-5 font-mono text-[0.78rem] leading-relaxed">
                  <div className="flex gap-2"><span className="text-ocean">›</span><span className="text-foreground">predict --next-30-days</span></div>
                  <div className="flex gap-2"><span className="text-emerald-400">  ✓ Risque sécurité : FAIBLE</span></div>
                  <div className="flex gap-2"><span className="text-emerald-400">  ✓ Score SEO : +8 pts estimés</span></div>
                  <div className="flex gap-2"><span className="text-amber-400">  ⚡ Perf. mobile : à optimiser</span></div>
                  <div className="flex gap-2"><span className="text-emerald-400">  ✓ Disponibilité prévue : 99.98%</span></div>
                  <div className="flex gap-2"><span className="text-muted-foreground">  Rapport complet → vous</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── VILLES ─── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-8 animate-in">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ocean mb-4">Zone d'intervention</div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Maintenance web au <em className="not-italic text-ocean">Pays Basque</em></h2>
            <p className="text-sm text-muted-foreground">Waveia accompagne les entreprises du Pays Basque dans leur maintenance web avec une présence locale forte.</p>
          </div>

          <div className="flex flex-wrap gap-3 animate-in delay-100">
            {['📍 Bayonne', '📍 Biarritz', '📍 Anglet', '📍 Bidart', '📍 Hossegor', '📍 Saint-Jean-de-Luz', '📍 Boucau', '📍 Hendaye', '📍 Pays Basque'].map((city, i) => (
              <span key={i} className="px-5 py-2.5 border border-border bg-card hover:bg-ocean/5 hover:border-ocean/30 text-muted-foreground hover:text-foreground text-[0.88rem] rounded-full transition-all cursor-default">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ocean mb-4">Questions fréquentes</div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading">Tout savoir sur la <br/> maintenance web <em className="not-italic text-ocean">Waveia</em></h2>
          </div>

          <div className="space-y-3 animate-in delay-100">
            {[
              { q: "En quoi la maintenance Waveia est-elle différente d'une maintenance classique ?", a: "Là où une agence classique se contente de faire des mises à jour ponctuelles, Waveia intègre l'intelligence artificielle pour surveiller votre site en temps réel, prédire les risques avant qu'ils surviennent, optimiser les performances en continu et aligner chaque action avec vos objectifs commerciaux. C'est une maintenance proactive, pas réactive." },
              { q: "Quelles technologies et CMS prenez-vous en charge ?", a: "Waveia assure la maintenance de sites WordPress, Webflow, Shopify, PrestaShop, ainsi que les applications web sur mesure (React, Next.js, Vue.js, Laravel…). Quelle que soit la stack technique de votre site, notre équipe est formée pour l'accompagner." },
              { q: "Que se passe-t-il si mon site tombe en panne ?", a: "Notre système de monitoring détecte une indisponibilité en moins de 60 secondes et alerte automatiquement notre équipe. Selon votre forfait, le délai d'intervention garanti est de 2h à 4h. Dans la plupart des cas, votre site est restauré bien avant que vos visiteurs ne s'en aperçoivent." },
              { q: "Combien coûte la maintenance web chez Waveia ?", a: "Nos forfaits de maintenance démarrent à partir de 79€/mois pour un site vitrine standard. Le tarif dépend de la complexité de votre site, du niveau de réactivité souhaité et des services inclus (SEO, optimisation conversion, reporting avancé…). Nous réalisons un audit gratuit avant toute proposition commerciale." },
              { q: "Avez-vous des clients dans le Pays Basque ?", a: "Oui, Waveia est une agence basée au Pays Basque et nous accompagnons des entreprises à Bayonne, Biarritz, Anglet, Bidart, Hossegor et Saint-Jean-de-Luz. Nous connaissons le tissu économique local et sommes disponibles pour des rencontres en présentiel si vous le souhaitez." },
              { q: "La maintenance inclut-elle aussi l'optimisation SEO ?", a: "Nos forfaits intermédiaires et avancés incluent un suivi SEO mensuel : audit technique, suivi de positions, détection d'erreurs d'indexation et recommandations de contenu. La maintenance devient ainsi un levier de croissance organique pour votre activité." },
              { q: "Puis-je résilier à tout moment ?", a: "Nos contrats de maintenance sont sans engagement longue durée. Vous pouvez résilier avec un préavis d'un mois. Nous pensons que la meilleure façon de vous garder, c'est de vous donner des résultats — pas de vous enfermer dans un contrat." }
            ].map((faq, i) => (
              <div key={i} className="glass-card border-border overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-transparent hover:bg-foreground/5 transition-colors"
                >
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  <span className={`text-ocean text-xl transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div 
                  className={`px-6 text-muted-foreground text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[300px] py-4 border-t border-border/50' : 'max-h-0 py-0'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-in">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ocean mb-4">Passez à l'action</div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6">Votre site mérite mieux<br/>qu'une maintenance <em className="not-italic text-ocean">basique</em></h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Obtenez un audit complet de votre site web — gratuit, sans engagement, réalisé par notre équipe Waveia en 48h.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
              Demander mon audit gratuit
            </a>
            <a href="tel:+33559000000" className="inline-flex items-center gap-2 bg-transparent text-foreground font-medium text-[0.95rem] px-8 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
              ☎ Nous appeler directement
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-in">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ocean mb-4">Contact</div>
              <h3 className="text-4xl font-extrabold font-heading mb-5">Parlons de votre<br/>projet digital</h3>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">Remplissez le formulaire pour recevoir votre audit gratuit ou pour échanger avec un expert Waveia. Nous répondons sous 24h ouvrées.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 rounded-xl flex items-center justify-center text-xl shrink-0">📍</div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Zone d'intervention principale</div>
                    <div className="font-medium text-foreground">Pays Basque — Bayonne, Biarritz, Anglet…</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 rounded-xl flex items-center justify-center text-xl shrink-0">✉️</div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                    <div className="font-medium text-foreground">contact@waveia.fr</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 rounded-xl flex items-center justify-center text-xl shrink-0">⚡</div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Délai de réponse</div>
                    <div className="font-medium text-foreground">Sous 24h ouvrées</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 md:p-10 border-border rounded-2xl animate-in delay-100">
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.82rem] font-medium text-muted-foreground mb-2">Prénom *</label>
                    <input type="text" placeholder="Jean" className="w-full bg-foreground/5 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-ocean/60 focus:bg-ocean/5 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[0.82rem] font-medium text-muted-foreground mb-2">Nom *</label>
                    <input type="text" placeholder="Dupont" className="w-full bg-foreground/5 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-ocean/60 focus:bg-ocean/5 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[0.82rem] font-medium text-muted-foreground mb-2">Email professionnel *</label>
                  <input type="email" placeholder="jean@entreprise.fr" className="w-full bg-foreground/5 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-ocean/60 focus:bg-ocean/5 transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.82rem] font-medium text-muted-foreground mb-2">Téléphone</label>
                  <input type="tel" placeholder="+33 6 XX XX XX XX" className="w-full bg-foreground/5 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-ocean/60 focus:bg-ocean/5 transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.82rem] font-medium text-muted-foreground mb-2">URL de votre site</label>
                  <input type="url" placeholder="https://monsite.fr" className="w-full bg-foreground/5 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-ocean/60 focus:bg-ocean/5 transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.82rem] font-medium text-muted-foreground mb-2">Votre ville</label>
                  <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-ocean/60 transition-colors appearance-none">
                    <option value="">Sélectionnez une ville</option>
                    <option>Bayonne</option>
                    <option>Biarritz</option>
                    <option>Anglet</option>
                    <option>Bidart</option>
                    <option>Hossegor</option>
                    <option>Saint-Jean-de-Luz</option>
                    <option>Boucau</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[0.82rem] font-medium text-muted-foreground mb-2">Votre message</label>
                  <textarea placeholder="Décrivez brièvement votre site et vos besoins en maintenance…" className="w-full bg-foreground/5 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-ocean/60 focus:bg-ocean/5 transition-colors min-h-[110px] resize-y"></textarea>
                </div>
                <button type="button" className="w-full bg-primary text-white font-heading font-bold text-[0.95rem] py-3.5 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all mt-2 shadow-lg shadow-ocean/20">
                  Envoyer ma demande d'audit →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
