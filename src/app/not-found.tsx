"use client";

import { Link } from "next-view-transitions";
import { m, useReducedMotion } from "framer-motion";
import { Home, ArrowRight, Compass } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_70%)] opacity-20" />
      </div>

      {/* Floating Elements */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <m.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-ocean/20 rounded-full blur-3xl"
          />
          <m.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          />
        </div>
      )}

      <div className="relative max-w-2xl w-full text-center">
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-card/50 backdrop-blur-xl border border-border p-12 rounded-3xl shadow-2xl"
        >
          {/* Animated 404 */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <span className="font-heading text-9xl font-bold text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/10">
                404
              </span>
              <m.div
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 -mt-4 -mr-4 text-ocean opacity-50"
              >
                <Compass className="w-12 h-12" />
              </m.div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <SectionHeader as="h1" size="section" align="center">
              Page non trouvée
            </SectionHeader>
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed"
          >
            Il semble que vous ayez dérivé un peu trop loin. Cette page n&apos;existe pas ou a été déplacée.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="group relative px-8 py-4 bg-background text-foreground font-bold rounded-full overflow-hidden shadow-lg hover:shadow-ocean/20 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-linear-to-r from-ocean/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <Home className="w-5 h-5 text-ocean" />
                Retour à l&apos;accueil
              </span>
            </Link>

            <Link
              href="/contact"
              className="group px-8 py-4 bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold rounded-full border border-border hover:border-border transition-all duration-300 flex items-center gap-2"
            >
              <span>Nous contacter</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </m.div>
        </m.div>
      </div>
    </div>
  );
}
