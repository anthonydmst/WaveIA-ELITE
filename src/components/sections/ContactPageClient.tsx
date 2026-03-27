"use client";

import { useActionState, useEffect, useState } from "react";


import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Loader2,
} from "lucide-react";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbItem } from "@/lib/breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";

import { submitContactForm } from "@/app/actions/contact";
import { type ContactFormData } from "@/lib/validations/contact";
import { CONTACT_INFO, PROJECT_TYPES, BUDGET_RANGES } from "@/lib/data";
import { StoreLocator } from "./StoreLocator";

const contactInfo = CONTACT_INFO;
const projectTypes = PROJECT_TYPES;
const budgetRanges = BUDGET_RANGES;

// ... existing imports

export function ContactPageClient({ items }: { items?: BreadcrumbItem[] }) {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  useEffect(() => {
    if (state?.success) {
      // Handle success (e.g., reset form or show message)
    }
  }, [state]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev: typeof formState) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-20 light:opacity-30" />
          <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-50 light:block hidden" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex justify-start">
             <Breadcrumbs items={items} />

          </div>
          <div className="text-center max-w-3xl mx-auto animate-hero-fade-up">

            <span className="text-ocean text-sm font-semibold uppercase tracking-wider">
              Contact
            </span>
            <SectionHeader as="h1" size="page" align="center" className="mt-4 mb-6">
              Parlons de votre{" "}
              <span className="text-gradient">projet</span>
            </SectionHeader>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Vous avez une idée, un projet ou simplement une question ?
              Contactez-nous et obtenez une réponse sous 24h.
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Basés à Biarritz, nous accompagnons les entreprises du Pays Basque et de la Côte Landaise 
              dans leur transformation digitale. Site internet, référencement SEO ou stratégie de communication : 
              chaque projet débute par un échange pour comprendre vos besoins et vos objectifs.
            </p>
          </div>

        </div>
      </section>

      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">

              <div>
                <SectionHeader as="h2" size="subsection" className="mb-4">
                  Coordonnées
                </SectionHeader>
                <p className="text-muted-foreground mb-6">
                  N&apos;hésitez pas à nous contacter par le moyen qui vous
                  convient le mieux.
                </p>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-ocean/30 transition-colors group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-ocean/10 rounded-lg shrink-0 group-hover:bg-ocean/20 transition-colors">
                        {item.iconName === "Mail" && <Mail className="w-5 h-5 text-ocean" />}
                        {item.iconName === "Phone" && <Phone className="w-5 h-5 text-ocean" />}
                        {item.iconName === "MapPin" && <MapPin className="w-5 h-5 text-ocean" />}
                        {item.iconName === "Clock" && <Clock className="w-5 h-5 text-ocean" />}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-medium mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium hover:text-ocean transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-linear-to-br from-ocean/10 to-accent/10 rounded-2xl border border-ocean/20 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-ocean" />
                  <span className="font-bold">Consultation gratuite</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Réservez un appel de 30 minutes pour discuter de votre projet
                  et obtenir des conseils personnalisés.
                </p>
                <button className="w-full px-4 py-3 bg-ocean text-background font-bold rounded-lg hover:bg-ocean/90 transition-all hover:scale-[1.02] shadow-lg shadow-ocean/20">
                  Réserver un créneau
                </button>
              </div>
            </div>


            <div className="lg:col-span-2">

              {state?.success ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-card/50 backdrop-blur-sm rounded-2xl border border-white/5">
                  <div className="w-16 h-16 flex items-center justify-center bg-ocean/20 rounded-full mb-6 ring-4 ring-ocean/10">
                    <CheckCircle className="w-8 h-8 text-ocean" />
                  </div>
                  <SectionHeader as="h3" size="subsection" className="mb-3">Message envoyé !</SectionHeader>
                  <p className="text-muted-foreground max-w-md">
                    Merci pour votre message. Notre équipe vous répondra sous 24h
                    maximum. À très bientôt !
                  </p>
                </div>
              ) : (
                <form
                  action={(formData: FormData) => {
                    const data = {
                      name: formData.get("name") as string,
                      email: formData.get("email") as string,
                      phone: formData.get("phone") as string,
                      company: formData.get("company") as string,
                      projectType: formData.get("projectType") as string,
                      budget: formData.get("budget") as string,
                      message: formData.get("message") as string,
                    };
                    formAction(data as ContactFormData); // Assuming validation happens in action
                  }}
                  className="p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-white/5 shadow-2xl"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-ocean" />
                    <span className="font-semibold">
                      Décrivez votre projet
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-ocean transition-colors"
                        placeholder="Jean Dupont"
                      />
                      {state?.errors?.name && (
                        <p className="mt-1 text-sm text-red-400">{state.errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-ocean transition-colors"
                        placeholder="jean@entreprise.fr"
                      />
                      {state?.errors?.email && (
                        <p className="mt-1 text-sm text-red-400">{state.errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-ocean transition-colors"
                        placeholder="06 00 00 00 00"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-ocean transition-colors"
                        placeholder="Ma Super Entreprise"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium mb-2"
                      >
                        Type de projet *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-ocean transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Sélectionnez...</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium mb-2"
                      >
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-ocean transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Sélectionnez...</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Décrivez votre projet *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-ocean transition-colors resize-none"
                        placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      * Champs obligatoires
                    </p>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="group relative px-8 py-3 text-base font-semibold overflow-hidden rounded-full disabled:opacity-50"
                    >
                      <span className="absolute inset-0 bg-linear-to-r from-ocean to-accent" />
                      <span className="absolute inset-0 bg-linear-to-r from-ocean-light to-ocean opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative flex items-center gap-2 text-background">
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 animate-in">
            <SectionHeader as="h2" size="section" align="center" className="mb-4">
              Retrouvez-nous sur la{" "}
              <span className="font-heading italic text-ocean-light">
                Côte Basque
              </span>
            </SectionHeader>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous intervenons sur l&apos;ensemble du territoire : Biarritz, Bayonne,
              Anglet et toute la côte basque française.
            </p>
          </div>

          {/* Integrated StoreLocator (Grade A+) */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
             <StoreLocator />
          </div>
        </div>
      </section>
    </div>
  );
}
