import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blogPost";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

/**
 * BlogCard
 * Purpose: Displays blog article summaries for marketing and SEO listings.
 * Props: `post` blog object containing title, excerpt, date, and slug.
 * Usage: <BlogCard post={post} />
 */
export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Image
        src={post.image}
        alt={post.title}
        width={760}
        height={520}
        loading="lazy"
        className="h-48 w-full object-cover"
      />
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{formatDate(post.publishDate)}</p>
        <h3 className="text-xl font-semibold text-brand-primary">{post.title}</h3>
        <p className="text-sm text-slate-600">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-brand-accent">
          Read more
        </Link>
      </div>
    </article>
  );
}
