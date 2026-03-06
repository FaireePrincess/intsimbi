import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts } from "@/data/blogPosts";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return buildMetadata({
      title: "Blog Post | Intsimbi Concepts",
      description: "Steel fabrication insight article from Intsimbi Concepts.",
      path: "/blog"
    });
  }

  return buildMetadata({
    title: `${post.title} | Intsimbi Concepts`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: ["steel fabrication western cape", post.category.toLowerCase()]
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link href="/blog" className="text-sm font-semibold text-brand-accent">
            ← Back to Blog
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-brand-accent">{post.category}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-brand-primary">{post.title}</h1>
          <p className="mt-3 text-sm text-slate-500">Published {formatDate(post.publishDate)}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={700}
          priority
          className="h-auto w-full rounded-xl border border-slate-200 object-cover"
        />

        <article className="mt-8 space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </article>

        <aside className="mt-8 rounded-xl border border-slate-200 bg-brand-background p-6">
          <h2 className="text-lg font-semibold text-brand-primary">Facebook Post Snippet</h2>
          <p className="mt-3 text-sm text-slate-700">{post.facebookSnippet}</p>
        </aside>
      </section>
    </>
  );
}
