"use client";

import React, { useState } from 'react';
import { ArrowRight, Search, MapPin, Star, Link as LinkIcon, Target, TrendingUp, BarChart, PenTool } from 'lucide-react';
import { Link } from 'next-view-transitions';

export function SeoSiloLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  // Schema.org for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien de temps faut-il pour voir les résultats du Référencement Naturel (SEO) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le SEO est un investissement. Généralement, les premières améliorations significatives de trafic apparaissent entre 3 et 6 mois après l'implémentation des optimisations techniques et du contenu stratégique. Tout dépend de la concurrence de votre secteur."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre le SEO Local et le SEO Classique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le SEO Local cible spécifiquement les internautes cherchant des services dans une zone géographique précise (ex: 'plombier Bayonne'). Il s'appuie massivement sur Google My Business et les annuaires locaux, offrant des résultats de conversion souvent supérieurs au SEO national."
        }
      },
      {
        "@type": "Question",
        "name": "Puis-je arrêter le SEO une fois en première page de Google ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non. Le référencement est une course d'endurance. Vos concurrents continueront de publier du contenu et d'obtenir des liens. Si vous stoppez vos efforts, votre position s'effritera inéluctablement dans les mois suivants."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que le Netlinking préconisé par Wave IA ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le netlinking (l'acquisition de liens retours ou backlinks) consiste à obtenir des liens depuis des sites d'autorité vers le vôtre. C'est l'un des trois piliers fondamentaux de l'algorithme Google car cela prouve que votre site est digne de confiance."
        }
      }
    ]
  };

  return (
    <div className="w-full relative z-10 pt-20">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll-left 25s linear infinite;
        }
      `}} />

      {/* ─── BLOC 1 : HERO HEADER ─── */}
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden pt-[70px]">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-ocean rounded-full animate-pulse-glow" />
              Agence SEO & Référencement — Pays Basque & France
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Dominez les résultats Google &<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Monopolisez votre marché.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Être invisible sur le web est la première cause de mortalité des entreprises. Ne subissez plus les algorithmes : <strong>nous piratons légalement la matrice Google</strong> pour vous hisser au somme des résultats, là où 80% des clics sont générés.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact-final" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Auditer mon SEO (Gratuit) <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#solutions" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir nos leviers d'acquisition
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">Top 3</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Sur vos requêtes</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+300%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Trafic Organique</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">10X</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">ROI Long Terme</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOC 2 : L'ÉDITO SEO ─── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
           <h2 className="text-2xl md:text-4xl font-extrabold font-heading mb-6 leading-tight">
             Faites de la recherche Google votre levier d'acquisition <em className="not-italic text-ocean">le plus rentable</em>
           </h2>
           <p className="text-lg text-muted-foreground leading-relaxed">
             Contrairement à la publicité payante où votre visibilité s'arrête net dès que vous cessez de payer, le référencement naturel (SEO) construit les fondations d'un empire numérique persistant. Chez Wave IA, nous orchestrons une domination sémantique et d'autorité. Nous alignons l'architecture technique de votre site, la richesse de votre contenu et la puissance de votre netlinking avec les exigences draconiennes des moteurs de recherche. Les internautes ont besoin de vos services d'urgence : notre seule mission est de garantir que vous soyez l'unique expert à qui ils accorderont leur clic décisif.
           </p>
        </div>
      </section>

      {/* ─── BLOC 3 : HUB DE MAILLAGE INTERNE ─── */}
      <section id="solutions" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div> Nos Leviers d'Acquisition
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Une présence organique conçue <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">pour la conversion</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Ne priez plus pour trouver des clients. Placez-vous mathématiquement sur leur chemin de navigation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Search className="w-6 h-6" />, title: 'Audit SEO Complet', desc: 'Diagnostic technique complet des facteurs bloquants pour libérer le potentiel de votre site.', link: '/referencement-seo/audit-seo-gratuit' },
              { icon: <MapPin className="w-6 h-6" />, title: 'SEO Local & Maps', desc: 'Dominez votre zone de chalandise pour capter tous les clients à proximité immédiate.', link: '/referencement-seo/local' },
              { icon: <Star className="w-6 h-6" />, title: 'Google My Business', desc: 'Optimisation chirurgicale de votre fiche établissement pour garantir le fameux pack Local (Top 3).', link: '/referencement-seo/google-my-business' },
              { icon: <LinkIcon className="w-6 h-6" />, title: 'Stratégie Netlinking', desc: 'Acquisition de backlinks à fort TrustFlow pour prouver à Google que vous êtes l\'autorité de votre secteur.', link: '/referencement-seo/netlinking' }
            ].map((svc, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-7 hover:-translate-y-2 hover:border-ocean/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start group">
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 text-ocean flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{svc.desc}</p>
                <Link href={svc.link} className="mt-6 text-sm font-bold text-ocean flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Découvrir ce service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 4 : LA MÉTHODE WAVE IA ─── */}
      <section className="py-24 bg-card border-y border-border">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-ocean"></div> Performance Maximisée
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Notre protocole Scientifique : <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Le Hack d'Autorité</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Fini le SEO à l'aveugle. Nous cartographions les mots-clés transactionnels, restructurons techniquement vos pages et appliquons la méthode sémantique qui plaît à l'algorithme.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent z-0"></div>
            
            {[
              { num: "01", icon: <Target className="w-5 h-5"/>, title: "Keyword Mapping & Intentions", desc: "Analyse des requêtes à haute valeur ajoutée. Nous ne visons pas seulement le trafic, nous ciblons les mots-clés 'intention d'achat' pour générer de vraies transactions." },
              { num: "02", icon: <TrendingUp className="w-5 h-5"/>, title: "Cocon Sémantique", desc: "Architecture de votre contenu tel que Google l'exige. Nous tissons un réseau logique d'articles et de pages de services pour sculpter votre 'PageRank' en profondeur." },
              { num: "03", icon: <BarChart className="w-5 h-5"/>, title: "Optimisations Techniques (On-Site)", desc: "Performance Google Core Web Vitals, nettoyage du code, gestion des balises (Hn, Meta), maillage interne strict et suppression totale des facteurs bloquant le crawl des bots Google." },
              { num: "04", icon: <LinkIcon className="w-5 h-5"/>, title: "Croissance de l'Autorité (Off-Site)", desc: "Acquisition de liens externes (Backlinks) organiques de haute qualité pour décupler la fiabilité perçue de votre domaine par Google (E-E-A-T)." }
            ].map((step, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative z-10 w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full glass-card border flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-background/80 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed md:w-[90%]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* ─── BLOC 5 : PREUVE SOCIALE ─── */}
      <section className="py-24 text-center">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               Nos Cas d'École SEO
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">Ils génèrent des leads en continu <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">grâce à Wave IA</em></h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-8 border border-border rounded-2xl flex flex-col items-center">
                 <div className="text-4xl mb-4 opacity-50">🛠️</div>
                 <p className="italic text-muted-foreground mb-6">"Invisible de Google Localement, j'étais forcé de payer des pubs onéreuses pour combler mon planning de devis. Après un refinancement local et technique par Wave IA, mon numéro pro sonne sans rien payer."</p>
                 <div className="font-bold text-foreground">Artisan BTP (Pays Basque)</div>
                 <div className="flex gap-4 mt-6 border-t border-border pt-6 w-full justify-center">
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">Top 1</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Pack Google Maps</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">+450%</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Vues de la Fiche</div>
                    </div>
                 </div>
              </div>

              <div className="glass-card p-8 border border-border rounded-2xl flex flex-col items-center">
                 <div className="text-4xl mb-4 opacity-50">⚖️</div>
                 <p className="italic text-muted-foreground mb-6">"Notre cabinet subissait un secteur ultra-saturé. Leur stratégie de contenus et leur plan de Netlinking strict nous ont imposés en Top 3 sur des requêtes juridiques nationales majeures en 8 mois."</p>
                 <div className="font-bold text-foreground">Cabinet d'Avocats National</div>
                 <div className="flex gap-4 mt-6 border-t border-border pt-6 w-full justify-center">
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">+25 Kws</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">En Première Page</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">x4</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Contacts B2B</div>
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* ─── BLOC 6 : LES PILIERS DE LA PERFORMANCE SEO ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-ocean"></div> Architecture du Triomphe
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Les 4 points cardinaux <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">du Référencement</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Ignorer l'un d'eux, c'est comme conduire une voiture à trois roues face à des concurrents pilotant des dragsters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Search />, title: "Technique (On-Site)", desc: "Performance serveur (Vitesse), propreté absolue du code HTML, balisage Schema.org correct et architecture en silos lisible pour les robots de crawl." },
              { icon: <PenTool />, title: "Rédactionnel (Sémantique)", desc: "Des corpus de mots étudiés pour répondre spécifiquement à la requête d'intention (Rich Snippets, cocon sémantique dense)." },
              { icon: <LinkIcon />, title: "Autorité (Off-Site)", desc: "L'art du Netlinking. Google considère chaque lien d'un autre site vers le vôtre (Backlink) comme un vote de confiance mesuré par le TrustFlow." },
              { icon: <MapPin />, title: "Signal Local", desc: "La parfaite intégration de la présence de votre marque dans votre zone géographique pour happer le consommateur immédiat." }
            ].map((p, i) => (
              <div key={i} className="glass-card border border-border rounded-xl p-6 hover:border-ocean/40 transition-colors bg-background/50">
                <div className="w-10 h-10 rounded-lg bg-ocean/10 text-ocean flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 7 : FAQ ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
             <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               Foire Aux Questions SEO
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Vos interrogations <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">clarifiées</em></h2>
          </div>
          
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq: any, i: number) => (
              <div key={i} className="glass-card border border-border rounded-2xl overflow-hidden hover:border-ocean/30 transition-colors">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 flex justify-between font-heading font-extrabold text-foreground text-left items-center group"
                >
                  <h3 className="m-0 text-base">{faq.name}</h3>
                  <span className={`text-ocean text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : 'group-hover:scale-110'}`}>+</span>
                </button>
                <div className={`px-6 text-sm text-muted-foreground leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  {faq.acceptedAnswer.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 8 : LE CONTENT SEO DEEP DIVE ─── */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
           <details className="group glass-card border border-border rounded-2xl p-6 cursor-pointer outline-none">
              <summary className="font-heading font-bold text-lg text-ocean flex justify-between items-center outline-none list-none marker:hidden">
                Guide approfondi des enjeux du Référencement Naturel en 2026
                <span className="group-open:-rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="mt-6 prose prose-slate prose-invert max-w-none text-sm text-muted-foreground leading-relaxed">
                <p>
                  S'engager sur la voie de la première place Google n'a plus rien à voir avec le bourrage de mots-clés d'il y a 10 ans. Aujourd'hui, on parle de <strong>référencement holistique</strong> où l'expérience de l'utilisateur (UX), la crédibilité perçue (critères E-E-A-T) et la robustesse purement technique du serveur convergent vers la même finalité. Pour une <strong>stratégie SEO performante au Pays Basque</strong> comme pour le niveau national, ignorer un seul facteur c'est laisser le boulevard grand ouvert à ses redoutables concurrents.
                </p>
                <p>
                  Par l'utilisation de l'intelligence artificielle appliquée à la data SEO chez Wave IA, nous ne nous basons plus sur des hypothèses, mais sur du profilage algorithmique pur. Nous analysons les failles sémantiques qui créent les décalages de positionnement, nous orchestrons du <strong>Netlinking de qualité</strong> avec des sites contextuellement proches pour injecter du "Link Juice" vers vos landing pages (les cocons sémantiques). Si vous devez opérer dans un rayon local, la synergie puissante entre <strong>Google My Business</strong> et l'optimisation géo-localisée (SEO Local) des contenus de votre site devient l'arme fatale prioritaire pour l'acquisition client immédiate.
                </p>
                <p>
                  Dans l'ère numérique contemporaine, la présence n'est pas un concept, c'est un métier d'expert. Confiez les fondations technico-sémantiques de votre site à des consultants obnubilés par la statistique et l'évolution constante des algorithmes (core updates). Chaque position conquise est un rentier silencieux générant un flux de clientèle pour votre structure : investir dans du SEO de façon drastique est proportionnellement plus ROIste que toute autre manœuvre d'acquisition payante (Ads) sur le long terme.
                </p>
              </div>
           </details>
        </div>
      </section>

      {/* ─── BLOC 9 : CTA FINAL ─── */}
      <section id="contact-final" className="py-24 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none blur-[60px]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">
            Prêt à récupérer <em className="not-italic text-ocean">vos clients perdus</em> ?
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-10 max-w-2xl mx-auto">
            Demandez dès à présent votre Audit technique gratuit complet. Un consultant analysera méticuleusement vos freins de référencement.
          </p>
          
          <div className="glass-card max-w-xl mx-auto p-8 border border-border rounded-2xl bg-background/50 backdrop-blur-xl">
             <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="sr-only">Votre Nom</label>
                     <input type="text" placeholder="Votre Nom" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                   </div>
                   <div>
                     <label className="sr-only">Email professionnel</label>
                     <input type="email" placeholder="Email professionnel" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                   </div>
                </div>
                <div>
                   <label className="sr-only">URL du site internet à analyser</label>
                   <input type="url" placeholder="L'URL complète de votre site web actuel" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                </div>
                <button type="button" className="bg-ocean text-white w-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] font-heading font-bold text-lg py-4 rounded-xl mt-4 transition-transform hover:-translate-y-0.5">
                   Lancer l'Analyse SEO 🚀
                </button>
                <p className="text-xs text-muted-foreground/70 mt-3 text-center">Échange 100% privé, sans engagement.</p>
             </form>
          </div>
        </div>
      </section>

    </div>
  );
}
