# 🏆 Standards Grade A+ - WaveIA

Ce workflow définit les règles **immuables** à respecter pour tout développement sur ce projet.

> 📘 **Voir aussi** : `/architecture-replication-guide` pour démarrer un nouveau projet S-Tier from scratch.

---

## Configuration Next.js S-Tier (Obligatoire)

### React Compiler & Optimizations

```typescript
// next.config.ts
experimental: {
  reactCompiler: true,              // Plus besoin de useMemo manuel
  optimizePackageImports: [         // Tree shaking automatique
    'lucide-react',
    'framer-motion',
    '@radix-ui/react-icons'
  ],
}
```

### Security Headers (Production)

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`

### PWA Configuration

- Manifest JSON avec `name`, `icons`, `theme_color`
- Icons: `icon-192.png`, `icon-512.png`
- Meta tags: `apple-mobile-web-app-capable`

---

## TypeScript Strict (Obligatoire)

### tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitAny": true,
    "noImplicitReturns": true
  }
}
```

- **Zéro `any`** : Utiliser `unknown` + type guards si nécessaire
- **Types explicites** : Interfaces dans `types.ts`

---

## Navigation avec Transitions (Obligatoire)

```typescript
// Toujours utiliser next-view-transitions
import { Link } from "next-view-transitions";

// Layout avec ViewTransitions
import { ViewTransitions } from "next-view-transitions";
<ViewTransitions>
  <html lang="fr">...</html>
</ViewTransitions>;
```

---

## Architecture RSC (Obligatoire)

### Structure des pages

```
src/app/[route]/page.tsx → Server Component (RSC)
└── import *PageClient.tsx → "use client" (animations)
```

### Composants

- **Pages** = Server Components (pas de `"use client"`)
- **Animations** = Client wrappers dans `src/components/sections/`
- **Nav/Footer** = Dans RootLayout (persistants)
- **Suspense** = Boundaries avec skeletons pour chaque section

### Next.js 15 Compatibility (Obligatoire)

- **Async Params** : `params` et `searchParams` sont des Promises.
  - Page : `export default async function Page(props: { params: Promise<{ slug: string }> }) { const params = await props.params; ... }`
  - Metadata : `export async function generateMetadata(props: { params: Promise<{ slug: string }> }) { const params = await props.params; ... }`

### Data Modularity (Obligatoire)

- **Data** = `src/lib/data/` (jamais dans les composants)
- **Modules Atomiques** : Si un fichier data dépasse 250 lignes, il DOIT être splitté dans `src/lib/data/definitions/`.
- **Anti-Monolithe** : `services.ts` (ou tout autre index) ne doit être qu'un aggrégateur d'imports.
- **Exports** = via `index.ts` unifié

---

## Design System (Obligatoire)

### Couleurs (tokens CSS uniquement)

- `--ocean` / `--ocean-light` / `--ocean-dark`
- `--accent`
- `--muted-foreground` (#b4b4b4 minimum pour contraste)
- Pas de couleurs hardcodées (ex: `#0ea5e9` interdit)

### Typography

- Outfit (headings, titres premium)
- DM Sans (corps de texte, lisibilité optimale)
- `font-sans` / `font-heading` via CSS vars

### Tailwind v4 Syntax

- `bg-linear-to-*` (pas `bg-gradient-to-*`)
- `aspect-16/9` (pas `aspect-[16/9]`)
- `z-100` (pas `z-[100]`)

---

## Accessibilité (WCAG AA - Obligatoire)

### Navigation

- Skip link : `<a href="#main-content">Aller au contenu principal</a>`
- Focus trap sur modales/menus mobiles
- `aria-label` sur tous les boutons icon-only

### Formulaires

- `<label htmlFor="id">` lié à chaque input
- `aria-invalid` sur erreurs
- Loading state avec spinner + disabled

### Accordéons/FAQ

- `aria-expanded`, `aria-controls`
- Keyboard nav : ArrowUp/Down, Home/End
- `role="list"` + `role="listitem"`

### Contraste

- Texte muted : minimum #b4b4b4 sur fond sombre
- Ratio 4.5:1 pour texte normal

---

## Animations Framer Motion (Obligatoire)

### Performance

- `useReducedMotion()` pour respecter préférences utilisateur
- `viewport={{ once: true }}` sur tous les `whileInView`
- Durées : 0.3s-0.8s (pas plus)

### Easing

- Cubic bezier smooth : `[0.22, 1, 0.36, 1]`
- Spring damping : 20-30

### Staggering

- Délai : 0.05s-0.1s entre éléments
- Max 6 éléments staggerés

---

## SEO (Obligatoire)

### Metadata

- `generateMetadata()` ou export metadata sur chaque page
- Open Graph complet
- Schema.org (LocalBusiness, FAQ, BreadcrumbList)

### Images

- `next/image` avec `sizes` prop
- `priority` sur LCP images
- `alt` descriptif (pas vide sauf décoratif)

### Structure

- Un seul `<h1>` par page
- Hiérarchie Hx respectée
- `<main id="main-content">`

### Breadcrumbs Grade A++ (Systématique)

- **Obligatoire** : Sur toutes les pages internes (sauf page d'accueil).
- **Architecture Double Couche** :
  1. **SEO (Server)** : `<BreadcrumbSchema items={generateBreadcrumbs(path)} />` dans le `page.tsx` (RSC).
  2. **UX (Client)** : `<Breadcrumbs />` dans le `PageClient.tsx`, aligné à gauche.
- **Source de Vérité** : Toujours utiliser `src/lib/breadcrumbs.ts`.

---

## Gestion de Contenu (Dual Hub - Obligatoire)

### Architecture MDX

- **Dual Hub Strategy** :
  - `/blog` (News) → `src/content/blog` (News & Actus)
  - `/ressources` (Guides) → `src/content/resources` (Guides Experts)
- **Utility** : Toujours utiliser `src/lib/mdx.ts` (via `getAllContent('blog' | 'resources')`).
- **Typage** : `ResourceMetadata` obligatoire pour tout frontmatter.

### Composants MDX

- **Images** : Toujours via `next/image` (WebP local ou URL optimisée).
- **Structure** : H2/H3 riches, listes à puces, CTAs contextuels (`<CTABlock />`).

---

## Composants UI (Obligatoire)

### Boutons

- Utiliser `<Button>` de shadcn/ui quand possible
- CTAs gradient : `bg-linear-to-r from-ocean to-accent`
- Focus visible ring

### Skeletons

- `animate-pulse` pour loading states
- Proportions réalistes du contenu final
- Background : `bg-white/5`

---

## Standards UI/UX Premium (Top 0.01% - Obligatoire)

### Philosophie Visuelle : "Glass & Light"

- **Surfaces** : Utiliser le glassmorphism (`bg-card/80 backdrop-blur-sm`) plutôt que des fonds opaques.
- **Bordures** :
  - JAMAIS de bordure grise unie simple (`border-gray-200` INTERDIT).
  - TOUJOURS `border-white/5` ou `border-white/10`.
  - Au survol : Gradient borders (`hover:border-ocean/30` ou via pseudo-élément).

### Micro-interactions & Vitalité

- **Hover States** : Tout élément interactif DOIT réagir.
  - Lift : `translate-y-[-4px]`
  - Glow : Effet de lueur (`shadow-[0_20px_40px_rgba(14,165,233,0.1)]`)
  - Icon Rotation : Rotation légère ou scale.
- **Micro-animations** : Utiliser des délais pour l'apparition en cascade (stagger).

### Atmosphère & Profondeur

- **Backgrounds** : Ne jamais laisser un fond vide.
  - Utiliser des gradients radiaux subtils (`bg-[radial-gradient...]`).
  - Utiliser du bruit (`bg-noise opacity-10`) pour la texture.
  - Utiliser des orbes flous (`blur-3xl`) pour la profondeur.

### Trust & Authority

- **Preuve Sociale** : Intégrer des éléments de confiance partout (stars, logos clients, stats).
- **Badges** : Utiliser des badges flottants sur les images (ex: "-40%", "Top Rated").

---

## Vérification avant commit

// turbo-all

1. `npm run build` doit passer sans erreur
2. Aucun lint warning Tailwind
3. Aucune erreur TypeScript
4. Lighthouse Performance > 90
5. Lighthouse Accessibility = 100

---

## Fichiers de référence

- Design tokens : `src/app/globals.css`
- Layout principal : `src/app/layout.tsx`
- Client wrappers : `src/components/sections/`
- Skeletons : `src/components/skeletons/`
- UI components : `src/components/ui/`

---

## Checklist S-Tier (Validation Finale)

| #   | Critère                                               | Status |
| --- | ----------------------------------------------------- | ------ |
| 1   | TypeScript strict activé (`noUncheckedIndexedAccess`) | ☐      |
| 2   | React Compiler activé                                 | ☐      |
| 3   | Navigation avec `next-view-transitions`               | ☐      |
| 4   | Structure RSC (Server + Client séparés)               | ☐      |
| 5   | Data modularity (<250 lignes/fichier)                 | ☐      |
| 6   | Design tokens centralisés (CSS vars)                  | ☐      |
| 7   | Metadata SEO sur chaque page                          | ☐      |
| 8   | Security headers configurés                           | ☐      |
| 9   | Accessibilité WCAG AA (skip links, aria-labels)       | ☐      |
| 10  | PWA configuré (manifest, icons)                       | ☐      |
| 11  | Bundle optimisé (`optimizePackageImports`)            | ☐      |
| 12  | ESLint max-warnings 0                                 | ☐      |
| 13  | Build production sans erreurs                         | ☐      |
| 14  | Lighthouse Performance > 90                           | ☐      |
