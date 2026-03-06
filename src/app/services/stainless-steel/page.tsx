import Link from "next/link";
import { CTASection, SectionHeading } from "@/components";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Stainless Steel Fabrication | Intsimbi Concepts",
  description:
    "Stainless steel fabrication in the Western Cape for commercial kitchens, counters, sinks, extractor hoods, and food processing equipment.",
  path: "/services/stainless-steel",
  keywords: ["stainless steel fabrication cape town", "steel fabrication western cape"]
});

const offerings = [
  {
    title: "Commercial Kitchens",
    description:
      "Custom stainless fabrication and installation for restaurant and hospitality kitchen environments."
  },
  {
    title: "Counters",
    description:
      "Durable stainless counter systems built for hygiene, heavy use, and efficient operations."
  },
  {
    title: "Sinks",
    description:
      "Fabricated sink units and wash stations designed to suit practical workflow requirements."
  },
  {
    title: "Extractor Hoods",
    description:
      "Precision stainless hoods and associated components for compliant extraction performance."
  },
  {
    title: "Food Processing Equipment",
    description:
      "Project-specific stainless fabrication for food processing and handling facilities."
  }
];

const benefits = [
  "Hygienic, easy-to-maintain stainless surfaces",
  "Workshop precision for accurate site installation",
  "Custom sizing to match operational workflow",
  "Reliable fabrication quality for high-use environments"
];

export default function StainlessSteelPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service"
            title="Stainless Steelwork"
            description="Intsimbi Concepts fabricates stainless steel solutions for commercial kitchens, hospitality operations, and food-related facilities across the Western Cape."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-primary">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <article>
            <h2 className="text-2xl font-bold text-brand-primary">Designed for Hygiene and Durability</h2>
            <p className="mt-4 text-slate-600">
              Stainless steel fabrication requires practical detailing and consistent finish quality. Our process is built
              to support cleanability, long service life, and efficient use in demanding operational settings.
            </p>
            <p className="mt-4 text-slate-600">
              We work with project teams to align fabrication outputs with kitchen and food facility performance needs.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-brand-primary">Why Clients Choose Our Stainless Work</h2>
            <ul className="mt-4 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-brand-background p-4 text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <CTASection
          title="Need stainless fabrication for a kitchen or processing site?"
          description="Share your project details to receive a responsive quotation and fabrication plan."
          ctaLabel="Request Stainless Steel Quote"
          ctaHref="/request-a-quote"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <Link href="/services" className="text-sm font-semibold text-brand-accent">
          ← Back to all services
        </Link>
      </section>
    </>
  );
}
