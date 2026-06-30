"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Quote, Star, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export function AuditSeoLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="w-full relative z-10 pt-20">
      
      {/* Inline Styles for specific custom animations  */}
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
          <div className="text-center max-w-4xl mx-auto py-12 md:py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              DIAGNOSTIC DE POSITIONNEMENT
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Pourquoi vos concurrents sont-ils devant vous sur Google ?<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Découvrez-le.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Le référencement naturel ne laisse aucune place au hasard. Si votre site n'attire pas de clients, c'est que des erreurs invisibles pénalisent son indexation. Nous réalisons une inspection technique complète de votre écosystème pour détecter ces failles. Recevez un diagnostic factuel et des recommandations stratégiques pour récupérer vos positions et distancer la concurrence.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Analyser mon positionnement (Gratuit) <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#process" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir notre méthodologie
              </a>
            </div>
            
            <div className="mt-14 flex flex-col md:flex-row justify-center gap-8 md:gap-6 text-sm text-muted-foreground text-left max-w-5xl mx-auto">
              <div className="flex-1 flex flex-col gap-2 px-2">
                <span className="flex items-center gap-2 text-foreground font-semibold"><Check className="w-4 h-4 text-ocean shrink-0" /> + de 110 points de contrôle analysés</span>
                <span className="text-xs text-muted-foreground/80 leading-relaxed">Crawl complet de votre architecture technique, de la qualité de vos contenus (sémantique) et de la popularité de votre domaine (backlinks).</span>
              </div>
              <div className="hidden md:block w-px bg-border/60"></div>
              <div className="flex-1 flex flex-col gap-2 px-2">
                <span className="flex items-center gap-2 text-foreground font-semibold"><Check className="w-4 h-4 text-ocean shrink-0" /> La règle des 75 %</span>
                <span className="text-xs text-muted-foreground/80 leading-relaxed">Les trois premiers résultats sur Google captent les trois quarts des clics. Nous identifions les mots-clés "à portée de main" pour vous y hisser rapidement.</span>
              </div>
              <div className="hidden md:block w-px bg-border/60"></div>
              <div className="flex-1 flex flex-col gap-2 px-2">
                <span className="flex items-center gap-2 text-foreground font-semibold"><Check className="w-4 h-4 text-ocean shrink-0" /> 100 % Actionnable et ROIste</span>
                <span className="text-xs text-muted-foreground/80 leading-relaxed">Vous ne recevez pas un simple rapport automatisé, mais un diagnostic commenté par un expert avec les corrections classées par niveau d'urgence.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIGNAUX D'ALERTE ─── */}
      <section className="py-24 relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.03),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-4">
              <div className="w-5 h-[1.5px] bg-red-500/50"></div> SIGNAUX D'ALERTE <div className="w-5 h-[1.5px] bg-red-500/50"></div>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Si vous rencontrez l'une de ces 4 situations, un audit technique est <em className="not-italic text-red-500 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:to-transparent">urgent.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Un problème de référencement ne se résout jamais tout seul. L'algorithme de Google est binaire : si votre plateforme présente des freins structurels, elle sera mécaniquement déclassée au profit de vos concurrents. Voici les 4 symptômes qui indiquent que votre site perd actuellement de l'argent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {[
              { 
                t: "Le crash inexpliqué", 
                d: "Vous avez récemment mis en ligne un nouveau site web, ou Google a déployé une mise à jour d'algorithme, et votre trafic organique s'est effondré. Cette chute brutale indique très souvent un plan de redirection (301) défaillant ou des pages stratégiques brutalement désindexées." 
              },
              { 
                t: "Le plafond de verre",
                d: "Vos pages de vente ou vos articles de blog sont de très bonne qualité, mais ils stagnent désespérément en bas de la première page ou en deuxième page de Google. Vous n'arrivez pas à percer le Top 3 (qui capte 75% des clics), signe d'un manque criant de popularité (Backlinks) ou de maillage interne défaillant." 
              },
              { 
                t: "Le trafic \"Fantôme\"",
                d: "Vos statistiques Analytics sont bonnes, vous attirez du monde, mais votre formulaire de contact reste vide. C'est le symptôme classique d'une erreur d'intention de recherche : vous êtes bien référencé, mais sur des mots-clés informationnels (des curieux) et non sur des requêtes transactionnelles (des acheteurs B2B)." 
              },
              { 
                t: "Le hold-up concurrentiel",
                d: "Des concurrents plus récents, plus petits, et avec des sites web visuellement moins esthétiques que le vôtre accaparent les premières positions sur vos mots-clés les plus rentables. Leur plateforme est techniquement et sémantiquement mieux optimisée pour l'algorithme que la vôtre." 
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-2xl border border-red-500/20 bg-red-500/5 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300 group flex flex-col items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-3 md:mb-4 relative z-10">
                  <h3 className="text-lg md:text-xl font-bold font-heading text-foreground group-hover:text-red-500 transition-colors duration-300 leading-tight">
                    {item.t}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.d}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <p className="text-sm md:text-lg font-medium text-foreground bg-red-500/5 border border-red-500/20 rounded-xl p-5 md:p-6 backdrop-blur-sm">
              Ne laissez pas la situation s'aggraver au fil des mois. L'audit SEO est le seul moyen de poser un diagnostic clinique sur ces anomalies et d'inverser la tendance.
            </p>
          </div>
        </div>
      </section>

      {/* ─── LE CONSTAT ─── */}
      <section className="py-24 relative overflow-hidden border-b border-border/50">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> PERFORMANCES & VISIBILITÉ <div className="w-5 h-[1.5px] bg-primary"></div>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Identifiez vos failles avant qu'elles ne profitent à vos <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">concurrents.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Le référencement naturel n'est pas une question de hasard, c'est une science de l'optimisation. Cet audit gratuit est le point de départ indispensable de toute stratégie de croissance digitale. Il vous permet d'évaluer factuellement les performances actuelles de votre plateforme, de détecter les lacunes qui pénalisent votre indexation, et de définir des actions correctives pour attirer un trafic "hors marque" hautement qualifié.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: "Comprendre l'algorithme", 
                desc: "Découvrez pourquoi certaines de vos pages clés sont ignorées par Google." 
              },
              { 
                title: "Purger les erreurs techniques", 
                desc: "Identifiez les freins invisibles qui dégradent l'expérience utilisateur et votre positionnement." 
              },
              { 
                title: "Cartographier la concurrence", 
                desc: "Mesurez l'écart qui vous sépare des leaders de votre secteur." 
              },
              { 
                title: "Bâtir un plan d'action ROIste", 
                desc: "Obtenez des recommandations prioritaires pour générer des ventes." 
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border border-border hover:-translate-y-1 hover:border-ocean/40 transition-all duration-300 group flex flex-col items-start animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i * 150}ms`}}>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-ocean transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE 360° ─── */}
      <section id="process" className="py-24 relative overflow-hidden border-b border-border/50 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.03),transparent_70%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> GOUVERNANCE SEO & EXPERTISE <div className="w-5 h-[1.5px] bg-primary"></div>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Une analyse chirurgicale basée sur les 3 piliers algorithmiques.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Notre processus d'investigation refuse les audits de surface. Nos ingénieurs et consultants SEO décortiquent votre écosystème selon les trois axes fondamentaux exigés par Google pour attribuer la position zéro.
            </p>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory md:snap-none hide-scrollbar animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 -mx-6 px-6 md:mx-0 md:px-0">
            {/* Pilier 1 */}
            <div className="glass-card glass-card-hover p-6 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0">
              <div className="absolute -right-4 -top-8 font-heading font-black text-[120px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">01</div>
              <div className="relative z-10 flex-1">
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">L'Audit Technique</h3>
                <span className="text-ocean text-xs font-bold uppercase tracking-wider block mb-6">(L'infrastructure & le Crawl)</span>
                <strong className="block text-foreground text-sm font-medium mb-6 pb-6 border-b border-border/50 leading-relaxed">
                  Garantir une accessibilité parfaite aux robots d'indexation.
                </strong>
                <ul className="space-y-6">
                  {[
                    { t: "Analyse du budget de Crawl & Logs", d: "Vérification de la fréquence de passage de Googlebot et identification des pages chronophages inutiles." },
                    { t: "Performance et Core Web Vitals", d: "Mesure des temps de réponse serveur (TTFB), de la stabilité visuelle (CLS) et du rendu JavaScript." },
                    { t: "Santé de l'indexation", d: "Traitement des codes erreurs (4xx, 5xx), chaînes de redirections complexes, et balises canoniques conflictuelles." },
                    { t: "Balisage structuré (Schema.org)", d: "Vérification de l'implémentation des micro-données pour générer des extraits enrichis (Rich Snippets)." }
                  ].map((li, i) => (
                    <li key={i} className="flex flex-col gap-1.5 border-l-2 border-ocean/30 pl-4 hover:border-ocean transition-colors duration-300">
                      <strong className="text-foreground text-sm font-heading block">{li.t}</strong>
                      <span className="text-xs md:text-sm text-muted-foreground leading-relaxed block">{li.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="glass-card glass-card-hover p-6 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0">
              <div className="absolute -right-4 -top-8 font-heading font-black text-[120px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">02</div>
              <div className="relative z-10 flex-1">
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">L'Audit Sémantique</h3>
                <span className="text-ocean text-xs font-bold uppercase tracking-wider block mb-6">(La Pertinence & l'EEAT)</span>
                <strong className="block text-foreground text-sm font-medium mb-6 pb-6 border-b border-border/50 leading-relaxed">
                  Prouver votre expertise à l'algorithme et répondre à l'intention de l'utilisateur.
                </strong>
                <ul className="space-y-6">
                  {[
                    { t: "Cartographie sémantique", d: "Analyse de l'arborescence en silos thématiques et de la pertinence de votre maillage interne." },
                    { t: "Hygiène du contenu", d: "Détection stricte du contenu dupliqué (Duplicate Content), du contenu pauvre (Thin Content) et des pages orphelines." },
                    { t: "Optimisation On-Page", d: "Audit de la hiérarchie Hn (H1, H2, H3), des balises Meta, et de l'optimisation du champ lexical (entités nommées)." },
                    { t: "Critères E.E.A.T", d: "Évaluation des signaux d'Expérience, d'Expertise, d'Autorité et de Fiabilité requis par Google pour les requêtes sensibles (YMYL)." }
                  ].map((li, i) => (
                    <li key={i} className="flex flex-col gap-1.5 border-l-2 border-ocean/30 pl-4 hover:border-ocean transition-colors duration-300">
                      <strong className="text-foreground text-sm font-heading block">{li.t}</strong>
                      <span className="text-xs md:text-sm text-muted-foreground leading-relaxed block">{li.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="glass-card glass-card-hover p-6 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0">
              <div className="absolute -right-4 -top-8 font-heading font-black text-[120px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">03</div>
              <div className="relative z-10 flex-1">
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">L'Audit Off-Site</h3>
                <span className="text-ocean text-xs font-bold uppercase tracking-wider block mb-6">(L'Autorité de Domaine)</span>
                <strong className="block text-foreground text-sm font-medium mb-6 pb-6 border-b border-border/50 leading-relaxed">
                  Mesurer et sécuriser la puissance de votre profil de liens.
                </strong>
                <ul className="space-y-6">
                  {[
                    { t: "Qualité du profil de Backlinks", d: "Analyse de la typologie des domaines référents et de la répartition de vos ancres de liens (risque de sur-optimisation)." },
                    { t: "Détection des menaces", d: "Identification des liens toxiques pouvant entraîner une pénalité algorithmique (Pingouin) ou manuelle." },
                    { t: "Benchmark Netlinking", d: "Comparaison de votre vélocité d'acquisition de liens face à vos 3 concurrents principaux." }
                  ].map((li, i) => (
                    <li key={i} className="flex flex-col gap-1.5 border-l-2 border-ocean/30 pl-4 hover:border-ocean transition-colors duration-300">
                      <strong className="text-foreground text-sm font-heading block">{li.t}</strong>
                      <span className="text-xs md:text-sm text-muted-foreground leading-relaxed block">{li.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}} />
        </div>
      </section>

      {/* ─── OUTILS & PREUVE SOCIALE ─── */}
      <section className="py-24 relative overflow-hidden border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
                <div className="w-5 h-[1.5px] bg-primary"></div> TECHNOLOGIE & RÉSULTATS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-6 leading-tight">
                Une stack technologique de pointe au service de votre <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">croissance.</em>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                Pour vous fournir des données d'une précision absolue, notre agence s'appuie sur les licences des outils d'analyse les plus puissants du marché mondial. C'est le croisement de ces données et de notre expertise humaine (plus de 110 critères vérifiés) qui garantit le succès de nos recommandations.
              </p>
              
              <h3 className="font-heading text-lg font-bold text-foreground mb-6">Nos outils d'investigation SEO :</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-ocean/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-ocean" />
                  </div>
                  <div>
                    <strong className="block text-foreground font-heading text-[0.95rem] mb-1">Screaming Frog</strong>
                    <p className="text-sm text-muted-foreground leading-relaxed">Pour le crawl technique exhaustif de votre architecture.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-ocean/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-ocean" />
                  </div>
                  <div>
                    <strong className="block text-foreground font-heading text-[0.95rem] mb-1">Semrush & Ahrefs</strong>
                    <p className="text-sm text-muted-foreground leading-relaxed">Pour l'analyse concurrentielle et la stratégie sémantique.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-ocean/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-ocean" />
                  </div>
                  <div>
                    <strong className="block text-foreground font-heading text-[0.95rem] mb-1">Google Search Console</strong>
                    <p className="text-sm text-muted-foreground leading-relaxed">Pour la vérification de l'indexation directe.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 mt-12 lg:mt-0">
              {/* Testimonials */}
              <div className="glass-card p-6 rounded-2xl border border-border hover:border-ocean/40 transition-colors duration-300 relative overflow-hidden group bg-background/50 backdrop-blur-md">
                <div className="absolute top-4 right-4 text-ocean/10 group-hover:text-ocean/20 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-foreground font-medium mb-4 leading-relaxed relative z-10 italic">
                  "L'audit technique réalisé par WaveIA a permis d'identifier des points de blocage que trois agences précédentes n'avaient pas vus. Une réactivité impressionnante."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center font-bold text-xs text-ocean">L.D</div>
                  <div>
                    <div className="text-sm font-bold font-heading text-foreground">Directeur Digital</div>
                    <div className="text-xs text-muted-foreground">Secteur Immobilier</div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-border hover:border-ocean/40 transition-colors duration-300 relative overflow-hidden group lg:translate-x-6 bg-background/50 backdrop-blur-md">
                <div className="absolute top-4 right-4 text-ocean/10 group-hover:text-ocean/20 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-foreground font-medium mb-4 leading-relaxed relative z-10 italic">
                  "Une expertise pointue et des recommandations immédiatement applicables. Notre trafic organique a explosé suite à la correction des failles détectées."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center font-bold text-xs text-ocean">M.T</div>
                  <div>
                    <div className="text-sm font-bold font-heading text-foreground">Responsable E-commerce</div>
                    <div className="text-xs text-muted-foreground">Secteur Alimentaire Premium</div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-border hover:border-ocean/40 transition-colors duration-300 relative overflow-hidden group bg-background/50 backdrop-blur-md">
                <div className="absolute top-4 right-4 text-ocean/10 group-hover:text-ocean/20 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-foreground font-medium mb-4 leading-relaxed relative z-10 italic">
                  "On avait un site refait à neuf, mais invisible sur Google. L'audit de Waveia a mis le doigt sur des problèmes techniques qu'on ne soupçonnait pas du tout. Le plan d'action était clair, sans jargon inutile, et on a enfin commencé à voir notre trafic décoller de manière pérenne."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center font-bold text-xs text-ocean">S.B</div>
                  <div>
                    <div className="text-sm font-bold font-heading text-foreground">Gérant</div>
                    <div className="text-xs text-muted-foreground">Secteur Services B2B</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LE LIVRABLE (RESTITUTION) ─── */}
      <section className="py-24 relative overflow-hidden border-b border-border/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.08),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-16">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
                <div className="w-5 h-[1.5px] bg-primary"></div> PLAN D'ACTION <div className="w-5 h-[1.5px] bg-primary"></div>
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-6 leading-tight">
                Des recommandations concrètes, prêtes à être <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">déployées.</em>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                Si les outils génèrent des données brutes, seuls des experts peuvent les traduire en stratégie. À l'issue de notre audit, nous ne vous laissons pas seul avec un fichier complexe.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-border hover:-translate-y-1 hover:border-ocean/40 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center shrink-0 group-hover:bg-ocean group-hover:text-white transition-colors duration-300">
                  <span className="font-heading font-black text-xl">1</span>
                </div>
                <div>
                  <strong className="block text-foreground font-heading text-xl mb-3 group-hover:text-ocean transition-colors duration-300">Restitution commentée</strong>
                  <p className="text-sm text-muted-foreground leading-relaxed">Un consultant expert vous présente les résultats lors d'un échange dédié pour s'assurer que chaque point est compris.</p>
                </div>
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-border hover:-translate-y-1 hover:border-ocean/40 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center shrink-0 group-hover:bg-ocean group-hover:text-white transition-colors duration-300">
                  <span className="font-heading font-black text-xl">2</span>
                </div>
                <div>
                  <strong className="block text-foreground font-heading text-xl mb-3 group-hover:text-ocean transition-colors duration-300">Roadmap priorisée</strong>
                  <p className="text-sm text-muted-foreground leading-relaxed">Les corrections sont classées selon leur rapport "Impact SEO / Effort de mise en place" pour des résultats rapides.</p>
                </div>
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-border hover:-translate-y-1 hover:border-ocean/40 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center shrink-0 group-hover:bg-ocean group-hover:text-white transition-colors duration-300">
                  <span className="font-heading font-black text-xl">3</span>
                </div>
                <div>
                  <strong className="block text-foreground font-heading text-xl mb-3 group-hover:text-ocean transition-colors duration-300">Accompagnement sur-mesure</strong>
                  <p className="text-sm text-muted-foreground leading-relaxed">Suite à l'audit, Waveia rassemble l'ensemble des compétences (rédaction, développement, netlinking) pour corriger les failles et piloter votre stratégie mensuelle si vous le souhaitez.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-background pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> VOUS VOUS POSEZ LA QUESTION <div className="w-5 h-[1.5px] bg-primary"></div>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Tout savoir sur notre audit SEO offert.
            </h2>
          </div>
          
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {[
              { q: "01. Qu'est-ce qu'un audit SEO et est-ce vraiment gratuit ?", a: "Oui, ce premier diagnostic approfondi est entièrement offert. Il vous permet d'obtenir un état des lieux factuel de votre existant (points forts, failles critiques) sans aucun engagement. Son objectif est de vous démontrer la rigueur de notre méthodologie et la valeur ajoutée que notre pôle SEO peut apporter à votre croissance." },
              { q: "02. Quels sont les problèmes techniques les plus souvent détectés ?", a: "L'audit révèle fréquemment des erreurs invisibles à l'œil nu mais fatales pour Google : pages orphelines ou non indexées (erreurs de crawl), maillage interne inexistant, balises (Title, H1) manquantes ou dupliquées, temps de chargement trop longs impactant le taux de rebond, ou encore un mauvais usage du code empêchant la lecture de votre contenu." },
              { q: "03. J'ai récemment refait mon site web, cet audit est-il quand même utile ?", a: "Absolument, c'est même le moment critique. Une refonte (changement de design ou de CMS) non maîtrisée sur le plan SEO — comme des redirections 301 oubliées — est la première cause d'effondrement de trafic. L'audit permet de vérifier que votre nouveau site est sain, sécurisé et parfaitement compris par l'algorithme de Google." },
              { q: "04. De quels accès avez-vous besoin pour réaliser cette analyse ?", a: "Pour une radiographie précise, nous vous demanderons un simple accès \"Lecteur\" à votre Google Search Console et à votre outil analytique (Google Analytics, Matomo). Si vous ne disposez pas de ces outils, nos experts utiliseront nos licences professionnelles (Semrush, Screaming Frog, Ahrefs) pour crawler et analyser votre plateforme de l'extérieur." },
              { q: "05. Analysez-vous également la stratégie de mes concurrents ?", a: "Oui, car le SEO est par définition une compétition. Notre audit inclut un premier benchmark de votre positionnement face à vos concurrents directs. Nous regardons sur quels mots-clés stratégiques ils captent vos clients potentiels et quelle est l'autorité de leur domaine, afin de déterminer l'effort nécessaire pour les surpasser." },
              { q: "06. Combien de temps faut-il pour obtenir les résultats de l'audit ?", a: "Une fois votre demande validée et vos accès partagés, nos experts réalisent le crawl technique et l'analyse sémantique sous 48 à 72 heures ouvrées. Nous programmons ensuite un rendez-vous (en visio ou par téléphone) pour vous restituer le diagnostic de vive voix, sans jargon inutile." },
              { q: "07. Faites-vous les corrections suite à l'audit ?", a: "C'est tout l'avantage de travailler avec une agence 360°. Si le plan d'action vous convainc, notre équipe d'ingénierie et nos rédacteurs peuvent prendre le relais. Nous corrigeons les failles techniques (Setup SEO) et mettons en place un accompagnement mensuel pour piloter la création de vos contenus et l'acquisition de liens (Netlinking)." },
              { q: "08. Une fois les corrections faites, quand verrai-je les effets sur mon trafic ?", a: "Le référencement naturel est le levier d'acquisition le plus rentable, mais il demande de la constance. La correction des failles techniques graves (erreurs 404, blocages d'indexation) peut avoir un effet positif en quelques semaines. Pour des requêtes très concurrentielles, une stratégie de contenu et de popularité montre des résultats de croissance solides et pérennes entre 3 et 6 mois." }
            ].map((faq, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl overflow-hidden hover:border-ocean/30 transition-colors bg-background/50 backdrop-blur-md">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 flex justify-between font-heading font-extrabold text-foreground text-left items-center group"
                >
                  <span className="text-sm md:text-base group-hover:text-ocean transition-colors duration-300">{faq.q}</span>
                  <span className={`text-ocean text-xl transition-transform duration-300 shrink-0 ml-4 ${openFaq === i ? 'rotate-45' : 'group-hover:scale-110'}`}>+</span>
                </button>
                <div className={`px-6 text-sm text-muted-foreground leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-ocean/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-6">
            <div className="w-5 h-[1.5px] bg-primary"></div> PÉRENNISEZ VOTRE TRAFIC <div className="w-5 h-[1.5px] bg-primary"></div>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
            Prêt à identifier les freins de votre <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">croissance digitale ?</em>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Demandez votre diagnostic complet aujourd'hui. Laissez nos experts analyser la structure de votre site, sa sémantique et son autorité pour vous remettre une feuille de route claire, chiffrée et actionnable.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ocean hover:bg-ocean-hover text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] group"
          >
            Lancer mon audit SEO gratuit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>





    </div>
  );
}
