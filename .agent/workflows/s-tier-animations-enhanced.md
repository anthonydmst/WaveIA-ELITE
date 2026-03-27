# S-Tier Animation Strategy - Enhanced Guide

## 🎯 Philosophie Fondamentale

**"CSS pour la structure, JS pour la physique complexe"**

Cette approche garantit 60fps même sur Android entrée de gamme (200€).

---

## 📊 Tableau de Décision Rapide

| Type d'Animation                    | Technologie   | Règle d'Or                                                 |
| ----------------------------------- | ------------- | ---------------------------------------------------------- |
| **Hero / LCP (Auto-Play)**          | CSS Pur       | ✅ `.animate-hero-fade-up` ou `.animate-appear` (immédiat) |
| **Apparition au Scroll**            | CSS + Obs     | ✅ `.animate-in` + `data-in-view="true"` (ScrollObserver)  |
| **Micro-Interactions (Icônes)**     | CSS Pur       | ✅ `hover:scale` + `group-hover` - Zéro coût CPU           |
| **Interactions Complexes (Cartes)** | Framer Motion | ✅ `whileHover={{ y: -5 }}` autorisé pour physique Spring  |

---

## 🚀 Guide de Réplication

### A. Entrées au Scroll (Scroll Entrance) - SOUS LA FLOTTAISON

Pour les listes qui apparaissent au scroll, utiliser `.animate-in` qui est **PAUSED** par défaut.

```tsx
// ✅ FAIS ÇA - GPU Accelerated + Scroll Trigger
{
  items.map((item, index) => (
    <div
      key={item.id}
      className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards"
      data-in-view="false" // Géré par ScrollObserver
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {item.content}
    </div>
  ));
}
```

### B. Entrées Immédiates (Hero / LCP) - AU DESSUS DE LA FLOTTAISON

Pour les éléments visibles tout de suite, utiliser `.animate-appear` (Generic) ou `.animate-hero-fade-up` (Spécifique Hero).
**NE PAS** utiliser `.animate-in` ici car il attendrait le JS pour se lancer (FOUC).

```tsx
// ✅ FAIS ÇA - Auto-Play immédiat
<div className="animate-hero-fade-up">
  <h1>Titre Hero</h1>
</div>;

// ✅ FAIS ÇA - Liste immédiate avec délai
{
  badges.map((badge, i) => (
    <div className="animate-appear" style={{ animationDelay: `${i * 100}ms` }}>
      {badge}
    </div>
  ));
}
```

---

### C. Naming Conventions (CSS vs Tailwind)

**Classes CSS Sûres (Définies dans globals.css)**:

- `.animate-hero-fade-up`: Fade-up standard pour Hero (0.8s, 0.2s delay builtin)
- `.animate-appear`: Fade-up générique (0.5s, no delay builtin, parfait pour stagger)
- `.animate-zoom-in`: Scale 0.9 -> 1
- `.animate-in`: **PAUSED** par défaut (nécessite ScrollObserver)

---

## ⚡ Optimisations Avancées

### 1. `will-change` pour animations complexes

Si flou/jitter détecté, ajouter `will-change-transform`:

```css
.animate-appear {
  will-change: transform, opacity;
}
```

### 2. Préférer `scale` à `height`

```tsx
// ❌ Force reflow (recalcule toute la page)
<div className="h-0 hover:h-auto transition-all">

// ✅ GPU-accelerated (carte graphique)
<div className="scale-y-0 hover:scale-y-100 transition-transform origin-top">
```

### 3. Stagger Delays pour listes

```tsx
style={{ animationDelay: `${i * 50}ms` }}
```

**Formula**: `delay = index * 50ms` (max 100ms pour >20 items pour éviter attente trop longue)

---

## ✅ Checklist Projet

Avant de pousser du code avec animations:

- [ ] Hero Section: Utiliser `.animate-hero-fade-up` ou `.animate-appear` (Auto-play).
- [ ] Scroll Section: Utiliser `.animate-in` (Scroll-triggered).
- [ ] Ne JAMAIS ajouter de classe CSS globale `fade-in` qui auto-play sans préfixe spécifique (risque de conflit).
- [ ] Vérifier que `globals.css` contient bien les classes utilisées.

---
