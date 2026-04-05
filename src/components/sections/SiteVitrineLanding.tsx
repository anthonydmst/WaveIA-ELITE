import React from "react";
import { ArrowRight, Check, X } from "lucide-react";

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
              <span className="w-1.5 h-1.5 bg-ocean rounded-full animate-pulse-glow" />
              Agence Web & IA — Pays Basque
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Votre présence digitale,<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                propulsée par l'IA.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              WaveIA conçoit des sites ultra-performants et pilote votre croissance digitale grâce à l'intelligence artificielle. Résultats mesurables, dès le premier mois.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Obtenir mon audit gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#compare" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir le comparatif
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">95+</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Score PageSpeed garanti</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">3×</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Plus de leads en 90 jours</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Code propriétaire</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">14j</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Délai livraison moyen</span>
              </div>
            </div>
            
            <p className="mt-9 text-xs text-muted-foreground/70 tracking-wider">
              <b className="text-muted-foreground font-normal">Bayonne · Biarritz · Anglet · Bidart · Hossegor · Saint-Jean-de-Luz · Boucau</b>
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY ─── */}
      <section id="why" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Pourquoi WaveIA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              L'absence digitale <span className="text-ocean">coûte plus cher</span> qu'une présence optimisée.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dans le Pays Basque, les entreprises qui n'exploitent pas le digital laissent leurs clients aller chez la concurrence — souvent sans même s'en rendre compte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border border border-border rounded-2xl overflow-hidden animate-in delay-100">
            {[
              { icon: '🎯', title: 'Visibilité qui travaille 24h/24', desc: "Un site conçu par WaveIA est optimisé pour être trouvé sur Google avant vos concurrents de Bayonne à Hossegor. Pas besoin de publicité payante pour générer des contacts." },
              { icon: '⚡', title: 'Performance mesurable dès J+30', desc: "Nous ne livrons pas un site et nous disparaissons. Chaque projet intègre un tableau de bord IA pour suivre vos positions SEO, vos leads et vos conversions en temps réel." },
              { icon: '🤖', title: 'IA intégrée dans chaque processus', desc: "Rédaction optimisée, tests A/B automatiques, analyse prédictive des mots-clés : nos méthodes augmentées par l'IA produisent des résultats 3x plus rapides qu'une agence classique." },
              { icon: '🏄', title: 'Ancrés au Pays Basque', desc: "Nous connaissons le tissu économique local : artisans, commerçants, cabinets, hôtels, restaurants. Notre approche tient compte de la saisonnalité et des recherches locales de Biarritz à Saint-Jean-de-Luz." },
              { icon: '🔒', title: 'Votre code, votre liberté', desc: "Zéro dépendance à des plateformes propriétaires. Votre site est construit sur des technologies ouvertes, vous en êtes le seul propriétaire — hébergement, code source et nom de domaine inclus." },
              { icon: '🔄', title: 'Accompagnement 360°', desc: "Création web, SEO prédictif, automatisation, acquisition : WaveIA est le seul interlocuteur dont vous avez besoin pour piloter votre développement digital de A à Z." },
            ].map((feature, i) => (
              <div key={i} className="bg-card hover:bg-glass-bg transition-colors p-8">
                <div className="w-11 h-11 rounded-xl bg-ocean/10 border border-ocean/20 flex items-center justify-center text-xl mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-[1.05rem] font-bold font-heading mb-2.5 text-foreground">{feature.title}</h3>
                <p className="text-[0.88rem] text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARE ─── */}
      <section id="compare" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Comparatif
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Pourquoi WaveIA ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Engineering IA vs Agence Classique vs Freelance WordPress — la différence est claire.</p>
          </div>
          
          <div className="overflow-x-auto animate-in delay-100 pb-4">
            <table className="w-full min-w-[800px] border-collapse border border-border/50 rounded-2xl overflow-hidden glass-card">
              <thead>
                <tr>
                  <th className="p-5 text-left font-heading text-sm font-bold bg-glass-bg/50 border-b border-border/50 text-muted-foreground">Fonctionnalité</th>
                  <th className="p-5 text-center font-heading text-sm font-bold bg-ocean/5 text-ocean border-x-2 border-ocean/30 border-b border-border/50">👑 WaveIA</th>
                  <th className="p-5 text-center font-heading text-sm font-bold bg-glass-bg/50 border-b border-border/50 text-muted-foreground">Agence Web Classique</th>
                  <th className="p-5 text-center font-heading text-sm font-bold bg-glass-bg/50 border-b border-border/50 text-muted-foreground">Freelance WordPress</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Architecture Next.js 15", w: <Check className="w-5 h-5 mx-auto text-emerald-400" />, a: <X className="w-5 h-5 mx-auto text-red-400" />, f: <X className="w-5 h-5 mx-auto text-red-400" /> },
                  { name: "Hébergement Edge Network (CDN Global)", w: <Check className="w-5 h-5 mx-auto text-emerald-400" />, a: "Serveur mutualisé", f: "Basique" },
                  { name: "Score Google PageSpeed 95+ Garanti", w: <Check className="w-5 h-5 mx-auto text-emerald-400" />, a: "Variable", f: "Non" },
                  { name: "Code Source 100% Propriétaire", w: <Check className="w-5 h-5 mx-auto text-emerald-400" />, a: <X className="w-5 h-5 mx-auto text-red-400" />, f: <Check className="w-5 h-5 mx-auto text-emerald-400" /> },
                  { name: "SEO Prédictif augmenté par IA", w: <Check className="w-5 h-5 mx-auto text-emerald-400" />, a: "Basique", f: <X className="w-5 h-5 mx-auto text-red-400" /> },
                  { name: "Sécurité Banking-Grade", w: <Check className="w-5 h-5 mx-auto text-emerald-400" />, a: "Basique", f: "Plugins tiers" },
                  { name: "Acquisition & Automatisation", w: <Check className="w-5 h-5 mx-auto text-emerald-400" />, a: "En option", f: <X className="w-5 h-5 mx-auto text-red-400" /> },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors border-b border-border/20 last:border-0 relative">
                    <td className="p-4 text-sm text-foreground">{row.name}</td>
                    <td className="p-4 text-center text-sm bg-ocean/[0.02] border-x-2 border-ocean/[0.15]">
                      {row.w}
                    </td>
                    <td className="p-4 text-center text-sm text-muted-foreground italic">{row.a}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground italic">{row.f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Tarifs
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Des solutions adaptées à votre ambition.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Transparence totale, sans frais cachés. Chaque formule inclut une stratégie digitale sur mesure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Essential */}
            <div className="glass-card p-10 hover:-translate-y-1 transition-transform animate-in delay-100">
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Formule</div>
              <h3 className="text-2xl font-bold font-heading mb-2">Site Essentiel</h3>
              <p className="text-sm text-muted-foreground italic mb-7">Pour lancer votre présence digitale avec les meilleures bases.</p>
              
              <div className="flex items-baseline gap-1.5 mb-2">
                <strong className="text-4xl font-extrabold font-heading text-ocean">1 990€</strong>
              </div>
              <div className="text-xs text-muted-foreground mb-8 flex items-center gap-1.5">
                <span>⏱ Livraison estimée : 2 à 3 semaines</span>
              </div>
              
              <ul className="space-y-3 mb-9">
                {['Analyse marché & concurrents locaux', 'Site rapide, sécurisé, mobile-first', 'Score PageSpeed 95+ garanti', 'SEO technique et local inclus', 'Hébergement Edge CDN 1 an inclus', 'Formation à la gestion du site'].map((f,i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground pb-2 border-b border-border/50 last:border-0 last:pb-0">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] py-3.5 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all w-full">
                Démarrer mon projet <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Performance IA */}
            <div className="glass-card p-10 hover:-translate-y-1 transition-transform animate-in delay-200 border-ocean/40 bg-[linear-gradient(160deg,rgba(14,165,233,0.07)_0%,var(--glass-bg)_60%)] relative overflow-hidden">
               <div className="absolute top-5 -right-9 bg-ocean text-white font-heading text-[0.65rem] font-bold tracking-[0.1em] px-9 py-1 rotate-45">
                RECOMMANDÉ
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Formule</div>
              <h3 className="text-2xl font-bold font-heading mb-2">Performance IA</h3>
              <p className="text-sm text-muted-foreground italic mb-7">Transformez votre site en véritable levier d'acquisition.</p>
              
              <div className="flex items-baseline gap-1.5 mb-2">
                <strong className="text-3xl font-extrabold font-heading text-ocean">Sur devis</strong>
              </div>
              <div className="text-xs text-muted-foreground mb-8 flex items-center gap-1.5">
                <span>✦ Étude personnalisée gratuite</span>
              </div>
              
              <ul className="space-y-3 mb-9">
                {['Audit SEO & concurrentiel complet', 'Architecture Next.js 15 sur-mesure', 'SEO prédictif augmenté par IA', 'Rédaction complète optimisée', 'Design premium à votre image', 'Automatisations & intégrations CRM', 'Suivi & ajustements sur 3 mois'].map((f,i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground pb-2 border-b border-border/50 last:border-0 last:pb-0">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] py-3.5 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all w-full">
                Obtenir mon devis gratuit <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Growth 360 */}
            <div className="glass-card p-10 hover:-translate-y-1 transition-transform animate-in delay-300">
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Formule</div>
              <h3 className="text-2xl font-bold font-heading mb-2">Croissance 360°</h3>
              <p className="text-sm text-muted-foreground italic mb-7">Pour dominer votre marché localement et nationalement.</p>
              
              <div className="flex items-baseline gap-1.5 mb-2">
                <strong className="text-3xl font-extrabold font-heading text-ocean">Sur devis</strong>
              </div>
              <div className="text-xs text-muted-foreground mb-8 flex items-center gap-1.5">
                <span>✦ Accompagnement mensuel continu</span>
              </div>
              
              <ul className="space-y-3 mb-9">
                {['Tout le plan Performance IA', 'SEO mensuel & création contenu IA', 'Campagnes acquisition (Ads)', 'A/B testing & optimisation', 'Reporting & appel stratégique'].map((f,i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground pb-2 border-b border-border/50 last:border-0 last:pb-0">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-transparent border border-border text-foreground font-heading font-bold text-[0.95rem] py-3.5 rounded-full hover:border-ocean hover:text-ocean transition-all w-full mt-auto">
                Discutons de votre projet
              </a>
            </div>
          </div>
          
          <p className="text-center mt-8 text-sm text-muted-foreground italic max-w-2xl mx-auto">
            * Chaque formule est ajustée à la réalité de votre marché local — Bayonne, Biarritz, Anglet et alentours.
          </p>
        </div>
      </section>

      {/* ─── BEFORE / AFTER ─── */}
      <section id="ba" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Avant / Après WaveIA
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Ce que change une présence digitale intelligente.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">La différence entre stagner et croître, c'est souvent une question de méthode.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="glass-card bg-red-500/5 border-red-500/20 p-8 md:p-10 animate-in delay-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-lg">😓</div>
                <h3 className="text-lg font-bold font-heading">Sans WaveIA</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Invisible sur Google : vos concurrents captent vos clients",
                  "Site lent qui fait fuir les visiteurs en moins de 3 secondes",
                  "Aucune donnée sur vos visiteurs ni vos conversions",
                  "Processus manuels chronophages et génération de leads aléatoire",
                  "Multiples prestataires, zéro cohérence de stratégie"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card bg-emerald-500/5 border-emerald-500/20 p-8 md:p-10 animate-in delay-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-lg">🚀</div>
                <h3 className="text-lg font-bold font-heading">Avec WaveIA</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Top positions Google pour vos requêtes locales clés sous 90 jours",
                  "Site 95+ PageSpeed qui convertit les visiteurs en clients",
                  "Dashboard IA : chaque euro investi est tracé et optimisé",
                  "Acquisition automatisée qui génère des leads même la nuit",
                  "Stratégie digitale 360°, partenaire local en Pays Basque"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground mb-1 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-in delay-300">
             <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Je veux passer au niveau supérieur <ArrowRight className="w-4 h-4" />
             </a>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Notre Méthode
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              Un processus rodé,<br />des résultats prévisibles.
            </h2>
            <p className="text-muted-foreground">
              De la stratégie à la croissance, voici comment WaveIA pilote votre transformation digitale avec la précision de l'ingénierie.
            </p>
          </div>

          <div className="relative max-w-4xl animate-in delay-100">
            <div className="absolute left-[27px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-ocean to-transparent opacity-25"></div>
            
            {[
              {
                step: "01",
                title: "Audit & Cadrage Stratégique",
                desc: "Analyse complète de votre marché local, audit de votre présence actuelle, identification des opportunités IA. Nous définissons ensemble les KPIs qui comptent vraiment pour votre business.",
                tags: ["Analyse marché", "Cahier des charges", "KPIs"]
              },
              {
                step: "02",
                title: "Architecture & UX Data-Driven",
                desc: "Conception de l'arborescence basée sur les comportements réels. Wireframes validés par des tests IA, parcours utilisateur optimisés pour la conversion, mobile-first.",
                tags: ["UX Research", "Wireframing IA", "SEO Structure"]
              },
              {
                step: "03",
                title: "Design Premium & Identité",
                desc: "Création d'une interface distinctive. Charte graphique, maquettes complètes. Un design qui inspire confiance et reflète l'excellence de vos services.",
                tags: ["Design System", "Maquettes HD", "Validations"]
              },
              {
                step: "04",
                title: "Développement & Intégrations IA",
                desc: "Code Next.js 15 optimisé, intégrations CRM, déploiement CI/CD automatisé. Tous les tests de performance sont validés avant mise en ligne.",
                tags: ["Next.js 15", "Intégrations API", "Tests QA"]
              },
              {
                step: "05",
                title: "Lancement & Suivi Performance",
                desc: "Mise en ligne, soumission moteurs de recherche, analytics avancés. Suivi mensuel de vos positions, leads et conversions avec ajustements continus.",
                tags: ["Analytics IA", "Reporting mensuel", "Optimisations"]
              }
            ].map((process, i) => (
              <div key={i} className="flex gap-7 mb-12 relative last:mb-0">
                <div className="shrink-0 w-[54px] h-[54px] rounded-full bg-card border-2 border-ocean/30 flex items-center justify-center font-heading font-bold text-ocean relative z-10 shadow-sm">
                  {process.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-[1.1rem] font-bold font-heading mb-2 text-foreground">{process.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{process.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {process.tags.map((tag, j) => (
                      <span key={j} className="text-[0.7rem] font-medium text-ocean bg-ocean/10 border border-ocean/20 rounded-full px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
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
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Votre concurrent le fait peut-être déjà.</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">Chaque semaine sans présence digitale optimisée, c'est des clients perdus au profit d'un concurrent mieux positionné. Commençons par un audit gratuit de votre situation.</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                  Obtenir mon audit gratuit <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+33600000000" className="inline-flex items-center gap-2 bg-transparent text-foreground font-medium text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                  📞 Appel rapide
                </a>
              </div>
              <p className="text-xs text-muted-foreground italic">Prend 2 min. Réponse sous 24h ouvrées. Aucun engagement.</p>
           </div>
        </div>
      </section>
      
    </div>
  );
}
