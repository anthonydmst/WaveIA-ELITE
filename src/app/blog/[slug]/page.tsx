import { getBlogPostBySlug, getBlogSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/blog/MDXComponents";
import ArticleHeader from "@/components/blog/ArticleHeader";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import Script from "next/script";



// Generate Metadata
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);
  if (!post) return;

  return {
    title: `${post.metadata.title} | Blog WaveIA`,
    description: post.metadata.description,
    openGraph: {
        title: post.metadata.title,
        description: post.metadata.description,
        type: 'article',
        publishedTime: post.metadata.publishedAt,
        authors: [post.metadata.author],
    }
  };
}

// Static Params for SSG
export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    description: post.metadata.description,
    author: {
        '@type': 'Person',
        name: post.metadata.author,
    },
    datePublished: post.metadata.publishedAt,
    image: post.metadata.image,
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
        <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Back Link */}
        <div className="max-w-4xl mx-auto mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ocean transition-colors">
                <ArrowLeft size={16} />
                Retour au blog
            </Link>
        </div>

        <ArticleHeader metadata={post.metadata} />
        
        <article className="prose prose-lg prose-ocean max-w-4xl mx-auto
            prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground
            prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-foreground prose-strong:font-bold
            prose-li:text-muted-foreground
            prose-blockquote:border-ocean prose-blockquote:bg-foreground/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
        ">
          <MDXRemote 
            source={post.content} 
            components={MDXComponents} 
          />
        </article>

        {/* CTA Footer Article */}
        <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-border">
            <div className="bg-linear-to-r from-ocean/10 to-transparent p-8 rounded-2xl border border-ocean/20">
                <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Besoin d&apos;aide pour appliquer ces conseils ?</h3>
                <p className="text-muted-foreground mb-6">Nos experts sont spécialisés sur le marché local du Pays Basque.</p>
                <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-ocean-light transition-colors">
                    Prendre rendez-vous
                </Link>
            </div>
        </div>
    </main>
  );
}
