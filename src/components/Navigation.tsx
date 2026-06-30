"use client";

import React, { useState, useEffect } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Waves } from "lucide-react";
import FocusTrap from "focus-trap-react";

import { MEGA_MENU_ITEMS } from "@/lib/data";
import { MegaMenu } from "./layout/MegaMenu";
import { ThemeToggle } from "./ThemeToggle";
import { useHaptics } from "@/hooks/use-haptics";
import { Button } from "@/components/ui/Button";
import { accordionContent, backdropFade, mobileMenuSlide } from "@/lib/animation-variants";

// Mobile Accordion Item Component
interface MobileAccordionItemProps {
  item: {
    label: string;
    href: string;
    links?: { label: string; href: string }[];
  };
  index: number;
  onNavigate: () => void;
}

function MobileAccordionItem({ item, index, onNavigate }: MobileAccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href);
  const { trigger } = useHaptics();

  const handleToggle = () => {
    trigger("light");
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = () => {
    trigger("light");
    onNavigate();
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.05 }}
      className="overflow-hidden"
    >
      <button
        onClick={handleToggle}
        className={`
          w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all
          ${isActive 
            ? "text-ocean bg-ocean/10 border border-ocean/20" 
            : "text-foreground hover:bg-foreground/5"
          }
        `}
      >
        <span>{item.label}</span>
        <m.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </m.div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <m.div
            variants={accordionContent}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="pl-4 pr-2 py-2 space-y-1">
              {/* Primary Link: "Tout voir" */}
              <m.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
              >
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-3 py-2 text-sm font-medium text-ocean bg-ocean/5 border border-ocean/10 rounded-lg hover:bg-ocean/10 transition-colors"
                >
                 Tout voir
                </Link>
              </m.div>

              {item.links?.map((sublink, idx) => (
                <m.div
                  key={sublink.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (idx + 1) * 0.05 }}
                >
                  <Link
                    href={sublink.href}
                    onClick={handleLinkClick}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-ocean hover:bg-ocean/5 rounded-lg transition-colors"
                  >
                    {sublink.label}
                  </Link>
                </m.div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOpen = () => {
    setIsNavigating(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNavigate = () => {
    setIsNavigating(true);
    setIsOpen(false);
  };
  const pathname = usePathname();

  const { trigger } = useHaptics();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const headerText = "text-foreground";
  const headerMuted = "text-muted-foreground";
  const hoverText = "hover:text-ocean";

  return (
    <>
      <header
        suppressHydrationWarning
        className={`fixed! top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-float"
            : "bg-background/95 backdrop-blur-xl border-b border-border shadow-float"
        } animate-slide-down!`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
              <Link href="/" className="flex items-center gap-3 group">
                <div 
                  className="relative"
                  style={{ viewTransitionName: "logo" }}
                >
                <div className="absolute inset-0 bg-ocean/20 blur-xl rounded-full group-hover:bg-ocean/40 transition-colors" />
                <Waves className="relative w-8 h-8 text-ocean" />
              </div>
              <span className={`text-2xl font-bold tracking-tight ${headerText}`}>
                wave<span className="text-ocean">IA</span>
              </span>
            </Link>

            {/* Desktop Mega Menu */}
            <MegaMenu />

            {/* CTA Button & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Button asChild size="default" className="shadow-glow">
                <Link
                  href="/contact"
                  aria-label="Planifier un échange avec WaveIA"
                  style={{ viewTransitionName: "cta-primary" }}
                >
                  Planifier un échange
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={isOpen ? handleClose : handleOpen}
                className={`relative w-10 h-10 flex flex-col items-center justify-center rounded-full bg-foreground/5 border border-border hover:border-ocean/30 transition-colors group overflow-hidden ${headerText} ${hoverText}`}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                <div className="absolute inset-0 bg-ocean/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-5 h-4 flex flex-col justify-between">
                  <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                  <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                  <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <FocusTrap active={isOpen}>
            <div className="fixed inset-0 z-100 lg:hidden">
              {/* Sibling Backdrop to prevent nested opacity/transform composite layouts */}
              <m.div
                variants={backdropFade}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 bg-background/90 backdrop-blur-md"
                onClick={handleClose}
              />
              <m.nav
                variants={mobileMenuSlide}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-card border-l border-border p-8 flex flex-col z-10"
              >
                <div className="flex items-center justify-between mb-12">
                  <Link href="/" className="flex items-center gap-3" onClick={handleNavigate}>
                    <Waves className="w-8 h-8 text-ocean" />
                    <span className="text-2xl font-bold">
                      wave<span className="text-ocean">IA</span>
                    </span>
                  </Link>
                  <button
                    onClick={handleClose}
                    className={`relative w-10 h-10 flex flex-col items-center justify-center rounded-full bg-foreground/5 border border-border hover:border-ocean/30 transition-colors group overflow-hidden ${headerMuted} ${hoverText}`}
                    aria-label="Fermer le menu"
                  >
                    <div className="absolute inset-0 bg-ocean/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-5 h-4 flex flex-col justify-between">
                      <span className="w-5 h-0.5 bg-current rounded-full rotate-45 translate-y-1.5" />
                      <span className="w-5 h-0.5 bg-current rounded-full opacity-0 scale-x-0" />
                      <span className="w-5 h-0.5 bg-current rounded-full -rotate-45 -translate-y-1.5" />
                    </div>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {/* Hub Services with Accordion */}
                  <div className="space-y-2 mb-6 pt-4">
                    {MEGA_MENU_ITEMS.map((item, index) => (
                      <MobileAccordionItem
                        key={item.href}
                        item={item}
                        index={index}
                        onNavigate={handleNavigate}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border">
                  <Button asChild size="lg" className="w-full h-auto py-3.5 text-base font-semibold shadow-glow">
                    <Link
                      href="/contact"
                      onClick={handleNavigate}
                    >
                      Planifier un échange
                    </Link>
                  </Button>

                  <p className="mt-6 text-sm text-muted-foreground text-center">
                    Biarritz • Bayonne • Anglet
                  </p>
                </div>
              </m.nav>
            </div>
          </FocusTrap>
        )}
      </AnimatePresence>
    </>
  );
}