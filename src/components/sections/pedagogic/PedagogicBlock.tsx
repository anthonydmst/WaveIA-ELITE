"use client";

import { m } from "framer-motion";
import NextImage from "next/image";
import React from "react"; // Explicit import
import { SectionHeader } from "@/components/ui/SectionHeader";

interface PedagogicBlockProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactElement;
  imageAlt?: string;
  imageSrc?: string;
  benefits: string[];
  imagePosition?: "left" | "right"; // Position of the wave animation
}

export function PedagogicBlock({
  title,
  subtitle,
  description,
  icon,
  imageSrc,
  imageAlt = "Illustration pédagogique",
  benefits,
  imagePosition = "right", // Default: animation on the right
}: PedagogicBlockProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Sync with Tailwind lg breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
          
          {/* Content Side */}
          <div 
            className={`flex-1 ${imagePosition === "right" ? "animate-in-left" : "animate-in-right"}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-sm font-medium mb-6">
              {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}
              <span>Pour comprendre</span>
            </div>
            
            <SectionHeader as="h2" size="section" className="mb-4">
              {title}
            </SectionHeader>
            <p className="text-xl text-ocean font-medium mb-6">
              {subtitle}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {description}
            </p>

            <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-6 md:p-8">
              <SectionHeader as="h3" size="subsection" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Impact Concret sur votre Business
              </SectionHeader>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Side */}
          <div 
            className="flex-1 w-full max-w-lg lg:max-w-none animate-scale-in delay-200"
          >
             <div className="relative aspect-4/3 md:aspect-square lg:aspect-square bg-linear-to-br from-ocean/5 via-transparent to-accent/5 rounded-3xl border border-glass-border overflow-hidden flex items-center justify-center group w-full">
                {/* Background Decor - Enhanced Depth */}
                <div className="absolute inset-0 bg-noise opacity-[0.03]" />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-ocean/15 rounded-full blur-[100px] group-hover:bg-ocean/25 transition-colors duration-1000" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-colors duration-1000" />

                {imageSrc ? (
                    <NextImage 
                        src={imageSrc} 
                        alt={imageAlt}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform"
                    />
                ) : (
                    <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden p-4">
                        {/* Premium 'Surfing The Wave' Illustration - Grade A+ */}
                        <svg 
                          className="w-full h-full animate-in" 
                          viewBox="0 0 400 350" 
                          fill="none"
                        >
                          <defs>
                            {/* Ocean Gradients */}
                            <linearGradient id="waveDeep" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="var(--ocean)" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="var(--ocean-dark)" stopOpacity="0.4" />
                            </linearGradient>
                            <linearGradient id="waveMid" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="var(--ocean-light)" stopOpacity="0.7" />
                              <stop offset="100%" stopColor="var(--ocean)" stopOpacity="0.5" />
                            </linearGradient>
                            <linearGradient id="waveFront" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="var(--ocean-light)" stopOpacity="0.6" />
                            </linearGradient>
                            <linearGradient id="sunGlow" x1="50%" y1="0%" x2="50%" y2="100%">
                              <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
                              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
                            </linearGradient>
                            {/* Glow Filter */}
                            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="8" result="blur" />
                              <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <filter id="sprayGlow" x="-100%" y="-100%" width="300%" height="300%">
                              <feGaussianBlur stdDeviation="2" />
                            </filter>
                          </defs>

                          {/* Background Sun/Moon Orb */}
                          <circle
                            cx={isMobile ? "320" : "240"}
                            cy={isMobile ? "40" : "50"}
                            r={isMobile ? "30" : "40"}
                            fill="url(#sunGlow)"
                            filter="url(#softGlow)"
                            className="animate-scale-in delay-300"
                            style={{ transformBox: "fill-box", transformOrigin: "center" }}
                          />

                          {/* Wave Layer 3 - Deepest / Back */}
                          <m.path
                            d="M-50 220 C 50 180 100 240 200 200 S 350 240 450 200 V 400 H -50 Z"
                            fill="url(#waveDeep)"
                            initial={{ x: -30 }}
                            animate={{ x: [0, -30, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                          />

                          {/* Wave Layer 2 - Middle */}
                          <m.path
                            d="M-50 250 C 80 210 120 280 220 240 S 380 280 450 250 V 400 H -50 Z"
                            fill="url(#waveMid)"
                            initial={{ x: 20 }}
                            animate={{ x: [0, 20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          />
                          
                          {/* The Surfer - Stylized Silhouette */}
                          <m.g
                            initial={{ x: 10, y: 5 }}
                            animate={{ x: [0, 10, 0], y: [0, -8, 0], rotate: [-2, 2, -2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            style={{ transformOrigin: "180px 200px" }}
                          >
                            {/* Surfboard */}
                            <ellipse cx="185" cy="215" rx="45" ry="6" fill="white" fillOpacity="0.9" />
                            {/* Surfer Head */}
                            <circle 
                              cx="188" 
                              cy="168" 
                              r="8" 
                              fill="white" 
                              fillOpacity="0.9" 
                            />
                            {/* Surfer Body - Abstract & Stylized */}
                            <path 
                              d="M175 215 Q 180 180 190 175 Q 195 180 192 200 L 185 212 Z"
                              fill="white"
                              fillOpacity="0.85"
                            />
                            {/* Surfer Arm - Dynamic Pose */}
                            <path 
                              d="M188 185 Q 205 175 215 180"
                              stroke="white"
                              strokeWidth="4"
                              strokeLinecap="round"
                              fill="none"
                              opacity="0.8"
                            />
                          </m.g>

                          {/* Wave Layer 1 - Front / Foam */}
                          <m.path
                            d="M-50 280 C 100 250 150 310 250 270 S 400 300 450 280 V 400 H -50 Z"
                            fill="url(#waveFront)"
                            initial={{ x: -10 }}
                            animate={{ x: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          />

                          {/* Spray Particles - Dynamic */}
                          {[...Array(12)].map((_, idx) => {
                            return (
                              <m.circle
                                key={idx}
                                cx={140 + idx * 8 + (idx % 3) * 5}
                                cy={210 + (idx % 4) * 7.5}
                                r={1.5 + (idx % 2) * 1}
                                fill="white"
                                filter="url(#sprayGlow)"
                                initial={{ opacity: 0, y: 0, x: 0 }}
                                animate={{
                                  y: [-10 - (idx % 5) * 8, 0],
                                  x: [20 + (idx % 3) * 10, 0],
                                  opacity: [0.9, 0],
                                }}
                                transition={{
                                  duration: 1 + (idx % 2) * 0.75,
                                  repeat: Infinity,
                                  delay: idx * 0.15,
                                  ease: "easeOut",
                                }}
                              />
                            );
                          })}

                          {/* Rising Data Bubbles - Business Growth Metaphor */}
                          {[...Array(5)].map((_, idx) => (
                            <m.circle
                              key={`bubble-${idx}`}
                              cx={280 + idx * 20}
                              cy={320}
                              r={3 + idx * 0.5}
                              fill="var(--accent)"
                              fillOpacity="0.6"
                              initial={{ y: 0, opacity: 0 }}
                              animate={{
                                y: -120 - idx * 20,
                                opacity: [0, 0.7, 0],
                              }}
                              transition={{
                                duration: 4 + idx,
                                repeat: Infinity,
                                delay: idx * 0.8,
                                ease: "easeOut",
                              }}
                            />
                          ))}

                        </svg>
                    </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
