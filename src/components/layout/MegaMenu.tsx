"use client";

import React, { useState } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { MEGA_MENU_ITEMS } from "@/lib/data/site";

interface MegaMenuProps {
  isHero?: boolean;
}

export function MegaMenu({ isHero = false }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href || pathname.startsWith(href);

  // Close menu on route change (SPA navigation)
  React.useEffect(() => {
    setActiveTab(null);
  }, [pathname]);

  const inactiveLinkClass = "text-muted-foreground hover:text-foreground hover:bg-foreground/5";
  const panelHeadingClass = "text-foreground";
  const panelTextClass = "text-muted-foreground";
  const panelLinkClass = "text-foreground hover:text-ocean";

  return (
    <nav className="hidden lg:flex items-center gap-1 text-foreground" onMouseLeave={() => setActiveTab(null)}>
      {MEGA_MENU_ITEMS.map((item, index) => {
        const isActive = isActiveLink(item.href);

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => setActiveTab(index)}
          >
            <Link
              href={item.href}
              className={`
                relative px-4 py-2 text-[15px] font-medium transition-colors rounded-full flex items-center gap-2
                ${activeTab === index || isActive 
                  ? "text-ocean bg-ocean/10 shadow-[0_0_15px_rgba(14,165,233,0.15)]" 
                  : inactiveLinkClass
                }
              `}
            >
              {item.label}
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeTab === index ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {activeTab === index && (
                <m.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] z-50"
                >
                  <div className="bg-linear-to-b from-ocean/10 via-card/90 to-card/95 backdrop-blur-3xl border border-ocean/20 rounded-2xl shadow-[0_0_50px_rgba(14,165,233,0.15)] overflow-hidden p-6 grid grid-cols-12 gap-6">
                    <div className="col-span-5 bg-linear-to-br from-ocean/10 to-transparent rounded-xl p-5 flex flex-col justify-between">
                      <div>
                        <p className={`font-bold text-lg mb-1 ${panelHeadingClass}`}>{item.featured.title}</p>
                        <p className={`text-xs leading-relaxed ${panelTextClass}`}>
                          {item.featured.desc}
                        </p>
                      </div>
                      <Link 
                        href={item.featured.href}
                        className="group flex items-center gap-2 text-xs font-semibold text-ocean mt-4"
                      >
                        Découvrir <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Links Section (Right - 7 cols) */}
                    <div className="col-span-7 flex flex-col justify-between">
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${panelTextClass}`}>
                          Services
                        </p>
                        <ul className="space-y-2">
                          {item.links.map((sublink) => (
                            <li key={sublink.href}>
                              <Link 
                                href={sublink.href}
                                className={`block text-[15px] ${panelLinkClass} transition-colors`}
                              >
                                {sublink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {item.cities.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-border">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            Zones Ciblées
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.cities.map((city) => (
                               <Link 
                                 key={city.href}
                                 href={city.href}
                                 className="text-xs px-2 py-1 rounded-md bg-foreground/5 hover:bg-ocean/10 hover:text-ocean transition-colors"
                               >
                                 {city.label}
                               </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      

    </nav>
  );
}
