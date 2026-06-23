"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

function AnimatedCounter({ 
  target, 
  suffix, 
  label, 
  className 
}: { 
  target: number, 
  suffix: string, 
  label: string, 
  className?: string 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // amount: 0.5 signifie que l'animation se déclenchera uniquement
  // quand au moins 50% du bloc sera visible à l'écran lors du scroll.
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, target, {
        duration: 2,
        ease: [0.215, 0.61, 0.355, 1], // cubic ease-out
        onUpdate: (val) => {
          if (ref.current) {
            ref.current.textContent = Math.round(val).toString();
          }
        },
        onComplete: () => {
          if (ref.current) {
            ref.current.innerHTML = `${target}<span class="text-[0.6em] ml-[2px] text-ocean">${suffix}</span>`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, target, suffix]);

  return (
    <div ref={containerRef} className={`flex flex-col items-center text-center px-4 ${className || ''}`}>
      <div className="flex items-baseline justify-center mb-1 min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem]">
        <span ref={ref} className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-ocean leading-none tracking-tight tabular-nums">
          0
        </span>
      </div>
      <p className="text-[0.75rem] sm:text-[0.85rem] font-medium text-muted-foreground uppercase tracking-[0.1em] max-w-[200px]">
        {label}
      </p>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="w-full bg-[#0B1120] py-4 sm:py-5 border-b border-white/10 relative z-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Item 1 */}
        <AnimatedCounter 
          target={42} 
          suffix="+" 
          label="Projets accompagnés" 
          className="py-3.5 sm:py-4 lg:py-0" 
        />
        {/* Item 2 */}
        <AnimatedCounter 
          target={100} 
          suffix="%" 
          label="Optimisés SEO" 
          className="py-3.5 sm:py-4 lg:py-0 border-t border-white/10 sm:border-t-0 sm:border-l" 
        />
        {/* Item 3 */}
        <AnimatedCounter 
          target={100} 
          suffix="%" 
          label="Orientés conversion" 
          className="py-3.5 sm:py-4 lg:py-0 border-t border-white/10 sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l" 
        />
        {/* Item 4 */}
        <AnimatedCounter 
          target={100} 
          suffix="%" 
          label="Design premium & réactif" 
          className="py-3.5 sm:py-4 lg:py-0 border-t border-white/10 sm:border-t sm:border-l lg:border-t-0 lg:border-l" 
        />
      </div>
    </section>
  );
}
