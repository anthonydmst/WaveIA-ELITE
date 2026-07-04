"use client";

import { useState, useRef, useCallback, KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/lib/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useHaptics } from "@/hooks/use-haptics";

interface Props {
  faq: FAQItem[];
}

export function ServiceFAQ({ faq }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { trigger } = useHaptics();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          const prevIndex = index > 0 ? index - 1 : faq.length - 1;
          faqRefs.current[prevIndex]?.focus();
          break;
        case "ArrowDown":
          e.preventDefault();
          const nextIndex = index < faq.length - 1 ? index + 1 : 0;
          faqRefs.current[nextIndex]?.focus();
          break;
        case "Home":
          e.preventDefault();
          faqRefs.current[0]?.focus();
          break;
        case "End":
          e.preventDefault();
          faqRefs.current[faq.length - 1]?.focus();
          break;
      }
    },
    [faq.length]
  );

  return (
    <section className="relative py-20 lg:py-32 bg-card/30">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 animate-in">
          <SectionHeader size="section" align="center" className="mb-4">
            Questions{" "}
            <span className="font-heading italic text-ocean-text">
              fréquentes
            </span>
          </SectionHeader>
        </div>

        <div className="space-y-4" role="list">
          {faq.map((item, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden animate-in ${
                openFaq === index 
                  ? "border-ocean/30 shadow-[0_0_20px_rgba(14,165,233,0.1)]" 
                  : "border-border hover:border-ocean/20"
              } ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}`}
              role="listitem"
            >
              <button
                ref={(el) => {
                  faqRefs.current[index] = el;
                }}
                onClick={() => {
                  trigger("light");
                  setOpenFaq(openFaq === index ? null : index);
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-trigger-${index}`}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-inset group"
              >
                <span className={`font-semibold pr-4 text-lg transition-colors duration-300 ${openFaq === index ? "text-ocean" : "text-foreground group-hover:text-ocean/80"}`}>
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  openFaq === index 
                    ? "bg-primary text-white border-ocean rotate-180" 
                    : "bg-foreground/5 border-border text-muted-foreground group-hover:border-ocean/30 group-hover:text-ocean"
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              {/* Always rendered in the DOM (CSS-only collapse) so the answer
                  stays crawlable and matches the FAQPage JSON-LD emitted
                  alongside this component, instead of being unmounted. */}
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                className={`overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out grid ${
                  openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed pl-1 border-l-2 border-ocean/20 ml-1">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
