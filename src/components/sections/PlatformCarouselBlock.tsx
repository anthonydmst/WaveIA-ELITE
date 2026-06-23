"use client";
import './PlatformCarouselBlock.css';
import { useState, useRef, useEffect, useCallback } from 'react';

export function PlatformCarouselBlock() {
  const total = 4;
  const [cur, setCur] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const render = useCallback(() => {
    if (!trackRef.current || !trackRef.current.parentElement) return;
    const outer = trackRef.current.parentElement.offsetWidth;
    const cardW = (outer - 3 * 14) / 4;
    const offset = cur * (cardW + 14);
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  }, [cur]);

  useEffect(() => {
    render();
    window.addEventListener('resize', render);
    return () => window.removeEventListener('resize', render);
  }, [render]);

  const goTo = (i: number) => {
    setCur(Math.max(0, Math.min(total - 1, i)));
  };

  const shift = (d: number) => {
    goTo(cur + d);
  };

  return (
    <>
      <h2 className="sr-only">Une seule agence pour gérer votre présence web — 4 piliers WaveIA : Ingénierie web, SEO, E-commerce et Identité visuelle</h2>

<div className="wv-wrap">
  <p className="wv-title">Une seule agence pour gérer votre présence web et votre activité</p>

  <div className="wv-slider-outer">
    <div className="wv-track" id="wvTrack" ref={trackRef}>

      <div className="wv-card">
        <div className="wv-card-visual" style={{"background":"#1a1a2e"}}>
          <div style={{"width":"100%","display":"flex","flexDirection":"column","gap":"6px"}}>
            <div className="wv-mock-bar"><div className="wv-mock-dot" style={{"background":"#ff5f57"}}></div><div className="wv-mock-dot" style={{"background":"#febc2e"}}></div><div className="wv-mock-dot" style={{"background":"#28c840"}}></div><span style={{"fontSize":"9px","color":"#888","marginLeft":"4px"}}>waveia-client.vercel.app</span></div>
            <div style={{"background":"#0f0f23","borderRadius":"8px","padding":"10px","border":"0.5px solid rgba(255,255,255,0.08)"}}>
              <div style={{"fontSize":"9px","color":"#a78bfa","fontWeight":"600","marginBottom":"4px","fontFamily":"monospace"}}>// Next.js 15 · Edge CDN</div>
              <div style={{"fontSize":"9px","color":"#6ee7b7","fontFamily":"monospace","lineHeight":"1.6"}}>export default async function Page() {"{"}</div>
              <div style={{"fontSize":"9px","color":"#93c5fd","fontFamily":"monospace","paddingLeft":"10px"}}>return &lt;SiteVitrine /&gt;</div>
              <div style={{"fontSize":"9px","color":"#6ee7b7","fontFamily":"monospace"}}>{"}"}</div>
            </div>
            <div style={{"display":"flex","gap":"6px"}}>
              <div style={{"background":"#22c55e","borderRadius":"20px","padding":"3px 8px","fontSize":"9px","fontWeight":"700","color":"#fff"}}>0.3s</div>
              <div style={{"background":"#3b82f6","borderRadius":"20px","padding":"3px 8px","fontSize":"9px","fontWeight":"700","color":"#fff"}}>95+ PageSpeed</div>
              <div style={{"background":"#8b5cf6","borderRadius":"20px","padding":"3px 8px","fontSize":"9px","fontWeight":"700","color":"#fff"}}>Mobile-first</div>
            </div>
          </div>
        </div>
        <div className="wv-card-body">
          <p className="wv-card-title">Ingénierie web</p>
          <p className="wv-card-desc">Sites vitrines, e-commerce et applications métiers en Next.js 15. Rapides, robustes, 40 % moins chers que le marché.</p>
          <div className="wv-card-arrow"><i className="ti ti-arrow-right" aria-hidden="true"></i></div>
        </div>
      </div>

      <div className="wv-card" onClick={() => console.log('Prompt: Parlez-moi du SEO local de WaveIA sur Biarritz et Bayonne')}>
        <div className="wv-card-visual" style={{"background":"#f0fdf4"}}>
          <div style={{"width":"100%","display":"flex","flexDirection":"column","gap":"7px"}}>
            <div style={{"background":"#fff","borderRadius":"8px","padding":"9px 10px","border":"0.5px solid rgba(0,0,0,0.08)"}}>
              <div style={{"fontSize":"9px","fontWeight":"600","color":"#374151","marginBottom":"5px","display":"flex","alignItems":"center","gap":"4px"}}><i className="ti ti-map-pin" style={{"fontSize":"11px","color":"#16a34a"}} aria-hidden="true"></i>Google · Biarritz</div>
              <div style={{"display":"flex","flexDirection":"column","gap":"3px"}}>
                <div className="wv-perf-row"><span style={{"color":"#374151"}}>Surf Shop Biarritz</span><span style={{"color":"#16a34a","fontWeight":"600"}}>#1</span></div>
                <div className="wv-perf-row"><span style={{"color":"#374151"}}>Restaurant Bayonne</span><span style={{"color":"#16a34a","fontWeight":"600"}}>#1</span></div>
                <div className="wv-perf-row"><span style={{"color":"#374151"}}>Cave Irouléguy</span><span style={{"color":"#16a34a","fontWeight":"600"}}>#2</span></div>
              </div>
            </div>
            <div style={{"background":"#fff","borderRadius":"8px","padding":"8px 10px","border":"0.5px solid rgba(0,0,0,0.08)"}}>
              <div style={{"fontSize":"9px","color":"#6b7280","marginBottom":"4px"}}>Trafic organique</div>
              <div style={{"display":"flex","alignItems":"center","gap":"8px"}}>
                <div className="wv-score-ring">95</div>
                <div style={{"flex":"1"}}>
                  <div className="wv-seo-bar"><div className="wv-seo-fill" style={{"width":"92%","background":"#4ade80"}}></div></div>
                  <div className="wv-seo-bar"><div className="wv-seo-fill" style={{"width":"78%","background":"#86efac"}}></div></div>
                  <div className="wv-seo-bar"><div className="wv-seo-fill" style={{"width":"65%","background":"#bbf7d0"}}></div></div>
                </div>
                <span style={{"fontSize":"11px","fontWeight":"700","color":"#16a34a"}}>+180%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wv-card-body">
          <p className="wv-card-title">SEO & visibilité locale</p>
          <p className="wv-card-desc">Dominez les recherches sur la Côte Basque. Audit 360°, Google My Business, netlinking et accompagnement mensuel.</p>
          <div className="wv-card-arrow"><i className="ti ti-arrow-right" aria-hidden="true"></i></div>
        </div>
      </div>

      <div className="wv-card" onClick={() => console.log('Prompt: Parlez-moi des solutions e-commerce Shopify de WaveIA')}>
        <div className="wv-card-visual" style={{"background":"#fff7ed"}}>
          <div style={{"width":"100%","display":"flex","flexDirection":"column","gap":"6px"}}>
            <div style={{"background":"#fff","borderRadius":"8px","border":"0.5px solid rgba(0,0,0,0.08)","overflow":"hidden"}}>
              <div style={{"background":"#1c1c1e","padding":"6px 10px","display":"flex","alignItems":"center","justifyContent":"space-between"}}>
                <span style={{"fontSize":"8px","color":"#fff","fontWeight":"600"}}>Surf Shop Biarritz</span>
                <div style={{"display":"flex","gap":"4px"}}>
                  <i className="ti ti-shopping-cart" style={{"fontSize":"10px","color":"#fff"}} aria-hidden="true"></i>
                </div>
              </div>
              <div style={{"padding":"8px 10px"}}>
                <div style={{"fontSize":"8px","color":"#6b7280","marginBottom":"4px"}}>Collection été 2025</div>
                <div style={{"display":"flex","gap":"5px"}}>
                  <div style={{"background":"#f3f4f6","borderRadius":"5px","padding":"5px","flex":"1","textAlign":"center"}}>
                    <div style={{"fontSize":"8px","fontWeight":"600","color":"#1c1c1e"}}>Board</div>
                    <div style={{"fontSize":"9px","color":"#ea580c","fontWeight":"700"}}>490€</div>
                  </div>
                  <div style={{"background":"#f3f4f6","borderRadius":"5px","padding":"5px","flex":"1","textAlign":"center"}}>
                    <div style={{"fontSize":"8px","fontWeight":"600","color":"#1c1c1e"}}>Combo</div>
                    <div style={{"fontSize":"9px","color":"#ea580c","fontWeight":"700"}}>790€</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{"display":"flex","gap":"5px"}}>
              <div style={{"background":"#fff","borderRadius":"6px","padding":"5px 8px","border":"0.5px solid rgba(0,0,0,0.08)","flex":"1","textAlign":"center"}}>
                <div style={{"fontSize":"8px","color":"#6b7280"}}>Paiement</div>
                <div style={{"fontSize":"9px","fontWeight":"600","color":"#1c1c1e"}}>Stripe · CB</div>
              </div>
              <div style={{"background":"#fff","borderRadius":"6px","padding":"5px 8px","border":"0.5px solid rgba(0,0,0,0.08)","flex":"1","textAlign":"center"}}>
                <div style={{"fontSize":"8px","color":"#6b7280"}}>Ventes</div>
                <div style={{"fontSize":"9px","fontWeight":"600","color":"#ea580c"}}>+180%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="wv-card-body">
          <p className="wv-card-title">E-commerce Shopify</p>
          <p className="wv-card-desc">Boutique en ligne clé en main : catalogue, paiements sécurisés, gestion des commandes et expéditions.</p>
          <div className="wv-card-arrow"><i className="ti ti-arrow-right" aria-hidden="true"></i></div>
        </div>
      </div>

      <div className="wv-card" onClick={() => console.log('Prompt: Parlez-moi des services branding et identité visuelle de WaveIA')}>
        <div className="wv-card-visual" style={{"background":"#faf5ff"}}>
          <div style={{"width":"100%","display":"flex","flexDirection":"column","gap":"6px"}}>
            <div style={{"display":"flex","gap":"6px","alignItems":"flex-start"}}>
              <div className="wv-brand-shape" style={{"width":"52px","height":"52px","background":"#7c3aed","flexShrink":"0"}}>
                <span style={{"fontSize":"18px","fontWeight":"700","color":"#fff","fontFamily":"'Bricolage Grotesque',sans-serif"}}>W</span>
              </div>
              <div style={{"flex":"1"}}>
                <div style={{"fontSize":"9px","fontWeight":"700","color":"#374151","marginBottom":"3px"}}>WaveIA</div>
                <div style={{"display":"flex","gap":"3px","flexWrap":"wrap"}}>
                  <div style={{"width":"14px","height":"14px","borderRadius":"50%","background":"#7c3aed"}}></div>
                  <div style={{"width":"14px","height":"14px","borderRadius":"50%","background":"#a78bfa"}}></div>
                  <div style={{"width":"14px","height":"14px","borderRadius":"50%","background":"#1a1a2e"}}></div>
                  <div style={{"width":"14px","height":"14px","borderRadius":"50%","background":"#f3f0ff","border":"0.5px solid #ddd6fe"}}></div>
                </div>
              </div>
            </div>
            <div style={{"background":"#fff","borderRadius":"8px","padding":"8px 10px","border":"0.5px solid rgba(0,0,0,0.08)"}}>
              <div style={{"fontSize":"8px","color":"#6b7280","marginBottom":"4px"}}>Réseaux sociaux · Engagement</div>
              <div style={{"display":"flex","gap":"4px"}}>
                <div className="wv-social-pill" style={{"background":"#ede9fe","color":"#6d28d9"}}>Instagram</div>
                <div className="wv-social-pill" style={{"background":"#dbeafe","color":"#1d4ed8"}}>LinkedIn</div>
                <div className="wv-social-pill" style={{"background":"#fef3c7","color":"#92400e"}}>Ads</div>
              </div>
              <div style={{"marginTop":"5px","display":"flex","gap":"3px","alignItems":"center"}}>
                <div style={{"flex":"1","height":"4px","borderRadius":"2px","background":"#ede9fe","overflow":"hidden"}}><div style={{"width":"72%","height":"100%","background":"#7c3aed","borderRadius":"2px"}}></div></div>
                <span style={{"fontSize":"9px","fontWeight":"700","color":"#7c3aed"}}>×3 reach</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wv-card-body">
          <p className="wv-card-title">Identité & branding</p>
          <p className="wv-card-desc">Logo, charte graphique, shooting photo, vidéos immersives et gestion des réseaux sociaux avec campagnes Ads ciblées.</p>
          <div className="wv-card-arrow"><i className="ti ti-arrow-right" aria-hidden="true"></i></div>
        </div>
      </div>

    </div>
  </div>

  <div className="wv-dots-nav">
    <div className="wv-dots" id="wvDots">
      <button className={`wv-dot ${cur === 0 ? "active" : ""}`} aria-label="Carte 1" onClick={() => goTo(0)}></button>
      <button className={`wv-dot ${cur === 1 ? "active" : ""}`} aria-label="Carte 2" onClick={() => goTo(1)}></button>
      <button className={`wv-dot ${cur === 2 ? "active" : ""}`} aria-label="Carte 3" onClick={() => goTo(2)}></button>
      <button className={`wv-dot ${cur === 3 ? "active" : ""}`} aria-label="Carte 4" onClick={() => goTo(3)}></button>
    </div>
    <div className="wv-nav-btns">
      <button className="wv-nav-btn" id="wvPrev" onClick={() => shift(-1)} aria-label="Précédent" style={{ opacity: cur === 0 ? 0.35 : 1 }}><i className="ti ti-chevron-left" aria-hidden="true"></i></button>
      <button className="wv-nav-btn" id="wvNext" onClick={() => shift(1)} aria-label="Suivant" style={{ opacity: cur === total - 1 ? 0.35 : 1 }}><i className="ti ti-chevron-right" aria-hidden="true"></i></button>
    </div>
  </div>
</div>


    </>
  );
}
