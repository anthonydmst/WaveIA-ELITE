"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Link as LinkIcon, Search, Bot, Zap, TrendingUp, ShieldCheck, Newspaper } from 'lucide-react';
import { LandingLeadForm } from '@/components/forms/LandingLeadForm';

export function SeoNetlinkingLanding() {
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
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-12 md:py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              Stratégie Netlinking · Autorité & TrustFlow
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Propulsez votre site avec des backlinks d'autorité grâce à <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">l'IA</em>.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              L'autorité est le carburant de Google. Waveia déploie des campagnes de netlinking ciblées, sûres et hyper-puissantes pour construire l'indice de confiance qui vous manque et dominer vos concurrents.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Obtenir mon audit de liens <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#methode" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir la méthode IA
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+450%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Croissance Autorité</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">15k+</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Spots vérifiés</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">Top 3</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Objectif Ranking</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Profil naturel (Safe)</span>
              </div>
            </div>
            
            <p className="mt-9 text-xs text-muted-foreground/70 tracking-wider">
              <b className="text-muted-foreground font-normal">⚡ Analyse offerte · Réponse sous 24h · Sans engagement</b>
            </p>
          </div>
        </div>
      </section>

      {/* ─── NETLINKING STRIP ─── */}
      <div className="bg-background border-y border-border py-4 overflow-hidden flex">
        <div className="flex gap-12 whitespace-nowrap animate-scroll items-center">
          {Array(3).fill(['Autorité de Domaine', 'TrustFlow', 'Acquisition de Liens', 'Relations Presse', 'Ancres Sémantiques', 'E-E-A-T', 'Link Juice']).flat().map((item, i) => (
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
              Pourquoi votre autorité stagne — et comment l'IA change la donne.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Un excellent contenu ne suffit plus si personne ne pointe vers lui. Entre les liens toxiques, les achats à l'aveugle et la concurrence féroce, construire un profil de liens puissant demande de la précision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              { icon: '📝', title: 'Le contenu parfait qui ne ranke pas', desc: "Vous avez rédigé des articles ultra-complets, mais ils restent bloqués en page 2. Sans l'autorité d'un bon profil de backlinks, Google ne vous fera pas confiance." },
              { icon: '☢️', title: 'Un profil de liens toxiques ignoré', desc: "Des liens spammy ou de mauvaise qualité pointent peut-être vers votre site, ralentissant vos performances de façon invisible. Un audit et un nettoyage sont vitaux." },
              { icon: '💸', title: 'Budget netlinking gaspillé à l\'aveugle', desc: "Vous achetez des liens sur des sites qui n'ont ni trafic réel, ni puissance sémantique. Résultat : vous dépensez sans aucun impact sur vos positions." },
              { icon: '🔍', title: 'Manque de pertinence thématique', desc: "Des backlinks provenant de secteurs qui n'ont rien à voir avec le vôtre diluent la compréhension de Google. Vous avez besoin de spots dans votre niche." },
              { icon: '🧱', title: 'Plafond de verre face aux leaders', desc: "Vos concurrents directs vous bloquent car ils cumulent des centaines de domaines référents de qualité depuis des années. Il faut compenser ce gap." },
              { icon: '⚓', title: 'Mauvaise répartition des ancres', desc: "Un profil 100% sur-optimisé (trop de mots-clés exacts) augmente le risque de pénalité algorithmique. L'IA permet un équilibrage naturel." }
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
              Des formules de netlinking,<br />claires et rentables.
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Chaque lien est sélectionné et validé par notre équipe pour maximiser le "Link Juice" tout en préservant la santé de votre domaine face à l'algorithme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PACK ACCÉLÉRATION */}
            <div className="glass-card p-10 hover:-translate-y-1 transition-transform animate-in fade-in slide-in-from-bottom-4">
              <div className="text-xs uppercase tracking-widest text-ocean font-semibold mb-3">Pack Accélération</div>
              <p className="text-sm text-muted-foreground mb-7">Pour un site existant qui stagne. Débloquez la croissance.</p>

              <div className="flex items-baseline gap-1.5 mb-8">
                <strong className="text-4xl font-extrabold font-heading text-foreground">590 €</strong>
                <span className="text-sm text-muted-foreground">/ mois</span>
              </div>

              <ul className="space-y-4 mb-9">
                {['10 Backlinks Puissants', 'Sites à Trafic Réel (DA 20-30)', 'Rédaction Premium (800 mots)', 'Optimisation On-Page incluse', 'Audit Sémantique & Technique', 'Planning éditorial mensuel', 'Support prioritaire 7/7', 'Suivi ROI & Conversions'].map((f,i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-transparent border border-border text-foreground font-heading font-bold text-[0.95rem] py-3.5 rounded-full hover:border-ocean hover:text-ocean transition-all w-full mt-auto">
                Accélérer mes ventes →
              </a>
            </div>

            {/* PACK DOMINANCE */}
            <div className="glass-card p-10 hover:-translate-y-1 transition-transform border-ocean/40 bg-[linear-gradient(160deg,rgba(14,165,233,0.07)_0%,var(--glass-bg)_60%)] relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 delay-100">
               <div className="absolute top-5 -right-9 bg-primary text-white font-heading text-[0.65rem] font-bold tracking-[0.1em] px-9 py-1 rotate-45">
                RECOMMANDÉ
              </div>
              <div className="text-xs uppercase tracking-widest text-ocean font-semibold mb-3">Pack Dominance</div>
              <p className="text-sm text-muted-foreground mb-7">Pour les leaders et le E-commerce. Visibilité maximale.</p>

              <div className="flex items-baseline gap-1.5 mb-8">
                <strong className="text-4xl font-extrabold font-heading text-foreground">1 190 €</strong>
                <span className="text-sm text-muted-foreground">/ mois</span>
              </div>

              <ul className="space-y-4 mb-9">
                {['15 Backlinks Haute Autorité (DA 40+)', 'Partenariats Sites Presse / Médias', 'Stratégie de Contenu \'Cluster\'', 'Netlinking International (Option)', 'Optimisation UX/CRO & A/B Testing', 'Accès Dashboard Live', 'Réunions stratégiques mensuelles', 'Protection Anti-SEO Négatif'].map((f,i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground text-sm font-medium">
                    <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] py-3.5 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all w-full">
                Dominer Google →
              </a>
            </div>
          </div>
          
          <p className="text-center mt-8 text-sm text-muted-foreground italic max-w-2xl mx-auto">
            * Tout est inclus : coût de l'article payé à l'éditeur, rédaction premium, et temps stratégique. Liens dofollow garantis.
          </p>
        </div>
      </section>

      {/* ─── SERVICES EXPERTISE ─── */}
      <section id="expertises" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Nos expertises Netlinking
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Une stack technologique complète<br />pour chaque levier d'autorité.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-ocean" />, title: "Audit & Nettoyage", ia: true, desc: "Analyse en profondeur de votre historique. Détection de liens toxiques via l'IA, génération de fichiers de désaveu pour Google." },
              { icon: <Search className="w-5 h-5 text-ocean" />, title: "Recherche de spots IA", ia: true, desc: "Analyse de centaines de milliers de domaines pour matcher mathématiquement ceux ayant la plus forte proximité sémantique." },
              { icon: <Newspaper className="w-5 h-5 text-ocean" />, title: "Digital PR", ia: false, desc: "Création de campagnes virales et relations publiques digitales pour obtenir des liens naturels depuis les grands médias nationaux." },
              { icon: <TrendingUp className="w-5 h-5 text-ocean" />, title: "Monitoring d'Autorité", ia: false, desc: "Suivi en temps réel de votre TrustFlow, CitationFlow et de l'évolution de la puissance relative face à vos concurrents." },
              { icon: <Bot className="w-5 h-5 text-ocean" />, title: "Rédaction Premium VIP", ia: true, desc: "Les articles accueillant vos liens doivent être parfaits. Nous générons et validons un contenu expert pour garantir l'indexation." },
              { icon: <LinkIcon className="w-5 h-5 text-ocean" />, title: "Stratégie d'Ancrage", ia: true, desc: "L'IA calcule le ratio idéal d'ancres optimisées, désoptimisées et de dilution pour construire un profil irréprochable aux yeux de Google." }
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
              <div className="w-5 h-[1.5px] bg-primary"></div> Avant / Après Waveia <div className="w-5 h-[1.5px] bg-primary"></div>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
              La différence entre plafonner<br />et construire un empire SEO.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14">
            <div className="glass-card bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-10 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-xl font-bold font-heading text-red-500 mb-6 flex items-center gap-2">
                <X className="w-5 h-5" /> Sans Waveia
              </h3>
              <ul className="space-y-4">
                {[
                  "Vos pages magnifiques stagnent face à des concurrents moins bons",
                  "Achat de liens toxiques ou sur des \"fermes de contenus\"",
                  "Risque de pénalité manuelle The Google Penguin",
                  "Ancres de liens générées aléatoirement, sans calcul",
                  "Impossibilité de mesurer le trafic réel du site partenaire",
                  "Budget dépensé sans aucun impact direct sur les classements"
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
                  "Croissance propulsée par un flow d'autorité ciblé",
                  "Accès à des spots privés, PBN premiums et gros médias",
                  "Profil de liens naturel, indétectable par l'algorithme spam",
                  "Ratio d'ancrage calculé par l'IA pour maximiser la sécurité",
                  "Sourcing basé sur le trafic réel et la proximité sémantique",
                  "Monitoring de l'impact rank : un ROI qui s'observe"
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
              La méthode Waveia :<br />4 étapes pour construire votre autorité.
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Acquérir des liens demande une grande prudence. Voici comment nous construisons votre TrustFlow sans aucun risque.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto mt-10">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent"></div>
            
            {[
              { num: "01", title: "Audit & Nettoyage Profil", desc: "Analyse de chaque lien pointant vers votre site actuellement. Nous filtrons les liens néfastes, bloquons le négative SEO, et identifions la base de votre profil (ratio d'ancres, TrustFlow actuel).", tags: ["Audit IA", "Fichier désaveu", "TrustFlow"] },
              { num: "02", title: "Analyse Concurrentielle & Gap", desc: "Nous scannons le profil de vos concurrents leaders pour comprendre mathématiquement l'effort nécessaire. Combien de liens sont requis ? Depuis quelle thématique ? L'IA construit la roadmap.", tags: ["Gap d'autorité", "Analyse SERP", "Roadmap liens"] },
              { num: "03", title: "Acquisition Qualifiée IA", desc: "Sourcing des médias ou blogs pertinents dans notre réseau. Nous rédigeons un contenu ultra-qualitatif, l'insérons de façon contextuelle, et publions sur des sites à fort trafic et proximité sémantique réelle.", tags: ["Sourcing IA", "Contenu VIP", "Match thématique"] },
              { num: "04", title: "Monitoring & Tracking SERP", desc: "Suivi de l'indexation de chaque lien. On surveille la montée des positions sur Google pour vos pages stratégiques et on ajuste la vélocité et la puissance en fonction de l'impact mesuré.", tags: ["Tracking index", "Top 3 visé", "Ajustement ROI"] }
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

      {/* ─── CATÉGORIES / SPOTS ─── */}
      <section id="villes" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Réseaux d'acquisition
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Des spots de publication pour<br />chaque niveau de puissance.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              De la presse nationale prestigieuse au PBN thématisé ultra-puissant, notre réseau d'acquisition répond à toutes les stratégies d'autorité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Presse Nationale", desc: "L'autorité ultime (Figaro, Le Monde). Donne un boost massif à votre TrustFlow." },
              { num: "02", title: "Magazines Spécialisés", desc: "Focus sur la proximité sémantique exacte dans votre secteur. Idéal pour la pertinence." },
              { num: "03", title: "Blogs Influents", desc: "Des blogs avec un trafic organique réel pour vous apporter jus SEO et visiteurs croisés." },
              { num: "04", title: "Réseau PBN Exclusif", desc: "Des réseaux de sites privés Premium, construits avec soin pour pousser vos pages piliers." },
              { num: "05", title: "Annuaires Premium", desc: "Sites d'autorité validés manuellement. Parfaits pour la dilution d'ancres." },
              { num: "06", title: "Presse Locale", desc: "Sud-Ouest, médias régionaux... Excellent levier pour assoir l'autorité en SEO Local." },
              { num: "07", title: "Partenariats B2B", desc: "Échanges de visibilité validés par contrats. Une approche White Hat pure." }
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

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
             <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               Questions fréquentes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Tout ce que vous voulez savoir<br />sur le netlinking.</h2>
          </div>
          
          <div className="space-y-3">
            {[
              { q: "Qu'est-ce qu'un bon backlink pour l'algorithme Google ?", a: "Un bon backlink provient d'un site avec une forte autorité (TrustFlow), qui attire du trafic organique réel, et surtout, qui est sémantiquement proche de votre thématique. Le contexte et le contenu encadrant le lien sont tout aussi cruciaux que le lien lui-même." },
              { q: "Le netlinking est-il autorisé par Google ?", a: "Google préfère les liens acquis « naturellement ». Cependant, maîtriser son profil de liens (via du placement éditorial qualitatif et du Digital PR) est une pratique essentielle. Nous opérons dans un cadre de haute qualité (White Hat) qui ne met jamais votre site en danger de pénalité manuelle." },
              { q: "Risquez-vous d'utiliser des fermes de liens ?", a: "Jamais. Nous bannissons les sites toxiques, les fermes de contenus et les sites spammés. Notre IA filtre automatiquement chaque site partenaire en vérifiant son trafic, son historique et son E-E-A-T avant validation." },
              { q: "Combien de temps avant que le lien n'impacte mon classement ?", a: "En général, il faut entre 3 semaines et 3 mois après sa découverte (indexation) par Google pour qu'un lien transmette pleinement sa force et réorganise les SERP." },
              { q: "Quelle est la différence entre un lien Dofollow et Nofollow ?", a: "Un lien « Dofollow » transmet explicitement la « force SEO » au site cible. Un « Nofollow » informe Google de ne pas transmettre cette force. Nos campagnes se concentrent à 95% sur des liens Dofollow de haute volée." },
              { q: "Puis-je choisir moi-même les sites partenaires ?", a: "Nous fournissons une présélection stratégique basée sur notre logiciel d'analyse. Vous avez toujours le dernier mot et la transparence absolue sur les sites où vous allez publier, le contexte de l'article, avant chaque lancement." }
            ].map((faq, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl overflow-hidden hover:border-ocean/30 transition-colors">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 flex justify-between font-heading font-bold text-foreground text-left items-center group"
                >
                  <span className="text-[0.95rem]">{faq.q}</span>
                  <span className={`text-ocean text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : 'group-hover:scale-110'}`}>+</span>
                </button>
                <div className={`px-6 text-sm text-muted-foreground leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="glass-card bg-ocean/5 border-ocean/20 p-10 md:p-16 text-center animate-in">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Votre audit de profil de liens offert.</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">Comparez instantanément votre autorité avec celle de vos 3 gros concurrents. Nos outils mesurent votre TrustFlow et décèlent les opportunités de netlinking immédiates.</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                  Lancer mon analyse de liens <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground italic">C'est notre façon de vous prouver la valeur de notre méthode. Entièrement gratuit.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">Un projet de netlinking ? Parlons-en.</h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">Définissez vos mots-clés prioritaires et l'adresse de votre site web. Laissez l'IA Waveia cartographier votre autorité en 24 heures.</p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4 text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg shrink-0">📧</div>
                 <div>
                   <strong className="block text-foreground mb-1 font-heading">Email</strong>
                   <span className="text-muted-foreground">contact@waveia.fr</span>
                 </div>
               </div>
               <div className="flex items-start gap-4 text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg shrink-0">🌐</div>
                 <div>
                   <strong className="block text-foreground mb-1 font-heading">Intervention</strong>
                   <span className="text-muted-foreground">Marchés Francophones (France entière, DOM-TOM, Pays Basque)</span>
                 </div>
               </div>
               <div className="flex items-start gap-4 text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg shrink-0">⚡</div>
                 <div>
                   <strong className="block text-foreground mb-1 font-heading">Discrétion & Qualité</strong>
                   <span className="text-muted-foreground">Lien garantie à vie · Confidentialité préservée</span>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="glass-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Demandez votre audit gratuit</h3>
            <p className="text-sm text-muted-foreground mb-6">Complétez ce formulaire, un expert de l'équipe vous contacte sous 24h.</p>
            
            <LandingLeadForm
              formName="Netlinking"
              focusOptions={["Netlinking / Autorité de domaine", "Audit de profil de liens", "Stratégie de contenu à pousser", "Autre"]}
              buttonText="Lancer la procédure"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
