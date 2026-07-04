"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, MapPin, Search, Bot, Zap, TrendingUp, Navigation, Radar } from 'lucide-react';
import { SeoLocalProblemSection } from './local-seo/SeoLocalProblemSection';
import { SeoLocalSolutionSection } from './local-seo/SeoLocalSolutionSection';
import { SeoLocalMethodologySection } from './local-seo/SeoLocalMethodologySection';
import { SeoLocalStatsSection } from './local-seo/SeoLocalStatsSection';
import { SeoLocalProofSection } from './local-seo/SeoLocalProofSection';
import { SeoLocalDiffSection } from './local-seo/SeoLocalDiffSection';
import { SeoLocalOfferSection } from './local-seo/SeoLocalOfferSection';
import { SeoLocalLexiconSection } from './local-seo/SeoLocalLexiconSection';
import { SeoLocalFaqSection } from './local-seo/SeoLocalFaqSection';
import { SeoLocalCtaSection } from './local-seo/SeoLocalCtaSection';
import { LandingLeadForm } from '@/components/forms/LandingLeadForm';

export function SeoLocalLanding() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
              Offre : SEO Local pour TPE/PME
            </div>
            
            {/* User requested pas de dégradé dans les titres */}
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Devenez l'entreprise que<br />
              vos clients trouvent <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">en premier</em><br />
              sur Google
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Le <strong>SEO Local</strong> transforme les recherches "près de chez moi" en appels, devis et clients en magasin. Wave optimise votre présence Google pour capter ce trafic — sans dépenser un centime en publicité.
            </p>
            
            <div className="mt-8 mb-12 flex justify-center gap-6 flex-wrap text-sm text-foreground">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ocean" /> Top 3 du Pack Local = 75 % des clics</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> 92 % consultent les avis Google</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Navigation className="w-4 h-4 text-ocean" /> 76 % visitent en magasin sous 24h</span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                🎯 Recevoir mon audit SEO local gratuit <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <a href="#methode" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir comment ça fonctionne ↓
              </a>
            </div>
            
            <p className="mt-9 text-xs text-muted-foreground/70 tracking-wider">
              <b className="text-muted-foreground font-normal">⚡ Analyse offerte · Réponse sous 24h · Sans engagement</b>
            </p>
          </div>
        </div>
      </section>

      <SeoLocalProblemSection />
      <SeoLocalSolutionSection />
      <SeoLocalMethodologySection />
      <SeoLocalStatsSection />
      <SeoLocalProofSection />
      <SeoLocalDiffSection />
      <SeoLocalOfferSection />
      <SeoLocalLexiconSection />
      <SeoLocalFaqSection />
      <SeoLocalCtaSection />

      {/* ─── CITIES STRIP ─── */}
      <div className="bg-background border-y border-border py-4 overflow-hidden flex">
        <div className="flex gap-12 whitespace-nowrap animate-scroll items-center">
          {Array(3).fill(['📍 Bayonne', '📍 Biarritz', '📍 Anglet', '📍 Bidart', '📍 Hossegor', '📍 Saint-Jean-de-Luz', '📍 Boucau']).flat().map((item, i) => (
            <div key={i} className="font-heading text-xs font-bold tracking-widest uppercase text-muted-foreground/70 flex items-center gap-12">
              {item} <span className="text-ocean text-[10px]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PAIN POINTS ─── */}
      <section id="services" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Vos problèmes, notre obsession
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Pourquoi votre business est invisible localement — et comment l'IA change tout.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Avoir un site en ligne ne suffit plus. Entre les algorithmes, la concurrence locale et les nouvelles intentions de recherche, vos clients potentiels ne vous trouvent pas. Waveia identifie et résout ces 5 blocages en quelques semaines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              { icon: '🏔️', title: 'Vos concurrents occupent les 3 premières places', desc: "À Bayonne ou Biarritz, les requêtes locales sont captées par quelques acteurs bien positionnés. Notre IA identifie leurs failles sémantiques et vous permet de les dépasser." },
              { icon: '📍', title: 'Votre fiche Google Business est sous-exploitée', desc: "Une fiche mal optimisée, c'est des centaines de recherches locales perdues chaque mois. Waveia automatise l'optimisation continue de votre présence Google Maps." },
              { icon: '📉', title: 'Votre trafic ne convertit pas en clients', desc: "Attirer des visiteurs sans générer de devis, c'est du bruit. Notre approche 360° combine SEO, UX et data comportementale pour transformer chaque visite en opportunité." },
              { icon: '🔄', title: 'Votre contenu n\'est jamais mis à jour', desc: "Google récompense les sites actifs et pertinents. Waveia déploie des systèmes de production de contenu IA-augmenté, hyper-ciblés sur les requêtes de votre secteur." },
              { icon: '⚡', title: 'Votre site est trop lent pour le mobile', desc: "Les Core Web Vitals sont un critère de classement direct. Un site lent perd 40% de ses visiteurs. Nos audits IA détectent et corrigent chaque milliseconde perdue." },
              { icon: '🌊', title: 'Vous n\'avez pas de stratégie multi-leviers', desc: "Le SEO seul n'est plus suffisant. Waveia orchestre SEO local, notoriété en ligne, acquisition et data en une seule stratégie cohérente." }
            ].map((card, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 hover:border-ocean/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i * 100}ms`}}>
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 rounded-xl flex items-center justify-center text-xl mb-5">{card.icon}</div>
                <h4 className="text-lg font-bold font-heading text-foreground mb-3">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TARIFS ─── */}
      <section id="tarifs" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Investissement <div className="w-5 h-[1.5px] bg-primary"></div>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
              Des formules claires,<br />des résultats mesurables.
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Chez Waveia, aucun forfait "boîte noire". Chaque euro investi est tracé, analysé et optimisé en continu par nos systèmes IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SETUP GMB */}
            <div className="glass-card p-10 hover:-translate-y-1 transition-transform animate-in fade-in slide-in-from-bottom-4">
              <div className="text-xs uppercase tracking-widest text-ocean font-semibold mb-3">Setup GMB</div>
              <p className="text-sm text-muted-foreground mb-7">Création et optimisation fiche.</p>

              <div className="flex items-baseline gap-1.5 mb-8">
                <strong className="text-4xl font-extrabold font-heading text-foreground">190 €</strong>
                <span className="text-sm text-muted-foreground">paiement unique</span>
              </div>

              <ul className="space-y-4 mb-9">
                {['Création Fiche Google Business', 'Validation Propriétaire', 'Optimisation Infos & Catégories', 'Intégration Photos HD'].map((f,i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-transparent border border-border text-foreground font-heading font-bold text-[0.95rem] py-3.5 rounded-full hover:border-ocean hover:text-ocean transition-all w-full mt-auto">
                Être visible localement →
              </a>
            </div>

            {/* DOMINATION LOCALE */}
            <div className="glass-card p-10 hover:-translate-y-1 transition-transform border-ocean/40 bg-[linear-gradient(160deg,rgba(14,165,233,0.07)_0%,var(--glass-bg)_60%)] relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 delay-100">
               <div className="absolute top-5 -right-9 bg-primary text-white font-heading text-[0.65rem] font-bold tracking-[0.1em] px-9 py-1 rotate-45">
                RECOMMANDÉ
              </div>
              <div className="text-xs uppercase tracking-widest text-ocean font-semibold mb-3">Domination Locale</div>
              <p className="text-sm text-muted-foreground mb-7">Soyez le n°1 dans votre ville.</p>

              <div className="flex items-baseline gap-1.5 mb-8">
                <strong className="text-4xl font-extrabold font-heading text-foreground">390 €</strong>
                <span className="text-sm text-muted-foreground">/ mois</span>
              </div>

              <ul className="space-y-4 mb-9">
                {['Gestion des avis clients', 'Posts Google Business Hebdo', 'Inscriptions Annuaires Locaux', 'Rapport de visibilité maps'].map((f,i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground text-sm font-medium">
                    <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] py-3.5 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all w-full">
                Dominer ma ville →
              </a>
            </div>
          </div>
          
          <p className="text-center mt-8 text-sm text-muted-foreground italic max-w-2xl mx-auto">
            * Chaque formule inclut un accompagnement humain + les systèmes IA propriétaires Waveia. Engagement sans surprise, résultats suivis en temps réel.
          </p>
        </div>
      </section>

      {/* ─── SERVICES EXPERTISE ─── */}
      <section id="expertises" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Nos expertises SEO local
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Une stack technologique complète<br />pour chaque levier de visibilité.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Search className="w-5 h-5 text-ocean" />, title: "Audit SEO IA", ia: true, desc: "Analyse 360° de votre site : performances techniques, opportunités sémantiques, signaux locaux. Notre IA identifie ce que les outils classiques ratent." },
              { icon: <MapPin className="w-5 h-5 text-ocean" />, title: "SEO Local & Google Maps", ia: false, desc: "Optimisation de votre fiche GBP, création de pages géolocalisées ultra-ciblées, gestion des avis et signaux locaux pour dominer chaque ville." },
              { icon: <Radar className="w-5 h-5 text-ocean" />, title: "Architecture sémantique IA", ia: true, desc: "Construction de silos thématiques basés sur les données d'intention de recherche réelles de vos futurs clients au Pays Basque." },
              { icon: <Navigation className="w-5 h-5 text-ocean" />, title: "Netlinking & Autorité", ia: false, desc: "Acquisition de liens de qualité via notre réseau. Nous construisons l'autorité qui fait passer vos pages de la page 2 au Top 3." },
              { icon: <Bot className="w-5 h-5 text-ocean" />, title: "Automatisation & Flux contenu", ia: true, desc: "Production et mise à jour continue du contenu SEO via nos pipelines IA. Votre site reste actif, pertinent et en avance sur les tendances." },
              { icon: <TrendingUp className="w-5 h-5 text-ocean" />, title: "Data, CRO & Reporting", ia: false, desc: "Dashboard de performance en temps réel. Nous mesurons les conversions, les leads générés, le ROI réel de chaque action." }
            ].map((item, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:border-ocean/40 transition-all">
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 flex items-center justify-center rounded-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3 flex items-center gap-2">
                  {item.title} 
                  {item.ia && <span className="text-[10px] bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full border border-purple-500/20 uppercase tracking-widest">IA</span>}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARATIF ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Pourquoi Waveia <div className="w-5 h-[1.5px] bg-primary"></div>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
              La différence entre stagner<br />et dominer votre marché local.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14">
            <div className="glass-card bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-10 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-xl font-bold font-heading text-red-500 mb-6 flex items-center gap-2">
                <X className="w-5 h-5" /> Sans Waveia
              </h3>
              <ul className="space-y-4">
                {[
                  "Invisible sur les recherches locales à Bayonne ou Biarritz",
                  "Dépendance totale aux publicités payantes (Google Ads)",
                  "Stratégie SEO artisanale, lente et peu scalable",
                  "Aucune vision prédictive des tendances de recherche",
                  "Trafic instable, sensible aux mises à jour Google",
                  "Reporting opaque, ROI impossible à mesurer"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-red-500/10 pb-3 last:border-0 last:pb-0">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card bg-ocean/5 border border-ocean/20 rounded-2xl p-8 md:p-10 animate-in fade-in slide-in-from-bottom-4 delay-100">
              <h3 className="text-xl font-bold font-heading text-ocean mb-6 flex items-center gap-2">
                <Check className="w-5 h-5" /> Avec Waveia
              </h3>
              <ul className="space-y-4">
                {[
                  "Top 3 local sur toutes vos villes cibles au Pays Basque",
                  "Flux organique de prospects qualifiés, sans dépenses Ads",
                  "Stratégie 360° orchestrée par l'IA : précise, rapide, scalable",
                  "SEO prédictif : vous captez les tendances avant les autres",
                  "Actif numérique solide, résistant aux algorithmes",
                  "Dashboard temps réel : chaque euro tracé, chaque lead mesuré"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground border-b border-ocean/10 pb-3 last:border-0 last:pb-0">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MÉTHODE ─── */}
      <section id="methode" className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Notre approche
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              La méthode Waveia :<br />SEO local augmenté par l'IA.
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Quatre phases. Un seul objectif : vous rendre indétrônable sur votre zone géographique, plus vite que vous ne l'imaginez.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto mt-10">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent"></div>
            
            {[
              { num: "01", title: "Scan Intelligence (Audit IA)", desc: "Nos systèmes IA scannent votre site, vos concurrents locaux et l'ensemble des signaux Google. On identifie en quelques heures ce qu'un consultant mettrait des semaines à déceler : opportunités de mots-clés, lacunes techniques, signaux locaux.", tags: ["Analyse concurrentielle IA", "Audit technique", "Cartographie sémantique"] },
              { num: "02", title: "Stratégie Prédictive", desc: "On ne réagit pas aux tendances, on les anticipe. Nous construisons une roadmap SEO basée sur les données d'intention de recherche réelles de votre secteur au Pays Basque. Quelles pages créer, quels liens acquérir : tout est planifié.", tags: ["SEO prédictif", "Roadmap 90 jours", "Mots-clés locaux"] },
              { num: "03", title: "Exécution Augmentée", desc: "Nos pipelines IA prennent en charge la production de contenu, les optimisations techniques, le netlinking. Vous n'avez rien à gérer. Chaque mois, votre autorité locale grandit de façon exponentielle.", tags: ["Contenu IA", "Automatisation SEO", "Netlinking"] },
              { num: "04", title: "Optimisation Continue & Reporting", desc: "Le SEO est vivant. Nos systèmes analysent en temps réel les performances, détectent les dérives et saisissent de nouvelles opportunités. Vous recevez un rapport mensuel limpide : positions, trafic, leads.", tags: ["Dashboard temps réel", "Reporting ROI", "Optimisation continue"] }
            ].map((p, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative z-10 w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full glass-card border border-border flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-background/80">
                  {p.num}
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold font-heading text-foreground mb-3">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed md:w-[90%] mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-[10px] uppercase tracking-widest font-bold text-ocean bg-ocean/10 border border-ocean/20 px-3 py-1.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VILLES ─── */}
      <section id="villes" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Zones d'intervention
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Votre présence locale,<br />ville par ville.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Waveia maîtrise les dynamiques de recherche locales de chaque territoire du Pays Basque. Une stratégie hyper-ciblée pour chaque zone de chalandise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Bayonne", desc: "Capitale économique. Forte concurrence locale idéale pour l'IA." },
              { num: "02", title: "Biarritz", desc: "Marché premium. Requêtes à forte intention d'achat, trafic touristique." },
              { num: "03", title: "Anglet", desc: "Ville résidentielle. Opportunités SEO locales encore inexploitées." },
              { num: "04", title: "Bidart", desc: "Commune côtière. Profil de recherche saisonnier et opportunités de niche." },
              { num: "05", title: "Hossegor", desc: "Hub lifestyle. Audience qualifiée, valeur client par requête élevée." },
              { num: "06", title: "Saint-Jean-de-Luz", desc: "Destination touristique et commerciale. Potentiel SEO sous-exploité." },
              { num: "07", title: "Boucau", desc: "Zone industrielle. Idéale pour le B2B et l'artisanat local." }
            ].map((city, i) => (
              <div key={i} className="glass-card border border-border rounded-xl p-6 relative hover:border-ocean/40 transition-colors">
                <span className="absolute top-4 right-5 text-sm font-bold font-heading text-ocean/40">{city.num}</span>
                <h4 className="text-lg font-bold font-heading text-foreground mb-2">{city.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="glass-card bg-ocean/5 border-ocean/20 p-10 md:p-16 text-center animate-in">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Votre audit SEO local offert.</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">En 48h, nos systèmes IA analysent votre situation actuelle, identifient vos 10 opportunités locales prioritaires et vous livrent une feuille de route concrète — gratuitement et sans engagement.</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                  Obtenir mon audit gratuit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground italic">Prend 2 min. Sans carte bancaire. Réponse sous 24h ouvrées.</p>
           </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Lancez-vous
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">Un projet ? Parlons-en.</h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">Décrivez votre situation et votre zone cible. Notre équipe vous recontacte avec une analyse personnalisée sous 24 heures ouvrées.</p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4 text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg shrink-0">📧</div>
                 <div>
                   <strong className="block text-foreground mb-1 font-heading">Email</strong>
                   <span className="text-muted-foreground">contact@waveia.fr</span>
                 </div>
               </div>
               <div className="flex items-start gap-4 text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg shrink-0">📍</div>
                 <div>
                   <strong className="block text-foreground mb-1 font-heading">Zone d'intervention</strong>
                   <span className="text-muted-foreground">Pays Basque · Bayonne · Biarritz · Anglet · Hossegor & France</span>
                 </div>
               </div>
               <div className="flex items-start gap-4 text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg shrink-0">⚡</div>
                 <div>
                   <strong className="block text-foreground mb-1 font-heading">Délai de réponse</strong>
                   <span className="text-muted-foreground">Sous 24h ouvrées · Audit offert inclus</span>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="glass-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Demandez votre audit gratuit</h3>
            <p className="text-sm text-muted-foreground mb-6">Complétez ce formulaire, notre équipe vous recontacte sous 24h.</p>

            <LandingLeadForm
              formName="SEO Local"
              focusOptions={["SEO Local / Fiche Google", "Pages géolocalisées multi-villes", "Netlinking local", "Autre"]}
              buttonText="Envoyer ma demande"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
