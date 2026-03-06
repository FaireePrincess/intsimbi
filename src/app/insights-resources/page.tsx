import Link from "next/link";
import { CTASection, SectionHeading } from "@/components";
import { blogPosts } from "@/data/blogPosts";
import { buildMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Insights & Resources | Intsimbi Concepts",
  description:
    "Explore practical steel fabrication resources, planning guidance, and project insights for Western Cape contractors and businesses.",
  path: "/insights-resources",
  keywords: ["steel fabrication western cape", "structural steel fabrication western cape", "custom steel fabrication western cape"]
});

const resourceCategories = [
  {
    title: "RFQ Preparation",
    description: "Guides to help teams submit complete project information for faster, more accurate quoting."
  },
  {
    title: "Cost & Planning",
    description: "Articles covering fabrication cost drivers, timeline planning, and scope control considerations."
  },
  {
    title: "Industry Applications",
    description: "Practical examples for construction, industrial, agricultural, and hospitality project environments."
  }
];

const latestResources = blogPosts.slice(0, 3);

export default function InsightsResourcesPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insights & Resources"
            title="Practical Steel Fabrication Knowledge"
            description="Use these resources to improve project preparation, reduce quoting friction, and plan fabrication work more effectively."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {resourceCategories.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-primary">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-primary">Latest Resources</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {latestResources.map((post) => (
              <article key={post.id} className="rounded-xl border border-slate-200 bg-brand-background p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{formatDate(post.publishDate)}</p>
                <h3 className="mt-2 text-lg font-semibold text-brand-primary">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-brand-accent">
                  Read resource
                </Link>
              </article>
            ))}
          </div>
          <Link href="/blog" className="mt-8 inline-block text-sm font-semibold text-brand-accent">
            Browse all blog resources →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <CTASection
          title="Need project-specific guidance?"
          description="Share your project details and our team will help you scope the right fabrication solution."
          ctaLabel="Request Guidance and Quote"
          ctaHref="/request-a-quote"
        />
      </section>
    </>
  );
}
