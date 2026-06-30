"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/**
 * S-Tier Motion Provider (God Mode+)
 *
 * - LazyMotion + domAnimation + strict: forces the lightweight `m` component
 *   everywhere (no full `motion` bundle).
 * - MotionConfig reducedMotion="user": every Framer animation in the app
 *   (mobile menu slide, stagger, accordion, chevron…) automatically respects
 *   `prefers-reduced-motion` without per-component plumbing.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
