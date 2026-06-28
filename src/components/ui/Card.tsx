import * as React from "react";
import { cn } from "@/lib/utils";

type CardVariant = "elevated" | "glass" | "plain";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * elevated — premium surface: warm white→sky gradient + sky edge in light, frosted glass in dark.
   * glass    — adaptive frosted glass token surface.
   * plain    — solid card token surface.
   */
  variant?: CardVariant;
  /** Adds the canonical hover lift (self-hover). For group-driven lift, pass `group-hover:*` via className instead. */
  interactive?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  elevated:
    "bg-linear-to-b from-[#fefcf7] to-[#faf3e5] border border-[rgba(61,45,23,0.10)] " +
    "dark:bg-glass-bg dark:from-transparent dark:to-transparent dark:border-glass-border dark:backdrop-blur-sm",
  glass: "bg-glass-bg border border-glass-border backdrop-blur-sm",
  plain: "bg-card border border-border",
};

/**
 * Canonical elevated-surface card. Centralises the repeated
 * "rounded-2xl + border + shadow-card + hover lift" pattern so sections
 * stop re-declaring it inline. Padding/layout are left to the caller.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "elevated", interactive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl shadow-card transition-all duration-300",
        variantStyles[variant],
        interactive &&
          "hover:-translate-y-1 hover:shadow-card-hover hover:border-ocean/40",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";
