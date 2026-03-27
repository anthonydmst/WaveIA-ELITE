import { getResourceBySlug, getResourceSlugs } from "@/lib/mdx";
import ArticleHeader from "@/components/blog/ArticleHeader";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/blog/MDXComponents";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";

// Generate Metadata
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const resource = getResourceBySlug(params.slug);
  
  if (!resource) return {};

  return {
    title: `${resource.metadata.title} | WaveIA Pays Basque`,
    description: resource.metadata.description,
    openGraph: {
        title: resource.metadata.title,
        description: resource.metadata.description,
        type: 'article',
        publishedTime: resource.metadata.publishedAt,
        authors: [resource.metadata.author],
    }
  };
}

// Static Params for SSG
export async function generateStaticParams() {
  const slugs = getResourceSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export default async function ResourcePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const resource = getResourceBySlug(params.slug);

  if (!resource) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Back Link */}
        <div className="max-w-4xl mx-auto mb-8">
            <Link href="/ressources" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ocean transition-colors">
                <ArrowLeft size={16} />
                Retour aux ressources
            </Link>
        </div>

        <ArticleHeader metadata={resource.metadata} />
        
        <article className="prose prose-invert prose-lg prose-ocean max-w-4xl mx-auto
            prose-headings:font-heading prose-headings:font-bold 
            prose-h1:text-4xl prose-h2:text-3xl prose-h2:text-white prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:text-white/90
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-strong:text-white prose-strong:font-bold
            prose-li:text-gray-300
            prose-blockquote:border-ocean prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
        ">
          <MDXRemote 
            source={resource.content} 
            components={MDXComponents} 
          />
        </article>

        {/* CTA Footer Article */}
        <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-white/10">
            <div className="bg-linear-to-r from-ocean/10 to-transparent p-8 rounded-2xl border border-ocean/20">
                <h3 className="text-2xl font-bold font-heading text-white mb-2">Besoin d&apos;aide pour appliquer ces conseils ?</h3>
                <p className="text-gray-400 mb-6">Nos experts sont spécialisés sur le marché local du Pays Basque.</p>
                <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 bg-ocean text-white font-bold rounded-full hover:bg-ocean-light transition-colors">
                    Prendre rendez-vous
                </Link>
            </div>
        </div>
      </div>
    </main>
  );
}
