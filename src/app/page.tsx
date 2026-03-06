import Link from "next/link";
import {
  CTASection,
  HeroSection,
  IndustryCard,
  ProcessSteps,
  ProjectCard,
  SectionHeading,
  ServiceCard
} from "@/components";
import { industries } from "@/data/industries";
import { processSteps } from "@/data/processSteps";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { trustFeatures } from "@/data/trustFeatures";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <HeroSection
        title="Precision Steel Fabrication Built Right. Delivered On Time."
        description="Structural steel, metal work and stainless steel fabrication for contractors, industrial businesses and commercial clients across the Western Cape."
        primaryCta={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondaryCta={{ label: "View Projects", href: "/projects" }}
        imageSrc="/images/hero/steel-fabrication-hero.jpg"
        imageAlt="Steel fabrication workshop activity"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Overview"
          title="Steel Solutions Built to Engineering Specifications"
          description="Intsimbi Concepts provides structural steel fabrication, metal work and stainless steel fabrication for contractors, industrial facilities and commercial clients across the Western Cape. From workshop fabrication to site installation, we deliver reliable steel solutions built to engineering specifications."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <SectionHeading eyebrow="Services" title="Core Fabrication Services" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Intsimbi Concepts" title="Trusted by Contractors and Industrial Clients" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((feature) => (
              <article key={feature.id} className="rounded-xl border border-slate-200 bg-brand-background p-5">
                <h3 className="text-lg font-semibold text-brand-primary">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading eyebrow="Featured Projects" title="Recent Fabrication Work" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-8 inline-block rounded-md border border-brand-primary px-5 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-primary hover:text-white"
        >
          View All Projects
        </Link>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Process" title="How We Deliver" />
          <div className="mt-8">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading eyebrow="Industries" title="Industries We Serve" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <CTASection
          title="Have drawings ready?"
          description="Upload your project details and request a quote."
          ctaLabel="Request Quote"
          ctaHref="/request-a-quote"
        />
      </section>
    </>
  );
}
