"use client";

import React from 'react';

export function ServicesBlock() {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=Inter:wght@400;500&display=swap');

    .wb-wrapper {
      --color-background-primary: var(--background, #ffffff);
      --color-background-secondary: var(--muted, #f3f4f6);
      --color-border-secondary: var(--border, #e5e7eb);
      --color-border-tertiary: var(--border, #e5e7eb);
      --color-text-primary: var(--foreground, #111827);
      --color-text-secondary: var(--muted-foreground, #4b5563);
      --border-radius-lg: 12px;
      --border-radius-xl: 16px;
    }
    
    .dark .wb-wrapper {
      --color-background-primary: var(--background, #030712);
      --color-background-secondary: var(--muted, #111827);
      --color-border-secondary: var(--border, #1f2937);
      --color-border-tertiary: var(--border, #1f2937);
      --color-text-primary: var(--foreground, #f9fafb);
      --color-text-secondary: var(--muted-foreground, #9ca3af);
    }

    .wb { font-family: 'Inter', sans-serif; padding: 3rem 0 2rem; max-width: 1200px; margin: 0 auto; }
    .wb-header { text-align: center; margin-bottom: 3rem; padding: 0 1rem; }
    .wb-title { font-family: 'Syne', sans-serif; font-size: 38px; font-weight: 700; color: var(--color-text-primary); margin: 0 0 1rem; line-height: 1.15; }
    .wb-sub { font-size: 15px; color: var(--color-text-secondary); max-width: 580px; margin: 0 auto; line-height: 1.7; }
    .wb-sub strong { color: var(--color-text-primary); }

    .wb-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: 0 1rem; }
    
    @media (max-width: 1024px) {
      .wb-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .wb-grid { grid-template-columns: 1fr; }
      .wb-title { font-size: 30px; }
    }

    .wb-card { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-xl); padding: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem; }

    .wb-card-head { display: flex; align-items: center; gap: 10px; margin-bottom: 0.2rem; }
    .wb-card-icon { font-size: 22px; color: #0ea5e9; }
    .wb-card-title { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: var(--color-text-primary); margin: 0; }
    .wb-card-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.65; margin: 0; }

    .wb-preview { margin-top: 0.75rem; border-radius: 10px; border: 0.5px solid var(--color-border-tertiary); overflow: hidden; background: var(--color-background-secondary); }

    /* Card 1 – Ingénierie Web */
    .wb-editor { padding: 12px; }
    .wb-toolbar { display: flex; align-items: center; gap: 6px; padding: 6px 10px; background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: 6px; margin-bottom: 10px; }
    .wb-toolbar-select { font-size: 10px; color: var(--color-text-secondary); background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; padding: 2px 6px; }
    .wb-toolbar-sep { width: 0.5px; height: 14px; background: var(--color-border-secondary); margin: 0 2px; }
    .wb-toolbar-btn { font-size: 11px; font-weight: 700; color: var(--color-text-secondary); width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; }
    .wb-h1 { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; color: var(--color-text-primary); padding: 4px 10px; }
    .wb-h2 { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: var(--color-text-primary); padding: 3px 10px; }
    .wb-h3 { font-size: 11px; font-weight: 500; color: var(--color-text-secondary); padding: 3px 10px; }

    /* Card 2 – SEO */
    .wb-seo { padding: 12px; display: flex; flex-direction: column; gap: 7px; }
    .wb-seo-row { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: 7px; padding: 9px 11px; display: flex; justify-content: space-between; align-items: center; }
    .wb-seo-name { font-size: 11px; font-weight: 500; color: var(--color-text-primary); }
    .wb-seo-sub { font-size: 10px; color: var(--color-text-secondary); margin-top: 1px; }
    .wb-seo-badge { font-size: 10px; font-weight: 500; padding: 3px 8px; border-radius: 999px; }
    .wb-seo-badge.green { background: #EAF3DE; color: #3B6D11; }
    .wb-seo-badge.blue { background: #E6F1FB; color: #185FA5; }
    .wb-seo-badge.amber { background: #FAEEDA; color: #854F0B; }
    .dark .wb-seo-badge.green { background: rgba(59,109,17,0.2); color: #84CC39; }
    .dark .wb-seo-badge.blue { background: rgba(24,95,165,0.2); color: #5B9FE0; }
    .dark .wb-seo-badge.amber { background: rgba(133,79,11,0.2); color: #E8A651; }

    /* Card 3 – Portfolio */
    .wb-portfolio { padding: 12px; }
    .wb-port-tabs { display: flex; gap: 5px; margin-bottom: 8px; }
    .wb-port-tab { font-size: 10px; padding: 3px 10px; border-radius: 999px; border: 0.5px solid var(--color-border-tertiary); color: var(--color-text-secondary); background: var(--color-background-primary); }
    .wb-port-tab.active { background: #0ea5e9; color: #fff; border-color: #0ea5e9; }
    .wb-port-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
    .wb-port-item { border-radius: 7px; overflow: hidden; height: 70px; display: flex; align-items: center; justify-content: center; }
    .wb-port-item-1 { background: linear-gradient(135deg, #0b2a52 0%, #0ea5e9 100%); }
    .wb-port-item-2 { background: linear-gradient(135deg, #1a3a6e 0%, #3b6dbf 100%); }
    .wb-port-label { font-size: 10px; color: rgba(255,255,255,0.7); font-weight: 500; text-align: center; padding: 0 6px; }

    /* Card 4 – Branding */
    .wb-brand { padding: 12px; display: flex; flex-direction: column; gap: 7px; }
    .wb-brand-post { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: 7px; padding: 9px 11px; }
    .wb-brand-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
    .wb-brand-avatar { width: 26px; height: 26px; border-radius: 50%; background: #0ea5e9; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; color: #fff; font-family: 'Syne', sans-serif; flex-shrink: 0; }
    .wb-brand-name { font-size: 11px; font-weight: 500; color: var(--color-text-primary); }
    .wb-brand-time { font-size: 10px; color: var(--color-text-secondary); }
    .wb-brand-text { font-size: 10px; color: var(--color-text-secondary); line-height: 1.5; }
    .wb-brand-palette { display: flex; gap: 5px; margin-top: 6px; }
    .wb-swatch { width: 16px; height: 16px; border-radius: 50%; }

    /* Card 5 – Ads */
    .wb-ads { padding: 12px; display: flex; flex-direction: column; gap: 7px; }
    .wb-ads-stat { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: 7px; padding: 9px 11px; display: flex; justify-content: space-between; align-items: center; }
    .wb-ads-label { font-size: 10px; color: var(--color-text-secondary); }
    .wb-ads-val { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: #0ea5e9; }
    .wb-ads-val.green { color: #3B6D11; }
    .dark .wb-ads-val.green { color: #84CC39; }
    .wb-bar-wrap { margin-top: 4px; }
    .wb-bar-bg { height: 5px; background: var(--color-background-secondary); border-radius: 99px; overflow: hidden; margin-top: 4px; }
    .wb-bar-fill { height: 100%; border-radius: 99px; background: #0ea5e9; }
    .wb-bar-fill.green { background: #639922; }
    .dark .wb-bar-fill.green { background: #84CC39; }

    /* Card 6 – Avis */
    .wb-avis { padding: 12px; }
    .wb-avis-stars { display: flex; gap: 3px; margin-bottom: 8px; }
    .wb-star { font-size: 14px; color: #EF9F27; }
    .wb-avis-row { display: flex; justify-content: space-between; align-items: center; font-size: 11px; margin-bottom: 5px; }
    .wb-avis-key { color: var(--color-text-secondary); }
    .wb-avis-pct { font-weight: 500; color: var(--color-text-primary); }
    .wb-avis-bar-bg { flex: 1; height: 4px; background: var(--color-background-secondary); border-radius: 99px; overflow: hidden; margin: 0 8px; }
    .wb-avis-bar-fill { height: 100%; border-radius: 99px; background: #0ea5e9; }

    .wb-cta-wrap { text-align: center; margin-top: 2.5rem; }
    .wb-cta { display: inline-flex; align-items: center; gap: 8px; background: #0ea5e9; color: #fff; border: none; padding: 13px 28px; border-radius: 999px; font-size: 15px; font-weight: 500; font-family: 'Inter', sans-serif; cursor: pointer; transition: transform 0.2s; }
    .wb-cta:hover { transform: translateY(-2px); }
  `;

  const htmlContent = `
    <h2 class="sr-only">Les expertises de WaveIA : ingénierie web, SEO, portfolio, branding, publicité et avis clients</h2>

    <div class="wb">
      <div class="wb-header">
        <h2 class="wb-title">Des expertises pensées<br>pour votre activité.</h2>
        <p class="wb-sub">Chaque service est conçu pour être efficace et mesurable. Pas de jargon, pas de surprise. Des résultats concrets pour les acteurs locaux de la Côte Basque. <strong>Tout simplement.</strong></p>
      </div>

      <div class="wb-grid">

        <!-- Card 1 – Ingénierie Web -->
        <div class="wb-card">
          <div class="wb-card-head">
            <i class="ti ti-code wb-card-icon" aria-hidden="true"></i>
            <h3 class="wb-card-title">Ingénierie Web</h3>
          </div>
          <p class="wb-card-desc">Sites vitrines, e-commerce et apps métiers sur-mesure. Architecture Next.js 15 avec score PageSpeed 95+ garanti.</p>
          <div class="wb-preview">
            <div class="wb-editor">
              <div class="wb-toolbar">
                <span class="wb-toolbar-select">Composant</span>
                <div class="wb-toolbar-sep"></div>
                <span class="wb-toolbar-btn">B</span>
                <span class="wb-toolbar-btn" style="font-style:italic;">I</span>
                <div class="wb-toolbar-sep"></div>
                <i class="ti ti-link" style="font-size:13px;color:var(--color-text-secondary)" aria-hidden="true"></i>
                <i class="ti ti-bolt" style="font-size:13px;color:#0ea5e9" aria-hidden="true"></i>
              </div>
              <div class="wb-h1">Site Vitrine</div>
              <div class="wb-h2">E-commerce Shopify</div>
              <div class="wb-h3">Application métier sur-mesure</div>
            </div>
          </div>
        </div>

        <!-- Card 2 – SEO Local -->
        <div class="wb-card">
          <div class="wb-card-head">
            <i class="ti ti-map-pin wb-card-icon" aria-hidden="true"></i>
            <h3 class="wb-card-title">SEO Local</h3>
          </div>
          <p class="wb-card-desc">Dominez le Local Pack sur Biarritz, Bayonne, Anglet et Hossegor. Audits 360° et netlinking pour une visibilité durable.</p>
          <div class="wb-preview">
            <div class="wb-seo">
              <div class="wb-seo-row">
                <div>
                  <div class="wb-seo-name">WaveIA — Bidart</div>
                  <div class="wb-seo-sub">Google My Business optimisé</div>
                </div>
                <span class="wb-seo-badge green">#1 Local</span>
              </div>
              <div class="wb-seo-row">
                <div>
                  <div class="wb-seo-name">Agence web Biarritz</div>
                  <div class="wb-seo-sub">Mot-clé cible</div>
                </div>
                <span class="wb-seo-badge blue">Top 3</span>
              </div>
              <div class="wb-seo-row">
                <div>
                  <div class="wb-seo-name">Score technique SEO</div>
                  <div class="wb-seo-sub">Audit complet</div>
                </div>
                <span class="wb-seo-badge green">95/100</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 – Portfolio -->
        <div class="wb-card">
          <div class="wb-card-head">
            <i class="ti ti-layout-grid wb-card-icon" aria-hidden="true"></i>
            <h3 class="wb-card-title">Portfolio</h3>
          </div>
          <p class="wb-card-desc">Mettez en avant vos réalisations avec métriques de résultat. +180% de ventes, 0.3s de chargement : des preuves concrètes.</p>
          <div class="wb-preview">
            <div class="wb-portfolio">
              <div class="wb-port-tabs">
                <div class="wb-port-tab active">Vitrines</div>
                <div class="wb-port-tab">E-commerce</div>
                <div class="wb-port-tab">Apps</div>
              </div>
              <div class="wb-port-grid">
                <div class="wb-port-item wb-port-item-1"><span class="wb-port-label">Restaurant<br>Côte Basque</span></div>
                <div class="wb-port-item wb-port-item-2"><span class="wb-port-label">Agence immo<br>Biarritz</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4 – Identité Visuelle -->
        <div class="wb-card">
          <div class="wb-card-head">
            <i class="ti ti-brush wb-card-icon" aria-hidden="true"></i>
            <h3 class="wb-card-title">Identité visuelle</h3>
          </div>
          <p class="wb-card-desc">Logos, chartes graphiques, shooting photo et vidéos immersives. Une cohérence de marque qui inspire confiance.</p>
          <div class="wb-preview">
            <div class="wb-brand">
              <div class="wb-brand-post">
                <div class="wb-brand-header">
                  <div class="wb-brand-avatar">W</div>
                  <div>
                    <div class="wb-brand-name">WaveIA Studio</div>
                    <div class="wb-brand-time">Identité de marque</div>
                  </div>
                </div>
                <div class="wb-brand-text">Logo + charte graphique + typographies livrés en 10 jours.</div>
                <div class="wb-brand-palette">
                  <div class="wb-swatch" style="background:#0ea5e9"></div>
                  <div class="wb-swatch" style="background:#1a3a6e"></div>
                  <div class="wb-swatch" style="background:#E6F1FB"></div>
                  <div class="wb-swatch" style="background:#F1F5F9"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 5 – Campagnes Ads -->
        <div class="wb-card">
          <div class="wb-card-head">
            <i class="ti ti-speakerphone wb-card-icon" aria-hidden="true"></i>
            <h3 class="wb-card-title">Campagnes Ads</h3>
          </div>
          <p class="wb-card-desc">Google Ads et Meta Ads ciblés sur votre zone. Des résultats immédiats, des budgets maîtrisés, un ROI mesurable.</p>
          <div class="wb-preview">
            <div class="wb-ads">
              <div class="wb-ads-stat">
                <div>
                  <div class="wb-ads-label">Ventes générées</div>
                  <div class="wb-bar-wrap">
                    <div class="wb-bar-bg"><div class="wb-bar-fill green" style="width:80%"></div></div>
                  </div>
                </div>
                <div class="wb-ads-val green">+180%</div>
              </div>
              <div class="wb-ads-stat">
                <div>
                  <div class="wb-ads-label">Taux de conversion</div>
                  <div class="wb-bar-wrap">
                    <div class="wb-bar-bg"><div class="wb-bar-fill" style="width:65%"></div></div>
                  </div>
                </div>
                <div class="wb-ads-val">×3.2</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 6 – Avis clients -->
        <div class="wb-card">
          <div class="wb-card-head">
            <i class="ti ti-star wb-card-icon" aria-hidden="true"></i>
            <h3 class="wb-card-title">Avis clients</h3>
          </div>
          <p class="wb-card-desc">Recueillez des avis authentiques et construisez une réputation locale solide. La preuve sociale qui convertit.</p>
          <div class="wb-preview">
            <div class="wb-avis">
              <div class="wb-avis-stars">
                <span class="wb-star">★</span><span class="wb-star">★</span><span class="wb-star">★</span><span class="wb-star">★</span><span class="wb-star">★</span>
                <span style="font-size:12px;font-weight:500;color:var(--color-text-primary);margin-left:6px;">5.0</span>
              </div>
              <div class="wb-avis-row">
                <span class="wb-avis-key">Excellent</span>
                <div class="wb-avis-bar-bg"><div class="wb-avis-bar-fill" style="width:100%"></div></div>
                <span class="wb-avis-pct">100%</span>
              </div>
              <div class="wb-avis-row">
                <span class="wb-avis-key">Très bon</span>
                <div class="wb-avis-bar-bg"><div class="wb-avis-bar-fill" style="width:0%"></div></div>
                <span class="wb-avis-pct">0%</span>
              </div>
              <div class="wb-avis-row">
                <span class="wb-avis-key">Bon</span>
                <div class="wb-avis-bar-bg"><div class="wb-avis-bar-fill" style="width:0%"></div></div>
                <span class="wb-avis-pct">0%</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="wb-cta-wrap">
        <button class="wb-cta">
          Découvrir nos réalisations
          <i class="ti ti-arrow-right" style="font-size:16px" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  `;

  return (
    <section className="w-full bg-[var(--color-background-primary)] py-12 relative overflow-hidden z-10 wb-wrapper">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </section>
  );
}
