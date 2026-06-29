"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

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
              Audit SEO intelligent — Pays Basque
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Vos concurrents vous<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                dépassent sur Google.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Votre site n'attire pas assez de clients à Bayonne, Biarritz ou Anglet ? <strong>87 % des sites analysés présentent des blocages critiques</strong> jamais identifiés. Notre audit IA détecte les 20 % d'actions qui génèrent 80 % de vos résultats.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Demander mon audit gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir la méthode
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">48h</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Livraison Diagnostic</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+120</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Entreprises Aidées</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Sans engagement</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">200+</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Points de contrôle</span>
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
          {Array(3).fill(['Audit SEO IA', 'Référencement Local', 'Optimisation Core Web Vitals', 'Sémantique Prédictive', 'Netlinking & Autorité', 'Conversion & UX', 'Google Business Profile']).flat().map((item, i) => (
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
              <div className="w-5 h-[1.5px] bg-primary"></div> Signaux d'alerte
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Votre site a besoin d'un audit <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">maintenant</em> si…
            </h2>
            <p className="text-lg text-muted-foreground font-light">Ces 4 symptômes révèlent des problèmes structurels qui coûtent des clients chaque semaine à votre entreprise.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              { icon: '📉', title: 'Votre trafic stagne ou chute malgré vos efforts', desc: 'Vous publiez du contenu, vous investissez du temps, mais votre courbe de trafic reste plate ou recule. Cannibalisation de mots-clés, budget de crawl gaspillé, seul un audit IA peut mettre le doigt dessus avec précision.' },
              { icon: '🐌', title: 'Votre site est lent et Google vous pénalise', desc: 'Les Core Web Vitals sont un critère de classement depuis 2021. Thèmes non optimisés, images lourdes, scripts tiers... L\'IA identifie les ralentissements à l\'impact le plus fort sur votre positionnement.' },
              { icon: '🧭', title: 'Vous naviguez à vue sans stratégie data-driven', desc: 'Vous testez des choses en espérant que "ça va marcher". L\'audit Waveia transforme vos suppositions en certitudes : données réelles, opportunités concrètes, plan d\'action priorisé.' },
              { icon: '🎯', title: 'Vous attirez des visiteurs mais ils ne convertissent pas', desc: 'Du trafic sans conversion, c\'est du gaspillage. Waveia analyse le parcours utilisateur : friction UX, messages confus, call-to-action invisibles. On identifie où vous perdez vos clients.' }
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
              Diagnostiquer mon site maintenant →
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Tarifs & Formules
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              N'achetez pas un rapport. <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Obtenez des résultats.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light">En France, un audit SEO classique facturé entre 1 500 € et 4 000 € livre souvent un PDF de 80 pages illisible. Chez Waveia, notre audit IA est orienté action et ROI dès le premier jour.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            <div className="glass-card border border-border rounded-2xl p-10 relative">
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Offert</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Audit Diagnostic IA</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">0 € <span className="text-base text-muted-foreground font-normal">/ gratuit</span></div>
              <p className="text-sm text-muted-foreground mb-8">Pour identifier immédiatement les freins critiques de votre site et de votre visibilité locale au Pays Basque.</p>
              
              <ul className="space-y-4 mb-10">
                {['Analyse IA des 10 blocages techniques', 'Score de santé SEO global', 'Comparatif positionnement vs locaux', 'Rapport synthétique sous 48h', 'Appel de restitution 30 min'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Demander l'audit →</a>
            </div>

            <div className="glass-card border-ocean/40 bg-[linear-gradient(160deg,rgba(14,165,233,0.07)_0%,var(--glass-bg)_60%)] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-purple-500"></div>
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Stratégique</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Audit 360° + Feuille de Route</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">Devis <span className="text-base text-muted-foreground font-normal">/ remboursé si acc.</span></div>
              <p className="text-sm text-muted-foreground mb-8">L'analyse complète avec plan d'action sur 6 à 12 mois pour dominer votre marché local sur Google.</p>
              
              <ul className="space-y-4 mb-10">
                {['Audit technique approfondi (crawl)', 'Audit sémantique & intentions locales', 'Audit netlinking & profil d\'autorité', 'Audit UX & parcours de conversion', 'Plan d\'action priorisé 80/20', '100% remboursé si accompagnement mensuel'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Obtenir un devis →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Périmètre de l'audit
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Une analyse <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">360°</em> qui ne laisse rien au hasard
            </h2>
            <p className="text-lg text-muted-foreground font-light">Six dimensions auditées en profondeur par notre stack IA + expertise humaine pour une vision complète de votre performance digitale.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              { icon: '⚙️', title: 'Audit Technique IA', desc: 'Crawl exhaustif, indexation, Core Web Vitals, robots.txt, sitemap. Notre IA croise 200+ signaux pour identifier ce qui bloque réellement votre indexation.' },
              { icon: '🧠', title: 'Audit Sémantique Prédictif', desc: 'Analyse des intentions locales (Bayonne, Biarritz...), détection de thin content. L\'IA identifie les mots-clés à fort potentiel non exploités par vos concurrents.' },
              { icon: '🔗', title: 'Audit Netlinking & E-E-A-T', desc: 'Analyse complète de votre profil de liens, détection toxique, opportunités de partenariats locaux. Évaluation de votre score E-E-A-T.' },
              { icon: '🎨', title: 'Audit UX & Conversion', desc: 'Analyse des parcours utilisateurs, heatmaps comportementales, friction points. On identifie chaque abandon avant contact ou achat.' },
              { icon: '🕵️', title: 'Audit Concurrentiel IA', desc: 'Radiographie complète de vos 5 concurrents directs : mots-clés capturés, stratégie. On transforme leurs forces en vos opportunités.' },
              { icon: '📍', title: 'Audit Google Business', desc: 'Optimisation de votre fiche pour dominer le Local Pack. Cohérence NAP, gestion des avis, posts et photos optimisées sur la zone.' }
            ].map((s, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:border-ocean/40 transition-all duration-300">
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 flex items-center justify-center rounded-xl text-xl mb-4">{s.icon}</div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Ce que ça change <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">concrètement</em></h2>
            <p className="text-lg text-muted-foreground font-light">La différence entre avancer à l'aveugle et piloter votre croissance avec des données précises.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            <div className="glass-card bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">❌ Sans audit</span>
                <h3 className="text-xl font-bold font-heading text-foreground">Avancer à l'intuition</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Budget marketing dépensé sur des actions sans impact",
                  "Erreurs techniques invisibles qui bloquent l'indexation",
                  "Positionnement stagnant malgré des efforts constants",
                  "Aucune visibilité sur le retour sur investissement",
                  "Risque de pénalité algorithmique non anticipé",
                  "Concurrents locaux qui captent vos clients potentiels"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
             <div className="glass-card bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">✅ Avec Waveia</span>
                <h3 className="text-xl font-bold font-heading text-foreground">Piloter par la donnée</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Plan d'action priorisé 80/20 à fort impact financier",
                  "Site sain, rapide et 100% conforme Google",
                  "Croissance mesurable du trafic qualifié et des leads",
                  "Stratégie éditoriale calée sur la demande locale",
                  "Architecture SEO solide et durable dans le temps",
                  "Domination locale sur Bayonne, Biarritz, Anglet..."
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
               <div className="w-5 h-[1.5px] bg-primary"></div> Notre méthode
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Comment Waveia réalise <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">votre audit SEO</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Une méthode en 4 étapes qui combine la puissance de l'IA et l'expertise humaine pour des recommandations actionnables, pas théoriques.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto mt-10">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent"></div>
            
            {[
              { num: "01", title: "Le crawl augmenté par l'IA", desc: "Notre stack scanne 100% de vos pages en croisant plus de 200 signaux. Là où un audit traditionnel voit des erreurs isolées, notre IA détecte des patterns de blocage." },
              { num: "02", title: "L'analyse croisée", desc: "Nos algorithmes croisent les données techniques, sémantiques et comportementales pour construire une vision d'ensemble cohérente de votre écosystème au Pays Basque." },
              { num: "03", title: "La priorisation 80/20", desc: "Notre IA classe automatiquement chaque problème selon son impact sur votre CA. Nous écartons les détails cosmétiques pour libérer votre ligne de croissance." },
              { num: "04", title: "Restitution opérationnelle", desc: "Zéro jargon. Vous recevez une feuille de route claire, priorisée mois par mois. Chaque recommandation est expliquée : ce que ça coûte, ce que ça rapporte." }
            ].map((p, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative z-10 w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full glass-card border border-border flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-background/80">
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
               Waveia en chiffres
            </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">Des résultats qui <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">parlent d'eux-mêmes</em></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:rounded-2xl lg:overflow-hidden lg:border lg:border-border glass-card">
            {[
              { val: "+340%", label: "Croissance moyenne du trafic après 6 mois" },
              { val: "120+", label: "Entreprises du Pays Basque aidées" },
              { val: "48h", label: "Délai de livraison du diagnostic" },
              { val: "98%", label: "Taux de satisfaction client" }
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
               <div className="w-5 h-[1.5px] bg-primary"></div> Pourquoi Waveia
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Ce que les autres agences <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">ne font pas</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Il existe des centaines d'outils d'audit. Mais un outil ne connaît pas le tissu économique de Bayonne, ni les comportements de recherche des consommateurs basques.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { tag: "Différenciant", title: "Expertise IA native", desc: "Waveia n'utilise pas l'IA comme gadget. Nos processus sont repensés autour de l'intelligence artificielle : analyse prédictive, détection de patterns de blocage. C'est structurel." },
              { tag: "Local", title: "Ancrage Pays Basque", desc: "Nous connaissons intimement le marché de Bayonne, Biarritz, Anglet... Saisonnalité, recherches locales : notre analyse est calibrée sur votre réalité terrain." },
              { tag: "Business", title: "Orienté ROI, pas métrique", desc: "Oubliez les 'scores de spam'. Chaque point de l'audit Waveia est un impact business concret : combien de clients perdez-vous ? Combien regagnerez-vous ?" },
              { tag: "Complet", title: "Approche 360° intégrée", desc: "Waveia maîtrise l'ensemble des leviers digitaux (Web, SEO, Ads). Votre audit révèle l'ensemble des opportunités inexploitées, pas seulement le référencement." }
            ].map((w, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-8 hover:border-ocean/30 transition-colors">
                <h4 className="flex items-center gap-3 font-heading font-bold text-lg text-foreground mb-4">
                  {w.title} <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">{w.tag}</span>
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
               <div className="w-5 h-[1.5px] bg-primary"></div> Zone d'intervention
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading mb-3">Votre agence SEO <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">au cœur du Pays Basque</em></h2>
            <p className="text-sm text-muted-foreground">Waveia accompagne les entreprises locales sur toute la côte basque et le grand Bayonne.</p>
          </div>
          <div className="flex flex-wrap gap-3">
             {['📍 Bayonne', '📍 Biarritz', '📍 Anglet', '📍 Bidart', '📍 Hossegor', '📍 Saint-Jean-de-Luz', '📍 Boucau', '📍 Hendaye', '📍 Capbreton', '📍 Pays Basque intérieur'].map(c => (
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
               FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Tout ce que vous voulez savoir <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">sur l'audit SEO</em></h2>
          </div>
          
          <div className="space-y-3">
            {[
              { q: 'Quelle est la différence entre votre audit et un outil gratuit en ligne ?', a: "Les outils automatiques ne voient que la surface : balises manquantes, liens cassés. L'audit Waveia est une analyse humaine augmentée par l'IA : nous contextualisons chaque recommandation à votre marché local au Pays Basque." },
              { q: 'Avez-vous besoin d\'accès à mon site pour réaliser l\'audit ?', a: "Pour l'audit gratuit, votre URL suffit. Pour l'audit complet, un accès GSC, GA4 et CMS permet d'aller plus loin. Accès transmis de manière sécurisée et révoqués après l'audit." },
              { q: 'Combien de temps prend un audit SEO Waveia ?', a: "L'audit diagnostic est livré sous 48h ouvrées. L'audit complet demande entre 7 et 14 jours. Si vous démarrez un accompagnement mensuel, les corrections prioritaires démarrent dès les premiers jours." },
              { q: 'Mon site est petit, l\'audit est-il utile ?', a: "Absolument. Un site de 5 pages peut contenir des erreurs bloquantes. Mieux vaut corriger ces fondations dès maintenant que subir une refonte forcée." },
              { q: 'Que se passe-t-il après la livraison de l\'audit ?', a: "L'audit est le point de départ. Vous pouvez implémenter avec notre guide ou confier l'exécution à Waveia. Dans ce cas, l'audit stratégique est 100% remboursé." },
              { q: 'Est-ce que Waveia travaille uniquement sur le SEO ?', a: "Non, Waveia est une agence digitale 360° : si nous détectons des opportunités sur d'autres leviers (Ads, UX), nous vous le signalons." }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6">Lancez votre audit SEO <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">dès aujourd'hui</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">Vous voulez comprendre pourquoi votre site n'attire pas assez de clients à Bayonne, Biarritz ou Anglet ? L'appel est gratuit et sans engagement.</p>
            
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
                 Réponse garantie sous 24h ouvrées
               </div>
            </div>
          </div>
          
          <div className="glass-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-purple-500"></div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Demandez votre audit gratuit</h3>
            <p className="text-sm text-muted-foreground mb-6">Complétez ce formulaire, notre équipe vous recontacte sous 24h.</p>
            
            <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Prénom</label>
                    <input type="text" placeholder="Jean" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nom</label>
                    <input type="text" placeholder="Dupont" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email professionnel</label>
                  <input type="email" placeholder="jean@entreprise.fr" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Téléphone</label>
                  <input type="tel" placeholder="06 00 00 00 00" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">URL de votre site</label>
                  <input type="url" placeholder="https://votresite.fr" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <button type="button" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] w-full font-heading font-bold py-3.5 rounded-full mt-4 transition-transform hover:-translate-y-0.5">
                  Envoyer ma demande d'audit 🚀
               </button>
               <p className="text-center text-xs text-muted-foreground/70 mt-2">Audit 100% gratuit. Aucune carte bancaire. Réponse sous 24h.</p>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
