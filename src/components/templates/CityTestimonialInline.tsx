"use client";

import { Quote, Star, MapPin } from "lucide-react";

interface CityTestimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
  city: string;
}

// City-specific testimonials database
const CITY_TESTIMONIALS: Record<string, CityTestimonial> = {
  "Bayonne": {
    quote: "Grâce à WaveIA, notre boutique du Grand Bayonne est maintenant visible sur Google. Les réservations ont doublé !",
    author: "Marie Etcheverry",
    role: "Gérante",
    company: "Maison Basque",
    rating: 5,
    city: "Bayonne"
  },
  "Biarritz": {
    quote: "Un site à l'image de Biarritz : élégant et performant. Notre hôtel est passé de la page 3 à la page 1 de Google.",
    author: "Jean-Pierre Lacoste",
    role: "Directeur",
    company: "Hôtel du Phare",
    rating: 5,
    city: "Biarritz"
  },
  "Anglet": {
    quote: "Équipe réactive basée à Anglet, ils comprennent notre marché. Notre e-commerce génère maintenant 40% du CA.",
    author: "Sophie Mendiburu",
    role: "Fondatrice",
    company: "Surf Shop Chiberta",
    rating: 5,
    city: "Anglet"
  },
  "Saint-Jean-de-Luz": {
    quote: "Site trilingue parfait pour notre clientèle internationale. Réservations en ligne +60% depuis le lancement.",
    author: "Thomas Aguirre",
    role: "Chef",
    company: "Restaurant Kaiku",
    rating: 5,
    city: "Saint-Jean-de-Luz"
  },
  "Hossegor": {
    quote: "Ils ont compris l'univers surf. Notre boutique en ligne cartonne, surtout avant les compétitions WSL !",
    author: "Maxime Lartigue",
    role: "Gérant",
    company: "Hossegor Surf Co",
    rating: 5,
    city: "Hossegor"
  },
  "Hendaye": {
    quote: "Site bilingue FR/ES parfait pour notre clientèle transfrontalière. Meilleur investissement digital !",
    author: "Elena Rodriguez",
    role: "Directrice",
    company: "Camping Hendaye",
    rating: 5,
    city: "Hendaye"
  },
  "Dax": {
    quote: "Notre système de réservation cure est enfin moderne. Les curistes réservent en 2 clics maintenant.",
    author: "Dr. Catherine Dupont",
    role: "Directrice",
    company: "Thermes de Dax",
    rating: 5,
    city: "Dax"
  },
  "Capbreton": {
    quote: "Ils ont créé un site qui reflète l'âme de notre port. Les commandes de poisson frais explosent !",
    author: "Pierre Laborde",
    role: "Poissonnier",
    company: "Marée du Port",
    rating: 5,
    city: "Capbreton"
  },
  "Bidart": {
    quote: "Un site authentique comme notre village. Nos chambres d'hôtes affichent complet tout l'été.",
    author: "Anne-Marie Harriet",
    role: "Propriétaire",
    company: "Maison Uhabia",
    rating: 5,
    city: "Bidart"
  },
  "Guéthary": {
    quote: "Design premium pour notre galerie. La clientèle CSP++ apprécie l'expérience en ligne.",
    author: "François Artola",
    role: "Galeriste",
    company: "Galerie Parlementia",
    rating: 5,
    city: "Guéthary"
  },
  "Ciboure": {
    quote: "Notre restaurant de fruits de mer a enfin le site qu'il mérite. Réservations en hausse de 45%.",
    author: "Jean Socoa",
    role: "Chef",
    company: "Chez Mattin",
    rating: 5,
    city: "Ciboure"
  },
  "Ascain": {
    quote: "Parfait pour notre activité tourisme Rhune. Les réservations train + rando ont triplé.",
    author: "Michel Etchegaray",
    role: "Guide",
    company: "Rhune Aventures",
    rating: 5,
    city: "Ascain"
  },
  "Espelette": {
    quote: "Notre e-commerce piment AOP livre maintenant dans toute la France. CA multiplié par 3 !",
    author: "Beñat Bipertegia",
    role: "Producteur",
    company: "Piment d'Espelette AOP",
    rating: 5,
    city: "Espelette"
  },
  "Cambo-les-Bains": {
    quote: "Site de réservation cure moderne et efficace. Nos curistes apprécient la simplicité.",
    author: "Isabelle Rostand",
    role: "Responsable",
    company: "Thermes de Cambo",
    rating: 5,
    city: "Cambo-les-Bains"
  },
  "Tarnos": {
    quote: "Un site B2B professionnel qui nous a ouvert de nouveaux marchés. ROI en 2 mois.",
    author: "Laurent Martinez",
    role: "Directeur",
    company: "Tarnos Industries",
    rating: 5,
    city: "Tarnos"
  }
};

interface Props {
  cityName: string;
}

export function CityTestimonialInline({ cityName }: Props) {
  const testimonial = CITY_TESTIMONIALS[cityName];
  
  if (!testimonial) return null;

  return (
    <section className="relative py-12 max-w-4xl mx-auto px-6 lg:px-8">
      <div
        className="relative bg-card/50 backdrop-blur-sm border border-white/5 hover:border-ocean/20 rounded-2xl p-8 overflow-hidden transition-colors animate-in"
      >
        {/* Background Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-ocean/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Quote Icon */}
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center">
          <Quote className="w-5 h-5 text-ocean" />
        </div>

        {/* City Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-xs font-bold mb-6">
          <MapPin className="w-3 h-3" />
          Témoignage {testimonial.city}
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg md:text-xl leading-relaxed mb-6 text-foreground">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author */}
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
      </div>
    </section>
  );
}
