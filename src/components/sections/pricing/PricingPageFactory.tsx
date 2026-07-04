"use client";


import { PricingCard } from "./PricingCard";
import { useState, useCallback, useRef, KeyboardEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  Users,
  BadgeCheck,
  HelpCircle,
  LucideIcon,
  Star,
} from "lucide-react";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TestimonialsGrid } from "@/components/templates/TestimonialsGrid";
import { ComparisonTable } from "@/components/templates/ComparisonTable";

import { 
  PricingPlan, 
  Addon, 
  FAQItem, 
  AGENCY_TESTIMONIALS,
  AGENCY_COMPARISON 
} from "@/lib/data";
import { BreadcrumbItem } from "@/lib/breadcrumbs";


interface PricingPageFactoryProps {
  title: string;
  subtitle: string;
  badge: {
    icon: LucideIcon;
    text: string;
  };
  plans: PricingPlan[];
  addons?: Addon[];
  faqs: FAQItem[];
  trustSignals?: {
    icon: LucideIcon;
    label: string;
    value: string;
  }[];
  heroImage?: string; // Optional nice background
  promoBanner?: React.ReactNode;
  children?: React.ReactNode;
  breadcrumbItems?: BreadcrumbItem[];
}


export function PricingPageFactory({
  title,
  subtitle,
  badge,
  plans,
  addons,
  faqs,
  trustSignals = [
    { icon: BadgeCheck, label: "Satisfaction", value: "100%" },
    { icon: Users, label: "Projets livrés", value: "150+" },
    { icon: Star, label: "Avis clients", value: "5.0/5" },
  ],
  promoBanner,
  children,
  breadcrumbItems
}: PricingPageFactoryProps) {

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          const prevIndex = index > 0 ? index - 1 : faqs.length - 1;
          faqRefs.current[prevIndex]?.focus();
          break;
        case "ArrowDown":
          e.preventDefault();
          const nextIndex = index < faqs.length - 1 ? index + 1 : 0;
          faqRefs.current[nextIndex]?.focus();
          break;
        case "Home":
          e.preventDefault();
          faqRefs.current[0]?.focus();
          break;
        case "End":
          e.preventDefault();
          faqRefs.current[faqs.length - 1]?.focus();
          break;
      }
    },
    [faqs.length]
  );

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className={`relative pb-20 lg:pb-32 ${promoBanner ? "pt-44 lg:pt-52" : "pt-32 lg:pt-40"}`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex justify-start">
             <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="text-center max-w-3xl mx-auto animate-hero-fade-up">

            {promoBanner && (
              <div className="mb-10 flex justify-center">
                {promoBanner}
              </div>
            )}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              <badge.icon className="w-4 h-4" />
              {badge.text}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {subtitle}
            </p>

            {/* Trust Signals Row */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {trustSignals.map((signal, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full"
                >
                  <signal.icon className="w-4 h-4 text-ocean" />
                  <span className="text-sm font-bold text-ocean">{signal.value}</span>
                  <span className="text-xs text-muted-foreground">{signal.label}</span>
                </div>

              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Injected Content (AIDA: Interest & Desire) */}
      {children}

      {/* Pricing Cards (AIDA: Action) */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table (Only if relevant for Web/General) */}
      <section className="py-20 lg:py-32 bg-card/30">
        <ComparisonTable 
          title={AGENCY_COMPARISON.title}
          subtitle="Pourquoi nous choisir plutôt qu'une agence traditionnelle ?"
          competitors={AGENCY_COMPARISON.competitors}
          rows={AGENCY_COMPARISON.rows}
        />
      </section>

      {/* Addons Section */}
      {addons && addons.length > 0 && (
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4" />
                Options
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Sur-mesure
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Personnalisez votre offre avec nos modules à la carte.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-ocean/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] transition-all animate-in ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}`}
                  style={{ willChange: "transform", backfaceVisibility: "hidden" }}
                >
                  <h3 className="font-semibold mb-2 group-hover:text-ocean transition-colors">{addon.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {addon.description}
                  </p>
                  <div className="text-xl font-bold text-ocean">{addon.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials: only rendered once real, client-approved quotes exist */}
      {AGENCY_TESTIMONIALS.length > 0 && (
        <TestimonialsGrid
          testimonials={AGENCY_TESTIMONIALS.slice(0, 2)}
          title="Ils ont fait le bon choix"
          showCTA={false}
        />
      )}

      {/* FAQ Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 animate-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Questions <span className="text-gradient">fréquentes</span>
            </h2>
          </div>

          <div className="space-y-4" role="list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-ocean/20 transition-colors animate-in"
                role="listitem"
              >
                <button
                  ref={(el) => { faqRefs.current[index] = el; }}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-inset"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-ocean shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <m.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
