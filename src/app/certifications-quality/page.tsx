import { CTASection, SectionHeading } from "@/components";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Certifications & Quality | Intsimbi Concepts",
  description:
    "Learn how Intsimbi Concepts maintains engineering compliance, quality control, fabrication standards, and safety procedures across steel projects.",
  path: "/certifications-quality",
  keywords: ["structural steel fabrication western cape", "steel fabrication western cape"]
});

const qualityPillars = [
  {
    title: "Commitment to Engineering Specifications",
    description:
      "Every project is manufactured against approved technical inputs to ensure dimensional accuracy, structural integrity, and install readiness."
  },
  {
    title: "Quality Control Process",
    description:
      "Our workshop process includes staged checks to verify material compliance, fabrication quality, and final output before dispatch."
  },
  {
    title: "Fabrication Standards",
    description:
      "We apply disciplined fabrication practices to structural steel, stainless work, and custom metal components for consistent performance."
  },
  {
    title: "Safety Procedures",
    description:
      "Fabrication and site installation activities are planned with practical safety controls to protect teams, clients, and project environments."
  }
];

const processChecks = [
  "Drawing and specification verification before fabrication",
  "Material and component checks throughout production",
  "Fit-up and finish inspection prior to delivery",
  "Site readiness and installation safety planning",
  "Final project review and handover alignment"
];

export default function CertificationsQualityPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Certifications & Quality"
            title="Quality and Compliance Built Into Every Project"
            description="Intsimbi Concepts maintains a practical quality-driven approach to fabrication and installation, aligned with engineering requirements and project safety expectations."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {qualityPillars.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-brand-primary">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <article className="rounded-2xl border border-slate-200 bg-brand-background p-8">
            <h2 className="text-2xl font-bold text-brand-primary">How We Maintain Quality</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              We combine workshop controls, technical discipline, and clear communication to reduce errors and improve
              project outcomes. This process supports reliable fabrication quality from quotation through final handover.
            </p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {processChecks.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <CTASection
          title="Need confidence in quality and delivery?"
          description="Send your project information and get a quotation built around technical accuracy and practical execution."
          ctaLabel="Request a Quality-Focused Quote"
          ctaHref="/request-a-quote"
        />
      </section>
    </>
  );
}
