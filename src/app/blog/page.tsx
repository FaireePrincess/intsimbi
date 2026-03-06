import { BlogCard, CTASection, SectionHeading } from "@/components";
import { blogPosts } from "@/data/blogPosts";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog | Intsimbi Concepts",
  description:
    "Insights on steel fabrication, pricing, project planning, and stainless steelwork for Western Cape contractors and businesses.",
  path: "/blog",
  keywords: ["steel fabrication western cape", "stainless steel fabrication cape town", "custom steel fabrication western cape"]
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Blog"
            title="Steel Fabrication Insights"
            description="Practical articles to help contractors, developers, and facility teams plan steel fabrication work more effectively."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <article className="rounded-2xl border border-slate-200 bg-brand-background p-8">
            <h2 className="text-2xl font-bold text-brand-primary">Built for Weekly or Biweekly Facebook Content</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Each blog topic is structured to be repurposed into short social posts for Facebook, helping keep your
              audience informed while supporting long-term SEO growth.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <CTASection
          title="Need advice on a fabrication requirement?"
          description="Contact our team to discuss technical requirements and request a practical quotation."
          ctaLabel="Speak to Intsimbi Concepts"
          ctaHref="/contact"
        />
      </section>
    </>
  );
}
