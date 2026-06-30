"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, MapPin, Search, Bot, Zap, TrendingUp, Brush, Settings, Briefcase, Globe, BarChart } from 'lucide-react';

export function AProposLanding() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full relative z-10 pt-20">
      
      {/* ─── HERO ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Glow & Grid Backgrounds */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-12 md:py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              Agence Web IA · Pays Basque
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              L'agence qui propulse<br />
              votre <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">présence digitale</em><br />
              avec l'IA.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Waveia est née d'une conviction forte : <strong>les entreprises du Pays Basque méritent des outils digitaux de premier plan.</strong> Création web, SEO prédictif, SEA, et design — nous intégrons l'intelligence artificielle à chaque étape pour des performances inégalées.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Démarrer un projet <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir nos services
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+60</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Projets accompagnés</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">3×</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Trafic SEO Moyen</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Approche IA</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">Top 1</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Qualité Pays Basque</span>
              </div>
            </div>
            
            <p className="mt-9 text-xs text-muted-foreground/70 tracking-wider">
              <b className="text-muted-foreground font-normal">Intervention : Bayonne · Biarritz · Anglet · Bidart · Hossegor · Saint-Jean-de-Luz · Boucau</b>
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONVICTION ─── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="dark bg-slate-950 rounded-3xl p-10 lg:p-16 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 shadow-xl">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-ocean/40 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 left-[20%] w-[200px] h-[200px] bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-ocean text-sm font-bold uppercase tracking-widest mb-4 block flex items-center gap-2">
                  <div className="w-5 h-[1.5px] bg-primary"></div> Notre conviction
                </span>
                <blockquote className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-white">
                  « Nous ne faisons pas simplement des sites web. Nous <span className="text-ocean">propulsons</span> votre activité grâce au digital augmenté. »
                </blockquote>
              </div>
              <div className="text-white/80 leading-relaxed space-y-4">
                <p>
                  Face à la multiplicité des agences classiques qui livrent des sites vitrines sans stratégie, Waveia a choisi une voie différente. <strong className="text-white">Nous intégrons l'intelligence artificielle au cœur de chaque projet</strong> — de l'analyse sémantique à la génération de contenu optimisé, en passant par l'automatisation de vos campagnes.
                </p>
                <p>
                  Le résultat : des livrables <strong className="text-white">plus rapides, plus précis</strong> et des performances mesurables qui transforment votre investissement digital en levier de croissance réel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SAVOIR FAIRE (SERVICES) ─── */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Notre savoir-faire
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Une agence 360° au service<br />de votre croissance digitale.
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Du design à la donnée, du référencement organique à la conversion, Waveia pilote l'intégralité de votre stratégie digitale depuis le Pays Basque.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Globe className="w-5 h-5 text-ocean" />, title: "Création web intelligente", desc: "Des sites sur-mesure pensés pour convertir : UX soignée, performance technique, architecture SEO intégrée dès la conception." },
              { icon: <Settings className="w-5 h-5 text-ocean" />, title: "Refonte & modernisation", desc: "Votre site actuel ne reflète plus votre ambition ? Nous le transformons en un outil rapide et performant sans perdre votre historique SEO." },
              { icon: <Search className="w-5 h-5 text-ocean" />, title: "Référencement SEO", desc: "Notre approche SEO augmentée par l'IA anticipe les tendances locales, analyse la concurrence et construit une visibilité durable sur Google." },
              { icon: <TrendingUp className="w-5 h-5 text-ocean" />, title: "Publicité en ligne (SEA)", desc: "Campagnes Google Ads & Meta Ads pilotées avec une logique de rentabilité pure. Vos leads qualifiés à un coût d'acquisition optimisé." },
              { icon: <Brush className="w-5 h-5 text-ocean" />, title: "Graphisme & Identité", desc: "Logo, charte graphique, supports digitaux : nous forgeons une identité visuelle forte et cohérente qui vous distingue." },
              { icon: <BarChart className="w-5 h-5 text-ocean" />, title: "Automatisation & Data", desc: "Workflows automatisés, tableaux de bord de suivi. Nous transformons vos données en décisions stratégiques." }
            ].map((item, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:border-ocean/40 transition-all group overflow-hidden relative">
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 flex items-center justify-center rounded-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHIFFRES ─── */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="bg-card border border-border rounded-[2rem] p-10 lg:p-14 overflow-hidden relative shadow-sm">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 relative z-10">
                <div>
                   <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
                     En chiffres
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                    Des résultats concrets<br />et mesurables.
                  </h2>
                </div>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden glass-card relative z-10">
               {[
                 { val: "+60", label: "Projets accompagnés au Pays Basque" },
                 { val: "x3", label: "Trafic organique en moyenne sur 6 mois" },
                 { val: "98%", label: "Clients satisfaits de notre accompagnement" },
                 { val: "72h", label: "Délai moyen de livraison maquette" }
               ].map((stat, i) => (
                 <div key={i} className={`p-8 text-center bg-background/50 hover:bg-ocean/5 transition-colors ${i < 3 ? 'border-b md:border-b-0 md:border-r border-border' : ''}`}>
                   <div className="font-heading font-black text-4xl lg:text-5xl text-ocean mb-2">{stat.val}</div>
                   <div className="text-xs font-semibold text-muted-foreground leading-relaxed uppercase tracking-widest">{stat.label}</div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* ─── APPROCHE IA ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> Notre méthode
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              L'IA au service de votre<br />performance digitale.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Contrairement aux agences traditionnelles, chaque projet Waveia bénéficie d'un processus augmenté par l'intelligence artificielle — de bout en bout.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               {[
                 { num: "01", title: "Analyse & Audit Systémique", desc: "Nos outils IA analysent votre marché local, vos concurrents de Bayonne à Hossegor, et identifient les opportunités sémantiques." },
                 { num: "02", title: "Stratégie Personnalisée", desc: "Un plan d'action digital sur-mesure dicté par la donnée : quels canaux, quels mots-clés, quelle identité pour maximiser l'impact." },
                 { num: "03", title: "Exécution Accélérée", desc: "Grâce à nos pipelines de processus automatisés, nous livrons plus vite sans sacrifier la qualité. Moins de délais, zéro compromis." },
                 { num: "04", title: "Optimisation Continue", desc: "Le lancement n'est qu'un début. L'analyse algorithmique de vos leads permet d'optimiser en permanence votre conversion." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-5 animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i*100}ms`}}>
                   <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-heading font-black text-sm shrink-0 shadow-lg shadow-ocean/30">
                     {step.num}
                   </div>
                   <div>
                     <h4 className="font-heading font-bold text-foreground mb-1 mt-2">{step.title}</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                   </div>
                 </div>
               ))}
            </div>

            <div className="bg-foreground border border-border rounded-3xl p-10 relative overflow-hidden animate-in fade-in zoom-in">
              <div className="absolute inset-0 bg-gradient-to-br from-ocean/30 to-transparent pointer-events-none" />
              <div className="font-heading font-bold text-white text-xl mb-8 relative z-10">🤖 Stack Technologique Waveia</div>
              
              <div className="space-y-4 relative z-10">
                 {[
                   { icon: "🔍", text: "Analyse sémantique & intention", tag: "SEO IA" },
                   { icon: "✍️", text: "Génération de contenus ciblés", tag: "Content" },
                   { icon: "📊", text: "Tableaux de bord & reporting", tag: "Data" },
                   { icon: "🎯", text: "Ciblage prédictif Meta & Google", tag: "SEA" },
                   { icon: "⚙️", text: "Automatisation des workflows", tag: "Auto" },
                   { icon: "🎨", text: "Création graphique UI assistée", tag: "Design" }
                 ].map((feat, i) => (
                   <div key={i} className="flex items-center gap-4 bg-background/10 backdrop-blur-md border border-border rounded-xl p-4 hover:bg-background/20 transition-colors">
                     <span className="text-xl">{feat.icon}</span>
                     <span className="text-sm text-white/90 font-medium">{feat.text}</span>
                     <span className="ml-auto text-[10px] font-bold px-2 py-1 bg-primary text-white rounded uppercase tracking-widest">{feat.tag}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VILLES ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Notre territoire
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
              Ancrés au Pays Basque,<br />connectés au monde.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Waveia accompagne les entreprises de la côte basque et de ses environs. Notre connaissance hyperlocale est l'atout décisif de votre SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🏛️", title: "Bayonne", desc: "Préfecture économique" },
              { icon: "🌊", title: "Biarritz", desc: "Côte atlantique premium" },
              { icon: "🏙️", title: "Anglet", desc: "Coeur résidentiel" },
              { icon: "🌿", title: "Bidart", desc: "Village basque" },
              { icon: "🏄", title: "Hossegor", desc: "Surf & lifestyle" },
              { icon: "⛵", title: "Saint-Jean-de-Luz", desc: "Port historique" },
              { icon: "🏭", title: "Boucau", desc: "Pôle industriel" }
            ].map((city, i) => (
              <div key={i} className="glass-card border border-border rounded-xl p-6 hover:border-ocean/40 transition-colors text-center">
                <div className="text-3xl mb-3">{city.icon}</div>
                <h4 className="text-base font-bold font-heading text-foreground mb-1">{city.title}</h4>
                <p className="text-xs text-muted-foreground">{city.desc}</p>
              </div>
            ))}
             <div className="glass-card bg-primary border border-ocean rounded-xl p-6 flex flex-col justify-center text-center">
                <div className="text-3xl mb-1">🌍</div>
                <h4 className="text-base font-bold font-heading text-white mb-1">France entière</h4>
                <p className="text-xs text-white/70">Nous accompagnons aussi en national.</p>
              </div>
          </div>
        </div>
      </section>

      {/* ─── PROJETS ─── */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-between items-end gap-6 mb-16">
               <div>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
                     <div className="w-5 h-[1.5px] bg-primary"></div> Cas Clients
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
                    Ils nous ont fait<br />confiance.
                  </h2>
               </div>
               <a href="/realisations" className="inline-flex items-center gap-2 bg-transparent border border-border hover:border-ocean text-foreground hover:text-ocean font-heading font-semibold text-sm px-6 py-2.5 rounded-full transition-colors">
                  Voir tous les projets <ArrowRight className="w-4 h-4" />
               </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { emoji: "🛍️", tag: "E-commerce · Bayonne", title: "Boutique en ligne basque", desc: "Création e-commerce complet + SEO local + stratégie SEA. +180% de conversions.", color: "from-blue-100 to-blue-50" },
                 { emoji: "🏨", tag: "Hôtellerie · Biarritz", title: "Hôtel Boutique Premium", desc: "Refonte identité visuelle + site web + campagnes Meta Ads. Taux d'occupation +35%.", color: "from-amber-100 to-amber-50" },
                 { emoji: "🏄", tag: "Sport · Hossegor", title: "École de surf 360°", desc: "Création web, SEO local GMB et shooting graphique. Position #1 acquise.", color: "from-emerald-100 to-emerald-50" },
                 { emoji: "🍽️", tag: "Restauration · Anglet", title: "Restaurant Gastronomique", desc: "Site vitrine élégant et optimisation GMB. Réservations web multipliées par 2,5.", color: "from-rose-100 to-rose-50" },
                 { emoji: "🏠", tag: "Immobilier · St-Jean-de-Luz", title: "Agence immobilière web", desc: "Plateforme sur-mesure, connectée aux API + leads Ads. +210 leads / mois.", color: "from-violet-100 to-violet-50" },
                 { emoji: "💆", tag: "Bien-être · Bidart", title: "Centre Spa & Booking", desc: "Identité graphique complète + site de réservation direct. Carnet complet en 6 semaines.", color: "from-orange-100 to-orange-50" }
               ].map((p, i) => (
                 <div key={i} className="glass-card border border-border rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                   <div className={`h-[200px] w-full bg-gradient-to-br ${p.color} flex items-center justify-center text-6xl relative`}>
                     {p.emoji}
                     <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                       {p.tag}
                     </div>
                   </div>
                   <div className="p-6">
                     <h3 className="font-heading font-bold text-foreground text-lg mb-2">{p.title}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                     <span className="text-sm font-semibold text-ocean flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                        Découvrir <ArrowRight className="w-3 h-3" />
                     </span>
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="bg-gradient-to-br from-ocean to-purple-600 rounded-[2rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white relative z-10">Prêt à passer à<br />la vitesse supérieure ?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 relative z-10 text-lg">Échangeons 30 minutes sur votre projet et votre situation. Nous vous donnons un avis transparent et une stratégie concrète — sans engagement.</p>
              
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <a href="#contact" className="inline-flex items-center gap-2 bg-white text-ocean font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg">
                  📞 Réserver un appel gratuit
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 bg-transparent text-white text-sm font-heading font-bold px-7 py-3.5 rounded-full border-2 border-border hover:border-white transition-colors">
                  Configurer mon projet
                </a>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
