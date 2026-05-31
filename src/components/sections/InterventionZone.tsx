"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const cityData: Record<string, any> = {
  bidart: {
    name: "Bayonne — QG WaveIA",
    tag: "QG · WaveIA",
    tagClass: "hq",
    stat: "<strong>48 chemin de Saint-Bernard</strong><br>64100 Bayonne — Notre quartier général. Architecture Next.js 15, IA intégrée, 100% code propriétaire.",
    cta: "Visiter nos locaux",
  },
  biarritz: {
    name: "Biarritz",
    tag: "Ingénierie Web",
    tagClass: "web",
    stat: "Surf Shop local : <strong>+180% de ventes en ligne</strong> · Temps de chargement <strong>0.3s</strong> · PageSpeed 98/100",
    cta: "Voir le cas client",
  },
  bayonne: {
    name: "Bayonne",
    tag: "SEO Local",
    tagClass: "seo",
    stat: "Restaurant centre-ville : <strong>Top 3 Google</strong> 'restaurant Bayonne' · <strong>+240%</strong> de réservations organiques",
    cta: "Voir la stratégie SEO",
  },
  anglet: {
    name: "Anglet",
    tag: "Identité Visuelle",
    tagClass: "brand",
    stat: "Agence immobilière : <strong>Refonte complète</strong> logo + charte · Engagement Instagram <strong>×3</strong>",
    cta: "Voir le branding",
  },
  hossegor: {
    name: "Hossegor — Capbreton",
    tag: "E-commerce",
    tagClass: "web",
    stat: "Boutique surf & lifestyle : <strong>Site Shopify</strong> sur-mesure · <strong>+95%</strong> de panier moyen vs ancienne version",
    cta: "Voir le projet",
  },
  saintjeanluz: {
    name: "Saint-Jean-de-Luz",
    tag: "SEO + Web",
    tagClass: "seo",
    stat: "Artisan basque : <strong>Fiche GMB optimisée</strong> · 1ère position Local Pack · <strong>+60%</strong> d'appels entrants",
    cta: "Voir les résultats",
  },
  pau: {
    name: "Pau",
    tag: "Application Métier",
    tagClass: "web",
    stat: "PME béarnaise : <strong>Appli web de réservation</strong> sur-mesure · ROI atteint en <strong>4 mois</strong>",
    cta: "Voir le projet",
  },
  bordeaux: {
    name: "Bordeaux",
    tag: "Expansion Sud-Ouest",
    tagClass: "web",
    stat: "Nous couvrons désormais Bordeaux et la Gironde. <strong>Même qualité, même tarif</strong>, même engagement.",
    cta: "Prendre contact",
  },
};

export function InterventionZone() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const waveRef = useRef<SVGPathElement>(null);

  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    data: any | null;
  }>({
    visible: false,
    x: 0,
    y: 0,
    data: null,
  });

  const [activeCity, setActiveCity] = useState<string>("bidart");
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [showConnections, setShowConnections] = useState(false);

  // Stats Counters
  const [citiesCount, setCitiesCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [kmCount, setKmCount] = useState(0);

  useEffect(() => {
    let waveT = 0;
    let animationFrameId: number;

    const animateWave = () => {
      waveT += 0.015;
      const a = Math.sin(waveT) * 8;
      const b = Math.sin(waveT + 1) * 6;
      const c = Math.sin(waveT + 2) * 8;
      if (waveRef.current) {
        waveRef.current.setAttribute(
          "d",
          `M0,${30 + a} C120,${10 + b} 240,${50 - a} 360,${28 + c} C480,${
            6 - b
          } 600,${40 + a} 720,${22 + b} L720,80 L0,80 Z`
        );
      }
      animationFrameId = requestAnimationFrame(animateWave);
    };

    animateWave();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    // Animate counters on load
    const animateCounter = (
      setFn: React.Dispatch<React.SetStateAction<number>>,
      target: number,
      duration: number
    ) => {
      let start = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setFn(Math.round(start));
      }, 16);
    };

    setTimeout(() => {
      animateCounter(setCitiesCount, 12, 1200);
      animateCounter(setClientsCount, 38, 1600);
      animateCounter(setKmCount, 150, 1400);
    }, 400);
  }, []);

  const handleMarkerEnter = (cityKey: string, e: React.MouseEvent) => {
    setHoveredCity(cityKey);
    setShowConnections(true);

    if (svgRef.current && mapContainerRef.current) {
      const svgEl = svgRef.current;
      const containerRect = mapContainerRef.current.getBoundingClientRect();
      const pt = svgEl.createSVGPoint();

      // Get marker translation from standard transform attribute
      const markerGroup = e.currentTarget as SVGGElement;
      const transform = markerGroup.getAttribute("transform");
      const match = transform?.match(/translate\(([^,]+),([^)]+)\)/);

      if (match) {
        pt.x = parseFloat(match[1]);
        pt.y = parseFloat(match[2]);
        const svgP = pt.matrixTransform(svgEl.getScreenCTM()!);
        const relX = svgP.x - containerRect.left;
        const relY = svgP.y - containerRect.top;

        let tx = relX + 15;
        let ty = relY - 10;
        
        if (tx + 270 > containerRect.width) tx = relX - 270;
        if (ty + 160 > containerRect.height) ty = relY - 160;

        setTooltip({
          visible: true,
          x: tx,
          y: ty,
          data: cityData[cityKey],
        });
      }
    }
  };

  const handleMarkerLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
    setHoveredCity(null);
    setShowConnections(false);
  };

  const handleMarkerClick = (cityKey: string) => {
    setActiveCity(cityKey);
    const listItem = document.getElementById(`city-item-${cityKey}`);
    if (listItem) {
      listItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const handleCityListClick = (cityKey: string) => {
    setActiveCity(cityKey);
    setShowConnections(true);
    setTimeout(() => {
      setShowConnections(false);
    }, 2500);
  };

  const handleCityListEnter = (cityKey: string) => {
    setHoveredCity(cityKey);
  };

  const handleCityListLeave = () => {
    setHoveredCity(null);
  };

  const getMarkerOpacity = (cityKey: string) => {
    if (!hoveredCity) return 1;
    return hoveredCity === cityKey ? 1 : 0.4;
  };

  return (
    <section className="py-20 relative w-full overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .iz-wrapper {
          --bg: transparent;
          --surface: rgba(255, 255, 255, 0.03);
          --surface2: rgba(255, 255, 255, 0.06);
          --border: rgba(255, 255, 255, 0.08);
          --border2: rgba(255, 255, 255, 0.16);
          --text: #ffffff;
          --muted: #a1a1aa;
          --wave: var(--ocean-light, #38bdf8);
          --wave2: var(--accent, #06b6d4);
          --accent: var(--sunset, #f97316);
          --land: #0f2035;
          --land-hover: #162840;
          --sea: #06111e;
          --ff-display: var(--font-heading);
          --ff-body: var(--font-sans);
        }

        .iz-wrapper { display: grid; grid-template-columns: 1fr 380px; max-width: 1400px; margin: 0 auto; padding: 2rem; gap: 2rem; }
        @media(max-width: 900px) { .iz-wrapper { grid-template-columns: 1fr; padding: 1rem; } }

        .iz-map-side { position: relative; display: flex; flex-direction: column; gap: 1.5rem; animation: iz-fade-in 0.7s ease both; }
        .iz-map-header { display: flex; align-items: center; gap: 12px; }
        .iz-logo-mark { display: flex; align-items: center; gap: 8px; }
        .iz-logo-wave { width: 36px; height: 22px; }
        .iz-logo-text { font-family: var(--ff-display); font-size: 1.1rem; font-weight: 800; letter-spacing: -0.03em; color: var(--text); }
        .iz-logo-text span { color: var(--wave); }
        .iz-section-badge { margin-left: auto; font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--wave); background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.2); padding: 5px 13px; border-radius: 100px; }

        .iz-map-container { position: relative; flex: 1; border-radius: 20px; overflow: hidden; border: 1px solid var(--border); background: var(--sea); }
        .iz-map-canvas { width: 100%; height: 100%; min-height: 520px; }

        .iz-tooltip { position: absolute; background: rgba(8,20,36,0.96); border: 1px solid var(--border2); border-radius: 14px; padding: 14px 16px; min-width: 220px; max-width: 260px; pointer-events: none; opacity: 0; transform: translateY(6px) scale(0.97); transition: opacity 0.22s ease, transform 0.22s ease; z-index: 100; backdrop-filter: blur(12px); }
        .iz-tooltip.iz-visible { opacity: 1; transform: translateY(0) scale(1); }
        .iz-tooltip-city { font-family: var(--ff-display); font-size: 15px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .iz-tooltip-tag { font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 2px 8px; border-radius: 100px; display: inline-block; margin-bottom: 10px; }
        .iz-tooltip-tag.web { color: var(--wave); background: rgba(56,189,248,0.12); border: 1px solid rgba(56,189,248,0.2); }
        .iz-tooltip-tag.seo { color: var(--wave2); background: rgba(6,182,212,0.1); border: 1px solid rgba(6,182,212,0.2); }
        .iz-tooltip-tag.brand { color: var(--accent); background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.2); }
        .iz-tooltip-tag.hq { color: #f0c060; background: rgba(240,192,96,0.1); border: 1px solid rgba(240,192,96,0.2); }
        .iz-tooltip-stat { font-size: 12px; color: var(--muted); line-height: 1.6; }
        .iz-tooltip-stat strong { color: var(--text); font-weight: 500; }
        .iz-tooltip-divider { height: 1px; background: var(--border); margin: 10px 0; }
        .iz-tooltip-cta { font-size: 11px; color: var(--wave); font-weight: 500; display: flex; align-items: center; gap: 5px; }

        .iz-panel-side { display: flex; flex-direction: column; gap: 1rem; animation: iz-fade-in 0.7s 0.15s ease both; }
        .iz-panel-title { font-family: var(--ff-display); font-size: 1.7rem; font-weight: 800; line-height: 1.12; letter-spacing: -0.03em; color: var(--text); }
        .iz-panel-title em { font-style: italic; color: var(--wave); }
        .iz-panel-subtitle { font-size: 0.9rem; color: var(--muted); line-height: 1.7; font-weight: 300; margin-top: 6px; }

        .iz-stats-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 4px; }
        .iz-stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 14px 16px; cursor: default; transition: border-color 0.2s, background 0.2s; }
        .iz-stat-card:hover { border-color: var(--border2); background: var(--surface2); }
        .iz-stat-num { font-family: var(--ff-display); font-size: 1.6rem; font-weight: 800; line-height: 1; letter-spacing: -0.04em; color: var(--wave); }
        .iz-stat-label { font-size: 11px; color: var(--muted); margin-top: 4px; line-height: 1.4; font-weight: 300; }

        .iz-city-list { display: flex; flex-direction: column; gap: 6px; margin-top: 4px; }
        .iz-city-item { display: flex; align-items: center; gap: 10px; padding: 11px 14px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; cursor: pointer; transition: all 0.22s ease; position: relative; overflow: hidden; }
        .iz-city-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; border-radius: 0 2px 2px 0; transition: background 0.2s; }
        .iz-city-item.web::before { background: var(--wave); }
        .iz-city-item.seo::before { background: var(--wave2); }
        .iz-city-item.brand::before { background: var(--accent); }
        .iz-city-item.hq::before { background: #f0c060; }
        .iz-city-item:hover { background: var(--surface2); border-color: var(--border2); transform: translateX(3px); }
        .iz-city-item.active { background: var(--surface2); border-color: var(--border2); }
        .iz-city-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .iz-city-item.web .iz-city-dot { background: var(--wave); }
        .iz-city-item.seo .iz-city-dot { background: var(--wave2); }
        .iz-city-item.brand .iz-city-dot { background: var(--accent); }
        .iz-city-item.hq .iz-city-dot { background: #f0c060; }
        .iz-city-info { flex: 1; }
        .iz-city-name { font-family: var(--ff-display); font-size: 13px; font-weight: 700; color: var(--text); }
        .iz-city-desc { font-size: 11px; color: var(--muted); margin-top: 1px; }
        .iz-city-badge { font-size: 10px; font-weight: 600; letter-spacing: 0.08em; padding: 2px 8px; border-radius: 100px; }
        .web .iz-city-badge { color: var(--wave); background: rgba(56,189,248,0.1); }
        .seo .iz-city-badge { color: var(--wave2); background: rgba(6,182,212,0.1); }
        .brand .iz-city-badge { color: var(--accent); background: rgba(249,115,22,0.1); }
        .hq .iz-city-badge { color: #f0c060; background: rgba(240,192,96,0.1); }

        .iz-cta-block { margin-top: auto; padding: 18px 20px; background: linear-gradient(135deg, rgba(56,189,248,0.08), rgba(6,182,212,0.05)); border: 1px solid rgba(56,189,248,0.2); border-radius: 16px; }
        .iz-cta-text { font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 12px; }
        .iz-cta-text strong { color: var(--text); font-weight: 500; }
        .iz-cta-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--wave); color: #050d18; font-family: var(--ff-display); font-size: 13px; font-weight: 700; padding: 11px 22px; border-radius: 100px; text-decoration: none; cursor: pointer; border: none; transition: background 0.2s, transform 0.2s; }
        .iz-cta-btn:hover { background: #5fd4ff; transform: translateY(-2px); }
        
        .iz-legend { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
        .iz-leg-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--muted); }
        .iz-leg-dot { width: 7px; height: 7px; border-radius: 50%; }

        @keyframes iz-pulse-ring { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(2.8); opacity: 0; } }
        @keyframes iz-pulse-ring2 { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(2.2); opacity: 0; } }
        @keyframes iz-float-up { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes iz-shimmer { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } }
        @keyframes iz-fade-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        .iz-region-fill { transition: fill 0.25s ease, filter 0.25s ease; cursor: pointer; }
        .iz-region-fill:hover { fill: var(--land-hover) !important; filter: brightness(1.15); }
        .iz-city-marker { cursor: pointer; transition: opacity 0.3s ease; }
        .iz-marker-pulse { animation: iz-pulse-ring 2s ease-out infinite; }
        .iz-marker-pulse2 { animation: iz-pulse-ring2 2s 0.4s ease-out infinite; }
        .iz-hq-marker .iz-marker-pulse { animation-duration: 1.5s; }
        .iz-connection-line { stroke-dasharray: 6 4; stroke-dashoffset: 1000; animation: iz-shimmer 3s linear infinite; transition: opacity 0.4s ease; }
      `}} />

      <div className="iz-wrapper relative z-10">
        {/* MAP SIDE */}
        <div className="iz-map-side">
          <div className="iz-map-header">
            <div className="iz-logo-mark">
              <svg className="iz-logo-wave" viewBox="0 0 36 22" fill="none">
                <path d="M2 16 C6 8, 12 6, 16 11 C20 16, 26 14, 30 8" stroke="var(--ocean-light)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M2 16 C6 8, 12 6, 16 11 C20 16, 26 14, 30 8" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" transform="translate(0,5)"/>
              </svg>
              <span className="iz-logo-text">Wave<span>IA</span></span>
            </div>
            <span className="iz-section-badge">Zone d'intervention</span>
          </div>

          <div className="iz-map-container" ref={mapContainerRef}>
            <svg className="iz-map-canvas" id="mainMap" ref={svgRef} viewBox="0 0 720 580" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carte interactive de la zone d'intervention WaveIA — Côte Basque et Sud-Ouest">
              <defs>
                <radialGradient id="seaGrad" cx="30%" cy="60%">
                  <stop offset="0%" stopColor="#082030"/>
                  <stop offset="100%" stopColor="#03080f"/>
                </radialGradient>
                <radialGradient id="landGrad" cx="50%" cy="40%">
                  <stop offset="0%" stopColor="#132840"/>
                  <stop offset="100%" stopColor="#0c1e30"/>
                </radialGradient>
                <radialGradient id="hqGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--ocean-light)" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="var(--ocean-light)" stopOpacity="0"/>
                </radialGradient>
                <filter id="glow-blue">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-teal">
                  <feGaussianBlur stdDeviation="2.5" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              <rect width="720" height="580" fill="url(#seaGrad)"/>

              <g opacity="0.06" stroke="var(--ocean-light)" strokeWidth="0.5">
                <path d="M0,100 Q180,85 360,100 Q540,115 720,100"/>
                <path d="M0,140 Q180,125 360,140 Q540,155 720,140"/>
                <path d="M0,180 Q180,165 360,180 Q540,195 720,180"/>
                <path d="M0,220 Q180,205 360,220 Q540,235 720,220"/>
                <path d="M0,260 Q180,245 360,260 Q540,275 720,260"/>
                <path d="M0,300 Q180,285 360,300 Q540,315 720,300"/>
                <path d="M0,340 Q180,325 360,340 Q540,355 720,340"/>
                <path d="M0,380 Q180,365 360,380 Q540,395 720,380"/>
                <path d="M0,420 Q180,405 360,420 Q540,435 720,420"/>
                <path d="M0,460 Q180,445 360,460 Q540,475 720,460"/>
              </g>

              <path className="iz-region-fill" d="M 340,20 L 580,20 L 620,60 L 660,120 L 680,200 L 690,280 L 670,320 L 620,330 L 560,320 L 500,310 L 440,320 L 400,340 L 370,330 L 350,300 L 330,260 L 310,220 L 300,180 L 310,130 L 330,80 Z" fill="url(#landGrad)" stroke="rgba(56,189,248,0.15)" strokeWidth="1" data-region="landes"/>
              <path className="iz-region-fill" d="M 310,220 L 330,260 L 350,300 L 370,330 L 400,340 L 440,320 L 500,310 L 560,320 L 620,330 L 650,370 L 640,420 L 600,460 L 550,490 L 490,510 L 430,520 L 380,510 L 330,490 L 290,460 L 260,420 L 240,380 L 250,340 L 270,300 L 290,260 Z" fill="#0f2235" stroke="rgba(56,189,248,0.2)" strokeWidth="1.2" data-region="basque"/>
              <path className="iz-region-fill" d="M 310,220 L 290,260 L 270,300 L 250,340 L 240,380 L 260,420 L 230,440 L 210,400 L 200,360 L 210,310 L 220,270 L 230,230 L 250,200 L 280,190 Z" fill="#0d2030" stroke="rgba(56,189,248,0.25)" strokeWidth="1.2" data-region="cote"/>
              <path d="M 280,190 L 250,200 L 230,230 L 220,270 L 210,310 L 200,360 L 210,400 L 230,440 L 260,420" fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" strokeLinecap="round"/>

              <g opacity="0.3" fill="none" stroke="rgba(56,189,248,0.2)" strokeWidth="0.8">
                <path d="M 380,490 L 395,470 L 410,490"/>
                <path d="M 420,500 L 440,475 L 460,500"/>
                <path d="M 470,505 L 490,480 L 510,505"/>
                <path d="M 510,500 L 530,475 L 550,500"/>
                <path d="M 400,482 L 412,462 L 425,482"/>
                <path d="M 450,490 L 465,468 L 480,490"/>
              </g>

              <text x="470" y="510" className="font-heading" fontSize="8" fill="rgba(161,161,170,0.6)" textAnchor="middle" letterSpacing="1">PYRÉNÉES</text>

              <path d="M 240,350 L 270,300 L 310,270 L 350,300 L 380,340 L 370,390 L 330,420 L 270,400 Z" fill="rgba(56,189,248,0.04)" stroke="rgba(56,189,248,0.12)" strokeWidth="1" strokeDasharray="4 3"/>

              <text x="100" y="300" className="font-heading" fontSize="11" fill="rgba(56,189,248,0.25)" textAnchor="middle" letterSpacing="3" transform="rotate(-15,100,300)">ATLANTIQUE</text>

              <g id="connectionLines" className="iz-connection-line" style={{ opacity: showConnections ? 1 : 0 }}>
                <line x1="300" y1="320" x2="305" y2="235" stroke="rgba(56,189,248,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="300" y1="320" x2="280" y2="295" stroke="rgba(6,182,212,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="300" y1="320" x2="340" y2="350" stroke="rgba(249,115,22,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="300" y1="320" x2="440" y2="260" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="300" y1="320" x2="500" y2="200" stroke="rgba(56,189,248,0.15)" strokeWidth="1" strokeDasharray="4 3" />
              </g>

              {/* BIDART / IZARBEL (HQ) */}
              <g className="iz-city-marker iz-hq-marker" onClick={() => handleMarkerClick("bidart")} onMouseEnter={(e) => handleMarkerEnter("bidart", e)} onMouseLeave={handleMarkerLeave} transform="translate(300,320)" style={{ animation: "iz-float-up 3s ease-in-out infinite", opacity: getMarkerOpacity("bidart") }}>
                <circle r="28" fill="url(#hqGlow)" opacity="0.8"/>
                <circle r="18" fill="rgba(240,192,96,0.08)" stroke="rgba(240,192,96,0.15)" strokeWidth="1"/>
                <circle r="18" fill="rgba(240,192,96,0)" stroke="rgba(240,192,96,0.4)" strokeWidth="1" className="iz-marker-pulse"/>
                <circle r="18" fill="rgba(240,192,96,0)" stroke="rgba(240,192,96,0.2)" strokeWidth="1" className="iz-marker-pulse2"/>
                <circle r="6" fill="#f0c060" filter="url(#glow-blue)"/>
                <circle r="3" fill="#fff8e0"/>
                <rect x="9" y="-22" width="28" height="14" rx="7" fill="rgba(240,192,96,0.15)" stroke="rgba(240,192,96,0.4)" strokeWidth="0.8"/>
                <text x="23" y="-12" className="font-heading" fontSize="6.5" fontWeight="700" fill="#f0c060" textAnchor="middle" letterSpacing="0.5">QG</text>
              </g>

              {/* BIARRITZ */}
              <g className="iz-city-marker" onClick={() => handleMarkerClick("biarritz")} onMouseEnter={(e) => handleMarkerEnter("biarritz", e)} onMouseLeave={handleMarkerLeave} transform="translate(260,295)" style={{ opacity: getMarkerOpacity("biarritz") }}>
                <circle r="12" fill="rgba(56,189,248,0)" stroke="rgba(56,189,248,0.4)" strokeWidth="1" className="iz-marker-pulse" style={{ animationDelay: "0.3s" }}/>
                <circle r="12" fill="rgba(56,189,248,0)" stroke="rgba(56,189,248,0.2)" strokeWidth="1" className="iz-marker-pulse2" style={{ animationDelay: "0.7s" }}/>
                <circle r="5" fill="var(--ocean-light)" filter="url(#glow-blue)"/>
                <circle r="2.5" fill="#a8e8ff"/>
              </g>

              {/* BAYONNE */}
              <g className="iz-city-marker" onClick={() => handleMarkerClick("bayonne")} onMouseEnter={(e) => handleMarkerEnter("bayonne", e)} onMouseLeave={handleMarkerLeave} transform="translate(305,235)" style={{ opacity: getMarkerOpacity("bayonne") }}>
                <circle r="12" fill="rgba(6,182,212,0)" stroke="rgba(6,182,212,0.4)" strokeWidth="1" className="iz-marker-pulse" style={{ animationDelay: "0.8s" }}/>
                <circle r="12" fill="rgba(6,182,212,0)" stroke="rgba(6,182,212,0.2)" strokeWidth="1" className="iz-marker-pulse2" style={{ animationDelay: "1.1s" }}/>
                <circle r="5" fill="var(--accent)" filter="url(#glow-teal)"/>
                <circle r="2.5" fill="#b0fff0"/>
              </g>

              {/* ANGLET */}
              <g className="iz-city-marker" onClick={() => handleMarkerClick("anglet")} onMouseEnter={(e) => handleMarkerEnter("anglet", e)} onMouseLeave={handleMarkerLeave} transform="translate(282,268)" style={{ opacity: getMarkerOpacity("anglet") }}>
                <circle r="9" fill="rgba(249,115,22,0)" stroke="rgba(249,115,22,0.35)" strokeWidth="1" className="iz-marker-pulse" style={{ animationDelay: "1.4s" }}/>
                <circle r="4" fill="var(--sunset)"/>
                <circle r="2" fill="#ffcfaa"/>
              </g>

              {/* HOSSEGOR */}
              <g className="iz-city-marker" onClick={() => handleMarkerClick("hossegor")} onMouseEnter={(e) => handleMarkerEnter("hossegor", e)} onMouseLeave={handleMarkerLeave} transform="translate(340,350)" style={{ opacity: getMarkerOpacity("hossegor") }}>
                <circle r="9" fill="rgba(56,189,248,0)" stroke="rgba(56,189,248,0.3)" strokeWidth="1" className="iz-marker-pulse" style={{ animationDelay: "0.5s" }}/>
                <circle r="4" fill="var(--ocean-light)" opacity="0.8"/>
                <circle r="2" fill="#a8e8ff"/>
              </g>

              {/* PAU */}
              <g className="iz-city-marker" onClick={() => handleMarkerClick("pau")} onMouseEnter={(e) => handleMarkerEnter("pau", e)} onMouseLeave={handleMarkerLeave} transform="translate(500,200)" style={{ opacity: getMarkerOpacity("pau") }}>
                <circle r="8" fill="rgba(56,189,248,0)" stroke="rgba(56,189,248,0.25)" strokeWidth="1" className="iz-marker-pulse" style={{ animationDelay: "1.8s" }}/>
                <circle r="3.5" fill="var(--ocean-light)" opacity="0.6"/>
                <circle r="1.8" fill="#a8e8ff"/>
              </g>

              {/* BORDEAUX (far north) */}
              <g className="iz-city-marker" onClick={() => handleMarkerClick("bordeaux")} onMouseEnter={(e) => handleMarkerEnter("bordeaux", e)} onMouseLeave={handleMarkerLeave} transform="translate(490,80)" style={{ opacity: getMarkerOpacity("bordeaux") }}>
                <circle r="8" fill="rgba(56,189,248,0)" stroke="rgba(56,189,248,0.2)" strokeWidth="1" className="iz-marker-pulse" style={{ animationDelay: "2s" }}/>
                <circle r="3.5" fill="var(--ocean-light)" opacity="0.5"/>
                <circle r="1.8" fill="#a8e8ff"/>
              </g>

              {/* SAINT-JEAN-DE-LUZ */}
              <g className="iz-city-marker" onClick={() => handleMarkerClick("saintjeanluz")} onMouseEnter={(e) => handleMarkerEnter("saintjeanluz", e)} onMouseLeave={handleMarkerLeave} transform="translate(248,340)" style={{ opacity: getMarkerOpacity("saintjeanluz") }}>
                <circle r="8" fill="rgba(6,182,212,0)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" className="iz-marker-pulse" style={{ animationDelay: "0.9s" }}/>
                <circle r="3.5" fill="var(--accent)" opacity="0.7"/>
                <circle r="1.8" fill="#b0fff0"/>
              </g>

              {/* City name labels */}
              <text x="300" y="345" className="font-heading" fontSize="9.5" fontWeight="700" fill="#f0c060" textAnchor="middle">Bayonne</text>
              <text x="300" y="355" className="font-sans" fontSize="7.5" fill="rgba(240,192,96,0.6)" textAnchor="middle">Ch. St-Bernard</text>

              <text x="247" y="289" className="font-heading" fontSize="9" fontWeight="600" fill="rgba(56,189,248,0.9)" textAnchor="end">Biarritz</text>
              <text x="320" y="230" className="font-heading" fontSize="9" fontWeight="600" fill="rgba(6,182,212,0.9)" textAnchor="start">Bayonne</text>
              <text x="297" y="265" className="font-heading" fontSize="8" fill="rgba(249,115,22,0.8)" textAnchor="end">Anglet</text>
              <text x="355" y="362" className="font-heading" fontSize="8.5" fill="rgba(56,189,248,0.75)" textAnchor="start">Hossegor</text>
              <text x="515" y="200" className="font-heading" fontSize="8.5" fill="rgba(56,189,248,0.65)" textAnchor="start">Pau</text>
              <text x="505" y="80" className="font-heading" fontSize="8.5" fill="rgba(56,189,248,0.55)" textAnchor="start">Bordeaux</text>
              <text x="235" y="355" className="font-heading" fontSize="8" fill="rgba(6,182,212,0.7)" textAnchor="end">St-J-de-Luz</text>

              {/* Animated wave at bottom */}
              <g transform="translate(0,500)">
                <path ref={waveRef} id="waveBottom" d="M0,30 C120,10 240,50 360,28 C480,6 600,40 720,22 L720,80 L0,80 Z" fill="rgba(56,189,248,0.04)"/>
                <path d="M0,38 C120,18 240,58 360,36 C480,14 600,48 720,30 L720,80 L0,80 Z" fill="rgba(56,189,248,0.03)"/>
              </g>

              {/* Scale indicator */}
              <g transform="translate(590,540)">
                <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(161,161,170,0.4)" strokeWidth="1"/>
                <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(161,161,170,0.4)" strokeWidth="1"/>
                <line x1="60" y1="-4" x2="60" y2="4" stroke="rgba(161,161,170,0.4)" strokeWidth="1"/>
                <text x="30" y="-7" className="font-sans" fontSize="8" fill="rgba(161,161,170,0.5)" textAnchor="middle">~50 km</text>
              </g>
            </svg>

            {/* Tooltip */}
            <div className={`iz-tooltip ${tooltip.visible ? 'iz-visible' : ''}`} style={{ left: tooltip.x, top: tooltip.y }}>
              {tooltip.data && (
                <>
                  <div className="iz-tooltip-city">{tooltip.data.name}</div>
                  <span className={`iz-tooltip-tag ${tooltip.data.tagClass}`}>{tooltip.data.tag}</span>
                  <div className="iz-tooltip-stat" dangerouslySetInnerHTML={{ __html: tooltip.data.stat }} />
                  <div className="iz-tooltip-divider"></div>
                  <div className="iz-tooltip-cta">
                    <ArrowRight size={12} className="mr-1" />
                    {tooltip.data.cta}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="iz-legend">
            <div className="iz-leg-item"><div className="iz-leg-dot" style={{background: "#f0c060"}}></div> QG Izarbel</div>
            <div className="iz-leg-item"><div className="iz-leg-dot" style={{background: "var(--ocean-light)"}}></div> Sites web</div>
            <div className="iz-leg-item"><div className="iz-leg-dot" style={{background: "var(--accent)"}}></div> SEO local</div>
            <div className="iz-leg-item"><div className="iz-leg-dot" style={{background: "var(--sunset)"}}></div> Branding</div>
          </div>
        </div>

        {/* PANEL SIDE */}
        <div className="iz-panel-side">
          <div>
            <h2 className="iz-panel-title">Notre terrain,<br/><em>la Côte Basque</em></h2>
            <p className="iz-panel-subtitle">WaveIA est basé au 48 chemin de Saint-Bernard à Bayonne (64100). Nous accompagnons les acteurs locaux du Pays Basque au Sud-Ouest, de Bayonne à Bordeaux, des Pyrénées à l'Atlantique.</p>
          </div>

          <div className="iz-stats-row">
            <div className="iz-stat-card">
              <div className="iz-stat-num">{citiesCount}</div>
              <div className="iz-stat-label">Villes couvertes<br/>sur la zone</div>
            </div>
            <div className="iz-stat-card">
              <div className="iz-stat-num">{clientsCount}+</div>
              <div className="iz-stat-label">Clients locaux<br/>accompagnés</div>
            </div>
            <div className="iz-stat-card">
              <div className="iz-stat-num">{kmCount}</div>
              <div className="iz-stat-label">km de rayon<br/>d'intervention</div>
            </div>
            <div className="iz-stat-card">
              <div className="iz-stat-num">40%</div>
              <div className="iz-stat-label">Moins cher que<br/>les agences trad.</div>
            </div>
          </div>

          <div>
            <p style={{fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px"}}>Cliquez sur une ville</p>
            <div className="iz-city-list">
              {[
                { key: "bidart", name: "Bayonne — QG WaveIA", desc: "48 ch. de Saint-Bernard · 64100", type: "hq", badge: "QG" },
                { key: "biarritz", name: "Biarritz", desc: "Surf, tourisme, hôtellerie", type: "web", badge: "Web" },
                { key: "bayonne", name: "Bayonne", desc: "Commerce, restauration, PME", type: "seo", badge: "SEO" },
                { key: "anglet", name: "Anglet", desc: "Services, immobilier local", type: "brand", badge: "Brand" },
                { key: "hossegor", name: "Hossegor / Capbreton", desc: "Surf, mode, lifestyle", type: "web", badge: "Web" },
                { key: "saintjeanluz", name: "Saint-Jean-de-Luz", desc: "Artisans, restaurateurs", type: "seo", badge: "SEO" },
                { key: "pau", name: "Pau", desc: "PME, industrie béarnaise", type: "web", badge: "Web" },
                { key: "bordeaux", name: "Bordeaux", desc: "Expansion Sud-Ouest", type: "web", badge: "Web" }
              ].map((city) => (
                <div
                  key={city.key}
                  id={`city-item-${city.key}`}
                  className={`iz-city-item ${city.type} ${activeCity === city.key ? 'active' : ''}`}
                  onClick={() => handleCityListClick(city.key)}
                  onMouseEnter={() => handleCityListEnter(city.key)}
                  onMouseLeave={handleCityListLeave}
                >
                  <div className="iz-city-dot"></div>
                  <div className="iz-city-info">
                    <div className="iz-city-name">{city.name}</div>
                    <div className="iz-city-desc">{city.desc}</div>
                  </div>
                  <span className="iz-city-badge">{city.badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="iz-cta-block">
            <p className="iz-cta-text"><strong>Vous êtes sur la zone ?</strong><br/>Devis gratuit sous 24h, sans engagement. Nous nous déplaçons dans tout le Pays Basque et le Sud-Ouest.</p>
            <button className="iz-cta-btn" onClick={() => { window.location.href='#contact' }}>
              Démarrer un projet
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
