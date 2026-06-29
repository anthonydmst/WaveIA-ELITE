"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Palette, Image as ImageIcon, BookOpen, PenTool, Layout, Monitor } from 'lucide-react';

export function IdentiteVisuelleLanding() {
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
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden pt-[70px]">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              Direction Artistique & Design — Pays Basque
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Une identité visuelle qui<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                marque les esprits.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Vos concurrents captent vos clients car leur image semble plus professionnelle ? <strong>On achète d'abord avec les yeux.</strong> Logo vectoriel, typographie cognitive et UI Kit : nous construisons une identité mémorable, cohérente et prête pour la croissance numérique et physique.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Démarrer mon projet <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir la méthode Créative
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">14j</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Livrables complets</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Cession de droits</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+50</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Marques lancées</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">360°</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Print & Web</span>
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
          {Array(3).fill(['Création de Logo', 'Charte Graphique', 'UI/UX Design', 'Psychologie des Couleurs', 'Typographie Sur-Mesure', 'Moodboard & DA', 'Déclinaisons Vectorielles']).flat().map((item, i) => (
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
              <div className="w-5 h-[1.5px] bg-primary"></div> Signes de vieillissement
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Votre identité a besoin d'une refonte <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">maintenant</em> si…
            </h2>
            <p className="text-lg text-muted-foreground font-light">Ces 4 symptômes révèlent que votre branding actuel vous fait perdre des contrats et entame votre crédibilité professionnelle.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              { icon: '📉', title: 'Votre logo pixellise ou ne s\'adapte pas aux écrans', desc: 'Un logo pensé uniquement pour le print est illisible sur mobile. Si vous n\'avez pas de version vectorielle (SVG) ou d\'icône favicon, votre image numérique souffre.' },
              { icon: '🎨', title: 'L\'incohérence visuelle de vos supports', desc: 'Aujourd\'hui vous utilisez du bleu clair sur Instagram, demain du bleu foncé sur vos devis. Cette absence totale de Charte Graphique perturbe la mémorisation du cerveau humain.' },
              { icon: '⏳', title: 'Une apparence vieillissante (Design des années 2010)', desc: 'Les codes visuels ont radicalement changé (flat design, micro-interactions, dark mode). Si votre identité sent la décennie passée, vos prospects pensent que vos services aussi.' },
              { icon: '🧱', title: 'Vos produits s\'améliorent, mais pas votre image', desc: 'Vous avez monté en gamme, vous offrez des services premium, mais votre logo amateur dessiné à vos débuts ne reflète pas ce nouveau standard de qualité.' }
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
              Repenser mon identité avec Wave IA →
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Formules Branding
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Ne commandez pas juste "un dessin". <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Bâtissez une Marque.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light">Une identité professionnelle est un ensemble d'outils (Logo, typographies, règles colorimétriques) vous garantissant la sérénité lors de toutes vos prochaines communications.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            <div className="glass-card border border-border rounded-2xl p-10 relative">
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Essentiel</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Design Logo & Fondations</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">Sur Devis <span className="text-base text-muted-foreground font-normal">/ 1 à 2 sem.</span></div>
              <p className="text-sm text-muted-foreground mb-8">Parfait pour le lancement d'une nouvelle activité exigeant une image immédiatement professionnelle.</p>
              
              <ul className="space-y-4 mb-10">
                {['Étude colorimétrique & 2 propositions', 'Logo principal vectoriel (SVG, AI, EPS)', 'Déclinaisons (Blanc, Noir, Icône Profil)', 'Choix typographiques standards', 'Livraison dossier complet + Cession droits'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Demander ce pack →</a>
            </div>

            <div className="glass-card border-ocean/40 bg-[linear-gradient(160deg,rgba(14,165,233,0.07)_0%,var(--glass-bg)_60%)] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-purple-500"></div>
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Marque Globale 360</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Charte & UI/UX Design Web</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">Sur Devis <span className="text-base text-muted-foreground font-normal">/ 3 à 5 sem.</span></div>
              <p className="text-sm text-muted-foreground mb-8">La métamorphose totale pour asseoir sa notoriété (Digital & Print). Création de composants natifs.</p>
              
              <ul className="space-y-4 mb-10">
                {['Analyse marché & psychologie du Branding', 'Toutes les fondations Logo (+ Variantes)', 'Brand Book Complet (Règles et interdits)', 'UI Kit Webdesign (Boutons, Ombres, Grilles)', 'Eléments visuels Réseaux Sociaux (Bannières)', 'Direction artistique photographique'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Planifier ma transformation complète →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Périmètre Créatif
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Une conception <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">exhaustive</em>, du print au code
            </h2>
            <p className="text-lg text-muted-foreground font-light">Les six composantes clés que nous travaillons pour forger une identité robuste et scalable.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              { icon: <PenTool className="w-6 h-6"/>, title: 'Création Logo Vectoriel', desc: 'Responsive, scalable et décliné pour tous supports. Fichiers AI, EPS, SVG et PNG fournis pour vous et vos partenaires.' },
              { icon: <Palette className="w-6 h-6"/>, title: 'Psychologie des Couleurs', desc: 'Nous ne choisissons pas "du bleu" par hasard. Validation colorimétrique (Hexadecimal, CMJN, RVB) pour rassurer votre audience.' },
              { icon: <BookOpen className="w-6 h-6"/>, title: 'Brand Book (Charte)', desc: 'Le manuel technique de votre entreprise avec toutes les règles typographiques, margures et utilisations interdites.' },
              { icon: <Layout className="w-6 h-6"/>, title: 'UI Kit & Webdesign', desc: 'Prévisualisation de vos interfaces web. Composants prêts à être codés (Boutons, Cards, Dark Mode adaptatif).' },
              { icon: <ImageIcon className="w-6 h-6"/>, title: 'Guideline Iconographie', desc: 'Définition d\'un style visuel strict pour vos futures photos ou banques d\'images pour garantir l\'homogénéité globale.' },
              { icon: <Monitor className="w-6 h-6"/>, title: 'Supports Numériques', desc: 'Mise aux normes graphiques de vos avatars, covers réseaux sociaux, templates de présentation Canva ou PowerPoint.' }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">L'impact psychologique <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">du rebranding</em></h2>
            <p className="text-lg text-muted-foreground font-light">La différence entre transmettre l'amateurisme et asseoir son autorité sectorielle.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            <div className="glass-card bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">❌ Identité Brisée</span>
                <h3 className="text-xl font-bold font-heading text-foreground">Effet Amateur</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Perte récurrente de devis face à une concurrence plus esthétique",
                  "Mémorisation proche de zéro dans le cerveau de vos prospects",
                  "Logos pixellisés ou flous sur l'écran des smartphones",
                  "Décrédibilisation totale de votre véritable qualité de service",
                  "Incapacité de créer des objets print (Kakemono, Flocage) car 'mauvais format'",
                  "Message divergent (Couleurs agressives alors que vous vendez de la douceur)"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
             <div className="glass-card bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">✅ Branding Wave IA</span>
                <h3 className="text-xl font-bold font-heading text-foreground">Aura d'Autorité</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Forte prime perçue sur vos prix (un design Premium vend plus cher)",
                  "Homogénéité absolue : de la carte de visite au bouton du site web",
                  "Déclinaison instantanée de tous vos fichiers dans tous les formats (SVG, AI)",
                  "Un Brand Book rassurant pour toutes vos équipes et partenaires",
                  "Identité visuelle pensée pour l'UX Web et les parcours utilisateurs fluides",
                  "Hausse radicale de la confiance et du Taux de Conversion"
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Comment nous forgeons l'âme de <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">votre Marque</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Oubliez les allers-retours interminables. Une méthode en 4 étapes structurées qui met le business et la neuroesthétique au centre.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto mt-10">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent"></div>
            
            {[
              { num: "01", title: "Atelier Initial & Audit de Marché", desc: "Immersion. Nous analysons votre cible, les codes dominants de vos concurrents et votre positionnement pour décider de la psychologie colorimétrique." },
              { num: "02", title: "Planche Tendances (Moodboard) & Concepts", desc: "Présentation de maquettes conceptuelles et typographiques pour valider la direction artistique avant même la phase de vectorisation." },
              { num: "03", title: "Vectorisation, Typographie & UI", desc: "Exécution des designs. Nous réalisons votre Logo sous l'espace vectoriel et structurons ou concevons les maquettes UI de vos composants Web." },
              { num: "04", title: "Livrables et Brand Book final", desc: "Session critique de validation puis livraison immédiate du dossier complet organisé (Logo Black, Logo White, Social Media, Typographies OTF/TTF, Charte en PDF)." }
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
               Waveia Branding en chiffres
            </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">La valeur de la <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">direction artistique</em></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:rounded-2xl lg:overflow-hidden lg:border lg:border-border glass-card">
            {[
              { val: "+40%", label: "De perception valeur Prix/Service" },
              { val: "100%", label: "Droits de marque cédés post signature" },
              { val: "14j", label: "Délai moyen pour une fondation visuelle" },
              { val: "0", label: "Template générique préfabriqué" }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Ce que la concurrence <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">oublie souvent</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Le branding n'est pas uniquement un acte artistique. C'est surtout un outil commercial soumis à une ergonomie algorithmique (Web).</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { tag: "Digital First", title: "Conception pour le Web & l'Écran", desc: "De nombreuses agences old-school dessinent des logos pour des affichages urbains de 4 mètres, oubliant qu'il vivra à 95% dans une navbar de site web mobile où il doit rester ultra-lisible. Nous pensons nos identités Screen-First." },
              { tag: "UI Centric", title: "L'approche UI/UX intégrée", desc: "La Typographie d'un site impacte la vitesse de lecture (UX) et le temps de session. Nous choisissons les fontes selon la charge cognitive et l'adaptation CSS de votre site web, pas juste selon nos goûts artistiques." },
              { tag: "Évolutivité", title: "Fichiers Modulaires (SVG, AI, Figma)", desc: "Dîtes adieu au designer qui retient vos fichiers en otage. Dès que nous signons, nous vous donnons l'indépendance totale sur vos calques pour vous permettre de modifier tous vos supports en interne." },
              { tag: "Neuro-Psychologie", title: "Colorimétrie Stratégique", desc: "Les palettes sont définies non pas parce qu'elles 'font jolies', mais parce qu'elles augmentent le niveau de confiance des internautes dans votre segment d'industrie (Finance, Restauration, Tech)." }
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
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading mb-3">Votre Agence Créative <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">au pays basque</em></h2>
            <p className="text-sm text-muted-foreground">Repensez votre communication de marque sur la côte ou en développement national.</p>
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
               Questions sur la DA
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Tout ce que vous voulez savoir <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">sur le Branding</em></h2>
          </div>
          
          <div className="space-y-3">
            {[
              { q: 'Qui possède les droits sur le logo et l\'identité visuelle à la fin ?', a: "Vous, à 100%. Dès la réception de votre paiement intégral, l'ensemble des licences et droits d'exploitations commerciales des visuels exclusifs fournis vous est transféré contractuellement. C'est votre marque." },
              { q: 'Quels types de fichiers me fournissez-vous pour le logo ?', a: "Le graal ! Vous obtenez le .AI (Illustrator source), des .SVG vectoriels parfaites pour la netteté Web, l'EPS pour vos imprimeurs professionnels, et les standards JPG / PNG détourés pour un usage courant et Canva." },
              { q: 'Combien de temps faut-il pour concevoir un logo ?', a: "Pour une création pure de fondamentaux à partir d'un dossier validé, comptez environ 14 à 20 jours. C'est le délai d'affinage nécessaire pour créer des pistes, recueillir vos retours, et perfectionner l'UI, et produire la charte complète." },
              { q: 'Et si les premières propositions de design ne me plaisent pas ?', a: "L'Audit de création (Étape 1 et le Moodboard) préviennent de tomber 'à côté' de votre goût. Néanmoins, les devis incluent toujours un nombre défini de révisions ou de pistes d'itération jusqu'à l'approbation du concept." },
              { q: 'Qu\'est qu\'un Brand Book / Manuel ou Charte graphique concrètement ?', a: "C'est un livret PDF comportant des instructions. Il détaille l'espacement minimum que les gens doivent laisser autour de votre logo, le code RGB exact de votre rouge, et la typographie spécifique de vos titres. Vous l'envoyez ensuite à toute personne imprimant vos pulls ou développant vos apps." },
              { q: 'Que contient votre UI Kit Webdesign ?', a: "L'UI Kit est la transposition de votre identité visuelle pour l'écran. Il dérive votre palette en variables CSS idéales. Il pré-définit le design de vos boutons d'actions, la granularité de vos ombres et les interactions graphiques pour faciliter le développement." }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6">Incarnez pleinement votre valeur <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">dès aujourd'hui</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">L'image bâclée coûte des prospects chaque jour. Discutons de votre vision créative et concevons une direction artistique qui fidélise votre audience. Diagnostic de marque offert.</p>
            
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
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Décrivez-nous votre projet branding</h3>
            <p className="text-sm text-muted-foreground mb-6">Précisez vos attentes visuelles, notre bureau créatif vous recontacte rapidement.</p>
            
            <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Prénom</label>
                    <input type="text" placeholder="Alex" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nom</label>
                    <input type="text" placeholder="Dupont" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email professionnel</label>
                  <input type="email" placeholder="alex@entreprise.fr" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Téléphone</label>
                  <input type="tel" placeholder="06 00 00 00 00" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Besoins précis</label>
                  <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors">
                     <option>Logo & Identité complète</option>
                     <option>Refonte de marque existante</option>
                     <option>Charte Graphique /UI Web seule</option>
                     <option>Autre prestation créative</option>
                  </select>
               </div>
               <button type="button" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] w-full font-heading font-bold py-3.5 rounded-full mt-4 transition-transform hover:-translate-y-0.5">
                  Demander un entretien créatif ✦
               </button>
               <p className="text-center text-xs text-muted-foreground/70 mt-2">Échange de pré-qualification 100% gratuit.</p>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
