"use client";

import { Scale, Building, Server, Shield } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function LegalPageClient() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-10 light:opacity-25" />
          <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-50 light:block hidden" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <Breadcrumbs />
          </div>
          <div
            className="text-center animate-in"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              <Scale className="w-4 h-4" />
              Informations Légales
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Mentions Légales
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : 24 décembre 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Éditeur */}
            <div
              className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl mb-8 animate-in"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-ocean/10 rounded-xl">
                  <Building className="w-6 h-6 text-ocean" />
                </div>
                <h2 className="text-2xl font-bold m-0">Éditeur du site</h2>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p className="m-0"><strong className="text-foreground">Raison sociale :</strong> WaveIA</p>
                <p className="m-0"><strong className="text-foreground">Forme juridique :</strong> Micro-entreprise (entrepreneur individuel)</p>
                <p className="m-0"><strong className="text-foreground">SIRET :</strong> 753 348 010 00053</p>
                <p className="m-0"><strong className="text-foreground">Adresse :</strong> Technopôle Izarbel, 64210 Bidart, France</p>
                <p className="m-0"><strong className="text-foreground">Email :</strong> contact@waveia.fr</p>
                <p className="m-0"><strong className="text-foreground">Téléphone :</strong> 06 95 91 36 69</p>
                <p className="m-0"><strong className="text-foreground">Directeur de la publication :</strong> Anthony Damestoy</p>
              </div>
            </div>

            {/* Hébergeur */}
            <div
              className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl mb-8 animate-in delay-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-ocean/10 rounded-xl">
                  <Server className="w-6 h-6 text-ocean" />
                </div>
                <h2 className="text-2xl font-bold m-0">Hébergement</h2>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p className="m-0"><strong className="text-foreground">Hébergeur :</strong> Vercel Inc.</p>
                <p className="m-0"><strong className="text-foreground">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p className="m-0"><strong className="text-foreground">Site web :</strong> vercel.com</p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div
              className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl mb-8 animate-in delay-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-ocean/10 rounded-xl">
                  <Shield className="w-6 h-6 text-ocean" />
                </div>
                <h2 className="text-2xl font-bold m-0">Propriété intellectuelle</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, base de données, etc.) est protégé par le droit d&apos;auteur et le droit des marques.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l&apos;autorisation écrite préalable de WaveIA.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de son contenu, des informations qui y sont divulguées engagerait la responsabilité de l&apos;utilisateur et constituerait une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la Propriété Intellectuelle.
                </p>
              </div>
            </div>

            {/* Cookies & Données */}
            <div className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl animate-in delay-300">
              <h2 className="text-2xl font-bold mb-4">Cookies et données personnelles</h2>
              <p className="text-muted-foreground mb-4">
                Pour plus d&apos;informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre <a href="/privacy" className="text-ocean underline underline-offset-2 decoration-ocean/40 hover:decoration-ocean">Politique de Confidentialité</a>.
              </p>
              <p className="text-muted-foreground">
                Ce site n&apos;utilise que des cookies strictement nécessaires à son bon fonctionnement, ainsi qu&apos;une mesure d&apos;audience respectueuse de la vie privée, sans cookie publicitaire ni traceur tiers. Ces usages ne requièrent pas votre consentement préalable.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
