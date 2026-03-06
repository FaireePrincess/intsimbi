import { CTASection, SectionHeading } from "@/components";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projects | Intsimbi Concepts",
  description:
    "View structural steel, stainless steel, and metal work project examples delivered by Intsimbi Concepts across the Western Cape.",
  path: "/projects",
  keywords: ["steel fabrication western cape", "structural steel fabrication western cape", "stainless steel fabrication cape town"]
});

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Fabrication Projects Across the Western Cape"
            description="Browse project examples by category and see how Intsimbi Concepts addresses site challenges with practical fabrication solutions."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <ProjectsGallery />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <CTASection
          title="Have a project with technical or timeline pressure?"
          description="Share your drawings and requirements to receive a focused quotation from our team."
          ctaLabel="Request a Project Quote"
          ctaHref="/request-a-quote"
        />
      </section>
    </>
  );
}
