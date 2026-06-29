"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Video, Film, PlayCircle, Users, MessagesSquare, Tv } from 'lucide-react';

export function VideoLanding() {
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
              Production Vidéo & Motion — Pays Basque
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              L'impact de la vidéo pour<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                captiver et convertir.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Plus personne ne lit les longs discours. Des <strong>Social Ads</strong> (UGC, Reels) ultra-performants au <strong>Motion Design</strong> explicatif, nous réalisons des formats vidéos calibrés pour abaisser votre Coût Par Acquisition (CPA) et asseoir l'autorité de votre marque.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Démarrer une production <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir la méthode Web
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">82%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Du Trafic Global</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">4K / HD</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Cinéma & Mobile</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">10X</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">ROI Ads Supérieur</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">UGC</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Acquisition Native</span>
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
          {Array(3).fill(['Social Ads & UGC', 'Motion Design', 'Vidéo Marque Employeur', 'Témoignages Clients', 'Snack Content TikTok', 'Vidéo Interview E-E-A-T']).flat().map((item, i) => (
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
              <div className="w-5 h-[1.5px] bg-primary"></div> Signaux Inquiétants
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Oublier la vidéo aujourd'hui, c'est <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">perdre demain</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light">L'attention du public s'effondre. Ces 4 cas d'usage montrent pourquoi les entreprises sans stratégie vidéo sombrent face à leur concurrence.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              { icon: '📉', title: 'Vos publicités Social Ads échouent', desc: 'Lancer des campagnes payantes (Meta Ads, TikTok) avec de simples images fixes coûte de plus en plus cher. L\'algorithme pénalise les visuels fades au profit des vidéos dynamiques et UGC.' },
              { icon: '🤨', title: 'Votre produit Tech est incompris', desc: 'Vous avez un SaaS, une app ou un service B2B innovant, mais vos visiteurs fuient à la simple vue d\'un texte explicatif de 30 lignes. Il vous manque un motion design simplificateur de 60 secondes.' },
              { icon: '👻', title: 'Marque Employeur invisible', desc: 'Vos offres d\'emploi B2B peinent à recruter les vrais talents. Pourquoi ? Parce que l\'ADN de votre culture d\'entreprise ne se ressent pas. Personne n\'a vu vos dirigeants ou collaborateurs s\'exprimer.' },
              { icon: '💬', title: 'Absence totale de Preuve Sociale', desc: 'Vous pouvez écrire que vous êtes "le meilleur partenaire", personne n\'y croit initialement. Sans interviews face caméra de clients satisfaits, vous perdez la confiance vitale (trust) à la conversion.' }
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
              Scanner ma stratégie vidéo →
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Formules Vidéos & Motion
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Des investissements avec un <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">ROI mesurable.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light">Nous produisons aussi bien les contenus d'acquisition agressifs (Ads) que les pierres angulaires créatives (Animation, Films Corporate).</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            <div className="glass-card border border-border rounded-2xl p-10 relative">
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Snack Content</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Social Ads & UGC</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">Sur Devis <span className="text-base text-muted-foreground font-normal">/ Batch de vidéos</span></div>
              <p className="text-sm text-muted-foreground mb-8">Production d'assets ultra-divertissants pensés nativement pour Meta (Insta/FB), TikTok ou LinkedIn. Idéal pour faire chuter vos coûts publicitaires et viraliser un produit.</p>
              
              <ul className="space-y-4 mb-10">
                {['Étude des formats "hook" (Les 3 premières secondes)', 'Scénarios orientés Acquisition B2B ou Vente E-com', 'Recherche / Casting de créateurs UGC', 'Tournage Smartphone HQ (Rendu organique)', 'Montage dynamique & Sous-titrage Motion', 'Pack de variantes Ads pour l\'A/B Testing'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Produire du contenu viral →</a>
            </div>

            <div className="glass-card border-ocean/40 bg-[linear-gradient(160deg,rgba(14,165,233,0.07)_0%,var(--glass-bg)_60%)] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-purple-500"></div>
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Film Premium</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Corporate & Motion Design</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">Sur Devis <span className="text-base text-muted-foreground font-normal">/ Opération Custom</span></div>
              <p className="text-sm text-muted-foreground mb-8">La création lourde. Qu'il s'agisse d'animer un service Tech de manière éducative, ou de tourner un témoignage client à dimension cinématographique.</p>
              
              <ul className="space-y-4 mb-10">
                {['Interview Témoignage Client (Caméra Cinéma)', 'Film de Marque Employeur (Savoir-faire / DNA)', 'Motion Design : Storyboard, Voix-Off et Illustration', 'Explication pédagogique d\'App Web', 'Sound Design & Étalonnage Cinéma', 'Exports Multiformats (16:9 Youtube, 9:16 Insta)'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Concrétiser ma vision vidéo →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Domaines de réalisation
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Maîtriser tous les codes <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">du réel au virtuel</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light">Du storyboard dessiné à l'animation 2D jusqu'au tournage sur set professionnel, nous encadrerons techniquement tous vos besoins visuels.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: <PlayCircle className="w-6 h-6"/>, title: 'Social Ads & Snacks', desc: 'Formats "Shot on iPhone" type TikTok/Reels ou UGC brut, idéaux pour la publicité Meta car ultra-organiques, créant le meilleur CPA.' },
              { icon: <Tv className="w-6 h-6"/>, title: 'Motion Design', desc: 'Animation 2D/3D isométrique ou Flat. Indispensable pour imager des data complexes, du SaaS ou l\'explication rapide d\'une offre immatérielle.' },
              { icon: <Users className="w-6 h-6"/>, title: 'Marque Employeur', desc: 'Film manifeste, présentation des locaux et process internes avec authenticité. Objectif E-E-A-T : instaurer une gouvernance sectorielle de confiance.' },
              { icon: <MessagesSquare className="w-6 h-6"/>, title: 'Témoignage (Case Study)', desc: 'Un client B2B ou B2C satisfait parle de vous devant nos caméras. La fameuse "Étude de Cas" décuple immédiatement votre taux de conversion global.' }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Le ROI selon la <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">performance vidéo</em></h2>
            <p className="text-lg text-muted-foreground font-light">Une vidéo n'est pas qu'un loisir esthétique. Sur un écran, c'est votre atout majeur ou votre talon d'Achille algorithmique.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            <div className="glass-card bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">❌ Manque d'Approche Focus</span>
                <h3 className="text-xl font-bold font-heading text-foreground">De l'énergie gaspillée</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Scroll immédiat : échec de 'l'arrêt d'attention' dans les 3 permières sec",
                  "Vidéos mal rythmées qui endorment le prospect (baisse du watch-time)",
                  "Film d'entreprise trop guindé, sans rythme, paraissant ringard ou vide",
                  "Audio crépitant sans mixage coupant la confiance en votre technologie",
                  "Motion Design cheap (généré par IA sans retouche humaine qualitative)",
                  "Prix d'acquisition Facebook Ads s'envolant car le format est statique"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
             <div className="glass-card bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">✅ Conception Wave IA</span>
                <h3 className="text-xl font-bold font-heading text-foreground">Magnétisme & Rétention</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Un Hook Ads dévastateur = des Coûts Par Acquisition (CPA) qui chutent",
                  "Témoignages intimes, éclairés de manière flatteuse, créant un pic de confiance",
                  "Explication Tech (Motion 2D) qui rend limpide l'achat d'un SaaS complexe",
                  "Sound Design de cinéma rythmant chaque cut et transition d'une Corporate",
                  "Marque employeur dynamique avec rétention visuelle jusqu'à la fin",
                  "Toutes les proportions sont respectées : 9:16 pour TikTok / 16:9 Youtube"
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">De l'idée narrative jusqu'au <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Cut final</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Oubliez les improvisations douteuses. Le secret d'une vidéo virale ou corporative réussie, c'est la pré-production millimétrée. En 4 actes.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto mt-10">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent"></div>
            
            {[
              { num: "01", title: "Scénarisation, Hook & Storyboard", desc: "Le plus important. Nous posons l'angle marketing des TikTok Ads ou dessinons le storyboard d'un motion design de 60s pour verrouiller chaque illustration avant animation." },
              { num: "02", title: "Casting, Décors ou Illustration", desc: "Validation de la Voix-Off (Motion), audit d'UGC Ads (Recherche de créateurs natifs), ou scouting logistique des bureaux pour une belle interview Marque Employeur." },
              { num: "03", title: "Production : Tournage ou Animation", desc: "Action. Qu'il s'agisse d'animer rigideusement les vecteurs du Motion sur After Effects, ou de tourner une étude de cas chez vos clients avec de l'éclairage continu cinéma." },
              { num: "04", title: "Montage, Sound Design & Étalonnage", desc: "La magie d'un Reel ou d'un Corporate se joue au Cut et au Son. Correction des couleurs (Color Grading), effets dynamiques, sous-titrages inclusifs, et exports dédiés RS." }
            ].map((p, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative z-10 w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full glass-card border flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-background/80 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
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
               Données Algorithmiques
            </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">Pourquoi le marché de l'attention <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">prouve nos choix</em></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:rounded-2xl lg:overflow-hidden lg:border lg:border-border glass-card">
            {[
              { val: "60s", label: "Format optimal d'explication de concept (Motion)" },
              { val: "-50%", label: "De coût CPA sur des UGC au lieu d'images" },
              { val: "85%", label: "Vidéos regardées sans le son (sous-titres obligés)" },
              { val: "+90%", label: "Hausse d'intention avec la Preuve Sociale Filmée" }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Il ne suffit plus d'appuyer sur REC. <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">C'est une science.</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">La production s'est drastiquement professionnalisée mais les codes ont changé. Un motion ou un témoignage n'est réussi que s'il est techniquement adapté au support final (Ads, Site, Youtube).</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { tag: "Snack Content ROI", title: "Des vidéos qui cliquent", desc: "Pour vos publicités Sociales (Snack content, Reels Insta), l'architecture de la 1ère seconde est plus importante que la résolution. Notre équipe écrit des scripts orientés autour du 'Scroll Stopper' permanent pour forcer la rétention." },
              { tag: "SaaS & B2B", title: "La force Pédagogique du Motion", desc: "Vous vendez des services intangibles ? Une animation 2D est souvent l'unique voie pour vulgariser l'IA, la comptabilité ou l'ingénierie et faire comprendre la valeur exacte d'un concept en accéléré à un investisseur ou un prospect C-level." },
              { tag: "Preuve Visuelle", title: "L'art du Témoignage Client", desc: "L'interview de vos clients satisfaits face caméra requiert des questions précises induisant une formulation précise. Sans quoi le client est ennuyeux et long. Nous maîtrisons les interviews structurées menant à un montage émotionnel court." },
              { tag: "Adaptabilité", title: "Masterisation Multiformats Audio", desc: "Tous nos livrables sont étudiés et sous-titrés, car les comportements Mobile mutent. Masterisation audio calibrée (pour éviter l'explosion de tympan de votre visiteur) et intégration respectant la charge de votre page Web." }
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
               <div className="w-5 h-[1.5px] bg-primary"></div> Déplacement Tournage
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading mb-3">Réalisation UGC, Corporate & Motion <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">au Pays Basque</em></h2>
            <p className="text-sm text-muted-foreground">Déploiement de notre équipe cadreur/monteur chez vous, ou production motion/UGC asynchrone totale.</p>
          </div>
          <div className="flex flex-wrap gap-3">
             {['📍 Bayonne', '📍 Biarritz', '📍 Anglet', '📍 Bidart', '📍 Hossegor', '📍 Saint-Jean-de-Luz', '📍 Boucau', '📍 Hendaye', '📍 Capbreton', '📍 Paris', '💻 Motion 100% Digital'].map(c => (
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
               Foire Aux Questions Vidéo
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Vos interrogations classiques <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">décryptées</em></h2>
          </div>
          
          <div className="space-y-3">
            {[
              { q: 'C\'est quoi concrètement le format UGC dans la pub (Social Ads) ?', a: "Le User Generated Content (UGC) consiste à simuler ou créer de véritables retours authentiques de \"faux ou vrais\" clients se filmant au smartphone (TikTok style) vantant les mérites de votre produit. Ces créas explosent métaphoriquement les compteurs car elles ne 'ressemblent' pas à une pub pour l'œil habitué, baissant drastiquement votre coût par achat." },
              { q: 'Combien de temps faut-il pour produire une vidéo Motion Design Explicative ?', a: "Environ 3 à 5 semaines. C'est l'un des formats les plus denses car il nécessite un processus validé à chaque strate : Script (Hook vendeur) -> Storyboard (Dessin noir et blanc pour validation trame) -> Graphismes couleurs complets -> Voix-Off studio -> L'animation finale." },
              { q: 'Pouvons-nous récupérer les plans bruts (Rushs) d\'un témoignage ou Corporate ?', a: "En règle générale, seule l'œuvre finale étalonnée vous est cédée. Les rushs d'un tournage cinéma ou interview nécessitent des logiciels lourds, manquent souvent de couleur car tournés en RAW (Log). Néanmoins, si vous en possédez l'utilité, une cession totale des fichiers bruts peut être devisée en supplément." },
              { q: 'Est-ce que la voix off est réalisée par une IA ou un Humain (Motion Design) ?', a: "Par défaut, Wave IA propose des voix de comédiens professionnels pour accentuer la chaleur et le ton percutant de la vente. Toutefois, pour des budgets plus modestes, nous pouvons mobiliser l'Intelligence Artificielle générationnelle d'avant-garde aux résultats confondants de réalisme." },
              { q: 'Mes collaborateurs refusent d\'être filmés pour la Marque Employeur, que faire ?', a: "Aucun drame ! S'ils sont introvertis, nous produisons de superbes films 'Voice Over'. C'est-à-dire qu'une voix professionnelle guide l'entreprise tandis qu'à l'image nous captons seulement des moments B-roll (plans d'action du bureau, des claviers, des rires sans prise de parole directe) de votre équipe technique !" },
              { q: 'Pourquoi faut-il absolument sous-titrer les vidéos (Témoignage, Snack, Reels) ?', a: "Parce que près de 85% du trafic internet mondial consomme la vidéo des réseaux sociaux dans le murmure d'un Open Space, le bruit résonnant d'un métro ou dans leur lit à 23h. Tous n'activent pas l'audio de leur smartphone. Des sous-titres dynamiques bloquent le regard et assurent la transmission du message B2B/B2C." }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6">Enclenchez le moteur <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Conversion Vidéo</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">Que ce soit pour scaler par l'acquisition Ads ou crédibiliser tout le parcours de votre B2B avec des témoignages premium, discutons-en ensemble.</p>
            
            <div className="space-y-5">
               <div className="flex items-center gap-4 text-muted-foreground text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg">📧</div>
                 contact@waveia.fr
               </div>
               <div className="flex items-center gap-4 text-muted-foreground text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg">📍</div>
                 Pays Basque / Bordeaux / Motion Remote
               </div>
               <div className="flex items-center gap-4 text-muted-foreground text-sm">
                 <div className="w-10 h-10 glass-card border border-border flex items-center justify-center rounded-lg text-lg">⚡</div>
                 Chiffrage précis après premier call
               </div>
            </div>
          </div>
          
          <div className="glass-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-purple-500"></div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Décrivez votre enjeu visuel</h3>
            <p className="text-sm text-muted-foreground mb-6">Briefez notre direction, nous dimensionnerons une équipe en fonction de l'échelle du projet.</p>
            
            <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Prénom</label>
                    <input type="text" placeholder="Sarah" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nom</label>
                    <input type="text" placeholder="Lenoir" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email professionnel</label>
                  <input type="email" placeholder="sarah@startup.fr" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Téléphone</label>
                  <input type="tel" placeholder="06 00 00 00 00" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Principal Focus Stratégique</label>
                  <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors">
                     <option>Pack UGC & Snack Content pour Publicité Ads</option>
                     <option>Explication pédagogique 2D (Motion Design)</option>
                     <option>Création pure d'Interviews / Études de cas</option>
                     <option>Reportage Vidéo Corporate (Marque Employeur)</option>
                  </select>
               </div>
               <button type="button" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] w-full font-heading font-bold py-3.5 rounded-full mt-4 transition-transform hover:-translate-y-0.5">
                  Réserver un cadrage Vidéo ✦
               </button>
               <p className="text-center text-xs text-muted-foreground/70 mt-2">Étude de faisabilité et conseils 100% gratuits.</p>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
