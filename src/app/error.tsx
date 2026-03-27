"use client";

import { useEffect } from "react";
import { Link } from "next-view-transitions";
import { m } from "framer-motion";
import { RotateCcw, Home, AlertTriangle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,var(--destructive)_0%,transparent_70%)] opacity-5" />
      </div>

      <div className="relative max-w-2xl w-full text-center">
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-card/50 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl"
        >
          {/* Animated Icon */}
          <m.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-red-500/10 border border-red-500/20"
          >
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <SectionHeader as="h1" size="section" align="center">
              Une erreur est survenue
            </SectionHeader>
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed"
          >
            Ne vous inquiétez pas, nos équipes ont été notifiées. Vous pouvez essayer de rafraîchir la page.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={reset}
              className="group relative px-8 py-4 bg-background text-foreground font-bold rounded-full overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-linear-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-red-500" />
                Réessayer
              </span>
            </button>

            <Link
              href="/"
              className="group px-8 py-4 bg-white/5 hover:bg-white/10 text-foreground font-semibold rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Retour à l&apos;accueil</span>
            </Link>
          </m.div>
        </m.div>
      </div>
    </div>
  );
}
