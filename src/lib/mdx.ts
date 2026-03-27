import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectories = {
  blog: path.join(process.cwd(), 'src/content/blog'),
  resources: path.join(process.cwd(), 'src/content/resources'),
};

export type ResourceMetadata = {
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  category: string;
  targetCity?: string;
  image?: string;
  slug: string;
  readingTime?: string;
};

export type ContentType = 'blog' | 'resources';

export function getContentSlugs(type: ContentType) {
  const directory = contentDirectories[type];
  if (!fs.existsSync(directory)) {
    return [];
  }
  return fs.readdirSync(directory).filter((file) => file.endsWith('.mdx'));
}

export function getContentBySlug(type: ContentType, slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const directory = contentDirectories[type];
  const fullPath = path.join(directory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    metadata: data as ResourceMetadata,
    content,
  };
}

export function getAllContent(type: ContentType) {
  const slugs = getContentSlugs(type);
  const content = slugs
    .map((slug) => getContentBySlug(type, slug))
    .filter((item): item is NonNullable<typeof item> => item !== null)
    // Sort posts by date in descending order
    .sort((post1, post2) => (post1.metadata.publishedAt > post2.metadata.publishedAt ? -1 : 1));
  return content;
}

// Deprecated compat functions (can be removed later or aliased)
export const getAllResources = () => getAllContent('resources');
export const getResourceBySlug = (slug: string) => getContentBySlug('resources', slug);
export const getResourceSlugs = () => getContentSlugs('resources');

// Blog helpers
export const getAllBlogPosts = () => getAllContent('blog');
export const getBlogPostBySlug = (slug: string) => getContentBySlug('blog', slug);
export const getBlogSlugs = () => getContentSlugs('blog');
