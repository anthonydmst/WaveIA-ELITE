"use client";

import Image from "next/image";
import { Star, Quote, TrendingUp } from "lucide-react";
import { AGENCY_TESTIMONIALS, AGENCY_STATS } from "@/lib/data";

// Transform AGENCY_TESTIMONIALS into render format
const testimonials = AGENCY_TESTIMONIALS.slice(0, 3).map(t => ({
  name: t.author,
  role: `${t.role}, ${t.company}`,
  content: t.quote,
  image: `https://images.unsplash.com/photo-${t.author.includes("Sophie") ? "1494790108377-be9c29b29330" : t.author.includes("Thomas") ? "1507003211169-0a1dd7228f2d" : t.author.includes("Marie") ? "1438761681033-6461ffad8d80" : "1472099645785-5658abf4ff4e"}?w=100&h=100&fit=crop&crop=face`,
  rating: t.rating || 5,
  highlight: t.results || ""
}));

const delayClasses = ["", "delay-100", "delay-200"];

export function AnimatedTestimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--ocean)_0%,transparent_60%)] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
            <Star className="w-4 h-4 fill-ocean" />
            Témoignages
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Des entrepreneurs de Biarritz, Bayonne et Anglet qui ont fait le choix de l&apos;innovation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative animate-in ${delayClasses[index] ?? ""}`}
              style={{ willChange: "transform", backfaceVisibility: "hidden" }}
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-glass-bg backdrop-blur-sm rounded-2xl border border-glass-border overflow-hidden transition-all duration-500 hover:border-ocean/30 shadow-card hover:shadow-card-hover hover:translate-y-[-8px]">
                
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-ocean/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <Quote className="w-5 h-5 text-ocean" />
                </div>
                
                {/* Highlight Badge */}
                {testimonial.highlight && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-ocean/20 border border-ocean/30 rounded-full">
                    <span className="text-xs font-bold text-ocean">{testimonial.highlight}</span>
                  </div>
                )}
                
                {/* Glow Effect */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-ocean/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative pt-8">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-foreground mb-8 leading-relaxed text-lg line-clamp-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-ocean/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="relative rounded-full border-2 border-glass-border group-hover:border-ocean/30 transition-colors duration-300"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBjFBgf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBjFBgf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AMr8f8ltazYu2LN6RoJpnkVSqghSScAce/mMYyHyJqQDdpX/2Q=="
                      />
                    </div>
                    <div>
                      <div className="font-bold group-hover:text-ocean transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-glass-border animate-in delay-300">
          {/* Client Count */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {testimonials.map((t, i) => (
                <Image
                  key={i}
                  src={t.image}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-background"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBjFBgf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AMr8f8ltazYu2LN6RoJpnkVSqghSScAce/mMYyHyJqQDdpX/2Q=="
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-ocean">{AGENCY_STATS.metrics[0]?.value ?? "50+"}</span>
              <span className="text-muted-foreground"> {AGENCY_STATS.metrics[0]?.label?.toLowerCase() ?? "clients"}</span>
            </div>
          </div>
          
          <div className="h-8 w-px bg-foreground/10 hidden sm:block" />
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">
              <span className="font-bold text-ocean">{AGENCY_STATS.metrics[2]?.value ?? "5.0"}</span>
              <span className="text-muted-foreground"> sur Google</span>
            </span>
          </div>

          <div className="h-8 w-px bg-foreground/10 hidden sm:block" />

          {/* Satisfaction */}
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-sm">
              <span className="font-bold text-ocean">{AGENCY_STATS.metrics[1]?.value ?? "100%"}</span>
              <span className="text-muted-foreground"> {AGENCY_STATS.metrics[1]?.label?.toLowerCase() ?? "satisfaction"}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
