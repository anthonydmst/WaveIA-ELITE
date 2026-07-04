"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Share2, MessageCircle, BarChart, Users, Camera, TrendingUp } from 'lucide-react';
import { LandingLeadForm } from '@/components/forms/LandingLeadForm';

export function ReseauxSociauxLanding() {
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
              Social Media & Ads — Pays Basque
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Transformez votre audience en<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                clients fidèles.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Publier au hasard ne suffit plus. Que ce soit sur LinkedIn pour le B2B ou TikTok/Instagram pour le B2C, nous déployons une <strong>Social Media Strategy ultra-ciblée</strong> couplée à une Content Factory puissante pour scalabiliser votre acquisition.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Auditer mes Réseaux <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir l'approche Wave IA
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">1M+</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Vues Générées</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">x4</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Taux d'engagement</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Data-Driven</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">ROI</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Focus Conversion</span>
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
          {Array(3).fill(['Social Media Strategy', 'Content Factory', 'Social Ads (Meta/TikTok)', 'Reels & Carrousels', 'Ligne Éditoriale', 'Social Listening', 'LinkedIn B2B']).flat().map((item, i) => (
            <div key={i} className="font-heading text-xs font-bold tracking-widest uppercase text-muted-foreground/70 flex items-center gap-12">
              {item} <span className="text-ocean text-[10px]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SIGNALS ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Signes d'opportunités manquées
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Votre stratégie Social Media est <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">inefficace</em> si…
            </h2>
            <p className="text-lg text-muted-foreground font-light">Ces 4 symptômes prouvent que vous dépensez de l'énergie et/ou du budget publicitaire sans aucun retour sur investissement concret.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              { icon: '📉', title: 'Votre portée organique s\'effondre brutalement', desc: 'Vos derniers posts récoltent quelques "likes" des mêmes employés ou amis. L\'algorithme ne vous met plus en avant car vos formats (simples photos) sont obsolètes face aux vidéos courtes.' },
              { icon: '💸', title: 'Vos Social Ads brûlent votre budget sans lead', desc: 'Vous avez boosté une publication ou lancé une campagne Meta Ads, mais le coût par clic est exorbitant et aucune vente n\'a été générée. Le ciblage ou la créa publicitaire sont défaillants.' },
              { icon: '🧭', title: 'Vous naviguez à vue, sans calendrier éditorial', desc: 'La publication est vue comme une corvée. Vous postez une fois par semaine "pour dire d\'être présent", sans objectif d\'acquisition ni ligne éditoriale cohérente pour votre audience.' },
              { icon: '👻', title: 'Une communauté silencieuse (Taux d\'engagement nul)', desc: 'Vous avez peut-être des abonnés, mais personne ne commente, ne sauvegarde ni ne partage. Vous parlez dans le vide au lieu de créer une véritable connexion avec votre cible B2B ou B2C.' }
            ].map((card, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 hover:border-ocean/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i * 100}ms`}}>
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 rounded-xl flex items-center justify-center text-xl mb-5">{card.icon}</div>
                <h4 className="text-lg font-bold font-heading text-foreground mb-3">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-in fade-in duration-700 delay-500">
            <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] inline-flex items-center gap-2 font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full transition-all">
              Diagnostiquer mes réseaux maintenant →
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Formules Social Media
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Achetez l'attention de <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">ceux qui achèteront.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light">Nous proposons des solutions allant de l'architecture stratégique à l'exécution totale (Content Factory & Media Buying) pour maximiser votre visibilité.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            <div className="glass-card border border-border rounded-2xl p-10 relative">
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Audit & Stratégie</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Social Media Strategy</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">One-Shot <span className="text-base text-muted-foreground font-normal">/ socle solide</span></div>
              <p className="text-sm text-muted-foreground mb-8">Pour les équipes internes qui ont besoin d'une ligne directrice nette, documentée et prête à être exécutée.</p>
              
              <ul className="space-y-4 mb-10">
                {['Audit complet de l\'existant', 'Analyse des 3 principaux concurrents', 'Création de la Ligne Éditoriale (Ton & Formats)', 'Choix stratégique des plateformes (B2B/B2C)', 'Calendrier éditorial sur 3 mois', 'Template de reporting KPI'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Définir ma stratégie →</a>
            </div>

            <div className="glass-card border-ocean/40 bg-[linear-gradient(160deg,rgba(14,165,233,0.07)_0%,var(--glass-bg)_60%)] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-purple-500"></div>
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Croissance Globale</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Content Factory & Social Ads</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">Mensuel <span className="text-base text-muted-foreground font-normal">/ 100% délégué</span></div>
              <p className="text-sm text-muted-foreground mb-8">Exécution à grande échelle. Nous produisons le contenu et diffusons vos campagnes publicitaires de A à Z.</p>
              
              <ul className="space-y-4 mb-10">
                {['Tout le pack Stratégie inclus', 'Création Mensuelle : Reels, Carrousels, Infographies', 'Media Buying : Gestion experte Meta Ads / TikTok Ads', 'Social Listening : Veille e-réputation et Modération', 'Tests A/B Copywriting & Créatives', 'Réunion de Pilotage & Reporting ROI mensuel'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Déléguer ma croissance →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Périmètre d'Action
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Une présence omnicanale <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">maîtrisée de A à Z</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light">Quatre pôles d'expertise croisée pour garantir que votre marque soit vue, écoutée, et surtout, qu'elle génère des conversions financières réelles.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: <Share2 className="w-6 h-6"/>, title: 'Social Media Strategy', desc: 'Audit de l\'existant, création de la ligne éditoriale et sélection algorithmique des meilleures plateformes (LinkedIn B2B, TikTok/Insta B2C).' },
              { icon: <Camera className="w-6 h-6"/>, title: 'Content Factory (Création)', desc: 'Production massive et qualitative. Tournage de vidéos courtes (Reels), conception de carrousels éducatifs et design d\'infographies engageantes.' },
              { icon: <TrendingUp className="w-6 h-6"/>, title: 'Social Ads (Publicité)', desc: 'Création et pilotage de campagnes Meta Ads, LinkedIn Ads ou TikTok Ads micro-ciblées. Objectif : générer du lead qualifié immédiat ou des ventes e-com.' },
              { icon: <MessageCircle className="w-6 h-6"/>, title: 'Social Listening & Modération', desc: 'Surveillance proactive de votre e-réputation, gestion des crises naissantes, et échange actif avec votre communauté pour la fidéliser.' }
            ].map((s, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:border-ocean/40 transition-all duration-300">
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 text-ocean flex items-center justify-center rounded-xl mb-4">{s.icon}</div>
                <h4 className="text-lg font-bold font-heading text-foreground mb-3">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARE ─── */}
      <section className="py-24 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Avant / Après
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Ce que l'expertise <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">change réellement</em></h2>
            <p className="text-lg text-muted-foreground font-light">La différence entre utiliser les réseaux comme hobby, et les maîtriser comme un levier d'acquisition central.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            <div className="glass-card bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">❌ Stratégie Dissonante</span>
                <h3 className="text-xl font-bold font-heading text-foreground">Poster pour rien</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Publication au hasard selon l'inspiration de l'instant",
                  "Formats inadaptés aux codes des plateformes (ex: flyer sur Instagram)",
                  "Taux d'engagement bloqué ('Shadowban' algorithmique)",
                  "Aucun tracker de conversion sur vos publicités",
                  "Budgets Ads siphonnés par des ciblages beaucoup trop larges",
                  "Communauté éteinte et image de marque obsolète"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
             <div className="glass-card bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">✅ Growth avec Wave IA</span>
                <h3 className="text-xl font-bold font-heading text-foreground">Machine à Leads</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Ligne éditoriale claire avec piliers de contenus bien définis",
                  "Formats addictifs qui forcent l'algorithme à vous pousser (Reels, Threads)",
                  "Tracking millimétré de chaque euro investi (Pixel Meta, API Event)",
                  "Content Factory scalable : des dizaines d'assets créés d'avance",
                  "Couplage Organique + Payant pour une couverture intégrale du marché",
                  "Brand Love : communauté engagée qui défend votre marque"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground border-b border-border pb-3">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Notre processus
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">L'implémentation de votre <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Social Growth</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Nous ne faisons pas du "community management" à l'ancienne. Nous déployons un funnel algorithmique de capture mathématique et créatif.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto mt-10">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent"></div>
            
            {[
              { num: "01", title: "Audit UX/Social & Setup Tracking", desc: "Avant toute publication, nous vérifions que votre infrastructure peut accueillir du trafic (Pixels Meta/TikTok, Conversion API, Liens utm) et étudions votre cible B2B ou B2C." },
              { num: "02", title: "Laboratoire Éditorial (Stratégie)", desc: "Écriture de la matrice de marque. Quels types d'humour ? Quelle autorité sectorielle ? Programmation stricte du calendrier et scénarisation des posts pour les 3 prochains mois." },
              { num: "03", title: "La Content Factory en Action", desc: "Production. Nos créatifs réalisent la batterie d'assets : tournage des formats courts, copywriting incisif des posts LinkedIn, et animation des carrousels éducatifs." },
              { num: "04", title: "Déploiement Media Buying & Itération", desc: "Lancement des budgets publicitaires (Social Ads). L'IA de Meta/TikTok est nourrie par d'excellentes créas pour faire chuter les CPA (Coût Par Acquisition). Reporting mensuel et Ajustements constants." }
            ].map((p, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative z-10 w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full glass-card border border-border flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-background/80 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                  {p.num}
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold font-heading text-foreground mb-3">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed md:w-[90%]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-24 bg-card border-y border-border text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               Metrics Wave IA
            </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">Des audiences converties <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">en résultats d'affaire</em></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:rounded-2xl lg:overflow-hidden lg:border lg:border-border glass-card">
            {[
              { val: "x3", label: "Volume de leads moyen généré" },
              { val: "-40%", label: "De Coût Par Acquisition (CPA)" },
              { val: "10M+", label: "Vues organiques B2B/B2C cumulées" },
              { val: "24/7", label: "Veille Social Listening Active" }
            ].map((s, i) => (
              <div key={i} className={`p-8 ${i < 3 ? 'border-b border-r md:border-b-0 border-border' : ''} flex flex-col justify-center items-center`}>
                <div className="font-heading text-4xl lg:text-5xl font-extrabold text-ocean mb-3">{s.val}</div>
                <div className="text-xs text-muted-foreground w-3/4 mx-auto uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY WAVEIA ─── */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Différenciation Totale
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">L'ère des "petits posts mignons" <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">est révolue</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Le Social Media Marketing est devenu impitoyablement algorithmique. Wave IA fusionne créativité percutante et précision mathématique.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { tag: "Sales Focus", title: "L'Acquisition avant les 'Likes'", desc: "Nous ne comptons pas la réussite d'une campagne à son nombre de j'aime. La seule métrique pertinente est la transaction à la fin du tunnel : le Lead ou l'Achat. Nos stratégies Ads sont configurées pour le ROI pur." },
              { tag: "Créatifs", title: "Une Content Factory Intégrée", desc: "La publicité moderne dépend de la 'Créa'. Les algorithmes sont si intelligents que le ciblage se fait par le format vidéo lui-même. C'est pourquoi nous produisons en interne vos Reels, TikToks et visuels à haut potentiel viral." },
              { tag: "Cross-Canal", title: "B2B & B2C Multiformats", desc: "Votre entreprise a peut-être besoin de s'étendre sur LinkedIn pour prouver son autorité (Thought Leadership) tout en investissant agressivement Meta/Insta pour l'acquisition client. Nous maîtrisons les codes natifs des deux mondes." },
              { tag: "Data-Driven", title: "Monitoring des Coûts", desc: "L'inflation Meta Ads est réelle. Si vous ne testez pas massivement vos audiences et vos visuels (A/B testing structuré), vos coûts explosent. Notre technologie de suivi rectifie les budgets vers les annonces qui surperforment." }
            ].map((w, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-8 hover:border-ocean/30 transition-colors">
                <h4 className="flex items-center gap-3 font-heading font-bold text-lg text-foreground mb-4">
                  {w.title} <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">{w.tag}</span>
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Zone d'intervention Visuelle
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading mb-3">Votre Agence Social Media <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">au pays basque</em></h2>
            <p className="text-sm text-muted-foreground">Rayonnement local via des campagnes géolocalisées ou déploiement national.</p>
          </div>
          <div className="flex flex-wrap gap-3">
             {['📍 Bayonne', '📍 Biarritz', '📍 Anglet', '📍 Bidart', '📍 Hossegor', '📍 Saint-Jean-de-Luz', '📍 Boucau', '📍 Hendaye', '📍 Capbreton', '📍 Paris', '📍 National (Remote)'].map(c => (
               <span key={c} className="glass-card border border-border text-muted-foreground text-sm px-5 py-2.5 rounded-full hover:border-ocean hover:text-ocean transition-colors">{c}</span>
             ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
             <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               Foire Aux Questions Media
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Vos interrogations classiques <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">décryptées</em></h2>
          </div>
          
          <div className="space-y-3">
            {[
              { q: 'Quel est le budget minimum pour se lancer sur les Social Ads ?', a: "Pour générer une phase d'apprentissage utile pour l'algorithme (Meta ou TikTok), nous recommandons un budget publicitaire minimum d'environ 30 à 50€/jour selon l'objectif (Lead, Vente). En dessous de ce seuil, les algorithmes peinent à stabiliser leurs données d'acquisition." },
              { q: 'Quelle est la différence entre le B2B sur LinkedIn et le B2C ?', a: "L'intention. Sur LinkedIn, nous produisons du 'Thought Leadership' (Prouver votre expertise avec des Carrousels complexes ou du Copywriting ciblé décideurs). Sur TikTok/Insta (B2C), l'infotainment prévaut : des Reels rapides et accrocheurs avec du User Generated Content (UGC)." },
              { q: 'À quelle fréquence devez-vous publier pour moi ?', a: "Cela dépend de la strat. Globalement, l'algorithme privilégie désormais la constance et le format pertinent plutôt que la fréquence pure. 3 à 4 contenus hautement qualitatifs (Reels, Carrousels) par semaine dominent souvent 7 posts photos pauvres quotidiens." },
              { q: 'Qu\'est ce que le Social Listening et la modération ?', a: "C'est l'écoute de votre marque. Nous paramétrons des outils pour surveiller chaque avis, chaque mention de vos produits sur le web invisible ou sous vos publicités, afin de répondre aux plaintes clients avant qu'elles ne fassent un buzz négatif (e-réputation)." },
              { q: 'La création des Reels et Tournages est-elle incluse ?', a: "Oui, la Content Factory englobe la création de ces formats phares. Si vous êtes dans la région du Pays Basque, nous pouvons organiser des journées de captation. Sinon, nous vous guidons via une direction créative pour tourner avec smartphone, puis nous nous chargeons du montage complet." },
              { q: 'Quels résultats puis-je espérer le premier mois ?', a: "Le premier mois de diffusion Ads sert à récolter de la base de données qualifiée, tester les audiences et stabiliser les coûts par clic (Phase de Learning). Ne visez pas l'optimisation miracle dès la semaine n°1, le Social et Ads s'envisage mathématiquement sur une courbe trimestrielle." }
            ].map((faq, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl overflow-hidden hover:border-ocean/30 transition-colors">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 flex justify-between font-heading font-extrabold text-foreground text-left items-center group"
                >
                  <span>{faq.q}</span>
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

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Passons à l'action
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6">Capturez votre part de marché <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">dès aujourd'hui</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">De la stratégie de contenu macro au réglage final de votre campagne publicitaire, Wave IA configure votre machinerie marketing.</p>
            
            <div className="space-y-5">
               <div className="flex items-center gap-4 text-muted-foreground text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg">📧</div>
                 contact@waveia.fr
               </div>
               <div className="flex items-center gap-4 text-muted-foreground text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg">📍</div>
                 Pays Basque — Bayonne, Biarritz, Anglet
               </div>
               <div className="flex items-center gap-4 text-muted-foreground text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg">⚡</div>
                 Audit expédié sous 48h ouvrées
               </div>
            </div>
          </div>
          
          <div className="glass-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-purple-500"></div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Lancez votre stratégie Social Media</h3>
            <p className="text-sm text-muted-foreground mb-6">Indiquez-nous votre niveau d'urgence, notre trafic manager vous contacte rapidement.</p>
            
            <LandingLeadForm
              formName="Réseaux Sociaux"
              focusOptions={[
                "Lancement de campagnes Social Ads",
                "Création de ligne éditoriale (Content)",
                "Stratégie LinkedIn B2B",
                "Gestion complète & Modération"
              ]}
              buttonText="Demander un Audit & Preco"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
