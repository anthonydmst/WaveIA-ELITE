import { Link } from "next-view-transitions";
import { ArrowRight, Sparkles } from "lucide-react";
import { ServiceSilo } from "@/lib/data/types";
import { SERVICES } from "@/lib/data/services";
import { COMBO_WHITELIST } from "@/lib/data/whitelist";

interface Props {
  silo: ServiceSilo | "combo";
  slug: string;
  city?: string; // Name, e.g. "Bayonne"
  citySlug?: string; // e.g. "bayonne"
}

const SILO_ROOT_PATH: Record<string, string> = {
  web: "/creation-site-internet",
  local: "/creation-site-internet",
  service: "/creation-site-internet",
  seo: "/referencement-seo",
  agence: "/agence-communication",
  metier: "/solutions",
};

// Real contextual link instead of an always-"/contact" placeholder: picks a
// sibling service (same silo when known) and, if a combo page exists for the
// current city, links straight to it.
export function SmartLinker({ silo, slug, city, citySlug }: Props) {
  const effectiveSilo = silo === "combo" ? undefined : silo;

  const candidate = SERVICES.find(
    (s) =>
      (effectiveSilo ? s.silo === effectiveSilo : true) &&
      s.slug !== slug &&
      s.type !== "hub" &&
      !s.localContext
  );

  if (!candidate) return null;

  const rootPath = SILO_ROOT_PATH[candidate.silo];
  const allowedCities = COMBO_WHITELIST[candidate.slug];
  const href =
    citySlug && allowedCities?.includes(citySlug)
      ? `${rootPath}/${candidate.slug}/${citySlug}`
      : `${rootPath}/${candidate.slug}`;

  return (
    <div className="my-16 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-ocean/20 transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.05)] flex flex-col sm:flex-row items-center justify-between gap-8 group">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Sparkles className="w-7 h-7 text-ocean" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2">
            {city ? `Un projet à ${city} ?` : "Une autre expertise peut vous intéresser"}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Découvrez aussi : {candidate.title}
          </p>
        </div>
      </div>
      <Link
        href={href}
        className="group/btn flex items-center gap-2 px-6 py-3 bg-linear-to-r from-ocean to-ocean-light text-white rounded-full font-medium transition-all hover:shadow-glow hover:scale-105"
      >
        {candidate.title}
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
