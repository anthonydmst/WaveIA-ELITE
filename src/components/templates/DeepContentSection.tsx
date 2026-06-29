"use client";


import { DeepContent } from "@/lib/data/types";
import { AlertCircle, CheckCircle2, Zap, Target, Globe, Palette, Clock, MapPin } from "lucide-react";
import { StatsSection } from "./StatsSection";
import { TestimonialInline } from "./TestimonialInline";
import { ComparisonTable } from "./ComparisonTable";
import { RelatedServices } from "../sections/RelatedServices";
import { LocalContextVisual } from "../visuals/LocalContextVisual";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Props {
  content: DeepContent;
}

export function DeepContentSection({ content }: Props) {
  return (
    <div className="flex flex-col gap-24 py-20">
      
      {/* 1. PROBLEM / AGITATION */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in-left">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-6">
                  <AlertCircle className="w-3 h-3" />
                  LE CONSTAT
               </div>
               <SectionHeader as="h2" size="page" className="mb-6">
                  {content.problem.title}
               </SectionHeader>
               <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {content.problem.text}
               </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 animate-scale-in">
               <SectionHeader as="h3" size="subsection" className="mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-red-500 rounded-full" />
                  Ce qui vous freine aujourd&apos;hui
               </SectionHeader>
               <ul className="space-y-4">
                  {content.problem.painPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-foreground/5 border border-border">
                       <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                       </div>
                       <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>


      {/* 2. STATS (Grade A++) */}
      {content.stats && (
        <StatsSection title={content.stats.title} metrics={content.stats.metrics} />
      )}

      {/* 2b. TECH STACK (Grade A++++) */}
      {content.tech_stack && (
        <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
           <div className="text-center mb-12">
              <SectionHeader as="h2" size="section" align="center" className="mb-4">{content.tech_stack.title}</SectionHeader>
              <p className="text-muted-foreground max-w-2xl mx-auto">{content.tech_stack.description}</p>
           </div>
           <div className="grid md:grid-cols-3 gap-6">
              {content.tech_stack.items.map((item, idx) => (
                 <div key={idx} className="p-6 rounded-xl bg-foreground/5 border border-border hover:border-ocean/30 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-ocean/10 flex items-center justify-center mb-4 group-hover:bg-ocean/20 transition-colors">
                       {item.icon === "Zap" && <Zap className="w-6 h-6 text-ocean" />}
                       {item.icon === "Globe" && <Globe className="w-6 h-6 text-ocean" />}
                       {item.icon === "Palette" && <Palette className="w-6 h-6 text-ocean" />}
                    </div>
                    <SectionHeader as="h3" size="subsection" className="mb-2">{item.name}</SectionHeader>
                    <p className="text-sm text-muted-foreground">{item.benefit}</p>
                 </div>
              ))}
           </div>
        </section>
      )}

      {/* 2c. LOCAL MARKET FIT (Grade A++++) */}
      {content.local_market_fit && (
        <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
           <div className="bg-ocean/5 border border-ocean/10 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 text-ocean text-xs font-bold mb-4">
                       <MapPin className="w-3 h-3" />
                       CONTEXTE LOCAL
                    </div>
                    <SectionHeader as="h2" size="section" className="mb-4">{content.local_market_fit.title}</SectionHeader>
                    <p className="text-muted-foreground mb-8 text-lg">{content.local_market_fit.subtitle}</p>
                    <div className="space-y-6">
                       {content.local_market_fit.points.map((point, idx) => (
                          <div key={idx} className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-ocean/20 flex items-center justify-center shrink-0 mt-1">
                                <span className="font-bold text-ocean text-sm">{idx + 1}</span>
                             </div>
                             <div>
                                <h4 className="font-bold text-foreground block mb-1">{point.title}</h4>
                                <p className="text-sm text-muted-foreground">{point.description}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
                 <div className="hidden lg:block relative h-full min-h-[400px]">
                    <LocalContextVisual />
                 </div>
              </div>
           </div>
        </section>
      )}


      {/* 3. SOLUTION / METHODOLOGY */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-xs font-bold mb-6">
               <Zap className="w-3 h-3" />
               NOTRE APPROCHE
            </div>
            <SectionHeader as="h2" size="page" align="center" className="mb-6">
               {content.solution.title}
            </SectionHeader>
            <p className="text-lg text-muted-foreground">{content.solution.text}</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Visual Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-ocean/0 via-ocean/30 to-ocean/0 border-t border-dashed border-ocean/30 z-0" />

            {content.solution.methodology.map((step, idx) => (
               <div
                  key={idx}
                  className={`relative group p-8 bg-card/50 backdrop-blur-sm border border-border hover:border-ocean/30 rounded-2xl transition-all duration-300 z-10 animate-in ${idx === 1 ? "delay-200" : idx === 2 ? "delay-400" : ""}`}
               >
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-card border border-ocean/30 rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                     <span className="text-xl font-heading font-bold text-ocean">0{idx + 1}</span>
                  </div>
                  
                  {/* Connector Dot */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full opacity-50 blur-[2px]" />

                  <div className="mt-8 text-center">
                     <SectionHeader as="h3" size="subsection" align="center" className="mb-3 group-hover:text-ocean transition-colors">
                        {step.step}
                     </SectionHeader>
                     <p className="text-muted-foreground leading-relaxed text-sm">
                        {step.details}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 2d. PROCESS DETAILED (Grade A++++) */}
      {content.process_detailed && (
        <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
           <div className="text-center mb-12">
              <SectionHeader as="h2" size="section" align="center" className="mb-4">{content.process_detailed.title}</SectionHeader>
           </div>
           <div className="grid md:grid-cols-4 gap-4">
              {content.process_detailed.steps.map((step, idx) => (
                 <div key={idx} className="relative p-6 rounded-2xl bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors">
                    <div className="text-sm text-ocean font-bold mb-2 flex items-center gap-2">
                       <Clock className="w-4 h-4" />
                       {step.duration}
                    </div>
                    <SectionHeader as="h3" size="subsection" className="mb-4">{step.name}</SectionHeader>
                    <ul className="space-y-2">
                       {step.deliverables.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                             <div className="w-1 h-1 rounded-full bg-primary" />
                             {item}
                          </li>
                       ))}
                    </ul>
                    {/* Connector Arrow (Desktop) */}
                    {idx < content.process_detailed!.steps.length - 1 && (
                       <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-foreground/10 z-10" />
                    )}
                 </div>
              ))}
           </div>
        </section>
      )}

      {/* 4. TESTIMONIAL (Grade A++) */}
      {content.testimonial && (
        <TestimonialInline 
          quote={content.testimonial.quote}
          author={content.testimonial.author}
          role={content.testimonial.role}
          company={content.testimonial.company}
          rating={content.testimonial.rating}
        />
      )}

      {/* 5. BENEFITS */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
         <div className="dark bg-linear-to-br from-gray-900 to-gray-950 border border-border rounded-3xl p-8 lg:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
               <div>
                  <SectionHeader as="h2" size="section" className="mb-6">
                     {content.benefits.title}
                  </SectionHeader>
                  <div className="space-y-8">
                     {content.benefits.items.map((benefit, idx) => (
                        <div key={idx} className="flex gap-4">
                           <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-6 h-6 text-ocean" />
                           </div>
                           <div>
                              <SectionHeader as="h4" size="subsection" className="mb-1">{benefit.title}</SectionHeader>
                              <p className="text-muted-foreground">{benefit.text}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               {/* Visual Illustration (Abstract UI) */}
               <div className="relative aspect-square lg:aspect-auto h-full min-h-[300px] bg-foreground/5 rounded-2xl border border-border flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                   <div className="text-center mx-auto">
                      <div className="inline-flex flex-col items-center gap-4">
                         <div className="w-24 h-24 rounded-full bg-ocean/20 flex items-center justify-center animate-pulse">
                            <Target className="w-12 h-12 text-ocean" />
                         </div>
                         <div className="text-2xl font-bold">Objectif Atteint</div>
                         <div className="text-muted-foreground text-sm">ROI Maximisé</div>
                      </div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. COMPARISON TABLE (Grade A++) */}
      {content.comparison && (
        <ComparisonTable 
          title={content.comparison.title}
          subtitle={content.comparison.subtitle}
          competitors={content.comparison.competitors}
          rows={content.comparison.rows}
        />
      )}

      {/* 7. RELATED SERVICES (Cross-Linking Grade A+) */}
      {content.relatedServices && (
        <RelatedServices services={content.relatedServices} />
      )}

    </div>
  );
}
