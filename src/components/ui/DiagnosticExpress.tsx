"use client";

import React, { useEffect, useRef } from "react";

export function DiagnosticExpress() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if script already exists
    if (containerRef.current.querySelector("script.wv-script")) return;

    const uniqueId = "wv-diag-" + Math.random().toString(36).substr(2, 9);

    const script = document.createElement("script");
    script.className = "wv-script";
    script.innerHTML = `
(function(){
  var RDV_BOOKING_URL = "#"; // <-- remplacer par le lien de votre agenda (Calendly, etc.)

  /* ===========================================================
     MATRICE DE GÉNÉRATION DES RÉSULTATS
     Chaque chemin Q1+Q2 est encodé "Q1_Q2option" (ex: "A_1", "B_2"...)
     =========================================================== */
  var RESULTS_MATRIX = {

    // ---- PRIORITÉ 1 : cœur du problème (Q1 + Q2) ----
    priority1: {
      A_1: {
        title: "Création d'un socle statutaire",
        text: "Vous perdez des opportunités par manque de preuve sociale digitale. La priorité absolue est de déployer un site vitrine premium agissant comme un « commercial digital » pour légitimer votre discours terrain."
      },
      A_2: {
        title: "Création d'une plateforme d'acquisition",
        text: "Sans présence en ligne, vous êtes invisible pour les prospects qui vous cherchent activement sur Google. Priorité : déployer un site pensé dès la conception pour capter cette demande entrante."
      },
      B_1: {
        title: "Repositionnement du message",
        text: "Les visiteurs quittent le site dès l'arrivée, signe d'un décalage entre votre offre et votre discours digital. Priorité : retravailler la page d'accueil et la proposition de valeur pour capter l'attention dès les premières secondes."
      },
      B_2: {
        title: "Ingénierie de conversion (CRO)",
        text: "Votre site attire du trafic mais la friction bloque le passage à l'action. Priorité : repenser l'UX et intégrer des formulaires intelligents pour transformer vos visiteurs passifs en leads qualifiés."
      },
      C_1: {
        title: "Refonte de l'image de marque",
        text: "La pression sur vos prix vient d'un décalage entre votre image digitale et la valeur réelle de votre expertise. Priorité : une refonte UX/UI qui aligne visuellement votre site sur vos prestations, pour reprendre la main sur la conversation tarifaire."
      },
      C_2: {
        title: "Renforcement de la marque employeur",
        text: "Votre image digitale actuelle freine votre attractivité auprès des meilleurs profils. Priorité : une refonte éditoriale et visuelle qui valorise votre culture d'entreprise et vos équipes."
      }
    },

    // ---- PRIORITÉ 2 : écosystème interne (Q3) ----
    priority2: {
      "1": {
        title: "Centralisation CRM",
        text: "La gestion manuelle de vos prospects limite votre croissance. Il est impératif de connecter votre future plateforme à un outil CRM pour automatiser la capture de vos leads et sécuriser votre base de données."
      },
      "2": {
        title: "Synchronisation des flux",
        text: "Vous sous-exploitez vos outils actuels. Votre priorité technique est de créer une passerelle (API) entre votre site et votre CRM pour automatiser la remontée des demandes commerciales en temps réel."
      },
      "3": {
        title: "Optimisation des process",
        text: "Vos outils sont déjà centralisés, c'est un atout rare. Priorité : exploiter cette donnée pour affiner votre scoring de leads et automatiser des scénarios de relance personnalisés."
      }
    },

    // ---- PRIORITÉ 3 : levier de croissance (logique croisée sur Q1+Q2) ----
    priority3: {
      A_1: {
        title: "Stratégie de contenu de réassurance",
        text: "Au-delà du site, produisez des études de cas et témoignages clients pour nourrir cette preuve sociale sur la durée et rassurer en amont du premier contact."
      },
      A_2: {
        title: "Déploiement sémantique (SEO)",
        text: "Une fois la plateforme optimisée, il faudra structurer un cocon sémantique autour de vos mots-clés transactionnels pour capter la demande intentionniste qui vous échappe aujourd'hui."
      },
      B_1: {
        title: "Tests & itération (A/B testing)",
        text: "Une fois le message repositionné, mettez en place des tests A/B continus sur vos pages clés pour affiner en permanence ce qui convertit le mieux."
      },
      B_2: {
        title: "Acquisition payante (SEA)",
        text: "Accélérez la génération de nouvelles demandes en complément du SEO grâce à des campagnes Google Ads ciblées sur vos mots-clés à forte intention d'achat."
      },
      C_1: {
        title: "Content marketing de preuve",
        text: "Documentez vos réalisations et résultats clients dans des études de cas chiffrées pour justify objectivement votre positionnement prix."
      },
      C_2: {
        title: "Storytelling RH",
        text: "Développez une stratégie de contenu dédiée à votre marque employeur (témoignages collaborateurs, coulisses) pour attirer les talents qui vous correspondent."
      }
    }
  };

  /* ===========================================================
     QUESTIONS & LOGIQUE CONDITIONNELLE
     =========================================================== */
  var Q1 = {
    label: "Étape 1 — Le constat de base",
    text: "Quel est l'état de votre présence digitale actuelle ?",
    options: [
      { key:"A", label:"Nous n'avons pas de site, ou un site très ancien (plus de 5 ans)." },
      { key:"B", label:"Nous avons un site récent, mais il ne génère aucune demande entrante." },
      { key:"C", label:"Nous avons des visites, mais l'image du site dégrade notre crédibilité." }
    ]
  };

  var Q2_BY_Q1 = {
    A: {
      label:"Étape 2 — Le diagnostic profond",
      text:"Quel est votre enjeu business le plus urgent à résoudre aujourd'hui ?",
      options:[
        { key:"1", label:"Rassurer nos prospects après un premier contact physique ou téléphonique." },
        { key:"2", label:"Capter une nouvelle clientèle qui nous cherche activement sur Google." }
      ]
    },
    B: {
      label:"Étape 2 — Le diagnostic profond",
      text:"Selon vous, où se situe la « fuite » sur votre site actuel ?",
      options:[
        { key:"1", label:"Les visiteurs quittent le site tout de suite (problème de message ou de design)." },
        { key:"2", label:"Ils visitent nos pages, mais le passage à l'action est trop complexe (problème de conversion)." }
      ]
    },
    C: {
      label:"Étape 2 — Le diagnostic profond",
      text:"Quel impact ce décalage d'image a-t-il sur votre entreprise ?",
      options:[
        { key:"1", label:"Une forte pression sur nos prix face à des concurrents « mieux présentés »." },
        { key:"2", label:"Des difficultés à séduire et recruter de bons profils (marque employeur)." }
      ]
    }
  };

  var Q3 = {
    label:"Étape 3 — L'écosystème",
    text:"Comment traitez-vous vos demandes commerciales aujourd'hui ?",
    options:[
      { key:"1", label:"Tout est géré par e-mail et téléphone, manuellement." },
      { key:"2", label:"Nous avons un logiciel CRM, mais il n'est pas connecté à notre site web." },
      { key:"3", label:"Tout est déjà centralisé et automatisé." }
    ]
  };

  var Q4 = {
    label:"Étape 4 — Le cadrage",
    text:"Quel budget envisagez-vous pour ce projet ?",
    options:[
      { key:"1", label:"Moins de 3 000 €" },
      { key:"2", label:"Entre 3 000 € et 8 000 €" },
      { key:"3", label:"Plus de 8 000 €" },
      { key:"4", label:"Pas encore défini" }
    ]
  };

  /* ===========================================================
     ÉTAT & MOTEUR
     =========================================================== */
  var state = { q1:null, q2:null, q3:null, q4:null };
  
  var root = document.getElementById("${uniqueId}");
  if (!root) return; // safety check

  var stage = root.querySelector('#wvStage');
  var fill = root.querySelector('#wvFill');
  var readout = root.querySelector('#wvReadout');
  var live = root.querySelector('#wvLive');
  var hasStarted = false;

  // a11y: polite announcements for screen readers (WCAG 4.1.3)
  function announce(msg){ if(live) live.textContent = msg; }

  // a11y: move focus to the new step's heading on each transition so keyboard /
  // screen-reader users follow the flow (WCAG 2.4.3). Skipped on first paint to
  // avoid stealing focus on page load.
  function focusStepHeading(){
    if(!stage) return;
    var h = stage.querySelector('.wv-q, .wv-report-title');
    if(h){ h.setAttribute('tabindex','-1'); if(hasStarted) h.focus(); }
    hasStarted = true;
  }

  function setProgress(pct, label){
    if(fill) fill.style.width = pct + "%";
    if(readout) readout.textContent = label;
  }

  function renderQuestion(stepData, onPick, backFn){
    var html = '<div class="wv-step">';
    html += '<p class="wv-q-label">'+stepData.label+'</p>';
    html += '<h3 class="wv-q">'+stepData.text+'</h3>';
    html += '<div class="wv-options">';
    stepData.options.forEach(function(opt){
      html += '<button type="button" class="wv-opt" data-key="'+opt.key+'">'+
              '<span>'+opt.label+'</span><span class="wv-opt-arrow">→</span></button>';
    });
    html += '</div>';
    if (backFn) html += '<button type="button" class="wv-back" id="wvBackBtn">← Revenir</button>';
    html += '</div>';
    
    if(stage) stage.innerHTML = html;

    if(stage) {
      Array.prototype.forEach.call(stage.querySelectorAll('.wv-opt'), function(btn){
        btn.addEventListener('click', function(){ onPick(btn.getAttribute('data-key')); });
      });
    }
    if (backFn){
      var backBtn = root.querySelector('#' + 'wvBackBtn');
      if(backBtn) backBtn.addEventListener('click', backFn);
    }
    focusStepHeading();
  }

  function renderStep1(){
    setProgress(0, "ANALYSE — ÉTAPE 01 / 04");
    renderQuestion(Q1, function(key){
      state.q1 = key; state.q2 = null;
      renderStep2();
    }, null);
  }

  function renderStep2(){
    setProgress(25, "ANALYSE — ÉTAPE 02 / 04");
    var q2 = Q2_BY_Q1[state.q1];
    renderQuestion(q2, function(key){
      state.q2 = key;
      renderStep3();
    }, renderStep1);
  }

  function renderStep3(){
    setProgress(50, "ANALYSE — ÉTAPE 03 / 04");
    renderQuestion(Q3, function(key){
      state.q3 = key;
      renderStep4();
    }, renderStep2);
  }

  function renderStep4(){
    setProgress(75, "ANALYSE — ÉTAPE 04 / 04");
    renderQuestion(Q4, function(key){
      state.q4 = key;
      renderCapture();
    }, renderStep3);
  }

  function renderCapture(){
    setProgress(92, "ANALYSE — COMPILATION DES RÉSULTATS");
    var html = ''+
      '<div class="wv-step">'+
        '<p class="wv-q-label">Étape 5 — Vos résultats</p>'+
        '<h3 class="wv-q">Votre plan d\\'action prioritaire est prêt.</h3>'+
        '<p class="wv-intro" style="margin-bottom:20px;">Notre analyse a mis en évidence vos failles de conversion. Entrez vos coordonnées pour découvrir vos 3 leviers d\\'action prioritaires et recevoir une proposition de cadrage personnalisée.</p>'+
        '<form class="wv-form" id="wvForm" novalidate>'+
          '<div class="wv-field" id="fName">'+
            '<label for="wvName">Prénom et nom</label>'+
            '<input type="text" id="wvName" name="name" autocomplete="name" required aria-describedby="wvNameMsg">'+
            '<span class="wv-field-msg" id="wvNameMsg">Merci d\\'indiquer votre nom.</span>'+
          '</div>'+
          '<div class="wv-field" id="fPhone">'+
            '<label for="wvPhone">Téléphone professionnel</label>'+
            '<input type="tel" id="wvPhone" name="phone" autocomplete="tel" required aria-describedby="wvPhoneMsg">'+
            '<span class="wv-field-msg" id="wvPhoneMsg">Merci d\\'indiquer un numéro de téléphone.</span>'+
          '</div>'+
          '<div class="wv-field" id="fEmail">'+
            '<label for="wvEmail">E-mail professionnel</label>'+
            '<input type="email" id="wvEmail" name="email" autocomplete="email" required aria-describedby="wvEmailMsg">'+
            '<span class="wv-field-msg" id="wvEmailMsg">Merci d\\'indiquer un e-mail valide.</span>'+
          '</div>'+
          '<button type="submit" class="wv-submit">Découvrir mes priorités</button>'+
          '<p class="wv-disclaimer">Vos données servent uniquement à vous transmettre votre diagnostic et à être recontacté par un consultant Waveia.</p>'+
        '</form>'+
        '<button type="button" class="wv-back" id="wvBackBtn">← Revenir</button>'+
      '</div>';
    
    if(stage) stage.innerHTML = html;

    var backBtn = root.querySelector('#' + 'wvBackBtn');
    if(backBtn) backBtn.addEventListener('click', renderStep3);

    var form = root.querySelector('#' + 'wvForm');
    if(form) form.addEventListener('submit', handleSubmit);
    focusStepHeading();
  }

  function validateField(id, isValid){
    var field = root.querySelector('#' + id);
    if(field){
      field.classList.toggle('wv-error', !isValid);
      var input = field.querySelector('input');
      if(input) input.setAttribute('aria-invalid', String(!isValid));
    }
    return isValid;
  }

  function computeLeadScore(s){
    var budgetPoints = { "1":1, "2":2, "3":3, "4":1 }[s.q4] || 1;
    var crmBonus = (s.q3 === "3") ? 1 : 0; 
    var total = budgetPoints + crmBonus;

    var tag = "Froid";
    if (total >= 3) tag = "Chaud";
    else if (total === 2) tag = "Tiède";

    return { tag: tag, score: total };
  }

  function handleSubmit(e){
    e.preventDefault();
    var name = root.querySelector('#' + 'wvName').value.trim();
    var phone = root.querySelector('#' + 'wvPhone').value.trim();
    var email = root.querySelector('#' + 'wvEmail').value.trim();

    var okName = validateField('fName', name.length > 1);
    var okPhone = validateField('fPhone', phone.length > 5);
    var okEmail = validateField('fEmail', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

    if (!(okName && okPhone && okEmail)) {
      // a11y: send focus to the first field in error (WCAG 3.3.1)
      var firstInvalid = root.querySelector('.wv-field.wv-error input');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var leadScore = computeLeadScore(state);

    // Send the lead to the email backend (fire-and-forget; results show regardless)
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _source: 'Diagnostic Express',
        Nom: name,
        Téléphone: phone,
        Email: email,
        'Réponses': state,
        'Lead Tag': leadScore.tag,
        'Lead Score': leadScore.score
      })
    }).catch(function () { /* silencieux : ne pas bloquer l'affichage du résultat */ });

    renderLoading();
  }

  function renderLoading(){
    if(stage) {
      stage.innerHTML =
        '<div class="wv-loading">'+
          '<div class="wv-pulse"></div>'+
          '<p class="wv-loading-readout">Calcul de vos priorités en cours…</p>'+
        '</div>';
    }
    announce('Calcul de vos priorités en cours.');
    setTimeout(renderResults, 1400);
  }

  function renderResults(){
    setProgress(100, "ANALYSE — TERMINÉE");
    var pathKey = state.q1 + "_" + state.q2;
    var p1 = RESULTS_MATRIX.priority1[pathKey];
    var p2 = RESULTS_MATRIX.priority2[state.q3];
    var p3 = RESULTS_MATRIX.priority3[pathKey];

    var html = ''+
      '<div class="wv-step wv-report">'+
        '<div class="wv-report-head">'+
          '<p class="wv-report-tag">Rapport de diagnostic — 3 chantiers identifiés</p>'+
          '<h3 class="wv-report-title">Vos 3 chantiers prioritaires</h3>'+
          '<p class="wv-report-sub">Générés à partir de vos réponses, du plus urgent au plus stratégique.</p>'+
        '</div>'+

        '<div class="wv-priority">'+
          '<span class="wv-priority-num">01</span>'+
          '<div class="wv-priority-body">'+
            '<span class="wv-priority-level haute">Priorité haute</span>'+
            '<h4>'+p1.title+'</h4>'+
            '<p>'+p1.text+'</p>'+
          '</div>'+
        '</div>'+

        '<div class="wv-priority">'+
          '<span class="wv-priority-num">02</span>'+
          '<div class="wv-priority-body">'+
            '<span class="wv-priority-level moyenne">Priorité moyenne</span>'+
            '<h4>'+p2.title+'</h4>'+
            '<p>'+p2.text+'</p>'+
          '</div>'+
        '</div>'+

        '<div class="wv-priority">'+
          '<span class="wv-priority-num">03</span>'+
          '<div class="wv-priority-body">'+
            '<span class="wv-priority-level strategique">Priorité stratégique</span>'+
            '<h4>'+p3.title+'</h4>'+
            '<p>'+p3.text+'</p>'+
          '</div>'+
        '</div>'+

        '<div class="wv-report-cta">'+
          '<p>Ce diagnostic est une première étape. Un consultant Waveia va vous contacter sous 24h pour approfondir cette analyse technique, ou réservez directement un créneau visio dans notre agenda.</p>'+
          '<a class="wv-cta-btn" href="'+RDV_BOOKING_URL+'" target="_blank" rel="noopener">Prendre rendez-vous maintenant</a>'+
          '<button type="button" class="wv-restart" id="wvRestart">Refaire le diagnostic</button>'+
        '</div>'+
      '</div>';
    
    if(stage) stage.innerHTML = html;

    var restartBtn = root.querySelector('#' + 'wvRestart');
    if(restartBtn) {
      restartBtn.addEventListener('click', function(){
        state = { q1:null, q2:null, q3:null, q4:null };
        renderStep1();
      });
    }
    announce('Diagnostic terminé. Vos 3 chantiers prioritaires sont affichés ci-dessous.');
    focusStepHeading();
  }

  // Ensure DOM is ready (in Next.js, useEffect guarantees this, but just in case)
  setTimeout(renderStep1, 0);
})();
    `;
    containerRef.current.appendChild(script);

  }, []);

  const htmlContent = `
<div class="wv-diag" id="\${uniqueId}">

  <div class="wv-card">

    <!-- LECTEUR DE PROGRESSION -->
    <div class="wv-scanner" aria-hidden="true">
      <div class="wv-scanner-track">
        <div class="wv-scanner-fill" id="wvFill"></div>
        <div class="wv-tick" style="left:0%"></div>
        <div class="wv-tick" style="left:25%"></div>
        <div class="wv-tick" style="left:50%"></div>
        <div class="wv-tick" style="left:75%"></div>
        <div class="wv-tick" style="left:100%"></div>
      </div>
      <p class="wv-readout" id="wvReadout">ANALYSE — ÉTAPE 01 / 04</p>
    </div>

    <!-- ZONE DYNAMIQUE -->
    <div class="wv-stage" id="wvStage"></div>

    <!-- a11y: live region for screen-reader status announcements (WCAG 4.1.3) -->
    <p class="wv-sr-live" id="wvLive" role="status" aria-live="polite"></p>

  </div>
</div>

<style>
  .wv-diag{
    --ink:#eef1f6;
    --paper:transparent;
    --paper-soft:rgba(255,255,255,0.03);
    --accent:#4fc3ff;
    --accent-deep:#0ea5e9;
    --teal:#4fc3ff;
    --line:rgba(255,255,255,0.1);
    --muted:#94a3b8;
    --success:#10b981;
    --radius:16px;
    font-family:"Inter",system-ui,-apple-system,sans-serif;
    color:var(--ink);
    background:var(--paper);
    padding:clamp(8px,2vw,24px);
    box-sizing:border-box;
    width: 100%;
  }
  .wv-diag *{box-sizing:border-box;}
  .wv-diag :focus-visible{outline:2px solid var(--accent-deep);outline-offset:2px;}
  .wv-sr-live{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}

  .wv-card{
    max-width:700px;
    margin:0 auto;
    background:var(--paper-soft);
    border:1px solid var(--line);
    border-radius:var(--radius);
    padding:clamp(24px,5vw,44px);
    position:relative;
    backdrop-filter: blur(12px);
    min-height: 420px;
  }

  /* ---------- EN-TÊTE ---------- */
  .wv-eyebrow{
    font-family:"IBM Plex Mono",monospace;
    font-size:11px;
    letter-spacing:.12em;
    text-transform:uppercase;
    color:var(--accent);
    display:flex;
    align-items:center;
    gap:8px;
    margin:0 0 18px;
  }
  .wv-dot{
    width:6px;height:6px;border-radius:50%;
    background:var(--accent);
    box-shadow:0 0 0 3px rgba(79,195,255,.15);
  }
  .wv-title{
    font-family:"Outfit",sans-serif;
    font-weight:700;
    font-size:clamp(22px,3.4vw,30px);
    line-height:1.18;
    letter-spacing:-.01em;
    margin:0 0 14px;
  }
  .wv-intro{
    font-size:14.5px;
    line-height:1.6;
    color:var(--muted);
    margin:0 0 28px;
    max-width:46ch;
  }

  /* ---------- SCANNER / PROGRESSION ---------- */
  .wv-scanner{margin-bottom:30px;}
  .wv-scanner-track{
    position:relative;
    height:3px;
    background:var(--line);
    border-radius:2px;
    margin-bottom:9px;
  }
  .wv-scanner-fill{
    position:absolute;left:0;top:0;height:100%;
    width:0%;
    background:var(--accent);
    transition:width .5s cubic-bezier(.65,0,.35,1);
  }
  .wv-tick{
    position:absolute;top:50%;
    width:1px;height:9px;
    background:var(--paper-soft);
    transform:translate(-50%,-50%);
  }
  .wv-readout{
    font-family:"IBM Plex Mono",monospace;
    font-size:10.5px;
    letter-spacing:.1em;
    text-transform:uppercase;
    color:var(--muted);
    margin:0;
  }

  /* ---------- ÉTAPES (QUESTIONS) ---------- */
  .wv-step{animation:wvIn .35s ease both;}
  @keyframes wvIn{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}

  .wv-q-label{
    font-family:"IBM Plex Mono",monospace;
    font-size:11px;
    letter-spacing:.1em;
    text-transform:uppercase;
    color:var(--teal);
    margin:0 0 10px;
  }
  .wv-q{
    font-family:"Outfit",sans-serif;
    font-size:clamp(18px,2.6vw,22px);
    font-weight:700;
    line-height:1.3;
    margin:0 0 22px;
  }

  .wv-options{display:flex;flex-direction:column;gap:10px;}
  .wv-opt{
    width:100%;
    text-align:left;
    background:var(--paper-soft);
    border:1px solid var(--line);
    border-radius:12px;
    padding:16px 18px;
    font-family:"Inter",sans-serif;
    font-size:15px;
    line-height:1.45;
    color:var(--ink);
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:14px;
    transition:border-color .15s ease, background .15s ease, transform .08s ease;
  }
  .wv-opt:hover{border-color:var(--accent);background:rgba(255,255,255,0.06);}
  .wv-opt:active{transform:scale(.997);}
  .wv-opt-arrow{
    flex:none;
    font-family:"IBM Plex Mono",monospace;
    font-size:16px;
    color:var(--muted);
    transition:color .15s ease, transform .15s ease;
  }
  .wv-opt:hover .wv-opt-arrow{color:var(--accent);transform:translateX(2px);}

  .wv-back{
    margin-top:18px;
    background:none;border:none;
    font-family:"IBM Plex Mono",monospace;
    font-size:11px;letter-spacing:.08em;text-transform:uppercase;
    color:var(--muted);cursor:pointer;
    padding:4px 0;
  }
  .wv-back:hover{color:var(--ink);}

  /* ---------- FORMULAIRE DE CAPTURE ---------- */
  .wv-form{display:flex;flex-direction:column;gap:12px;}
  .wv-field{display:flex;flex-direction:column;gap:6px;}
  .wv-field label{
    font-family:"IBM Plex Mono",monospace;
    font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;
    color:var(--muted);
  }
  .wv-field input{
    border:1px solid var(--line);
    border-radius:12px;
    padding:13px 14px;
    font-family:"Inter",sans-serif;
    font-size:15px;
    background:rgba(255,255,255,0.02);
    color:var(--ink);
  }
  .wv-field input:focus{border-color:var(--accent-deep);}
  .wv-field.wv-error input{border-color:#ef4444;}
  .wv-field-msg{font-size:12px;color:#ef4444;display:none;}
  .wv-field.wv-error .wv-field-msg{display:block;}

  .wv-submit{
    margin-top:8px;
    background:var(--accent);
    color:#fff;
    border:none;
    border-radius:12px;
    padding:15px 22px;
    font-family:"Inter",sans-serif;
    font-weight:600;
    font-size:15px;
    cursor:pointer;
    transition:background .15s ease;
  }
  .wv-submit:hover{background:var(--accent-deep);}
  .wv-disclaimer{font-size:11.5px;color:var(--muted);margin:6px 0 0;}

  /* ---------- ÉCRAN DE CALCUL ---------- */
  .wv-loading{
    display:flex;flex-direction:column;align-items:center;
    padding:50px 0 30px;text-align:center;gap:16px;
  }
  .wv-loading-readout{
    font-family:"IBM Plex Mono",monospace;
    font-size:12px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--teal);
  }
  .wv-pulse{
    width:46px;height:46px;border-radius:50%;
    border:2px solid var(--line);
    border-top-color:var(--accent);
    animation:wvSpin .9s linear infinite;
  }
  @keyframes wvSpin{to{transform:rotate(360deg);}}

  /* ---------- RAPPORT / RÉSULTATS ---------- */
  .wv-report{position:relative;}
  .wv-report-head{
    border-bottom:1px dashed var(--line);
    padding-bottom:18px;margin-bottom:22px;
  }
  .wv-report-tag{
    font-family:"IBM Plex Mono",monospace;
    font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;
    color:var(--accent);margin:0 0 8px;
  }
  .wv-report-title{
    font-family:"Outfit",sans-serif;
    font-size:clamp(20px,3vw,24px);
    font-weight:700;margin:0 0 8px;
  }
  .wv-report-sub{font-size:14px;color:var(--muted);line-height:1.55;margin:0;max-width:48ch;}

  .wv-priority{
    display:flex;gap:16px;
    padding:18px 0;
    border-bottom:1px solid var(--line);
  }
  .wv-priority:last-of-type{border-bottom:none;}
  .wv-priority-num{
    font-family:"IBM Plex Mono",monospace;
    font-size:13px;color:var(--accent);
    flex:none;width:28px;padding-top:2px;
  }
  .wv-priority-body h4{
    margin:0 0 4px;font-size:15.5px;font-weight:700;
    font-family:"Inter",sans-serif;
  }
  .wv-priority-level{
    display:inline-block;
    font-family:"IBM Plex Mono",monospace;
    font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;
    padding:2px 7px;border-radius:20px;
    margin-bottom:6px;
  }
  .wv-priority-level.haute{background:rgba(79,195,255,.12);color:var(--accent);}
  .wv-priority-level.moyenne{background:rgba(79,195,255,.08);color:var(--accent);}
  .wv-priority-level.strategique{background:rgba(16,185,129,.12);color:var(--success);}
  .wv-priority-body p{margin:0;font-size:14px;line-height:1.55;color:var(--muted);}

  .wv-report-cta{
    margin-top:26px;padding-top:20px;border-top:1px solid var(--line);
    display:flex;flex-direction:column;gap:12px;
  }
  .wv-report-cta p{margin:0;font-size:13.5px;color:var(--muted);line-height:1.55;}
  .wv-cta-btn{
    display:inline-flex;align-items:center;justify-content:center;
    background:var(--accent);color:#fff;text-decoration:none;
    font-family:"Inter",sans-serif;font-weight:600;font-size:15px;
    padding:15px 22px;border-radius:12px;
    transition:background .15s ease;
  }
  .wv-cta-btn:hover{background:var(--accent-deep);}
  .wv-restart{
    background:none;border:none;align-self:flex-start;
    font-family:"IBM Plex Mono",monospace;font-size:11px;
    letter-spacing:.08em;text-transform:uppercase;
    color:var(--muted);cursor:pointer;
  }
  .wv-restart:hover{color:var(--ink);}

  @media (max-width:480px){
    .wv-priority{flex-direction:column;gap:6px;}
    .wv-priority-num{width:auto;}
  }

  @media (prefers-reduced-motion:reduce){
    .wv-step{animation:none;}
    .wv-pulse{animation:none;border-top-color:var(--line);}
    .wv-scanner-fill{transition:none;}
  }
</style>
  `;

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
