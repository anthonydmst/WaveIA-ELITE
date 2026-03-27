/**
 * S-Tier Design Tokens
 * 
 * Single source of truth for design constants.
 * Use these tokens instead of hardcoding values.
 */

export const DESIGN_TOKENS = {
  // Colors (Semantic)
  colors: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    card: "hsl(var(--card))",
    cardForeground: "hsl(var(--card-foreground))",
    primary: "hsl(var(--primary))",
    primaryForeground: "hsl(var(--primary-foreground))",
    secondary: "hsl(var(--secondary))",
    secondaryForeground: "hsl(var(--secondary-foreground))",
    muted: "hsl(var(--muted))",
    mutedForeground: "hsl(var(--muted-foreground))",
    accent: "hsl(var(--accent))",
    accentForeground: "hsl(var(--accent-foreground))",
    destructive: "hsl(var(--destructive))",
    destructiveForeground: "hsl(var(--destructive-foreground))",
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
  },

  // Layout
  layout: {
    maxWidth: "1400px",
    containerPadding: "1.5rem",
    sectionSpacing: "6rem",
  },

  // Borders & Radius
  radius: {
    sm: "calc(var(--radius) - 4px)",
    md: "calc(var(--radius) - 2px)",
    lg: "var(--radius)",
    xl: "1rem",
    "2xl": "1.5rem",
  },

  // Animation
  animation: {
    duration: {
      fast: "200ms",
      normal: "300ms",
      slow: "500ms",
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
  },

  // Glassmorphism (S-Tier Ghost-Glass)
  glass: {
    card: "bg-card/60 backdrop-blur-md border-white/10",
    header: "bg-background/80 backdrop-blur-lg border-b border-white/5",
  }
} as const;
