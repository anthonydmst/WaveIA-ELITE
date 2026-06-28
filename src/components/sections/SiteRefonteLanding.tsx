import React from 'react';
import { 
  ArrowRight, TrendingUp, Bot, Search, Palette, Target, Settings,
  Globe, Check, X, Puzzle, BarChart, PieChart, Handshake,
  MapPin
} from 'lucide-react';
import { RefonteModeleSection } from './RefonteModeleSection';
import { RefonteDiagnosticSection } from './RefonteDiagnosticSection';
import { RefonteApprocheSection } from './RefonteApprocheSection';

export function SiteRefonteLanding() {
  return (
    <div className="w-full relative z-10 pt-20">
      
      {/* ─── HERO ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden pt-[70px]">
        {/* Glow & Grid Backgrounds */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-7">
              <span className="w-1.5 h-1.5 bg-ocean rounded-full animate-pulse-glow" />
              REFONTE DE SITE WEB | MIGRATION SÉCURISÉE
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Ne faites pas qu&apos;un simple coup de pinceau.<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Exigez un site qui génère du CA.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Design vieillissant, chargement lent, parcours client chaotique... Votre site actuel n&apos;est plus à la hauteur de votre expertise et vous fait perdre des opportunités face à la concurrence. Chez Waveia, une refonte n&apos;est pas qu&apos;une question d&apos;esthétique. Nous effaçons votre dette technique, sécurisons vos positions historiques sur Google (SEO) et reconstruisons une plateforme rapide, taillée pour convertir vos visiteurs en clients.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Demander l&apos;audit gratuit de mon site <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#pourquoi-refonte" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-[0.95rem] font-medium px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir notre méthode de refonte
              </a>
            </div>
            
            <div className="mt-12 flex justify-center gap-6 flex-wrap text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Audit de vos failles actuelles</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Migration SEO sans perte de trafic</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Zéro coupure pendant la transition</span>
            </div>
          </div>
        </div>
      </section>

      <RefonteDiagnosticSection />
      
      <RefonteApprocheSection />

      <RefonteModeleSection />

      {/* ─── WHY ─── */}
      <section id="pourquoi-refonte" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Pourquoi refondre ?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              Ne laissez plus un site obsolète <span className="text-ocean">freiner votre croissance</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Votre site est votre meilleur commercial. WaveIA le transforme en machine à convertir, visible partout sur le Pays Basque.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border border border-border rounded-2xl overflow-hidden animate-in delay-100">
            {[
              { icon: <Palette className="w-5 h-5 text-ocean" />, title: 'Inspirez confiance', desc: "Un site daté inspire la méfiance. Un design moderne et cohérent renforce votre crédibilité dès les premières secondes." },
              { icon: <Bot className="w-5 h-5 text-ocean" />, title: 'SEO prédictif IA', desc: "Nos algorithmes anticipent les tendances de recherche avant vos concurrents. Vous êtes en tête avant même qu'ils réagissent." },
              { icon: <TrendingUp className="w-5 h-5 text-ocean" />, title: 'UX & Conversion', desc: "Un parcours fluide, pensé pour convertir. Chaque clic ramène votre visiteur vers l'action que vous souhaitez." },
              { icon: <Target className="w-5 h-5 text-ocean" />, title: 'Nouveaux objectifs', desc: "Votre business évolue. Votre site doit suivre. On l'adapte à vos nouvelles ambitions de croissance." },
              { icon: <Settings className="w-5 h-5 text-ocean" />, title: 'Écosystème & outils', desc: "CRM, chatbots IA, tunnels de vente, automatisation marketing : on intègre tout pour maximiser vos revenus." },
              { icon: <Globe className="w-5 h-5 text-ocean" />, title: '100% Reponsive', desc: "Une expérience parfaite sur mobile, là où sont vos clients, pour une navigation aussi fluide qu'une application native." },
            ].map((feature, i) => (
              <div key={i} className="bg-card hover:bg-glass-bg transition-colors p-8">
                <div className="w-11 h-11 rounded-xl bg-ocean/10 border border-ocean/20 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-[1.05rem] font-bold font-heading mb-2.5 text-foreground">{feature.title}</h3>
                <p className="text-[0.88rem] text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Ce que nous faisons
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              Nos services digitaux <span className="text-ocean">360°</span>
            </h2>
            <p className="text-muted-foreground">De la stratégie à l'exécution : WaveIA couvre tous vos leviers de croissance avec une approche augmentée par l'intelligence artificielle.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in delay-100">
            {[
              { icon: <Globe className="w-6 h-6 text-ocean" />, title: "Création & Refonte", desc: "Sites ultra-performants conçus avec des outils IA. Design sur-mesure, code optimisé, expérience mémorable pour vos visiteurs." },
              { icon: <Search className="w-6 h-6 text-ocean" />, title: "SEO Prédictif", desc: "Notre IA analyse les tendances avant qu'elles explosent. On vous positionne sur les mots-clés de demain, dès aujourd'hui." },
              { icon: <Puzzle className="w-6 h-6 text-ocean" />, title: "Automatisations", desc: "Automatisez vos tâches répétitives, vos relances, vos campagnes. Vos équipes se concentrent sur ce qui compte vraiment." },
              { icon: <BarChart className="w-6 h-6 text-ocean" />, title: "Acquisition & Ads", desc: "Google Ads, Meta Ads, SEA pilotés par IA. Chaque euro investi est optimisé en temps réel pour maximiser votre ROI." },
              { icon: <PieChart className="w-6 h-6 text-ocean" />, title: "Data & Analytics", desc: "Tableaux de bord personnalisés, analyse comportementale, rapports automatisés. Vos données transformées en décisions." },
              { icon: <Handshake className="w-6 h-6 text-ocean" />, title: "Accompagnement 360°", desc: "Stratégie digitale, formation, support continu. WaveIA est votre partenaire de croissance sur le long terme." },
            ].map((service, i) => (
              <div key={i} className="glass-card hover:-translate-y-1 transition-transform p-8">
                <div className="w-12 h-12 rounded-xl bg-ocean/10 border border-ocean/20 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-in delay-200">
            <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
              Obtenir mon devis gratuit <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section id="comparaison" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              La différence WaveIA
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Votre site stagne ? <span className="text-ocean">Passez à la vitesse IA</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Découvrez ce qui change concrètement quand votre digital est piloté par l'intelligence artificielle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="glass-card bg-red-500/5 border-red-500/20 p-8 md:p-10 animate-in delay-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-lg">❌</div>
                <h3 className="text-lg font-bold font-heading text-red-500">Sans WaveIA</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Design daté → vos visiteurs partent en quelques secondes",
                  "SEO aléatoire → invisible sur Google",
                  "Tâches manuelles → temps et argent perdus",
                  "Site non adapté mobile → mauvaise expérience",
                  "Aucune data → décisions à l'aveugle",
                  "Pas d'automatisation → opportunités manquées 24h/24",
                  "Agence classique → livrables génériques sans suivi"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground opacity-80 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card bg-ocean/5 border-ocean/20 p-8 md:p-10 animate-in delay-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-ocean/10 flex items-center justify-center text-lg">👑</div>
                <h3 className="text-lg font-bold font-heading text-ocean">Avec WaveIA</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Design premium 2025 → crédibilité immédiate",
                  "SEO prédictif IA → visibilité durable et trafic qualifié",
                  "Automatisation complète → vous gagnez des heures",
                  "100% responsive → parfait sur mobile",
                  "Dashboard data live → décisions basées sur les faits",
                  "IA qui travaille 24/7 → leads générés même la nuit",
                  "Partenaire de croissance → accompagnement continu"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground mb-1 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projets" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Réalisations
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              Quelques projets <span className="text-ocean">transformés</span>
            </h2>
            <p className="text-muted-foreground">De Bayonne à Biarritz, découvrez des entreprises locales qui ont accéléré leur croissance grâce à WaveIA.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in delay-100">
            {[
              { icon: '🏨', city: "Biarritz", title: "Hôtel boutique", desc: "Refonte complète + SEO prédictif. Trafic organique multiplié par 4 en 6 mois.", tags: ["Refonte Web", "SEO IA"] },
              { icon: '🍽️', city: "Bayonne", title: "Restaurant gastronomique", desc: "Site, SEO local, réservations automatisées. +230% de réservations en ligne.", tags: ["Création Web", "Automatisation"] },
              { icon: '🏄', city: "Hossegor", title: "École de surf", desc: "Boutique en ligne + campagnes Meta IA. CA en ligne x3 en un été.", tags: ["E-commerce", "Ads IA"] },
              { icon: '🏠', city: "Anglet", title: "Agence immobilière", desc: "Nouveau site + CRM automatisé + SEO local. 3× plus de contacts qualifiés.", tags: ["Refonte", "CRM IA"] },
              { icon: '💆', city: "Bidart", title: "Centre bien-être", desc: "Refonte, SEO local et système de réservation. Agenda complet en 6 semaines.", tags: ["SEO Local", "Booking Auto"] },
              { icon: '🎵', city: "Saint-Jean-de-Luz", title: "Salle de concert", desc: "Site, billetterie, campagnes sociales. Taux de remplissage +68%.", tags: ["Branding", "Acquisition"] },
            ].map((proj, i) => (
              <div key={i} className="glass-card hover:-translate-y-1 transition-transform overflow-hidden">
                <div className="aspect-[16/9] bg-ocean/5 border-b border-ocean/10 flex items-center justify-center relative">
                  <div className="text-5xl">{proj.icon}</div>
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md border border-border px-3 py-1 rounded-full text-[0.7rem] text-muted-foreground font-semibold">
                    {proj.city}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-bold text-lg mb-2 text-foreground">{proj.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, j) => (
                      <span key={j} className="text-[0.7rem] font-medium text-ocean bg-ocean/10 border border-ocean/20 rounded-full px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-in delay-200">
            <a href="#projets" className="inline-flex items-center gap-2 bg-transparent text-foreground font-medium text-[0.95rem] px-8 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
              Voir tous nos projets <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="processus" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Notre méthode
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              De l'idée à la <span className="text-ocean">performance mesurée</span>.
            </h2>
            <p className="text-muted-foreground">
              De la stratégie à la croissance, voici comment WaveIA pilote votre transformation digitale avec la précision de l'ingénierie et l'IA.
            </p>
          </div>

          <div className="relative max-w-4xl animate-in delay-100">
            <div className="absolute left-[27px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-ocean to-transparent opacity-25"></div>
            
            {[
              {
                step: "01",
                title: "Audit & Stratégie IA",
                desc: "Analyse IA de votre marché et vos concurrents. Audit SEO technique approfondi. Définition des objectifs et KPIs.",
              },
              {
                step: "02",
                title: "Conception & Architecture",
                desc: "UX research et parcours utilisateur. Arborescence optimisée pour la conversion. Structure SEO-first dès la conception.",
              },
              {
                step: "03",
                title: "Design & Développement",
                desc: "Identité visuelle et charte graphique. Maquettes validées avant développement. Intégrations IA, CRM, automatisations.",
              },
              {
                step: "04",
                title: "Lancement & Croissance",
                desc: "Mise en ligne et configuration. Activation des campagnes d'acquisition. Dashboard de suivi en temps réel et optimisations continues.",
              }
            ].map((process, i) => (
               <div key={i} className="flex gap-7 mb-12 relative last:mb-0">
                <div className="shrink-0 w-[54px] h-[54px] rounded-full bg-card border-2 border-ocean/30 flex items-center justify-center font-heading font-bold text-ocean relative z-10 shadow-sm">
                  {process.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-[1.1rem] font-bold font-heading mb-2 text-foreground">{process.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section id="whyus" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="animate-in">
               <div className="inline-flex items-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
                  <div className="w-5 h-[1.5px] bg-ocean"></div>
                  Pourquoi nous choisir ?
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                  Une agence née au Pays Basque, obsédée par <span className="text-ocean">vos résultats</span>.
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  WaveIA est née d'une conviction simple : les entreprises locales méritent les mêmes armes digitales que les grands groupes. Grâce à l'IA, nous démocratisons la performance digitale — rapidement, efficacement, sans jargon.
                </p>
                <div className="flex gap-6 mb-8">
                  <div className="glass-card p-6 flex-1 text-center">
                    <strong className="block text-3xl font-heading font-bold text-ocean mb-1">+340%</strong>
                    <span className="text-xs text-muted-foreground">Trafic moyen généré</span>
                  </div>
                  <div className="glass-card p-6 flex-1 text-center">
                    <strong className="block text-3xl font-heading font-bold text-ocean mb-1">×4.2</strong>
                    <span className="text-xs text-muted-foreground">Leads après refonte</span>
                  </div>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                  Parler à un expert WaveIA <ArrowRight className="w-4 h-4" />
                </a>
             </div>

             <div className="space-y-4 animate-in delay-100">
               {[
                 { icon: <Bot className="w-5 h-5 text-ocean" />, title: "Technologie IA de pointe", desc: "Nous intégrons les derniers outils d'intelligence artificielle dans chaque projet : SEO, design, automatisation pour des résultats accélérés." },
                 { icon: <MapPin className="w-5 h-5 text-ocean" />, title: "Expertise locale Pays Basque", desc: "On connaît le tissu économique local. De Bayonne à Hossegor, on sait exactement comment vous différencier de la concurrence." },
                 { icon: <BarChart className="w-5 h-5 text-ocean" />, title: "Résultats mesurables", desc: "Chaque projet inclut un tableau de bord avec vos KPIs en temps réel. Vous voyez exactement ce que vous obtenez." },
                 { icon: <Handshake className="w-5 h-5 text-ocean" />, title: "Transparence et Accompagnement", desc: "Devis clair, sans frais cachés. Vous êtes informé à chaque étape et on reste à vos côtés après la mise en ligne." }
               ].map((val, i) => (
                 <div key={i} className="glass-card p-6 flex gap-5 hover:border-ocean/30 transition-colors">
                   <div className="w-12 h-12 shrink-0 rounded-xl bg-ocean/10 border border-ocean/20 flex items-center justify-center">
                     {val.icon}
                   </div>
                   <div>
                     <h4 className="font-heading font-bold text-foreground mb-1">{val.title}</h4>
                     <p className="text-sm text-muted-foreground">{val.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section className="py-16 text-center border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
           <div className="inline-flex items-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              Zone d'intervention
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Votre agence digitale au Pays Basque</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['Bayonne', 'Biarritz', 'Anglet', 'Bidart', 'Hossegor', 'Saint-Jean-de-Luz', 'Boucau', 'Hendaye', 'Pau', 'Nouvelle-Aquitaine'].map(city => (
                <span key={city} className="border border-border bg-card hover:border-ocean/30 hover:text-ocean text-muted-foreground text-sm px-4 py-2 rounded-full cursor-default transition-colors">
                  {city}
                </span>
              ))}
            </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section id="cta" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="glass-card bg-ocean/5 border-ocean/20 p-10 md:p-16 text-center animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              Prêt à décoller ?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
              Un projet de refonte ?<br/><span className="text-ocean">Parlons-en.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Que ce soit pour une refonte, un site from scratch, du SEO ou une stratégie digitale complète — notre équipe vous répond sous 24h avec une analyse personnalisée.
            </p>

            <div className="flex flex-col gap-6 items-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-10 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Obtenir mon audit gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-muted-foreground italic">Réponse garantie sous 24h · Sans engagement · 100% confidentiel</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
