"use client";

import React, { useState } from 'react';
import { ArrowRight, Search, MapPin, Star, Link as LinkIcon, Target, TrendingUp, BarChart, PenTool, Check } from 'lucide-react';
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
        "name": "Au bout de combien de temps le SEO va-t-il impacter mon chiffre d'affaires ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le référencement naturel est la construction d'un actif à moyen et long terme. Les premiers résultats concrets (hausses de positions, premiers leads) s'observent généralement entre le 3ème et le 6ème mois. L'algorithme de Google a besoin de ce délai pour valider votre légitimité. En revanche, contrairement à la publicité payante qui s'arrête dès que vous coupez le budget, l'effort SEO continue de vous apporter des clients des années après."
        }
      },
      {
        "@type": "Question",
        "name": "Pouvez-vous me garantir la 1ère place sur Google ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, et toute agence qui vous le garantit vous ment. Google est seul maître de son algorithme. Nous garantissons en revanche une obligation stricte de moyens techniques et stratégiques. Notre ingénierie vise à capturer le trafic de requêtes très spécifiques (où l'intention d'achat est forte) pour vous positionner dans le Top 3 là où cela compte vraiment pour vos ventes, sans affronter frontalement des multinationales sur des mots-clés génériques."
        }
      },
      {
        "@type": "Question",
        "name": "L'utilisation de l'IA pour le SEO risque-t-elle de faire pénaliser mon site ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument pas, si elle est utilisée correctement. Google a officiellement statué qu'il ne pénalise pas le contenu généré par l'IA, mais le contenu de mauvaise qualité (spam). Chez Waveia, l'IA ne remplace pas la stratégie humaine : elle l'augmente. Nous l'utilisons pour analyser les données de vos concurrents à grande vitesse et structurer vos contenus. Tout est supervisé et validé par notre équipe pour vous garantir une méthode 100% sécurisée (White Hat)."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il arrêter nos campagnes de publicité (Google Ads) si on commence le SEO ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pas immédiatement. Les deux leviers sont complémentaires. Le temps que votre stratégie SEO (l'organique) prenne le relais et s'installe durablement, la publicité (le payant) permet de maintenir vos ventes à court terme. À mesure que vos positions naturelles augmenteront, nous pourrons réduire progressivement votre budget publicitaire, diminuant ainsi drastiquement votre coût d'acquisition par client."
        }
      },
      {
        "@type": "Question",
        "name": "Comment saurai-je si mon abonnement SEO est réellement rentable ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous ne vous enverrons jamais un simple rapport avec un \"nombre de visites\", car les visites ne paient pas vos charges. Nous mettons en place des outils de suivi des conversions conformes au RGPD. Chaque mois, vous saurez exactement combien de demandes de devis, d'appels téléphoniques ou de ventes directes ont été générés par le référencement naturel. Vous pilotez votre SEO sur la base de votre ROI réel."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le budget moyen pour un accompagnement SEO efficace ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le budget dépend uniquement de l'agressivité concurrentielle de votre marché et de l'état technique de votre site. Un marché local (ex: entreprise de BTP en Nouvelle-Aquitaine) ne demandera pas le même effort qu'un site e-commerce national. C'est pourquoi nous ne proposons pas de forfaits préconçus, mais nous établissons un chiffrage transparent et sur-mesure à la suite d'un pré-audit gratuit de votre écosystème."
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
      <section id="hero-landing" className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Glow & Grid Backgrounds matching WaveIA theme */}
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto py-12 md:py-24 animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean/10 border border-ocean/25 rounded-full px-4 py-1.5 text-xs font-semibold text-ocean uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
              LEVIER D'ACQUISITION
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Ne dépendez plus de la publicité.<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                Capitalisez sur Google.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Transformez les recherches de vos prospects en chiffre d'affaires pérenne. En couplant la puissance d'analyse de l'IA à une stratégie sémantique rigoureuse, nous positionnons votre entreprise exactement là où se trouve la demande de votre marché.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact-final" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Obtenir un pré-audit de mon marché <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#solutions" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Analyser nos résultats clients
              </a>
            </div>
            
            <div className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">Top 3</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Sur vos requêtes commerciales</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">+150%</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Croissance moyenne du trafic qualifié</span>
              </div>
              <div className="text-center">
                <strong className="block font-heading text-3xl font-bold text-ocean">100% Sécurisé</strong>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Méthodologie conforme à Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOC 2 : VOS LEVIERS DE VISIBILITÉ ─── */}
      <section
        id="solutions"
        className="relative py-24 lg:py-32 overflow-hidden bg-card border-y border-border"
      >
        <div className="absolute inset-0 bg-card/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_60%)] opacity-[0.04]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              VOS LEVIERS DE VISIBILITÉ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Une stratégie complète pour
              <br className="hidden sm:block" />
              <span className="font-heading italic text-ocean">
                dominer votre secteur.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Search,
                title: "L'Audit SEO & Stratégie",
                description: "La fondation de votre croissance. Nous cartographions les failles techniques de votre site et identifions les requêtes les plus rentables de votre marché.",
                gradient: "from-ocean to-purple-500",
                href: "/referencement-seo/audit-seo-gratuit"
              },
              {
                icon: MapPin,
                title: "Le SEO Local (Google)",
                description: "Capturez 100% de la demande sur votre zone géographique (Nouvelle-Aquitaine ou France). Indispensable pour générer des appels et des visites physiques.",
                gradient: "from-purple-500 to-ocean",
                href: "/referencement-seo/local"
              },
              {
                icon: PenTool,
                title: "La Sémantique & Contenu IA",
                description: "Nous déployons des cocons sémantiques puissants. La rédaction assistée par l'IA nous permet de produire massivement du contenu expert, sans sacrifier la qualité.",
                gradient: "from-ocean to-purple-500",
                href: "#contact-final"
              },
              {
                icon: LinkIcon,
                title: "Le Netlinking (Autorité)",
                description: "Obtenez des liens depuis des sites d'autorité pour prouver à Google que vous êtes le leader de votre secteur. La clé de voûte pour dépasser vos concurrents historiques.",
                gradient: "from-purple-500 to-ocean",
                href: "/referencement-seo/netlinking"
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
                          Découvrir
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
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

      {/* ─── BLOC 3 : L'AVANTAGE CONCURRENTIEL ─── */}
      <section className="py-24 relative overflow-hidden bg-background">
        {/* Background Decorators */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--ocean)_0%,transparent_40%)] opacity-[0.03]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> L'AVANTAGE CONCURRENTIEL
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-16 leading-tight">
              L'ingénierie algorithmique au service de <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">vos ventes.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                title: "Focus sur les requêtes transactionnelles",
                text: "Nous ne visons pas le trafic pour l'ego. Nous ciblons les mots-clés que tapent vos prospects lorsqu'ils sont prêts à acheter ou à demander un devis."
              },
              {
                num: "02",
                title: "L'analyse augmentée par l'IA",
                text: "Nos outils nous permettent de scanner des milliers de données concurrentielles en quelques minutes pour trouver les failles exploitables sur votre marché."
              },
              {
                num: "03",
                title: "Sécurité absolue (0 pénalité)",
                text: 'Nous appliquons des méthodes pérennes (White Hat). Pas de "bidouillage" qui risquerait de faire bannir votre site lors de la prochaine mise à jour de Google.'
              },
              {
                num: "04",
                title: "Reporting transparent",
                text: "Chaque mois, vous recevez un tableau de bord clair : évolution des positions, trafic généré et, surtout, conversions réalisées. Vous savez ce que votre SEO vous rapporte."
              }
            ].map((item, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-2 hover:border-ocean/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group bg-card backdrop-blur-sm">
                <div className="absolute -right-4 -top-6 text-[8rem] font-black font-heading text-ocean opacity-[0.03] group-hover:opacity-10 transition-opacity duration-300 pointer-events-none select-none">
                  {item.num}
                </div>
                <div className="relative z-10">
                  <div className="text-ocean font-heading font-black text-2xl mb-4">
                    {item.num}.
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-4 leading-tight group-hover:text-ocean transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOC 4 : NOTRE FEUILLE DE ROUTE ─── */}
      <section className="py-24 bg-card border-y border-border">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> NOTRE FEUILLE DE ROUTE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 leading-tight">
              Un plan d'attaque structuré, <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">mois après mois.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-16">
              Le SEO est un marathon. Il faut avoir un plan d'action balisé sur plusieurs mois pour garantir des résultats durables.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent z-0"></div>
            
            {[
              { num: "01", icon: <Search className="w-5 h-5"/>, title: "Audit & Réparations [ Mois 1 ]", desc: "Remise à neuf technique de votre site. Nous corrigeons tous les facteurs bloquants pour l'indexation de Google." },
              { num: "02", icon: <Target className="w-5 h-5"/>, title: "Stratégie Sémantique [ Mois 1 ]", desc: "Choix des combats à mener et des mots-clés à cibler. Nous cartographions les requêtes à forte intention d'achat." },
              { num: "03", icon: <PenTool className="w-5 h-5"/>, title: "Déploiement du contenu [ Mois 2 et + ]", desc: "Création des pages stratégiques accélérée par nos process IA. Nous développons vos cocons sémantiques puissants." },
              { num: "04", icon: <LinkIcon className="w-5 h-5"/>, title: "Netlinking & Ajustements [ En continu ]", desc: "Acquisition de liens d'autorité et pilotage mensuel des positions. La clé de voûte pour dépasser vos concurrents." }
            ].map((step, i) => (
              <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
                <div className="w-14 h-14 rounded-full border border-ocean/30 flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-card relative z-20 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                  {step.num}
                </div>
                <div className="pt-2 relative z-10">
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

      {/* ─── BLOC 6 : FAQ ─── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
             <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               TRANSPARENCE TOTALE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-4">Les réponses à vos enjeux de <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">rentabilité.</em></h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Le référencement naturel souffre de beaucoup d'idées reçues et de promesses intenables. Voici des réponses claires, sans jargon, pour vous aider à prendre la bonne décision d'investissement.
            </p>
          </div>
          
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, i: number) => (
              <div key={i} className="glass-card border border-border rounded-2xl overflow-hidden hover:border-ocean/30 transition-colors bg-background/50 backdrop-blur-sm">
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
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
            Prêt à capter la <em className="not-italic text-ocean">demande existante</em> sur votre marché ?
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Arrêtez de laisser vos concurrents récolter les clients qui vous cherchent. Échangeons sur vos enjeux de rentabilité et analysons le potentiel de votre secteur. Un premier diagnostic gratuit, en visio ou dans nos locaux de Nouvelle-Aquitaine.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "Pré-audit concurrentiel",
              "Chiffrage transparent",
              "Zéro engagement"
            ].map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground bg-card border border-border px-4 py-2 rounded-full shadow-sm">
                <Check className="w-4 h-4 text-ocean" />
                {badge}
              </span>
            ))}
          </div>

          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-ocean-light hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] font-heading font-bold text-lg px-8 py-5 rounded-xl transition-all hover:-translate-y-1">
            Réserver mon pré-audit stratégique
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
