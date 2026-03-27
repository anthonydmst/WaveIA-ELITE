"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * S-Tier Motion Provider (God Mode+)
 * 
 * Enforces LazyMotion globally to reduce bundle size.
 * Uses 'm' component instead of 'motion'.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
