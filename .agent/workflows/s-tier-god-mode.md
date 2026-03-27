---
description: Standards, Architecture, and Governance for S-Tier projects (V2.0 Canonique)
---

# 📘 S-TIER GOD MODE BIBLE — V2.0 CANONIQUE

**Architecture · Standards · Gouvernance · Performance**

> **Statut** : Source de vérité unique
> **Objectif** : Zéro dérive · Zéro dette · Zéro régression

---

## 🧭 PARTIE 0 — GOUVERNANCE & NON-RÉGRESSION

### 0.1 Principe Fondamental

Ce standard est contractuel, pas indicatif.

- **Toute règle est obligatoire.**
- **Toute exception doit être documentée.**
- **Toute évolution doit renforcer le système.**

### 0.2 Process de Modification du Standard

Toute modification suit ce cycle rigoureux :

1.  **Problème réel identifié.**
2.  **Justification écrite** (Performance, DX, UX, Sécurité).
3.  **Validation.**
4.  **Mise à jour du manifeste.**
5.  **Ajout d’un test de non-régression.**

❌ **Interdit** : Modifier une règle "par confort".

### 0.3 Changelog Obligatoire

Chaque version du standard doit inclure :

- Date
- Règles ajoutées / modifiées
- Motivation technique

---

## 🧠 PARTIE 1 — MANIFESTE S-TIER (RÈGLES IMMUABLES)

### 1.1 Core Engine (Bleeding Edge)

- **React Compiler** : `reactCompiler = true` (root). Plus de `useMemo` manuel. stable en v16.
- **Edge Proxy (God Mode+)** : Toute logique globale (Sécu, GeoIP) dans `proxy.ts`. (Remplace `middleware.ts` en v16+).
- **Navigation** : `<Link>` de `next-view-transitions` **UNIQUEMENT**. Garantit le "Zero Flickering" (pas de flash blanc).
- **Images** : Format `AVIF/WebP` forcé. `placeholder="blur"` pour toutes les images distantes sans exception.
  - ⚠️ **Règle Unsplash** : Nettoyer les URLs brutes. Ne jamais inclure de query params (`?auto=format...`) dans le `src` car `next/image` ajoute les siens -> **404**.
- **LazyMotion (God Mode+)** : Obligatoire. Wrapper global via `MotionProvider.tsx`.

### 1.2 TypeScript God Mode

- **Zero "Any" Policy** : `any` strictement interdit.
- **Validation** : Zod pour tout input externe.
- **Safety First** : `noUncheckedIndexedAccess: true`.
- **Clean Code** : 0 warning ESLint (`max-warnings 0`).

### 1.3 Design System "Ghost-Glass"

- **Philosophie** : Interfaces fluides, transparentes et vivantes.
- **Typographie** : `SectionHeader` obligatoire pour H1/H2/H3. Interdiction des balises brutes.
- **Surfaces** : `bg-card/60 backdrop-blur-md`.
- **CSS Strict** : Pas de `flex-*` shorthand ambigu, utiliser `shrink-0`, `grow`.

### 1.5 Accessibilité (WCAG AA+)

- Skip link, `aria-label`, feedback haptique mobile.

### 1.6 UI & Shadcn (Règles d'Or)

- **Philosophie** : Shadcn fournit la mécanique (Accessibilité, Clavier, Focus), le Design System fournit le visuel.
- **Installation** : Style "New York", Base "Zinc".
- **Mutation Immédiate** : Dès l'ajout (`npx shadcn@latest add`), modifier les classes Tailwind pour coller au Ghost-Glass.
  - _Exemple_ : Remplacer `bg-primary` par `bg-card/60 backdrop-blur-md border-white/10`.
- **Interdictions** :
  - ❌ Ne jamais utiliser les composants Shadcn "bruts" sans vérifier qu'ils respectent les tokens (espacement, arrondi).
  - ❌ Pas de Toast par défaut. Utiliser **Sonner** (plus performant/beau).

---

## ⚙️ PARTIE 2 — STACK & CONFIGURATION

### 2.1 Stack Technique

- **Core**: Next.js 16 (Canary), React 19, TypeScript 5.
- **Essentials**: `next-view-transitions`, `framer-motion` (m), `lucide-react`, `zod`.
- **UI Primitives** : `shadcn/ui` (Radix) **OBLIGATOIRE** pour l'accessibilité (Modales, Select, Accordions).
- **PWA (God Mode+)** : `@serwist/next` **UNIQUEMENT**. `next-pwa` est interdit.
- **Tools**: Playwright, Tailwind v4.

### 2.2 Config TS Strict

```json
{
  "strict": true,
  "noImplicitAny": true,
  "noUncheckedIndexedAccess": true
}
```

### 2.3 Config Next.js

- **Core Settings**: `reactCompiler: true`. Plus de bloc `eslint` (CLI-only).
- **Headers**: CSP strict, HSTS.
- **Experimental**: `scrollRestoration`, `optimizePackageImports`.
- **PPR (Partial Prerendering)** : ✅ **Intégré par défaut** (Cache model v16). Plus de flag expérimental requis.

---

## 🧩 PARTIE 3 — ARCHITECTURE RSC & FRONTIÈRES

### 3.1 Règle Absolue

**Tout est Server Component par défaut.**

### 3.2 Client Component

Autorisé **UNIQUEMENT** si :

- Interaction utilisateur (onClick, onChange)
- Animation JS complexe (Framer Motion)
- Accès API navigateur (localStorage, window, geolocation)

```ts
"use client"; // Doit être justifié par un des cas ci-dessus
```

### 3.3 Interdictions Formelles

- ❌ `useEffect` dans `app/page.tsx`
- ❌ `"use client"` "par confort" pour éviter de passer des props
- ❌ Logique métier sensible côté client

---

## 🗂️ PARTIE 4 — ARCHITECTURE DATA (SSOT)

### 3.1 Structure de Dossiers

```
src/
├── app/                      # Routes (RSC)
│   ├── [route]/
│       ├── page.tsx          # Server Component
│       └── PageClient.tsx    # Client Component (si nécessaire)
├── components/               # UI & Features
├── lib/
│   ├── data/                 # SSOT (Single Source of Truth)
│   │   ├── index.ts          # Barrel export unique
│   │   └── [domain].ts       # Max 250 lignes/fichier
│   ├── design-tokens.ts      # Styles constants
│   └── utils.ts
```

### 3.2 Règles Data

1.  **Centralisation** : Tout texte ou donnée statique vit dans `src/lib/data`.
2.  **Atomicité** : Fichiers splittés par domaine.
3.  **Typage** : Interfaces TS explicites exportées.
4.  **SSOT Contact (CRITIQUE)** : Toute information de contact (Téléphone, Adresse, Email) **DOIT** provenir exclusivement de `COMPANY_CONFIG` (`src/lib/seo/company.ts`).
    - ❌ Interdiction de hardcoder `+33652547864`, `6 Rue de l'Étang` ou `contact@ikerketa.fr` dans les composants ou métadonnées.
    - ✅ **Validation SSOT** : `src/lib/utils.ts` et `JsonLd.tsx` doivent consommer `COMPANY_CONFIG` directement. Aucune redondance tolérée.

---

## 🎨 PARTIE 5 — DESIGN SYSTEM & ANTI-DÉRIVE

### 5.1 Principe Anti-One-Off

- **Toute section doit réutiliser un pattern existant.**
- ❌ **Interdit** : Layout unique non réutilable "juste pour une page".

### 5.2 Validation Visuelle

Toute nouvelle page doit :

- Être comparée à une page existante pour cohérence.
- Respecter strictement les tokens (`design-tokens.ts`).

### 5.3 Guidelines Techniques Animation (Legacy God Mode+)

- **Scroll (Entrance)** : CSS Exclusif (`.animate-view`). Pas de JS.
- **Interaction** : Framer Motion (`m.div`) avec Spring physics.
- **Haptique** : `useHaptics` sur tous les boutons interactifs majeurs.
- **Hero** : Morphing (`view-transition-name`) pour les titres, fade-in CSS pour le reste.

### 5.4 Standardization UI & Micro-Interactions (NOUVEAU)

#### Headings Managés

- **Interdiction** : Balises `<h1>` à `<h3>` brutes avec classes Tailwind manuelles.
- **Impératif** : Utiliser `<SectionHeader>` partout pour les titres de section.
- **Sémantique (SEO-Safe)** : Toujours spécifier le niveau hiérarchique correct via la prop `as="h2"`, `as="h3"`, etc.
  - ⚠️ Un titre dans une petite card **ne doit pas être un H2** si la page a déjà un H2 principal.
  - Le composant `SectionHeader` est **polymorphe** : même style visuel, mais tag HTML adapté à la hiérarchie SEO.

#### Hiérarchie des Headings (CRITIQUE)

La hiérarchie des headings doit être **strictement séquentielle** : H1 → H2 → H3 → H4. Jamais de saut (ex: H1 → H3 directement).

| Niveau       | Usage                                | Composant                           |
| :----------- | :----------------------------------- | :---------------------------------- |
| **H1**       | Titre principal (1 seul par page)    | `PageHero` (automatique)            |
| **H2**       | Sections principales                 | `<SectionHeader as='h2'>`           |
| **H3**       | Sous-sections, cards importantes     | `<SectionHeader as='h3'>`           |
| **Pas de H** | Titres visuels dans les cards/listes | `<p className='text-xl font-bold'>` |

```tsx
// ✅ CORRECT - Hiérarchie respectée
<PageHero title="Tarifs" />                           {/* H1 automatique */}
<SectionHeader as='h2'>Nos Offres</SectionHeader>     {/* H2 - Section principale */}
<div className='card'>
  <p className='text-2xl font-bold'>{offer.title}</p> {/* Pas de heading = OK */}
</div>
<SectionHeader as='h2'>FAQ</SectionHeader>            {/* H2 suivant */}

// ❌ INTERDIT - Hiérarchie cassée (H1 → H3, sans H2)
<PageHero title="Tarifs" />
<h3>Nos Offres</h3>   {/* Saute H2 = Erreur SEO */}
```

⚠️ **Règle d'Or** : Dans les cards répétées (pricing, ROI, testimonials), utiliser `<p>` avec des classes visuelles, **jamais** de `<h2>` ou `<h3>`.

#### Tactile (App-Like Feel)

- **Cards Navigables** : Toute card cliquable menant vers une autre page **DOIT** déclencher `useHaptics('light')` au `onClick` ou `onPointerDown`.
- **Exclusions** : Liens textuels simples, boutons secondaires, éléments non-navigables (évite la surcharge sensorielle).

---

## ⚡ PARTIE 6 — PERFORMANCE CONTRACTUELLE

### 6.1 Budgets Non-Négociables

| Metric         | Seuil        |
| :------------- | :----------- |
| **LCP**        | ≤ 2.5s       |
| **CLS**        | 0 (Strict)   |
| **TBT**        | ≤ 200ms      |
| **JS initial** | ≤ 128kB      |
| **Fonts**      | ≤ 2 familles |

⚠️ **Tout dépassement = Régression bloquante.**

### 6.2 Hygiène DOM (Ratio Texte/Code)

- **Principe** : "Flatten First".
- **Règle** : Chaque `div` doit avoir une utilité structurelle ou sémantique.
  - ❌ **Interdit** : `div` wrapper unique juste pour une classe de marge (fusionner avec l'enfant).
  - ❌ **Interdit** : Wrappers `Fragment` (`<>`) inutiles.
  - ✅ **Action** : Auditer et nettoyer les templates (Footer, Navbar, Layouts) pour maximiser le ratio Text/HTML.

---

## 🧪 PARTIE 7 — TESTS & CONFORMITÉ

### 7.1 Types de Tests

1.  **E2E UX (Playwright)** : Parcours critiques.
2.  **Tests Contractuels (NOUVEAU)** : Structure du code.
3.  **Tests de Régression Visuelle** : (Optionnel).

### 7.2 Tests Contractuels (OBLIGATOIRES)

Nous testons le code lui-même. Exemples :

- Aucune page sans `PageHero`.
- Aucun `<h1>` brut dans `/components`.
- `next-view-transitions` utilisé partout.

```ts
// Exemple Playwright
expect(await page.locator("h1").count()).toBe(0); // Si on interdit h1 brut
```

Le standard devient auto-exécutable.

---

## 🧬 PARTIE 8 — NAMING & SÉMANTIQUE

### 8.1 Conventions

| Type             | Convention                                      |
| :--------------- | :---------------------------------------------- |
| **Component**    | PascalCase (`ServiceCard`)                      |
| **Hook**         | useCamelCase (`useHaptics`)                     |
| **UI générique** | Prefix UI (`UIH1`, `UIButton`) ou dossier `ui/` |
| **Feature**      | FeatureName\*                                   |
| **Data**         | domainData (`servicesData`)                     |

---

## 🛠️ PARTIE 9 — DX & TOOLING (BLEEDING EDGE)

### 9.1 Linting & Qualité

- **Commande Contractuelle** : `npx eslint "src/**/*.{ts,tsx}"`.
- **Zéro Warning** : Le build échoue au premier warning (`--max-warnings 0`).

---

## 🧯 PARTIE 10 — ERROR & RÉSILIENCE

### 10.1 Obligations

- **`error.tsx`** : Obligatoire sur les routes critiques.
- **`not-found.tsx`** : Stylé via Design System (pas de 404 par défaut Next.js).
- **Logs** : Jamais de stack trace visible en prod.

---

## 🔐 PARTIE 11 — SECURITY & HARDENING

- **CSP** : Strict (`default-src 'self'`).
- **Headers** : HSTS Preload, `nosniff`, `DENY` frames.
- **Zod** : Validation de tous les SearchParams et Server Actions.

---

## 🧼 PARTIE 12 — HYGIÈNE & ANTI-DOUBLONS

- **Check avant création** : `grep` pour voir si ça existe.
- **Patterns** : Privilégier Wrapper ou Variant props.
- **Interdit** : Duplication de code > 3 lignes.

### 12.1 Dynamic Linking Hygiene (Anti-404)

- **Principe** : Ne jamais générer de liens dynamiquement (via `map` sur villes/services) sans validation stricte.
- **Validation Allowlist** : Tout lien généré doit être vérifié contre une whitelist explicite (`POWER_5_CITIES`, `COMBO_WHITELIST`).
- **Interdit** : Logique "floue" (ex: `nearbyCities`) qui génère des URLs sans vérifier si la page de destination existe réellement (Ghost Links).
- **Conséquence** : Une 404 sur un maillage interne est une erreur P1 (Pénalité SEO immédiate).

### 12.2 Defensive Routing (Anti-Duplicate)

- **Problème** : Les routes dynamiques (`[silo]/[slug]`) peuvent accidentellement matcher des Hubs existants, créant des doublons (ex: `/creation-site-internet/creation-site-internet`).
- **Mandat** : Utiliser un **Modèle de Données Typé** (`type: "hub"`).
  - ❌ **Interdit** : Listes d'exclusion hardcodées (`const EXCLUDED = ['hub1', 'hub2']`). Trop fragile.
  - ✅ **Standard** : La data source doit expliciter le type (`type: 'hub' | 'service'`). La `Factory` filtre algorithmiquement (`if (service.type === 'hub') return notFound()`).
- **Test** : Vérifier que `/slug/slug` renvoie bien 404 et pas 200.

---

## 🤖 PARTIE 13 — AUTOMATION & FEATURES (BONUS)

- **SEO (God Mode+)** :

  - **Metadata Singularity (CRITIQUE)** :
    - Toute page (même statique comme `/a-propos`) **DOIT** exporter son propre objet `metadata`.
    - ❌ **Interdit** : Hériter du titre par défaut du `layout.tsx` sur les pages de premier niveau. Cela crée des "Duplicate Title Tags" massifs.
  - **Graph JSON-LD** : @id linking obligatoire entre `Organization`, `ProfessionalService` et `BreadcrumbList`.
    - **Linking Strictly** : L'`Organization` doit définir un `@id` (ex: `/#organization`) et toutes les autres entités (`Service`, `Article`, `Product`) doivent l'utiliser via la propriété `provider` ou `publisher`. Interdiction de redéfinir l'objet `Organization` en inline.
    - **AggregateRating Obligatoire** : Tout schema contenant des `review` **DOIT** inclure un objet `aggregateRating`. Google Search Console rejette les avis multiples sans notation agrégée. Utiliser `COMPANY_CONFIG.aggregateRating` systématiquement.
  - **IndexNow** : Notification instantanée via `/api/indexnow` pour Bing/Yandex.
  - **Absolute URLs** : Interdiction totale des URLs relatives dans les métadonnées (OG:image, Canonicals, Micro-data). Utilisation exclusive de `${COMPANY_CONFIG.url}`.
  - **Title vs H1 (CRITIQUE)** : Le `<title>` meta et le `<h1>` visible **DOIVENT** être différents.
    - **Les 3 Règles d'Or** :
      1. **Mot-clé Principal** : Doit être présent dans **les deux** (ex: "Détective" ou synonyme fort).
      2. **Ordre des Mots** :
         - `<title>` : Mot-clé important **au début** (Optimisation SEO).
         - `<h1>` : Tournure **fluide et naturelle** (Expérience Utilisateur).
      3. **Unicité** : **Un seul H1** par page (Règle technique absolue).
    - **Pattern Technique** : Champ `headingTitle` (H1) vs `title` (Meta).
    - **Implémentation** : `<PageHero title={data.headingTitle || data.title} />`.
    - ❌ **Interdit** : Duplication exacte Title/H1 (Pénalité SEO).
  - **Densité & Ratio Texte/HTML (S-Tier+)** :

    - **Standard** : Aucune page "pauvre" (< 300 mots).
    - **Optimization** : Viser un ratio > 10% via l'injection systémique de contenu riche (Juridique, FAQ, Glossaire).
    - **Architecture** : Utiliser des composants partagés (`CityGuarantees`) pour densifier les templates sans duplication manuelle.
    - **Objectif** : Prouver l'expertise (E-E-A-T) et satisfaire l'intention de recherche.

  - **AI Readiness (S-Tier God Mode)** :
    - **Fichier** : `/public/llms.txt` obligatoire.
    - **Format** : Markdown optimisé pour les crawlers LLM contextuels (Perplexity, OpenAI).
    - **Contenu** : Identité, Offres structurées, Liens profonds (Direct Links), Specs techniques.
    - **Standard** : Permet aux IA de mieux "comprendre" et référencer le site, au-delà du simple scraping HTML.

### 13.1 Schema.org Property Rules (CRITIQUE)

Chaque type Schema.org a des propriétés spécifiques. Utiliser une propriété non reconnue par un type = **erreur de validation**.

#### Hiérarchie Schema.org

```
Organization (base - NO business-specific properties)
  └── LocalBusiness (adds: geo, priceRange, openingHours, etc.)
        └── ProfessionalService (inherits from LocalBusiness)

Service (separate type - uses: provider, serviceType)
  └── provider: doit être une référence @id, pas un objet inline
```

#### Propriétés par Type

| Type                    | ✅ Propriétés Valides                                                                       | ❌ Propriétés INTERDITES                                    |
| :---------------------- | :------------------------------------------------------------------------------------------ | :---------------------------------------------------------- |
| **Organization**        | `name`, `url`, `logo`, `address`, `telephone`, `sameAs`, `review`                           | `geo`, `priceRange`, `paymentAccepted`, `openingHours`      |
| **LocalBusiness**       | Tout Organization + `geo`, `priceRange`, `openingHours`, `areaServed`, `address` (via SSOT) | `provider`, `serviceType`                                   |
| **ProfessionalService** | Tout LocalBusiness (hérite)                                                                 | `provider`, `serviceType` (valides pour Service uniquement) |
| **Service**             | `name`, `description`, `serviceType`, `provider`, `areaServed`                              | Définition inline de `provider` (utiliser `@id`)            |
| **SoftwareApplication** | `name`, `offers`, `provider`, `featureList`, `aggregateRating`                              | `address` dans `provider` inline                            |

#### Règle d'Or : @id Linking

```typescript
// ✅ CORRECT - Référence par @id
provider: {
  '@id': `${COMPANY_CONFIG.url}/#organization`,
}

// ❌ INTERDIT - Redéfinition inline
provider: {
  '@type': 'ProfessionalService',
  name: COMPANY_CONFIG.name,
  address: COMPANY_CONFIG.address, // ERROR: address dans un provider inline
}
```

#### Fichiers Centraux

| Fichier                | Rôle                                            |
| :--------------------- | :---------------------------------------------- |
| `JsonLd.tsx`           | Composant central pour tous les schemas         |
| `PageSchema.tsx`       | Schemas par type de page (services, zone, etc.) |
| `ServiceHubSchema.tsx` | Schema ItemList pour les catalogues de services |

⚠️ **Validation Obligatoire** : Avant tout push, vérifier sur [Schema.org Validator](https://validator.schema.org/) que les propriétés utilisées sont reconnues pour chaque `@type`.

- **Bundle** : Analyzer activé en CI.
  - ⚠️ **Impératif** : Envelopper `nextConfig` avec `withBundleAnalyzer` dans `next.config.ts` pour gérer `process.env.ANALYZE`.

---

## 🧪 PARTIE 14 — RITUEL DE VÉRIFICATION FINAL

Avant tout push sur `main`, exécuter la séquence :

```bash
npm run quality        # Lint + Type-check + Prettier
npm run build          # Vérif build prod + CSP
npx playwright test    # E2E + Tests Contractuels
npm run build:analyze  # Audit Bundle size
```

**Objectif** : Branche main toujours verte.

---

## 🚀 PARTIE 15 — MIGRATION NEXT.JS 16 (NOUVEAU)

### 15.1 Dépendances Obligatoires

```bash
npm install babel-plugin-react-compiler --save-dev
```

⚠️ **CRITIQUE** : Sans cette dépendance, `reactCompiler: true` fait échouer le build.

### 15.2 Configuration Minimale

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};
```

### 15.3 Fichiers à Vérifier

| Fichier              | Emplacement                    | Action                                  |
| -------------------- | ------------------------------ | --------------------------------------- |
| `next-env.d.ts`      | **Racine projet** (pas `/src`) | Déplacer si mal placé                   |
| `MotionProvider.tsx` | `/components/providers/`       | Doit envelopper l'app dans `layout.tsx` |
| `proxy.ts`           | `/src/`                        | Obligatoire pour Edge runtime (v16+)    |

### 15.4 React 19 Patterns

```typescript
// ✅ CORRECT - React 19
const [state, action, isPending] = useActionState(serverAction, initialState);

// ❌ INTERDIT - Deprecated
const [state, formAction] = useFormState(serverAction, initialState);
```

### 15.5 Versions Minimales Compatibles

| Bibliothèque            | Version Min | React 19 |
| ----------------------- | ----------- | -------- |
| `framer-motion`         | 12.x        | ✅       |
| `next-view-transitions` | 0.3.x       | ✅       |
| `lucide-react`          | 0.500+      | ✅       |
| `next-themes`           | 0.4.x       | ✅       |

### 15.6 ESLint Configuration

```javascript
// eslint.config.mjs - Flat Config obligatoire
const eslintConfig = [
  {
    ignores: ["**/next-env.d.ts", "**/*.d.ts"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];
```

### 15.7 Audit Checklist Migration

- [x] `babel-plugin-react-compiler` installé
- [x] `next-env.d.ts` à la racine (pas dans `/src`)
- [x] `MotionProvider` actif (pas commenté)
- [x] `useActionState` utilisé (pas `useFormState`)
- [x] Build 100% statique vérifié
- [x] Turbopack dev fonctionnel

### 15.8 Cache Components (V16.1+)

Le modèle `cacheComponents: true` est actif par défaut en V16.1. Il est **incompatible** avec les anciens Route Segment Configs.

#### ❌ INTERDIT (Provoque un build failure)

```typescript
// Ces exports sont désormais gérés automatiquement par Next.js
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = true;
export const runtime = "edge"; // Pour les API routes
```

#### ✅ SOLUTION

Supprimer ces exports. Le comportement est désormais inféré par Next.js en fonction du contenu du composant (présence de `generateStaticParams`, etc.).

### 15.9 Changelog

| Date       | Modification                                      | Motivation                                          |
| :--------- | :------------------------------------------------ | :-------------------------------------------------- |
| 2026-01-04 | Règle 13 SEO (Metadata Singularity)               | Stop Duplicate Titles sur pages statiques           |
| 2026-01-04 | Règle 12.2 Defensive Routing (Anti-Repeat)        | Prevention URLs récursives (`/slug/slug`)           |
| 2026-01-04 | Règle 1.1 Image Hygiene (Unsplash 404 Prevention) | Interdiction query params dans next/image           |
| 2026-01-04 | Règle 12.1 Dynamic Linking (Anti-Ghost Links)     | Prévention des 404 sur maillage interne dynamique   |
| 2026-01-04 | Règle 13 AI Readiness (`llms.txt`)                | Standardisation visibilité Agents IA                |
| 2026-01-04 | Règle 13.1 Schema.org (SoftwareApplication)       | Ajout `aggregateRating` (Fix Google Search Console) |
| 2026-01-04 | Règle 13 SEO (Title vs H1 : 3 Golden Rules)       | Standardisation : Mot-clé, Ordre, Unicité           |
| 2026-01-04 | Règle 5.4 Hiérarchie des Headings                 | Fix erreur SEO "Poor heading hierarchy" tarifs      |
| 2026-01-04 | Règle 12.2 Data Model (Type-Based Filtering)      | Remplacement listes hardcodées par `type: "hub"`    |
| 2026-01-04 | Règle 13.1 Schema.org Property Rules              | Fix 167 erreurs validation SEMrush (propriétés)     |
| 2026-01-03 | Règle 13 SEO (AggregateRating Obligatoire)        | Fix Google Search Console erreur avis multiples     |
| 2026-01-02 | Mise à jour Règle 3.2 Data (Validation SSOT)      | Strictness sur l'utilisation de COMPANY_CONFIG      |
| 2026-01-02 | Mise à jour Règle 13 SEO (Graph JSON-LD Linking)  | Standardisation des @id et interdiction inline      |
| 2026-01-01 | Activation Bundle Analyzer (`withBundleAnalyzer`) | Correction écart technique audit                    |
| 2026-01-01 | Ajout Règle 1.6 UI Governance (Shadcn Strict)     | Uniformisation Design System "Ghost-Glass"          |
| 2026-01-01 | Précision Règle 1.6 (Philosophie + Sonner)        | Interdictions formelles et exemples                 |
| 2026-01-01 | Règle 5.4 affinée (SEO + Haptics scoped)          | Sémantique préservée + UX App-Like                  |
| 2026-01-01 | Suppression Route Segment Configs (V16.1)         | Incompatibilité `cacheComponents`                   |
| 2026-01-01 | Migration `middleware.ts` -> `proxy.ts`           | Nouveau standard Next.js 16 (Canary)                |
| 2026-01-01 | Migration `motion` -> `m` (16 composants)         | Réduction bundle size via `LazyMotion`              |
| 2026-01-01 | Migration `next/link` -> `next-view-transitions`  | Zero Flickering Navigation                          |
| 2026-01-01 | PWA God Mode (`@serwist/next`)                    | Remplacement `next-pwa` (incompatible)              |
| 2026-01-01 | Certification Compliance Totale                   | Audit Final 100% S-Tier Reached                     |
| 2026-01-01 | Mise à jour Canonique 2026                        | Harmonisation Tarifs et Année de Référence          |
| 2026-01-01 | Standardisation IndexNow & Absolute URLs          | Durcissement SEO S-Tier God Mode+                   |

---

## 📱 PARTIE 16 — PWA GOD MODE

### 16.1 Obligation

La PWA est **OBLIGATOIRE** pour tout projet S-Tier :

- Installable (manifest + icons)
- Offline-capable (Service Worker)
- Cache intelligent (Workbox strategies)

### 16.2 Stack

| Outil           | Version Min | Rôle                    |
| :-------------- | :---------- | :---------------------- |
| `@serwist/next` | 10.x        | Intégration Next.js ESM |
| `serwist`       | 10.x        | Core Workbox moderne    |

❌ **Interdit** : `next-pwa` (incompatible Next.js 16+)

> [!CAUTION] > **Next.js 16 Canary** : `@serwist/next` génère un `WorkerError` avec Turbopack (Jan 2026). En attendant une correction, la PWA reste en mode "passif" (manifest + installable, sans caching offline). Ce sera corrigé dans une future release stable.

### 16.3 Configuration Minimale

```typescript
// next.config.ts
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts", // Localisation standard App Router
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

export default withSerwist(nextConfig);
```

### 16.4 Fichiers Requis

| Fichier            | Emplacement | Description                     |
| :----------------- | :---------- | :------------------------------ |
| `sw.ts`            | `/src/app/` | Service Worker source (Serwist) |
| `site.webmanifest` | `/public/`  | Manifest PWA                    |
| `android-chrome-*` | `/public/`  | Icons 192x192, 512x512          |

### 16.5 Service Worker Template

```typescript
// src/app/sw.ts
import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST ?? [],
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

serwist.addEventListeners();
```
