"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * S-Tier ScrollObserver
 * 
 * Un seul IntersectionObserver global pour TOUT le site.
 * Remplace 50+ hooks Framer Motion whileInView par du CSS natif.
 * 
 * Performance:
 * - Zero JS weight après setup - L'animation est 100% CSS
 * - Performance GPU native - Utilise le compositing matériel
 * - 0 layout thrashing - Se déclenche une seule fois par élément
 */
export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Sélectionne tous les éléments avec animations scroll-triggered
    const animatedElements = document.querySelectorAll(
      ".animate-in, .animate-in-left, .animate-in-right, .animate-scale-in, .animate-bar-grow"
    );

    if (animatedElements.length === 0) return;

    // UN SEUL observer natif pour TOUT le site
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Déclenche l'animation
            entry.target.setAttribute("data-in-view", "true");
            // Fire once, puis stop (performance)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger quand 10% visible
        rootMargin: "50px", // Anticipe légèrement pour fluidité
      }
    );

    // Observer tous les éléments animés
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup function for the observer
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  // Ce composant ne render rien, c'est juste un side-effect
  return null;
}
