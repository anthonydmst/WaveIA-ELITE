"use client";


import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbs, BreadcrumbItem } from "@/lib/breadcrumbs";

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export function Breadcrumbs({ items: manualItems }: BreadcrumbsProps) {
  const pathname = usePathname();
  const items = manualItems || generateBreadcrumbs(pathname);

  // Don't show on homepage
  if (items.length <= 1) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="mb-8 overflow-x-auto min-h-[20px] animate-hero-fade-up-rapid"
    >
      <ol className="flex items-center whitespace-nowrap text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li
              key={item.href}
              className="flex items-center"
            >
              {!isFirst && (
                <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/40 shrink-0" />
              )}
              
              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-ocean transition-colors flex items-center gap-1 group"
                >
                  {isFirst && (
                    <Home className="w-4 h-4 mb-0.5 group-hover:scale-110 transition-transform" />
                  )}
                  <span className={isFirst ? "sr-only" : ""}>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
