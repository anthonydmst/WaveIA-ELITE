"use client";

import React, { useState } from 'react';
import { ArrowRight, Palette, Share2, Camera, Video, Target, TrendingUp, MonitorPlay, PenTool, Check } from 'lucide-react';
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
        "name": "Un \"beau\" logo ou une \"belle\" vidéo vont-ils vraiment augmenter mon chiffre d'affaires ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'esthétique seule ne vend pas. En revanche, la confiance fait vendre. Si votre produit est excellent mais que votre image renvoie un signal d'amateurisme, vos prospects douteront et négociant vos prix à la baisse. Nos créations (identité, vidéos, photos) ne sont pas conçues pour être \"belles\", elles sont conçues pour être statutaires. Elles rassurent instantanément vos interlocuteurs, raccourcissent vos cycles de vente et vous permettent de justifier pleinement votre positionnement tarifaire."
        }
      },
      {
        "@type": "Question",
        "name": "Je n'ai pas de temps à consacrer à la communication. Quelle sera ma charge de travail ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous savons que votre temps doit être dédié à la direction de votre entreprise. Notre méthodologie est pensée pour minimiser votre charge mentale. En dehors de l'atelier de cadrage initial (pour comprendre votre métier et vos objectifs) et des points de validation clés, nous sommes totalement autonomes sur l'exécution. Vous ne subissez pas les allers-retours chronophages habituels des agences classiques."
        }
      },
      {
        "@type": "Question",
        "name": "À qui appartiennent les droits (photos, vidéos, logos) une fois la prestation terminée ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "À vous, intégralement. C'est un point de crispation fréquent avec les agences traditionnelles qui cachent souvent des frais de licences annuels. Chez Waveia, notre contrat inclut une cession complète des droits d'exploitation et de propriété intellectuelle dès le règlement final de la prestation. Vous êtes 100 % propriétaire de vos actifs de marque."
        }
      },
      {
        "@type": "Question",
        "name": "Si vous utilisez l'IA, ma communication ne risque-t-elle pas de ressembler à celle de tout le monde ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est tout l'inverse. L'Intelligence Artificielle est notre outil de production, pas notre directeur de création. La réflexion sur votre positionnement, la réalisation de vos prises de vues (vrais collaborateurs, vrais locaux) et la conception de votre identité sont strictement humaines et sur-mesure. L'IA nous sert uniquement en coulisses à exécuter plus vite (génération de code, déclinaison de formats, montage), ce qui nous permet de vous livrer un travail premium à un coût rationalisé."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il obligatoirement tout refaire depuis zéro ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non. Nous sommes pragmatiques avant d'être créatifs. Si votre logo actuel a une forte notoriété historique et qu'il nécessite juste un rafraîchissement technique (un \"restylage\"), nous le conservons. Nous n'effaçons pas votre historique pour le simple plaisir de tout refaire. L'objectif est d'optimiser l'existant pour le rendre performant, en respectant votre budget et votre histoire d'entreprise."
        }
      },
      {
        "@type": "Question",
        "name": "Comment établissez-vous vos devis et y a-t-il des coûts cachés ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous fonctionnons exclusivement au forfait, basé sur un cahier des charges strict défini lors de notre audit de cadrage. Vous savez dès le départ exactement ce que vous allez payer et ce qui sera livré. Il n'y a aucune facturation à l'heure imprévue, ni de rallonge budgétaire \"surprise\" en cours de projet. Pour nous, la transparence financière est la base indispensable d'une relation de confiance en B2B."
        }
      },
      {
        "@type": "Question",
        "name": "Sous-traitez-vous la création, les photos ou les vidéos à l'étranger pour réduire les coûts ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument pas. Le pilotage stratégique, le design, le copywriting et le montage sont gérés en interne. Pour les reportages sur le terrain (photo et vidéo), nous nous déplaçons directement dans vos locaux, ou nous faisons intervenir notre réseau restreint de partenaires locaux de confiance en Nouvelle-Aquitaine et en France. Nous refusons l'externalisation low-cost car la perte de contrôle qualité se ressentirait immédiatement sur l'image de votre entreprise."
        }
      },
      {
        "@type": "Question",
        "name": "Comment savoir si vos actions (notamment sur les réseaux sociaux) sont réellement rentables ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous ne vous présenterons jamais de rapports basés sur des indicateurs d'ego comme le nombre de \"likes\" ou de \"vues\". Ce n'est pas ce qui paie vos charges. Nous orientons notre stratégie sur le Social Selling (la vente par les réseaux). Nous mesurons l'efficacité de nos actions sur des données concrètes : évolution du nombre de contacts commerciaux qualifiés (leads entrants), volume de demandes de devis, ou encore nombre de candidatures pertinentes reçues pour vos recrutements."
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
              EXPERTISE IMAGE & COMMUNICATION
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Alignez votre image sur l'exigence de <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                votre savoir-faire.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              La perception de votre entreprise par le marché doit être à la hauteur de votre réalité opérationnelle. De la conception de votre identité visuelle à la production de vos reportages photo et vidéo, nous structurons un écosystème de communication cohérent. L'objectif est clair : asseoir votre légitimité, rassurer vos partenaires commerciaux et valoriser votre marque employeur.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact-final" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Échanger sur votre stratégie de marque <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#solutions" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Consulter nos réalisations
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+ 120 %</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">DE CONVERSION MOYENNE</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100 %</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">EXPÉRIENCE CLIENT OPTIMISÉE</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+ 45 %</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">DE RÉTENTION CLIENT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOC 2 : VOS LEVIERS DE CONVERSION ─── */}
      <section id="solutions" className="relative pt-8 pb-24 lg:pt-12 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_60%)] opacity-[0.04]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              VOS LEVIERS DE CONVERSION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Quatre expertises pour structurer<br className="hidden sm:block" />
              <span className="font-heading italic text-ocean">
                votre autorité sur le marché.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Nous ne faisons pas de l'art, nous concevons des outils de vente. Chaque support de communication produit par notre équipe répond à une exigence stricte : asseoir votre crédibilité, justifier votre positionnement et fluidifier l'acte d'achat de vos prospects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Identité Visuelle & Branding",
                description: "Un simple logo ne suffit pas pour rassurer un client B2B. Nous concevons des chartes graphiques complètes et statutaires qui inspirent confiance, reflètent votre niveau d'exigence et justifient votre positionnement tarifaire face à la concurrence.",
                gradient: "from-ocean to-purple-500",
                href: "/agence-communication/identite-visuelle",
                linkText: "Structurer ma marque",
              },
              {
                title: "Réseaux Sociaux & Social Selling",
                description: "Oubliez la course inutile aux \"likes\". Nous déployons des stratégies de contenu chirurgicales (notamment sur LinkedIn) pour générer des contacts commerciaux qualifiés et renforcer votre marque employeur afin d'attirer les meilleurs talents.",
                gradient: "from-purple-500 to-ocean",
                href: "/agence-communication/reseaux-sociaux",
                linkText: "Générer des leads sociaux",
              },
              {
                title: "Shooting Photo Corporate",
                description: "Les banques d'images génériques détruisent votre authenticité. Nos photographes réalisent des reportages professionnels de vos locaux, de vos équipes et de vos processus industriels pour humaniser votre entreprise et prouver votre savoir-faire réel.",
                gradient: "from-ocean to-purple-500",
                href: "/agence-communication/photographie",
                linkText: "Humaniser mon entreprise",
              },
              {
                title: "Production Vidéo & Publicité (Ads)",
                description: "Le format le plus persuasif du marché. Du film d'entreprise institutionnel qui explique votre métier, aux vidéos publicitaires courtes et incisives calibrées pour capter l'attention et maximiser le taux de clics de vos campagnes payantes.",
                gradient: "from-purple-500 to-ocean",
                href: "/agence-communication/video",
                linkText: "Créer mon atout vidéo",
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`group relative ${
                  index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""
                }`}
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                <Link 
                  href={service.href} 
                  className="block h-full group outline-none"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl blur-md`}
                  />
                  <div className="relative h-full p-8 lg:p-10 bg-glass-bg backdrop-blur-sm rounded-2xl border border-glass-border overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)] flex flex-col items-start">
                    <div
                      className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}
                    />
                    
                    <div className="relative flex flex-col h-full z-10 w-full">
                      <div className="flex-1 w-full">
                        <h3 className="text-xl lg:text-2xl font-bold font-heading mb-4 group-hover:text-ocean transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-8 grow">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between w-full text-sm font-semibold text-ocean/70 group-hover:text-ocean transition-all duration-300 mt-auto pt-4 border-t border-glass-border group-hover:border-transparent">
                        <span className="relative">
                          {service.linkText}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-ocean group-hover:w-full transition-all duration-300" />
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 3 : EXCELLENCE OPÉRATIONNELLE ─── */}
      <section className="py-24 bg-card border-y border-border">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700 mb-16 lg:mb-20">
             <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               EXCELLENCE OPÉRATIONNELLE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              L'IA supprime l'exécution chronophage. <br className="hidden md:block"/>
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Notre équipe pilote la rentabilité.
              </em>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              La majorité des agences traditionnelles vous facturent des centaines d'heures pour des tâches techniques ou graphiques répétitives. Notre paradigme est différent : nous utilisons les modèles d'Intelligence Artificielle les plus avancés du marché pour automatiser l'exécution, afin de réinvestir 100 % de notre temps sur ce qui génère réellement des ventes : la stratégie humaine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                title: "Rationalisation des coûts et des délais",
                desc: "L'IA nous permet de générer les bases de code, d'automatiser les déclinaisons graphiques de votre identité et de traiter les données de votre marché à une vitesse inédite. Le bénéfice pour vous : un temps de production divisé par deux et un budget optimisé, sans aucune perte de qualité. Vous ne payez plus pour l'exécution basique."
              },
              {
                num: "02",
                title: "Un budget réalloué à la stratégie pure",
                desc: "Une machine ne comprendra jamais les subtilités de votre secteur d'activité ou les relations de confiance de votre réseau B2B. Le temps massif gagné sur la technique est intégralement réinvesti sur la valeur ajoutée de notre métier : l'étude de votre positionnement, la psychologie de vos acheteurs et l'ingénierie de vos offres."
              },
              {
                num: "03",
                title: "Le contrôle strict par l'expertise humaine",
                desc: "L'IA exécute, l'humain tranche. Chez Wave IA, l'automatisation est systématiquement encadrée. Aucun support de communication, aucune stratégie d'acquisition et aucune identité visuelle n'est déployée sans la validation rigoureuse de nos directeurs de création et de nos stratèges. Vous bénéficiez de la puissance de calcul de l'IA, sécurisée par le bon sens paysan et l'exigence d'une équipe locale."
              }
            ].map((card, i) => (
              <div key={i} className="glass-card border border-border bg-background/50 backdrop-blur-sm rounded-2xl p-8 lg:p-10 hover:border-ocean/40 transition-colors flex flex-col items-start relative overflow-hidden group">
                <div className="text-6xl font-heading font-black text-foreground/5 absolute -top-4 -right-2 group-hover:text-ocean/10 transition-colors duration-500 select-none">
                  {card.num}
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-4 mt-8 relative z-10">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{card.desc}</p>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* ─── BLOC 4 : MÉTHODOLOGIE D'INTERVENTION ─── */}
      <section className="py-24 bg-card border-y border-border">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-ocean"></div> MÉTHODOLOGIE D'INTERVENTION
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Aucune boîte noire. <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Une gestion de projet millimétrée.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Votre temps est précieux, c'est pourquoi notre accompagnement est structuré pour minimiser votre charge mentale. Vous restez maître des décisions stratégiques, nous pilotons l'exécution. De notre première poignée de main à l'analyse des résultats, chaque étape est jalonnée et transparente.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent z-0"></div>
            
            {[
              { num: "01", icon: <Target className="w-5 h-5"/>, title: "Audit et Cadrage Opérationnel", desc: "Nous ne commençons jamais par le design, nous commençons par votre modèle économique. Lors de cette phase, nous analysons vos offres, vos cibles, vos marges et vos concurrents directs. Nous définissons ensemble les indicateurs de performance (KPIs) qui serviront de juge de paix pour mesurer la réussite du projet.", highlight: "Livrable : Cahier des charges strict et feuille de route validée." },
              { num: "02", icon: <PenTool className="w-5 h-5"/>, title: "Conception et Stratégie de Marque", desc: "C'est la phase d'ingénierie. Nos stratèges définissent le positionnement de votre marque, les angles de votre discours (copywriting) et l'architecture de vos futurs supports de conversion (site, réseaux, visuels). Tout est pensé pour rassurer votre marché et justifier vos tarifs.", highlight: "Livrable : Maquettes, scripts vidéo ou charte éditoriale soumis à votre validation." },
              { num: "03", icon: <MonitorPlay className="w-5 h-5"/>, title: "Production Augmentée (IA & Humain)", desc: "Une fois la stratégie validée, notre équipe passe à la production. C'est ici que notre maîtrise de l'Intelligence Artificielle entre en jeu pour accélérer l'exécution technique (code, déclinaisons de formats, montage de base). Nos directeurs artistiques et développeurs supervisent chaque détail pour garantir un niveau de finition premium.", highlight: "Avantage : Des délais de livraison divisés par deux par rapport à une agence classique." },
              { num: "04", icon: <TrendingUp className="w-5 h-5"/>, title: "Déploiement et Pilotage de la Rentabilité", desc: "La mise en ligne n'est pas la fin, mais le début de l'acquisition. Nous déployons vos supports sur le marché, connectons les outils d'analyse (conformes au RGPD) et formons vos équipes si nécessaire. Surtout, nous organisons un suivi régulier pour analyser les taux de conversion et ajuster la stratégie en fonction des retours réels de vos clients.", highlight: "Avantage : Des décisions basées sur des données factuelles, et non sur des opinions." }
            ].map((step, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full border border-ocean/30 flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-card relative z-20 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                  {step.num}
                </div>
                <div className="pt-2 relative z-10">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed md:w-[90%] mb-4">{step.desc}</p>
                  <span className="inline-block px-3 py-1.5 rounded-md bg-ocean/10 border border-ocean/20 text-ocean text-sm font-semibold">
                    {step.highlight}
                  </span>
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
               RÉALISATION & IMPACT COMMERCIAL
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">Quand la perception du marché s'aligne (enfin) sur <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">votre savoir-faire.</em></h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-8 border border-border rounded-2xl flex flex-col items-center">
                 <div className="text-ocean mb-6 tracking-widest text-xl">★★★★★</div>
                 <h3 className="font-bold font-heading text-lg mb-4 text-foreground">Le décalage corrigé</h3>
                 <p className="italic text-muted-foreground mb-8">« On avait un vrai décalage entre la qualité de notre travail sur le terrain et la tête de nos supports de communication, qui faisaient vraiment datés. Waveia a remis tout ça au niveau. Le rendu est propre, cohérent, et nos commerciaux n'ont plus à s'excuser en présentant notre entreprise. Ça a clairement facilité la conclusion de nos derniers contrats. »</p>
                 <div className="font-bold text-foreground text-sm uppercase tracking-wider mt-auto">Cogérant — Secteur BTP / Industrie</div>
              </div>

              <div className="glass-card p-8 border border-border rounded-2xl flex flex-col items-center">
                 <div className="text-ocean mb-6 tracking-widest text-xl">★★★★★</div>
                 <h3 className="font-bold font-heading text-lg mb-4 text-foreground">Le soulagement opérationnel</h3>
                 <p className="italic text-muted-foreground mb-8">« Je cherchais un prestataire capable de comprendre notre métier sans qu'on doive tout leur expliquer de A à Z pendant des heures. L'équipe a vite cerné le besoin et a été très autonome sur la création de notre nouvelle identité et de la vidéo. Le résultat est carré, livré dans les temps annoncés, sans mauvaises surprises sur la facture. »</p>
                 <div className="font-bold text-foreground text-sm uppercase tracking-wider mt-auto">Dirigeant — Secteur Services B2B / Logistique</div>
              </div>
            </div>
         </div>
      </section>

      {/* ─── BLOC 6 : FAQ ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
             <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               TRANSPARENCE & ENGAGEMENTS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Les réponses claires à vos <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">enjeux opérationnels.</em></h2>
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

      {/* ─── BLOC 7 : CTA FINAL ─── */}
      <section id="contact-final" className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-ocean/5" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ocean/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none blur-[60px]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
            ÉCHANGE STRATÉGIQUE
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
            Prêt à aligner votre image sur la qualité de <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">votre savoir-faire ?</em>
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Vous avez l'expertise, les équipes et le produit. Ne laissez plus une communication vieillissante ou incohérente complexifier vos ventes et vos recrutements. Discutons de vos enjeux de croissance lors d'un premier rendez-vous de cadrage. Une analyse franche, pragmatique et orientée résultats, en visio ou directement dans vos locaux.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "Premier diagnostic de vos supports offert",
              "Chiffrage transparent et détaillé",
              "Aucun engagement commercial"
            ].map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground bg-card border border-border px-4 py-2 rounded-full shadow-sm">
                <Check className="w-4 h-4 text-ocean" />
                {badge}
              </span>
            ))}
          </div>

          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-ocean text-white hover:bg-ocean-light hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] font-heading font-bold text-lg px-8 py-5 rounded-xl transition-all hover:-translate-y-1">
            Planifier un rendez-vous de cadrage
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── BLOC 8 : MAILLAGE INTERNE ─── */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              ÉCOSYSTÈME WAVEIA
            </span>
            <h3 className="text-2xl font-bold font-heading text-foreground">
              Nos autres leviers de rentabilité
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/creation-site-internet" className="glass-card p-6 border border-border rounded-xl hover:border-ocean/40 transition-colors group flex flex-col items-center text-center">
               <h4 className="font-bold font-heading text-lg mb-2 group-hover:text-ocean transition-colors">Création Web</h4>
               <p className="text-sm text-muted-foreground">Concevez un actif digital pensé pour convertir.</p>
            </Link>
            
            <Link href="/referencement-seo" className="glass-card p-6 border border-border rounded-xl hover:border-ocean/40 transition-colors group flex flex-col items-center text-center">
               <h4 className="font-bold font-heading text-lg mb-2 group-hover:text-ocean transition-colors">Acquisition (SEO/SEA)</h4>
               <p className="text-sm text-muted-foreground">Capter la demande qualifiée sur les moteurs de recherche.</p>
            </Link>

            <Link href="/realisations" className="glass-card p-6 border border-border rounded-xl hover:border-ocean/40 transition-colors group flex flex-col items-center text-center">
               <h4 className="font-bold font-heading text-lg mb-2 group-hover:text-ocean transition-colors">Nos Réalisations</h4>
               <p className="text-sm text-muted-foreground">Consultez les cas pratiques de nos clients B2B.</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
