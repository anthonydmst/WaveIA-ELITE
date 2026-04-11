"use client";

import React, { useState } from 'react';
import { ArrowRight, Palette, Share2, Camera, Video, Target, TrendingUp, MonitorPlay, PenTool } from 'lucide-react';
import { Link } from 'next-view-transitions';

export function CommunicationSiloLanding() {
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
        "name": "Pourquoi faire appel à une agence de communication globale ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'incohérence tue la conversion. Confier votre marque à une agence 360° garantit que le logo créé s'intègre parfaitement avec votre communication sur les Réseaux Sociaux, et que la colorimétrie de vos vidéos reflète fidèlement la charte initiale. C'est l'assurance d'un message fort et unifié."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le budget moyen pour une refonte d'identité de marque ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une refonte complète de l'identité visuelle (Brand Book, Logo vectoriel, Typographie et déclinaisons) débute généralement autour de 1500€. Cela peut s'étendre en fonction des besoins de livrables précis (packagings, UI kits, supports print ou production vidéo associée)."
        }
      },
      {
        "@type": "Question",
        "name": "Les photos et vidéos réalisées m'appartiennent-elles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Wave IA cède systématiquement l'intégralité des droits patrimoniaux et d'exploitations à la livraison finale du projet. Vous êtes libre d'utiliser ces assets vitaux sur l'ensemble de vos supports, sans limitation de durée ou de pays."
        }
      },
      {
        "@type": "Question",
        "name": "Gérez-vous également le budget publicitaire des campagnes sur Meta ou TikTok ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument. Nous ne nous contentons pas de créer les visuels (Snack Content, UGC) : notre équipe Media Buying paramètre les campagnes, teste les audiences via l'A/B testing, et gère l'enveloppe publicitaire pour atteindre le CPA (Coût par Acquisition) le plus faible de votre secteur."
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
              Agence 360° & Image de Marque — Pays Basque
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Ne soyez plus une option.<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Devenez l'Évidence.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Une image banale justifie des prix banals. <strong>De l'identité visuelle à la production vidéo</strong> en passant par les Ads, nous forgeons une stratégie de marque écrasante pour vous propulser en autorité incontestée de votre marché.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact-final" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Auditer mon Image Globale <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#solutions" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Voir nos leviers 360°
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">10X</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Perception Valeur</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Homogénéité</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">CPA</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Au plus bas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOC 2 : L'ÉDITO COMMUNICATION & BRANDING ─── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
           <h2 className="text-2xl md:text-4xl font-extrabold font-heading mb-6 leading-tight">
             La communication compartimentée <em className="not-italic text-ocean">est révolue.</em>
           </h2>
           <p className="text-lg text-muted-foreground leading-relaxed">
             Si votre webdesigner ne parle pas à votre cadreur vidéo, et que votre community manager ignore les règles fixées par votre graphiste, l'internaute ressent instantanément un amateurisme pernicieux. C'est l'effet patchwork. Chez Wave IA, nous sommes le pôle créatif et stratégique unique de nos clients : une direction artistique qui irrigue la vidéo, influence le feed social, dicte le shooting produit et aligne chaque pixel. Vous parlez avec la voix d'un leader, générant la confiance nécessaire pour imposer votre modèle économique de façon impériale.
           </p>
        </div>
      </section>

      {/* ─── BLOC 3 : HUB DE MAILLAGE INTERNE (LES 4 LEVIERS) ─── */}
      <section id="solutions" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div> Écosystème Créatif
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              L'arsenal indispensable de la <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Croissance de Marque</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Arrêtez de multiplier les prestataires indépendants et rassemblez votre dynamique d'acquisition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Palette className="w-6 h-6" />, title: 'Identité Visuelle', desc: 'Création de Logo Premium, Brand Book, typographie et déclinaisons stratégiques.', link: '/agence-communication/identite-visuelle' },
              { icon: <Share2 className="w-6 h-6" />, title: 'Réseaux Sociaux & Ads', desc: 'Ligne éditoriale, croissance B2B ou B2C et gestion pointue de vos campagnes Meta/TikTok Ads.', link: '/agence-communication/reseaux-sociaux' },
              { icon: <Camera className="w-6 h-6" />, title: 'Studio Photographie', desc: 'Packshot e-commerce fond blanc, reportage métier immersif et portrait Marque Employeur.', link: '/agence-communication/photographie' },
              { icon: <Video className="w-6 h-6" />, title: 'Production Vidéo', desc: 'Motion Design 2D/3D éducatif, films Corporate, Snack content UGC et interviews.', link: '/agence-communication/video' }
            ].map((svc, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-7 hover:-translate-y-2 hover:border-ocean/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start group">
                <div className="w-12 h-12 bg-ocean/10 border border-ocean/20 text-ocean flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{svc.desc}</p>
                <Link href={svc.link} className="mt-6 text-sm font-bold text-ocean flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Ouvrir le studio <ArrowRight className="w-4 h-4" />
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
               <div className="w-5 h-[1.5px] bg-ocean"></div> Force de Frappe Totale
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              La centralisation 360° : <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Gagnez du temps</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              De l'audit de votre ancien logo jusqu'au tournage de vos employés pour TikTok, chaque étape est gérée militairement.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent z-0"></div>
            
            {[
              { num: "01", icon: <Target className="w-5 h-5"/>, title: "Stratégie, Audit & DNA", desc: "Compréhension profonde des enjeux de la marque. Nous définissons vos Persona (cibles), l'angle sémantique et les codes chromatiques qui parleront à l'inconscient de l'acheteur." },
              { num: "02", icon: <PenTool className="w-5 h-5"/>, title: "Branding (Direction Artistique)", desc: "Production du noyau design (Logo, Brandbook, Grilles UI). C'est le manuel légal qui empêchera dorénavant votre marque d'être déformée, garantissant l'effet 'Wahou' immédiat." },
              { num: "03", icon: <Camera className="w-5 h-5"/>, title: "Shooting (Assets Visuels)", desc: "Notre équipe photographie et filme vos produits (Packshot) et votre savoir-faire pour constituer une banque d'images propriétaire illimitée. Fini les banques libres de droits ringardes." },
              { num: "04", icon: <TrendingUp className="w-5 h-5"/>, title: "Diffusion & A/B Testing Ads", desc: "Création de Reels/UGC sur-mesure et lancement sur les réseaux sociaux. L'IA étudie en temps réel quel créatif convertit pour réallouer seul le budget au plus performant." }
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
               Métamorphoses de marques
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">Ils ont changé de division <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">avec Wave IA</em></h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-8 border border-border rounded-2xl flex flex-col items-center">
                 <div className="text-4xl mb-4 opacity-50">✨</div>
                 <p className="italic text-muted-foreground mb-6">"Notre e-commerce plafonnait. Le refonte brutale de l'identité associée aux nouveaux shootings Packshot UHD a modifié à elle seule le taux d'abandon du panier. Nous paraissons enfin à la hauteur du grand luxe de nos produits."</p>
                 <div className="font-bold text-foreground">Marque de Cosmétiques</div>
                 <div className="flex gap-4 mt-6 border-t border-border pt-6 w-full justify-center">
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">+45%</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Au Panier Moyen</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">100%</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">D.A Respectée</div>
                    </div>
                 </div>
              </div>

              <div className="glass-card p-8 border border-border rounded-2xl flex flex-col items-center">
                 <div className="text-4xl mb-4 opacity-50">📈</div>
                 <p className="italic text-muted-foreground mb-6">"Une méthode Media Buying incisive. Les vidéos Hooks tournées spécifiquement pour la publicité Meta (FB/Insta) ont divisé nos coûts d'acquisition de leads technologiques par deux."</p>
                 <div className="font-bold text-foreground">Éditeur Logiciel B2B</div>
                 <div className="flex gap-4 mt-6 border-t border-border pt-6 w-full justify-center">
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">CPA/2</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Coût d'Acquisition</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-heading font-bold text-2xl text-ocean">+14M</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Impressions Pubs</div>
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* ─── BLOC 6 : LES PILIERS DE LA PERFORMANCE WEB ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-ocean"></div> Architecture du Leader
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Les 4 constantes d'une marque <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">impitoyable</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Ce n'est pas parce que c'est subjectif que ça fonctionne. C'est l'unification rigoureuse de règles précises qui crééent la puissance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MonitorPlay />, title: "Omnicanalité", desc: "Le prospect vous voit sur LinkedIn, puis est retargeté par un Reels TikTok, puis finit sur votre Site. Le fil rouge reste parfait et incassable." },
              { icon: <TrendingUp />, title: "Conversion Native", desc: "La DA n'est pas juste 'belle', elle dirige l'œil. C'est le design centré sur la conversion algorithmique pure." },
              { icon: <Target />, title: "Création Intensive", desc: "Production d'une quantité massive de contenus via Motion et Tournage pour alimenter les algorithmes gourmands des réseaux sociaux." },
              { icon: <PenTool />, title: "Propriété Visuelle", desc: "Remplacement absolu des banques de stock par des assets propriétaires photographiques assurant que vous n'aurez d'égal nulle part ailleurs." }
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
               Foire Aux Questions 360
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

      {/* ─── BLOC 8 : LE CONTENT DEEP DIVE ─── */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
           <details className="group glass-card border border-border rounded-2xl p-6 cursor-pointer outline-none">
              <summary className="font-heading font-bold text-lg text-ocean flex justify-between items-center outline-none list-none marker:hidden">
                Guide complet pour centraliser votre identité d'entreprise (Communication Globale)
                <span className="group-open:-rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="mt-6 prose prose-slate prose-invert max-w-none text-sm text-muted-foreground leading-relaxed">
                <p>
                  Avoir recours à cinq indépendants différents (un graphiste pour le logo, un monteur pour les réseaux sociaux, un chef de projet pub, etc.) produit systématiquement un désastre sémantique. L'entreprise y perd sa voix fondatrice et dissipe ses investissements dans un marketing cacophonique. En tant qu'<strong>Agence de Communication 360 degrés</strong>, Wave IA regroupe l'entièreté de la chaîne créative sous l'autorité d'un Directeur Artistique unique dont la consigne est d'assurer la croissance implacable de la marque.
                </p>
                <p>
                  Dans l'ère numérique actuelle, <strong>se démarquer de la concurrence</strong> ne repose pas seulement sur un slogan bien pensé, mais sur l'omniprésence visuelle cohérente. Quand nous livrons l'<strong>Identité Visuelle</strong> (charte graphique, UI kit, palette adaptative), elle devient la base d'opération absolue. Dès lors, lorsque nos monteurs préparent le <strong>Motion Design</strong> explicatif de vos services SaaS, ils s'appuient sur cette charte. Lorsque nos stratèges paramètrent vos campagnes d'acquisition <strong>Social Ads (Meta, LinkedIn, TikTok Ads)</strong>, ils reprennent le copywriting initié.
                </p>
                <p>
                  La <strong>production vidéo</strong> et le reportage en interne de locaux ou shooting produits (Packshot) parachèvent cette boucle de domination visuelle. Plus un seul visuel n'est laissé au hasard algorithmique : tout est produit en haute résolution, compressé localement par des algorithmes récents, et formaté spécifiquement pour le confort d'exigence (9:16 mobile / 16:9 Cinema). C'est ainsi qu'on construit une Marque Employeur capable de recruter les élites, et un pipeline de vente redoutable pour balayer ses concurrents sur Google ou LinkedIn.
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
            Prêt à imprimer <em className="not-italic text-ocean">les esprits</em> ?
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-10 max-w-2xl mx-auto">
            Stoppez l'hémorragie de vos budgets publicitaires. Rassemblez votre force de frappe visuelle et laissez l'IA décupler votre conversion.
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
                   <label className="sr-only">Lien actuel de votre entreprise (Site, Insta...)</label>
                   <input type="url" placeholder="Lien actuel (Site ou Réseau Social principal)" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                </div>
                <button type="button" className="bg-ocean text-white w-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] font-heading font-bold text-lg py-4 rounded-xl mt-4 transition-transform hover:-translate-y-0.5">
                   Lancer ma métamorphose 🚀
                </button>
                <p className="text-xs text-muted-foreground/70 mt-3 text-center">Contact d'un directeur artistique sous 24h ouvrées.</p>
             </form>
          </div>
        </div>
      </section>

    </div>
  );
}
