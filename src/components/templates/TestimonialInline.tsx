"use client";

import { Quote, Star } from "lucide-react";

interface Props {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
}

export function TestimonialInline({ quote, author, role, company, rating = 5 }: Props) {
  return (
    <section className="relative max-w-4xl mx-auto px-6 lg:px-8 w-full">
      <div className="relative bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 lg:p-12 overflow-hidden animate-scale-in">
        {/* Decorative Quote */}
        <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-ocean/10 flex items-center justify-center">
          <Quote className="w-8 h-8 text-ocean" />
        </div>
        
        {/* Background Accent */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-ocean/5 blur-[60px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 pt-8">
          {/* Stars */}
          {rating && (
            <div className="flex items-center gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"}`}
                />
              ))}
            </div>
          )}
          
          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-medium text-center leading-relaxed mb-8 text-foreground">
            &ldquo;{quote}&rdquo;
          </blockquote>
          
          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            {/* Avatar Placeholder */}
            <div className="w-12 h-12 rounded-full bg-ocean/20 flex items-center justify-center text-ocean font-bold text-lg">
              {author.charAt(0)}
            </div>
            <div className="text-left">
              <div className="font-bold text-foreground">{author}</div>
              <div className="text-sm text-muted-foreground">
                {role}{company && `, ${company}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

