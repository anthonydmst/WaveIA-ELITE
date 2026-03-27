"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

interface Term {
  tech: string;
  human: string;
  description: string;
}

interface TechnoTranslatorProps {
  terms: Term[];
  title?: string;
}

export function TechnoTranslator({ 
  terms, 
  title = "Traducteur Technique ↔ Business" 
}: TechnoTranslatorProps) {
  const [activeTerm, setActiveTerm] = useState<number | null>(0);

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold flex items-center justify-center gap-3">
          <Sparkles className="w-6 h-6 text-ocean" />
          {title}
        </h3>
        <p className="text-muted-foreground mt-2">
          Passez la souris pour comprendre l&apos;impact réel de nos choix technologiques.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center bg-glass-bg backdrop-blur-sm border border-glass-border rounded-3xl p-6 lg:p-10">
        
        {/* List of Terms */}
        <div className="space-y-3">
          {terms.map((term, index) => (
            <button
              key={index}
              onClick={() => setActiveTerm(index)}
              onMouseEnter={() => setActiveTerm(index)}
              className={`w-full text-left px-6 py-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                activeTerm === index
                  ? "bg-ocean/10 border-ocean/30 shadow-[0_0_20px_var(--glass-glow)]"
                  : "bg-glass-bg border-glass-border hover:bg-glass-bg/20"
              }`}
            >
              <div>
                <span className={`block font-mono text-sm mb-1 ${activeTerm === index ? "text-ocean" : "text-muted-foreground group-hover:text-foreground"}`}>
                  {term.tech}
                </span>
                <span className={`font-bold text-lg ${activeTerm === index ? "text-foreground" : "text-foreground/80"}`}>
                  {term.human}
                </span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeTerm === index ? "rotate-270 text-ocean" : "-rotate-90 text-muted-foreground"}`} />
            </button>
          ))}
        </div>

        {/* Explanation Display */}
        <div className="relative h-full min-h-[200px] flex items-center justify-center p-6 bg-linear-to-br from-ocean/5 to-transparent rounded-2xl border border-white/5">
          <AnimatePresence mode="wait">
            {activeTerm !== null && (
              <m.div
                key={activeTerm}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="inline-block p-4 rounded-full bg-ocean/10 text-ocean mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">
                  Pourquoi c&apos;est important ?
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {terms[activeTerm]?.description}
                </p>
              </m.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
