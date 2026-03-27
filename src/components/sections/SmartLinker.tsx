import { Link } from "next-view-transitions";
import { ArrowRight, Sparkles } from "lucide-react";
import { ServiceSilo } from "@/lib/data/types";

interface Props {
  silo: ServiceSilo | "combo";
  slug: string;
  city?: string; // Name, e.g. "Bayonne"
  citySlug?: string; // e.g. "bayonne"
}

export function SmartLinker({ city }: Props) {
  // LOGIC: "The Local Connector"
  // Systematic push to physical meeting (Coffee Strategy) to build trust
  

  
  const suggestion = {
    text: `Rencontrons-nous ${city ? `à ${city}` : "au Pays Basque"}`,
    href: "/contact",
    label: "Prendre un café",
  };

  // Subtitle logic (can be hardcoded in the JSX if simpler, but keeping it flexible here if needed)
  // modifying the component below to accept a description or hardcoding "Café offert bien sûr"

  return (
    <div className="my-16 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-ocean/20 transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.05)] flex flex-col sm:flex-row items-center justify-between gap-8 group">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Sparkles className="w-7 h-7 text-ocean" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2">
            {suggestion.text}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Café offert bien sûr.
          </p>
        </div>
      </div>
      <Link
        href={suggestion.href}
        className="group/btn flex items-center gap-2 px-6 py-3 bg-linear-to-r from-ocean to-ocean-light text-white rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105"
      >
        {suggestion.label}
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
