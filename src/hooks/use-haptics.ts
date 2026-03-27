"use client";

import { useCallback } from "react";

type HapticPattern = "light" | "medium" | "heavy" | "success" | "error";

const HAPTIC_PATTERNS: Record<HapticPattern, number | number[]> = {
  light: 10,
  medium: 40,
  heavy: 70,
  success: [10, 50, 10],
  error: [50, 100, 50],
};

/**
 * S-Tier Haptic Feedback Hook
 * 
 * Provides tactile feedback on mobile devices for key interactions.
 * Automatically respects prefers-reduced-motion preference.
 * 
 * @example
 * const { trigger } = useHaptics();
 * <button onClick={() => { trigger('medium'); handleClick(); }}>CTA</button>
 */
export function useHaptics() {
  const trigger = useCallback((pattern: HapticPattern = "light") => {
    // Check if vibration API is available
    if (typeof navigator === "undefined" || !navigator.vibrate) {
      return false;
    }

    // Respect reduced motion preference
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) {
        return false;
      }
    }

    try {
      navigator.vibrate(HAPTIC_PATTERNS[pattern]);
      return true;
    } catch {
      return false;
    }
  }, []);

  return { trigger };
}
