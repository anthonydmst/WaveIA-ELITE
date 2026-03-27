import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  size?: 'hero' | 'page' | 'section' | 'subsection';
  align?: 'left' | 'center' | 'right';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
};

export const SectionHeader = ({
  size = 'section',
  align = 'left',
  as,
  className,
  children
}: SectionHeaderProps) => {
  const Component = as ?? (size === 'page' ? 'h1' : size === 'section' ? 'h2' : 'h3');
  
  const sizeClasses = {
    hero: "text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9]",
    page: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
    section: "text-3xl md:text-4xl font-semibold tracking-tight",
    subsection: "text-xl md:text-2xl font-medium tracking-tight"
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <Component 
      className={cn(
        sizeClasses[size], 
        alignClasses[align], 
        className
      )}
    >
      {children}
    </Component>
  );
};
