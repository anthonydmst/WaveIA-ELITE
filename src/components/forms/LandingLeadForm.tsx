"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface LandingLeadFormProps {
  formName: string;
  focusOptions: string[];
  buttonText: string;
}

export function LandingLeadForm({ formName, focusOptions, buttonText }: LandingLeadFormProps) {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    tel: '',
    focus: focusOptions.length > 0 ? focusOptions[0] : ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.prenom || !formData.nom || !formData.email || !formData.tel) return;
    
    setStatus('loading');
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _source: formName,
          Prénom: formData.prenom,
          Nom: formData.nom,
          "Email Professionnel": formData.email,
          Téléphone: formData.tel,
          "Focus Stratégique": formData.focus
        })
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center border border-emerald-500/30 rounded-2xl bg-emerald-500/5 animate-in fade-in zoom-in-95 duration-500">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">Demande envoyée avec succès</h3>
        <p className="text-sm text-muted-foreground">Un expert de chez WaveIA va prendre contact avec vous très rapidement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Prénom</label>
          <input 
            required type="text" placeholder="Sarah" 
            value={formData.prenom} onChange={e => setFormData({...formData, prenom: e.target.value})}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nom</label>
          <input 
            required type="text" placeholder="Lenoir" 
            value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" 
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email professionnel</label>
        <input 
          required type="email" placeholder="sarah@startup.fr" 
          value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" 
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Téléphone</label>
        <input 
          required type="tel" placeholder="06 00 00 00 00" 
          value={formData.tel} onChange={e => setFormData({...formData, tel: e.target.value})}
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors" 
        />
      </div>
      {focusOptions.length > 0 && (
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Principal Focus Stratégique</label>
          <select 
            required value={formData.focus} onChange={e => setFormData({...formData, focus: e.target.value})}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none transition-colors"
          >
            {focusOptions.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      )}
      
      {status === 'error' && (
        <p className="text-red-500 text-xs font-semibold text-center mt-2">Une erreur est survenue, veuillez réessayer.</p>
      )}

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="bg-primary text-white hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] w-full font-heading font-bold py-3.5 rounded-full mt-4 transition-transform hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? 'Envoi en cours...' : buttonText}
        {status !== 'loading' && <ArrowRight className="w-4 h-4" />}
      </button>
      <p className="text-center text-xs text-muted-foreground/70 mt-2">Étude de faisabilité et conseils 100% gratuits.</p>
    </form>
  );
}
