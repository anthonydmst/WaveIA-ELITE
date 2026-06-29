"use client";

import React, { useState } from 'react';
import { ArrowRight, Check, ListChecks, Target, CalendarDays, Edit3, ClipboardList } from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  oneoff: number;
  monthly: number;
  devis: boolean;
  detail?: string;
}

/* ============ SERVICES DATA ============ */
const GROUPS = [
  {
    title: 'Création & refonte de site',
    items: [
      { id: 'vitrine', name: 'Site internet vitrine', oneoff: 790, monthly: 0, devis: false },
      { id: 'ecommerce', name: 'Site vitrine e-commerce', oneoff: 0, monthly: 0, devis: true },
      { id: 'refonte', name: 'Refonte de site web', oneoff: 0, monthly: 0, devis: true },
    ]
  },
  {
    title: 'Référencement naturel (SEO)',
    items: [
      { id: 'seo-quick', name: 'Pack Quick Wins SEO', oneoff: 0, monthly: 250, devis: false, detail: 'Audit technique + 2 optimisations/mois' },
      { id: 'seo-launch', name: 'Pack SEO Lancement', oneoff: 0, monthly: 490, devis: false, detail: 'Audit, pages clés, 4 articles/mois, reporting' },
      { id: 'seo-perf', name: 'Pack SEO Performance', oneoff: 0, monthly: 970, devis: false, detail: '10 articles/mois, netlinking, CRO, conseil' },
    ]
  },
  {
    title: 'Packs tout-en-un',
    items: [
      { id: 'grand-dep', name: 'Pack Grand Départ', oneoff: 1290, monthly: 0, devis: false, detail: 'Site vitrine + SEO + Google My Business' },
      { id: 'ref-local', name: 'Pack Référencement local', oneoff: 0, monthly: 570, devis: false, detail: 'SEO + Google My Business + Maps' },
      { id: 'id-pack', name: 'Pack Identité visuelle', oneoff: 1790, monthly: 0, devis: false, detail: 'Logo + Charte graphique + Plateforme de marque' },
    ]
  },
  {
    title: 'Identité & branding',
    items: [
      { id: 'logo', name: 'Création logo', oneoff: 390, monthly: 0, devis: false },
      { id: 'charte', name: 'Charte graphique', oneoff: 590, monthly: 0, devis: false },
      { id: 'marque', name: 'Plateforme de marque', oneoff: 1000, monthly: 0, devis: false },
    ]
  },
  {
    title: 'Contenus & autres prestations',
    items: [
      { id: 'shooting', name: 'Shooting photo', oneoff: 200, monthly: 0, devis: false, detail: 'Dès 200 €' },
      { id: 'video', name: 'Vidéo personnalisée', oneoff: 350, monthly: 0, devis: false, detail: 'Dès 350 €' },
      { id: 'module', name: 'Module interactif / conversion', oneoff: 100, monthly: 0, devis: false, detail: 'Dès 100 €' },
      { id: 'pub', name: 'Campagne publicitaire', oneoff: 0, monthly: 0, devis: true },
    ]
  }
];

export function DevisSimulator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    prenom: '', nom: '', email: '', tel: '', entreprise: '', poste: '',
    secteur: '', url: '', projet: '', contraintes: '', delai: '', agence: '', newsletter: true
  });

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const getEstimates = () => {
    let o = 0, m = 0;
    selectedServices.forEach(id => {
      GROUPS.forEach(g => {
        g.items.forEach(s => {
          if (s.id === id) {
            o += s.oneoff;
            m += s.monthly;
          }
        });
      });
    });
    return { oneoff: o, monthly: m };
  };

  const { oneoff, monthly } = getEstimates();

  const handleDevis = () => {
    setCurrentStep(2);
    window.scrollTo({ top: undefined, behavior: 'smooth' }); // Avoid hard top jump for now, or you can supply element ref
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitDevis = async () => {
    const err = [];
    if (!formData.prenom) err.push('Prénom');
    if (!formData.nom) err.push('Nom');
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) err.push('Email valide');
    if (!formData.entreprise) err.push('Entreprise');
    if (!formData.projet) err.push('Description du projet');
    if (!formData.secteur) err.push("Secteur d'activité");

    setErrors(err);

    if (err.length === 0) {
      setIsSubmitting(true);
      try {
        const payload = {
          _source: 'Simulateur de Devis',
          Prénom: formData.prenom,
          Nom: formData.nom,
          Email: formData.email,
          Téléphone: formData.tel || 'Non renseigné',
          Entreprise: formData.entreprise,
          Poste: formData.poste || 'Non renseigné',
          Secteur: formData.secteur,
          'URL du site': formData.url || 'Non renseigné',
          'Description du projet': formData.projet,
          'Délai souhaité': formData.delai || 'Non renseigné',
          'Agence déjà sollicitée': formData.agence || 'Non renseigné',
          Newsletter: formData.newsletter ? 'Oui' : 'Non',
          'Enveloppe budgétaire': budget || 'À définir',
          'Prestations sélectionnées': selectedServiceObjects.map(s => s?.name).join(', ') || 'Aucune sélection',
          'Estimation Totale': totalStr || 'Sur devis',
        };

        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error("Erreur lors de l'envoi du devis", err);
      } finally {
        setIsSubmitting(false);
        setCurrentStep(3);
        window.scrollTo({ top: undefined, behavior: 'smooth' });
      }
    }
  };

  const restart = () => {
    setSelectedServices([]);
    setBudget('');
    setFormData({
      prenom: '', nom: '', email: '', tel: '', entreprise: '', poste: '',
      secteur: '', url: '', projet: '', contraintes: '', delai: '', agence: '', newsletter: true
    });
    setErrors([]);
    setCurrentStep(1);
    window.scrollTo({ top: undefined, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Get selected objects for recap
  const selectedServiceObjects = selectedServices.map(id => {
    let matched: ServiceItem | null = null;
    for (const g of GROUPS) {
      const found = g.items.find(s => s.id === id);
      if (found) {
        matched = found as ServiceItem;
        break;
      }
    }
    return matched;
  }).filter((item): item is ServiceItem => item !== null) as ServiceItem[];

  const totalStr = (oneoff > 0 ? `${oneoff.toLocaleString('fr-FR')} €` : '') +
                   (monthly > 0 ? (oneoff > 0 ? ' + ' : '') + `${monthly.toLocaleString('fr-FR')} €/mois` : '');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 flex flex-col justify-center animate-appear" id="simulateur">
      {/* Background Blooms */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,var(--ocean)_0%,transparent_70%)] opacity-10 blur-[80px]" />
        <div className="absolute bottom-[0] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,var(--ocean)_0%,transparent_70%)] opacity-[0.05] blur-[80px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 w-full z-10">
        
        {/* ================= STEP 1 ================= */}
        {currentStep === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Progress */}
            <div className="flex gap-2 mb-8 pt-8">
              <div className="h-1.5 rounded-full bg-primary flex-[2] transition-all duration-500" />
              <div className="h-1.5 rounded-full bg-muted flex-[1] transition-all duration-500" />
            </div>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-ocean mb-3">
              <div className="w-5 h-0.5 bg-ocean/50 rounded-full" />
              Étape 1 / 2
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Simulateur tarifaire
            </h1>
            <p className="text-muted-foreground mb-10 text-lg">
              Sélectionnez vos prestations pour obtenir une première approche budgétaire instantanée.
            </p>

            {/* SERVICES GRID */}
            <div className="space-y-8">
              {GROUPS.map((g, i) => (
                <div key={i}>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4 pb-2 border-b border-border">
                    {g.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {g.items.map(svc => {
                      const isSelected = selectedServices.includes(svc.id);
                      return (
                        <div
                          key={svc.id}
                          onClick={() => toggleService(svc.id)}
                          className={`relative glass-card p-4 transition-all duration-200 cursor-pointer border-2 ${
                            isSelected 
                              ? 'border-ocean bg-ocean/5 shadow-[0_0_0_2px_rgba(14,165,233,0.1)]' 
                              : 'border-border/50 hover:border-ocean/40 hover:-translate-y-0.5'
                          }`}
                        >
                          {isSelected && (
                            <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shadow-lg animate-scale-in" data-in-view="true">
                              <Check className="w-4 h-4" strokeWidth={3} />
                            </div>
                          )}
                          <div className="text-sm font-semibold pr-8 mb-1 leading-tight text-foreground">{svc.name}</div>
                          {svc.devis ? (
                            <div className="text-[13px] italic text-muted-foreground mt-1">Sur devis personnalisé</div>
                          ) : (
                            <div className="text-sm font-bold text-ocean mt-1">
                              {svc.monthly > 0 && svc.oneoff > 0 ? (
                                `${svc.oneoff.toLocaleString('fr-FR')} € + ${svc.monthly} €/mois`
                              ) : svc.monthly > 0 ? (
                                `${svc.monthly} €/mois`
                              ) : (
                                `à partir de ${svc.oneoff.toLocaleString('fr-FR')} €`
                              )}
                            </div>
                          )}
                          {svc.detail && <div className="text-[11px] text-muted-foreground mt-2 leading-tight">{svc.detail}</div>}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* ESTIMATE BAR (Sticky) */}
            <div className="sticky bottom-0 bg-background/80 backdrop-blur-xl border-t border-border py-4 mt-12 -mx-6 px-6 z-20 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex gap-4 w-full md:w-auto flex-1">
                  <div className="glass-card p-3 flex-1 min-w-[140px] bg-card">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">Forfaitaire</div>
                    <div className="font-heading text-2xl font-bold text-ocean">{oneoff > 0 ? `${oneoff.toLocaleString('fr-FR')} €` : '0 €'}</div>
                  </div>
                  <div className="glass-card p-3 flex-1 min-w-[140px] bg-card">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">Mensuel</div>
                    <div className="font-heading text-2xl font-bold text-ocean">{monthly > 0 ? `${monthly.toLocaleString('fr-FR')} €/mois` : '0 €/mois'}</div>
                  </div>
                </div>
                <button
                  onClick={handleDevis}
                  className="bg-primary hover:bg-ocean-dark text-white font-heading font-semibold py-4 md:py-5 px-8 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-ocean/20 w-full md:w-auto whitespace-nowrap"
                >
                  Suivant : Mon Devis
                  <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="h-10"></div>
          </div>
        )}

        {/* ================= STEP 2 ================= */}
        {currentStep === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Progress */}
            <div className="flex gap-2 mb-8 pt-8">
              <div className="h-1.5 rounded-full bg-primary flex-[1] transition-all duration-500 cursor-pointer" onClick={() => setCurrentStep(1)} />
              <div className="h-1.5 rounded-full bg-primary flex-[2] transition-all duration-500" />
            </div>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-ocean mb-3">
              <div className="w-5 h-0.5 bg-ocean/50 rounded-full" />
              Étape 2 / 2
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Devis personnalisé
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Décrivez votre projet. Nos experts vous envoient un devis sur mesure sous 24 h ouvrées.
            </p>

            {/* RECAP BOX */}
            {selectedServiceObjects.length > 0 && (
              <div className="bg-ocean/5 border border-ocean/20 rounded-2xl p-6 mb-8">
                <div className="font-heading text-sm font-bold text-ocean-dark mb-4 flex items-center gap-2">
                  <ClipboardList className="w-4 h-4" />
                  Vos prestations sélectionnées
                </div>
                <div className="space-y-3 mb-4">
                  {selectedServiceObjects.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-ocean/10 text-sm">
                      <span className="text-foreground">{s.name}</span>
                      <span className="font-semibold text-ocean">
                        {s.devis ? 'Sur devis' : (s.oneoff > 0 ? `${s.oneoff.toLocaleString('fr-FR')} €` : '') + (s.monthly > 0 ? (s.oneoff > 0 ? ' + ' : '') + `${s.monthly.toLocaleString('fr-FR')} €/mois` : '')}
                      </span>
                    </div>
                  ))}
                </div>
                {totalStr && totalStr !== "Sur devis" && (
                  <div className="flex items-center justify-between pt-3 border-t-2 border-ocean/20">
                    <span className="font-heading font-bold text-foreground">Estimation totale</span>
                    <span className="font-heading text-lg font-bold text-ocean">{totalStr || 'Sur devis'}</span>
                  </div>
                )}
              </div>
            )}

            {/* FORM CONTAINER */}
            <div className="space-y-6">
              
              {/* SECTION: PROJET */}
              <div className="glass-card p-6 border border-border bg-card">
                <div className="font-heading text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-ocean" />
                  Votre projet
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">Secteur d'activité <span className="text-red-500">*</span></label>
                    <select id="secteur" value={formData.secteur} onChange={handleInputChange} className={`w-full p-3 rounded-lg bg-background border ${errors.includes("Secteur d'activité") ? 'border-red-500' : 'border-border focus:border-ocean focus:ring-1 focus:ring-ocean'} outline-none transition-all`}>
                      <option value="">Sélectionnez…</option>
                      <option>E-commerce & Retail</option>
                      <option>Immobilier</option>
                      <option>SaaS & Tech</option>
                      <option>Santé & Bien-être</option>
                      <option>Restauration & Food</option>
                      <option>Finance & Assurance</option>
                      <option>Formation & Éducation</option>
                      <option>Artisanat & Services locaux</option>
                      <option>Industrie & BtoB</option>
                      <option>Luxe & Premium</option>
                      <option>Tourisme & Hôtellerie</option>
                      <option>Autre secteur</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">URL de votre site actuel</label>
                    <input type="text" id="url" value={formData.url} onChange={handleInputChange} placeholder="https://www.votresite.fr" className="w-full p-3 rounded-lg bg-background border border-border focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-sm font-medium text-muted-foreground">Décrivez votre projet et vos objectifs <span className="text-red-500">*</span></label>
                  <textarea id="projet" value={formData.projet} onChange={handleInputChange} placeholder="Ex : Refonte site vitrine pour améliorer le taux de conversion..." className={`w-full p-3 rounded-lg bg-background border ${errors.includes("Description du projet") ? 'border-red-500' : 'border-border focus:border-ocean focus:ring-1 focus:ring-ocean'} outline-none transition-all min-h-[120px] resize-y`}></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">Délai souhaité</label>
                    <select id="delai" value={formData.delai} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-background border border-border focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all">
                      <option value="">Non défini</option>
                      <option>Urgent (- d'1 mois)</option>
                      <option>Court terme (1 à 3 mois)</option>
                      <option>Moyen terme (3 à 6 mois)</option>
                      <option>Long terme (+ 6 mois)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">Avez-vous déjà travaillé avec une agence ?</label>
                    <select id="agence" value={formData.agence} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-background border border-border focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all">
                      <option value="">Ce n'est pas précisé</option>
                      <option>Oui, et l'expérience était positive</option>
                      <option>Oui, mais nous cherchons mieux</option>
                      <option>Non, c'est une première fois</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION: BUDGET */}
              <div className="glass-card p-6 border border-border bg-card">
                <div className="font-heading text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-ocean" />
                  Enveloppe budgétaire envisagée
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['< 1 000 €', '1 000 – 3 000 €', '3 000 – 7 000 €', '7 000 – 15 000 €', '> 15 000 €', 'À définir'].map(opt => (
                    <div 
                      key={opt}
                      onClick={() => setBudget(opt)}
                      className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${budget === opt ? 'border-ocean bg-ocean/5 text-ocean font-bold' : 'border-border hover:border-ocean/40 text-foreground font-medium'}`}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: CONTACT */}
              <div className="glass-card p-6 border border-border bg-card">
                <div className="font-heading text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-ocean" />
                  Vos coordonnées
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">Prénom <span className="text-red-500">*</span></label>
                    <input type="text" id="prenom" value={formData.prenom} onChange={handleInputChange} placeholder="Marie" className={`w-full p-3 rounded-lg bg-background border ${errors.includes("Prénom") ? 'border-red-500' : 'border-border focus:border-ocean focus:ring-1 focus:ring-ocean'} outline-none transition-all`} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">Nom <span className="text-red-500">*</span></label>
                    <input type="text" id="nom" value={formData.nom} onChange={handleInputChange} placeholder="Dupont" className={`w-full p-3 rounded-lg bg-background border ${errors.includes("Nom") ? 'border-red-500' : 'border-border focus:border-ocean focus:ring-1 focus:ring-ocean'} outline-none transition-all`} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">Email pro <span className="text-red-500">*</span></label>
                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="marie@entreprise.fr" className={`w-full p-3 rounded-lg bg-background border ${errors.includes("Email valide") ? 'border-red-500' : 'border-border focus:border-ocean focus:ring-1 focus:ring-ocean'} outline-none transition-all`} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">Téléphone</label>
                    <input type="tel" id="tel" value={formData.tel} onChange={handleInputChange} placeholder="+33 6 00 00 00 00" className="w-full p-3 rounded-lg bg-background border border-border focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">Entreprise <span className="text-red-500">*</span></label>
                    <input type="text" id="entreprise" value={formData.entreprise} onChange={handleInputChange} placeholder="Votre société" className={`w-full p-3 rounded-lg bg-background border ${errors.includes("Entreprise") ? 'border-red-500' : 'border-border focus:border-ocean focus:ring-1 focus:ring-ocean'} outline-none transition-all`} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-muted-foreground">Poste / Fonction</label>
                    <input type="text" id="poste" value={formData.poste} onChange={handleInputChange} placeholder="Directeur Marketing" className="w-full p-3 rounded-lg bg-background border border-border focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all" />
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" id="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="mt-1 w-5 h-5 rounded border-border text-ocean focus:ring-ocean accent-ocean" />
                  <span className="text-sm text-muted-foreground leading-snug">Recevoir les conseils digitaux WaveIA (newsletter mensuelle, désabonnement facile)</span>
                </label>
              </div>

              {errors.length > 0 && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500 text-red-500 text-sm font-medium">
                  Merci de renseigner : {errors.join(', ')}.
                </div>
              )}

              <button 
                onClick={submitDevis}
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-ocean-dark text-white font-heading font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-ocean/20 text-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
              <p className="text-xs text-center text-muted-foreground mt-4">Réponse garantie sous 24 h ouvrées · Sans engagement</p>

              <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                <button onClick={() => setCurrentStep(1)} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M16 10H4M9 5L4 10l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Modifier ma sélection
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ================= STEP 3 (SUCCESS) ================= */}
        {currentStep === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-12 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-ocean/10 border-2 border-ocean flex items-center justify-center mx-auto mb-6 text-ocean animate-scale-in" data-in-view="true">
              <Check className="w-10 h-10" strokeWidth={3} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Votre demande est envoyée !</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nos experts WaveIA analysent votre projet et vous enverront un devis personnalisé et détaillé sous 24 h ouvrées.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="glass-card p-4 text-center">
                <div className="text-3xl mb-2">📋</div>
                <div className="text-sm font-medium">Devis détaillé<br/>personnalisé</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-sm font-medium">Recommandations<br/>stratégiques</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-3xl mb-2">📅</div>
                <div className="text-sm font-medium">Proposition de<br/>planning projet</div>
              </div>
            </div>

            <div className="glass-card p-8 border hover:border-ocean/30 transition-all max-w-lg mx-auto">
              <h3 className="font-heading font-bold text-lg mb-2">Vous souhaitez en discuter directement ?</h3>
              <p className="text-sm text-muted-foreground mb-6">Planifiez un appel de 30 min avec l'un de nos consultants pour affiner votre projet.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => alert("Intégrer le lien Calendly ici")}
                  className="bg-foreground hover:bg-muted-foreground text-background font-semibold py-3 px-6 rounded-lg transition-colors flex-1"
                >
                  Prendre rendez-vous
                </button>
                <button 
                  onClick={restart}
                  className="bg-transparent border border-border hover:bg-muted text-foreground font-semibold py-3 px-6 rounded-lg transition-colors flex-1"
                >
                  Nouveau simulateur
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
