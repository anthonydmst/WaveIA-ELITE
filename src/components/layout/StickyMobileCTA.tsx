"use client";

import { useState, useEffect } from "react";
import { Link } from "next-view-transitions";
import { Phone, FileText, MessageCircle } from "lucide-react";
import { useHaptics } from "@/hooks/use-haptics";

// Contact Actions
const ACTIONS = {
  whatsapp: "https://wa.me/33695913669",
  phone: "tel:+33695913669",
  quote: "/contact",
};

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { trigger } = useHaptics();

  useEffect(() => {
    const handleScroll = () => {
      // La barre apparaît après 100px de scroll
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-background/80 backdrop-blur-xl border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.2)] transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* 1. Bouton WhatsApp (Carré vert - Marque) */}
        <a
          href={ACTIONS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none"
          aria-label="Contacter via WhatsApp"
          onClick={() => trigger("medium")}
        >
          <div className="relative flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-xl shadow-lg active:scale-95 transition-transform hover:bg-[#20bd5a]">
            <MessageCircle className="w-6 h-6" />
            {/* Point de notification */}
            <span className="absolute top-2 right-2 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-[#25D366]"></span>
            </span>
          </div>
        </a>

        {/* 2. Bouton Appeler (Principal - Gradient Ocean) */}
        <a href={ACTIONS.phone} className="flex-1" aria-label="Appeler maintenant" onClick={() => trigger("medium")}>
            <div 
              className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-linear-to-r from-ocean to-accent text-white font-bold shadow-lg shadow-ocean/20 transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ viewTransitionName: "cta-mobile" }}
            >
              <Phone className="w-4 h-4" />
              <span>Appeler</span>
            </div>
        </a>

        {/* 3. Bouton Devis (Secondaire - Simple) */}
        <Link href={ACTIONS.quote} className="flex-1" aria-label="Demander un devis" onClick={() => trigger("light")}>
            <div className="w-full flex items-center justify-center gap-2 h-12 rounded-xl border border-border bg-foreground/5 text-foreground font-bold shadow-sm transition-all duration-300 hover:bg-foreground/10 hover:scale-[1.02] active:scale-[0.98]">
              <FileText className="w-4 h-4" />
              <span>Devis</span>
            </div>
        </Link>
      </div>
    </div>
  );
}
