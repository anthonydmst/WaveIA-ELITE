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
            : "text-foreground hover:bg-white/5"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
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
  const [scrolled, setScrolled] = useState(false);

  const { trigger } = useHaptics();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        suppressHydrationWarning
        className={`fixed! top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
            : "bg-transparent"
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
              <span className="text-2xl font-bold tracking-tight">
                wave<span className="text-ocean">IA</span>
              </span>
            </Link>

            {/* Desktop Mega Menu */}
            <MegaMenu />

            {/* CTA Button & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/contact"
                className="relative group px-6 py-2.5 text-sm font-semibold overflow-hidden rounded-full"
                aria-label="Planifier un échange avec WaveIA"
                style={{ viewTransitionName: "cta-primary" }}
                onClick={() => trigger("medium")}
              >
                <span className="absolute inset-0 bg-linear-to-r from-ocean to-accent rounded-full" />

                <span className="absolute inset-0 bg-linear-to-r from-ocean-light to-ocean opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <span className="relative text-background">Planifier un échange</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-foreground hover:text-ocean transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <FocusTrap active={isOpen}>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-100 lg:hidden"
            >
              <div
                className="absolute inset-0 bg-background/95 backdrop-blur-xl"
                onClick={() => setIsOpen(false)}
              />
              <m.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-card border-l border-white/5 p-8 flex flex-col"
              >
                <div className="flex items-center justify-between mb-12">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <Waves className="w-8 h-8 text-ocean" />
                    <span className="text-2xl font-bold">
                      wave<span className="text-ocean">IA</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Fermer le menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {/* Highlighted: Audit SEO Gratuit */}
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6"
                  >
                    <Link
                      href="/referencement-seo/audit-seo-gratuit"
                      onClick={() => setIsOpen(false)}
                      className="group relative flex items-center justify-between px-4 py-3.5 bg-linear-to-r from-ocean/20 to-accent/10 border border-ocean/30 rounded-xl overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-ocean/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-ocean/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ocean">Audit SEO Gratuit</div>
                          <div className="text-xs text-muted-foreground">Analysez votre site</div>
                        </div>
                      </div>
                      <div className="relative px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-md">
                        <span className="text-xs font-bold text-emerald-500">Gratuit</span>
                      </div>
                    </Link>
                  </m.div>

                  {/* Hub Services with Accordion */}
                  <div className="space-y-2 mb-6">
                    {MEGA_MENU_ITEMS.slice(0, 3).map((item, index) => (
                      <MobileAccordionItem
                        key={item.href}
                        item={item}
                        index={index}
                        onNavigate={() => setIsOpen(false)}
                      />
                    ))}
                    
                    {/* Solutions Métiers */}
                    <MobileAccordionItem
                      key="/solutions"
                      item={{
                        label: "Solutions Métiers",
                        href: "/solutions",
                        links: [
                          { label: "Restaurant", href: "/solutions/site-web-restaurant" },
                          { label: "Hôtel", href: "/solutions/site-web-hotel" },
                          { label: "Immobilier", href: "/solutions/site-web-immobilier" },
                          { label: "Artisan BTP", href: "/solutions/site-web-artisan-btp" },
                        ]
                      }}
                      index={3}
                      onNavigate={() => setIsOpen(false)}
                    />
                  </div>

                  {/* Other Links */}
                  <div className="space-y-1 pt-4 border-t border-white/5">
                    {[
                      { href: "/realisations", label: "Projets" },
                      { href: "/tarifs", label: "Tarifs" },
                      { href: "/a-propos", label: "À propos" },
                    ].map((link, index) => (
                      <m.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                      </m.div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5"
>
                  <Link
                    href="/contact"
                    onClick={() => {
                      setIsOpen(false);
                      trigger("medium");
                    }}
                    className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-linear-to-r from-ocean to-accent text-background rounded-full hover:opacity-90 transition-opacity"
                  >
                    Démarrer un projet
                  </Link>

                  <p className="mt-6 text-sm text-muted-foreground text-center">
                    Biarritz • Bayonne • Anglet
                  </p>
                </div>
              </m.nav>
            </m.div>
          </FocusTrap>
        )}
      </AnimatePresence>
    </>
  );
}