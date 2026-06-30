"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, Shield, Zap, Search, Server, Activity, ArrowUpRight, 
  Check, X, Database, LifeBuoy, TrendingUp, TrendingDown, TriangleAlert, ShieldAlert, Cpu, Maximize, ChevronDown
} from 'lucide-react';

export function MaintenanceWebLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openGovIndex, setOpenGovIndex] = useState<number | null>(0);

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
        {/* Glow & Grid Backgrounds */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full z-10">
          <div className="text-center max-w-4xl mx-auto py-12 md:py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-7">
              <span className="w-1.5 h-1.5 bg-ocean rounded-full animate-pulse-glow" />
              GOUVERNANCE TECHNIQUE & SÉCURITÉ (TMA)
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Ne laissez aucune faille<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                paralyser votre activité.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Une infrastructure web sans supervision stricte se dégrade inévitablement. Failles de sécurité, obsolescence du code ou surcharge des serveurs : chaque minute de temps d'arrêt vous coûte de l'argent et dégrade votre image de marque. Chez Waveia, notre pôle d'ingénierie déploie une Tierce Maintenance Applicative (TMA) proactive. Nous monitorons, sécurisons et optimisons votre plateforme en continu pour garantir une disponibilité totale à vos utilisateurs.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                <Shield className="w-4 h-4" /> Faire auditer la sécurité de mon site
              </a>
              <a href="#services-details" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-[0.95rem] font-medium px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir nos niveaux de couverture <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Dashboard-like Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
              <div className="glass-card border border-border p-6 rounded-2xl relative overflow-hidden group hover:border-ocean/30 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ocean/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-[0.95rem] font-bold text-foreground leading-tight mb-4">Supervision active<br/>24/7</h3>
                <p className="text-[0.85rem] text-muted-foreground leading-relaxed">Monitoring en temps réel de vos serveurs pour détecter et bloquer la moindre anomalie avant la panne.</p>
              </div>

              <div className="glass-card border border-border p-6 rounded-2xl relative overflow-hidden group hover:border-ocean/30 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ocean/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-[0.95rem] font-bold text-foreground leading-tight mb-4">Mises à jour<br/>sécurisées</h3>
                <p className="text-[0.85rem] text-muted-foreground leading-relaxed">Tests de compatibilité sur environnement privé (pré-production) pour garantir zéro régression lors des mises à jour.</p>
              </div>

              <div className="glass-card border border-border p-6 rounded-2xl relative overflow-hidden group hover:border-ocean/30 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ocean/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-[0.95rem] font-bold text-foreground leading-tight mb-4">Maintien de<br/>l'intégrité SEO</h3>
                <p className="text-[0.85rem] text-muted-foreground leading-relaxed">Surveillance quotidienne de la Search Console pour identifier et corriger les erreurs 404 ou les baisses d'indexation causées par un bug.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ÉVALUATION DES VULNÉRABILITÉS ─── */}
      <section id="vulnerabilites" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <span className="w-5 h-[1.5px] bg-primary"></span>
              ÉVALUATION DES VULNÉRABILITÉS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground leading-tight mb-6">
              L'inertie technique coûte systématiquement plus cher que la <span className="text-ocean">prévention</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Pour une entreprise structurée, un site web est un actif financier stratégique. Qu'il génère des ventes directes ou centralise votre acquisition de leads, le laisser sans supervision stricte revient à s'exposer à trois défaillances dont l'impact sur votre chiffre d'affaires est immédiat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-in delay-100">
            {/* Carte 1 */}
            <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[400px]">
              <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">01</div>
              <div className="relative z-10 flex-1">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">La friction de conversion</h3>
                <span className="text-ocean text-sm font-semibold uppercase tracking-wider block mb-6">(Le Risque Financier)</span>
                <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">Une infrastructure non optimisée détruit vos ventes.</strong>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  La dette technique s'accumule silencieusement : bases de données surchargées, code obsolète, conflits entre composants. Cette détérioration entraîne des lenteurs de chargement et des bugs d'interface (boutons inactifs, formulaires bloqués). En e-commerce comme en B2B, cette friction technique se traduit mécaniquement par une explosion du taux de rebond, des abandons de panier et une perte nette de chiffre d'affaires quotidien.
                </p>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[400px]">
              <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">02</div>
              <div className="relative z-10 flex-1">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">La faille de sécurité</h3>
                <span className="text-ocean text-sm font-semibold uppercase tracking-wider block mb-6">(Le Risque Légal & Réputationnel)</span>
                <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">Vos données clients sont exposées.</strong>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  Les composants (CMS, thèmes, extensions) qui ne sont pas mis à jour régulièrement constituent la porte d'entrée principale des attaques automatisées. L'exploitation d'une faille de sécurité entraîne non seulement la paralysie temporaire de votre activité, mais expose surtout votre base de données clients. Au-delà du risque de non-conformité stricte au RGPD, un piratage dévaste instantanément l'autorité de votre marque et la confiance de vos partenaires commerciaux.
                </p>
              </div>
            </div>

            {/* Carte 3 */}
            <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[400px]">
              <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">03</div>
              <div className="relative z-10 flex-1">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">L'effondrement de votre SEO</h3>
                <span className="text-ocean text-sm font-semibold uppercase tracking-wider block mb-6">(Le Risque Organique)</span>
                <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">La destruction de votre patrimoine d'acquisition Google.</strong>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  L'algorithme de Google pénalise sévèrement l'instabilité technique. Des erreurs 404 non corrigées, des ressources inaccessibles ou des micro-coupures de serveurs répétées envoient un signal d'alerte négatif aux robots d'exploration (crawlers). La sanction est implacable : une désindexation progressive de vos pages stratégiques, réduisant à néant des années d'investissements SEO et offrant vos positions à vos concurrents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOUVERNANCE & INGÉNIERIE ─── */}
      <section id="gouvernance" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div>
              GOUVERNANCE & INGÉNIERIE
              <div className="w-5 h-[1.5px] bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground leading-tight mb-6">
              Votre direction technique externalisée : <br className="hidden md:block" />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                de la sécurité à la rentabilité.
              </em>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nous ne sommes pas un centre d'assistance réactif qui se contente de corriger des bugs. Confier votre plateforme à Waveia, c'est intégrer un pôle d'ingénierie et de direction technique (CTO externalisé) dédié à la continuité et à la rentabilité de votre infrastructure.
            </p>
          </div>

          <div className="space-y-4 animate-in delay-100 max-w-4xl mx-auto">
            {[
              {
                title: "Audit Technique & Reprise",
                subtitle: "Cartographier les risques pour sécuriser les fondations.",
                desc: "Nous ne reprenons jamais le contrôle d'une plateforme à l'aveugle. L'audit est un diagnostic approfondi qui vérifie la viabilité de votre écosystème avant toute intervention.",
                bullets: [
                  { label: "Contrôle d'infrastructure", text: "Évaluation de la robustesse de votre hébergement et de sa capacité à absorber vos pics de trafic." },
                  { label: "Performance applicative", text: "Analyse du code source, de la vitesse d'exécution et de la fluidité (Core Web Vitals)." },
                  { label: "Livrable décisionnel", text: "Remise d'une feuille de route chiffrée listant les actions prioritaires pour purger la dette technique et assainir la plateforme." }
                ]
              },
              {
                title: "TMA (Maintenance Corrective & Préventive)",
                subtitle: "Garantir une continuité de service absolue (99,9%).",
                desc: "C'est le bouclier technologique de votre entreprise. Notre équipe s'assure que votre site fonctionne de manière optimale, 24 heures sur 24, sans aucune régression.",
                bullets: [
                  { label: "Prévention sécurisée", text: "Application des mises à jour de sécurité (CMS, modules, API) testées au préalable sur un serveur de pré-production privé." },
                  { label: "Intervention prioritaire (SLA)", text: "Correction immédiate des anomalies bloquantes (tunnel de paiement, formulaires) avec des temps de réponse garantis par contrat." },
                  { label: "Monitoring actif", text: "Surveillance en temps réel de vos serveurs pour anticiper les pannes avant même qu'elles n'impactent vos utilisateurs." }
                ]
              },
              {
                title: "TME (Maintenance Évolutive)",
                subtitle: "Adapter votre outil aux exigences du marché.",
                desc: "Votre entreprise grandit, votre site web doit pouvoir s'adapter sans nécessiter une refonte coûteuse chaque année. La TME est une enveloppe d'heures d'ingénierie dédiée à votre croissance.",
                bullets: [
                  { label: "Développement de fonctionnalités", text: "Intégration de nouveaux connecteurs (ERP, CRM), de nouvelles passerelles de paiement ou de systèmes de fidélité." },
                  { label: "Optimisation de la conversion (CRO)", text: "Ajustements ergonomiques continus (UX/UI) basés sur l'analyse de vos statistiques de navigation." },
                  { label: "Agilité opérationnelle", text: "Déploiement régulier de nouvelles briques technologiques pour vous maintenir en avance sur vos concurrents." }
                ]
              },
              {
                title: "Direction Conseil & Stratégie",
                subtitle: "L'architecture de votre rentabilité numérique.",
                desc: "La technique doit rester au service exclusif de votre business. Nos Directeurs Conseil verrouillent la rentabilité de vos investissements digitaux lors de points de pilotage réguliers.",
                bullets: [
                  { label: "Arbitrage technologique", text: "Nous vous guidons dans les choix d'architecture complexes pour aligner la technologie sur vos contraintes budgétaires actuelles et vos objectifs futurs." },
                  { label: "Sécurisation des périmètres", text: "Définition stricte des cahiers des charges pour vos nouvelles fonctionnalités, garantissant le respect absolu des coûts et des délais." },
                  { label: "Mesure d'impact", text: "Analyse de la performance globale et recommandations stratégiques pour le trimestre suivant." }
                ]
              }
            ].map((section, idx) => (
              <div 
                key={idx} 
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openGovIndex === idx ? 'ring-1 ring-ocean/50 shadow-[0_0_30px_rgba(14,165,233,0.1)]' : 'hover:border-ocean/30'}`}
              >
                <button
                  onClick={() => setOpenGovIndex(openGovIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center">
                    <h3 className="font-heading font-bold text-lg text-foreground">{section.title}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openGovIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {openGovIndex === idx && (
                  <div className="px-6 pb-6 pt-2 border-t border-border/50 mx-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <span className="text-ocean text-sm font-semibold block mb-4">{section.subtitle}</span>
                    <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-6">
                      {section.desc}
                    </p>
                    <ul className="space-y-4">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-3 items-start">
                          <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-ocean" /></div>
                          <div className="text-[0.85rem] text-muted-foreground leading-relaxed">
                            <strong className="text-foreground font-medium block mb-0.5">{bullet.label} :</strong> {bullet.text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROTOCOLE D'INTÉGRATION ─── */}
      <section id="protocole-integration" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> PROTOCOLE D'INTÉGRATION
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Une transition sans friction : notre processus de reprise en 4 phases.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Confier les clés de son infrastructure exige des garanties de stabilité. Nous ne naviguons jamais à vue et ne modifions jamais un code existant sans l'avoir cartographié. Pour assurer une continuité de service totale, le transfert de votre plateforme vers notre pôle technique obéit à un processus d'ingénierie strict et standardisé.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent z-0"></div>
            
            {[
              {
                num: "01",
                title: "Onboarding & Audit d'entrée (Semaine 1)",
                subtitle: "La prise de contrôle sécurisée.",
                desc: "La prestation débute par la cartographie de votre existant. Nous centralisons et sécurisons l'ensemble de vos accès (serveurs, DNS, bases de données). Un scan complet de l'infrastructure est réalisé pour identifier les vulnérabilités, suivi de la création d'un environnement de pré-production (un clone privé de votre site) qui servira de laboratoire pour nos futures interventions."
              },
              {
                num: "02",
                title: "Mise sous protection & Stabilisation (Mois 1)",
                subtitle: "Le déploiement du bouclier technique.",
                desc: "Une fois l'audit validé, nous verrouillons la plateforme avant toute évolution. Nous configurons un Plan de Continuité d'Activité (PCA) impliquant des sauvegardes externalisées haute fréquence. En parallèle, nous installons nos sondes de monitoring (Uptime) pour surveiller la disponibilité des serveurs en temps réel, et nous purgeons les failles critiques identifiées lors de la première phase."
              },
              {
                num: "03",
                title: "Cycles de Maintenance Préventive (Mensuel)",
                subtitle: "La garantie anti-régression.",
                desc: "Chaque mois, l'obsolescence de votre code est traitée de manière proactive. L'intégralité des mises à jour (CMS, API, modules) est d'abord déployée sur l'environnement de test privé. Nous réalisons une recette fonctionnelle rigoureuse pour vérifier qu'aucun bug n'est généré. Une fois la stabilité validée, la bascule sur le site public s'effectue avec un temps de coupure réduit à zéro."
              },
              {
                num: "04",
                title: "Pilotage Stratégique & Évolution (Trimestriel)",
                subtitle: "L'alignement technologique et financier.",
                desc: "Votre infrastructure doit s'adapter à votre croissance. Chaque trimestre, un comité de pilotage est organisé avec votre Direction. Nous vous remettons un rapport de transparence listant les actions menées et l'état des serveurs, et nous planifions ensemble les développements évolutifs (TME) nécessaires pour répondre à vos nouveaux enjeux commerciaux."
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full border border-ocean/30 flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-card relative z-20 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                  {step.num}
                </div>
                <div className="pt-2 relative z-10">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-1 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <span className="block text-ocean text-sm font-semibold uppercase tracking-wider mb-4">
                    {step.subtitle}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed md:w-[90%]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RÉACTIVITÉ & GARANTIES (SLA) ─── */}
      <section id="sla-garanties" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div>
              RÉACTIVITÉ & GARANTIES (SLA)
              <div className="w-5 h-[1.5px] bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground leading-tight mb-6">
              Temps de réponse garantis (SLA). Traçabilité totale. <br className="hidden md:block" />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Zéro zone d'ombre. C'est une garantie écrite.
              </em>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En cas d'incident critique — un tunnel de paiement inopérant en pleine campagne d'acquisition ou un crash serveur un vendredi à 16h —, chaque minute de latence ampute votre chiffre d'affaires. Chez Waveia, notre disponibilité n'est pas soumise à l'improvisation. Elle est encadrée par un Service Level Agreement (SLA) strict qui vous assure une mobilisation immédiate de nos ingénieurs.
            </p>
          </div>

          <div className="max-w-5xl mx-auto animate-in delay-100">
            <h3 className="font-heading font-bold text-xl text-foreground text-center mb-10">Nos Garanties de Temps d'Intervention (GTI)</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Carte Critique */}
              <div className="glass-card bg-background/40 border border-red-500/30 p-8 rounded-2xl flex flex-col relative overflow-hidden group hover:border-red-500/60 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all"></div>
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></span>
                  <span className="font-bold text-red-500 tracking-wide uppercase text-sm">Critique (P1)</span>
                </div>

                <div className="mb-8 relative z-10">
                  <h4 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                    Site inaccessible, paiements bloqués, faille de sécurité avérée.
                  </h4>
                </div>
                
                <div className="mt-auto relative z-10 border-t border-border/50 pt-6">
                  <div className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-1">Prise en charge garantie</div>
                  <div className="text-4xl md:text-5xl font-heading font-black text-foreground">
                    &lt; 2 <span className="text-xl text-muted-foreground font-medium">heures</span>
                  </div>
                </div>
              </div>

              {/* Carte Majeure */}
              <div className="glass-card bg-background/40 border border-orange-500/30 p-8 rounded-2xl flex flex-col relative overflow-hidden group hover:border-orange-500/60 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]"></span>
                  <span className="font-bold text-orange-500 tracking-wide uppercase text-sm">Majeure (P2)</span>
                </div>

                <div className="mb-8 relative z-10">
                  <h4 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                    Fonctionnalité clé dégradée, chute anormale des performances.
                  </h4>
                </div>
                
                <div className="mt-auto relative z-10 border-t border-border/50 pt-6">
                  <div className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-1">Prise en charge garantie</div>
                  <div className="text-4xl md:text-5xl font-heading font-black text-foreground">
                    &lt; 4 <span className="text-xl text-muted-foreground font-medium">heures</span>
                  </div>
                </div>
              </div>

              {/* Carte Mineure */}
              <div className="glass-card bg-background/40 border border-ocean/30 p-8 rounded-2xl flex flex-col relative overflow-hidden group hover:border-ocean/60 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ocean/10 rounded-full blur-3xl group-hover:bg-ocean/20 transition-all"></div>
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="w-3 h-3 rounded-full bg-ocean shadow-[0_0_10px_rgba(14,165,233,0.6)]"></span>
                  <span className="font-bold text-ocean tracking-wide uppercase text-sm">Mineure (P3)</span>
                </div>

                <div className="mb-8 relative z-10">
                  <h4 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                    Bug d'affichage mineur, demande d'évolution ou question technique.
                  </h4>
                </div>
                
                <div className="mt-auto relative z-10 border-t border-border/50 pt-6">
                  <div className="text-ocean text-xs font-semibold uppercase tracking-widest mb-1">Prise en charge garantie</div>
                  <div className="text-4xl md:text-5xl font-heading font-black text-foreground">
                    &lt; 24 <span className="text-xl text-muted-foreground font-medium">h <span className="text-base">(ouvrées)</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div>
              QUESTIONS FRÉQUENTES
              <div className="w-5 h-[1.5px] bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground leading-tight">
              La transparence comme socle <br className="hidden md:block"/> de notre collaboration.
            </h2>
          </div>

          <div className="space-y-4 animate-in delay-100">
            {[
              { q: "Prenez-vous en maintenance un site que vous n'avez pas créé ?", a: "Oui, c'est notre spécialité. Reprendre une plateforme existante demande une rigueur méthodologique particulière. Notre collaboration débute systématiquement par un Audit Technique & Reprise complet. Nous cartographions votre architecture, purgerons les failles critiques et stabilisons l'existant avant d'engager notre responsabilité technique." },
              { q: "Comment est structurée la facturation de la maintenance ?", a: "Pour garantir une parfaite prévisibilité budgétaire, notre gouvernance fonctionne par abonnement mensuel forfaitaire. Ce forfait est dimensionné selon trois piliers : la complexité technique de votre environnement, le niveau de SLA (temps d'intervention) requis, et le volume d'heures de maintenance évolutive (TME) dédié à votre croissance." },
              { q: "Puis-je reporter mes heures d'évolution (TME) non consommées ?", a: "Absolument. Nous savons que votre activité suit des cycles. Si votre crédit d'heures d'ingénierie n'est pas consommé un mois donné, nous le reportons et le mutualisons sur le trimestre. Cela vous permet d'accumuler de la force de développement pour réaliser des chantiers plus ambitieux sans surcoût ponctuel." },
              { q: "Où sont hébergées nos données et nos sauvegardes ?", a: "Vos données sont hébergées exclusivement sur des infrastructures sécurisées basées en France ou en Union Européenne, respectant strictement le RGPD. Nos sauvegardes (Plan de Continuité d'Activité) sont systématiquement externalisées sur des serveurs physiquement distincts du serveur maître pour garantir une restauration rapide en toutes circonstances." },
              { q: "En quoi consiste précisément votre système de ticketing ?", a: "Fini l'incertitude des e-mails. Vous disposez d'un accès à notre plateforme de support dédiée. Chaque demande, qu'il s'agisse d'un incident ou d'une demande d'évolution, génère un ticket horodaté. Vous suivez en temps réel la prise en charge, l'avancement et la résolution par nos ingénieurs, garantissant une transparence totale sur notre activité." },
              { q: "Quel est le délai moyen pour une demande d'évolution mineure ?", a: "Pour les évolutions ne nécessitant pas de refonte structurelle (ex: modification d'une page, ajout d'une bannière, réglage CSS), nous traitons généralement les tickets sous 24 à 48 heures ouvrées. Si l'évolution demande une étude plus complexe, votre chef de projet vous soumet une estimation de charge avant toute intervention." },
              { q: "La maintenance inclut-elle les frais d'hébergement et de nom de domaine ?", a: "Notre mission de TMA/TME se concentre sur l'intelligence et la sécurité de votre application. Nous pouvons gérer votre hébergement (infogérance) pour optimiser les performances, mais nous restons flexibles : vous conservez toujours la propriété pleine et entière de vos noms de domaine et de vos contrats d'hébergement." },
              { q: "Que se passe-t-il si mon site nécessite une refonte complète ?", a: "L'audit technique initial est justement là pour répondre à cette question. Si nous identifions qu'une maintenance est techniquement impossible ou trop coûteuse face à l'obsolescence du code (dette technique trop lourde), nous vous le dirons honnêtement. Dans ce cas, nous basculons sur un accompagnement en \"Refonte\" plutôt que sur un contrat de maintenance." }
            ].map((faq, i) => (
              <div key={i} className="glass-card border border-border/50 overflow-hidden rounded-2xl hover:border-ocean/30 transition-colors duration-300">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-transparent focus:outline-none group"
                >
                  <span className="font-bold text-foreground pr-8 group-hover:text-ocean transition-colors">{faq.q}</span>
                  <span className={`text-ocean text-2xl font-light transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div 
                  className={`px-6 text-muted-foreground text-[0.95rem] leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] pb-6 border-t border-border/50 pt-4' : 'max-h-0 py-0'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL (PRÉCISION & SÉCURITÉ) ─── */}
      <section className="py-24 bg-[#050505] relative overflow-hidden border-y border-border/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocean/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-in delay-100">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-6">
            <div className="w-5 h-[1.5px] bg-ocean"></div>
            PRÉCISION & SÉCURITÉ
            <div className="w-5 h-[1.5px] bg-ocean"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-8">
            La stabilité de votre infrastructure commence par un diagnostic clair.
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Ne laissez plus votre plateforme fonctionner sans supervision. Réservez un échange confidentiel avec notre direction technique. Nous auditerons ensemble l'état de santé de votre écosystème digital pour identifier vos vulnérabilités immédiates et bâtir la stratégie de maintenance adaptée à vos enjeux de croissance.
          </p>
          
          <div className="flex flex-col items-center justify-center">
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-ocean text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10">Demander l'audit technique de ma plateforme</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="mt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-muted-foreground/80 font-medium">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ocean" /> Échange d'expert à dirigeant</span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ocean" /> Cartographie de vos risques</span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ocean" /> Aucun engagement</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
