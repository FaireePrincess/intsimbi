import Link from "next/link";
import { CTASection, IndustryCard, SectionHeading } from "@/components";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Industries We Serve | Intsimbi Concepts",
  description:
    "Steel fabrication support for construction, industrial warehousing, agriculture packhouses, and hospitality commercial kitchens across the Western Cape.",
  path: "/industries",
  keywords: ["steel fabrication western cape", "steel fabrication cape town", "steel fabrication george"]
});

const sectorDetails = [
  {
    title: "Construction & Developers",
    text: "We support contractors and developers with structural steel packages that align with build programs, technical requirements, and on-site sequencing."
  },
  {
    title: "Industrial & Warehousing",
    text: "From platform structures to warehouse upgrades, we deliver fabrication and installation solutions for active industrial and logistics environments."
  },
  {
    title: "Agriculture & Packhouses",
    text: "Our team fabricates durable steel components suited to agricultural operations and packhouse facilities requiring reliable long-term performance."
  },
  {
    title: "Hospitality & Commercial Kitchens",
    text: "We fabricate stainless and custom steel elements for restaurants, commercial kitchens, and hospitality operations with hygiene and efficiency in mind."
  }
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Industry-Focused Steel Fabrication"
            description="Intsimbi Concepts provides fabrication and installation services tailored to the commercial and industrial sectors we serve across the Western Cape."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {sectorDetails.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-brand-background p-6">
                <h2 className="text-2xl font-semibold text-brand-primary">{item.title}</h2>
                <p className="mt-3 text-sm text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <CTASection
          title="Looking for a steel partner in your sector?"
          description="Share your project requirements and we will provide a practical quote and fabrication plan."
          ctaLabel="Request Industry Quote"
          ctaHref="/request-a-quote"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <Link href="/services" className="text-sm font-semibold text-brand-accent">
          Explore our services →
        </Link>
      </section>
    </>
  );
}
