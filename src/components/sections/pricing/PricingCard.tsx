"use client";

import { Link } from "next-view-transitions";
import { Check, X, ArrowRight, Star } from "lucide-react";
import { PricingPlan } from "@/lib/data";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const delayClasses = ["", "delay-100", "delay-200", "delay-300"];

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <div
      className={`group relative p-8 bg-card/80 backdrop-blur-sm rounded-2xl border-2 ${plan.color} transition-all duration-500 hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] hover:translate-y-[-8px] flex flex-col animate-in ${delayClasses[index] ?? ""}`}
      style={{ willChange: "transform", backfaceVisibility: "hidden" }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-linear-to-r from-ocean to-accent rounded-full shadow-lg shadow-ocean/30">
          <span className="text-xs font-bold text-background flex items-center gap-1">
            <Star className="w-3 h-3 fill-background" />
            Recommandé
          </span>
        </div>
      )}

      {/* Glow Effect */}
      {plan.popular && (
        <div className="absolute -inset-1 bg-linear-to-r from-ocean to-accent rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
      )}

      <div className="relative flex-1 flex flex-col">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
            {plan.description}
          </p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl sm:text-5xl font-bold tracking-tight">
              {plan.price}
            </span>
            <span className="text-muted-foreground text-lg">€</span>
            {plan.period && (
              <span className="text-muted-foreground text-sm ml-1">
                {plan.period}
              </span>
            )}
          </div>
          {!plan.period && (
            <p className="text-xs text-muted-foreground mt-2">Paiement unique</p>
          )}
        </div>
        <ul className="space-y-4 mb-8 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              {feature.included ? (
                <span className="flex items-center justify-center w-5 h-5 bg-ocean/20 rounded-full mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-ocean" />
                </span>
              ) : (
                <span className="flex items-center justify-center w-5 h-5 bg-muted/50 rounded-full mt-0.5 shrink-0">
                  <X className="w-3 h-3 text-muted-foreground" />
                </span>
              )}
              <span
                className={`text-sm leading-tight ${
                  feature.included ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
            plan.popular
              ? "bg-linear-to-r from-ocean to-accent text-background hover:opacity-90 shadow-lg shadow-ocean/30 hover:scale-[1.02]"
              : "bg-muted/50 hover:bg-muted border border-border hover:border-ocean/30"
          } text-foreground`}
        >
          {plan.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
