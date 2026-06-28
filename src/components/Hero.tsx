"use client";

import { useRef, useState, useEffect } from "react";
import { m, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame, useReducedMotion } from "framer-motion";
import { Link } from "next-view-transitions";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useHaptics } from "@/hooks/use-haptics";

// Component for the Wave Animation
function Wave({ 
  fill = "rgba(14, 165, 233, 0.3)", 
  speed = 1, 
  amplitude = 50, 
  frequency = 0.01, 
  yOffset = 0,
  className = "",
  points = 20, // Reduced resolution by default for perf, can be bumped for quality
  complexity = 2 // Harmonics count
}: { 
  fill?: string; 
  speed?: number; 
  amplitude?: number; 
  frequency?: number; 
  yOffset?: number;
  className?: string;
  points?: number;
  complexity?: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const width = 1920; // Assume a base width, viewbox will handle scaling
  const height = 400;

  const lastTimeRef = useRef(0);

  useAnimationFrame((t) => {
    if (!pathRef.current) return;
    
    // Throttle to ~30fps (33ms) for older devices
    if (t - lastTimeRef.current < 33) return;
    lastTimeRef.current = t;
    
    const time = t * 0.001 * speed;
    let path = `M0 ${height / 2 + yOffset}`;

    for (let x = 0; x <= width; x += points) {
      let y = 0;
      // Add harmonics for more realistic fluid motion
      for(let i = 1; i <= complexity; i++) {
        const direction = i % 2 === 0 ? 1 : -1;
        const waveComponent = Math.sin(x * frequency * i + time * direction + (i * 2));
        y += waveComponent * (amplitude / (1 + (i - 1) * 0.5));
      }
      
      const finalY = y + (height / 2 + yOffset);
      path += ` L${x} ${finalY}`;
    }

    path += ` L${width} ${height} L0 ${height} Z`;
    pathRef.current.setAttribute("d", path);
  });

  return (
    <path
      ref={pathRef}
      fill={fill}
      className={`transition-all duration-500 ${className}`}
    />
  );
}

function AIParticles() {
  const shouldReduceMotion = useReducedMotion();
  const [particles, setParticles] = useState<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }[]>([]);
  
  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);
  
  // Skip rendering particles if user prefers reduced motion
  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <m.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -150, -300],
            x: [0, Math.sin(p.id) * 30, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { trigger } = useHaptics();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 200]);
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion) return; // Skip mouse tracking if reduced motion
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="hero-dark relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-pays-basque.webp"
          alt="Côte Basque au crépuscule"
          fill
          priority
          quality={80}
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_70%)] opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-linear-to-b from-ocean/10 to-transparent opacity-30" />
        
        {/* Animated Noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />

        {/* Waves Container */}
        <div className="absolute bottom-0 left-0 right-0 h-[600px] md:h-[600px] w-full pointer-events-none select-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 400">
            <defs>
              <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="var(--wave-stop-1)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="var(--wave-stop-2)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="30%" stopColor="var(--wave-stop-3-a)" />
                <stop offset="70%" stopColor="var(--wave-stop-3-b)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="waveGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="var(--wave-stop-4)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Ambient Blur Layer for Depth */}
            <Wave 
              fill="url(#waveGrad1)" 
              speed={0.2} 
              amplitude={120} 
              frequency={0.001} 
              yOffset={-100} 
              complexity={0}
              points={80}
              className="opacity-20 blur-2xl"
            />
            
            {/* Deep Background Layer */}
            <Wave 
              fill="url(#waveGrad2)" 
              speed={0.5} 
              amplitude={80} 
              frequency={0.002} 
              yOffset={-40} 
              complexity={0}
              points={80}
              className="opacity-30 blur-lg"
            />
            
            {/* Mid Layer */}
            <Wave 
              fill="url(#waveGrad3)" 
              speed={0.8} 
              amplitude={110} 
              frequency={0.003} 
              yOffset={10} 
              complexity={1}
              points={40}
              className="opacity-60"
            />
            
            {/* Highlight/Foam Layer */}
            <Wave 
              fill="url(#waveGrad4)" 
              speed={1.1} 
              amplitude={60} 
              frequency={0.004} 
              yOffset={40} 
              complexity={1}
              points={20}
              className="opacity-40 blur-sm"
            />
          </svg>
          
          {/* Bottom Gradient Fade for smooth blending */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-background via-background/90 to-transparent" />
        </div>

        <AIParticles />
      </div>

      {/* Content */}
      <m.div 
        style={{ y: y1, x: moveX }} // Parallax on scroll and mouse
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pt-20"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-glass-bg border border-glass-border rounded-full mb-8 backdrop-blur-md animate-hero-fade-up-rapid"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ocean" />
          </span>
          <span className="text-overline text-ocean">
            PERFORMANCE & INNOVATION IA
          </span>
        </div>

        <SectionHeader
          as="h1"
          size="hero"
          align="center"
          className="mb-8 animate-hero-fade-up delay-100"
        >
          <span className="block relative">
            <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] blur-2xl opacity-40" />
            <span className="relative text-white font-extrabold tracking-tight">
              Prendre l&apos;avantage.
            </span>
          </span>
          <span className="block mt-4 relative">
            <span className="absolute inset-0 bg-linear-to-r from-ocean via-accent to-ocean-light blur-3xl opacity-30" />
            <span className="relative text-transparent bg-clip-text bg-linear-to-r from-ocean via-ocean-light to-ocean animate-gradient">
              Accélérer par l&apos;IA.
            </span>
          </span>
        </SectionHeader>

        <div
          className="flex flex-col sm:flex-row items-center gap-6 animate-hero-fade-up delay-300"
        >
          <m.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Link
              href="/contact"
              onClick={() => trigger("medium")}
              className="group relative block px-10 py-5 text-lg font-semibold overflow-hidden rounded-full shadow-glow"
            >
              <div className="absolute inset-0 bg-linear-to-r from-ocean to-accent group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2 text-white">
                Lancer votre projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </m.div>
          
          <m.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Link
              href="/realisations"
              onClick={() => trigger("light")}
              className="group flex items-center gap-3 px-8 py-5 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-glass-bg border border-glass-border rounded-full group-hover:bg-glass-bg-hover transition-all duration-300">
                <Play className="w-5 h-5 ml-1 fill-current" />
              </div>
              <span>Découvrir le portfolio</span>
            </Link>
          </m.div>
        </div>
      </m.div>

      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-background to-transparent pointer-events-none z-20" />
    </section>
  );
}