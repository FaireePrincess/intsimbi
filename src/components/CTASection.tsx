import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

/**
 * CTASection
 * Purpose: Reusable conversion-focused call-to-action banner.
 * Props: Title, description, CTA label, and CTA destination.
 * Usage: <CTASection title="Have drawings ready?" ... />
 */
export function CTASection({ title, description, ctaLabel, ctaHref }: CTASectionProps) {
  return (
    <section className="rounded-2xl bg-brand-primary px-6 py-10 text-white lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-200">Request for Quotation</p>
      <h2 className="mt-3 text-3xl font-bold">{title}</h2>
      <p className="mt-3 max-w-2xl text-slate-200">{description}</p>
      <Link
        href={ctaHref}
        className="mt-6 inline-block rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}
