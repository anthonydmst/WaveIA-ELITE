/**
 * S-Tier Animation Variants
 * 
 * Fichier centralisé pour toutes les variants Framer Motion.
 * Utiliser ces variants au lieu de définir des animations inline.
 * 
 * @see Workflow S-Tier section 5.5
 */

import type { Variants, Transition } from "framer-motion";

// =============================================================================
// SPRING CONFIGS (S-Tier Standard)
// =============================================================================

export const springConfig = {
  /** Standard spring for interactions (hover, tap) */
  default: { type: "spring", stiffness: 400, damping: 25 } as const,
  
  /** Softer spring for larger elements */
  soft: { type: "spring", stiffness: 300, damping: 30 } as const,
  
  /** Snappy spring for micro-interactions */
  snappy: { type: "spring", stiffness: 500, damping: 20 } as const,
} satisfies Record<string, Transition>;

// =============================================================================
// FADE VARIANTS
// =============================================================================

/** Fade up animation - standard entrance */
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 12 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    },
  },
};

/** Simple fade in */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/** Fade with scale - for cards/modals */
export const fadeScale: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

// =============================================================================
// STAGGER CONTAINERS
// =============================================================================

/** Container for staggered children animations */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Fast stagger for lists */
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// =============================================================================
// SLIDE VARIANTS
// =============================================================================

/** Slide in from left */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/** Slide in from right */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// =============================================================================
// INTERACTIVE VARIANTS (Hover/Tap)
// =============================================================================

/** Card lift effect - use with whileHover/whileTap */
export const cardLift = {
  rest: { 
    y: 0, 
    scale: 1,
    transition: springConfig.default,
  },
  hover: { 
    y: -8, 
    scale: 1.02,
    transition: springConfig.default,
  },
  tap: { 
    y: -4, 
    scale: 0.98,
    transition: springConfig.snappy,
  },
};

/** Button press effect */
export const buttonPress = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

// =============================================================================
// MENU/OVERLAY VARIANTS
// =============================================================================

/** Mobile menu slide */
export const mobileMenuSlide: Variants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 30 
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 30 
    },
  },
};

/** Backdrop fade */
export const backdropFade: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

// =============================================================================
// ACCORDION VARIANTS
// =============================================================================

/** Accordion content expand */
export const accordionContent: Variants = {
  collapsed: { 
    height: 0, 
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  expanded: { 
    height: "auto", 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
