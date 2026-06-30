"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
// Lenis CSS is inlined into globals.css to avoid a separate render-blocking
// stylesheet request (Lenis itself is lazy-loaded below).

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let animationFrameId: number;

    const initLenis = async () => {
      // Lazy load Lenis client-side only
      const { default: Lenis } = await import("lenis");

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
        }
        animationFrameId = requestAnimationFrame(raf);
      };

      animationFrameId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Reset scroll on SPA route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}

