import './ModulesGridBlock.css';

export function ModulesGridBlock() {
  return (
    <>
      <h2 className="sr-only">Les modules WaveIA — des briques essentielles pour développer votre présence digitale</h2>

<div className="wia-section">
  <div className="wia-header">
    <h2>Des modules essentiels pour développer votre activité.</h2>
    <p>Chaque module est conçu pour un besoin précis. Sites, SEO, identité visuelle : activez ce dont vous avez besoin, au bon moment. Tout simplement.</p>
  </div>

  <div className="wia-grid">

    <div className="wia-card">
      <div className="wia-card-header">
        <div className="wia-card-icon blue-icon"><i className="ti ti-bolt" aria-hidden="true"></i></div>
        <span className="wia-card-title">Site Vitrine Next.js</span>
      </div>
      <p className="wia-card-desc">Un site ultra-rapide, pensé mobile-first, avec score PageSpeed 95+ garanti.</p>
      <div className="wia-preview" style={{"padding":"8px"}}>
        <div style={{"fontSize":"9px","color":"var(--color-text-secondary)","marginBottom":"4px"}}>Performance Google</div>
        <div style={{"display":"flex","gap":"8px","alignItems":"baseline","marginBottom":"6px"}}>
          <span className="preview-metric">95+</span>
          <span className="preview-metric-label">PageSpeed Score</span>
        </div>
        <div style={{"display":"flex","gap":"4px","alignItems":"center","marginBottom":"4px"}}>
          <div style={{"width":"9px","height":"9px","borderRadius":"50%","background":"#1D9E75"}}></div>
          <span style={{"fontSize":"9px","color":"var(--color-text-secondary)","flex":"1"}}>Temps de réponse</span>
          <span style={{"fontSize":"9px","fontWeight":"500","color":"var(--color-text-primary)"}}>&lt;100ms</span>
        </div>
        <div style={{"display":"flex","gap":"4px","alignItems":"center","marginBottom":"4px"}}>
          <div style={{"width":"9px","height":"9px","borderRadius":"50%","background":"#185FA5"}}></div>
          <span style={{"fontSize":"9px","color":"var(--color-text-secondary)","flex":"1"}}>Mobile-first</span>
          <span className="preview-badge badge-teal">✓ Garanti</span>
        </div>
        <div style={{"display":"flex","gap":"4px","alignItems":"center"}}>
          <div style={{"width":"9px","height":"9px","borderRadius":"50%","background":"#BA7517"}}></div>
          <span style={{"fontSize":"9px","color":"var(--color-text-secondary)","flex":"1"}}>Edge CDN mondial</span>
          <span className="preview-badge badge-blue">Next.js 15</span>
        </div>
      </div>
    </div>

    <div className="wia-card">
      <div className="wia-card-header">
        <div className="wia-card-icon teal-icon"><i className="ti ti-shopping-cart" aria-hidden="true"></i></div>
        <span className="wia-card-title">E-commerce</span>
      </div>
      <p className="wia-card-desc">Boutique en ligne sur Shopify ou sur-mesure avec tunnel de conversion optimisé.</p>
      <div className="wia-preview">
        <div style={{"padding":"6px 8px","borderBottom":"0.5px solid var(--color-border-tertiary)"}}>
          <div className="preview-tag-row" style={{"padding":"0","marginBottom":"4px"}}>
            <span className="preview-badge badge-teal">Tout</span>
            <span style={{"fontSize":"9px","color":"var(--color-text-secondary)","padding":"2px 6px"}}>Surf</span>
            <span style={{"fontSize":"9px","color":"var(--color-text-secondary)","padding":"2px 6px"}}>Gastronomie</span>
          </div>
          <div className="preview-row" style={{"padding":"0"}}>
            <div className="preview-avatar" style={{"background":"#E1F5EE","borderRadius":"6px","width":"28px","height":"28px"}}></div>
            <div className="preview-lines">
              <div className="preview-line" style={{"width":"70%"}}></div>
              <div style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>Planche de surf artisanale</div>
            </div>
            <span style={{"fontSize":"10px","fontWeight":"600","color":"var(--color-text-primary)"}}>890€</span>
          </div>
        </div>
        <div className="preview-row" style={{"padding":"6px 8px"}}>
          <div className="preview-avatar" style={{"background":"#FAEEDA","borderRadius":"6px","width":"28px","height":"28px"}}></div>
          <div className="preview-lines">
            <div className="preview-line" style={{"width":"60%"}}></div>
            <div style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>Coffret Irouléguy</div>
          </div>
          <span style={{"fontSize":"10px","fontWeight":"600","color":"var(--color-text-primary)"}}>59€</span>
        </div>
      </div>
    </div>

    <div className="wia-card">
      <div className="wia-card-header">
        <div className="wia-card-icon amber-icon"><i className="ti ti-chart-line" aria-hidden="true"></i></div>
        <span className="wia-card-title">SEO Local</span>
      </div>
      <p className="wia-card-desc">Dominez le Local Pack Google sur Biarritz / Bayonne / Anglet / Hossegor.</p>
      <div className="wia-preview" style={{"padding":"8px"}}>
        <div style={{"fontSize":"9px","color":"var(--color-text-secondary)","marginBottom":"6px"}}>Visibilité locale · Zone BAB</div>
        <div className="preview-score-row" style={{"padding":"0","marginBottom":"4px","border":"none","flexDirection":"column","alignItems":"flex-start","gap":"2px"}}>
          <div style={{"display":"flex","justifyContent":"space-between","width":"100%"}}>
            <span style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>Surf Shop Biarritz</span>
            <span style={{"fontSize":"9px","fontWeight":"500","color":"#1D9E75"}}>+180%</span>
          </div>
          <div style={{"width":"100%","height":"4px","borderRadius":"2px","background":"var(--color-border-tertiary)"}}>
            <div className="preview-progress prog-teal" style={{"width":"80%"}}></div>
          </div>
        </div>
        <div style={{"display":"flex","justifyContent":"space-between","width":"100%","marginBottom":"2px"}}>
          <span style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>Restaurant Bayonne</span>
          <span style={{"fontSize":"9px","fontWeight":"500","color":"#185FA5"}}>Top 3</span>
        </div>
        <div style={{"width":"100%","height":"4px","borderRadius":"2px","background":"var(--color-border-tertiary)"}}>
          <div className="preview-progress prog-blue" style={{"width":"65%"}}></div>
        </div>
      </div>
    </div>

    <div className="wia-card">
      <div className="wia-card-header">
        <div className="wia-card-icon purple-icon"><i className="ti ti-search" aria-hidden="true"></i></div>
        <span className="wia-card-title">Audit SEO 360°</span>
      </div>
      <p className="wia-card-desc">Analyse technique, contenu et popularité pour bâtir une autorité durable.</p>
      <div className="wia-preview" style={{"padding":"8px"}}>
        <div style={{"fontSize":"9px","fontWeight":"500","color":"var(--color-text-primary)","marginBottom":"6px"}}>Rapport d'audit</div>
        <div style={{"display":"flex","flexDirection":"column","gap":"4px"}}>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
            <span style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>SEO Technique</span>
            <span className="preview-badge badge-teal">Excellent</span>
          </div>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
            <span style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>Contenu sémantique</span>
            <span className="preview-badge badge-blue">Optimisé</span>
          </div>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
            <span style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>Netlinking</span>
            <span className="preview-badge badge-amber">En cours</span>
          </div>
        </div>
      </div>
    </div>

    <div className="wia-card">
      <div className="wia-card-header">
        <div className="wia-card-icon coral-icon"><i className="ti ti-palette" aria-hidden="true"></i></div>
        <span className="wia-card-title">Identité Visuelle</span>
      </div>
      <p className="wia-card-desc">Logo, charte graphique et typographies pour une marque cohérente et mémorable.</p>
      <div className="wia-preview" style={{"padding":"8px","display":"flex","flexDirection":"column","gap":"6px"}}>
        <div style={{"display":"flex","gap":"4px","alignItems":"center"}}>
          <div style={{"width":"28px","height":"28px","borderRadius":"6px","background":"#185FA5","display":"flex","alignItems":"center","justifyContent":"center"}}>
            <span style={{"fontFamily":"'Syne', sans-serif","fontSize":"11px","fontWeight":"700","color":"white"}}>W</span>
          </div>
          <div>
            <div style={{"fontFamily":"'Syne', sans-serif","fontSize":"11px","fontWeight":"700","color":"var(--color-text-primary)"}}>WaveIA</div>
            <div style={{"fontSize":"8px","color":"var(--color-text-secondary)"}}>Agence web · Côte Basque</div>
          </div>
        </div>
        <div style={{"display":"flex","gap":"4px"}}>
          <div style={{"width":"16px","height":"16px","borderRadius":"3px","background":"#185FA5"}}></div>
          <div style={{"width":"16px","height":"16px","borderRadius":"3px","background":"#1D9E75"}}></div>
          <div style={{"width":"16px","height":"16px","borderRadius":"3px","background":"#F0997B"}}></div>
          <div style={{"width":"16px","height":"16px","borderRadius":"3px","background":"#2C2C2A"}}></div>
          <div style={{"fontSize":"8px","color":"var(--color-text-secondary)","marginLeft":"4px","lineHeight":"16px"}}>Charte couleurs</div>
        </div>
      </div>
    </div>

    <div className="wia-card">
      <div className="wia-card-header">
        <div className="wia-card-icon green-icon"><i className="ti ti-camera" aria-hidden="true"></i></div>
        <span className="wia-card-title">Production Contenu</span>
      </div>
      <p className="wia-card-desc">Shooting photo, vidéos immersives et gestion éditoriale des réseaux sociaux.</p>
      <div className="wia-preview" style={{"padding":"6px 8px"}}>
        <div className="preview-tag-row" style={{"padding":"0","marginBottom":"6px"}}>
          <span className="preview-badge badge-teal">Photos</span>
          <span className="preview-badge badge-blue">Vidéo</span>
          <span className="preview-badge badge-amber">Réseaux</span>
        </div>
        <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"4px"}}>
          <div style={{"height":"32px","borderRadius":"4px","background":"var(--color-border-tertiary)"}}></div>
          <div style={{"height":"32px","borderRadius":"4px","background":"var(--color-border-tertiary)"}}></div>
        </div>
      </div>
    </div>

    <div className="wia-card">
      <div className="wia-card-header">
        <div className="wia-card-icon pink-icon"><i className="ti ti-speakerphone" aria-hidden="true"></i></div>
        <span className="wia-card-title">Campagnes Ads</span>
      </div>
      <p className="wia-card-desc">Google Ads et Meta Ads ciblées pour générer des clients rapidement sur votre zone.</p>
      <div className="wia-preview" style={{"padding":"8px"}}>
        <div style={{"display":"flex","justifyContent":"space-between","marginBottom":"6px"}}>
          <span style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>ROI mensuel</span>
          <span style={{"fontSize":"9px","fontWeight":"600","color":"#1D9E75"}}>× 3.4</span>
        </div>
        <div style={{"display":"flex","gap":"8px"}}>
          <div style={{"flex":"1","textAlign":"center"}}>
            <div className="preview-metric" style={{"fontSize":"14px"}}>+180%</div>
            <div className="preview-metric-label">ventes</div>
          </div>
          <div style={{"width":"0.5px","background":"var(--color-border-tertiary)"}}></div>
          <div style={{"flex":"1","textAlign":"center"}}>
            <div className="preview-metric" style={{"fontSize":"14px"}}>0.3s</div>
            <div className="preview-metric-label">chargement</div>
          </div>
        </div>
      </div>
    </div>

    <div className="wia-card">
      <div className="wia-card-header">
        <div className="wia-card-icon gray-icon"><i className="ti ti-users" aria-hidden="true"></i></div>
        <span className="wia-card-title">Équipe & Binôme</span>
      </div>
      <p className="wia-card-desc">Anthony le Stratège et Julien l'Architecte : commercial + technique, en synergie.</p>
      <div className="wia-preview" style={{"padding":"8px","display":"flex","gap":"8px","justifyContent":"center","alignItems":"center","flex":"1"}}>
        <div className="member-col">
          <div style={{"width":"36px","height":"36px","borderRadius":"50%","background":"#E6F1FB","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Syne',sans-serif","fontSize":"12px","fontWeight":"700","color":"#185FA5"}}>AD</div>
          <span className="member-name">Anthony<br/>Stratège</span>
        </div>
        <div style={{"fontSize":"18px","color":"var(--color-border-secondary)"}}>⟷</div>
        <div className="member-col">
          <div style={{"width":"36px","height":"36px","borderRadius":"50%","background":"#E1F5EE","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Syne',sans-serif","fontSize":"12px","fontWeight":"700","color":"#0F6E56"}}>JH</div>
          <span className="member-name">Julien<br/>Architecte</span>
        </div>
      </div>
    </div>

    <div className="wia-card">
      <div className="wia-card-header">
        <div className="wia-card-icon red-icon"><i className="ti ti-currency-euro" aria-hidden="true"></i></div>
        <span className="wia-card-title">Tarifs Transparents</span>
      </div>
      <p className="wia-card-desc">Des prix affichés publiquement — 40% moins cher que les agences traditionnelles.</p>
      <div className="wia-preview" style={{"padding":"8px","display":"flex","flexDirection":"column","gap":"5px"}}>
        <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","padding":"4px 6px","borderRadius":"6px","background":"var(--color-background-secondary)"}}>
          <span style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>Site vitrine</span>
          <span style={{"fontSize":"11px","fontFamily":"'Syne',sans-serif","fontWeight":"700","color":"var(--color-text-primary)"}}>790€</span>
        </div>
        <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","padding":"4px 6px","borderRadius":"6px","background":"var(--color-background-secondary)"}}>
          <span style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>SEO mensuel</span>
          <span style={{"fontSize":"11px","fontFamily":"'Syne',sans-serif","fontWeight":"700","color":"var(--color-text-primary)"}}>149€/mois</span>
        </div>
        <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","padding":"4px 6px","borderRadius":"6px","background":"var(--color-background-secondary)"}}>
          <span style={{"fontSize":"9px","color":"var(--color-text-secondary)"}}>Logo & identité</span>
          <span style={{"fontSize":"11px","fontFamily":"'Syne',sans-serif","fontWeight":"700","color":"var(--color-text-primary)"}}>490€</span>
        </div>
      </div>
    </div>

  </div>
</div>

    </>
  );
}
