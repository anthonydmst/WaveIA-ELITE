import { getAllResources } from "@/lib/mdx";
import { Link } from "next-view-transitions";
import { MoveRight, Calendar } from "lucide-react";
import NextImage from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centre de Ressources & Guides SEO | WaveIA Pays Basque",
  description: "Guides experts, articles de blog et outils pour booster votre visibilité à Bayonne, Biarritz et Anglet.",
  alternates: { canonical: "/ressources" },
};

export default function ResourcesPage() {
  const resources = getAllResources();

  // Featured resource is the first one
  const featured = resources[0];
  const others = resources.slice(1);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-ocean font-medium tracking-wider uppercase text-sm mb-4 block">Académie WaveIA</span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Centre de <span className="text-gradient">Ressources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Décryptez les stratégies digitales qui fonctionnent au Pays Basque.
            Conseils pratiques pour votre visibilité locale.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Nos guides sont rédigés par des experts du référencement local à Bayonne, Biarritz et Anglet. 
            Que vous soyez restaurateur, artisan ou profession libérale, vous trouverez ici des ressources 
            concrètes pour optimiser votre fiche Google Business Profile, améliorer votre positionnement SEO 
            et convertir plus de visiteurs en clients.
          </p>
        </div>

        {/* Why Read Our Resources - Content Densification */}
        <div className="max-w-4xl mx-auto mb-20 p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border">
          <h2 className="text-2xl font-bold mb-6 text-center">Notre approche pédagogique</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-ocean">📚 Guides complets et structurés</h3>
              <p className="text-sm text-muted-foreground">
                Chaque ressource est un guide approfondi, pas un article de 500 mots recyclé. Nous couvrons 
                les sujets de A à Z avec des exemples concrets adaptés aux entreprises locales : restaurants, 
                artisans BTP, hébergeurs touristiques, professions libérales.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-ocean">🎯 Focus Pays Basque & Landes</h3>
              <p className="text-sm text-muted-foreground">
                Le référencement local n&apos;est pas le même à Paris qu&apos;à Bayonne. Nos guides intègrent les 
                spécificités régionales : saisonnalité touristique, concurrence locale, mots-clés géolocalisés, 
                et les habitudes de recherche des habitants du BAB.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-ocean">✅ Checklists téléchargeables</h3>
              <p className="text-sm text-muted-foreground">
                Chaque guide contient des listes de vérification pratiques que vous pouvez suivre étape par étape. 
                Optimisation de fiche Google My Business, audit SEO de votre site, préparation de votre stratégie 
                de contenu : tout est actionnable immédiatement.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-ocean">🔄 Mises à jour régulières</h3>
              <p className="text-sm text-muted-foreground">
                Google change ses algorithmes plusieurs fois par an. Nos guides sont mis à jour pour refléter 
                les dernières bonnes pratiques SEO et les évolutions des outils (Search Console, Analytics 4, 
                Business Profile). Vous avez toujours accès à l&apos;information la plus récente.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="mb-20">
            <Link href={`/ressources/${featured.slug}`} className="group relative block rounded-3xl overflow-hidden border border-border bg-card/50 hover:border-ocean/30 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0 md:h-[500px]">
                <div className="relative h-[300px] md:h-full overflow-hidden">
                   {/* Placeholder or Actual Image */}
                   <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black" />
                   {featured.metadata.image && (
                     <NextImage
                        src={featured.metadata.image}
                        alt={featured.metadata.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                     />
                   )}
                   <div className="absolute inset-0 bg-ocean/20 mix-blend-overlay" />
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-ocean/10 text-ocean border border-ocean/20 uppercase tracking-widest">
                        {featured.metadata.category}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        {new Date(featured.metadata.publishedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight group-hover:text-ocean transition-colors">
                    {featured.metadata.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
                    {featured.metadata.description}
                  </p>
                  
                  <span className="flex items-center gap-2 text-ocean font-bold mt-auto group-hover:translate-x-2 transition-transform">
                    Lire le guide <MoveRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid of other articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((resource) => (
            <Link key={resource.slug} href={`/ressources/${resource.slug}`} className="group flex flex-col h-full bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-ocean/30 hover:-translate-y-1 transition-all duration-300">
               <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900" />
                    {resource.metadata.image && (
                        <NextImage 
                            src={resource.metadata.image} 
                            alt={resource.metadata.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        />
                    )}
               </div>
               <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-ocean uppercase tracking-wider">{resource.metadata.category}</span>
                        <span className="text-xs text-muted-foreground">{new Date(resource.metadata.publishedAt).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-ocean transition-colors line-clamp-2">
                        {resource.metadata.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                        {resource.metadata.description}
                    </p>
                    <span className="mt-auto flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-ocean transition-colors">
                        Lire l&apos;article <MoveRight size={14} />
                    </span>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
