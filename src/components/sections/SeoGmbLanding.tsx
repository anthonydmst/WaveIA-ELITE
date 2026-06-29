"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, MapPin, Search, Bot, Zap, TrendingUp, Star, Camera, BarChart3, Navigation, PenTool, LayoutDashboard, Radar } from 'lucide-react';

export function SeoGmbLanding() {
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

  const launchAudit = () => {
    const el = document.getElementById('auditUrl') as HTMLInputElement;
    if (el && !el.value) {
      alert("Veuillez entrer l'URL de votre fiche Google Maps.");
      return;
    }
    alert("✓ Demande reçue ! Notre équipe lance l'analyse IA et vous contacte sous 24h.");
  };

  return (
    <div className="w-full relative z-10 pt-20">
      
      {/* ─── HERO ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-12 md:py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              Agence Google My Business · Pays Basque
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Dominez Google Maps<br />
              au <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Pays Basque</em><br />
              grâce à l'IA.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Waveia optimise votre fiche Google My Business avec des processus d'intelligence artificielle avancés. Résultats locaux plus rapides, plus précis, mesurables dès les premières semaines.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#audit" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Audit gratuit de ma fiche <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#tarifs" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir les offres
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+340%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Clics générés</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">7+</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Villes couvertes</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">IA native</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Dans l'optimisation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUDIT BAND ─── */}
      <div id="audit" className="bg-primary py-14 px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">🔍 Audit Google My Business offert</h2>
          <p className="text-white/80 mb-8">Entrez l'URL Google Maps de votre fiche pour lancer l'analyse IA gratuite.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input 
              type="url" 
              id="auditUrl"
              placeholder="Ex : https://maps.google.com/..." 
              className="flex-1 bg-white/10 border border-border text-white placeholder-white/50 px-6 py-4 rounded-full focus:outline-none focus:border-white transition-colors"
            />
            <button 
              onClick={launchAudit}
              className="bg-white text-ocean font-heading font-bold px-8 py-4 rounded-full transition-transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Analyser →
            </button>
          </div>
          <p className="text-white/60 text-xs mt-4">Analyse 100% gratuite · Sans engagement · Résultat en 24h</p>
        </div>
      </div>

      {/* ─── WHY GMB ─── */}
      <section id="pourquoi" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Pourquoi agir maintenant ?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Google favorise les fiches<br />bien optimisées — profitez-en.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Sans fiche Google My Business travaillée avec précision, vos concurrents captent vos clients locaux chaque jour. Waveia comble ce gap avec une approche data et IA.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-14">
            <div className="glass-card border border-border rounded-2xl p-8 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-ocean/20 blur-3xl rounded-full pointer-events-none"></div>
              
              <div className="bg-background/50 border border-border rounded-xl p-5 relative z-10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg text-xl">🏄</div>
                  <div>
                    <div className="font-heading font-bold text-foreground">Votre Entreprise · Biarritz</div>
                    <div className="text-xs text-muted-foreground">Optimisé par Waveia · IA</div>
                  </div>
                </div>
                <div className="text-yellow-400 text-lg mb-2 flex items-center gap-2">★★★★★ <span className="text-sm text-muted-foreground font-sans">4.9 (128 avis)</span></div>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="bg-ocean/10 text-ocean text-xs font-semibold px-2 py-1 rounded">Ouvert maintenant</span>
                  <span className="bg-ocean/10 text-ocean text-xs font-semibold px-2 py-1 rounded">Site web</span>
                  <span className="bg-ocean/10 text-ocean text-xs font-semibold px-2 py-1 rounded">Itinéraire</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1.5 flex justify-between"><span>Visibilité locale ce mois-ci</span><span className="text-ocean font-bold">+87%</span></div>
                    <div className="h-1.5 bg-muted/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[87%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1.5 flex justify-between"><span>Clics vers le site web</span><span className="text-ocean font-bold">+73%</span></div>
                    <div className="h-1.5 bg-muted/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[73%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1.5 flex justify-between"><span>Appels téléphoniques</span><span className="text-ocean font-bold">+65%</span></div>
                    <div className="h-1.5 bg-muted/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[65%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 delay-100">
              {[
                { icon: <MapPin className="w-5 h-5 text-ocean" />, title: 'Priorité dans les résultats locaux', desc: 'Google met en avant ses propres outils. Une fiche GMB IA-optimisée surpasse souvent un site web classique.' },
                { icon: <Zap className="w-5 h-5 text-ocean" />, title: 'Résultats rapides', desc: 'Contrairement à un référencement organique long, une fiche GMB travaillée génère des contacts qualifiés en quelques semaines.' },
                { icon: <Navigation className="w-5 h-5 text-ocean" />, title: 'L\'info clé en un clic', desc: 'Horaires, téléphone, services, photos : vos prospects trouvent tout sans friction. Moins d\'étapes = plus de conversions.' },
                { icon: <Star className="w-5 h-5 text-ocean" />, title: 'Crédibilité par les avis', desc: 'Notre système de collecte automatisé vous aide à accumuler des 5 étoiles et construire une solide réputation.' },
                { icon: <BarChart3 className="w-5 h-5 text-ocean" />, title: 'Données et pilotage IA', desc: 'Waveia surveille vos métriques en continu et ajuste la stratégie grâce à l\'IA pour maximiser chaque opportunité.' }
              ].map((benefit, i) => (
                <div key={i} className="glass-card border border-border rounded-xl p-5 flex gap-5 items-start hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 bg-ocean/10 rounded-lg flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
              Des offres claires,<br />des résultats mesurables.
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Pas de surprise, pas de jargon. Deux formules pensées pour placer votre entreprise au Pays Basque sur le podium de Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* OPTIMISATION */}
            <div className="glass-card p-10 hover:-translate-y-1 transition-transform border-ocean/40 bg-[linear-gradient(160deg,rgba(14,165,233,0.07)_0%,var(--glass-bg)_60%)] relative overflow-hidden animate-in fade-in slide-in-from-bottom-4">
              <div className="absolute top-5 -right-9 bg-primary text-white font-heading text-[0.65rem] font-bold tracking-[0.1em] px-9 py-1 rotate-45">
                POPULAIRE
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">Création & Optimisation GMB</h3>
              
              <div className="flex items-baseline gap-1.5 mb-2 mt-4">
                <span className="text-2xl font-bold text-muted-foreground">€</span>
                <strong className="text-4xl font-extrabold font-heading text-foreground">290</strong>
              </div>
              <div className="text-sm text-muted-foreground mb-7">paiement unique · livraison sous 5 jours</div>
              
              <ul className="space-y-4 mb-9">
                {['Audit complet de visibilité locale', 'Création ou refonte de la fiche', 'Optimisation SEO local pilotée par IA', 'Rédaction des descriptions & services', 'Analyse concurrentielle Pays Basque', 'Sélection des catégories stratégiques', 'Rapport de lancement inclus'].map((f,i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground font-medium">
                    <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] py-3.5 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all w-full mt-auto">
                Démarrer ce projet
              </a>
            </div>

            {/* GESTION MENSUELLE */}
            <div className="glass-card p-10 hover:-translate-y-1 transition-transform animate-in fade-in slide-in-from-bottom-4 delay-100">
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">Gestion Mensuelle GMB</h3>
              
              <div className="flex items-baseline gap-1.5 mb-2 mt-4">
                <span className="text-2xl font-bold text-muted-foreground">€</span>
                <strong className="text-4xl font-extrabold font-heading text-foreground">79</strong>
              </div>
              <p className="text-sm text-muted-foreground mb-7">/mois · engagement 6 mois minimum</p>
              
              <ul className="space-y-4 mb-9">
                {['Publications hebdomadaires IA', 'Gestion & réponse aux avis clients', 'Mise à jour continue des infos', 'Veille concurrentielle mensuelle', 'Ajustements produits & services', 'Reporting trimestriel détaillé', 'Conseils stratégiques personnalisés'].map((f,i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-transparent border border-border text-foreground font-heading font-bold text-[0.95rem] py-3.5 rounded-full hover:border-ocean hover:text-ocean transition-all w-full mt-auto">
                Démarrer ce projet
              </a>
            </div>
          </div>
          
          <p className="text-center mt-8 text-sm text-muted-foreground italic max-w-2xl mx-auto">
            * Les offres sont combinables pour un impact maximal au lancement suivi d'une croissance continue.
          </p>
        </div>
      </section>

      {/* ─── SERVICES DETAIL ─── */}
      <section id="expertises" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Ce que nous faisons concrètement
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Nos 9 piliers d'optimisation<br />Google My Business.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Chaque levier est activé avec précision. L'IA Waveia identifie les opportunités que vos concurrents manquent et maximise votre retour sur investissement local.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Search className="w-6 h-6 text-ocean" />, num: "01", title: "Audit IA de votre fiche", desc: "Analyse algorithmique complète : score de complétion, opportunités manquées, benchmark automatisé." },
              { icon: <PenTool className="w-6 h-6 text-ocean" />, num: "02", title: "Optimisation technique", desc: "Catégories stratégiques, descriptions enrichies de mots-clés locaux, attributs spécifiques." },
              { icon: <Bot className="w-6 h-6 text-ocean" />, num: "03", title: "Contenus réguliers IA", desc: "Publications hebdomadaires pour l'engagement et le signal de fraîcheur algorithmique." },
              { icon: <Star className="w-6 h-6 text-ocean" />, num: "04", title: "Stratégie avis clients", desc: "Système automatisé de collecte d'avis 5 étoiles, gestion des réponses avec templates IA." },
              { icon: <LayoutDashboard className="w-6 h-6 text-ocean" />, num: "05", title: "Fiches produits & services", desc: "Création de fiches structurées pour chaque offre, optimisées pour la conversion directe." },
              { icon: <Camera className="w-6 h-6 text-ocean" />, num: "06", title: "Stratégie photos & visuels", desc: "Les fiches avec photos pertinentes obtiennent 42% de demandes d'itinéraires en plus." },
              { icon: <Radar className="w-6 h-6 text-ocean" />, num: "07", title: "Veille concurrentielle", desc: "Surveillance automatique des actions concurrentes pour anticiper et contrer chaque mouvement." },
              { icon: <BarChart3 className="w-6 h-6 text-ocean" />, num: "08", title: "Suivi & reporting", desc: "Dashboard trimestriel avec métriques clés : impressions, clics, appels, demandes d'itinéraires." },
              { icon: <TrendingUp className="w-6 h-6 text-ocean" />, num: "09", title: "Optimisation continue", desc: "L'IA analyse les données en permanence et ajuste la stratégie pour coller à l'algorithme." }
            ].map((item, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:border-ocean/40 transition-all relative overflow-hidden">
                <span className="absolute top-6 right-6 font-heading font-black text-3xl text-ocean/10">{item.num}</span>
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 flex items-center justify-center rounded-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-14 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
              Recevoir mon devis gratuit <ArrowRight className="w-4 h-4" />
            </a>
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
              La différence est visible<br />dès les premières semaines.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14">
            <div className="glass-card bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-10 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-xl font-bold font-heading text-red-500 mb-6 flex items-center gap-2">
                <X className="w-5 h-5" /> Sans Waveia
              </h3>
              <ul className="space-y-4">
                {[
                  "Invisible dans le Local Pack Google — vos concurrents captent vos clients",
                  "Informations incomplètes ou erronées qui frustrent les prospects",
                  "Peu ou pas d'avis clients — crédibilité nulle pour un nouveau visiteur",
                  "Fiche inactive depuis des mois, pénalisée par l'algorithme",
                  "Aucune donnée sur le comportement de vos prospects locaux",
                  "Dépendance totale au bouche-à-oreille hors ligne"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-red-500/10 pb-3 last:border-0 last:pb-0">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card bg-ocean/5 border border-ocean/20 rounded-2xl p-8 md:p-10 animate-in fade-in slide-in-from-bottom-4 delay-100">
              <h3 className="text-xl font-bold font-heading text-ocean mb-6 flex items-center gap-2">
                <Check className="w-5 h-5" /> Avec Waveia & l'IA
              </h3>
              <ul className="space-y-4">
                {[
                  "Top 3 du Local Pack Google sur vos mots-clés à Bayonne, Biarritz...",
                  "Fiche 100% complète : téléphone, horaires, photos, services",
                  "Flux régulier d'avis 5★ via notre système automatisé",
                  "Publications hebdomadaires activant l'algorithme",
                  "Dashboard de pilotage : chaque clic, appel et itinéraire tracé",
                  "Chaque recherche locale devient un contact qualifié"
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

      {/* ─── PROCESS ─── */}
      <section id="methode" className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               Notre méthode
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              4 étapes pour dominer<br />votre marché local.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative mt-16">
            <div className="hidden md:block absolute top-[36px] left-[10%] right-[10%] h-[2px] bg-border z-0">
               <div className="h-full bg-primary w-0 animate-[growBar_2s_ease_forwards]"></div>
            </div>
            
            {[
              { num: "01", title: "Audit IA complet", desc: "Analyse algorithmique de votre fiche, de vos concurrents et des requêtes." },
              { num: "02", title: "Optimisation de la fiche", desc: "Mise à jour des infos, catégories, descriptions selon les signaux Google." },
              { num: "03", title: "Preuve sociale", desc: "Système de collecte d'avis, réponses aux questions, publications régulières." },
              { num: "04", title: "Amélioration continue", desc: "Suivi des performances, ajustements IA et rapports ROI." }
            ].map((p, i) => (
              <div key={i} className="relative z-10 text-center animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-20 h-20 mx-auto rounded-full glass-card border-2 border-ocean flex items-center justify-center font-heading font-black text-2xl text-ocean mb-6 shadow-glow">
                  {p.num}
                </div>
                <h4 className="text-lg font-bold font-heading text-foreground mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed px-4">{p.desc}</p>
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
              <div className="w-5 h-[1.5px] bg-primary"></div> Couverture géographique
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Présents sur tout le<br />Pays Basque.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Waveia est l'agence Google My Business de référence au Pays Basque. Nous connaissons les dynamiques locales de chaque territoire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🏛️", title: "Bayonne", desc: "Centre économique · Forte concurrence" },
              { icon: "🌊", title: "Biarritz", desc: "Marché premium · Potentiel saisonnier" },
              { icon: "🏙️", title: "Anglet", desc: "Zone résidentielle · Pour les pros locaux" },
              { icon: "🌿", title: "Bidart", desc: "Village côtier · Clientèle premium" },
              { icon: "🏄", title: "Hossegor", desc: "Capitale surf · Marché très actif" },
              { icon: "⛵", title: "Saint-Jean-de-Luz", desc: "Tourisme & commerces locaux" },
              { icon: "🏭", title: "Boucau", desc: "Zone B2B et pôle d'artisans" }
            ].map((city, i) => (
              <div key={i} className="glass-card border border-border rounded-xl p-5 hover:border-ocean/40 transition-colors">
                <div className="text-3xl mb-3">{city.icon}</div>
                <h4 className="text-base font-bold font-heading text-foreground mb-1">{city.title}</h4>
                <p className="text-xs text-muted-foreground">{city.desc}</p>
              </div>
            ))}
             <div className="glass-card bg-primary border border-ocean rounded-xl p-5 flex flex-col justify-center text-center">
                <div className="text-3xl mb-1">📍</div>
                <h4 className="text-base font-bold font-heading text-white mb-1">Votre ville ?</h4>
                <p className="text-xs text-white/70">Nous couvrons tout le Pays Basque et Landes.</p>
              </div>
          </div>
        </div>
      </section>

      {/* ─── POURQUOI WAVEIA ─── */}
      <section className="py-24 bg-card border-y border-border">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Pourquoi Waveia ?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              L'agence qui va plus loin<br />que l'optimisation basique.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Waveia n'est pas une agence GMB classique. Nous intégrons l'intelligence artificielle à chaque étape pour des résultats inatteignables manuellement.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mt-14">
            <div className="glass-card border border-border rounded-2xl p-8 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4">
               <div className="flex flex-wrap gap-2 mb-8">
                  {['IA Prédictive', 'SEO Local', 'Automatisation', 'Data', 'Conversion'].map((badge,i) => (
                     <span key={i} className="text-xs bg-ocean/10 text-ocean border border-ocean/20 px-3 py-1 rounded-full font-semibold">{badge}</span>
                  ))}
               </div>
               
               <div className="space-y-6">
                  {[
                     { label: 'Score de visibilité locale', val: '94/100', pct: 94 },
                     { label: 'Complétion de la fiche', val: '100%', pct: 100 },
                     { label: 'Signal d\'activité GMB', val: 'Excellent', pct: 88 },
                     { label: 'Score de réputation', val: '4.9★', pct: 96 }
                  ].map((m, i) => (
                     <div key={i}>
                        <div className="flex justify-between items-end mb-2">
                           <span className="text-sm text-foreground font-medium">{m.label}</span>
                           <span className="text-sm font-bold text-ocean">{m.val}</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                           <div className="h-full bg-gradient-to-r from-ocean to-purple-500 rounded-full" style={{width: `${m.pct}%`}}></div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="flex flex-col gap-8 justify-center">
               <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center text-2xl shrink-0">🤖</div>
                  <div>
                     <h4 className="font-heading font-bold text-foreground text-lg mb-2">IA au cœur du processus</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">Chaque analyse et optimisation est amplifiée par des modèles IA propriétaires. Vous bénéficiez d'une puissance de traitement absolue.</p>
                  </div>
               </div>
               <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center text-2xl shrink-0">📍</div>
                  <div>
                     <h4 className="font-heading font-bold text-foreground text-lg mb-2">Expertise hyperlocale Pays Basque</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">Nous connaissons les marchés de Bayonne à Hossegor. Nos stratégies sont calibrées sur les comportements locaux réels.</p>
                  </div>
               </div>
               <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center text-2xl shrink-0">🔍</div>
                  <div>
                     <h4 className="font-heading font-bold text-foreground text-lg mb-2">Transparence totale</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">Dashboard accessible, reporting trimestriel. Vous savez exactement ce que génère votre investissement, ligne par ligne.</p>
                  </div>
               </div>
            </div>
          </div>
         </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
             <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               Questions fréquentes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Tout ce que vous voulez savoir<br />sur notre agence GMB.</h2>
          </div>
          
          <div className="space-y-3">
            {[
              { q: "Comment Waveia utilise-t-elle l'IA pour ma fiche GMB ?", a: "Nos modèles IA analysent les signaux Google, les comportements locaux et vos concurrents pour identifier précisément les optimisations à fort impact. Chaque contenu est rédigé et calibré par IA." },
              { q: "Combien de temps pour voir les premiers résultats ?", a: "Les premiers classements apparaissent entre 2 et 6 semaines après l'optimisation. L'IA accélère fortement les cycles par rapport à une approche manuelle classique." },
              { q: "Je n'ai pas de fiche Google My Business, est-ce un problème ?", a: "Non. Notre offre inclut la création de votre fiche depuis zéro. Nous nous occupons de la configuration et de la vérification pour partir sur les meilleures bases." },
              { q: "Quelle différence avec une agence SEO classique ?", a: "Une agence classique travaille manuellement. Waveia intègre des processus IA qui traitent d'immenses volumes de données pour une précision qui apporte des résultats plus rapides et plus durables." },
              { q: "Waveia gère-t-elle uniquement Google My Business ?", a: "Non, GMB est l'un des leviers de notre approche 360°. Waveia prend en charge création web, SEO organique, automatisation et acquisition." }
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
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Prêt pour votre audit ?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">En 48h, nos systèmes IA analysent votre fiche Google Maps, identifient vos opportunités locales et vous livrent un diagnostic clair — gratuitement.</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a href="#audit" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                  Lancer mon diagnostic Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground italic">Sans carte bancaire. Réponse sous 24h ouvrées.</p>
           </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Démarrer maintenant
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">Une question ?<br />Un projet ? Échangeons.</h2>
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
                   <span className="text-muted-foreground">Pays Basque — Bayonne · Biarritz · Anglet</span>
                 </div>
               </div>
               <div className="flex items-start gap-4 text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg shrink-0">⚡</div>
                 <div>
                   <strong className="block text-foreground mb-1 font-heading">Délai de réponse</strong>
                   <span className="text-muted-foreground">Sous 24h ouvrées</span>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="glass-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Demandez votre devis gratuit</h3>
            
            <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="Prénom" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <input type="text" placeholder="Nom" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="email" placeholder="Email professionnel" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Téléphone" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
               </div>
               <div>
                  <input type="text" placeholder="Nom de l'entreprise" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <input type="url" placeholder="URL Google Maps (optionnel)" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors appearance-none text-muted-foreground">
                    <option value="" disabled selected>Ville concernée</option>
                    <option value="bayonne">Bayonne</option>
                    <option value="biarritz">Biarritz</option>
                    <option value="anglet">Anglet</option>
                    <option value="bidart">Bidart</option>
                    <option value="hossegor">Hossegor</option>
                    <option value="stjean">Saint-Jean-de-Luz</option>
                    <option value="boucau">Boucau</option>
                    <option value="autre">Autre</option>
                  </select>
               </div>
               <div>
                  <textarea placeholder="Décrivez votre activité et vos objectifs GMB…" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors min-h-[100px] resize-y"></textarea>
               </div>
               <button type="button" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] w-full font-heading font-bold py-3.5 rounded-full mt-4 transition-transform hover:-translate-y-0.5">
                  Envoyer ma demande →
               </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
