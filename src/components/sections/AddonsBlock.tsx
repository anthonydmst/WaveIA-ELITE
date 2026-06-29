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
              <div className="wave-img-placeholder bg-linear-to-br from-emerald-100 via-emerald-200 to-emerald-300 dark:from-emerald-950 dark:via-emerald-900 dark:to-emerald-850">
                <div className="seo-icon-wrap !mb-0 w-16 h-16 rounded-2xl">
                  <i className="ti ti-search text-3xl text-emerald-700 dark:text-emerald-300" aria-hidden="true"></i>
                </div>
                <span className="text-xs text-emerald-800 dark:text-emerald-200 font-medium tracking-wide mt-2">SEO & Visibilité</span>
                <div className="flex gap-2 mt-2">
                  <span className="text-[10px] bg-background border border-border/40 rounded-full px-2.5 py-0.5 text-emerald-700 dark:text-emerald-300 font-semibold shadow-xs">#1 Local</span>
                  <span className="text-[10px] bg-background border border-border/40 rounded-full px-2.5 py-0.5 text-emerald-700 dark:text-emerald-300 font-semibold shadow-xs">+180% trafic</span>
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
                <p className="wave-subtitle mt-2">Pour dominer les recherches locales Biarritz–Bayonne</p>
              </div>
              <button className="wave-btn" onClick={() => console.log('Prompt: Parlez-moi du module SEO & Visibilité de WaveIA')}>En savoir plus ↗</button>
              <ul className="wave-features">
                <li><i className="ti ti-check text-xs" aria-hidden="true"></i>Optimisation Google My Business & Local Pack</li>
                <li><i className="ti ti-check text-xs" aria-hidden="true"></i>Audit SEO 360° technique & sémantique</li>
                <li><i className="ti ti-check text-xs" aria-hidden="true"></i>Campagnes de netlinking & autorité durable</li>
              </ul>
            </div>
          </div>

          <div className="wave-card">
            <div className="wave-card-img">
              <div className="wave-img-placeholder bg-linear-to-br from-violet-100 via-violet-200 to-violet-300 dark:from-violet-950 dark:via-violet-900 dark:to-violet-850">
                <div className="branding-icon-wrap !mb-0 w-16 h-16 rounded-2xl">
                  <i className="ti ti-palette text-3xl text-violet-700 dark:text-violet-300" aria-hidden="true"></i>
                </div>
                <span className="text-xs text-violet-800 dark:text-violet-200 font-medium tracking-wide mt-2">Identité & Brand</span>
                <div className="flex gap-2 mt-2">
                  <span className="text-[10px] bg-background border border-border/40 rounded-full px-2.5 py-0.5 text-violet-700 dark:text-violet-300 font-semibold shadow-xs">Logo</span>
                  <span className="text-[10px] bg-background border border-border/40 rounded-full px-2.5 py-0.5 text-violet-700 dark:text-violet-300 font-semibold shadow-xs">Vidéo</span>
                  <span className="text-[10px] bg-background border border-border/40 rounded-full px-2.5 py-0.5 text-violet-700 dark:text-violet-300 font-semibold shadow-xs">Ads</span>
                </div>
              </div>
            </div>
            <div className="wave-card-body">
              <div>
                <div className="wave-card-header">
                  <h3 className="wave-card-title">Identité & Branding</h3>
                  <div className="wave-price"><strong>Sur devis</strong></div>
                </div>
                <p className="wave-subtitle mt-1.5">Pour rayonner sur tous les canaux de communication</p>
              </div>
              <button className="wave-btn wave-btn-primary" onClick={() => console.log('Prompt: Je voudrais en savoir plus sur le module Identité & Branding de WaveIA')}>Essayer gratuitement ↗</button>
              <ul className="wave-features">
                <li><i className="ti ti-check text-xs" aria-hidden="true"></i>Création logo, charte graphique & typographies</li>
                <li><i className="ti ti-check text-xs" aria-hidden="true"></i>Shooting photo & vidéos immersives</li>
                <li><i className="ti ti-check text-xs" aria-hidden="true"></i>Gestion réseaux sociaux & campagnes Ads ciblées</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
