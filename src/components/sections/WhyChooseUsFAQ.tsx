"use client";

import { HelpCircle, ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_CHOOSE_US_FAQS as faqs } from "@/lib/data/definitions/faq-master";

export function WhyChooseUsFAQ() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ambient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--ocean-glow)_0%,transparent_50%)] opacity-[0.08]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean-text text-sm font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <SectionHeader as="h2" size="section" className="mt-4 leading-tight">
              Vous avez encore<br />
              <span className="font-heading italic text-ocean-text">des questions ?</span>
            </SectionHeader>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Retrouvez ici les réponses aux interrogations les plus fréquentes concernant notre accompagnement et nos méthodes.
            </p>
          </div>

          {/* Right Column (Accordion) */}
          <div className="lg:col-span-8">
            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-xl overflow-hidden hover:border-ocean/30 transition-colors shadow-card"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="flex flex-1 items-center justify-between py-5 px-6 font-semibold text-left text-foreground hover:text-ocean transition-colors group">
                      <span className="text-lg pr-4">{faq.question}</span>
                      <ChevronDown
                        className="w-5 h-5 text-muted-foreground transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-ocean shrink-0"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  {/* forceMount + fill-mode:forwards keeps the answer in the DOM at all
                      times (crawlable, matches the FAQPage JSON-LD above) instead of
                      Radix's default of unmounting it while collapsed. */}
                  <Accordion.Content
                    forceMount
                    style={{ animationFillMode: "forwards" }}
                    className="overflow-hidden text-muted-foreground text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=closed]:h-0"
                  >
                    <div className="px-6 pb-5 pt-0 leading-relaxed text-base">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

        </div>
      </div>
    </section>
  );
}
