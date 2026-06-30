"use client";

import { useReducer } from "react";
import { m, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Rocket, 
  TrendingUp, 
  Brush, 
  Layout, 
  ShoppingBag, 
  Search, 
  Palette, 
  ShieldCheck, 
  MapPin, 
  PenTool, 
  FileSearch,
  Check,
  Sparkles,
  Calculator,
  LucideIcon
} from "lucide-react";
import { SIMULATOR_STEPS, SimulatorOption } from "@/lib/data/simulator-data";
import { Button } from "@/components/ui/Button";

// --- Icons Map ---
const ICON_MAP: Record<string, LucideIcon> = {
  Rocket, TrendingUp, Brush, 
  Layout, ShoppingBag, Search, Palette,
  ShieldCheck, MapPin, PenTool, FileSearch
};

// --- State Management ---
type State = {
  currentStepIndex: number;
  selections: Record<string, string[]>; // stepId -> optionIds[]
  totalPrice: number;
};

type Action = 
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "TOGGLE_SELECTION", stepId: string, optionId: string, price: number, multiSelect: boolean }
;

const initialState: State = {
  currentStepIndex: 0,
  selections: {},
  totalPrice: 0,
};

function simulatorReducer(state: State, action: Action): State {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, currentStepIndex: Math.min(state.currentStepIndex + 1, SIMULATOR_STEPS.length) };
    case "PREV_STEP":
      return { ...state, currentStepIndex: Math.max(state.currentStepIndex - 1, 0) };
    case "TOGGLE_SELECTION": {
      const { stepId, optionId, price, multiSelect } = action;
      const currentSelections = state.selections[stepId] || [];
      const isSelected = currentSelections.includes(optionId);
      
      let newSelections: string[];
      let priceDelta = 0;

      if (multiSelect) {
        if (isSelected) {
          newSelections = currentSelections.filter(id => id !== optionId);
          priceDelta = -price;
        } else {
          newSelections = [...currentSelections, optionId];
          priceDelta = price;
        }
      } else {
        // Single select: remove previous selection price if exists, add new
        const prevOptionId = currentSelections[0];
        const prevOption = SIMULATOR_STEPS.find(s => s.id === stepId)?.options.find(o => o.id === prevOptionId);
        const prevPrice = prevOption?.price || 0;
        
        // If clicking same, do nothing or deselect? Usually radio behavior implies enforcing one.
        // Let's implement toggle for single select too if needed, but usually it's switch.
        newSelections = [optionId];
        priceDelta = price - prevPrice;
      }

      return {
        ...state,
        selections: { ...state.selections, [stepId]: newSelections },
        totalPrice: state.totalPrice + priceDelta
      };
    }
    default:
      return state;
  }
}

export function CostSimulator() {
  const [state, dispatch] = useReducer(simulatorReducer, initialState);
  const currentStep = SIMULATOR_STEPS[state.currentStepIndex];
  const isLastStep = state.currentStepIndex === SIMULATOR_STEPS.length;

  const handleSelection = (option: SimulatorOption) => {
    if (!currentStep) return;
    dispatch({ 
      type: "TOGGLE_SELECTION", 
      stepId: currentStep.id, 
      optionId: option.id, 
      price: option.price, 
      multiSelect: currentStep.multiSelect || false 
    });
  };

  const currentSelectionIds = currentStep ? (state.selections[currentStep.id] || []) : [];
  const canProceed = currentSelectionIds.length > 0 || (currentStep?.id === "options"); // Options are optional

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      
      {/* Header / Progress */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-xs font-medium mb-6">
          <Calculator className="w-3 h-3" />
          <span>Simulateur de Devis</span>
        </div>
        <div className="flex justify-center items-center gap-2 mb-4" aria-hidden="true">
           {SIMULATOR_STEPS.map((_, idx) => (
             <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx <= state.currentStepIndex ? "w-8 bg-primary" : "w-2 bg-foreground/10"
                }`} 
             />
           ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Content (Questions) */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {!isLastStep ? (
              <m.div
                key={state.currentStepIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card/30 backdrop-blur-md border border-border rounded-3xl p-8 min-h-[400px]"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">{currentStep?.title}</h2>
                  <p className="text-muted-foreground text-lg">{currentStep?.subtitle}</p>
                </div>

                <div className="grid gap-4">
                  {currentStep?.options.map((option) => {
                    const IconComponent = ICON_MAP[option.icon || "Rocket"] ?? Rocket;
                    const isSelected = currentSelectionIds.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelection(option)}
                        aria-pressed={isSelected}
                        className={`group relative flex items-center gap-6 p-6 rounded-2xl border text-left transition-all duration-300 ${
                          isSelected 
                            ? "bg-ocean/10 border-ocean shadow-[0_0_30px_-10px_rgba(14,165,233,0.3)]" 
                            : "bg-background/20 border-border hover:border-border hover:bg-foreground/5"
                        }`}
                      >
                        <div className={`p-3 rounded-xl transition-colors ${
                          isSelected ? "bg-primary text-white" : "bg-foreground/5 text-muted-foreground group-hover:text-foreground"
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`font-semibold text-lg ${isSelected ? "text-ocean" : "text-foreground"}`}>
                              {option.label}
                            </span>
                            {option.recommended && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-accent/20 text-accent rounded-full">
                                Recommandé
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                           isSelected ? "border-ocean bg-primary text-white" : "border-border"
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </m.div>
            ) : (
             <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-linear-to-br from-ocean/20 to-accent/10 border border-border rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center"
              >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)]">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">Estimation finalisée !</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Votre projet est unique. Discutons-en pour affiner cette estimation.
                  </p>
                  <Button size="lg" className="w-full max-w-sm text-lg h-14 bg-white text-ocean hover:bg-foreground/90">
                    Réserver mon appel stratégique
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">Sans engagement. Audit offert (30min).</p>
              </m.div>
            )}
          </AnimatePresence>
          
          <div className="flex justify-between mt-8">
            {!isLastStep && (
                <>
                <button 
                    onClick={() => dispatch({ type: "PREV_STEP" })}
                    disabled={state.currentStepIndex === 0}
                    className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-0 transition-opacity"
                >
                    Retour
                </button>
                <Button 
                    onClick={() => dispatch({ type: "NEXT_STEP" })}
                    disabled={!canProceed}
                    className="gap-2 px-8"
                >
                    Continuer <ArrowRight className="w-4 h-4" />
                </Button>
                </>
            )}
            {isLastStep && (
                 <button 
                    onClick={() => dispatch({ type: "PREV_STEP" })}
                    className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                    Modifier mes choix
                </button>
            )}
          </div>
        </div>

        {/* Sidebar / Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-card/20 backdrop-blur-md border border-border rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-ocean" />
                Récapitulatif
            </h3>
            
            <div className="space-y-4 mb-8 min-h-[200px]">
                {Object.entries(state.selections).map(([stepId, optionIds]) => {
                    const step = SIMULATOR_STEPS.find(s => s.id === stepId);
                    if (!step || optionIds.length === 0) return null;
                    return (
                        <div key={stepId} className="space-y-2">
                             <p className="text-xs font-bold uppercase text-muted-foreground tracking-wider">{step.title}</p>
                             {optionIds.map(optId => {
                                 const opt = step.options.find(o => o.id === optId);
                                 if (!opt) return null;
                                 return (
                                     <div key={optId} className="flex justify-between items-center text-sm">
                                         <span>{opt.label}</span>
                                         <span className="font-mono text-ocean-light">{opt.price > 0 ? `+${opt.price}€` : "inclus"}</span>
                                     </div>
                                 );
                             })}
                             <div className="h-px bg-foreground/5 my-2" />
                        </div>
                    );
                })}
                 {Object.keys(state.selections).length === 0 && (
                    <p className="text-sm text-muted-foreground italic">Sélectionnez vos options pour voir l&apos;estimation...</p>
                )}
            </div>

            <div className="pt-6 border-t border-border">
                <div className="flex justify-between items-end mb-2" aria-live="polite">
                    <span className="sr-only">Estimation mise à jour&nbsp;: {state.totalPrice} euros hors TVA.</span>
                    <span className="text-muted-foreground">Estimation</span>
                    <div className="text-right">
                         <span className="block text-4xl font-bold text-white tracking-tight">
                            {state.totalPrice}<span className="text-2xl text-ocean">€</span>
                         </span>
                         <span className="text-xs text-muted-foreground">Hors TVA</span>
                    </div>
                </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
