"use client";

import { Lock } from "lucide-react";

interface Badge {
  icon: React.ReactNode;
  label: string;
  description?: string;
}

// Only list badges that are actually true and verifiable. Previously included
// "Next.js Partner", "Vercel Certified", "Google Partner", "Stripe Partner" and
// a "5.0/5 Google" rating: none of these correspond to a real, checkable
// certification program or a live review source, so they were removed rather
// than left as unverifiable claims. Add real ones back (with a link to the
// proof) as they're obtained.
const CERTIFICATIONS: Badge[] = [
  {
    icon: <Lock className="w-5 h-5" />,
    label: "RGPD Compliant",
    description: "Protection des données",
  },
];

interface Props {
  variant?: "compact" | "detailed";
  className?: string;
}

export function CertificationsBadges({ variant = "compact", className = "" }: Props) {
  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
        {CERTIFICATIONS.map((cert, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-3 py-1.5 bg-muted/50 border border-border rounded-full text-xs text-muted-foreground hover:border-ocean/30 hover:text-ocean transition-colors animate-scale-in ${index === 1 ? "delay-50" : index === 2 ? "delay-100" : index === 3 ? "delay-150" : index === 4 ? "delay-200" : index === 5 ? "delay-250" : ""}`}
          >
            {cert.icon}
            <span>{cert.label}</span>
          </div>
        ))}
      </div>
    );
  }

  // Detailed variant
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
      {CERTIFICATIONS.map((cert, index) => (
        <div
          key={index}
          className={`group relative p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-ocean/30 transition-all duration-300 animate-in ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : index === 4 ? "delay-400" : index === 5 ? "delay-500" : ""}`}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-ocean/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative">
            <div className="w-12 h-12 flex items-center justify-center bg-ocean/10 rounded-xl text-ocean mb-4 group-hover:scale-110 transition-transform">
              {cert.icon}
            </div>
            <h4 className="font-semibold mb-1 group-hover:text-ocean transition-colors">
              {cert.label}
            </h4>
            {cert.description && (
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
