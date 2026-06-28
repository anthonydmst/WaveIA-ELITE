"use client";

import { HelpCircle, ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  {
    question: "Comment choisir le partenaire idéal pour mon projet web ?",
    answer:
      "Au-delà des références et des technologies, choisissez une agence qui comprend vos enjeux business. Une bonne agence doit être capable de démontrer une méthodologie claire. Chez nous, nous combinons créativité humaine et puissance de l’IA pour auditer votre marché, analyser vos concurrents et vous proposer une solution sur-mesure.",
  },
  {
    question: "Nous avons déjà un site, pouvez-vous juste l'améliorer ?",
    answer:
      "Nous réalisons systématiquement un audit préalable. Si votre base technique (code, CMS) est saine et évolutive, nous pouvons l'optimiser et y greffer nos modules. Si la technologie est obsolète et freine votre croissance, nous vous conseillerons une refonte stratégique.",
  },
  {
    question: "Mon site va-t-il réellement générer un retour sur investissement (ROI) ?",
    answer:
      "Un site internet n'est pas une dépense, c'est un actif. Nous ne créons pas de simples \"cartes de visite\", mais de véritables machines à convertir. En alliant un design captivant à une structure technique optimisée, nous transformons votre trafic en un flux constant de prospects qualifiés.",
  },
  {
    question: "Je n'y connais rien en IA, est-ce un problème ?",
    answer:
      "Absolument pas. L'Intelligence Artificielle est notre moteur, pas le vôtre. Vous n'avez aucune compétence technique à avoir. Nous l'utilisons en coulisses pour automatiser les tâches chronophages et vous livrer une plateforme plus performante, plus rapidement.",
  },
  {
    question: "Quel est le budget moyen pour un projet de ce type ?",
    answer:
      "Chaque écosystème est sur-mesure. Cependant, l'intégration de l'IA dans nos process de production nous permet de réduire drastiquement nos coûts. Lors de notre premier échange, nous définirons ensemble le périmètre exact pour vous proposer un devis transparent, sans aucun frais caché, souvent bien plus compétitif qu'une agence classique.",
  },
  {
    question: "Quel est le délai de livraison pour mon site internet ?",
    answer:
      "Notre agilité est notre force. Grâce à nos workflows optimisés, nous nous engageons sur un délai de livraison de 2 à 3 semaines pour la majorité de nos projets. Notre priorité reste une mise en ligne rapide pour que votre activité commence à porter ses fruits sans attendre.",
  },
  {
    question: "Qu'est-ce que le SEO et pourquoi déléguer cette mission ?",
    answer:
      "Le SEO est l'art de dominer les résultats de recherche Google pour capter l'intention de vos futurs clients. Travailler avec nous, c'est bénéficier d'une méthodologie data-driven : nous identifions les opportunités inexploitées par vos concurrents pour vous garantir un positionnement durable en haut de page.",
  },
  {
    question: "Comment se passe la gestion au quotidien une fois le site en ligne ?",
    answer:
      "Vous êtes 100% propriétaire de vos données et de votre outil. Nous vous formons à son utilisation pour être autonome. De plus, nous proposons des accompagnements mensuels pour la maintenance technique (sauvegardes, sécurité 24/7) et pour le pilotage de votre stratégie digitale (SEO, analyse de conversion).",
  },
];

export function WhyChooseUsFAQ() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ambient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--ocean)_0%,transparent_50%)] opacity-[0.05]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-tight">
              Vous avez encore<br />
              <span className="font-heading italic text-gradient-brand">des questions ?</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Retrouvez ici les réponses aux interrogations les plus fréquentes concernant notre accompagnement et nos méthodes.
            </p>
          </div>

          {/* Right Column (Accordion) */}
          <div className="lg:col-span-8">
            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-xl overflow-hidden hover:border-ocean/30 transition-colors shadow-card"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="flex flex-1 items-center justify-between py-5 px-6 font-semibold text-left text-foreground hover:text-ocean-light transition-colors group">
                      <span className="text-lg pr-4">{faq.question}</span>
                      <ChevronDown
                        className="w-5 h-5 text-muted-foreground transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-ocean shrink-0"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-muted-foreground text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-6 pb-5 pt-0 leading-relaxed text-base">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

        </div>
      </div>
    </section>
  );
}
