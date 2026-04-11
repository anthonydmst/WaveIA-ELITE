# 🚀 S-TIER GOD MODE BIBLE — V1.0 CANONIQUE (NEXT.JS EDITION)

**Architecture · App Router · Server Components · Performance · Hygiène · GEO**

> **Statut** : Source de vérité unique (Next.js S++ God Universe Edition)
> **Dernière Mise à jour** : 11 Avril 2026 — V1.0 — Initial Release tailored for Next.js Excellence.

---

## 🧭 PARTIE 0 — GOUVERNANCE & HYGIÈNE

### 0.1 Principe Fondamental

Ce standard est contractuel. Toute déviation réduit le score God Universe.

- **Zéro Duplication** : Un composant ne doit exister qu'à un seul endroit. (ex: Navigation doit être dans `src/components/navigation/`).
- **Zéro Remnant** : Suppression immédiate de toute trace de migration (Astro, classes `astro-*`, styles inutilisés).
- **Mandat God Tier** : Toute nouvelle page ajoutée au projet DOIT impérativement hériter des attributs God Tier (Kinetic Engine, Glassmorphism, Performance < 1.2s LCP) dès sa création.
- **RSC First** : Utiliser les React Server Components par défaut. N'utiliser `'use client'` que pour l'interactivité stricte (GSAP, Alpine, Forms).

---

## 🧠 PARTIE 1 — MANIFESTE S-TIER (NEXT.JS EDITION)

### 1.1 Core Engine: Performance Overclock

- **Static by Default** : Utiliser `export const dynamic = 'force-static'` sur toutes les pages de contenu (Services, Zones, Blog).
- **Metadata API** : Utiliser l'objet `metadata` et `generateMetadata` pour le SEO dynamique. Interdiction du tag `<head>` manuel dans les pages.
- **Fonts Optimization** : Utiliser `next/font/google` avec `display: 'swap'` pour éliminer le CLS lié aux polices.
- **Navigation (Zero Flickering)** : Utiliser `next/link` avec `prefetch={true}`. Pour les transitions complexes, coupler avec un orchestrateur de sortie si nécessaire.

### 1.2 Images (Galaxy Ultimate Optimization)

- **Interdiction du tag `<img>`** : Utiliser OBLIGATOIREMENT `next/image`.
- **LCP Signal** : L'image principale (Hero) DOIT inclure `priority={true}` et `loading="eager"`.
- **Responsive Sizes Protocol** : Utiliser l'attribut `sizes` de manière chirurgicale (ex: `(max-width: 768px) 100vw, 50vw`) pour éviter de charger des images surdimensionnées.
- **Placeholder Mastery** : Utiliser `placeholder="blur"` avec des `blurDataURL` générés ou des shimmer CSS pour éviter tout saut visuel.

### 1.3 TypeScript God Mode

- **Zero "Any" Policy** : Strictement interdit.
- **Zod schemas** : Validation obligatoire des données provenant de CMS ou de fichiers JSON locaux.

---

## 🧩 PARTIE 2 — ARCHITECTURE & STRUCTURE

### 2.1 Structure des Composants

- **Dossiers Domaines** : `src/components/ui/`, `src/components/navigation/`, `src/components/seo/`, `src/components/organisms/`.
- **Alias** : Utilisation stricte de l'alias `@/components/...`.
- **Colocation** : Les composants spécifiques à une route peuvent rester dans le dossier de la route, mais les sections globales DOIVENT être dans `organisms/`.

### 2.2 SEO & Données Structurées (Next.js Edition)

- **JSON-LD Centralisé** : Utiliser un composant `<JsonLd />` injectant les scripts via `dangerouslySetInnerHTML`.
- **Dynamic SEO** : Les pages zones (`/detective/[slug]`) DOIVENT générer leurs métadonnées via `generateMetadata` en incluant les `geo.region`, `geo.placename` et `geo.position`.
- **Entity Binding (Founder/Person)** : L'organisation injectée dans le layout principal DOIT inclure les propriétés `founder` avec accréditations complètes.

---

## ⚡ PARTIE 3 — PERFORMANCE CONTRACTUELLE

| Metric         | Seuil God Mode |
| :------------- | :------------- |
| **LCP**        | ≤ 1.2s         |
| **CLS**        | 0              |
| **TBT**        | < 100ms        |

### 3.1 Streaming & Suspense

- Utiliser `<Suspense />` pour les composants lourds ou asynchrones (ex: Reviews complexes, Maillage territorial) afin de ne pas bloquer le premier paint (FCP).
- **Route Segment Config** : Préférer `revalidate = 3600` (ISR) pour les pages hybrides plutôt que le mode `force-dynamic`.

---

## 🌌 PARTIE 4 — KINETIC ENGINE (NEXT.JS ADAPTATION)

### 4.1 Smooth Orchestration (Lenis)

- **Standard** : Implémentation via un `LenisProvider` (`'use client'`) enveloppant le `children` dans `layout.tsx`.
- **Performance** : Vérifier que Lenis ne tourne pas sur mobile si la fluidité naturelle suffit.

### 4.2 Cinematic Motion (GSAP + React)

- **Standard** : Utilisation de `useGSAP` (de `@gsap/react`) pour une gestion propre du cycle de vie des animations.
- **Orchestration DATA** : Conserver le système `data-reveal` et `data-stagger`. Les hooks GSAP doivent scanner ces attributs dans le DOM pour rester agnostiques du framework.
- **Batching** : Utiliser `ScrollTrigger.batch()` pour les grilles denses (Expertise, Stats).

### 4.3 Atmospheric depth & Zebra Banding

- **Cadrillage Protocol** : La grille de fond est injectée dans le `RootLayout` en `fixed inset-0`.
- **Zebra Banding** : Même logique `.section-banded` avec alternance automatique via un utilitaire `rhythm`.
- **Shimmer Separators** : Composant `<SeparatorGlow />` à insérer entre les pôles d'autorité.

---

## 🛡️ PARTIE 5 — GEO & AI AUTHORITY (S++ NEXT EDITION)

### 5.1 robots.txt & llms.txt (Next.js specific)

- **Dynamic llms.txt** : Créer une route `app/llms.txt/route.ts` pour générer le contenu dynamiquement à partir des données `ZONES_DATA`.
- **Metadata AI** : Injecter `<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />` globalement via le `viewport` ou `metadata` de Next.js.

### 5.2 Dynamic Routes (GenerateStaticParams)

- Pour les silos (Villes, Services), utiliser `generateStaticParams` pour garantir que 100% des pages sont pré-rendues au build (Full SSG).

---

## 🧹 PARTIE 6 — HYGIÈNE & CONTRÔLE

- **Zero Hydration Errors** : Les composants interactifs doivent être robustes. Éviter les calculs basés sur `window` au moment du render. Utiliser `useEffect` ou des vérifications `mounted`.
- **Bundle Audit** : Utiliser `@next/bundle-analyzer` régulièrement. Le JS initial par page ne doit pas dépasser **35kB**.
- **Deployment** : Privilégier Vercel ou Cloudflare Pages pour une distribution Edge-ready.

---

## 🤖 PARTIE 7 — AI AUTHORITY ENGINE

- **Speakable Schema** : Intégrer systématiquement les selectors CSS pour les LLM (h1, .definition-text).
- **Freshness API** : Utiliser le build timestamp via `process.env.BUILD_TIME` pour mettre à jour les signaux de fraîcheur dans les `dateModified` des Schémas.

---

### 🎨 CHECKLIST D'AUDIT NEXT.JS S-TIER

- [ ] **LCP Priority** : Hero image a bien `priority={true}`.
- [ ] **RSC Check** : Moins de 20% des composants sont `'use client'`.
- [ ] **Metadata Hierarchy** : `generateMetadata` est utilisé pour les pages dynamiques.
- [ ] **Dynamic Parameters** : `generateStaticParams` est présent pour tous les chemins dynamiques.
- [ ] **Zero Layout Shift** : Toutes les polices et images ont des dimensions réservées.
- [ ] **Kinetic Guard** : Lenis et GSAP sont correctement nettoyés lors des changements de route.

---
_Fin du S-TIER NEXT.JS BIBLE — God Mode Activated._
