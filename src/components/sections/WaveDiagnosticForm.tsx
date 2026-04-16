"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, Award } from "lucide-react";

/* ─── DATA ─── */
const SECTORS = [
  'E-commerce', 'Immobilier', 'SaaS & Tech', 'Food & Restauration', 
  'Industrie & BtoB', 'Artisanat & Services locaux', 'Formation & Éducation', 
  'Santé', 'Sport', 'Finance & Assurance', 'Luxe & Premium', 
  'Tourisme & Hôtellerie', 'Autre'
];

type Question = {
  id: number;
  text: string;
  opts: { l: string; t: string }[];
};

const Q_SITE: Question[] = [
  {id:1,text:"Quel est l'élément principal qui vous pousse à agir sur votre présence digitale aujourd'hui ?",opts:[
    {l:'A',t:"Notre site actuel est obsolète, voire inexistant."},
    {l:'B',t:"Nous manquons cruellement de nouveaux contacts entrants."},
    {l:'C',t:"Notre image en ligne ne reflète plus la qualité réelle de nos services."},
    {l:'D',t:"Nous perdons trop de temps sur des tâches administratives et manuelles."}
  ]},
  {id:2,text:"Comment décririez-vous l'état de vos supports digitaux actuels ?",opts:[
    {l:'A',t:"Très basiques, tout (ou presque) est à construire de zéro."},
    {l:'B',t:"Ils existent, mais n'attirent pas assez de visiteurs."},
    {l:'C',t:"Le contenu est là, mais le design est vieillissant et peu intuitif."},
    {l:'D',t:"Ils génèrent du flux, mais ne sont pas connectés à nos outils internes."}
  ]},
  {id:3,text:"Où se situe le point de blocage majeur dans votre processus de vente aujourd'hui ?",opts:[
    {l:'A',t:"Au tout début : les gens ne nous trouvent pas en ligne pour vérifier notre sérieux."},
    {l:'B',t:"En amont : peu de personnes arrivent sur notre site."},
    {l:'C',t:"Au milieu : les visiteurs arrivent, mais repartent sans nous contacter."},
    {l:'D',t:"En aval : traiter les demandes entrantes ou faire le suivi nous prend trop de temps."}
  ]},
  {id:4,text:"Quelle est l'action principale que vous attendez d'un visiteur sur votre site ?",opts:[
    {l:'A',t:"Qu'il comprenne ce que l'on fait et trouve nos coordonnées."},
    {l:'B',t:"Qu'il remplisse un formulaire ou demande à être rappelé."},
    {l:'C',t:"Qu'il vive une expérience fluide qui nous différencie nettement de la concurrence."},
    {l:'D',t:"Qu'il soit autonome (achat, création de compte, configuration d'un devis)."}
  ]},
  {id:5,text:"Comment vos nouveaux clients vous trouvent-ils dans la majorité des cas ?",opts:[
    {l:'A',t:"Presque exclusivement par le réseau physique et le bouche-à-oreille."},
    {l:'B',t:"Un peu via Google ou les réseaux, mais de manière très irrégulière."},
    {l:'C',t:"Ils nous connaissent de nom, mais nous comparent souvent à des concurrents en ligne."},
    {l:'D',t:"Nous avons de bons canaux d'acquisition, le trafic est régulier."}
  ]},
  {id:6,text:"Comment gérez-vous actuellement les demandes ou contacts issus d'internet ?",opts:[
    {l:'A',t:"Nous recevons un simple email (quand le formulaire fonctionne)."},
    {l:'B',t:"Nous essayons de suivre ça sur un tableau Excel ou dans notre boîte de réception."},
    {l:'C',t:"Nous les traitons au cas par cas, mais les demandes manquent souvent de qualification."},
    {l:'D',t:"Tout arrive dans notre CRM, mais les relances et le tri manquent d'automatisation."}
  ]},
  {id:7,text:"Quel volume de visites votre site génère-t-il actuellement ?",opts:[
    {l:'A',t:"Proche de zéro (ou nous ne le mesurons pas)."},
    {l:'B',t:"Quelques dizaines ou centaines par mois, mais il faut démultiplier ce chiffre."},
    {l:'C',t:"Le trafic est correct, mais le % de gens qui passent à l'action est trop faible."},
    {l:'D',t:"Le volume est important, notre défi est d'absorber ce flux efficacement."}
  ]},
  {id:8,text:"Sur quel indicateur chiffré allez-vous juger la réussite de ce futur projet ?",opts:[
    {l:'A',t:"La mise en ligne d'un site fonctionnel dans les délais."},
    {l:'B',t:"La croissance du nombre de leads (contacts qualifiés) générés chaque mois."},
    {l:'C',t:"L'augmentation du temps passé sur le site et du taux de conversion."},
    {l:'D',t:"Le nombre d'heures gagnées par l'équipe ou l'augmentation du panier moyen."}
  ]},
  {id:9,text:"À quel moment votre présence en ligne est-elle la plus cruciale pour vos clients ?",opts:[
    {l:'A',t:"Au moment de vérifier notre légitimité avant un premier contact."},
    {l:'B',t:"Lors de leur recherche active d'une solution (sur Google ou les réseaux)."},
    {l:'C',t:"Lors du choix final, quand ils hésitent entre nous et un autre acteur."},
    {l:'D',t:"Tout au long de leur relation avec nous (de l'achat au service après-vente)."}
  ]},
  {id:10,text:"Comment votre équipe est-elle structurée pour gérer le digital ?",opts:[
    {l:'A',t:"Le dirigeant s'en occupe quand il a 5 minutes."},
    {l:'B',t:"Une personne (assistant, commercial) y consacre une petite partie de son temps."},
    {l:'C',t:"Nous avons une personne ou une équipe très attentive à notre image de marque."},
    {l:'D',t:"Des équipes dédiées (ventes, support) qui ont besoin d'outils interconnectés."}
  ]}
];

const Q_NOSITE: Question[] = [
  {id:1,text:"Quel est l'élément principal qui vous pousse à agir sur votre présence digitale aujourd'hui ?",opts:[
    {l:'A',t:"Nous n'avons aucune vitrine en ligne, il est temps de remédier à ça."},
    {l:'B',t:"Nous manquons cruellement de nouveaux contacts entrants."},
    {l:'C',t:"Notre image en ligne ne reflète plus la qualité réelle de nos services."},
    {l:'D',t:"Nous perdons trop de temps sur des tâches administratives et manuelles."}
  ]},
  {id:2,text:"Comment décririez-vous votre visibilité numérique actuelle ?",opts:[
    {l:'A',t:"Inexistante, nous partons d'une page blanche."},
    {l:'B',t:"Nous existons via les réseaux sociaux ou des annuaires, mais c'est insuffisant."},
    {l:'C',t:"Nous avons des documents (plaquettes PDF, présentations), mais rien d'interactif."},
    {l:'D',t:"Nous utilisons des outils tiers (Doctolib, Shopify basique…) sans plateforme centrale."}
  ]},
  {id:3,text:"Où se situe le point de blocage majeur pour rassurer vos prospects ?",opts:[
    {l:'A',t:"Les gens doutent de notre existence ou de notre sérieux car ils ne nous trouvent pas."},
    {l:'B',t:"Nous devons prospecter \"à la main\", le digital ne nous apporte aucun contact."},
    {l:'C',t:"Envoyer nos offres par email ne valorise pas assez notre expertise."},
    {l:'D',t:"La gestion manuelle des nouveaux clients devient ingérable sans plateforme dédiée."}
  ]},
  {id:4,text:"Quelle est l'action principale que vous attendez d'un visiteur sur votre futur site ?",opts:[
    {l:'A',t:"Qu'il comprenne ce que l'on fait et trouve nos coordonnées."},
    {l:'B',t:"Qu'il remplisse un formulaire ou demande à être rappelé."},
    {l:'C',t:"Qu'il vive une expérience fluide qui nous différencie nettement de la concurrence."},
    {l:'D',t:"Qu'il soit autonome (achat, création de compte, configuration d'un devis)."}
  ]},
  {id:5,text:"Comment vos nouveaux clients vous trouvent-ils dans la majorité des cas ?",opts:[
    {l:'A',t:"Presque exclusivement par le réseau physique et le bouche-à-oreille."},
    {l:'B',t:"Un peu via Google ou les réseaux, mais de manière très irrégulière."},
    {l:'C',t:"Ils nous connaissent de nom, mais nous comparent souvent à des concurrents en ligne."},
    {l:'D',t:"Nous avons de bons canaux d'acquisition, le trafic est régulier."}
  ]},
  {id:6,text:"Comment gérez-vous actuellement les demandes ou contacts issus d'internet ?",opts:[
    {l:'A',t:"Nous recevons un simple email (quand le formulaire fonctionne)."},
    {l:'B',t:"Nous essayons de suivre ça sur un tableau Excel ou dans notre boîte de réception."},
    {l:'C',t:"Nous les traitons au cas par cas, mais les demandes manquent souvent de qualification."},
    {l:'D',t:"Tout arrive dans notre CRM, mais les relances et le tri manquent d'automatisation."}
  ]},
  {id:7,text:"Quel est votre volume de sollicitations actuel via le canal digital ?",opts:[
    {l:'A',t:"Zéro, nous n'avons aucun levier numérique pour le moment."},
    {l:'B',t:"Quelques messages via les réseaux sociaux, mais nous voulons changer d'échelle."},
    {l:'C',t:"Les gens nous contactent après avoir vu nos travaux ailleurs, mais le passage à l'action est lent."},
    {l:'D',t:"Nous avons beaucoup de demandes (téléphone, physique), nous avons besoin d'un site pour les absorber."}
  ]},
  {id:8,text:"Sur quel indicateur chiffré allez-vous juger la réussite de ce futur projet ?",opts:[
    {l:'A',t:"La mise en ligne d'un site fonctionnel dans les délais."},
    {l:'B',t:"La croissance du nombre de leads (contacts qualifiés) générés chaque mois."},
    {l:'C',t:"L'augmentation du temps passé sur le site et du taux de conversion."},
    {l:'D',t:"Le nombre d'heures gagnées par l'équipe ou l'augmentation du panier moyen."}
  ]},
  {id:9,text:"À quel moment un site internet changerait-il la donne pour vos clients ?",opts:[
    {l:'A',t:"Dès le départ, pour prouver que nous sommes un acteur établi et fiable."},
    {l:'B',t:"Au moment où ils cherchent une solution à leur problème sur Google."},
    {l:'C',t:"Au moment de comparer notre offre avec celle de concurrents qui, eux, ont un site."},
    {l:'D',t:"Après la vente, pour leur permettre de nous contacter ou de commander plus facilement."}
  ]},
  {id:10,text:"Comment votre équipe est-elle structurée pour gérer le digital ?",opts:[
    {l:'A',t:"Le dirigeant s'en occupe quand il a 5 minutes."},
    {l:'B',t:"Une personne (assistant, commercial) y consacre une petite partie de son temps."},
    {l:'C',t:"Nous avons une personne ou une équipe très attentive à notre image de marque."},
    {l:'D',t:"Des équipes dédiées (ventes, support) qui ont besoin d'outils interconnectés."}
  ]}
];

const DIM_LABELS: Record<string, string> = {
  A: 'Fondations & Site web',
  B: 'Acquisition & Leads',
  C: 'Image de marque & UX',
  D: 'Automatisation & CRM'
};

const PRIORITY_MAP: Record<string, string> = {
  A: 'Créer ou refondre votre site web',
  B: 'Booster votre acquisition & génération de leads',
  C: 'Renforcer votre image de marque & UX',
  D: 'Automatiser vos processus & intégrer un CRM'
};



/* ─── MAIN COMPONENT ─── */
export function WaveDiagnosticForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSite, setHasSite] = useState<boolean>(false);
  const [siteUrl, setSiteUrl] = useState('');
  const [noSiteChecked, setNoSiteChecked] = useState(false);
  
  const [model, setModel] = useState('');
  const [sector, setSector] = useState('');
  const [otherSector, setOtherSector] = useState('');
  
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const [size, setSize] = useState('');
  const [timeline, setTimeline] = useState('');
  
  const [contact, setContact] = useState({ prenom: '', nom: '', email: '', tel: '' });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [scores, setScores] = useState({ A: 0, B: 0, C: 0, D: 0 });

  const qs = hasSite ? Q_SITE : Q_NOSITE;

  const handleStep1 = () => {
    let err = '';
    if (!noSiteChecked && (!siteUrl || (!siteUrl.startsWith('http://') && !siteUrl.startsWith('https://') && !siteUrl.includes('.')))) {
      err = 'Veuillez saisir une URL valide ou cocher "Je n\'ai pas encore de site"';
    }
    if (err) return setErrors({ ...errors, url: err });
    
    setErrors({ ...errors, url: '' });
    setHasSite(!noSiteChecked);
    setSiteUrl(noSiteChecked ? '' : siteUrl);
    setStep(2);
  };

  const handleStep2 = () => {
    if (!model) return setErrors({ ...errors, s2: 'Veuillez sélectionner un modèle de vente.' });
    if (!sector) return setErrors({ ...errors, s2: 'Veuillez sélectionner un secteur.' });
    setErrors({ ...errors, s2: '' });
    setCurrentQ(0);
    setStep(3);
  };

  const nextQuestion = () => {
    if (currentQ < qs.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // calcul des scores
      const newScores = { A: 0, B: 0, C: 0, D: 0 };
      Object.values(answers).forEach((val) => {
        if (newScores[val as keyof typeof newScores] !== undefined) {
          newScores[val as keyof typeof newScores]++;
        }
      });
      setScores(newScores);
      setStep(4);
    }
  };

  const prevQuestion = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
    else setStep(2);
  };

  const handleStep4 = () => {
    if (!size) return setErrors({ ...errors, s4: 'Veuillez indiquer la taille de votre entreprise.' });
    if (!timeline) return setErrors({ ...errors, s4: 'Veuillez indiquer votre échéance.' });
    setErrors({ ...errors, s4: '' });
    setStep(5);
  };

  const handleStep5 = async () => {
    const errs: Record<string, string> = {};
    if (!contact.prenom.trim()) errs.prenom = 'Requis';
    if (!contact.nom.trim()) errs.nom = 'Requis';
    if (!contact.email.trim() || !/^\S+@\S+\.\S+$/.test(contact.email)) errs.email = 'Email invalide';
    if (!contact.tel.trim()) errs.tel = 'Requis';
    
    if (Object.keys(errs).length > 0) {
      setErrors({ ...errors, ...errs });
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = computeResults();
      const formattedAnswers: Record<string, string> = {};
      
      const currentQs = hasSite ? Q_SITE : Q_NOSITE;
      Object.entries(answers).forEach(([qId, oL]) => {
         const qData = currentQs.find(q => q.id === parseInt(qId));
         if(qData) {
            const optData = qData.opts.find(o => o.l === oL);
            formattedAnswers[`Q${qId}: ${qData.text}`] = optData ? optData.t : oL;
         }
      });

      const payload = {
        _source: 'Simulateur Diagnostic Numérique',
        Prenom: contact.prenom,
        Nom: contact.nom,
        Email: contact.email,
        Telephone: contact.tel,
        "A un site ?": hasSite ? "Oui" : "Non",
        "URL du site": siteUrl || "N/A",
        "Modèle": model,
        "Secteur d'activité": sector === 'Autre' ? otherSector : sector,
        "Taille de l'entreprise": size,
        "Échéance estimée": timeline,
        "SCORE FINAL": String(res.pct) + "% (" + res.level + ")",
        "Priorité business N°1": PRIORITY_MAP[res.topDim],
        "--- REPONSES DETAILLEES ---": formattedAnswers
      };

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch(err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setStep(6);
    }
  };

  function computeResults() {
    const total = scores.A + scores.B + scores.C + scores.D;
    if (total === 0) return { pct: 0, level: 'Débutant', cat: 'low', topDim: 'A' };
    
    const weights = { A: 1, B: 2, C: 3, D: 4 };
    const weighted = scores.A * weights.A + scores.B * weights.B + scores.C * weights.C + scores.D * weights.D;
    const maxW = total * 4;
    const pct = Math.round((weighted / maxW) * 100);
    
    let level, cat;
    if(pct < 35) { level = 'Présence minimale'; cat = 'low'; }
    else if(pct < 55) { level = 'En développement'; cat = 'mid'; }
    else if(pct < 75) { level = 'Intermédiaire confirmé'; cat = 'mid'; }
    else { level = 'Mature & performant'; cat = 'high'; }

    let topDim = 'A';
    let maxSc = -1;
    Object.entries(scores).forEach(([k, v]) => {
      if (v > maxSc) { maxSc = v; topDim = k; }
    });

    return { pct, level, cat, topDim };
  };

  const progress = Math.round((step / 6) * 100);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--ocean)_0%,transparent_60%)] opacity-[0.04]" />
      
      <div className="relative max-w-3xl mx-auto px-5">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            Diagnostic Digital
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-foreground font-heading leading-tight">
            Évaluez votre présence en ligne
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Réalisez votre évaluation gratuite et obtenez une feuille de route détaillée pour optimiser votre présence digitale et en faire un véritable axe de développement pour votre chiffre d&apos;affaires.
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="h-1 bg-glass-bg rounded-full overflow-hidden mb-8 max-w-md mx-auto">
          <div className="h-full bg-ocean rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>

        {/* CONTAINER */}
        <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-6 sm:p-10 shadow-sm transition-all duration-300 relative">
          
          {/* ÉTAPE 1 */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase mb-2">Étape 1 / 6 — Amorce</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-3">Évaluez votre présence en ligne en 2 minutes</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                Recevez un diagnostic personnalisé avec des recommandations concrètes pour passer à la vitesse supérieure — une présence digitale optimisée et au service de la croissance de votre activité.
              </p>
              
              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-3">Quelle est l&apos;adresse de votre site web actuel ?</label>
                <div className="relative mb-3">
                  <input 
                    type="url" 
                    placeholder="https://votresite.fr" 
                    disabled={noSiteChecked}
                    value={siteUrl}
                    onChange={(e) => setSiteUrl(e.target.value)}
                    className={`w-full px-4 py-3 border ${errors.url ? 'border-red-500' : 'border-glass-border'} rounded-xl text-sm bg-background/50 text-foreground outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/10 disabled:opacity-50 transition-all`}
                  />
                  {errors.url && <div className="text-xs text-red-500 mt-2">{errors.url}</div>}
                </div>
                <label className="flex items-center gap-3 cursor-pointer mt-4">
                  <input 
                    type="checkbox" 
                    checked={noSiteChecked}
                    onChange={(e) => setNoSiteChecked(e.target.checked)}
                    className="w-4 h-4 rounded border-glass-border text-ocean focus:ring-ocean accent-ocean"
                  />
                  <span className="text-sm text-foreground">Je n&apos;ai pas encore de site</span>
                </label>
              </div>

              <div className="flex justify-end pt-4 border-t border-glass-border">
                <button onClick={handleStep1} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean text-white font-semibold rounded-xl hover:bg-ocean/90 transition-all hover:-translate-y-0.5">
                  Lancer l&apos;analyse <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ÉTAPE 2 */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase mb-2">Étape 2 / 6 — Contexte</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-3">Calibrons le benchmark</h2>
              <p className="text-sm text-muted-foreground mb-8">Pour personnaliser votre diagnostic, quelques précisions sur votre activité.</p>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-3">Quel est votre modèle de vente principal ?</label>
                <div className="flex flex-wrap gap-2">
                  {['BtoB (Vente aux entreprises)', 'BtoC (Vente aux particuliers)', 'Mixte (BtoB et BtoC)'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setModel(m)}
                      className={`px-4 py-2 border rounded-full text-sm transition-all ${model === m ? 'border-ocean bg-ocean/10 text-ocean font-semibold' : 'border-glass-border bg-background text-foreground hover:border-ocean/50'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-3">Dans quel secteur d&apos;activité exercez-vous ?</label>
                <select 
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-4 py-3 border border-glass-border rounded-xl text-sm bg-background text-foreground outline-none focus:border-ocean appearance-none"
                >
                  <option value="">Sélectionnez votre secteur</option>
                  {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {sector === 'Autre' && (
                  <input 
                    type="text" 
                    placeholder="Précisez votre secteur..." 
                    value={otherSector}
                    onChange={(e) => setOtherSector(e.target.value)}
                    className="w-full mt-3 px-4 py-3 border border-glass-border rounded-xl text-sm bg-background text-foreground outline-none focus:border-ocean"
                  />
                )}
              </div>
              
              {errors.s2 && <div className="text-sm text-red-500 mb-4">{errors.s2}</div>}

              <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ChevronLeft size={16} /> Retour
                </button>
                <button onClick={handleStep2} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean text-white font-semibold rounded-xl hover:bg-ocean/90 transition-all">
                  Continuer <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ÉTAPE 3 */}
          {step === 3 && (() => {
            const q = qs[currentQ];
            if (!q) return null;
            return (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500" key={`q-${currentQ}`}>
                <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase mb-2">Étape 3 / 6 — Diagnostic · Question {currentQ + 1} / {qs.length}</div>
                
                {hasSite && siteUrl && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-glass-bg border border-glass-border rounded-full text-xs text-muted-foreground mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {siteUrl}
                  </div>
                )}

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6 leading-snug">{q.text}</h3>
                
                <div className="flex flex-col gap-3 mb-8">
                  {q.opts.map(o => (
                    <button
                      key={o.l}
                      onClick={() => setAnswers({ ...answers, [q.id]: o.l })}
                      className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition-all text-left ${answers[q.id] === o.l ? 'border-ocean bg-ocean/5 shadow-[0_0_0_1px_rgba(108,58,245,0.1)]' : 'border-glass-border bg-background hover:border-ocean/40'}`}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-bold ${answers[q.id] === o.l ? 'border-ocean text-ocean' : 'border-muted-foreground text-muted-foreground'}`}>
                        {o.l}
                      </div>
                      <span className="text-sm text-foreground leading-relaxed pt-0.5">{o.t}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                  <button onClick={prevQuestion} className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ChevronLeft size={16} /> {currentQ === 0 ? 'Retour' : 'Précédent'}
                  </button>
                  <button 
                    onClick={nextQuestion} 
                    disabled={!answers[q.id]}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean text-white font-semibold rounded-xl hover:bg-ocean/90 transition-all disabled:opacity-40 disabled:hover:translate-y-0"
                  >
                    {currentQ === qs.length - 1 ? 'Terminer le diagnostic' : 'Suivant'} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })()}

          {/* ÉTAPE 4 */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase mb-2">Étape 4 / 6 — Qualification</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-3">Dernières précisions</h2>
              <p className="text-sm text-muted-foreground mb-8">Pour générer votre feuille de route personnalisée.</p>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-3">Quelle est la taille de votre entreprise ?</label>
                <div className="flex flex-col gap-2">
                  {['Indépendant / Freelance', '2-10 employés', '11-50 employés', '51-200 employés', '+200 employés'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`flex items-start p-3 border rounded-xl text-sm text-left transition-all ${size === s ? 'border-ocean bg-ocean/5 text-ocean font-medium' : 'border-glass-border bg-background hover:border-ocean/40 text-foreground'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-3">Quelle est l&apos;échéance idéale pour le déploiement de ce projet ?</label>
                <div className="flex flex-wrap gap-2">
                  {["Dès que possible (2 semaines)", "Dans les 3 mois", "Dans les 6 mois", "C'est de la veille"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`px-4 py-2 border rounded-full text-sm transition-all ${timeline === t ? 'border-ocean bg-ocean/10 text-ocean font-semibold' : 'border-glass-border bg-background text-foreground hover:border-ocean/50'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {errors.s4 && <div className="text-sm text-red-500 mb-4">{errors.s4}</div>}

              <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                <button onClick={() => setStep(3)} className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ChevronLeft size={16} /> Retour
                </button>
                <button onClick={handleStep4} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean text-white font-semibold rounded-xl hover:bg-ocean/90 transition-all">
                  Continuer <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ÉTAPE 5 */}
          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase mb-2">Étape 5 / 6 — Vos résultats</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-3">Votre audit est prêt</h2>
              <p className="text-sm text-muted-foreground mb-8">Où devons-nous envoyer vos résultats détaillés et votre feuille de route ?</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Prénom *</label>
                  <input 
                    type="text" 
                    placeholder="Jean" 
                    value={contact.prenom} 
                    onChange={e => setContact({...contact, prenom: e.target.value})}
                    className={`w-full px-4 py-2.5 border ${errors.prenom ? 'border-red-500' : 'border-glass-border'} rounded-xl text-sm bg-background focus:border-ocean outline-none`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Nom *</label>
                  <input 
                    type="text" 
                    placeholder="Dupont" 
                    value={contact.nom} 
                    onChange={e => setContact({...contact, nom: e.target.value})}
                    className={`w-full px-4 py-2.5 border ${errors.nom ? 'border-red-500' : 'border-glass-border'} rounded-xl text-sm bg-background focus:border-ocean outline-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Email professionnel *</label>
                  <input 
                    type="email" 
                    placeholder="jean.dupont@entreprise.fr" 
                    value={contact.email} 
                    onChange={e => setContact({...contact, email: e.target.value})}
                    className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-glass-border'} rounded-xl text-sm bg-background focus:border-ocean outline-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Téléphone *</label>
                  <input 
                    type="tel" 
                    placeholder="+33 6 00 00 00 00" 
                    value={contact.tel} 
                    onChange={e => setContact({...contact, tel: e.target.value})}
                    className={`w-full px-4 py-2.5 border ${errors.tel ? 'border-red-500' : 'border-glass-border'} rounded-xl text-sm bg-background focus:border-ocean outline-none`}
                  />
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-8">En soumettant ce formulaire, vous acceptez d&apos;être recontacté par un expert WaveIA. Aucun spam, promis.</p>

              <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                <button onClick={() => setStep(4)} className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ChevronLeft size={16} /> Retour
                </button>
                <button onClick={handleStep5} disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-ocean text-white font-semibold rounded-xl hover:bg-ocean/90 transition-all disabled:opacity-50">
                  {isSubmitting ? 'Analyse en cours...' : 'Recevoir mon diagnostic'} {!isSubmitting && <ArrowRight size={16} />}
                </button>
              </div>
            </div>
          )}

          {/* ÉTAPE 6 (Results) */}
          {step === 6 && (() => {
            const res = computeResults();
            const badgeColors = {
              low: 'bg-red-500/10 text-red-500 border-red-500/20',
              mid: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
              high: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
            };

            return (
              <div className="animate-in fade-in zoom-in-95 duration-700 text-center" style={{ width: '100%' }}>
                <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase mb-2">Étape 6 / 6 — Résultats</div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-6">Bonjour {contact.prenom}, voici votre diagnostic</h2>
                
                <div className="mx-auto flex flex-col justify-center items-center py-4">
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-ocean to-ocean-light font-heading">
                    {Math.round(res.pct)} %
                  </div>
                  <div className="text-lg font-bold text-foreground mb-1 mt-2">Score de maturité numérique</div>
                </div>
                <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold border mb-8 ${badgeColors[res.cat as keyof typeof badgeColors]}`}>
                  {res.level}
                </div>

                <div className="bg-background border border-glass-border rounded-xl p-5 mb-4 text-left shadow-sm">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Détail par dimension</div>
                  {['A', 'B', 'C', 'D'].map(k => {
                    const sc = scores[k as keyof typeof scores];
                    return (
                      <div key={k} className="flex items-center gap-4 py-2 border-b border-glass-border/50 last:border-0 last:pb-0">
                        <div className="w-[150px] text-xs text-muted-foreground truncate" title={DIM_LABELS[k]}>{DIM_LABELS[k]}</div>
                        <div className="flex-1 h-1.5 bg-glass-bg rounded-full overflow-hidden">
                          <div className="h-full bg-ocean rounded-full" style={{ width: `${(sc / 10) * 100}%` }} />
                        </div>
                        <div className="text-xs font-semibold text-foreground w-[32px] text-right">{sc}/10</div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-background border border-glass-border rounded-xl p-5 mb-6 text-left shadow-sm">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Priorité #1 identifiée</div>
                  <div className="text-sm font-semibold text-foreground flex items-start gap-2">
                    <Award size={18} className="text-ocean shrink-0" />
                    {PRIORITY_MAP[res.topDim]}
                  </div>
                </div>

                <div className="bg-ocean/5 border border-ocean/20 rounded-xl p-4 text-sm text-ocean mb-6 text-left">
                  Votre audit personnalisé va être transmis à <strong>{contact.email}</strong> dans les plus brefs délais avec votre feuille de route et les actions prioritaires à mener.
                </div>

                <a 
                  href="https://calendly.com/wavia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 border-2 border-ocean text-ocean font-bold rounded-xl hover:bg-ocean hover:text-white transition-all shadow-sm shadow-ocean/10"
                >
                  Prendre rendez-vous avec un expert WaveIA <ArrowRight size={18} />
                </a>
              </div>
            );
          })()}

        </div>
      </div>
    </section>
  );
}
// Force Next.js HMR reload
