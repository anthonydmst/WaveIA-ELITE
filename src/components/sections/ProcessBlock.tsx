"use client";

import React, { useEffect, useRef } from 'react';

export function ProcessBlock() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const toggles = containerRef.current.querySelectorAll('.wm1-toggle');
    
    const handleToggle = (e: Event) => {
      const toggle = e.currentTarget as HTMLElement;
      if (toggle.classList.contains('on')) {
        toggle.classList.replace('on', 'off');
      } else {
        toggle.classList.replace('off', 'on');
      }
    };

    toggles.forEach(toggle => {
      toggle.addEventListener('click', handleToggle);
    });

    return () => {
      toggles.forEach(toggle => {
        toggle.removeEventListener('click', handleToggle);
      });
    };
  }, []);

  const css = `

    .wp-wrapper {
      --color-background-primary: var(--background, #ffffff);
      --color-background-secondary: var(--muted, #f3f4f6);
      --color-border-secondary: var(--border, #e5e7eb);
      --color-border-tertiary: var(--border, #e5e7eb);
      --color-text-primary: var(--foreground, #111827);
      --color-text-secondary: var(--muted-foreground, #4b5563);
      --border-radius-lg: 12px;
      --border-radius-xl: 16px;
    }
    
    .dark .wp-wrapper {
      --color-background-primary: var(--background, #030712);
      --color-background-secondary: var(--muted, #111827);
      --color-border-secondary: var(--border, #1f2937);
      --color-border-tertiary: var(--border, #1f2937);
      --color-text-primary: var(--foreground, #f9fafb);
      --color-text-secondary: var(--muted-foreground, #9ca3af);
    }

    .wp-wrapper * { box-sizing: border-box; }
    .wp { font-family: 'Inter', sans-serif; padding: 3rem 1rem 0; max-width: 1200px; margin: 0 auto; }

    .wp-hero { text-align: center; margin-bottom: 4rem; }
    .wp-hero-title { font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 700; color: var(--color-text-primary); margin: 0; line-height: 1.15; }

    /* Timeline */
    .wp-timeline { position: relative; display: flex; flex-direction: column; align-items: center; }
    .wp-line { width: 1px; background: #0ea5e9; opacity: 0.25; flex-shrink: 0; }
    .wp-line-top { height: 48px; }
    .wp-line-mid { height: 64px; }
    .wp-line-bot { height: 64px; }
    .wp-dot { width: 40px; height: 40px; border-radius: 50%; background: #0ea5e9; display: flex; align-items: center; justify-content: center; flex-shrink: 0; z-index: 1; }
    .wp-dot i { color: #fff; font-size: 18px; }

    /* Step row */
    .wp-step { display: grid; gap: 2rem; align-items: center; width: 100%; max-width: 780px; padding: 0 0.5rem; }
    .wp-step-left { grid-template-columns: 1fr 1fr; }
    .wp-step-right { grid-template-columns: 1fr 1fr; }

    @media (max-width: 768px) {
      .wp-step-left, .wp-step-right { grid-template-columns: 1fr !important; }
      .wp-step-right > div:first-child { order: 2; }
      .wp-step-right > div:last-child { order: 1; }
      .wm1-grid { grid-template-columns: 1fr 1fr !important; }
      .wp-fin-grid { grid-template-columns: 1fr !important; }
      .wp-hero-title { font-size: 30px; }
      .wp-fin-title { font-size: 30px; }
    }

    .wp-step-label { display: flex; align-items: center; gap: 10px; margin-bottom: 0.75rem; }
    .wp-step-tag { font-size: 13px; color: var(--color-text-secondary); font-weight: 400; }
    .wp-step-num { width: 28px; height: 28px; border-radius: 50%; background: #0ea5e9; color: #fff; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; flex-shrink: 0; }
    .wp-step-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: var(--color-text-primary); margin: 0 0 0.6rem; }
    .wp-step-desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; margin: 0; }

    /* Mockup cards */
    .wp-mock { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: 14px; padding: 1rem; overflow: hidden; }
    .wp-mock-sm { font-size: 11px; }

    /* Mockup 1 – modules toggle */
    .wm1-steps { display: flex; gap: 4px; align-items: center; margin-bottom: 10px; overflow: hidden; }
    .wm1-step-item { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1; }
    .wm1-step-circle { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; font-family: 'Syne', sans-serif; }
    .wm1-step-circle.done { background: #0ea5e9; color: #fff; }
    .wm1-step-circle.active { background: #0ea5e9; color: #fff; }
    .wm1-step-circle.todo { background: var(--color-background-secondary); color: var(--color-text-secondary); border: 0.5px solid var(--color-border-tertiary); }
    .wm1-step-name { font-size: 8px; color: var(--color-text-secondary); text-align: center; }
    .wm1-step-name.active { color: #0ea5e9; font-weight: 500; }
    .wm1-connector { flex: 0.4; height: 1px; background: var(--color-border-tertiary); margin-bottom: 10px; }
    .wm1-connector.done { background: #0ea5e9; }
    .wm1-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px; }
    .wm1-module { background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 7px; padding: 7px 8px; }
    .wm1-module-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 3px; }
    .wm1-module-name { font-size: 9px; font-weight: 500; color: var(--color-text-primary); }
    .wm1-module-desc { font-size: 8px; color: var(--color-text-secondary); line-height: 1.4; }
    .wm1-toggle { width: 22px; height: 12px; border-radius: 99px; display: flex; align-items: center; padding: 0 2px; flex-shrink: 0; cursor: pointer; transition: background 0.2s; }
    .wm1-toggle.on { background: #0ea5e9; justify-content: flex-end; }
    .wm1-toggle.off { background: var(--color-border-tertiary); justify-content: flex-start; }
    .wm1-toggle-thumb { width: 8px; height: 8px; border-radius: 50%; background: #fff; }

    /* Mockup 2 – content form */
    .wm2 { display: flex; flex-direction: column; gap: 8px; }
    .wm2-field { }
    .wm2-label { font-size: 9px; font-weight: 500; color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: .04em; margin-bottom: 3px; }
    .wm2-input { width: 100%; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 6px; padding: 6px 8px; font-size: 10px; color: var(--color-text-primary); font-family: 'Inter', sans-serif; }
    .wm2-img-zone { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .wm2-upload { background: var(--color-background-secondary); border: 0.5px dashed var(--color-border-secondary); border-radius: 6px; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; }
    .wm2-upload-img { background: linear-gradient(135deg, #1a3a6e 0%, #0ea5e9 100%); border-radius: 5px; padding: 10px; display: flex; align-items: center; justify-content: center; position: relative; }
    .wm2-img-del { position: absolute; top: -5px; right: -5px; width: 14px; height: 14px; border-radius: 50%; background: #E24B4A; display: flex; align-items: center; justify-content: center; }
    .wm2-row { display: flex; justify-content: space-between; align-items: center; }
    .wm2-toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-top: 0.5px solid var(--color-border-tertiary); }

    /* Mockup 3 – customization */
    .wm3 { display: flex; flex-direction: column; gap: 8px; }
    .wm3-logo-row { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .wm3-logo-upload { background: var(--color-background-secondary); border: 0.5px dashed var(--color-border-secondary); border-radius: 6px; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; }
    .wm3-logo-preview { background: #0ea5e9; border-radius: 6px; padding: 8px; display: flex; align-items: center; justify-content: center; }
    .wm3-colors { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px; margin-top: 4px; }
    .wm3-color-card { background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 7px; padding: 8px; }
    .wm3-color-label { font-size: 8px; color: var(--color-text-secondary); margin-bottom: 5px; }
    .wm3-color-swatch-row { display: flex; align-items: center; gap: 5px; }
    .wm3-swatch { width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0; }
    .wm3-hex { font-size: 9px; font-weight: 500; color: var(--color-text-primary); }

    /* "C'est fini" */
    .wp-fin { padding: 3rem 0; text-align: center; }
    .wp-fin-arrow { color: #0ea5e9; opacity: 0.4; margin-bottom: 2rem; }
    .wp-fin-title { font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 700; color: var(--color-text-primary); margin: 0 0 1rem; }
    .wp-fin-sub { font-size: 14px; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto 2.5rem; line-height: 1.7; }
    .wp-fin-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
    .wp-fin-card { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: 12px; padding: 1.1rem; text-align: left; display: flex; gap: 12px; align-items: flex-start; }
    .wp-fin-icon { width: 36px; height: 36px; border-radius: 10px; background: #E6F1FB; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .dark .wp-fin-icon { background: rgba(14,94,255,0.2); }
    .wp-fin-icon i { font-size: 18px; color: #0ea5e9; }
    .wp-fin-card-title { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: var(--color-text-primary); margin: 0 0 3px; }
    .wp-fin-card-desc { font-size: 12px; color: var(--color-text-secondary); line-height: 1.55; margin: 0; }
  `;

  const htmlContent = `
    <h2 class="sr-only">Processus WaveIA en 3 étapes : activation des services, ajout du contenu, personnalisation — puis les avantages clés</h2>

    <div class="wp">
      <div class="wp-hero">
        <h2 class="wp-hero-title">Un processus simple,<br>très simple.</h2>
      </div>

      <div class="wp-timeline">

        <!-- Dot top -->
        <div class="wp-dot"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></div>
        <div class="wp-line wp-line-top"></div>

        <!-- ÉTAPE 1 -->
        <div class="wp-step wp-step-left">
          <div>
            <div class="wp-step-label">
              <span class="wp-step-tag">Étape</span>
              <div class="wp-step-num">1</div>
            </div>
            <h3 class="wp-step-title">Choisissez vos services.</h3>
            <p class="wp-step-desc">Ingénierie web, SEO local ou identité visuelle : vous choisissez ce dont vous avez besoin et nous structurons votre accompagnement automatiquement.</p>
          </div>
          <div class="wp-mock">
            <div class="wm1-steps">
              <div class="wm1-step-item">
                <div class="wm1-step-circle done">1</div>
                <span class="wm1-step-name">Brief</span>
              </div>
              <div class="wm1-connector done"></div>
              <div class="wm1-step-item">
                <div class="wm1-step-circle active">2</div>
                <span class="wm1-step-name active">Services</span>
              </div>
              <div class="wm1-connector"></div>
              <div class="wm1-step-item">
                <div class="wm1-step-circle todo">3</div>
                <span class="wm1-step-name">Contenu</span>
              </div>
              <div class="wm1-connector"></div>
              <div class="wm1-step-item">
                <div class="wm1-step-circle todo">4</div>
                <span class="wm1-step-name">Mise en ligne</span>
              </div>
            </div>
            <div class="wm1-grid">
              <div class="wm1-module">
                <div class="wm1-module-head">
                  <span class="wm1-module-name">Site vitrine</span>
                  <div class="wm1-toggle on" id="t1"><div class="wm1-toggle-thumb"></div></div>
                </div>
                <div class="wm1-module-desc">Next.js 15, score 95+</div>
              </div>
              <div class="wm1-module">
                <div class="wm1-module-head">
                  <span class="wm1-module-name">SEO local</span>
                  <div class="wm1-toggle on" id="t2"><div class="wm1-toggle-thumb"></div></div>
                </div>
                <div class="wm1-module-desc">GMB + netlinking</div>
              </div>
              <div class="wm1-module">
                <div class="wm1-module-head">
                  <span class="wm1-module-name">Portfolio</span>
                  <div class="wm1-toggle on" id="t3"><div class="wm1-toggle-thumb"></div></div>
                </div>
                <div class="wm1-module-desc">Réalisations + ROI</div>
              </div>
              <div class="wm1-module">
                <div class="wm1-module-head">
                  <span class="wm1-module-name">Branding</span>
                  <div class="wm1-toggle off" id="t4"><div class="wm1-toggle-thumb"></div></div>
                </div>
                <div class="wm1-module-desc">Logo + charte</div>
              </div>
              <div class="wm1-module">
                <div class="wm1-module-head">
                  <span class="wm1-module-name">Ads Google</span>
                  <div class="wm1-toggle off" id="t5"><div class="wm1-toggle-thumb"></div></div>
                </div>
                <div class="wm1-module-desc">Campagnes ciblées</div>
              </div>
              <div class="wm1-module">
                <div class="wm1-module-head">
                  <span class="wm1-module-name">E-commerce</span>
                  <div class="wm1-toggle off" id="t6"><div class="wm1-toggle-thumb"></div></div>
                </div>
                <div class="wm1-module-desc">Shopify intégré</div>
              </div>
            </div>
          </div>
        </div>

        <div class="wp-line wp-line-mid"></div>
        <div class="wp-dot"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></div>
        <div class="wp-line wp-line-top"></div>

        <!-- ÉTAPE 2 -->
        <div class="wp-step wp-step-right">
          <div class="wp-mock">
            <div class="wm2">
              <div class="wm2-field">
                <div class="wm2-label">Nom de l'entreprise</div>
                <div class="wm2-input">WaveIA — Agence web Côte Basque</div>
              </div>
              <div class="wm2-field">
                <div class="wm2-label">Visuels</div>
                <div class="wm2-img-zone">
                  <div class="wm2-upload">
                    <i class="ti ti-cloud-upload" style="font-size:18px;color:var(--color-text-secondary)" aria-hidden="true"></i>
                    <span style="font-size:9px;color:var(--color-text-secondary)">Uploader</span>
                  </div>
                  <div class="wm2-upload-img">
                    <i class="ti ti-device-laptop" style="font-size:24px;color:rgba(255,255,255,0.5)" aria-hidden="true"></i>
                    <div class="wm2-img-del"><i class="ti ti-x" style="font-size:8px;color:#fff" aria-hidden="true"></i></div>
                  </div>
                </div>
              </div>
              <div class="wm2-toggle-row">
                <span style="font-size:10px;color:var(--color-text-secondary);">Afficher les tarifs</span>
                <div class="wm1-toggle on"><div class="wm1-toggle-thumb"></div></div>
              </div>
              <div class="wm2-field">
                <div class="wm2-label">Lien GitHub (code source)</div>
                <div class="wm2-input" style="color:#0ea5e9;">https://github.com/waveia</div>
              </div>
            </div>
          </div>
          <div>
            <div class="wp-step-label">
              <span class="wp-step-tag">Étape</span>
              <div class="wp-step-num">2</div>
            </div>
            <h3 class="wp-step-title">Ajoutez votre contenu.</h3>
            <p class="wp-step-desc">Textes, photos, tarifs, liens vers vos réseaux : vous remplissez des champs simples. Anthony et Julien s'occupent du reste — architecture, SEO et optimisation.</p>
          </div>
        </div>

        <div class="wp-line wp-line-mid"></div>
        <div class="wp-dot"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></div>
        <div class="wp-line wp-line-top"></div>

        <!-- ÉTAPE 3 -->
        <div class="wp-step wp-step-left">
          <div>
            <div class="wp-step-label">
              <span class="wp-step-tag">Étape</span>
              <div class="wp-step-num">3</div>
            </div>
            <h3 class="wp-step-title">Ajoutez votre touche.</h3>
            <p class="wp-step-desc">Couleurs, logo, photos de couverture : votre identité visuelle est intégrée au pixel près. Le résultat est un site qui vous ressemble — et qui convertit.</p>
          </div>
          <div class="wp-mock">
            <div class="wm3">
              <div class="wm3-logo-row">
                <div class="wm3-logo-upload">
                  <i class="ti ti-cloud-upload" style="font-size:18px;color:var(--color-text-secondary)" aria-hidden="true"></i>
                  <span style="font-size:9px;color:var(--color-text-secondary)">Uploader logo</span>
                </div>
                <div class="wm3-logo-preview">
                  <span style="font-family:'Syne',sans-serif;font-size:20px;font-weight:700;color:#fff;letter-spacing:-1px;">W~</span>
                </div>
              </div>
              <div class="wm3-colors">
                <div class="wm3-color-card">
                  <div class="wm3-color-label">Couleur principale</div>
                  <div class="wm3-color-swatch-row">
                    <div class="wm3-swatch" style="background:#0ea5e9;border:0.5px solid rgba(0,0,0,0.1)"></div>
                    <span class="wm3-hex">#0ea5e9</span>
                  </div>
                </div>
                <div class="wm3-color-card">
                  <div class="wm3-color-label">Couleur secondaire</div>
                  <div class="wm3-color-swatch-row">
                    <div class="wm3-swatch" style="background:#1a3a6e;border:0.5px solid rgba(0,0,0,0.1)"></div>
                    <span class="wm3-hex">#1a3a6e</span>
                  </div>
                </div>
                <div class="wm3-color-card">
                  <div class="wm3-color-label">Arrière-plan</div>
                  <div class="wm3-color-swatch-row">
                    <div class="wm3-swatch" style="background:#F1F5F9;border:0.5px solid rgba(0,0,0,0.1)"></div>
                    <span class="wm3-hex">#F1F5F9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="wp-line wp-line-mid"></div>
        <div class="wp-dot" style="background:transparent;border:none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.4"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>

      </div>

      <!-- C'est fini -->
      <div class="wp-fin">
        <h2 class="wp-fin-title">C'est fini.</h2>
        <p class="wp-fin-sub">Votre site est en ligne, sans stress, sans jargon technique, sans mauvaise surprise. En quelques semaines, vous avez une vitrine de qualité supérieure. Partagez-la, faites-la vivre. On vous souhaite le meilleur pour votre activité.</p>
        <div class="wp-fin-grid">
          <div class="wp-fin-card">
            <div class="wp-fin-icon"><i class="ti ti-coin" aria-hidden="true"></i></div>
            <div>
              <p class="wp-fin-card-title">40% moins cher</p>
              <p class="wp-fin-card-desc">Que les agences traditionnelles, grâce à l'IA. Tarifs transparents, aucun frais caché.</p>
            </div>
          </div>
          <div class="wp-fin-card">
            <div class="wp-fin-icon"><i class="ti ti-rocket" aria-hidden="true"></i></div>
            <div>
              <p class="wp-fin-card-title">Mise en ligne rapide</p>
              <p class="wp-fin-card-desc">Site vitrine livré en 3 semaines. Architecture prête, optimisée, immédiatement opérationnelle.</p>
            </div>
          </div>
          <div class="wp-fin-card">
            <div class="wp-fin-icon"><i class="ti ti-bolt" aria-hidden="true"></i></div>
            <div>
              <p class="wp-fin-card-title">Performance garantie</p>
              <p class="wp-fin-card-desc">Score PageSpeed 95+ garanti. Temps de réponse &lt;100ms sur réseau Edge mondial.</p>
            </div>
          </div>
          <div class="wp-fin-card">
            <div class="wp-fin-icon"><i class="ti ti-map-pin" aria-hidden="true"></i></div>
            <div>
              <p class="wp-fin-card-title">Ancrage local fort</p>
              <p class="wp-fin-card-desc">SEO Local Pack Biarritz / Bayonne / Anglet / Hossegor. Vous dominez votre zone.</p>
            </div>
          </div>
          <div class="wp-fin-card">
            <div class="wp-fin-icon"><i class="ti ti-lock" aria-hidden="true"></i></div>
            <div>
              <p class="wp-fin-card-title">Code source propriétaire</p>
              <p class="wp-fin-card-desc">100% de votre code sur GitHub. Vous êtes propriétaire, sans dépendance à une plateforme.</p>
            </div>
          </div>
          <div class="wp-fin-card">
            <div class="wp-fin-icon"><i class="ti ti-users" aria-hidden="true"></i></div>
            <div>
              <p class="wp-fin-card-title">Binôme dédié</p>
              <p class="wp-fin-card-desc">Anthony (stratégie & conversion) + Julien (architecture & SEO technique) sur chaque projet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return (
    <section className="w-full bg-[var(--color-background-primary)] relative overflow-hidden z-10 wp-wrapper">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </section>
  );
}
