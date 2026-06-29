"use client";
import React, { useState } from "react";
import Image from "next/image";

const WaveMascotLarge = ({ style = {} }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 120 110" style={{ ...style }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="wl1" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#7dd3fc" />
        <stop offset="55%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </radialGradient>
      <radialGradient id="wl2" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#38bdf8" />
      </radialGradient>
    </defs>
    {/* Body */}
    <ellipse cx="52" cy="80" rx="42" ry="18" fill="#bae6fd" opacity="0.35" />
    {/* Main wave body */}
    <path d="M15 75 Q10 45 30 28 Q50 10 72 22 Q90 32 88 55 Q86 72 70 80 Q50 88 30 82 Z" fill="url(#wl1)" />
    {/* Curl top */}
    <path d="M30 28 Q48 8 72 16 Q88 22 85 38 Q75 20 56 18 Q38 16 30 28 Z" fill="url(#wl2)" />
    {/* Inner curl highlight */}
    <path d="M45 36 Q58 25 72 30 Q80 34 78 44 Q68 30 54 32 Q46 34 45 36 Z" fill="#e0f2fe" opacity="0.7" />
    {/* Splash left */}
    <ellipse cx="12" cy="82" rx="8" ry="4" fill="#38bdf8" opacity="0.5" transform="rotate(-20 12 82)" />
    <ellipse cx="6" cy="76" rx="4" ry="2.5" fill="#7dd3fc" opacity="0.6" transform="rotate(10 6 76)" />
    {/* Splash right */}
    <ellipse cx="94" cy="76" rx="6" ry="3" fill="#38bdf8" opacity="0.5" transform="rotate(15 94 76)" />
    <ellipse cx="102" cy="70" rx="3" ry="2" fill="#7dd3fc" opacity="0.6" />
    {/* Droplets */}
    <circle cx="8" cy="68" r="2.5" fill="#38bdf8" opacity="0.7" />
    <circle cx="100" cy="64" r="2" fill="#38bdf8" opacity="0.6" />
    <circle cx="104" cy="74" r="1.5" fill="#7dd3fc" opacity="0.5" />
    {/* Eyes */}
    <circle cx="44" cy="54" r="6.5" fill="white" />
    <circle cx="44" cy="54" r="4" fill="#0c4a6e" />
    <circle cx="45.5" cy="52.5" r="1.5" fill="white" />
    <circle cx="62" cy="52" r="5.5" fill="white" />
    <circle cx="62" cy="52" r="3.5" fill="#0c4a6e" />
    <circle cx="63.2" cy="50.8" r="1.2" fill="white" />
    {/* Smile */}
    <path d="M46 64 Q53 70 62 65" stroke="#0c4a6e" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Teeth */}
    <path d="M49 66 Q53 70.5 58 67" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Cheek blush */}
    <ellipse cx="38" cy="60" rx="5" ry="3" fill="#f97316" opacity="0.25" />
    <ellipse cx="68" cy="58" rx="4.5" ry="2.5" fill="#f97316" opacity="0.25" />
    {/* Shine */}
    <ellipse cx="35" cy="36" rx="8" ry="4" fill="white" opacity="0.25" transform="rotate(-30 35 36)" />
  </svg>
);

const WaveMascotSmall = ({ style = {} }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 80 75" style={{ ...style }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ws1" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#7dd3fc" />
        <stop offset="55%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </radialGradient>
      <radialGradient id="ws2" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#38bdf8" />
      </radialGradient>
    </defs>
    <ellipse cx="38" cy="58" rx="28" ry="12" fill="#bae6fd" opacity="0.3" />
    <path d="M12 54 Q10 33 24 21 Q36 10 50 18 Q62 25 60 40 Q58 52 46 57 Q32 63 18 58 Z" fill="url(#ws1)" />
    <path d="M24 21 Q36 8 52 14 Q62 19 59 30 Q50 16 38 15 Q27 14 24 21 Z" fill="url(#ws2)" />
    <path d="M32 27 Q40 20 50 24 Q56 27 54 34 Q47 23 38 25 Q33 26 32 27 Z" fill="#e0f2fe" opacity="0.7" />
    <ellipse cx="8" cy="60" rx="5" ry="3" fill="#38bdf8" opacity="0.5" transform="rotate(-15 8 60)" />
    <ellipse cx="64" cy="56" rx="5" ry="2.5" fill="#38bdf8" opacity="0.5" transform="rotate(10 64 56)" />
    <circle cx="6" cy="54" r="2" fill="#38bdf8" opacity="0.6" />
    <circle cx="66" cy="50" r="1.5" fill="#38bdf8" opacity="0.6" />
    <circle cx="70" cy="58" r="1.2" fill="#7dd3fc" opacity="0.5" />
    <circle cx="30" cy="40" r="5" fill="white" />
    <circle cx="30" cy="40" r="3" fill="#0c4a6e" />
    <circle cx="31" cy="39" r="1.1" fill="white" />
    <circle cx="44" cy="38" r="4.5" fill="white" />
    <circle cx="44" cy="38" r="2.8" fill="#0c4a6e" />
    <circle cx="45" cy="37" r="1" fill="white" />
    <path d="M32 48 Q37 53 44 49" stroke="#0c4a6e" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <ellipse cx="26" cy="44" rx="4" ry="2.2" fill="#f97316" opacity="0.25" />
    <ellipse cx="48" cy="43" rx="3.5" ry="2" fill="#f97316" opacity="0.25" />
    <ellipse cx="24" cy="26" rx="5.5" ry="3" fill="white" opacity="0.22" transform="rotate(-25 24 26)" />
  </svg>
);

const Card1 = () => (
  <div style={{
    background: "#e0f2fe",
    borderRadius: 20,
    padding: "28px 24px 20px",
    position: "relative",
    overflow: "hidden",
    gridColumn: "span 1",
    gridRow: "span 2",
    display: "flex",
    flexDirection: "column",
    minHeight: 320,
    height: "100%",
  }}>
    <div style={{ zIndex: 1, flexShrink: 0 }}>

      <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0c4a6e", margin: "0 0 4px", fontFamily: "'Poppins', sans-serif", lineHeight: 1.25 }}>INGÉNIERIE WEB<br />HAUTE PERFORMANCE</h3>
      <p style={{ fontSize: 13, fontStyle: "italic", color: "#0ea5e9", margin: "0 0 16px", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Next.js 15 & Mobile-first</p>
    </div>
    {/* Wireframe Illustration */}
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flex: 1, minHeight: 0, width: "100%", paddingTop: 16 }}>
      <div style={{ 
        position: "relative",
        background: "white", 
        borderRadius: 12, 
        padding: 8,
        height: "100%",
        boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{ position: "relative", display: "inline-flex", height: "100%" }}>
          <img 
            src="/wireframe-perf.jpg" 
            alt="Wireframe" 
            style={{ 
              height: "100%", 
              width: "auto",
              objectFit: "contain",
              borderRadius: 6
            }} 
          />
          {/* Cache pour le logo Gemini */}
          <div style={{ position: "absolute", bottom: 0, right: 0, width: "14%", height: "6%", background: "white", borderBottomRightRadius: 6 }} />
        </div>
      </div>
    </div>
  </div>
);

const Card2 = () => (
  <div style={{
    background: "#e0f2fe",
    borderRadius: 20,
    padding: "24px 22px 0px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }}>

    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0c4a6e", margin: "0 0 3px", fontFamily: "'Poppins', sans-serif", lineHeight: 1.2 }}>DOMINATION SEO LOCALE</h3>
    <p style={{ fontSize: 12, fontStyle: "italic", color: "#0ea5e9", margin: "0 0 12px", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Côte Basque & au-delà</p>
    {/* Globe illustration */}
    <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", marginTop: "auto", flex: 1 }}>
      <img 
        src="/seo-local-globe.png" 
        alt="SEO Local Globe" 
        style={{ 
          maxWidth: "100%", 
          maxHeight: "140px", 
          objectFit: "contain",
          objectPosition: "bottom"
        }} 
      />
    </div>
  </div>
);

const Card3 = () => (
  <div style={{
    background: "#e0f2fe",
    borderRadius: 20,
    padding: "24px 22px 18px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }}>

    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0c4a6e", margin: "0 0 3px", fontFamily: "'Poppins', sans-serif", lineHeight: 1.2 }}>IDENTITÉ VISUELLE COHÉRENTE</h3>
    <p style={{ fontSize: 12, fontStyle: "italic", color: "#0ea5e9", margin: "0 0 12px", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Branding & Charte Graphique</p>
    {/* Screen with palette */}
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginTop: "auto", position: "relative", zIndex: 1 }}>
      <div style={{
        flex: 1, background: "white", borderRadius: 10,
        border: "2.5px solid #0c4a6e", boxShadow: "2px 3px 0px #0c4a6e",
        overflow: "hidden"
      }}>
        {/* Screen top bar */}
        <div style={{ background: "#0c4a6e", height: 16, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 8px" }}>
          <span style={{ fontSize: 8, color: "#0ea5e9", fontWeight: 700, fontFamily: "Poppins,sans-serif" }}>WAVE IA — Charte</span>
          <div style={{ display: "flex", gap: 3 }}>
            {["#ef4444","#f59e0b","#38bdf8"].map((c, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: c }} />)}
          </div>
        </div>
        {/* Palette display */}
        <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
          {/* Wave-shaped color swatches */}
          <div style={{ display: "flex", gap: 4 }}>
            {["#0c4a6e","#0ea5e9","#7dd3fc","#38bdf8","#f0f9ff"].map((c, i) => (
              <div key={i} style={{
                flex: 1, height: 18, background: c, borderRadius: "0 0 8px 8px",
                border: "1px solid rgba(0,0,0,0.1)",
                position: "relative", overflow: "hidden"
              }}>
                {/* Mini wave shape in swatch */}
                <svg viewBox="0 0 20 8" style={{ position: "absolute", top: 0, width: "100%", height: "50%" }} preserveAspectRatio="none">
                  <path d="M0 4 Q5 0 10 4 Q15 8 20 4 L20 0 L0 0 Z" fill="white" opacity="0.2" />
                </svg>
              </div>
            ))}
          </div>
          {/* Logo */}
          <div style={{ background: "#0c4a6e", borderRadius: 6, padding: "4px 8px", display: "flex", alignItems: "center", gap: 5 }}>
            <svg viewBox="0 0 20 16" style={{ width: 20, height: 16 }}>
              <path d="M2 10 Q5 4 8 8 Q11 12 14 6 Q16 2 18 6" stroke="#0ea5e9" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 9, fontWeight: 800, color: "#7dd3fc", letterSpacing: "0.08em", fontFamily: "Poppins,sans-serif" }}>WAVE IA</span>
          </div>
          <div style={{ height: 4, background: "#7dd3fc", borderRadius: 3 }} />
          <div style={{ height: 4, background: "#bae6fd", borderRadius: 3, width: "70%" }} />
        </div>
      </div>
      <WaveMascotSmall style={{ width: 44, height: 40, flexShrink: 0 }} />
    </div>
  </div>
);

const Card4 = () => (
  <div style={{
    background: "#e0f2fe",
    borderRadius: 20,
    padding: "24px 22px 20px",
    position: "relative",
    overflow: "hidden",
    gridColumn: "span 1",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }}>

    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0c4a6e", margin: "0 0 3px", fontFamily: "'Poppins', sans-serif", lineHeight: 1.2, maxWidth: "75%" }}>AUTOMATISATION INTELLIGENTE</h3>
    <p style={{ fontSize: 12, fontStyle: "italic", color: "#0ea5e9", margin: "0 0 14px", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Code, SEO & Tests accélérés par l'IA</p>
    {/* Dashboard image replacement */}
    <div style={{ background: "#0c4a6e", borderRadius: 12, padding: 8, position: "relative", overflow: "hidden", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img 
        src="/eval-presence-screen.png" 
        alt="Évaluation présence en ligne" 
        style={{ 
          maxWidth: "100%", 
          maxHeight: "100%", 
          borderRadius: 6,
          objectFit: "contain"
        }} 
      />
    </div>
  </div>
);

const Card5 = () => (
  <div style={{
    background: "#e0f2fe",
    borderRadius: 20,
    padding: "24px 22px 18px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }}>

    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0c4a6e", margin: "0 0 3px", fontFamily: "'Poppins', sans-serif", lineHeight: 1.2 }}>E-COMMERCE PERFORMANT</h3>
    <p style={{ fontSize: 12, fontStyle: "italic", color: "#0ea5e9", margin: "0 0 12px", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Boutiques Shopify optimisées</p>
    {/* Mascot with cart image */}
    <div style={{ position: "relative", marginTop: "auto", height: 110, display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 10 }}>
      <img 
        src="/ecommerce-mascot.png" 
        alt="Wave Mascot E-commerce" 
        style={{ 
          maxWidth: "100%", 
          maxHeight: "110px", 
          objectFit: "contain"
        }} 
      />
    </div>
  </div>
);

export function WaveBento() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ background: "white", padding: "80px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Header */}
        <div className="text-left mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-4">
            Ingénierie Web
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-black">
            Un accompagnement expert
            <br className="hidden sm:block" />
            <span className="font-heading italic text-ocean-text">
              {" "}au service de votre réussite
            </span>
          </h2>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "#475569" }}>
            Notre méthode fusionne l'intelligence artificielle pour l'efficacité et l'ancrage local pour la proximité.
            Sur tous types de projets, de la Côte Basque à vos ambitions.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: 28,
        }}>
          {/* Card 1 — tall, spans 2 rows */}
          <div
            style={{ gridColumn: 1, gridRow: "1 / 3", transition: "transform 0.2s ease", transform: hovered === 0 ? "translateY(-4px)" : "none", height: "100%" }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <Card1 />
          </div>

          {/* Card 2 — top center */}
          <div
            style={{ gridColumn: 2, gridRow: 1, transition: "transform 0.2s ease", transform: hovered === 1 ? "translateY(-4px)" : "none", height: "100%" }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <Card2 />
          </div>

          {/* Card 4 — top right (IA hack, bigger feel) */}
          <div
            style={{ gridColumn: 3, gridRow: 1, transition: "transform 0.2s ease", transform: hovered === 3 ? "translateY(-4px)" : "none", height: "100%" }}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <Card4 />
          </div>

          {/* Card 3 — bottom center */}
          <div
            style={{ gridColumn: 2, gridRow: 2, transition: "transform 0.2s ease", transform: hovered === 2 ? "translateY(-4px)" : "none", height: "100%" }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <Card3 />
          </div>

          {/* Card 5 — bottom right */}
          <div
            style={{ gridColumn: 3, gridRow: 2, transition: "transform 0.2s ease", transform: hovered === 4 ? "translateY(-4px)" : "none", height: "100%" }}
            onMouseEnter={() => setHovered(4)}
            onMouseLeave={() => setHovered(null)}
          >
            <Card5 />
          </div>
        </div>


      </div>
      </div>
    </section>
  );
}
