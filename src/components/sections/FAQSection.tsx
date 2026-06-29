"use client";

import { HelpCircle, ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  {
    question: "Comment choisir le partenaire idéal pour mon projet web ?",
    answer:
      "Au-delà des références et des technologies, choisissez une agence qui comprend vos enjeux business. Une bonne agence doit être capable de démontrer une méthodologie claire. Chez nous, nous combinons créativité humaine et puissance de l’IA pour auditer votre marché, analyser vos concurrents et vous proposer une solution sur-mesure. Ne cherchez pas seulement un exécutant, mais un partenaire qui s’engage sur la pertinence de votre stratégie digitale.",
  },
  {
    question: "Mon site va-t-il réellement générer un retour sur investissement (ROI) ?",
    answer:
      "Un site internet n'est pas une dépense, c'est un actif. Nous ne créons pas de simples \"cartes de visite\", mais de véritables machines à convertir. Grâce à nos outils d'IA, nous simulons les parcours utilisateurs pour placer des appels à l'action (CTA) chirurgicaux. En alliant un design captivant à une structure technique optimisée, nous transformons votre trafic en un flux constant de prospects qualifiés.",
  },
  {
    question: "Comment proposez-vous des tarifs aussi compétitifs ?",
    answer:
      "Nous avons cassé les codes de l'agence traditionnelle. En intégrant l'Intelligence Artificielle au cœur de nos process de production (génération de code, optimisation d'images, rédaction de contenus structurés), nous réduisons drastiquement les tâches chronophages sans jamais sacrifier la qualité. Ces gains de productivité nous permettent de vous offrir des tarifs jusqu'à 40% inférieurs aux agences classiques, tout en maintenant un standard de finition premium.",
  },
  {
    question: "Quel est le délai de livraison pour mon site internet ?",
    answer:
      "Notre agilité est notre force. Grâce à nos workflows optimisés par l'IA, nous nous engageons sur un délai de livraison de 2 semaines maximum pour la majorité de nos projets. Ce délai peut légèrement varier selon la complexité des fonctionnalités demandées, mais notre priorité reste la mise en ligne rapide pour que votre activité commence à porter ses fruits sans attendre.",
  },
  {
    question: "Qu'est-ce que le SEO et pourquoi déléguer cette mission ?",
    answer:
      "Le SEO est l'art de dominer les résultats de recherche pour capter l'intention de vos clients. C’est le levier de croissance le plus rentable à long terme. Travailler avec nous, c'est bénéficier d'une méthodologie data-driven : nous utilisons l'IA pour identifier les opportunités de mots-clés inexploitées par vos concurrents. Nos consultants experts valident et affinent ensuite ces données pour vous garantir un positionnement durable en haut de page.",
  },
  {
    question: "Assurez-vous le suivi et la sécurité après la mise en ligne ?",
    answer:
      "Un site non maintenu est une faille de sécurité et une perte de performance. Nous proposons des forfaits de maintenance préventive incluant la surveillance 24/7, les sauvegardes cloud quotidiennes et les mises à jour de sécurité critiques. Nous ne vous laissons jamais seul : votre site reste rapide, sécurisé et technologiquement à jour pendant que vous vous concentrez sur votre métier.",
  },
  {
    question: "Aurai-je un contrôle total sur mes données et mes statistiques ?",
    answer:
      "Transparence totale. Nous installons et configurons pour vous l'écosystème Google (GA4, Search Console, Tag Manager). Vous disposez d'un tableau de bord clair pour suivre en temps réel vos visites, le comportement de vos usagers et vos taux de conversion. Vous êtes propriétaire de vos données, nous sommes simplement là pour vous aider à les interpréter et à optimiser vos performances.",
  },
];

export function FAQSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--ocean)_0%,transparent_50%)] opacity-[0.03]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              Questions <span className="font-heading italic text-ocean-text">fréquentes</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Tout ce que vous devez savoir avant de démarrer votre projet avec nous. Si vous ne trouvez pas la réponse à votre question, n&apos;hésitez pas à nous contacter directement.
            </p>
          </div>

          {/* Right Column (Accordion) */}
          <div className="lg:col-span-8">
            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-xl overflow-hidden hover:border-ocean/30 transition-colors"
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
