import Link from "next/link";
import { SectionHeading } from "@/components";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services | Intsimbi Concepts",
  description:
    "Explore structural steel, stainless steelwork, and custom metal fabrication services from Intsimbi Concepts in the Western Cape.",
  path: "/services",
  keywords: ["structural steel fabrication western cape", "custom steel fabrication western cape"]
});

const featuredServices = [
  services.find((service) => service.id === "structural-steel"),
  services.find((service) => service.id === "stainless-steel"),
  services.find((service) => service.id === "metal-work")
].filter((service): service is NonNullable<typeof service> => Boolean(service));

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Steel Fabrication Services for Commercial and Industrial Projects"
            description="Intsimbi Concepts delivers structural steel, stainless steelwork, and custom metal fabrication solutions for clients across the Western Cape."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <article key={service.id} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-brand-primary">{service.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{service.detailedDescription}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {service.highlights.slice(0, 5).map((item) => (
                  <li key={item} className="rounded-md bg-brand-background px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-block rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                View Service Details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-brand-background p-8">
            <h3 className="text-2xl font-bold text-brand-primary">Need support with a steel package?</h3>
            <p className="mt-3 max-w-3xl text-slate-600">
              Send us your scope or drawings and we will provide a practical quotation with fabrication and installation
              planning aligned to your timeline.
            </p>
            <Link
              href="/request-a-quote"
              className="mt-6 inline-block rounded-md bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
