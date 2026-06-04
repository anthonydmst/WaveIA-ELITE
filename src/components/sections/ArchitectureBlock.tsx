"use client";

import React, { useState } from 'react';

const panels = [
  {
    left: `
      <div>
        <div class="wa-step-badge">
          <div class="wa-step-num">1</div>
          <span class="wa-step-label">L'entête</span>
        </div>
        <h3 class="wa-card-title">Votre identité,<br>dès la première seconde.</h3>
        <p class="wa-card-desc">L'entête concentre l'essentiel : logo, nom, secteur d'activité, localisation et photos de couverture. Vos visiteurs comprennent en un coup d'œil qui vous êtes — et peuvent vous contacter immédiatement.</p>
        <ul class="wa-features">
          <li>Jusqu'à 5 photos de couverture haute résolution</li>
          <li>Score PageSpeed 95+ garanti dès la mise en ligne</li>
          <li>Bouton de contact visible à tout moment</li>
        </ul>
      </div>`,
    right: `
      <div style="background:var(--color-background-secondary); border-radius:var(--border-radius-lg); overflow:hidden; border:0.5px solid var(--color-border-tertiary);">
        <div class="wa-mockup-header">
          <div class="wa-cover-img"><i class="ti ti-building" style="font-size:32px;color:rgba(255,255,255,0.2)" aria-hidden="true"></i></div>
          <div class="wa-cover-img-2"><i class="ti ti-device-laptop" style="font-size:32px;color:rgba(255,255,255,0.2)" aria-hidden="true"></i></div>
        </div>
        <div class="wa-brand-row">
          <div class="wa-logo">W</div>
          <div class="wa-brand-info">
            <div class="wa-name-tag">Agence Web</div>
            <p class="wa-name">WaveIA</p>
            <div class="wa-meta">
              <span><i class="ti ti-code" style="font-size:11px" aria-hidden="true"></i> Next.js</span>
              <span><i class="ti ti-map-pin" style="font-size:11px" aria-hidden="true"></i> Bidart</span>
            </div>
          </div>
        </div>
      </div>`
  },
  {
    left: `
      <div>
        <div class="wa-step-badge">
          <div class="wa-step-num">2</div>
          <span class="wa-step-label">La navigation</span>
        </div>
        <h3 class="wa-card-title">Une navigation pensée pour convertir.</h3>
        <p class="wa-card-desc">Chaque section est accessible en un clic. L'architecture de votre site guide naturellement le visiteur vers l'action souhaitée — devis, appel, réservation — sans friction ni temps de chargement.</p>
        <ul class="wa-features">
          <li>Chargement instantané (&lt;100ms) entre les sections</li>
          <li>Onglets personnalisables selon votre activité</li>
          <li>Adapté parfaitement à tous les écrans</li>
          <li>Architecture SEO-friendly intégrée</li>
        </ul>
      </div>`,
    right: `
      <div style="background:var(--color-background-secondary); border-radius:var(--border-radius-lg); overflow:hidden; border:0.5px solid var(--color-border-tertiary); padding-top:1rem;">
        <div style="padding: 0 1rem 0.5rem; font-size:12px; font-weight:500; color:var(--color-text-secondary);">WaveIA — Menu principal</div>
        <div class="wa-nav-mockup">
          <div class="wa-nav-pill active">Accueil</div>
          <div class="wa-nav-pill">Services</div>
          <div class="wa-nav-pill">Réalisations</div>
          <div class="wa-nav-pill">SEO</div>
          <div class="wa-nav-pill">Contact</div>
        </div>
        <div style="padding:0 1rem 1rem;">
          <div style="background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:12px;display:flex;align-items:center;gap:10px;">
            <i class="ti ti-bolt" style="font-size:20px;color:#0E5EFF" aria-hidden="true"></i>
            <div>
              <div style="font-size:12px;font-weight:500;color:var(--color-text-primary);">Temps de réponse</div>
              <div style="font-size:18px;font-weight:700;font-family:'Syne',sans-serif;color:#0E5EFF;">&lt; 100ms</div>
            </div>
          </div>
        </div>
      </div>`
  },
  {
    left: `
      <div>
        <div class="wa-step-badge">
          <div class="wa-step-num">3</div>
          <span class="wa-step-label">Le contenu</span>
        </div>
        <h3 class="wa-card-title">Vos services, clairement présentés.</h3>
        <p class="wa-card-desc">Tarifs transparents, descriptions claires, portfolio de réalisations : votre site vitrine devient votre meilleur commercial. Nous affichons ce qui convainc, et rien de superflu.</p>
        <ul class="wa-features">
          <li>Tarification transparente affichée (790€, 149€/mois…)</li>
          <li>Portfolio avec métriques de résultat (+180% ventes)</li>
          <li>Chargement instantané, zéro plugin superflu</li>
        </ul>
      </div>`,
    right: `
      <div style="background:var(--color-background-secondary); border-radius:var(--border-radius-lg); overflow:hidden; border:0.5px solid var(--color-border-tertiary); padding:1rem;">
        <div style="font-size:11px;font-weight:500;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Nos services</div>
        <div class="wa-content-mockup" style="padding:0;">
          <div class="wa-service-row">
            <div><div class="wa-service-name">Site vitrine Next.js</div><div class="wa-service-tag">Livraison 3 semaines</div></div>
            <div class="wa-service-price">790€</div>
          </div>
          <div class="wa-service-row">
            <div><div class="wa-service-name">SEO local Côte Basque</div><div class="wa-service-tag">Biarritz · Bayonne · Anglet</div></div>
            <div class="wa-service-price">149€/mois</div>
          </div>
          <div class="wa-service-row">
            <div><div class="wa-service-name">Identité visuelle & Logo</div><div class="wa-service-tag">Charte graphique complète</div></div>
            <div class="wa-service-price">490€</div>
          </div>
        </div>
      </div>`
  },
  {
    left: `
      <div>
        <div class="wa-step-badge">
          <div class="wa-step-num">4</div>
          <span class="wa-step-label">Barre latérale</span>
        </div>
        <h3 class="wa-card-title">Vos infos, toujours accessibles.</h3>
        <p class="wa-card-desc">Horaires, adresse, lien Google Maps, formulaire de contact sécurisé, réseaux sociaux : tout reste visible pendant la visite. Aucune raison pour un client de repartir sans vous contacter.</p>
        <ul class="wa-features">
          <li>Formulaire anti-spam sécurisé inclus</li>
          <li>Fiche Google My Business optimisée en parallèle</li>
          <li>Gérez la visibilité de chaque élément</li>
        </ul>
      </div>`,
    right: `
      <div style="background:var(--color-background-secondary); border-radius:var(--border-radius-lg); overflow:hidden; border:0.5px solid var(--color-border-tertiary); padding:1rem;">
        <div style="font-size:11px;font-weight:500;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Informations</div>
        <div class="wa-sidebar-mockup" style="padding:0;">
          <div class="wa-sidebar-block">
            <div class="wa-sidebar-label">Adresse</div>
            <div class="wa-sidebar-value">Technopôle Izarbel, Bidart</div>
          </div>
          <div class="wa-sidebar-block">
            <div class="wa-sidebar-label">Spécialité</div>
            <div class="wa-sidebar-value">Agence web — Next.js & IA</div>
          </div>
          <div class="wa-sidebar-block">
            <div class="wa-sidebar-label">Réseaux</div>
            <div style="display:flex;gap:8px;margin-top:4px;">
              <i class="ti ti-brand-linkedin" style="font-size:18px;color:#0E5EFF" aria-hidden="true"></i>
              <i class="ti ti-brand-instagram" style="font-size:18px;color:var(--color-text-secondary)" aria-hidden="true"></i>
              <i class="ti ti-brand-github" style="font-size:18px;color:var(--color-text-secondary)" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <button class="wa-contact-btn" style="margin-top:10px;width:100%;padding:9px;background:#0E5EFF;color:#fff;border:none;border-radius:6px;font-size:12px;font-weight:500;font-family:'Inter',sans-serif;cursor:pointer;">
          <i class="ti ti-send" style="font-size:13px;vertical-align:-2px;margin-right:5px" aria-hidden="true"></i>Nous contacter
        </button>
      </div>`
  }
];

export function ArchitectureBlock() {
  const [current, setCurrent] = useState(0);
  const tabs = ["Entête", "Navigation", "Services", "Barre latérale"];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=Inter:wght@400;500&display=swap');
    
    /* Provide default fallback colors just in case CSS vars aren't defined identically in global context */
    .wa-block-wrapper {
      --color-background-primary: var(--background, #ffffff);
      --color-background-secondary: var(--muted, #f3f4f6);
      --color-border-secondary: var(--border, #e5e7eb);
      --color-border-tertiary: var(--border, #e5e7eb);
      --color-text-primary: var(--foreground, #111827);
      --color-text-secondary: var(--muted-foreground, #4b5563);
      --border-radius-lg: 12px;
      --border-radius-xl: 16px;
    }
    
    .dark .wa-block-wrapper {
      --color-background-primary: var(--background, #030712);
      --color-background-secondary: var(--muted, #111827);
      --color-border-secondary: var(--border, #1f2937);
      --color-border-tertiary: var(--border, #1f2937);
      --color-text-primary: var(--foreground, #f9fafb);
      --color-text-secondary: var(--muted-foreground, #9ca3af);
    }

    .wa-block-wrapper { font-family: 'Inter', sans-serif; padding: 3rem 0 2rem; max-width: 1200px; margin: 0 auto; }
    .wa-header { text-align: center; margin-bottom: 2.5rem; padding: 0 1rem; }
    .wa-title { font-family: 'Syne', sans-serif; font-size: 38px; font-weight: 700; color: var(--color-text-primary); margin: 0 0 1rem; line-height: 1.15; }
    .wa-subtitle { font-size: 16px; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.7; }

    .wa-tabs { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 2rem; padding: 0 1rem; }
    .wa-tab { padding: 8px 20px; border-radius: 999px; font-size: 14px; font-weight: 500; cursor: pointer; border: 0.5px solid var(--color-border-secondary); background: var(--color-background-primary); color: var(--color-text-secondary); transition: all 0.18s; font-family: 'Inter', sans-serif; outline: none; }
    .wa-tab:hover { background: var(--color-background-secondary); color: var(--color-text-primary); }
    .wa-tab.active { background: #0E5EFF; color: #fff; border-color: #0E5EFF; }

    .wa-card { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-xl); padding: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: center; margin: 0 1rem; }
    
    @media (max-width: 768px) {
      .wa-card { grid-template-columns: 1fr; gap: 2rem; padding: 1.5rem; }
      .wa-title { font-size: 30px; }
    }

    .wa-step-badge { display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem; }
    .wa-step-num { width: 28px; height: 28px; border-radius: 50%; background: #0E5EFF; color: #fff; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; flex-shrink: 0; }
    .wa-step-label { font-size: 13px; font-weight: 500; color: var(--color-text-secondary); }

    .wa-card-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: var(--color-text-primary); margin: 0 0 0.75rem; line-height: 1.25; }
    .wa-card-desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; margin: 0 0 1.25rem; }

    .wa-features { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
    .wa-features li { font-size: 13px; color: var(--color-text-secondary); display: flex; align-items: flex-start; gap: 8px; }
    .wa-features li::before { content: ''; width: 18px; height: 18px; border-radius: 50%; background: #0E5EFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M3 8l3.5 3.5L13 5' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-size: 14px; background-repeat: no-repeat; background-position: center; margin-top: 1px; }

    .wa-preview { background: var(--color-background-secondary); border-radius: var(--border-radius-lg); overflow: hidden; border: 0.5px solid var(--color-border-tertiary); position: relative; }
    .wa-preview-inner { padding: 1rem; }

    .wa-mockup-header { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; border-radius: 8px; overflow: hidden; margin-bottom: -30px; }
    .wa-cover-img { height: 90px; background: linear-gradient(135deg, #1a3a6e 0%, #0E5EFF 100%); display: flex; align-items: center; justify-content: center; }
    .wa-cover-img-2 { height: 90px; background: linear-gradient(135deg, #0b2a52 0%, #1e4db7 100%); display: flex; align-items: center; justify-content: center; }
    .wa-cover-icon { font-size: 28px; color: rgba(255,255,255,0.25); }

    .wa-brand-row { display: flex; align-items: flex-end; gap: 12px; padding: 0 1rem 1rem; position: relative; z-index: 1; }
    .wa-logo { width: 52px; height: 52px; border-radius: 50%; background: #0E5EFF; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 16px; color: #fff; border: 3px solid var(--color-background-secondary); flex-shrink: 0; }
    .wa-brand-info { padding-bottom: 4px; }
    .wa-name-tag { display: inline-block; background: #0E5EFF; color: #fff; font-size: 9px; font-weight: 500; padding: 2px 7px; border-radius: 4px; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.04em; }
    .wa-name { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: var(--color-text-primary); margin: 0; }
    .wa-meta { font-size: 11px; color: var(--color-text-secondary); display: flex; gap: 8px; margin-top: 2px; }
    .wa-meta span { display: flex; align-items: center; gap: 3px; }

    .wa-nav-mockup { display: flex; gap: 6px; padding: 0 1rem 1rem; flex-wrap: wrap; }
    .wa-nav-pill { padding: 5px 12px; border-radius: 999px; font-size: 11px; background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); color: var(--color-text-secondary); }
    .wa-nav-pill.active { background: #0E5EFF; color: #fff; border-color: #0E5EFF; }

    .wa-content-mockup { padding: 0 1rem 1rem; display: flex; flex-direction: column; gap: 6px; }
    .wa-service-row { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: 8px; padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; }
    .wa-service-name { font-size: 12px; font-weight: 500; color: var(--color-text-primary); }
    .wa-service-price { font-size: 11px; color: #0E5EFF; font-weight: 500; }
    .wa-service-tag { font-size: 10px; color: var(--color-text-secondary); margin-top: 1px; }

    .wa-sidebar-mockup { padding: 0 1rem 1rem; display: grid; grid-template-columns: 1fr; gap: 6px; }
    .wa-sidebar-block { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: 8px; padding: 10px 12px; }
    .wa-sidebar-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-secondary); margin-bottom: 4px; }
    .wa-sidebar-value { font-size: 12px; font-weight: 500; color: var(--color-text-primary); }
    .wa-contact-btn { width: 100%; padding: 8px; background: #0E5EFF; color: #fff; border: none; border-radius: 6px; font-size: 12px; font-weight: 500; font-family: 'Inter', sans-serif; cursor: pointer; margin-top: 2px; }
  `;

  return (
    <section className="w-full bg-[var(--color-background-primary)] py-12 relative overflow-hidden z-10">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="wa-block-wrapper">
        <div className="wa-header">
          <h2 className="wa-title">Toute votre performance,<br/>sur une seule page.</h2>
          <p className="wa-subtitle">Entre un WordPress lent et une page Facebook limitée, WaveIA conçoit votre site en Next.js 15 — une architecture de pointe, pensée pour la conversion et optimisée pour votre visibilité locale.</p>
        </div>

        <div className="wa-tabs">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`wa-tab ${current === idx ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="wa-card">
          <div className="wa-panel-content" dangerouslySetInnerHTML={{ __html: panels[current]?.left ?? "" }} />
          <div className="wa-preview" dangerouslySetInnerHTML={{ __html: panels[current]?.right ?? "" }} />
        </div>
      </div>
    </section>
  );
}
