import Link from "next/link";
import { CTASection, SectionHeading } from "@/components";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Metal Work and Custom Fabrication | Intsimbi Concepts",
  description:
    "Custom steel fabrication in the Western Cape including balustrades, gates, custom frames, decorative metal work, and architectural steel.",
  path: "/services/metal-work-custom-fabrication",
  keywords: ["custom steel fabrication western cape", "steel fabrication george"]
});

const offerings = [
  {
    title: "Balustrades",
    description: "Fabricated steel balustrade systems for commercial and industrial safety and design requirements."
  },
  {
    title: "Gates",
    description: "Durable custom steel gates produced for access control, security, and everyday reliability."
  },
  {
    title: "Custom Frames",
    description: "Project-specific frame fabrication for machinery support, structures, and architectural elements."
  },
  {
    title: "Decorative Metal Work",
    description: "Detail-focused decorative steel components that combine aesthetics with fabrication quality."
  },
  {
    title: "Architectural Steel",
    description: "Architectural steel fabrication supporting modern commercial spaces and tailored design outcomes."
  }
];

const approach = [
  "Design intent translated into practical fabrication outputs",
  "Workshop precision for cleaner site fit and reduced rework",
  "Close collaboration with contractors, designers, and architects",
  "Installation planning aligned with project timelines"
];

export default function MetalWorkCustomFabricationPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service"
            title="Metal Work and Custom Fabrication"
            description="Intsimbi Concepts delivers custom metal work and architectural steel solutions for clients needing precision, durability, and reliable project delivery."
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
            <h2 className="text-2xl font-bold text-brand-primary">Custom Fabrication That Works on Site</h2>
            <p className="mt-4 text-slate-600">
              Custom steelwork projects require detailed planning to ensure fabrication aligns with installation realities.
              We focus on practical detailing and controlled workshop production to deliver components that fit and perform.
            </p>
            <p className="mt-4 text-slate-600">
              From one-off feature elements to repeatable fabricated components, we maintain quality and consistency.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-brand-primary">Our Delivery Approach</h2>
            <ul className="mt-4 space-y-3">
              {approach.map((item) => (
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
          title="Need custom steel fabrication for your project?"
          description="Send your scope or drawings and receive a tailored quotation with practical timelines."
          ctaLabel="Request Custom Fabrication Quote"
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
