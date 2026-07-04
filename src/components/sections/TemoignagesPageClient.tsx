"use client";

import Image from "next/image";
import { Star, Quote, TrendingUp, Users, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AgencyStatsBlock } from "@/components/templates/AgencyStatsBlock";
import { AGENCY_TESTIMONIALS, AGENCY_STATS, AGENCY_PROJECT_COUNT } from "@/lib/data";

// Unified testimonial interface
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  results?: string;
  city?: string;
  image?: string;
}

// Previously hardcoded 4 additional fabricated testimonials here (fake authors
// reused, with contradictory details, elsewhere in the codebase). Removed:
// only AGENCY_TESTIMONIALS (real, client-approved quotes once populated) feeds
// this page now.
const allTestimonials: Testimonial[] = AGENCY_TESTIMONIALS.map((t) => ({
  ...t,
  city: undefined,
  image: undefined,
}));

export function TemoignagesPageClient() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-20 light:opacity-30" />
          <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-50 light:block hidden" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex justify-start">
             <Breadcrumbs />
          </div>
          <div className="text-center max-w-3xl mx-auto animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              <Star className="w-4 h-4 fill-ocean" />
              Témoignages Clients
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Ils nous font <span className="text-gradient">confiance</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Des entrepreneurs de la Côte Basque et des Landes qui ont transformé leur activité grâce à un site web performant.
            </p>
          </div>

          {/* Trust Stats */}
          <div
            className="flex flex-wrap justify-center gap-8 mt-12 animate-appear"
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-ocean" />
              <span className="font-bold">{AGENCY_PROJECT_COUNT}+</span>
              <span className="text-muted-foreground text-sm">projets livrés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {allTestimonials.length === 0 ? (
            <div className="text-center max-w-xl mx-auto py-12">
              <Quote className="w-10 h-10 text-ocean/40 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                Nous rassemblons les retours de nos premiers clients. Les témoignages seront publiés ici dès qu&apos;ils seront disponibles.
              </p>
            </div>
          ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative animate-in"
              >
                <div className="relative h-full p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-ocean/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] hover:translate-y-[-4px]">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-ocean/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <Quote className="w-6 h-6 text-ocean" />
                  </div>

                  {/* Results Badge */}
                  {testimonial.results && (
                    <div className="absolute top-6 left-6 px-3 py-1.5 bg-ocean/20 border border-ocean/30 rounded-full">
                      <span className="text-xs font-bold text-ocean flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {testimonial.results}
                      </span>
                    </div>
                  )}

                  {/* Glow Effect */}
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-ocean/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative pt-10">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {testimonial.image ? (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={56}
                            height={56}
                            className="rounded-full border-2 border-border group-hover:border-ocean/30 transition-colors duration-300"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBjFBgf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AMr8f8ltazYu2LN6RoJpnkVSqghSScAce/mMYyHyJqQDdpX/2Q=="
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-full bg-ocean/20 flex items-center justify-center text-ocean font-bold text-xl">
                            {testimonial.author.charAt(0)}
                          </div>
                        )}
                        <div>
                          <div className="font-bold group-hover:text-ocean transition-colors duration-300">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                          </div>
                        </div>
                      </div>
                      
                      {/* City Badge */}
                      {testimonial.city && (
                        <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-foreground/5 border border-border rounded-full text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {testimonial.city}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <AgencyStatsBlock
        title={AGENCY_STATS.title}
        metrics={AGENCY_STATS.metrics}
      />
    </div>
  );
}
