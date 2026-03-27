"use client";

import { Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
  results?: string;
}

interface Props {
  testimonials: Testimonial[];
  title?: string;
  showCTA?: boolean;
}

export function TestimonialsGrid({ testimonials, title, showCTA = true }: Props) {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-xs font-bold mb-4">
              <Star className="w-3 h-3 fill-ocean" />
              TÉMOIGNAGES
            </div>
            <SectionHeader size="section" align="center">
              {title}
            </SectionHeader>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`relative p-8 bg-card/50 backdrop-blur-sm border border-white/5 hover:border-ocean/30 rounded-2xl transition-all duration-300 group animate-in ${idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "delay-300" : ""}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <Quote className="w-5 h-5 text-ocean" />
              </div>

              {/* Stars */}
              {testimonial.rating && (
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating! ? "text-yellow-400 fill-yellow-400" : "text-white/20"}`}
                    />
                  ))}
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-6 text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ocean/20 flex items-center justify-center text-ocean font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                    </div>
                  </div>
                </div>
                
                {/* Results Badge */}
                {testimonial.results && (
                  <div className="px-3 py-1 bg-ocean/10 border border-ocean/20 rounded-full text-xs font-bold text-ocean">
                    {testimonial.results}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {showCTA && (
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-ocean to-accent text-white rounded-full font-medium hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all"
            >
              Rejoignez-les
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
