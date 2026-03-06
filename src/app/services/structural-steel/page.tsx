import Link from "next/link";
import { CTASection, SectionHeading } from "@/components";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Structural Steel Fabrication | Intsimbi Concepts",
  description:
    "Structural steel fabrication and installation services in the Western Cape, including frames, mezzanines, platforms, stairs, handrails, and warehouse structures.",
  path: "/services/structural-steel",
  keywords: ["structural steel fabrication western cape", "steel fabrication cape town"]
});

const offerings = [
  {
    title: "Steel Frames",
    description: "Primary and secondary steel framing systems fabricated to engineering specifications for commercial and industrial builds."
  },
  {
    title: "Mezzanines",
    description: "Space-efficient steel mezzanine structures designed for warehousing, production, and operational expansion."
  },
  {
    title: "Platforms",
    description: "Fabricated access and process platforms that support safe movement and maintenance in working environments."
  },
  {
    title: "Stairs",
    description: "Durable steel stair systems for internal and external circulation across industrial and commercial sites."
  },
  {
    title: "Handrails",
    description: "Compliant handrail solutions integrated with stairs, walkways, and elevated working areas."
  },
  {
    title: "Warehouse Structures",
    description: "Robust structural packages for warehouse shells, extensions, and logistics facility upgrades."
  }
];

const projectFit = [
  "New-build construction and property development projects",
  "Industrial expansion and retrofit programs",
  "Warehouse and distribution facility improvements",
  "Agricultural structure support requirements"
];

export default function StructuralSteelPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service"
            title="Structural Steel Fabrication"
            description="Intsimbi Concepts delivers structural steel fabrication and installation for contractors, developers, and industrial clients across the Western Cape."
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
            <h2 className="text-2xl font-bold text-brand-primary">Built for Project Performance</h2>
            <p className="mt-4 text-slate-600">
              Our structural steel workflow combines practical planning, workshop quality control, and reliable site
              installation. We coordinate with project teams to keep fabrication aligned with construction milestones.
            </p>
            <p className="mt-4 text-slate-600">
              This approach helps reduce rework, improve fit-up accuracy, and support predictable delivery outcomes.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-brand-primary">Typical Project Fit</h2>
            <ul className="mt-4 space-y-3">
              {projectFit.map((item) => (
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
          title="Planning a structural steel package?"
          description="Share drawings or project information and receive a responsive, practical quotation."
          ctaLabel="Request Structural Steel Quote"
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
