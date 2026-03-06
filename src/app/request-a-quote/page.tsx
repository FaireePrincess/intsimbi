import { QuoteForm, SectionHeading } from "@/components";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Request a Quote | Intsimbi Concepts",
  description:
    "Submit your steel fabrication RFQ to Intsimbi Concepts, including drawings, project details, location, and desired timeline.",
  path: "/request-a-quote",
  keywords: ["steel fabrication western cape", "custom steel fabrication western cape"]
});

const quoteGuidance = [
  "Share drawings or sketches where available",
  "Include project location and scope details",
  "Specify delivery or installation requirements",
  "Indicate any deadline or program constraints"
];

export default function RequestAQuotePage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Request a Quote"
            title="Submit Your Steel Fabrication RFQ"
            description="Provide your project information and our team will respond with a practical quotation and delivery planning guidance."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <QuoteForm />
          </div>

          <aside className="space-y-6">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-primary">What to Include for Faster Quoting</h2>
              <ul className="mt-4 space-y-3">
                {quoteGuidance.map((item) => (
                  <li key={item} className="rounded-md bg-brand-background px-4 py-3 text-sm text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-brand-primary p-6 text-white shadow-sm">
              <h3 className="text-lg font-semibold">Have drawings ready?</h3>
              <p className="mt-3 text-sm text-slate-200">
                Upload your project details and request a quote. We support contractors, developers, and industrial
                teams across the Western Cape.
              </p>
            </article>
          </aside>
        </div>
      </section>
    </>
  );
}
