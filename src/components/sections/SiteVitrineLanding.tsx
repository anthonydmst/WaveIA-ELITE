import React from "react";
import { Link } from "next-view-transitions";
import { ArrowRight, Check, X, MonitorSmartphone, Share2, ArrowUp, Search, Mail, MapPin, ArrowLeft, Building, Database, Code2, Bot, Plus, Minus } from "lucide-react";
import dynamic from "next/dynamic";

const DiagnosticExpress = dynamic(
  () => import("@/components/ui/DiagnosticExpress").then((mod) => mod.DiagnosticExpress)
);

export function SiteVitrineLanding() {
  return (
    <div className="w-full relative z-10 pt-20">
      {/* ─── HERO ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden pt-[70px]">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              DÉVELOPPEMENT WEB SUR-MESURE
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Votre entreprise a de la valeur. <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Votre site web doit la prouver.</em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Un site obsolète ou générique détruit votre crédibilité avant même le premier contact. Que vous cibliez des professionnels ou des particuliers, nous concevons des actifs statutaires qui rassurent vos clients, justifient votre positionnement tarifaire et convertissent vos visiteurs en demandes entrantes.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Analyser mon site actuel <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/realisations" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Consulter nos déploiements
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-6 md:gap-12 flex-wrap">
              {[
                "100 % PROPRIÉTAIRE (ZÉRO LICENCE)",
                "SOCLE SEO INTÉGRÉ",
                "TEMPS DE CHARGEMENT < 1 SECONDE"
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground tracking-wider">
                  <Check className="w-4 h-4 text-ocean shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY ─── */}
      <section id="why" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Le coût invisible d'une plateforme qui <span className="text-red-500/80">ne vous ressemble pas.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sur des marchés ultra-concurrentiels, plus de 75 % des consommateurs et des décideurs évaluent la fiabilité d'une entreprise en visitant son site internet. Si votre plateforme est lente, inadaptée aux mobiles ou ne reflète pas l'exigence de vos services, la sanction est immédiate :
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in delay-100">
            {[
              { title: 'Perte de parts de marché', desc: 'Vos prospects vous écartent au profit de concurrents dont l\'image digitale inspire davantage confiance.' },
              { title: 'Pression tarifaire', desc: 'Un design perçu comme "amateur" pousse inconsciemment le client à sous-évaluer votre travail et à négocier vos prix.' },
              { title: 'Fuite des talents', desc: 'Une marque employeur mal valorisée vous prive des meilleurs profils sur un marché du recrutement tendu.' }
            ].map((feature, i) => (
              <div key={i} className="glass-card bg-red-500/5 border border-red-500/20 p-8 rounded-2xl flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-5">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── CONVERSION ENGINEERING ─── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> INGÉNIERIE DE CONVERSION
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              L'anatomie d'un site vitrine conçu <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">pour signer des contrats.</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous ne laissons aucune page au hasard. Chaque section de votre futur site est structurée selon les principes de la psychologie d'achat et du référencement (SEO). Voici les 5 piliers que nous déployons pour transformer votre présence en ligne en apporteur d'affaires :
            </p>
          </div>

          <div className="space-y-6 animate-in delay-100">
            {[
              { num: "01", title: "La Page d'Accueil (Le Filtre de Qualification)", desc: "Le visiteur vous accorde 3 secondes. Votre page d'accueil n'est pas un roman sur l'histoire de votre entreprise : c'est une Landing Page (page de destination). Elle annonce immédiatement votre promesse de valeur, identifie clairement votre cible et affiche vos éléments de réassurance (logos clients, certifications) pour filtrer et capter l'attention." },
              { num: "02", title: "Les Pages \"Services\" (L'Argumentaire Anti-Friction)", desc: "Nous ne faisons pas de simples listes à puces. Chaque service dispose de sa propre page d'ingénierie, optimisée pour un mot-clé précis sur Google. Le contenu est rédigé pour déconstruire les objections de vos prospects, valoriser vos avantages concurrentiels et justifier vos tarifs." },
              { num: "03", title: "La Page \"Notre Entreprise\" (Le Levier de Confiance & Recrutement)", desc: "Vos clients (et vos futurs employés) veulent savoir avec qui ils s'engagent. Nous créons une page institutionnelle forte qui valorise vos infrastructures, votre équipe et votre méthode de travail à travers de vraies photographies (zéro image générique). C'est ici que se joue votre marque employeur." },
              { num: "04", title: "L'Espace de Conversion (Le Tunnel de Contact & RDV)", desc: "Un visiteur convaincu ne doit subir aucune friction. Nous remplaçons les pages de contact obsolètes par des formulaires intelligents à logique conditionnelle, qui qualifient la demande en fonction des réponses du prospect. Pour raccourcir le cycle de vente, nous intégrons des modules de prise de rendez-vous synchronisés en temps réel avec l'agenda de vos équipes commerciales." },
              { num: "05", title: "Les Modules Interactifs & IA (L'Automatisation de l'Avant-Vente)", desc: "C'est ici que la technologie Waveia fait la différence. Pour soulager vos équipes et accélérer la décision d'achat, nous déployons des modules sur-mesure propulsés par l'IA : générateurs de devis instantanés, simulateurs de rentabilité, ou parcours interactifs de pré-qualification. Votre site travaille 24h/24 pour pré-mâcher le travail de vos commerciaux en leur livrant des prospects déjà triés, chiffrés et prêts à signer." }
            ].map((pillar, i) => (
              <div key={i} className="glass-card bg-card border border-border p-8 md:p-10 rounded-xl flex flex-col md:flex-row gap-8 items-start group hover:border-ocean/40 transition-colors">
                <div className="text-4xl md:text-5xl font-heading font-black text-ocean/20 group-hover:text-ocean transition-colors duration-500 shrink-0 select-none">
                  {pillar.num}.
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 text-foreground">{pillar.title}</h3>
                  <p className="text-[0.95rem] text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGINEERING PROCESS ─── */}
      <section className="py-24 bg-background border-y border-border">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in mb-16">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> PROCESSUS D'INGÉNIERIE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              De l'audit à la mise en ligne : un <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">déploiement sans friction.</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vous n'avez pas le temps de gérer des allers-retours interminables ou de faire de la gestion de projet. Notre méthodologie est structurée avec une rigueur d'ingénierie : prédictible, transparente et rythmée. Vous intervenez uniquement aux étapes clés de validation stratégique. Voici comment nous construisons votre actif digital en 5 étapes.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-ocean/20 to-transparent z-0"></div>
            
            {[
              { num: "01", title: "Audit Stratégique & Cadrage (L'Alignement)", sub: "La fondation du projet.", desc: "Nous ne concevons aucune maquette sans avoir compris votre modèle économique. Lors d'un atelier initial, nous définissons vos cibles (B2B/B2C), analysons vos concurrents et structurons l'arborescence de vos pages pour maximiser la conversion et le référencement naturel (SEO)." },
              { num: "02", title: "UX/UI Design & Copywriting (Le Prototypage)", sub: "L'habillage statutaire.", desc: "Nous rédigeons vos argumentaires de vente et dessinons les interfaces sur-mesure de votre futur site. Vous visualisez exactement le parcours de vos futurs clients (sur ordinateur et mobile) et validez l'esthétique premium avant qu'une seule ligne de code ne soit écrite." },
              { num: "03", title: "Développement Augmenté (La Machine)", sub: "L'exécution technologique.", desc: "C'est ici que nos développeurs entrent en scène, assistés par nos modèles d'Intelligence Artificielle. Ils intègrent les maquettes, configurent vos modules de conversion (formulaires intelligents, prise de rendez-vous) et optimisent la vitesse de chargement de vos pages à la milliseconde près." },
              { num: "04", title: "Contrôle Qualité & Déploiement (Le Lancement)", sub: "Le crash-test.", desc: "Avant la mise en ligne publique, votre site passe par une batterie de tests rigoureux (phase de recette) : vérification de la sécurité, conformité RGPD, affichage parfait sur tous les navigateurs et smartphones, et validation des balises SEO de base. Une fois validé, nous le connectons à votre nom de domaine." },
              { num: "05", title: "Formation & Passation (Votre Autonomie)", sub: "La remise des clés.", desc: "Le site vous appartient à 100 %. Lors de la livraison, nous formons vos équipes (en visio ou dans vos locaux en Nouvelle-Aquitaine) à l'utilisation de l'interface d'administration. Vous devenez totalement autonome pour modifier un texte, ajouter une actualité ou créer un nouveau service sans avoir besoin de nous." }
            ].map((step, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative w-full group">
                <div className="w-14 h-14 rounded-full border border-ocean/30 flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-card relative z-20 shadow-[0_0_15px_rgba(14,165,233,0.1)] group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div className="pt-2 relative z-10">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm font-black uppercase tracking-widest text-ocean/80 mb-3">{step.sub}</p>
                  <p className="text-[0.95rem] text-muted-foreground leading-relaxed md:w-[90%]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* ─── DIGITAL ECOSYSTEM ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> ÉCOSYSTÈME DIGITAL
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              L'infrastructure de votre <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">écosystème de vente.</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un site web isolé, même parfait techniquement, ne génère pas de chiffre d'affaires. Il doit être pensé comme le centre de gravité de toutes vos actions commerciales. Chaque euro investi dans votre communication (physique ou digitale) doit rediriger vos prospects vers cette plateforme de conversion.
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-3xl border border-border mt-10">
            <style dangerouslySetInnerHTML={{__html: `
              
              .eco-hub {
                --bg: #05070a;
                --surface: rgba(255,255,255,.045);
                --border: rgba(255,255,255,.10);
                --text: #eef1f6;
                --text-dim: #7d8696;
                --cyan: #4fc3ff;
                --cyan-soft: rgba(79,195,255,.16);
                --amber: #ffb454;
                --amber-soft: rgba(255,180,84,.16);
                --font-display: 'Space Grotesk', sans-serif;
                --font-mono: 'IBM Plex Mono', monospace;

                background:
                  radial-gradient(ellipse 700px 480px at 50% 38%, rgba(79,195,255,.10), transparent 65%),
                  repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,.025) 0 1px, transparent 1px 42px),
                  var(--bg);
                color: var(--text);
                padding: clamp(56px,8vw,96px) clamp(16px,5vw,40px);
                display: flex; justify-content: center;
              }
              .eco-hub * { box-sizing: border-box; }

              .eco-hub .schema {
                position: relative; width: 100%; max-width: 680px; aspect-ratio: 1/1;
              }

              .eco-hub .ambient {
                position: absolute; inset: 8%; border-radius: 50%;
                background: radial-gradient(circle, rgba(79,195,255,.16), transparent 70%);
                filter: blur(30px); z-index: 0;
              }

              .eco-hub svg.field { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; z-index: 1; }
              .eco-hub .orbit-ring { fill: none; stroke: rgba(255,255,255,.07); stroke-width: 1; stroke-dasharray: 2 8; }
              .eco-hub .flow-path { fill: none; stroke: var(--cyan); stroke-width: 1.5; opacity: 0.6; stroke-dasharray: 4 4; }
              .eco-hub .pulse-dot { filter: drop-shadow(0 0 4px var(--cyan)); }

              .eco-hub .hub {
                position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);
                width: 30%; aspect-ratio: 1/1; border-radius: 50%; z-index: 4;
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                text-align: center; gap: 2px; padding: 6%;
              }
              .eco-hub .hub .ring-outer {
                position: absolute; inset: -14%; border-radius: 50%;
                border: 1px solid rgba(79,195,255,.25);
              }
              .eco-hub .hub .ring-mid {
                position: absolute; inset: -5%; border-radius: 50%;
                border: 1px solid rgba(79,195,255,.18);
              }
              .eco-hub .hub .core {
                position: absolute; inset: 0; border-radius: 50%;
                background:
                  radial-gradient(circle at 30% 26%, rgba(255,255,255,.16), transparent 55%),
                  linear-gradient(160deg, rgba(79,195,255,.22), rgba(255,255,255,.02));
                border: 1px solid rgba(79,195,255,.55);
                backdrop-filter: blur(8px);
                box-shadow:
                  0 0 0 1px rgba(79,195,255,.10),
                  0 25px 60px -12px rgba(79,195,255,.45),
                  inset 0 0 36px rgba(79,195,255,.10);
                animation: ecoBreathe 3.6s ease-in-out infinite;
              }
              @keyframes ecoBreathe {
                0%, 100% { box-shadow: 0 0 0 1px rgba(79,195,255,.10), 0 25px 60px -12px rgba(79,195,255,.40), inset 0 0 36px rgba(79,195,255,.08); }
                50% { box-shadow: 0 0 0 1px rgba(79,195,255,.16), 0 30px 70px -10px rgba(79,195,255,.55), inset 0 0 44px rgba(79,195,255,.14); }
              }
              .eco-hub .hub .ico { position: relative; width: 26px; height: 26px; margin-bottom: 6px; z-index: 1; }
              .eco-hub .hub .ico svg { width: 100%; height: 100%; stroke: var(--cyan); }
              .eco-hub .hub .tag {
                position: relative; z-index: 1; font-family: var(--font-mono); font-size: 9.5px;
                letter-spacing: .18em; text-transform: uppercase; color: var(--cyan); margin-bottom: 4px;
              }
              .eco-hub .hub .name {
                position: relative; z-index: 1; font-family: var(--font-display); font-weight: 600;
                font-size: clamp(13px, 1.7vw, 18px); line-height: 1.18; color: #fff;
              }
              .eco-hub .hub .role {
                position: relative; z-index: 1; margin-top: 5px; font-size: 10.5px; line-height: 1.4;
                color: var(--text-dim); max-width: 92%;
              }

              .eco-hub .sat {
                position: absolute; transform: translate(-50%,-50%);
                width: clamp(96px, 17%, 152px);
                display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px;
                padding: 14px 10px 13px; border-radius: 16px; z-index: 3;
                background: var(--surface); border: 1px solid var(--border);
                backdrop-filter: blur(10px);
                box-shadow: 0 14px 32px -16px rgba(0,0,0,.7);
                transition: transform .35s ease, border-color .35s ease, background .35s ease;
              }
              .eco-hub .sat:hover { transform: translate(-50%,-50%) translateY(-3px); border-color: rgba(255,255,255,.22); }
              .eco-hub .sat .chip {
                display: flex; align-items: center; justify-content: center; margin-bottom: 2px;
              }
              .eco-hub .sat .chip svg { width: 22px; height: 22px; }
              .eco-hub .sat.is-cyan .chip svg { stroke: var(--cyan); }
              .eco-hub .sat.is-amber .chip svg { stroke: var(--amber); }
              .eco-hub .sat .t { font-family: var(--font-display); font-weight: 600; font-size: 12.5px; color: #fff; line-height: 1.25; }
              .eco-hub .sat .s { font-family: var(--font-mono); font-size: 9px; letter-spacing: .03em; color: var(--text-dim); }

              .eco-hub .sat-1 { left: 50%; top: 11.67%; }
              .eco-hub .sat-2 { left: 83.25%; top: 30.83%; }
              .eco-hub .sat-3 { left: 83.25%; top: 69.17%; }
              .eco-hub .sat-4 { left: 50%; top: 88.33%; }
              .eco-hub .sat-5 { left: 16.75%; top: 69.17%; }
              .eco-hub .sat-6 { left: 16.75%; top: 30.83%; }

              @media (max-width: 560px) {
                .eco-hub .sat .s { display: none; }
                .eco-hub .hub .role { display: none; }
                .eco-hub .sat { padding: 10px 6px 9px; gap: 3px; }
              }
            `}} />

            <div className="eco-hub">
              <div className="schema">
                <div className="ambient"></div>

                <svg className="field" viewBox="0 0 600 600">
                  <defs>
                    <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#4fc3ff" stopOpacity="0"/>
                      <stop offset="0.5" stopColor="#4fc3ff" stopOpacity=".9"/>
                      <stop offset="1" stopColor="#4fc3ff" stopOpacity="0"/>
                    </linearGradient>
                  </defs>

                  <circle className="orbit-ring" cx="300" cy="300" r="230"/>
                  <circle className="orbit-ring" cx="300" cy="300" r="270"/>

                  <path className="flow-path" d="M300,135 L300,195"/>
                  <path className="flow-path" d="M442.9,217.5 L390.9,247.5"/>
                  <path className="flow-path" d="M442.9,382.5 L390.9,352.5"/>
                  <path className="flow-path" d="M300,465 L300,405"/>
                  <path className="flow-path" d="M157.1,382.5 L209.1,352.5"/>
                  <path className="flow-path" d="M157.1,217.5 L209.1,247.5"/>

                  <circle className="pulse-dot" r="2.6" fill="#4fc3ff"><animateMotion dur="2.1s" begin="0s" repeatCount="indefinite" path="M300,135 L300,195"/></circle>
                  <circle className="pulse-dot" r="2.6" fill="#4fc3ff"><animateMotion dur="2.1s" begin="0.35s" repeatCount="indefinite" path="M442.9,217.5 L390.9,247.5"/></circle>
                  <circle className="pulse-dot" r="2.6" fill="#4fc3ff"><animateMotion dur="2.1s" begin="0.7s" repeatCount="indefinite" path="M442.9,382.5 L390.9,352.5"/></circle>
                  <circle className="pulse-dot" r="2.6" fill="#4fc3ff"><animateMotion dur="2.1s" begin="1.05s" repeatCount="indefinite" path="M300,465 L300,405"/></circle>
                  <circle className="pulse-dot" r="2.6" fill="#4fc3ff"><animateMotion dur="2.1s" begin="1.4s" repeatCount="indefinite" path="M157.1,382.5 L209.1,352.5"/></circle>
                  <circle className="pulse-dot" r="2.6" fill="#4fc3ff"><animateMotion dur="2.1s" begin="1.75s" repeatCount="indefinite" path="M157.1,217.5 L209.1,247.5"/></circle>
                </svg>

                <div className="hub">
                  <div className="ring-outer"></div>
                  <div className="ring-mid"></div>
                  <div className="core"></div>
                  <div className="ico"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
                  <span className="tag">Le hub</span>
                  <span className="name">Site Vitrine</span>
                  <span className="role">Qualifier, rassurer, convertir</span>
                </div>

                <div className="sat sat-1 is-cyan">
                  <div className="chip"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg></div>
                  <span className="t">SEO &amp; SEA</span>
                  <span className="s">Demande active</span>
                </div>

                <div className="sat sat-2 is-cyan">
                  <div className="chip"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg></div>
                  <span className="t">Google My<br/>Business</span>
                  <span className="s">Ancrage local</span>
                </div>

                <div className="sat sat-3 is-cyan">
                  <div className="chip"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.36"/><polyline points="21 3 21 9 15 9"/></svg></div>
                  <span className="t">CRM</span>
                  <span className="s">Relance automatisée</span>
                </div>

                <div className="sat sat-4 is-cyan">
                  <div className="chip"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-8-7 18-3-8-8-2z" transform="rotate(45 12 12)"/><line x1="3.5" y1="20.5" x2="9" y2="15"/></svg></div>
                  <span className="t">Newsletter</span>
                  <span className="s">Emailing stratégique</span>
                </div>

                <div className="sat sat-5 is-cyan">
                  <div className="chip"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><line x1="8.2" y1="11" x2="15.8" y2="7"/><line x1="8.2" y1="13" x2="15.8" y2="17"/></svg></div>
                  <span className="t">Réseaux Sociaux</span>
                  <span className="s">Social selling</span>
                </div>

                <div className="sat sat-6 is-cyan">
                  <div className="chip"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v3a1 1 0 001 1h2l3 3V7L6 10H4a1 1 0 00-1 1z"/><path d="M14 8a4 4 0 010 8"/><path d="M17 5a8 8 0 010 14"/></svg></div>
                  <span className="t">Événements</span>
                  <span className="s">Offline</span>
                </div>

              </div>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Les 6 satellites qui alimentent votre trafic quotidien</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in delay-200">
              {[
                { link: "/referencement-seo", linkText: "Découvrir le SEO", title: "La Demande Intentionniste", sub: "SEO & SEA", subtitle2: "Publicités Google Ads et Référencement Naturel.", desc: "Le canal pour capter les prospects qui recherchent activement vos services sur les moteurs de recherche et les diriger vers vos pages de vente." },
                { link: "/referencement-seo/google-my-business", linkText: "Optimiser ma fiche", title: "L'Ancrage Local", sub: "Google My Business", subtitle2: "Fiche d'établissement et cartographie locale.", desc: "Le relai indispensable pour dominer votre zone de chalandise géographique et capter la clientèle de proximité (recherches mobiles, avis clients)." },
                { link: "/agence-communication", linkText: "Voir l'offre Social Media", title: "La Notoriété & Le Social Selling", sub: "Réseaux Sociaux", subtitle2: "LinkedIn (B2B) ou Instagram/Facebook (B2C).", desc: "Le levier pour éduquer votre marché, prouver votre expertise en continu, et rediriger votre audience qualifiée vers vos offres." },
                { link: "/agence-communication", linkText: "Stratégie de fidélisation", title: "L'Éducation & Le Nurturing", sub: "Newsletter & Emailing", subtitle2: "Campagnes de fidélisation et diffusion d'expertise.", desc: "La boucle de rétention. Vous gardez le lien avec votre base de données en diffusant du contenu à forte valeur ajoutée, avec pour objectif de ramener régulièrement l'attention de vos prospects indécis vers votre site web." },
                { link: "/contact", linkText: "Automatiser mes ventes", title: "Le Pilotage Commercial", sub: "CRM & Automatisation", subtitle2: "Gestion des leads et workflows automatisés.", desc: "Le cerveau de vos ventes. Votre site capture les coordonnées, et votre CRM prend le relais. Il centralise les contacts, déclenche des scénarios de relances automatiques et assiste vos commerciaux pour ne perdre aucune opportunité jusqu'à la signature." },
                { link: "/agence-communication", linkText: "Découvrir le Branding", title: "Le Monde Physique", sub: "L'Offline", subtitle2: "Salons professionnels, véhicules de flotte, plaquettes, QR Codes.", desc: "Vos actions sur le terrain ne s'arrêtent plus à une poignée de main : elles servent à ramener le contact physique vers votre écosystème digital pour prolonger l'expérience et déclencher la conversion." }
              ].map((sat, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl border border-border flex flex-col hover:border-ocean/40 transition-colors group">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-foreground mb-1 leading-tight">{sat.title}</h4>
                    <p className="text-sm font-black uppercase tracking-widest text-ocean mb-3">{sat.sub}</p>
                    <p className="text-[0.85rem] font-semibold text-foreground/80 mb-2">{sat.subtitle2}</p>
                    <p className="text-[0.9rem] text-muted-foreground leading-relaxed">{sat.desc}</p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-border/50">
                    <Link href={sat.link} className="inline-flex items-center gap-2 text-sm font-bold text-ocean hover:opacity-80 transition-opacity">
                      {sat.linkText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXCELLENCE OPÉRATIONNELLE ─── */}
      <section className="py-24 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> EXCELLENCE OPÉRATIONNELLE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Où intervient l'IA dans la conception de <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">votre plateforme ?</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'Intelligence Artificielle n'est pas un gadget marketing, c'est notre moteur de production. Chez Waveia, l'IA nous permet d'automatiser l'exécution technique pour concentrer 100 % de votre budget sur ce qui compte vraiment : la stratégie humaine, la psychologie d'achat et la conversion. Voici exactement où notre technologie travaille pour vous :
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in delay-100">
            {[
              { title: "L'Ingénierie du Code (Performance & Vitesse)", ia: "Nos développeurs utilisent des assistants d'intelligence artificielle pour générer, auditer et nettoyer les lignes de code de votre site.", roi: "Un code allégé et ultra-robuste. Les délais de développement sont divisés par deux, et votre site atteint des temps de chargement inférieurs à la seconde (un critère fondamental pour retenir l'attention du visiteur et satisfaire Google)." },
              { title: "L'Analyse Sémantique (Fondations SEO)", ia: "Avant même de rédiger, nos outils algorithmiques analysent les intentions de recherche de votre marché, décortiquent les sites de vos concurrents et structurent vos mots-clés.", roi: "Une architecture de contenu chirurgicale. Chaque page est bâtie sur des requêtes rentables et prouve votre expertise (norme EEAT) pour dominer les résultats des moteurs de recherche." },
              { title: "Le Prototypage (Design & UX Mobile)", ia: "Nous utilisons l'IA générative pour accélérer la création des maquettes de structure (wireframes) et la déclinaison instantanée de vos interfaces pour les formats smartphones et tablettes.", roi: "Fini les mois d'attente pour voir à quoi ressemblera votre site. Le temps de production graphique économisé est intégralement réinvesti dans l'ergonomie et la fluidité du parcours d'achat." },
              { title: "L'Automatisation Commerciale (Les Modules Intégrés)", ia: "C'est la partie visible par votre client. Nous implémentons des modules intelligents directement sur vos pages (formulaires conditionnels, générateurs de devis instantanés, assistants de pré-qualification).", roi: "Votre site ne se contente plus d'être une vitrine. Il agit comme un filtre de pré-vente 24h/24, capable de trier les demandes et de ne transmettre à vos commerciaux que les prospects qualifiés et chiffrés." }
            ].map((step, i) => (
              <div key={i} className="glass-card bg-background/50 backdrop-blur-sm border border-border p-8 rounded-2xl flex flex-col items-start relative overflow-hidden group hover:border-ocean/40 transition-colors">
                <h3 className="text-xl font-bold font-heading mb-6 text-foreground relative z-10">{step.title}</h3>
                
                <div className="space-y-4 relative z-10 w-full">
                  <div className="p-4 rounded-xl bg-card border border-border/50">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">L'intervention de l'IA</p>
                    <p className="text-[0.9rem] text-foreground/90 leading-relaxed">{step.ia}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-ocean/5 border border-ocean/20">
                    <p className="text-xs font-bold uppercase tracking-widest text-ocean mb-2">Le bénéfice ROI</p>
                    <p className="text-[0.9rem] text-foreground/90 leading-relaxed">{step.roi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── POST-LAUNCH ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> VOTRE ACCOMPAGNEMENT POST-LANCEMENT
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              La mise en ligne n'est pas une fin. C'est <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">le début de votre acquisition.</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous refusons le modèle des agences qui livrent un site puis disparaissent, tout comme nous refusons de vous prendre en otage techniquement. Une fois votre actif digital déployé, nous structurons la suite autour de trois principes immuables : votre autonomie, votre sécurité et votre croissance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 animate-in delay-100">
            {[
              { 
                num: "01.", 
                title: "L'Indépendance Opérationnelle", 
                desc: "Vous êtes chez vous. Lors de la livraison, nous formons vos équipes à l'utilisation du back-office (l'interface d'administration). Vous êtes 100 % autonome pour modifier vos textes, ajouter un nouveau service ou publier une actualité, sans avoir à nous demander un devis à chaque virgule modifiée." 
              },
              { 
                num: "02.", 
                title: "La Sérénité Technique (Maintenance)", 
                desc: "Vous dirigez une entreprise, vous n'avez pas le temps de gérer des mises à jour de serveurs. Nous proposons des contrats de maintenance (sans engagement abusif) pour assurer la sécurité de vos données, les sauvegardes quotidiennes et la mise à jour de l'infrastructure. Si un problème technique survient, nous intervenons avant même que vous ne le remarquiez." 
              },
              { 
                num: "03.", 
                title: "L'Ingénierie de la Croissance (Acquisition)", 
                desc: "Votre site vitrine est désormais une machine de conversion parfaitement huilée. L'étape suivante consiste à l'alimenter en trafic qualifié. Nous vous accompagnons sur le long terme via des stratégies d'acquisition ciblées (Référencement Naturel SEO, Campagnes Google Ads, Social Selling) pour capter la demande exacte de votre marché." 
              }
            ].map((block, i) => (
              <div key={i} className="flex flex-col relative group">
                <div className="text-sm font-bold font-heading text-ocean mb-3">{block.num}</div>
                <h3 className="text-xl font-bold font-heading mb-4 text-foreground">{block.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIAGNOSTIC EXPRESS ─── */}
      <section className="py-24 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl mb-16 animate-in text-center mx-auto">
             <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> DIAGNOSTIC EXPRESS (45 SECONDES) <div className="w-5 h-[1.5px] bg-primary"></div>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Identifiez votre faille digitale et <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">vos priorités d'investissement.</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ne dépensez pas un euro sans savoir où se situe votre perte de rentabilité. Répondez à ces 4 questions rapides. Notre algorithme identifie les frictions de votre parcours d'acquisition et hiérarchise vos priorités techniques.
            </p>
          </div>
          <DiagnosticExpress />
        </div>
      </section>
      {/* ─── TESTIMONIAL ─── */}
      <section className="py-24 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
             <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> IMPACT COMMERCIAL
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Des résultats mesurés sur <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">votre volume de contacts.</em>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto glass-card bg-background/50 backdrop-blur-xl border border-border p-10 md:p-14 rounded-3xl relative overflow-hidden text-center">
            {/* Quote Icon Background */}
            <div className="absolute top-4 left-6 text-9xl text-ocean/5 font-serif select-none pointer-events-none">"</div>
            <div className="absolute -bottom-10 right-6 text-9xl text-ocean/5 font-serif select-none pointer-events-none rotate-180">"</div>
            
            <div className="flex justify-center gap-1 mb-8 text-ocean relative z-10">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-10 relative z-10">
              « Notre ancien site ne reflétait plus du tout le côté haut de gamme de nos prestations. Que ce soit face à des professionnels ou des particuliers, nous perdions en crédibilité. Waveia a totalement restructuré notre vitrine digitale. Le rendu est institutionnel et rassurant. Depuis la mise en ligne, le volume de nos demandes entrantes a bondi, et nos clients sont déjà convaincus par notre sérieux avant même notre premier échange. »
            </p>

            <div className="inline-flex items-center justify-center relative z-10">
              <div className="text-center">
                <div className="font-bold font-heading text-foreground uppercase tracking-wide">Dirigeant</div>
                <div className="text-sm text-ocean font-medium mt-1">Orientation high ticket</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ & TRANSPARENCE ─── */}
      <section className="pt-24 pb-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 animate-in text-center">
             <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> TRANSPARENCE TOTALE <div className="w-5 h-[1.5px] bg-primary"></div>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Vos dernières questions avant de <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">nous confier votre projet.</em>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 animate-in delay-100">
            {[
              {
                q: "Vais-je payer un abonnement mensuel pour conserver mon site ?",
                a: "Non. C'est notre engagement d'indépendance. Vous payez la conception au forfait. À la livraison, nous vous cédons 100 % des droits de propriété intellectuelle et des codes sources. Seuls l'hébergement annuel de vos serveurs et la maintenance de sécurité (qui reste optionnelle) représentent un coût récurrent dérisoire. Vous n'êtes jamais pris en otage."
              },
              {
                q: "Dois-je rédiger moi-même les argumentaires et fournir les photos ?",
                a: "Non, et c'est déconseillé. Un dirigeant manque souvent de temps et de recul pour rédiger des textes qui convertissent. Notre pôle Copywriting s'en charge pour maximiser l'impact psychologique et le référencement (SEO). Côté visuel, nous pouvons organiser un reportage photo dans vos locaux pour bannir les banques d'images génériques qui détruisent votre crédibilité."
              },
              {
                q: "Quel est le délai de livraison pour un site vitrine premium ?",
                a: "Grâce à notre méthodologie assistée par l'Intelligence Artificielle (qui accélère l'exécution du code et la génération des maquettes), un site sur-mesure est généralement déployé, testé et mis en ligne en 4 à 6 semaines, à compter de la validation du cahier des charges stratégique."
              },
              {
                q: "Mon site sera-t-il premier sur Google dès sa mise en ligne ?",
                a: "Méfiez-vous des agences qui vous promettent cela. Votre site est livré avec des fondations techniques SEO parfaites (vitesse de chargement ultra-rapide, balisage sémantique propre, architecture mobile). C'est le prérequis obligatoire. Cependant, pour dominer des mots-clés très concurrentiels sur le long terme, ces fondations devront être alimentées par une stratégie d'acquisition continue (création de contenu, netlinking)."
              },
              {
                q: "En quoi l'IA fait-elle une différence sur mon projet ?",
                a: "L'Intelligence Artificielle ne remplace pas notre réflexion stratégique, elle remplace l'exécution chronophage. Nous l'utilisons pour générer un code informatique parfait et allégé (ce qui rend votre site extrêmement rapide), et pour intégrer des modules commerciaux intelligents à votre interface (formulaires conditionnels, générateurs de devis instantanés) qui travaillent à la place de vos commerciaux."
              },
              {
                q: "Serai-je autonome pour modifier mes contenus après la livraison ?",
                a: "Totalement. Nous concevons nos plateformes avec un back-office (interface d'administration) ergonomique et simplifié. Lors de la remise des clés, nous formons vos équipes. Vous pourrez modifier vos textes, ajouter un nouveau service ou publier une actualité en quelques clics, sans jamais avoir à nous demander un devis."
              },
              {
                q: "J'ai déjà un vieux site. Vaut-il mieux faire une refonte ou repartir de zéro ?",
                a: "Dans 90 % des cas, repartir d'une feuille blanche (en conservant votre nom de domaine et votre référencement existant) est plus rentable que de tenter de \"patcher\" un site obsolète. La dette technique des vieux sites ralentit les performances et limite les possibilités de conversion. Lors de notre audit gratuit, nous vous dirons factuellement quelle est la meilleure option financière."
              },
              {
                q: "Quel est le budget moyen pour la création d'un tel actif digital ?",
                a: "Nous ne pratiquons pas de tarification standardisée car chaque entreprise a des enjeux de conversion différents (modules IA spécifiques, synchronisation CRM, multilinguisme). Cependant, considérez qu'il s'agit d'un investissement dans un outil de production commerciale, et non d'une dépense de communication classique. Le chiffrage exact est établi lors de notre premier rendez-vous de cadrage, sans aucun engagement de votre part."
              }
            ].map((faq, i) => (
              <details key={i} className="group glass-card bg-background/50 border-border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 select-none list-none">
                  <h3 className="text-lg md:text-xl font-bold font-heading text-foreground pr-8">
                    <span className="text-ocean mr-3 font-mono text-sm opacity-80">0{i + 1}.</span>
                    {faq.q}
                  </h3>
                  <div className="relative w-6 h-6 flex-shrink-0 text-ocean flex items-center justify-center">
                    <Plus className="absolute w-6 h-6 transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                    <Minus className="absolute w-6 h-6 transition-transform duration-300 -rotate-90 opacity-0 group-open:rotate-0 group-open:opacity-100" />
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-muted-foreground leading-relaxed">
                  <div className="w-full h-px bg-border/50 mb-6" />
                  <p className="pl-10 md:pl-11">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="glass-card bg-ocean/5 border-ocean/20 p-10 md:p-16 text-center animate-in">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
                Prêt à déployer votre plateforme de croissance ?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                Que vous partiez de zéro ou que vous souhaitiez transformer votre site actuel en machine à générer des leads, discutons 30 minutes de votre projet. Un échange factuel pour définir la stratégie la plus efficace pour votre activité.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
                <a href="#rdv" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                  Réserver un échange de 15min <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#devis" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-transparent text-foreground font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean hover:-translate-y-0.5 transition-all">
                  Obtenir un chiffrage
                </a>
              </div>
           </div>
        </div>
      </section>
      
    </div>
  );
}
