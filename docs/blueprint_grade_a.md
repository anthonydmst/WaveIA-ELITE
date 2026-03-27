# **BLUEPRINT GRADE A+ TOP 0.01% - Template Complet**

**Date**: 19 décembre 2025
**Version**: 1.0
**Usage**: Brief pour agent IA / Nouveau projet

---

## **📋 TABLE DES MATIÈRES**

1. **Stack Technique**
2. **Architecture & Structure**
3. **Design System & UI/UX**
4. **Performance**
5. **SEO & Métadonnées**
6. **Accessibilité**
7. **Code Quality**
8. **Monitoring & Analytics**
9. **Configuration & Setup**
10. **Best Practices**

---

## **1. STACK TECHNIQUE**

### **Framework & Libraries**

- Next.js 15+ (App Router)
- React 19+
- TypeScript 5+ (strict mode)
- Tailwind CSS 4+
- shadcn/ui
- Framer Motion
- React Hook Form + Zod
- Lucide React

### **Infrastructure**

- Hosting: Vercel
- CDN: Vercel Edge Network

---

## **2. ARCHITECTURE & STRUCTURE**

### **Structure de Dossiers (OBLIGATOIRE)**

```
project/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # Composants React
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── seo/                # Composants SEO
│   │   ├── layouts/            # Layouts réutilisables
│   ├── lib/                    # Utilitaires & Data
│   │   ├── [data]/             # Data modules
│   │   │   ├── types.ts        # Types séparés
│   │   │   └── index.ts        # Export unifié
```

### **Principes Architecture (STRICT)**

1. **Separation of Concerns** (Types séparés, Data modules)
2. **Single Source of Truth** (1 seule définition par donnée)
3. **Clean Import Paths** (`@/lib/services`)

---

## **3. DESIGN SYSTEM & UI/UX**

### **Color Palette (Monochrome Grade A+)**

Strictement noir, blanc, gris. Couleur UNIQUEMENT pour urgences.

### **Typography**

Responsive (clamp) et hiérarchie stricte.

### **UI Components Standards**

- Buttons: Rounded-md (default), Rounded-full (CTA)
- Cards: Border, Shadow hover
- Animations: Framer Motion (initial, whileInView, viewport once)

### **Responsive**

Mobile-first OBLIGATOIRE.

---

## **4. PERFORMANCE**

- **First Load JS**: < 100KB
- **Total Bundle**: < 200KB
- **LCP**: < 2.5s
- **Images**: WebP UNIQUEMENT, Next.js Image component
- **Fonts**: Preload + display swap

---

## **5. SEO & MÉTADONNÉES**

- **Metadata**: Sur CHAQUE page (`constructMetadata`)
- **Structured Data**: Schema.org (Breadcrumb, Organization, etc.)
- **Sitemap**: Automatique

---

## **6. ACCESSIBILITÉ (WCAG 2.1 AA)**

- **Skip Navigation**: `<a href="#main-content">`
- **Focus States**: Toujours visibles
- **ARIA Labels**: Complets
- **Contrast**: 4.5:1 minimum

---

## **7. CODE QUALITY**

- **TypeScript**: Strict mode, Zero `any`
- **Linting**: 0 errors
- **Error Handling**: Error Boundary
- **Commits**: Sémantiques

---

## **8. BEST PRACTICES**

- **Data Fetching**: Server Components par défaut
- **Forms**: React Hook Form + Zod
- **Type Definitions**: Interfaces claires avec JSDoc

---

## **📊 CHECKLIST FINALE GRADE A+**

### **Architecture ✅**

- [ ] Structure dossiers respectée
- [ ] Imports clean
- [ ] Data modularisée (`src/lib/data`)
- [ ] Single Source of Truth
- [ ] Zero duplication

### **Design ✅**

- [ ] Monochrome strict
- [ ] Mobile-first
- [ ] Animations Framer Motion

### **Performance ✅**

- [ ] Images WebP
- [ ] Bundle < 200KB
- [ ] Core Web Vitals OK

### **SEO ✅**

- [ ] Metadata partout
- [ ] Schema.org
- [ ] Sitemap OK

### **Accessibilité ✅**

- [ ] Skip navigation
- [ ] Contraste 4.5:1
- [ ] Keyboard nav OK

### **Code Quality ✅**

- [ ] TypeScript strict
- [ ] Linting 0 errors
- [ ] Commits sémantiques
