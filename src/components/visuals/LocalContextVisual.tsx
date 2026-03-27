"use client";

import { m } from "framer-motion";
import { TrendingUp, MapPin, Search, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function LocalContextVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const bars = [
    { label: "Concurrents", height: "45%", color: "bg-white/10", delay: 0 },
    { label: "Moyenne", height: "30%", color: "bg-white/5", delay: 0.1 },
    { label: "Leader (Eux)", height: "85%", color: "bg-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.4)]", delay: 0.2 },
    { 
      label: "Vous (Avec WaveIA)", 
      height: "100%", 
      color: "bg-linear-to-t from-ocean to-cyan-300 shadow-[0_0_30px_rgba(14,165,233,0.6)]", 
      delay: 0.4, 
      highlight: true 
    },
  ];

  if (!mounted) return <div className="h-[400px]" />;

  return (
    <div className="relative w-full aspect-square lg:aspect-auto h-full min-h-[450px] flex items-center justify-center p-4 overflow-hidden">
      {/* 🌌 AMBIENT BACKGROUND (Deep Space) */}
      <div className="absolute inset-0 bg-linear-to-b from-ocean/5 via-transparent to-purple-500/5 rounded-3xl" />
      
      {/* Floating Orbs */}
      <m.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-64 h-64 bg-ocean/20 blur-[100px] rounded-full" 
      />
      <m.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full" 
      />

      {/* ✨ PARTICLES SYSTEM */}
      {[...Array(6)].map((_, i) => (
        <m.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{ opacity: 0, x: (i * 70) % 400 - 200, y: (i * 90) % 400 - 200 }}
          animate={{ 
            opacity: [0, 0.4, 0], 
            y: [0, -40], 
            x: (i * 30) % 20 - 10 
          }}
          transition={{ 
            duration: 3 + (i % 2), 
            repeat: Infinity, 
            delay: (i * 0.3) % 2,
            ease: "easeInOut" 
          }}
          style={{ width: (i % 3) + 1, height: (i % 3) + 1 }}
        />
      ))}

      {/* Content Wrapper */}
      <div className="relative w-full max-w-sm perspective-1000">
        
        {/* 🪄 MAIN GLASS CARD */}
        <div 
          className="animate-in relative z-10 w-full bg-card/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group"
        >
          {/* Scanline Effect */}
          <m.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-ocean/50 to-transparent w-full opacity-50 pointer-events-none z-0"
          />

          {/* Header */}
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-ocean/20 to-purple-500/20 border border-white/5 flex items-center justify-center shadow-inner">
                <TrendingUp className="w-5 h-5 text-ocean drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-wide">Analytiques</div>
                <div className="text-[10px] uppercase tracking-widest text-ocean/80 font-medium">Performance Locale</div>
              </div>
            </div>
            <div className="relative group/badge">
              <div className="absolute inset-0 bg-green-500/20 blur-md rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity" />
              <div className="relative px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.1)] flex items-center gap-1.5">
                <Zap className="w-3 h-3 fill-current" />
                +147%
              </div>
            </div>
          </div>

          {/* Chart Area & Labels */}
          <div className="h-64 flex items-end justify-between gap-2 md:gap-4 relative z-10">
            {bars.map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center justify-end h-full w-full gap-3 group/bar">
                 {/* Floating 'Objectif' Badge */}
                 {bar.highlight && (
                   <div 
                      className="mb-auto animate-in delay-700"
                   >
                     <span className="relative inline-flex">
                        <span className="flex rounded-full bg-ocean h-2 w-2 absolute -top-1 -right-1 animate-ping opacity-75"></span>
                        <span className="px-2 py-0.5 bg-ocean text-white text-[10px] font-bold rounded-full shadow-[0_4px_15px_rgba(14,165,233,0.5)] border border-white/20">
                          CIBLE
                        </span>
                     </span>
                   </div>
                 )}
                
                {/* Bar */}
                <div
                  style={{ "--target-height": bar.height, animationDelay: `${bar.delay}s` } as React.CSSProperties}
                  className={`animate-bar-grow w-full max-w-[40px] rounded-t-lg relative ${bar.color} transition-all duration-300 group-hover/bar:brightness-125`}
                >
                    {/* Interior Shine */}
                    <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                    
                    {/* Tooltip on hover */}
                    <div className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-200 bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap z-20 pointer-events-none border border-white/10 shadow-xl translate-y-2 group-hover/bar:translate-y-0">
                       {bar.label}
                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10" />
                    </div>
                </div>

                {/* X-Axis Label */}
                <div className="text-[10px] sm:text-xs text-muted-foreground font-medium text-center leading-tight min-h-[20px] transition-colors group-hover/bar:text-white">
                   {bar.label.split(" ")[0]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🛸 FLOATING BADGES (Orbital Elements) */}
        
        {/* Badge 1: Top Right */}
        <div
          className="animate-in-left delay-700 absolute top-8 -right-8 z-30 hidden sm:flex"
        >
          <m.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center gap-3 backdrop-blur-xl border border-white/10 bg-card/60 hover:scale-105 transition-transform cursor-default"
          >
            <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-yellow-500/20 animate-pulse" />
               <MapPin className="w-5 h-5 text-yellow-400 relative z-10" />
            </div>
            <div>
               <div className="text-xs font-bold text-white">Top 3 Local</div>
               <div className="text-[10px] text-yellow-400/80 font-medium">Pack Local Google</div>
            </div>
          </m.div>
        </div>

        {/* Badge 2: Bottom Left */}
        <div
          className="animate-in-right delay-1000 absolute bottom-16 -left-10 z-30 hidden sm:flex"
        >
           <m.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="p-3 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center gap-3 backdrop-blur-xl border border-white/10 bg-card/60 hover:scale-105 transition-transform cursor-default"
           >
            <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center border border-ocean/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-ocean/20 animate-pulse delay-75" />
               <Search className="w-5 h-5 text-ocean relative z-10" />
            </div>
            <div>
               <div className="text-xs font-bold text-white">1ère Page</div>
               <div className="text-[10px] text-ocean/80 font-medium">9+ Mots-clés</div>
            </div>
          </m.div>
        </div>
      </div>

    </div>
  );
}
