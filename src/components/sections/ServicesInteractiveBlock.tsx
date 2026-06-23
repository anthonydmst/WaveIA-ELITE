"use client";

import React, { useState } from 'react';

const panels = [
  {
    left: `
      <div>
        <div className="sib-step-badge">
          <div className="sib-step-icon"><i className="ti ti-code"></i></div>
          <span className="sib-step-label">Création Web</span>
        </div>
        <h3 className="sib-card-title">Des sites conçus pour la performance.</h3>
        <p className="sib-card-desc">Nous développons des plateformes ultra-rapides et sur-mesure. Avec notre architecture Next.js, votre site offre une expérience fluide dès le premier clic, garantissant un taux de conversion maximal.</p>
        <ul className="sib-features">
          <li>Architecture Next.js 15 sur-mesure</li>
          <li>Temps de chargement inférieur à 100ms</li>
          <li>Design Responsive & Premium</li>
        </ul>
      </div>`,
    right: `
      <div style={{background: 'var(--color-background-secondary)', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', border: '0.5px solid var(--color-border-tertiary)', display: 'flex', flexDirection: 'column', height: '100%'}}>
        <div style={{padding: '12px 16px', borderBottom: '0.5px solid var(--color-border-tertiary)', display: 'flex', alignItems: 'center', gap: '8px'}}>
          <div style={{display: 'flex', gap: '4px'}}><div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444'}}></div><div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#eab308'}}></div><div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e'}}></div></div>
          <div style={{background: 'var(--color-background-primary)', border: '0.5px solid var(--color-border-tertiary)', borderRadius: '4px', flex: '1', fontSize: '10px', color: 'var(--color-text-secondary)', textAlign: 'center', padding: '4px'}}>waveia.fr</div>
        </div>
        <div style={{padding: '1.5rem', flex: '1', display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'var(--color-background-primary)', borderRadius: '8px', border: '0.5px solid var(--color-border-tertiary)'}}>
            <div>
              <div style={{fontSize: '11px', fontWeight: '500', color: 'var(--color-text-secondary)', textTransform: 'uppercase'}}>Performance globale</div>
              <div style={{fontFamily: '"Syne", sans-serif', fontSize: '20px', fontWeight: '700', color: '#22c55e', marginTop: '4px'}}>100 / 100</div>
            </div>
            <div style={{width: '48px', height: '48px', borderRadius: '50%', border: '4px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e'}}><i className="ti ti-check" style={{fontSize: '20px'}}></i></div>
          </div>
          <div style={{background: 'var(--color-background-primary)', borderRadius: '8px', border: '0.5px solid var(--color-border-tertiary)', padding: '12px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
              <span style={{fontSize: '11px', color: 'var(--color-text-secondary)'}}>First Contentful Paint</span>
              <span style={{fontSize: '11px', fontWeight: '600', color: '#22c55e'}}>0.4s</span>
            </div>
            <div style={{width: '100%', height: '4px', background: 'var(--color-background-secondary)', borderRadius: '2px'}}><div style={{width: '90%', height: '100%', background: '#22c55e', borderRadius: '2px'}}></div></div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', marginBottom: '6px'}}>
              <span style={{fontSize: '11px', color: 'var(--color-text-secondary)'}}>Time to Interactive</span>
              <span style={{fontSize: '11px', fontWeight: '600', color: '#22c55e'}}>0.8s</span>
            </div>
            <div style={{width: '100%', height: '4px', background: 'var(--color-background-secondary)', borderRadius: '2px'}}><div style={{width: '85%', height: '100%', background: '#22c55e', borderRadius: '2px'}}></div></div>
          </div>
        </div>
      </div>`
  },
  {
    left: `
      <div>
        <div className="sib-step-badge">
          <div className="sib-step-icon"><i className="ti ti-search"></i></div>
          <span className="sib-step-label">SEO & Visibilité</span>
        </div>
        <h3 className="sib-card-title">Dominez les résultats de recherche.</h3>
        <p className="sib-card-desc">Nous propulsons votre site en tête de Google sur votre secteur. Grâce à un mix stratégique de référencement naturel et de campagnes publicitaires ciblées, nous transformons les recherches en clients.</p>
        <ul className="sib-features">
          <li>Optimisation SEO technique et locale</li>
          <li>Création de contenu pertinent et ciblé</li>
          <li>Gestion des campagnes Google Ads</li>
        </ul>
      </div>`,
    right: `
      <div style={{background: 'var(--color-background-secondary)', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', border: '0.5px solid var(--color-border-tertiary)', display: 'flex', flexDirection: 'column', height: '100%'}}>
        <div style={{padding: '1.5rem'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', background: 'var(--color-background-primary)', padding: '8px 12px', borderRadius: '999px', border: '0.5px solid var(--color-border-tertiary)'}}>
            <i className="ti ti-search" style={{color: 'var(--color-text-secondary)', fontSize: '16px'}}></i>
            <span style={{fontSize: '12px', fontWeight: '500', color: 'var(--color-text-primary)'}}>agence web biarritz</span>
            <div style={{marginLeft: 'auto', width: '24px', height: '24px', borderRadius: '50%', background: '#0ea5e9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px'}}><i className="ti ti-microphone"></i></div>
          </div>
          <div style={{background: 'var(--color-background-primary)', borderRadius: '8px', border: '0.5px solid var(--color-border-tertiary)', padding: '16px', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', width: '4px', height: '100%', background: '#0ea5e9'}}></div>
            <div style={{fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '4px'}}>Annonce · waveia.fr</div>
            <div style={{fontSize: '14px', color: '#0ea5e9', fontWeight: '500', marginBottom: '6px', fontFamily: 'arial, sans-serif'}}>WaveIA - Agence Web Premium à Biarritz</div>
            <div style={{fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: '1.4'}}>Création de sites internet Next.js performants et stratégies SEO pour dominer la Côte Basque. Demandez votre devis gratuit.</div>
            <div style={{display: 'flex', gap: '8px', marginTop: '10px'}}>
              <span style={{fontSize: '11px', fontWeight: '500', color: '#0ea5e9', background: 'rgba(14,94,255,0.1)', padding: '4px 8px', borderRadius: '4px'}}>Création Site Web</span>
              <span style={{fontSize: '11px', fontWeight: '500', color: '#0ea5e9', background: 'rgba(14,94,255,0.1)', padding: '4px 8px', borderRadius: '4px'}}>Audit SEO</span>
            </div>
          </div>
          <div style={{marginTop: '12px', background: 'var(--color-background-primary)', borderRadius: '8px', border: '0.5px solid var(--color-border-tertiary)', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
             <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
               <div style={{width: '32px', height: '32px', borderRadius: '4px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7'}}><i className="ti ti-chart-line"></i></div>
               <div>
                 <div style={{fontSize: '11px', color: 'var(--color-text-secondary)'}}>Trafic organique</div>
                 <div style={{fontSize: '14px', fontWeight: '600', color: 'var(--color-text-primary)'}}>+245%</div>
               </div>
             </div>
             <div style={{background: '#dcfce7', color: '#166534', fontSize: '10px', fontWeight: '600', padding: '4px 8px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '4px'}}>
               <i className="ti ti-trending-up"></i> Top 3
             </div>
          </div>
        </div>
      </div>`
  },
  {
    left: `
      <div>
        <div className="sib-step-badge">
          <div className="sib-step-icon"><i className="ti ti-palette"></i></div>
          <span className="sib-step-label">Identité & Com</span>
        </div>
        <h3 className="sib-card-title">Une marque qui marque les esprits.</h3>
        <p className="sib-card-desc">Nous façonnons votre identité visuelle pour qu'elle reflète l'excellence de vos services. De la création de votre logo à l'animation de vos réseaux sociaux, nous assurons une cohérence parfaite.</p>
        <ul className="sib-features">
          <li>Création de charte graphique et logo</li>
          <li>Gestion des réseaux sociaux (Instagram, LinkedIn)</li>
          <li>Supports de communication print & web</li>
        </ul>
      </div>`,
    right: `
      <div style={{background: 'var(--color-background-secondary)', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', border: '0.5px solid var(--color-border-tertiary)', display: 'flex', flexDirection: 'column', height: '100%', padding: '1.5rem'}}>
        <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
          <div style={{flex: '1', background: 'var(--color-background-primary)', borderRadius: '8px', border: '0.5px solid var(--color-border-tertiary)', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
            <div style={{width: '40px', height: '40px', borderRadius: '8px', background: 'linear-gradient(135deg, #0ea5e9, #1a3a6e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: '"Syne", sans-serif', fontWeight: '700', fontSize: '20px'}}>W</div>
            <div style={{fontSize: '10px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Logotype</div>
          </div>
          <div style={{flex: '2', background: 'var(--color-background-primary)', borderRadius: '8px', border: '0.5px solid var(--color-border-tertiary)', padding: '12px'}}>
            <div style={{fontSize: '10px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px'}}>Palette de couleurs</div>
            <div style={{display: 'flex', gap: '6px'}}>
               <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#0ea5e9', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}></div>
               <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#1a3a6e', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}></div>
               <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#f8fafc', border: '0.5px solid var(--color-border-secondary)'}}></div>
               <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#0f172a', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}></div>
            </div>
          </div>
        </div>
        <div style={{background: 'var(--color-background-primary)', borderRadius: '8px', border: '0.5px solid var(--color-border-tertiary)', padding: '12px'}}>
           <div style={{fontSize: '10px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px'}}>Feed Instagram</div>
           <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px'}}>
             <div style={{aspectRatio: '1', borderRadius: '4px', background: 'linear-gradient(45deg, #0ea5e9, #60a5fa)', opacity: '0.8'}}></div>
             <div style={{aspectRatio: '1', borderRadius: '4px', background: 'var(--color-background-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)', fontSize: '24px'}}><i className="ti ti-typography"></i></div>
             <div style={{aspectRatio: '1', borderRadius: '4px', background: 'linear-gradient(45deg, #1a3a6e, #3b82f6)', opacity: '0.9'}}></div>
           </div>
        </div>
      </div>`
  }
];

export function ServicesInteractiveBlock() {
  const [current, setCurrent] = useState(0);
  const tabs = ["Création Web", "SEO & Visibilité", "Identité & Com"];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');
    
    .sib-wrapper {
      --color-background-primary: var(--background, #ffffff);
      --color-background-secondary: var(--muted, #f3f4f6);
      --color-border-secondary: var(--border, #e5e7eb);
      --color-border-tertiary: var(--border, #e5e7eb);
      --color-text-primary: var(--foreground, #111827);
      --color-text-secondary: var(--muted-foreground, #4b5563);
      --border-radius-lg: 12px;
      --border-radius-xl: 16px;
    }
    
    .dark .sib-wrapper {
      --color-background-primary: var(--background, #030712);
      --color-background-secondary: var(--muted, #111827);
      --color-border-secondary: var(--border, #1f2937);
      --color-border-tertiary: var(--border, #1f2937);
      --color-text-primary: var(--foreground, #f9fafb);
      --color-text-secondary: var(--muted-foreground, #9ca3af);
    }

    .sib-wrapper { font-family: 'Inter', sans-serif; padding: 4rem 0; max-width: 1200px; margin: 0 auto; }
    .sib-header { text-align: center; margin-bottom: 2.5rem; padding: 0 1rem; }
    .sib-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; background: rgba(14, 94, 255, 0.1); border: 1px solid rgba(14, 94, 255, 0.2); border-radius: 999px; color: #0ea5e9; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1.5rem; }
    .sib-title { font-family: 'Syne', sans-serif; font-size: 38px; font-weight: 700; color: var(--color-text-primary); margin: 0 0 1rem; line-height: 1.15; }
    .sib-title span { color: #0ea5e9; }
    .sib-subtitle { font-size: 16px; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.7; }

    .sib-tabs { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 3rem; padding: 0 1rem; }
    .sib-tab { padding: 10px 24px; border-radius: 999px; font-size: 14px; font-weight: 500; cursor: pointer; border: 0.5px solid var(--color-border-secondary); background: var(--color-background-primary); color: var(--color-text-secondary); transition: all 0.2s ease; font-family: 'Inter', sans-serif; outline: none; }
    .sib-tab:hover { background: var(--color-background-secondary); color: var(--color-text-primary); }
    .sib-tab.active { background: #0ea5e9; color: #fff; border-color: #0ea5e9; box-shadow: 0 4px 12px rgba(14, 94, 255, 0.25); }

    .sib-card { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-xl); padding: 2.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; margin: 0 1rem; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05); }
    .dark .sib-card { box-shadow: 0 10px 30px -10px rgba(0,0,0,0.3); }
    
    @media (max-width: 768px) {
      .sib-card { grid-template-columns: 1fr; gap: 2rem; padding: 1.5rem; }
      .sib-title { font-size: 30px; }
    }

    .sib-step-badge { display: flex; align-items: center; gap: 12px; margin-bottom: 1.5rem; }
    .sib-step-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(14, 94, 255, 0.1); color: #0ea5e9; font-size: 16px; display: flex; align-items: center; justify-content: center; }
    .sib-step-label { font-size: 14px; font-weight: 600; color: #0ea5e9; text-transform: uppercase; letter-spacing: 0.05em; }

    .sib-card-title { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 700; color: var(--color-text-primary); margin: 0 0 1rem; line-height: 1.25; }
    .sib-card-desc { font-size: 15px; color: var(--color-text-secondary); line-height: 1.7; margin: 0 0 1.5rem; }

    .sib-features { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
    .sib-features li { font-size: 14px; color: var(--color-text-secondary); display: flex; align-items: flex-start; gap: 10px; }
    .sib-features li::before { content: ''; width: 20px; height: 20px; border-radius: 50%; background: #0ea5e9; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill=%22none%22%3E%3Cpath d=%22M3 8l3.5 3.5L13 5%22 stroke=%22white%22 stroke-width=%221.8%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E"); background-size: 14px; background-repeat: no-repeat; background-position: center; margin-top: 1px; }

    .sib-preview-container { height: 100%; min-height: 300px; perspective: 1000px; }
    .sib-preview-inner { animation: fade-in-up 0.4s ease-out forwards; height: 100%; }
    
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(10px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;

  return (
    <section className="w-full bg-[var(--color-background-primary)] py-12 relative overflow-hidden z-10">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="sib-wrapper">
        <div className="sib-header">
          <span className="sib-badge">Nos Expertises</span>
          <h2 className="sib-title">Une maîtrise complète de votre <span>écosystème digital</span>.</h2>
          <p className="sib-subtitle">De la création de votre site internet à l'acquisition de nouveaux clients, nous combinons ingénierie, marketing et design pour accélérer votre croissance.</p>
        </div>

        <div className="sib-tabs">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`sib-tab ${current === idx ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="sib-card">
          <div className="sib-panel-content" dangerouslySetInnerHTML={{ __html: panels[current]?.left ?? "" }} />
          <div className="sib-preview-container">
            <div key={current} className="sib-preview-inner" dangerouslySetInnerHTML={{ __html: panels[current]?.right ?? "" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
