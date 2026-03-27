"use client";

import { Star, ExternalLink } from "lucide-react";
import { Link } from "next-view-transitions";

interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

// Static reviews for performance (no API call needed)
const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: "Sophie M.",
    rating: 5,
    text: "Équipe ultra réactive et professionnelle. Notre site est magnifique et les résultats SEO sont au rendez-vous !",
    date: "Il y a 2 semaines",
  },
  {
    author: "Thomas A.",
    rating: 5,
    text: "Meilleur investissement pour notre entreprise. Le site génère maintenant 40% de notre CA.",
    date: "Il y a 1 mois",
  },
  {
    author: "Marie L.",
    rating: 5,
    text: "Professionnels, à l'écoute et créatifs. Je recommande à 100% pour tout projet web sur le Pays Basque.",
    date: "Il y a 1 mois",
  },
];

const GOOGLE_BUSINESS_URL = "https://g.page/r/waveia/review";

interface Props {
  variant?: "compact" | "full";
  className?: string;
}

export function GoogleReviewsWidget({ variant = "compact", className = "" }: Props) {
  const totalReviews = 50;
  const averageRating = 5.0;

  if (variant === "compact") {
    return (
      <div
        className={`inline-flex items-center gap-3 px-4 py-2 bg-muted/50 border border-border rounded-full animate-in ${className}`}
      >
        {/* Google Logo */}
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="font-bold text-foreground">{averageRating.toFixed(1)}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        
        <span className="text-sm text-muted-foreground">({totalReviews}+ avis)</span>
      </div>
    );
  }

  // Full variant with reviews
  return (
    <div className={`${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Basé sur {totalReviews}+ avis Google</p>
          </div>
        </div>
        
        <Link
          href={GOOGLE_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-full hover:border-ocean/30 hover:text-ocean transition-colors"
        >
          Laisser un avis
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

      {/* Reviews */}
      <div className="grid gap-4">
        {GOOGLE_REVIEWS.map((review, index) => (
          <div
            key={index}
            className={`p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-ocean/20 transition-colors animate-in ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-ocean/20 flex items-center justify-center text-ocean font-bold">
                {review.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{review.author}</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </p>
          </div>
        ))}
      </div>

      {/* CTA Mobile */}
      <Link
        href={GOOGLE_BUSINESS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden flex items-center justify-center gap-2 mt-4 px-4 py-3 text-sm font-medium bg-muted/50 border border-border rounded-full hover:border-ocean/30 transition-colors"
      >
        Voir tous les avis Google
        <ExternalLink className="w-4 h-4" />
      </Link>
    </div>
  );
}
