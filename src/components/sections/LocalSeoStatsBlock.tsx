"use client";

import { m, useInView, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// A small counter component to animate numbers
const AnimatedCounter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => setCount(Math.round(value)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
    return undefined;
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function LocalSeoStatsBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--ocean)_0%,transparent_40%)] opacity-[0.05]" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            L&apos;Importance du <span className="text-ocean-light italic">SEO Local</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La recherche de proximité est devenue le comportement standard des utilisateurs mobiles. Un site web bien référencé localement agit comme un <strong className="text-foreground">aimant pour les clients autour de vous</strong>.
          </p>
        </div>

        <div className="space-y-12">
          {/* Stat 1 */}
          <div className="bg-glass-bg border border-glass-border rounded-2xl p-6 lg:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-full md:w-1/3 text-center md:text-left">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-ocean to-cyan-400 mb-2">
                  <AnimatedCounter from={0} to={46} duration={2} />%
                </div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Intention Locale
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <p className="text-muted-foreground mb-4">
                  Des recherches sur Google ont une intention locale (ex: &quot;boulangerie autour de moi&quot;, &quot;plombier [ville]&quot;).
                </p>
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <m.div 
                    className="h-full bg-linear-to-r from-ocean to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "46%" } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-glass-bg border border-glass-border rounded-2xl p-6 lg:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-full md:w-1/3 text-center md:text-left">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-500 mb-2">
                  <AnimatedCounter from={0} to={86} duration={2} />%
                </div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Utilisent Maps
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <p className="text-muted-foreground mb-4">
                  Des internautes utilisent Google Maps pour trouver une entreprise locale. Sans site web lié à votre fiche d&apos;établissement, vous perdez en crédibilité.
                </p>
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <m.div 
                    className="h-full bg-linear-to-r from-accent to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "86%" } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-glass-bg border border-glass-border rounded-2xl p-6 lg:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-full md:w-1/3 text-center md:text-left">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600 mb-2">
                  <AnimatedCounter from={0} to={97} duration={2} />%
                </div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Vérifient en Ligne
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <p className="text-muted-foreground mb-4">
                  Des consommateurs vérifient la <strong className="text-foreground">présence en ligne d&apos;une entreprise</strong> avant de s&apos;y rendre physiquement.
                </p>
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <m.div
                    className="h-full bg-linear-to-r from-emerald-400 to-emerald-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "97%" } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
