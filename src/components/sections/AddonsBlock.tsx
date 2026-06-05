"use client";
import './AddonsBlock.css';

export function AddonsBlock() {
  return (
    <>
      <h2 className="sr-only">Modules complémentaires WaveIA — SEO & Visibilité locale et Identité Visuelle & Branding</h2>

<div className="wave-section">
  <p className="wave-eyebrow">Et ce n'est pas tout</p>
  <p className="wave-title">Allez plus loin avec nos modules</p>

  <div className="wave-grid">

    <div className="wave-card">
      <div className="wave-card-img">
        <div className="wave-img-placeholder" style={{"background":"linear-gradient(160deg, #e8fce0 0%, #c5f0b0 50%, #a8e890 100%)"}}>
          <div className="seo-icon-wrap" style={{"marginBottom":"0","width":"64px","height":"64px","borderRadius":"14px"}}>
            <i className="ti ti-search" style={{"fontSize":"28px","color":"#2a7a1a"}} aria-hidden="true"></i>
          </div>
          <span style={{"fontSize":"11px","color":"#3a8a22","fontWeight":"500","letterSpacing":"0.04em","marginTop":"10px"}}>SEO & Visibilité</span>
          <div style={{"display":"flex","gap":"6px","marginTop":"8px"}}>
            <span style={{"fontSize":"10px","background":"#fff","borderRadius":"20px","padding":"3px 10px","color":"#2a6a16","fontWeight":"600","boxShadow":"0 1px 4px rgba(0,0,0,0.08)"}}>#1 Local</span>
            <span style={{"fontSize":"10px","background":"#fff","borderRadius":"20px","padding":"3px 10px","color":"#2a6a16","fontWeight":"600","boxShadow":"0 1px 4px rgba(0,0,0,0.08)"}}>+180% trafic</span>
          </div>
        </div>
      </div>
      <div className="wave-card-body">
        <div>
          <div className="wave-card-header">
            <h3 className="wave-card-title">SEO & Visibilité</h3>
            <div className="wave-price"><strong>+149 €</strong>/mois</div>
          </div>
          <span className="wave-badge">Module complémentaire</span>
          <p className="wave-subtitle" style={{"marginTop":"8px"}}>Pour dominer les recherches locales Biarritz–Bayonne</p>
        </div>
        <button className="wave-btn" onClick={() => console.log('Prompt: Parlez-moi du module SEO & Visibilité de WaveIA')}>En savoir plus ↗</button>
        <ul className="wave-features">
          <li><i className="ti ti-check" style={{"fontSize":"13px"}} aria-hidden="true"></i>Optimisation Google My Business & Local Pack</li>
          <li><i className="ti ti-check" style={{"fontSize":"13px"}} aria-hidden="true"></i>Audit SEO 360° technique & sémantique</li>
          <li><i className="ti ti-check" style={{"fontSize":"13px"}} aria-hidden="true"></i>Campagnes de netlinking & autorité durable</li>
        </ul>
      </div>
    </div>

    <div className="wave-card">
      <div className="wave-card-img">
        <div className="wave-img-placeholder" style={{"background":"linear-gradient(160deg, #f2eefe 0%, #ddd2fb 50%, #c9bbf8 100%)"}}>
          <div className="branding-icon-wrap" style={{"marginBottom":"0","width":"64px","height":"64px","borderRadius":"14px"}}>
            <i className="ti ti-palette" style={{"fontSize":"28px","color":"#6a3ecf"}} aria-hidden="true"></i>
          </div>
          <span style={{"fontSize":"11px","color":"#6a3ecf","fontWeight":"500","letterSpacing":"0.04em","marginTop":"10px"}}>Identité & Brand</span>
          <div style={{"display":"flex","gap":"6px","marginTop":"8px"}}>
            <span style={{"fontSize":"10px","background":"#fff","borderRadius":"20px","padding":"3px 10px","color":"#5a2fbf","fontWeight":"600","boxShadow":"0 1px 4px rgba(0,0,0,0.08)"}}>Logo</span>
            <span style={{"fontSize":"10px","background":"#fff","borderRadius":"20px","padding":"3px 10px","color":"#5a2fbf","fontWeight":"600","boxShadow":"0 1px 4px rgba(0,0,0,0.08)"}}>Vidéo</span>
            <span style={{"fontSize":"10px","background":"#fff","borderRadius":"20px","padding":"3px 10px","color":"#5a2fbf","fontWeight":"600","boxShadow":"0 1px 4px rgba(0,0,0,0.08)"}}>Ads</span>
          </div>
        </div>
      </div>
      <div className="wave-card-body">
        <div>
          <div className="wave-card-header">
            <h3 className="wave-card-title">Identité & Branding</h3>
            <div className="wave-price"><strong>Sur devis</strong></div>
          </div>
          <p className="wave-subtitle" style={{"marginTop":"6px"}}>Pour rayonner sur tous les canaux de communication</p>
        </div>
        <button className="wave-btn wave-btn-primary" onClick={() => console.log('Prompt: Je voudrais en savoir plus sur le module Identité & Branding de WaveIA')}>Essayer gratuitement ↗</button>
        <ul className="wave-features">
          <li><i className="ti ti-check" style={{"fontSize":"13px"}} aria-hidden="true"></i>Création logo, charte graphique & typographies</li>
          <li><i className="ti ti-check" style={{"fontSize":"13px"}} aria-hidden="true"></i>Shooting photo & vidéos immersives</li>
          <li><i className="ti ti-check" style={{"fontSize":"13px"}} aria-hidden="true"></i>Gestion réseaux sociaux & campagnes Ads ciblées</li>
        </ul>
      </div>
    </div>

  </div>
</div>

    </>
  );
}
