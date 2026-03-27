"use client";

import { useState } from "react";
import {
  Globe, Zap, TrendingUp, Image, Rocket, MapPin, BarChart2,
  Camera, Share2, Clock, ArrowRight, CheckCircle, Star,
  Calendar, Sparkles, Target, Search, Megaphone,
  Monitor, Award, ChevronLeft
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Types ─── */
interface Option {
  id: string;
  icon: LucideIcon;
  colorClass: string;
  label: string;
  desc: string;
}

interface SubQuestion {
  label: string;
  title: string;
  subtitle: string;
  type: "multi";
  options: Option[];
}

interface Step {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  type: "options" | "multi";
  options: Option[];
  subQuestions?: Record<string, SubQuestion>;
}

interface Rec {
  icon: LucideIcon;
  iconColorClass: string;
  title: string;
  desc: string;
  priority: "high" | "med" | "low";
}

type Answers = Record<string, string | string[]>;

/* ─── Steps Data ─── */
const STEPS_DATA: Step[] = [
  {
    id: "defi",
    label: "Étape 1 · Le Défi",
    title: "Quel est votre principal défi business ?",
    subtitle: "Identifiez la problématique centrale de votre présence digitale.",
    type: "options",
    options: [
      { id: "no-presence", icon: Globe, colorClass: "wdx-opt-ocean", label: "Pas de présence", desc: "Je n'ai aucun site ni profil en ligne" },
      { id: "bad-conv", icon: TrendingUp, colorClass: "wdx-opt-accent", label: "Site inefficace", desc: "Mon site ne convertit pas les visiteurs" },
      { id: "old-brand", icon: Star, colorClass: "wdx-opt-violet", label: "Image vieillissante", desc: "Mon branding n'est plus dans l'air du temps" },
      { id: "growth", icon: Rocket, colorClass: "wdx-opt-teal", label: "Besoin de croissance", desc: "Je veux plus de visibilité et de clients" },
    ],
  },
  {
    id: "existant",
    label: "Étape 2 · L'Existant",
    title: "Disposez-vous d'un site web actuellement ?",
    subtitle: "Faisons un audit rapide de votre situation digitale.",
    type: "options",
    options: [
      { id: "site-yes", icon: Monitor, colorClass: "wdx-opt-green", label: "Oui, j'ai un site", desc: "Et je souhaite l'améliorer" },
      { id: "site-no", icon: Zap, colorClass: "wdx-opt-sunset", label: "Non, pas encore", desc: "Je pars de zéro" },
    ],
    subQuestions: {
      "site-yes": {
        label: "Évaluez votre site actuel",
        title: "Comment évaluez-vous votre site ?",
        subtitle: "Soyez honnête pour un diagnostic précis.",
        type: "multi",
        options: [
          { id: "slow", icon: Clock, colorClass: "wdx-opt-sand", label: "Lent / vieilli", desc: "Mauvaise vitesse ou design obsolète" },
          { id: "no-seo", icon: Search, colorClass: "wdx-opt-pink", label: "Invisible sur Google", desc: "Peu de trafic organique" },
          { id: "no-conv", icon: Target, colorClass: "wdx-opt-accent", label: "Pas assez de contacts", desc: "Peu de formulaires ou appels générés" },
          { id: "not-mobile", icon: Image, colorClass: "wdx-opt-ocean", label: "Pas adapté mobile", desc: "Mauvaise expérience sur smartphone" },
        ],
      },
    },
  },
  {
    id: "visibilite",
    label: "Étape 3 · Visibilité & SEO",
    title: "Quelle est votre présence locale en ligne ?",
    subtitle: "Le SEO local est souvent le levier le plus rapide.",
    type: "options",
    options: [
      { id: "gmb-ok", icon: MapPin, colorClass: "wdx-opt-green", label: "Google My Business optimisé", desc: "Fiche complète avec avis réguliers" },
      { id: "gmb-partial", icon: MapPin, colorClass: "wdx-opt-sand", label: "Fiche partielle", desc: "Existante mais peu renseignée" },
      { id: "gmb-none", icon: MapPin, colorClass: "wdx-opt-pink", label: "Aucune fiche", desc: "Pas de présence Google Maps" },
      { id: "seo-ok", icon: BarChart2, colorClass: "wdx-opt-ocean", label: "Bien classé sur Google", desc: "1ère page pour mes mots-clés" },
    ],
  },
  {
    id: "contenu",
    label: "Étape 4 · Contenu & Social",
    title: "Comment gérez-vous votre contenu visuel ?",
    subtitle: "Le contenu de qualité multiplie l'impact de toutes les autres actions.",
    type: "multi",
    options: [
      { id: "good-photos", icon: Camera, colorClass: "wdx-opt-teal", label: "Photos pro", desc: "J'ai des visuels professionnels" },
      { id: "video", icon: Sparkles, colorClass: "wdx-opt-violet", label: "Vidéos & Reels", desc: "Je produis du contenu vidéo" },
      { id: "regular-social", icon: Share2, colorClass: "wdx-opt-ocean", label: "Actif sur les réseaux", desc: "Publications régulières chaque semaine" },
      { id: "none-content", icon: Image, colorClass: "wdx-opt-sunset", label: "Peu de contenu", desc: "Je n'ai pas encore investi là-dedans" },
    ],
  },
  {
    id: "urgence",
    label: "Étape 5 · Urgence & Budget",
    title: "Quel est votre horizon de résultats ?",
    subtitle: "Cela détermine la stratégie la plus adaptée à déployer.",
    type: "options",
    options: [
      { id: "fast", icon: Zap, colorClass: "wdx-opt-sunset", label: "Résultats immédiats", desc: "Je veux des leads dans les 30 premiers jours" },
      { id: "long", icon: TrendingUp, colorClass: "wdx-opt-ocean", label: "Long terme", desc: "Je veux construire sur la durée (3-6 mois)" },
      { id: "both", icon: Target, colorClass: "wdx-opt-accent", label: "Les deux", desc: "Quick wins + stratégie long terme" },
    ],
  },
];

/* ─── Recommendation Engine ─── */
function computeRecommendations(answers: Answers): Rec[] {
  const recs: Rec[] = [];
  const d = answers.defi as string | undefined;
  const e = answers.existant as string | undefined;
  const sub = (answers.existant_sub as string[]) || [];
  const v = answers.visibilite as string | undefined;
  const c = (answers.contenu as string[]) || [];
  const u = answers.urgence as string | undefined;

  if (!e || e === "site-no") {
    recs.push({ icon: Monitor, iconColorClass: "wdx-opt-ocean", title: "Site Vitrine ou E-commerce IA", desc: "Création d'un site moderne, rapide et optimisé SEO avec des outils IA.", priority: "high" });
  }
  if (v === "gmb-none" || v === "gmb-partial" || d === "growth") {
    recs.push({ icon: MapPin, iconColorClass: "wdx-opt-green", title: "SEO Local + Google My Business", desc: "Optimisation de votre fiche GMB, avis clients et référencement local.", priority: "high" });
  }
  if (u === "fast" || u === "both" || d === "bad-conv") {
    recs.push({ icon: Megaphone, iconColorClass: "wdx-opt-sunset", title: "Campagne Publicité + Landing Page IA", desc: "Ads Google/Meta ciblées et landing page optimisée pour la conversion.", priority: u === "fast" ? "high" : "med" });
  }
  if (d === "old-brand" || !c.includes("good-photos")) {
    recs.push({ icon: Camera, iconColorClass: "wdx-opt-accent", title: "Identité Visuelle + Shooting Photo/Vidéo", desc: "Refonte de votre image de marque et production de contenu visuel impactant.", priority: d === "old-brand" ? "high" : "med" });
  }
  if (sub.includes("no-seo") || v === "gmb-none" || d === "growth") {
    recs.push({ icon: Search, iconColorClass: "wdx-opt-teal", title: "Stratégie SEO & Contenu", desc: "Audit SEO, optimisation on-page et création de contenu ciblé pour Google.", priority: u === "long" ? "high" : "med" });
  }
  if (c.includes("none-content") || !c.includes("regular-social")) {
    recs.push({ icon: Share2, iconColorClass: "wdx-opt-violet", title: "Gestion Réseaux Sociaux IA", desc: "Calendrier éditorial, création de posts et gestion automatisée de votre présence.", priority: "low" });
  }
  if (u === "long" || u === "both") {
    recs.push({ icon: BarChart2, iconColorClass: "wdx-opt-sand", title: "Tableau de Bord Analytics", desc: "Suivi de performances en temps réel pour optimiser vos investissements.", priority: "low" });
  }
  const seen = new Set<string>();
  return recs.filter(r => { if (seen.has(r.title)) return false; seen.add(r.title); return true; }).slice(0, 5);
}

function computeScore(answers: Answers): number {
  let score = 20;
  if (answers.existant === "site-yes") score += 15;
  if (answers.visibilite === "gmb-ok") score += 20;
  else if (answers.visibilite === "gmb-partial") score += 10;
  const c = (answers.contenu as string[]) || [];
  if (c.includes("good-photos")) score += 10;
  if (c.includes("video")) score += 10;
  if (c.includes("regular-social")) score += 10;
  if (answers.urgence) score += 15;
  return Math.min(score, 100);
}

/* ─── Score Ring ─── */
function ScoreRing({ score }: { score: number }) {
  const r = 44;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  const color = score < 40 ? "#ef4444" : score < 70 ? "var(--sunset)" : "#22c55e";
  return (
    <div className="flex flex-col items-center my-6">
      <svg width="110" height="110" viewBox="0 0 110 110">
        <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        <circle cx="55" cy="55" r={r} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          transform="rotate(-90 55 55)" style={{ transition: "stroke-dasharray 1s ease" }} />
        <text x="55" y="50" textAnchor="middle" fill="var(--foreground)" fontSize="20" fontWeight="700" className="font-heading">{score}</text>
        <text x="55" y="66" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">/100</text>
      </svg>
      <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-2">Score de maturité digitale</div>
    </div>
  );
}

/* ─── Scoped CSS ─── */
const scopedStyles = `
  /* WaveDiagnostic scoped styles */
  .wdx-slide-forward {
    animation: wdxSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  }
  @keyframes wdxSlideIn {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .wdx-slide-back {
    animation: wdxSlideBack 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  }
  @keyframes wdxSlideBack {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .wdx-result-appear {
    animation: wdxFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  @keyframes wdxFadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Option icon color classes - adapted to site palette */
  .wdx-opt-ocean { background: rgba(14,165,233,0.15); color: var(--ocean-light); }
  .wdx-opt-accent { background: rgba(6,182,212,0.15); color: var(--accent); }
  .wdx-opt-violet { background: rgba(139,92,246,0.15); color: #c4b5fd; }
  .wdx-opt-teal { background: rgba(20,184,166,0.15); color: #2dd4bf; }
  .wdx-opt-sunset { background: rgba(249,115,22,0.15); color: var(--sunset); }
  .wdx-opt-pink { background: rgba(236,72,153,0.15); color: #f472b6; }
  .wdx-opt-green { background: rgba(34,197,94,0.15); color: #4ade80; }
  .wdx-opt-sand { background: rgba(212,165,116,0.15); color: var(--sand); }

  /* Progress bar gradient */
  .wdx-progress-fill {
    background: linear-gradient(135deg, var(--ocean) 0%, var(--accent) 50%, var(--ocean-light) 100%);
    transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  /* Option button interactions */
  .wdx-option {
    transition: all 0.2s ease;
  }
  .wdx-option:hover {
    background: rgba(14,165,233,0.12);
    border-color: rgba(14,165,233,0.4);
    transform: translateY(-2px);
  }
  .wdx-option.wdx-selected {
    background: rgba(14,165,233,0.15);
    border-color: var(--ocean);
    box-shadow: 0 0 0 1px rgba(14,165,233,0.3), inset 0 0 20px rgba(14,165,233,0.05);
  }

  /* Next button gradient */
  .wdx-btn-next {
    background: linear-gradient(135deg, var(--ocean) 0%, var(--accent) 50%, var(--ocean-light) 100%);
    transition: all 0.2s ease;
  }
  .wdx-btn-next:hover:not(:disabled) {
    opacity: 0.88;
    transform: translateY(-1px);
    box-shadow: 0 8px 30px rgba(14,165,233,0.4);
  }
  .wdx-btn-next:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* CTA card */
  .wdx-cta-card {
    background: rgba(14,165,233,0.08);
    border: 1px solid rgba(14,165,233,0.25);
  }
  .wdx-btn-cta {
    background: linear-gradient(135deg, var(--ocean) 0%, var(--accent) 50%, var(--ocean-light) 100%);
    transition: all 0.2s ease;
  }
  .wdx-btn-cta:hover {
    opacity: 0.88;
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(14,165,233,0.5);
  }

  /* Recommendation cards */
  .wdx-rec-card {
    transition: all 0.2s ease;
  }
  .wdx-rec-card:hover {
    background: rgba(14,165,233,0.07);
    border-color: rgba(14,165,233,0.25);
  }

  /* Priority badges */
  .wdx-prio-high { background: rgba(239,68,68,0.15); color: #fca5a5; border: 1px solid rgba(239,68,68,0.25); }
  .wdx-prio-med { background: rgba(245,158,11,0.15); color: #fcd34d; border: 1px solid rgba(245,158,11,0.25); }
  .wdx-prio-low { background: rgba(34,197,94,0.15); color: #86efac; border: 1px solid rgba(34,197,94,0.25); }

  /* Success overlay */
  .wdx-success-overlay {
    animation: wdxFadeIn 0.3s ease;
  }
  @keyframes wdxFadeIn { from { opacity:0; } to { opacity:1; } }
  .wdx-success-modal {
    animation: wdxScaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes wdxScaleIn { from { opacity:0; transform: scale(0.85); } to { opacity:1; transform: scale(1); } }

  /* Range slider */
  .wdx-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--ocean), var(--accent));
    cursor: pointer;
    box-shadow: 0 0 12px rgba(14,165,233,0.6);
  }
`;

/* ─── Main Component ─── */
export function WaveDiagnostic() {
  const [step, setStep] = useState(0);
  const [subStep, setSubStep] = useState<SubQuestion | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [done, setDone] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const totalSteps = STEPS_DATA.length;
  const progress = done ? 100 : ((step + (subStep ? 0.5 : 0)) / totalSteps) * 100;

  const currentStep = STEPS_DATA[step] as Step;

  const canProceed = (): boolean => {
    if (subStep) {
      return ((answers.existant_sub as string[]) || []).length > 0;
    }
    if (!currentStep) return false;
    const ans = answers[currentStep.id];
    if (currentStep.type === "multi") return Array.isArray(ans) && ans.length > 0;
    return !!ans;
  };

  const handleOption = (id: string) => {
    if (subStep || !currentStep) return;
    const s = currentStep;
    if (s.type === "multi") {
      const cur = (answers[s.id] as string[]) || [];
      if (id === "none-content") {
        setAnswers(p => ({ ...p, [s.id]: ["none-content"] }));
      } else {
        const next = cur.includes(id) ? cur.filter(x => x !== id) : [...cur.filter(x => x !== "none-content"), id];
        setAnswers(p => ({ ...p, [s.id]: next }));
      }
    } else {
      setAnswers(p => ({ ...p, [s.id]: id }));
    }
  };

  const handleSubOption = (id: string) => {
    const cur = (answers.existant_sub as string[]) || [];
    const next = cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id];
    setAnswers(p => ({ ...p, existant_sub: next }));
  };

  const goNext = () => {
    if (subStep) {
      setSubStep(null);
      setDirection("forward");
      setAnimKey(k => k + 1);
      if (step + 1 < totalSteps) setStep(s => s + 1);
      else setDone(true);
      return;
    }
    const cur = currentStep;
    if (!cur) return;
    const answerVal = answers[cur.id] as string | undefined;
    if (cur.subQuestions && answerVal && cur.subQuestions[answerVal]) {
      setSubStep(cur.subQuestions[answerVal] ?? null);
      setDirection("forward");
      setAnimKey(k => k + 1);
      return;
    }
    setDirection("forward");
    setAnimKey(k => k + 1);
    if (step + 1 < totalSteps) setStep(s => s + 1);
    else setDone(true);
  };

  const goBack = () => {
    setDirection("back");
    setAnimKey(k => k + 1);
    if (subStep) { setSubStep(null); return; }
    if (step > 0) setStep(s => s - 1);
  };

  const recs = done ? computeRecommendations(answers) : [];
  const score = done ? computeScore(answers) : 0;

  const prioLabel: Record<string, string> = { high: "Priorité haute", med: "Priorité moyenne", low: "Priorité basse" };
  const prioClass: Record<string, string> = { high: "wdx-prio-high", med: "wdx-prio-med", low: "wdx-prio-low" };

  const renderOptions = (
    opts: Option[],
    onSelect: (id: string) => void,
    isSelected: (id: string) => boolean
  ) =>
    opts.map(opt => {
      const Icon = opt.icon;
      const sel = isSelected(opt.id);
      return (
        <button
          key={opt.id}
          className={`wdx-option text-left flex items-start gap-3 p-4 rounded-xl border cursor-pointer ${
            sel
              ? "wdx-selected bg-ocean/[0.15] border-ocean"
              : "bg-glass-bg border-glass-border"
          }`}
          onClick={() => onSelect(opt.id)}
        >
          <div className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center shrink-0 ${opt.colorClass}`}>
            <Icon size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm text-foreground mb-0.5">{opt.label}</div>
            <div className="text-xs text-muted-foreground leading-snug">{opt.desc}</div>
          </div>
          {sel && <CheckCircle size={16} className="text-ocean shrink-0 ml-auto" />}
        </button>
      );
    });

  const activeQ = subStep || currentStep;
  if (!activeQ || !currentStep) return null;

  return (
    <>
      <style>{scopedStyles}</style>
      <section id="diagnostic" className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--ocean)_0%,transparent_60%)] opacity-[0.04]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean/20 to-transparent" />

        <div className="relative max-w-[680px] mx-auto px-5 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 animate-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              Diagnostic IA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Évaluez votre présence en ligne
              <br className="hidden sm:block" />
              <span className="font-heading italic text-ocean-light">en 2 minutes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Répondez à 5 questions et recevez un diagnostic personnalisé avec des recommandations concrètes.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2 font-medium">
              <span>{done ? "Diagnostic terminé" : `Étape ${step + 1} sur ${totalSteps}`}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-glass-bg rounded-full overflow-hidden">
              <div className="wdx-progress-fill h-full rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex gap-1.5 mt-2.5">
              {STEPS_DATA.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full flex-1 transition-all duration-400 ${
                    i < step || done ? "bg-ocean" : i === step ? "bg-ocean-light" : "bg-glass-bg"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Questions */}
          {!done ? (
            <div key={animKey} className={direction === "back" ? "wdx-slide-back" : "wdx-slide-forward"}>
              {/* Question Card */}
              <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-8 mb-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-ocean mb-3">{activeQ.label}</div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground leading-tight mb-2">{activeQ.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{activeQ.subtitle}</p>
              </div>

              {/* Options Grid */}
              <div className={`grid gap-3 mb-6 ${activeQ.options.length <= 2 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
                {subStep
                  ? renderOptions(subStep.options, handleSubOption, (id: string) => ((answers.existant_sub as string[]) || []).includes(id))
                  : renderOptions(
                      currentStep.options,
                      handleOption,
                      (id: string) => currentStep.type === "multi"
                        ? ((answers[currentStep.id] as string[]) || []).includes(id)
                        : answers[currentStep.id] === id
                    )
                }
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                {(step > 0 || subStep) && (
                  <button
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-glass-border bg-transparent text-muted-foreground text-sm font-medium hover:text-foreground hover:border-ocean/30 transition-all cursor-pointer"
                    onClick={goBack}
                  >
                    <ChevronLeft size={16} /> Retour
                  </button>
                )}
                <button
                  className="wdx-btn-next flex-1 flex items-center justify-center gap-2 px-7 py-3 rounded-xl border-0 text-white text-sm font-semibold font-heading tracking-wide cursor-pointer"
                  onClick={goNext}
                  disabled={!canProceed()}
                >
                  {step === totalSteps - 1 && !subStep ? "Voir mon diagnostic" : "Continuer"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            /* Results */
            <div className="wdx-result-appear">
              {/* Result Header */}
              <div className="text-center mb-8">
                <div className="w-[72px] h-[72px] rounded-full bg-ocean/10 border-2 border-ocean/30 flex items-center justify-center mx-auto mb-4 text-ocean-light">
                  <Award size={30} />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">Votre Feuille de route WaveIA</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Basée sur votre diagnostic, voici les actions prioritaires pour accélérer votre croissance digitale.
                </p>
              </div>

              <ScoreRing score={score} />

              {/* Recommendations */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-widest text-ocean font-semibold mb-4">Recommandations personnalisées</div>
                {recs.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={i} className="wdx-rec-card bg-glass-bg border border-glass-border rounded-xl p-4 flex items-start gap-3.5 mb-2.5">
                      <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 ${r.iconColorClass}`}>
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-foreground mb-1">{r.title}</div>
                        <div className="text-xs text-muted-foreground leading-snug">{r.desc}</div>
                      </div>
                      <div className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-md shrink-0 ${prioClass[r.priority]}`}>
                        {prioLabel[r.priority]}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="wdx-cta-card rounded-2xl p-7 text-center mt-6">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Prêt à passer à l&apos;action ?</h4>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Nos experts WaveIA analysent votre diagnostic et vous proposent un plan d&apos;action sur mesure lors d&apos;un appel gratuit de 30 minutes.
                </p>
                <button
                  className="wdx-btn-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-0 text-white text-sm font-bold font-heading tracking-wide cursor-pointer"
                  onClick={() => setShowSuccess(true)}
                >
                  <Calendar size={16} />
                  Prendre RDV avec un expert WaveIA
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Success Overlay */}
        {showSuccess && (
          <div
            className="wdx-success-overlay fixed inset-0 z-[100] bg-background/85 backdrop-blur-md flex items-center justify-center"
            onClick={() => setShowSuccess(false)}
          >
            <div
              className="wdx-success-modal bg-glass-bg border border-ocean/30 rounded-3xl p-10 max-w-[360px] w-[90%] text-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-emerald-500/15 border-2 border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
                <CheckCircle size={28} />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-2">Demande envoyée !</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Notre équipe vous contactera dans les 24h pour planifier votre session stratégique gratuite avec un expert WaveIA.
              </p>
              <button
                className="px-6 py-2.5 rounded-xl border border-glass-border bg-transparent text-muted-foreground text-sm cursor-pointer hover:text-foreground hover:border-ocean/30 transition-all"
                onClick={() => setShowSuccess(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
