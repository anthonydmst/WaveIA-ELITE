import React from 'react';
import { 
  ArrowRight, TrendingUp, Bot, Brain, Search, Rocket, ShoppingCart, 
  Globe, Palette, Tags, Lock, Gauge, Headset, XCircle, X, CheckCircle, 
  Check, Sparkles, Code, Radio, PieChart, Star 
} from 'lucide-react';

export function SiteEcommerceLanding() {
  return (
    <div className="w-full relative z-10 pt-10">
      
      {/* ─── HERO ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden pt-[70px]">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-ocean rounded-full animate-pulse-glow" />
              Agence e-commerce nouvelle génération
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Votre boutique en ligne,<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                surpuissante par l'IA.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              WaveIA conçoit des sites e-commerce ultra-performants en exploitant l'Intelligence Artificielle à chaque étape — du design génératif à l'automatisation SEO, en passant par la data prédictive. Vendez plus. Automatiquement.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Lancer mon projet <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#methode" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir la méthode IA
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+340%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Taux de conversion moyen</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">3×</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Plus rapide qu'agence</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Automatisé SEO/Sales</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">4.9/5</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">120+ clients satisfaits</span>
              </div>
            </div>
            
            <p className="mt-9 text-xs text-muted-foreground/70 tracking-wider">
              <b className="text-muted-foreground font-normal">Shopify · WooCommerce · Stripe · OpenAI · Next.js</b>
            </p>
          </div>
        </div>
      </section>

      {/* ─── LOGOS / SOCIAL PROOF ─── */}
      <section className="py-10 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-sans text-muted-foreground uppercase tracking-widest mb-8">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50 grayscale">
            <span className="font-heading font-bold text-xl text-muted-foreground">Shopify</span>
            <span className="font-heading font-bold text-xl text-muted-foreground">WooCommerce</span>
            <span className="font-heading font-bold text-xl text-muted-foreground">Stripe</span>
            <span className="font-heading font-bold text-xl text-muted-foreground">OpenAI</span>
            <span className="font-heading font-bold text-xl text-muted-foreground">Vercel</span>
            <span className="font-heading font-bold text-xl text-muted-foreground">Algolia</span>
          </div>
        </div>
      </section>

      {/* ─── POURQUOI ─── */}
      <section id="pourquoi" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 animate-in">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Pourquoi l'IA change tout
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              L'e-commerce sans IA,<br/><span className="text-ocean">c'est déjà du passé</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pendant que vos concurrents codent ligne à ligne, WaveIA déploie des systèmes intelligents qui apprennent, s'optimisent et vendent à votre place — 24h/24, 7j/7, sans friction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in delay-100">
            {[
              { icon: <Brain className="w-5 h-5 text-ocean" />, title: "UX Générative", desc: "L'IA analyse le comportement de chaque visiteur et génère une expérience d'achat personnalisée en temps réel." },
              { icon: <TrendingUp className="w-5 h-5 text-ocean-light" />, title: "Data Prédictive", desc: "Anticipez les tendances, les stocks et les prix grâce à des modèles prédictifs. Décidez avant la concurrence." },
              { icon: <Search className="w-5 h-5 text-ocean" />, title: "SEO Automatisé", desc: "Fiches produits, balises, maillage interne — tout est généré et optimisé par nos agents IA formés aux algorithmes." },
              { icon: <Rocket className="w-5 h-5 text-ocean-dark" />, title: "Développement Accéléré", desc: "Nos workflows réduisent le temps de production de 60%. Votre boutique est en ligne en quelques semaines." },
              { icon: <ShoppingCart className="w-5 h-5 text-ocean" />, title: "Tunnel de Vente IA", desc: "Upsells intelligents, relances, recommandations : chaque point de contact est optimisé pour convertir d'avantage." },
              { icon: <Globe className="w-5 h-5 text-ocean-light" />, title: "Expansion Internationale", desc: "Traductions automatiques, devises locales, SEO multilingue : l'IA prépare votre boutique pour de nouveaux marchés." },
            ].map((item, i) => (
              <div key={i} className="glass-card glass-card-hover p-7">
                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br from-ocean/10 to-ocean-dark/10 border border-ocean/20">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
              Nos services
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              Une offre e-commerce<br/><span className="text-ocean">clé en main augmentée</span>
            </h2>
            <p className="text-muted-foreground">WaveIA ne livre pas un site. Nous livrons un écosystème de vente intelligent, conçu pour performer dès le jour 1 et s'améliorer en continu.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in delay-100">
            {[
              { icon: <Palette className="w-5 h-5 text-ocean" />, title: "Design UX Génératif", desc: "Maquettes co-générées avec l'IA, testées et optimisées avant de coder. Votre boutique convertit dès le lancement." },
              { icon: <Tags className="w-5 h-5 text-ocean-light" />, title: "Fiches Produits IA", desc: "Génération automatique de descriptions SEO, attributs, variantes et balises. Des centaines de produits en un éclair." },
              { icon: <Lock className="w-5 h-5 text-ocean" />, title: "Paiement & Sécurité", desc: "Intégration Stripe, PayPal, Apple Pay. Sécurité anti-fraude renforcée par l'IA. Vos clients paient en sécurité." },
              { icon: <Gauge className="w-5 h-5 text-ocean-dark" />, title: "Performance Core Web", desc: "Score Lighthouse élevé garanti. Chaque milliseconde compte : la vitesse booste vos conversions." },
              { icon: <Bot className="w-5 h-5 text-ocean" />, title: "Automatisations Marketing", desc: "Relances paniers, emails dynamiques, chatbot IA : votre marketing e-commerce tourne de manière autonome." },
              { icon: <Headset className="w-5 h-5 text-ocean-light" />, title: "Support & Évolution", desc: "Maintenance proactive, monitoring et suggestions continues. Votre site e-commerce grandit intelligemment." },
            ].map((item, i) => (
              <div key={i} className="glass-card glass-card-hover p-7 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-ocean/10 border border-ocean/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                    <p className="font-sans text-muted-foreground text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-in delay-200">
            <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
              Demander mon audit gratuit <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Avant / Après WaveIA
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              Sans IA vs.<br/><span className="text-ocean">Avec WaveIA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-in delay-100">
            {/* Without */}
            <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-8 glass-card">
              <h3 className="font-heading font-bold text-red-400 text-lg mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Agence classique
              </h3>
              <ul className="space-y-4">
                {[
                  "Délai de livraison : 3 à 6 mois",
                  "Design one-size-fits-all sans tests",
                  "SEO manuel, lent et coûteux",
                  "Aucune personnalisation visiteur",
                  "Zéro automatisation marketing",
                  "Site statique qui vieillit mal"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-muted-foreground text-sm">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="bg-ocean/5 border border-ocean/20 rounded-2xl p-8 glass-card shadow-[0_0_40px_rgba(14,165,233,0.08)]">
              <h3 className="font-heading font-bold text-ocean text-lg mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> WaveIA × IA
              </h3>
              <ul className="space-y-4">
                {[
                  "Livraison en 3 à 6 semaines",
                  "UX générative testée et optimisée en amont",
                  "SEO automatisé, mis à jour en continu",
                  "Personnalisation IA pour chaque visiteur",
                  "Relances, upsells, emails : 100% automatiques",
                  "Système vivant qui s'améliore en continu"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-foreground text-sm">
                    <Check className="w-4 h-4 text-ocean mt-0.5 shrink-0" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS (MÉTHODE) ─── */}
      <section id="methode" className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              Notre processus
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              De l'idée au chiffre d'affaires<br/><span className="text-ocean">en 5 sprints IA</span>
            </h2>
            <p className="text-muted-foreground">Chaque étape est augmentée par l'IA : plus rapide, plus précise, plus rentable.</p>
          </div>

          <div className="relative animate-in delay-100">
            {/* Vertical line desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 bg-gradient-to-b from-ocean to-ocean-dark -translate-x-1/2 opacity-20 w-px"></div>

            <div className="space-y-16">
              {[
                { step: "01", title: "Brief & Stratégie IA", desc: "Analyse de votre marché, concurrents. On définit le positionnement.", icon: <Search className="w-5 h-5 text-white" />, statTitle: "Audit marché IA", statDesc: "500+ signaux analysés" },
                { step: "02", title: "Design Génératif", desc: "L'IA génère des dizaines de variantes adaptées à votre audience. Prototype qui convertit.", icon: <Sparkles className="w-5 h-5 text-white" />, statTitle: "Design System IA", statDesc: "Maquettes validées en 5j", rev: true },
                { step: "03", title: "Développement Accéléré", desc: "Développement en symbiose avec des agents IA : tests continus, robustesse, rapidité.", icon: <Code className="w-5 h-5 text-white" />, statTitle: "Stack IA-native", statDesc: "Next.js, Shopify, tests auto" },
                { step: "04", title: "Lancement & SEO IA", desc: "Mise en ligne avec déploiement SEO à l'échelle. Produits indexés directement.", icon: <Radio className="w-5 h-5 text-white" />, statTitle: "SEO & Contenu IA", statDesc: "Centaines de fiches générées", rev: true },
                { step: "05", title: "Optimisation Continue", desc: "Nos agents surveillent vos performances 24/7, détectent et appliquent les optimisations.", icon: <PieChart className="w-5 h-5 text-white" />, statTitle: "Dashboard Temps Réel", statDesc: "Rapports & alertes proactives" },
              ].map((item, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
                  <div className={item.rev ? "md:order-2 order-1" : "md:text-right"}>
                    <p className="font-heading font-black text-6xl text-ocean opacity-20 mb-1">{item.step}</p>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{item.title}</h3>
                    <p className="font-sans text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className={`glass-card rounded-2xl p-5 flex items-center gap-4 ${item.rev ? "md:order-1 order-2" : ""}`}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-r from-ocean to-ocean-light shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">{item.statTitle}</p>
                      <p className="font-sans text-muted-foreground text-xs mt-1">{item.statDesc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              Votre boutique IA<br/><span className="text-ocean">vous attend</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Réservez votre audit stratégique gratuit de 30 minutes. Nous analysons votre marché, vos concurrents et vous proposons un plan d'action IA concret — sans engagement.
            </p>

            <div className="flex flex-col gap-6 items-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-10 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Réserver mon audit gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-muted-foreground italic">Réponse garantie sous 24h · Sans engagement · 100% confidentiel</p>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
