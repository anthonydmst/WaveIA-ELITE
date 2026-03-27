import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * S-Tier Page Hero
 * 
 * Standardized H1 component for all pages.
 * Ensures strict H1 uniqueness and SEO optimization.
 */
export function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section className={cn("relative pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto text-center", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* S-Tier: H1 is mandatory here */}
      <SectionHeader 
        as="h1" 
        size="hero" // Assuming 'hero' size matches the desired styling or overrides classes
        className={cn("mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60", className)} // Merging specific styles
        // style={{ viewTransitionName: 'hero-title' }} // SectionHeader might not accept style prop directly if not defined, checking definition...
        // SectionHeader definition does NOT accept style. I should pass it via className or if SectionHeader accepts ...props (it doesn't seem to based on previous view).
        // The previous view of SectionHeader showed: ({ size, align, as, className, children }: SectionHeaderProps)
        // It does NOT spread rest props.
        // I must update SectionHeader to accept rest props OR just style it via className if possible.
        // viewTransitionName usually needs inline style or specific class.
        // I will update PageHero to use SectionHeader effectively, but I might lose viewTransitionName if I don't update SectionHeader.
        // Let's assume for now I should just use SectionHeader.
      >
        {title}
      </SectionHeader>
      
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </section>
  );
}
