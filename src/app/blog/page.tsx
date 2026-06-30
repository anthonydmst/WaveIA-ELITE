import { getAllBlogPosts } from "@/lib/mdx";
import { Link } from "next-view-transitions";
import { MoveRight, Calendar } from "lucide-react";
import NextImage from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Blog de l'Agence | WaveIA Pays Basque",
  description: "Actualités, vie de l'agence et brèves sur le digital au Pays Basque.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  // Featured resource is the first one
  const featured = posts[0];
  const others = posts.slice(1);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-ocean font-medium tracking-wider uppercase text-sm mb-4 block">News & Actus</span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Le Blog <span className="text-gradient">WaveIA</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Restez à jour sur les dernières tendances et la vie de l&apos;agence.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Depuis Biarritz, nous partageons nos retours d&apos;expérience sur le développement web, 
            le référencement local et les stratégies digitales adaptées aux entreprises du Pays Basque. 
            Artisans, commerçants, restaurateurs : découvrez des conseils pratiques pour booster votre présence en ligne.
          </p>
        </div>

        {/* Why Read Our Blog - Content Densification */}
        <div className="max-w-4xl mx-auto mb-20 p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border">
          <h2 className="text-2xl font-bold mb-6 text-center">Pourquoi lire le blog WaveIA ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-ocean">🎯 Expertise locale certifiée</h3>
              <p className="text-sm text-muted-foreground">
                Nous ne sommes pas une agence parisienne qui parle du Pays Basque de loin. Nous vivons et travaillons 
                à Biarritz, nous connaissons les spécificités de Bayonne, Anglet, Saint-Jean-de-Luz et Hossegor. 
                Nos conseils sont adaptés à votre réalité terrain.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-ocean">💡 Conseils actionnables</h3>
              <p className="text-sm text-muted-foreground">
                Pas de théorie vide. Chaque article contient des actions concrètes que vous pouvez mettre en œuvre 
                dès maintenant pour améliorer votre visibilité en ligne, optimiser votre fiche Google Business Profile 
                ou augmenter vos conversions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-ocean">🔧 Technologie décryptée</h3>
              <p className="text-sm text-muted-foreground">
                Next.js, React, SEO technique, Core Web Vitals... Nous vulgarisons les concepts complexes pour que 
                vous compreniez pourquoi un site web moderne et performant est un investissement rentable, 
                pas une dépense obscure.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-ocean">📈 Retours d&apos;expérience réels</h3>
              <p className="text-sm text-muted-foreground">
                Nous partageons nos succès, nos échecs, et les leçons apprises avec nos clients locaux. 
                Des études de cas concrètes qui vous montrent ce qui fonctionne vraiment pour les TPE et PME 
                du sud-ouest de la France. Découvrez aussi nos services de <Link href="/referencement-seo/netlinking" className="text-ocean underline underline-offset-2 decoration-ocean/40 hover:decoration-ocean">netlinking</Link> et 
                de <Link href="/agence-communication/strategie-digitale" className="text-ocean underline underline-offset-2 decoration-ocean/40 hover:decoration-ocean">stratégie digitale</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="mb-20">
            <Link href={`/blog/${featured.slug}`} className="group relative block rounded-3xl overflow-hidden border border-border bg-card/50 hover:border-ocean/30 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0 md:h-[500px]">
                <div className="relative h-[300px] md:h-full overflow-hidden">
                   {/* Placeholder or Actual Image */}
                   <div className="absolute inset-0 bg-ocean/20 group-hover:scale-105 transition-transform duration-700" />
                   {featured.metadata.image && (
                     <NextImage 
                       src={featured.metadata.image} 
                       alt={featured.metadata.title}
                       fill
                       className="object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                   )}
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-ocean mb-4">
                    <span className="px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 font-medium">
                        {featured.metadata.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={14} />
                        {featured.metadata.publishedAt}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-ocean transition-colors">
                    {featured.metadata.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                    {featured.metadata.description}
                  </p>
                  
                  <span className="mt-auto flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-ocean transition-colors">
                    Lire l&apos;article <MoveRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid of other articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-ocean/30 hover:-translate-y-1 transition-all duration-300">
               <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900" />
                    {post.metadata.image && (
                        <NextImage 
                            src={post.metadata.image} 
                            alt={post.metadata.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                        />
                    )}
               </div>
               <div className="p-6 flex flex-col grow">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-ocean uppercase tracking-wider">{post.metadata.category}</span>
                        <span className="text-xs text-muted-foreground">{post.metadata.publishedAt}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-ocean transition-colors line-clamp-2">
                        {post.metadata.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                        {post.metadata.description}
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
