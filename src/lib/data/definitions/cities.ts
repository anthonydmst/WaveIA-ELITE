import { City } from "../types";
import { CITIES_KEYS } from "./cities-keys";
import { CITIES_CONTENT } from "./cities-content";

/**
 * ⚡ CITIES ASSEMBLER (S-Tier+ Zero-Loss Engine)
 * Merges logical keys with SEO content for a high-performance developer experience.
 * Grade A++ Compliance: Zero loss of SEMANTICS or SEO data.
 */
export const CITIES_ENRICHED: City[] = CITIES_KEYS.map((base) => ({
  ...base,
  ...(CITIES_CONTENT[base.slug] || {}),
})) as City[];

// Re-export enriched cities as main CITIES for backwards compatibility
export { CITIES_ENRICHED as CITIES };
