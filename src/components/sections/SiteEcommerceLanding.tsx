import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { EcommerceConceptionSection } from './EcommerceConceptionSection';
import { EcommercePerformanceSection } from './EcommercePerformanceSection';
import { EcommerceStudioSection } from './EcommerceStudioSection';
import { EcommerceCroSection } from './EcommerceCroSection';
import { EcommerceTimelineSection } from './EcommerceTimelineSection';
import { EcommerceArchitectureSection } from './EcommerceArchitectureSection';
import { EcommerceImpactSection } from './EcommerceImpactSection';
import { EcommerceFaqSection } from './EcommerceFaqSection';
import { EcommerceCtaSection } from './EcommerceCtaSection';

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
              INGÉNIERIE E-COMMERCE | SOLUTIONS ARCHITECTURALES
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-heading mb-6 text-foreground leading-[1.1] tracking-tight">
              Votre boutique en ligne : un actif financier,<br />
              <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">
                pas une simple vitrine.
              </em>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              La vente en ligne ne supporte pas l'approximation. Waveia fusionne la puissance des infrastructures e-commerce leaders à une ingénierie de conversion orientée ROI. De l'interconnexion de vos flux logistiques à l'automatisation de vos leviers de croissance, nous bâtissons des plateformes sur-mesure pour maximiser votre rentabilité, 24h/24.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-ocean text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                Étudier mon projet e-commerce <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#methode" className="inline-flex items-center gap-2 bg-transparent text-muted-foreground text-sm px-7 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
                Découvrir notre méthode 360°
              </a>
            </div>
            
            <div className="mt-8 flex justify-center gap-6 flex-wrap text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Infrastructure Shopify certifiée</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Tunnel d'achat optimisé</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-ocean" /> Intégration CRM incluse</span>
            </div>
          </div>
        </div>
      </section>

      <EcommerceArchitectureSection />

      {/* ─── MÉTHODOLOGIE 360° ─── */}
      <section className="py-24 relative overflow-hidden border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20 animate-in">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-ocean"></div>
              MÉTHODOLOGIE 360°
              <div className="w-5 h-[1.5px] bg-ocean"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
              Trois pôles d&apos;ingénierie synchronisés<br className="hidden md:block" /> pour sécuriser votre rentabilité.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              Un site e-commerce esthétique sans trafic est inutile. Du trafic sur un site instable est une perte d&apos;argent. Pour transformer votre catalogue de produits en un canal de vente à haute performance, Waveia orchestre votre développement à travers trois pôles d&apos;expertise qui travaillent en synergie totale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-in delay-100">
            {/* Card 1 */}
            <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[400px]">
              <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">01</div>
              <div className="relative z-10 flex-1">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Le développement</h3>
                <span className="text-ocean text-sm font-semibold uppercase tracking-wider block mb-6">(Le Moteur)</span>
                <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">Le socle de votre stabilité opérationnelle.</strong>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  Nous développons des plateformes transactionnelles robustes, sécurisées et &quot;scalables&quot;. Nous assurons l&apos;interconnexion parfaite de votre boutique avec votre système d&apos;information existant (ERP, CRM, outils logistiques) pour absorber vos pics de ventes tout en fluidifiant la gestion de vos stocks au millimètre.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[400px]">
              <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">02</div>
              <div className="relative z-10 flex-1">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">La performance</h3>
                <span className="text-ocean text-sm font-semibold uppercase tracking-wider block mb-6">(Le Carburant)</span>
                <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">Le flux de vos revenus continus.</strong>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  Nous activons les leviers publicitaires les plus rentables de votre marché (Google Search, Social Ads, Retail Media) pour capter la demande. En parallèle, nous déployons des boucles de rétention automatisées (Emailing stratégique, SMS) pour fidéliser vos acheteurs et maximiser la valeur à vie (Life-Time Value) de chaque client.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[400px]">
              <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">03</div>
              <div className="relative z-10 flex-1">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">L&apos;image de marque</h3>
                <span className="text-ocean text-sm font-semibold uppercase tracking-wider block mb-6">(L&apos;Accélérateur de Valeur)</span>
                <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">Le déclencheur psychologique d&apos;achat.</strong>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  Nous concevons des identités visuelles statutaires et produisons des actifs créatifs à haute conversion (Motion Design, UGC, IA Design). L&apos;objectif de notre direction artistique n&apos;est pas seulement l&apos;esthétique : elle est configurée pour rassurer le prospect, capturer l&apos;attention sur les réseaux sociaux et faire chuter drastiquement vos coûts d&apos;acquisition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EcommerceConceptionSection />
      
      <EcommercePerformanceSection />
      
      <EcommerceStudioSection />
      
      <EcommerceTimelineSection />
      
      <EcommerceCroSection />
      
      <EcommerceImpactSection />
      
      <EcommerceFaqSection />
      
      <EcommerceCtaSection />

    </div>
  );
}
