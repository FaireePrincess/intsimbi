import Link from "next/link";
import { CTASection, SectionHeading } from "@/components";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Intsimbi Concepts | Steel Fabrication Western Cape",
  description:
    "Learn about Intsimbi Concepts, our steel fabrication capabilities, quality commitment, and local project expertise across the Western Cape.",
  path: "/about",
  keywords: ["steel fabrication western cape", "steel fabrication cape town"]
});

const capabilities = [
  "Structural steel fabrication and installation",
  "Stainless steelwork for kitchens and food facilities",
  "Metal work and custom fabrication",
  "Project-specific site installation support",
  "Coordination with contractors, engineers, and developers"
];

const qualityPoints = [
  "Fabrication aligned with engineering specifications",
  "Quality control checks from workshop to handover",
  "Practical, safety-focused installation planning",
  "Clear communication throughout quoting and delivery"
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="Built on Reliable Fabrication and Practical Delivery"
            description="Intsimbi Concepts is a Western Cape-based steel fabrication company focused on delivering structural steel, metal work, and stainless steelwork for commercial and industrial clients."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold text-brand-primary">Company Overview</h2>
            <p className="mt-4 text-slate-600">
              We support contractors, developers, and facility owners with steel packages that are planned for real
              site conditions. From quotation and planning through workshop fabrication and installation, our team keeps
              delivery focused, professional, and aligned to project requirements.
            </p>
            <p className="mt-4 text-slate-600">
              Our work spans warehouse structures, industrial upgrades, agricultural facilities, and hospitality fit-outs
              where quality and timing both matter.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-brand-primary">Capabilities</h2>
            <ul className="mt-4 space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <article>
            <h2 className="text-2xl font-bold text-brand-primary">Commitment to Quality</h2>
            <p className="mt-4 text-slate-600">
              Quality is built into every stage of our process. We work from clear technical inputs, apply disciplined
              workshop controls, and verify output before delivery and installation.
            </p>
            <ul className="mt-5 space-y-3">
              {qualityPoints.map((point) => (
                <li key={point} className="rounded-lg border border-slate-200 bg-brand-background p-4 text-sm text-slate-700">
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-brand-primary">Local Expertise in the Western Cape</h2>
            <p className="mt-4 text-slate-600">
              Operating in the Western Cape gives us a practical understanding of regional project requirements, site
              access realities, and timeline pressures. We support projects in Cape Town, George, and surrounding areas
              with responsive quoting and dependable execution.
            </p>
            <p className="mt-4 text-slate-600">
              Whether you need structural steel for an expansion, stainless fabrication for a kitchen, or custom metal
              work for a commercial build, our focus remains the same: accurate fabrication and reliable delivery.
            </p>
            <Link
              href="/request-a-quote"
              className="mt-6 inline-block rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Request a Quote
            </Link>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <CTASection
          title="Need a fabrication partner for your next project?"
          description="Share your requirements and get a practical quotation from a Western Cape-based team."
          ctaLabel="Start Your RFQ"
          ctaHref="/request-a-quote"
        />
      </section>
    </>
  );
}
