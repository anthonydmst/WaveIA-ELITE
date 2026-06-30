"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { m, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-foreground/5 border border-border animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 border border-border hover:border-ocean/30 transition-colors group overflow-hidden"
      aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
    >
      <div className="absolute inset-0 bg-ocean/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <m.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-ocean" />
          </m.div>
        ) : (
          <m.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-ocean" />
          </m.div>
        )}
      </AnimatePresence>
    </button>
  );
}
