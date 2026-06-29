"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Camera, Box, UserCheck, Briefcase, Building2, Image as ImageIcon, Sparkles } from 'lucide-react';

export function PhotographieLanding() {
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
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              Direction Photographique — Pays Basque
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Des visuels qui subliment et<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                déclenchent l'achat.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Une image floue vue par 1000 personnes, c'est 1000 clients perdus. Du <strong>Packshot E-commerce</strong> net sous tous les angles au <strong>Reportage Métier</strong> immersif, nous capturons l'essence de votre marque professionnelle pour instaurer la confiance et augmenter vos conversions.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Planifier un Shooting <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir la méthode
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Haute Définition</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+5k</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Packshots produits</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">48h</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Retouches Post-prod</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">360°</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Droits Cédés</span>
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
          {Array(3).fill(['Packshot E-commerce', 'Portrait Corporate', 'Reportage Métier', 'Architecture & Locaux', 'Photographie Culinaire', 'Post-Production HDR']).flat().map((item, i) => (
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
              Vos visuels vous coûtent de l'argent <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">quotidiennement</em> si…
            </h2>
            <p className="text-lg text-muted-foreground font-light">Ces 4 scénarios sont la preuve que votre banque d'images freine votre croissance et entame la confiance de vos futurs acheteurs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              { icon: '📉', title: 'Votre Taux de Retour E-commerce explose', desc: 'Des photos de produits mal éclairées ou sans zoom suffisant trompent vos clients sur la matière ou la couleur. Le résultat ? Ils vous renvoient la marchandise et détruisent votre marge.' },
              { icon: '📸', title: 'Le Smartphone au lieu du Studio', desc: 'Vous utilisez un iPhone pour asseoir votre autorité professionnelle. La limite de ces capteurs se voit (flous d\'arrière-plan logiciels ratés, compression, mauvaise dynamique en basse lumière).' },
              { icon: '🤖', title: 'Abus de Banques d\'Images (Shutterstock)', desc: 'Des mannequins au sourire parfait qui ne travaillent pas chez vous. Vos prospects reconnaissent ces images : votre marque manque d\'authenticité et ils doutent de votre existence réelle.' },
              { icon: '👻', title: 'L\'Équipe Inconnue (Marque Employeur Morte)', desc: 'Impossible de recruter de bons talents si votre page "Qui sommes-nous" est une accumulation de vieux selfies étirés. Vous ne donnez pas l\'image d\'une entreprise moderne où il fait bon travailler.' }
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
              Organiser mon Diagnostic Photo →
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Formules Photo & Studio
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Investissez dans la <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">confiance visuelle.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light">Nous créons bien plus que des clichés. Nous constituons la banque visuelle centrale qui nourrira votre site, vos réseaux, et vos présentations.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            <div className="glass-card border border-border rounded-2xl p-10 relative">
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Catalogue</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Packshot E-commerce</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">Sur Devis <span className="text-base text-muted-foreground font-normal">/ selon volume</span></div>
              <p className="text-sm text-muted-foreground mb-8">Idéal pour les boutiques en ligne. Nous valorisons vos produits avec des angles constants, découpés et éclairés avec la pureté du studio.</p>
              
              <ul className="space-y-4 mb-10">
                {['Mise en place de la charte lumière e-commerce', 'Shooting fond blanc avec détourage HDR', 'Vues multi-angles (Détails matières/texture)', 'Exports web-optimisés (WebP compressé)', 'Livrables colorimétriques garantis sans distorsion'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Shooter mes produits →</a>
            </div>

            <div className="glass-card border-ocean/40 bg-[linear-gradient(160deg,rgba(14,165,233,0.07)_0%,var(--glass-bg)_60%)] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-purple-500"></div>
              <div className="inline-block bg-ocean/10 border border-ocean/30 text-ocean text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Immersion Reportage</div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Marque Employeur & Corporate</h3>
              <div className="text-4xl font-extrabold font-heading text-ocean mb-4">Sur Devis <span className="text-base text-muted-foreground font-normal">/ la demi-journée</span></div>
              <p className="text-sm text-muted-foreground mb-8">Amenez les futurs acheteurs ou talents "en coulisses". Nous capturons vos locaux, vos portraits professionnels et le dynamisme de votre métier.</p>
              
              <ul className="space-y-4 mb-10">
                {['Reportage sur site (Lumière naturelle & Flash)', 'Portraits de direction et trombinoscope équipe', 'Photographie d\'Architecture (Grand Angle)', 'Captures d\'ambiance et "Lifestyle Entreprise"', 'Retouches haut-de-gamme et étalonnage global', 'Droits illimités pour Site & Réseaux Sociaux'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {item}</li>
                ))}
              </ul>
              <a href="#contact" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] flex w-full justify-center items-center gap-2 font-heading font-bold text-[0.95rem] py-3.5 rounded-full transition-all text-center">Planifier un reportage sur site →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Périmètre d'Intervention
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Une direction photographique <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">pour tous les secteurs</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light">Notre équipe couvre la quasi-totalité des besoins esthétiques des entreprises modernes, avec des équipements de pointe (Plein format, optiques premium).</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: <Box className="w-6 h-6"/>, title: 'Packshot E-commerce', desc: 'Des photos de produits d\'une netteté clinique, isolées sur fond blanc ou texturé. Détails des matériaux, des coutures ou des reflets conçus pour rassurer avant l\'ajout au panier.' },
              { icon: <UserCheck className="w-6 h-6"/>, title: 'Portrait Corporate', desc: 'Marque employeur et équipe. Des portraits qui inspirent autorité et sympathie. Éclairage d\'entreprise soigné pour Linkedin, votre site, ou l\'annuaire presse.' },
              { icon: <Briefcase className="w-6 h-6"/>, title: 'Reportage Métier', desc: 'L\'immersion de votre savoir-faire. Nous documentons les gestes de vos techniciens, artisans ou ingénieurs pour rendre votre offre de services palpable et authentique.' },
              { icon: <Building2 className="w-6 h-6"/>, title: 'Architecture & Lieux', desc: 'Photographie d\'intérieurs à grande dynamique (HDR) et traitement de la distorsion optique pour valoriser vos bureaux, vitrines commerciales ou réceptions d\'hôtels.' }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Le poids visuel dans la <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">balance décisionnelle</em></h2>
            <p className="text-lg text-muted-foreground font-light">La différence entre transmettre l'amateurisme et sublimer l'excellence réelle de vos produits.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            <div className="glass-card bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">❌ Photos Amateurs</span>
                <h3 className="text-xl font-bold font-heading text-foreground">Effondrement de la valeur</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Faux reflets et couleurs faussées (balances des blancs mal gérées)",
                  "Proportions irréalistes créant la frustration après déballage",
                  "Méfiance systématique et besoin rassurant (nombreux appels au SAV)",
                  "Candidatures en baisse face à une entreprise qui paraît austère",
                  "Taux d'abandon panier sur e-commerce culminant à des sommets",
                  "Impossible d'imprimer vos propres images pour des brochures car trop petites"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-b border-border pb-3">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
             <div className="glass-card bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">✅ Direction Wave IA</span>
                <h3 className="text-xl font-bold font-heading text-foreground">Catalyseur de Confiance</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Homogénéité parfaite de vos fiches produits E-commerce",
                  "Couleurs étalonnées et conformes à la réalité physique du produit",
                  "Portrait des dirigeants incarnant immédiatement la fiabilité",
                  "Baisse spectaculaire des retours colis grâce à la précision visuelle",
                  "Banque d'images propriétaire illimitée pour tous vos réseaux sociaux",
                  "Haute Définition pour impression massive 4 par 3 sans aucune perte"
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">La logistique derrière la <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">Photo Parfaite</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Nous rationalisons le shooting pour perturber le moins possible vos équipes. Un workflow en 4 actes qui laisse le hasard à la porte.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto mt-10">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent"></div>
            
            {[
              { num: "01", title: "Repérage & Plan de Shoot", desc: "Compréhension de vos contraintes. Nous définissons la direction artistique, la charte lumière attendue, les accessoires nécessaires et préparons la fiche logistique." },
              { num: "02", title: "Le Shooting sur Set", desc: "Notre matériel d'éclairage de pointe se déploie. Contrôle direct (tethering) : les images atterrissent sur notre iPad/PC, permettant une validation en temps réel avec vous de l'angle et des contrastes." },
              { num: "03", title: "Post-Production (Retouche & Étalonnage)", desc: "Développement des fichiers RAW. Correction calorimétrique, gommage des impuretés (dépoussiérage des produits), détourage à la plume (Packshot) et harmonisation de la colorimétrie globale." },
              { num: "04", title: "Livraison Opti-Web et Cession", desc: "Vos visuels vous sont livrés en très haute définition, mais également via une copie pré-compressée allégée (WebP, JPG) pour ne jamais ralentir le chargement de votre Site." }
            ].map((p, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative z-10 w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full glass-card border border-border flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-background/80 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
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
               Performances Visuelles
            </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">Des résultats qui <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">parlent aux acheteurs</em></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:rounded-2xl lg:overflow-hidden lg:border lg:border-border glass-card">
            {[
              { val: "30%", label: "Hausse moyenne du Taux d'Ajout au panier" },
              { val: "OUI", label: "Garantie chromatique (fidélité couleur exacte)" },
              { val: "+40M", label: "De pixels de détails par photographie" },
              { val: "100%", label: "Droits d'utilisation cédés" }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">Ce qui sépare la prise de vue <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">de la conversion absolue</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-16">Nous ne sommes pas de simples cadreurs. Nous connectons l'acte photographique à l'expérience utilisateur (UX) pour concevoir l'image comme un bouton de vente subliminal.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { tag: "E-Commerce natif", title: "Format & Compression Optimisés", desc: "La majorité des photographes livre des fichiers destructeurs pour la vitesse web (JPG de 15Mo). Wave IA compresse algorithmiquement ou convertit en NextGen HD (WebP/AVIF). La beauté sans perdre sur Lighthouse." },
              { tag: "Direction Artistique", title: "Savoir-faire Stylisme", desc: "Placer le produit sur fond blanc ne suffit la plupart du temps plus. Gérer les ombres portées, l'ajout d'environnements (Props) et la texture est capital. Notre œil ne se focalise pas que sur l'appareil photo, mais sur le set." },
              { tag: "Tethering", title: "Contrôle Direct sur Écran", desc: "Dites 'fini' aux surprises après les shoots. L'appareil est branché au moniteur logiciel sur place. Vos directeurs vérifient immédiatement chaque pliure du costume ou l'éblouissement d'une fiole de parfum en temps réel." },
              { tag: "Liberté", title: "Une vraie banque locale centralisée", desc: "Il est inutile d'éparpiller votre budget chez 5 prestataires différents. Packshot E-com, Shooting Team, Instagram ou Couvertures de magazines, Wave IA mutualise votre banque d'images pour homogénéiser vos univers print et web." }
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
               <div className="w-5 h-[1.5px] bg-primary"></div> Déplacement Photograhe
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading mb-3">Interventions Corporate & Studio <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">au Pays Basque</em></h2>
            <p className="text-sm text-muted-foreground">Notre matériel se déploie dans vos murs, ou vos produits voyagent jusqu'à notre studio.</p>
          </div>
          <div className="flex flex-wrap gap-3">
             {['📍 Bayonne', '📍 Biarritz', '📍 Anglet', '📍 Bidart', '📍 Hossegor', '📍 Saint-Jean-de-Luz', '📍 Boucau', '📍 Hendaye', '📍 Capbreton', '📍 Paris', '📦 Envoi de Produits par Colis'].map(c => (
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
               Foire Aux Questions Shooting
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Vos interrogations classiques <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">décryptées</em></h2>
          </div>
          
          <div className="space-y-3">
            {[
              { q: 'Pouvons-nous vous expédier nos produits pour du Packshot E-commerce ?', a: "Absolument. Si la distance au Pays Basque l'exige, beaucoup de nos clients nous expédient les lots de produits étiquetés par transporteur (Colissimo, UPS). Nous réalisons les shootings sur modèle / mannequin ou de nature morte dans nos locaux avant de vous réexpédier vos produits complets." },
              { q: 'Qui possède les droits sur les photos générées ?', a: "À réception de la rémunération contractuelle finale de la prestation, vous profitez de l'intégralité des droits patrimoniaux et d'exploitations de nos œuvres, cessions mondiales à des fins de web (internet), distribution physique ou sociale." },
              { q: 'Fournissez-vous le stylisme et les mannequins ?', a: "La mise en scène (props, décors, éclairages) fait intrinsèquement partie de la valeur de notre expertise. Si un besoin de direction artistique ultra-exclusif est en jeu pour le mannequinat, nous souscrivons avec nos directeurs de casting." },
              { q: 'Combien de temps avant la remise des photos pour mon site internet ?', a: "Selon l'amplitude du projet, les aperçus qualitatifs arrivent sous 48h. Si le shooting inclut un détourage méticuleux massif, par exemple pour 250 flacons, le cycle Post-production dure alors 7 à 10 jours environ." },
              { q: 'Dois-je redimensionner moi-même les prises avant de les publier web ?', a: "Non, c'est ce qui nous différencie. Nous calculons tous nos exports pour le web. Vous obtenez un dossier de stockage en très haute résolution pour impressions massives, mais également un dossier annexe WebReady ultra-Léger afin de ne pas plomber la performance technique Google ou Shopify." },
              { q: 'Que faire de mon équipe très peu à l\'aise devant l\'appareil ?', a: "80% de nos missions de portraits Corporate s'engagent face à du personnel angoissé. La direction photographique inclut la psychologie : du temps, un climat de confiance détendu, de la musique, et les astuces pour faire ressortir une aisance naturelle qu'ils ne pensaient pas avoir." }
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
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6">Capturez votre véritable identité <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">dès aujourd'hui</em></h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">Réduisez vos invendus et éblouissez vos prospects au premier clic. Notre directeur de création échange avec vous pour comprendre les contraintes techniques du shooting à réaliser.</p>
            
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
                 Devis expédié sous 24h ouvrées
               </div>
            </div>
          </div>
          
          <div className="glass-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean to-purple-500"></div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Décrivez-nous votre shooting photo</h3>
            <p className="text-sm text-muted-foreground mb-6">Soyez précis sur la volumétrie (nombre d'articles ou d'employés) et la localisation.</p>
            
            <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Prénom</label>
                    <input type="text" placeholder="Eric" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nom</label>
                    <input type="text" placeholder="Martin" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
                  </div>
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email professionnel</label>
                  <input type="email" placeholder="eric@entreprise.fr" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Téléphone</label>
                  <input type="tel" placeholder="06 00 00 00 00" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" />
               </div>
               <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Type de prestation ciblée</label>
                  <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors">
                     <option>Packshot / Fiches Produits E-commerce</option>
                     <option>Portraits Équipe & Trombinoscope</option>
                     <option>Reportage Métier Instutionnel</option>
                     <option>Architecture intérieure / extérieure</option>
                  </select>
               </div>
               <button type="button" className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] w-full font-heading font-bold py-3.5 rounded-full mt-4 transition-transform hover:-translate-y-0.5">
                  Organiser ma Prise de vue ✦
               </button>
               <p className="text-center text-xs text-muted-foreground/70 mt-2">Échange logistique et estimation 100% gratuits.</p>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
