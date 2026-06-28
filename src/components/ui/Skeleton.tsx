import { cn } from "@/lib/utils";

/**
 * Universal S-Tier Skeleton Component
 * Uses primary color opacity for subtle brand integration.
 * Supports shimmering effect for loading perception.
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-foreground/5 border border-border",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
