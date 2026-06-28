import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'hero' | 'page' | 'section' | 'subsection';
  align?: 'left' | 'center' | 'right';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const SectionHeader = ({
  size = 'section',
  align = 'left',
  as,
  className,
  children,
  ...props
}: SectionHeaderProps) => {
  const Component = as ?? (size === 'page' ? 'h1' : size === 'section' ? 'h2' : 'h3');
  
  const sizeClasses = {
    hero: "text-hero",
    page: "text-display",
    section: "text-title",
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
      {...props}
    >
      {children}
    </Component>
  );
};
