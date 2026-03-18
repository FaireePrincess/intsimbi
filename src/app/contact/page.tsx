import { QuoteForm, SectionHeading } from "@/components";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Contact Intsimbi Concepts | Western Cape Steel Fabrication",
  description:
    "Contact Intsimbi Concepts for steel fabrication, stainless steelwork, and custom metal work projects across the Western Cape.",
  path: "/contact",
  keywords: ["steel fabrication cape town", "steel fabrication western cape", "steel fabrication george"]
});

const contactItems = [
  { label: "Phone", value: siteConfig.phone },
  { label: "Email", value: siteConfig.email },
  { label: "Location", value: siteConfig.location },
  {
    label: "Facebook",
    value: (
      <a
        href={siteConfig.socialLinks.facebook}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-brand-accent underline-offset-4 hover:underline"
      >
        Follow Intsimbi Concepts on Facebook
      </a>
    )
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Speak to Intsimbi Concepts"
            description="Get in touch about structural steel, stainless steelwork, metal work, and installation requirements in the Western Cape."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-primary">Contact Information</h2>
              <ul className="mt-4 space-y-3">
                {contactItems.map((item) => (
                  <li key={item.label} className="rounded-md bg-brand-background px-4 py-3 text-sm text-slate-700">
                    <span className="font-semibold text-brand-primary">{item.label}: </span>
                    {item.value}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-primary">Find Us</h3>
              <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d501.6237020937052!2d22.471155538894035!3d-33.97387177152247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1773840844145!5m2!1sen!2sza"
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-52 w-full border-0"
                  allowFullScreen
                />
              </div>
            </article>
          </aside>

          <div>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-primary">Send an Enquiry</h2>
              <p className="mt-2 text-sm text-slate-600">
                Use the form below to send your project details. For quick quotation requests, include drawings and site
                information where possible.
              </p>
              <div className="mt-6">
                <QuoteForm compact />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
