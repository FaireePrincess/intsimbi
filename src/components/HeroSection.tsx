import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
}

/**
 * HeroSection
 * Purpose: Homepage hero with headline, CTA actions, and branded image.
 * Props: Hero copy, CTA links, and hero image source/alt.
 * Usage: <HeroSection title="..." description="..." primaryCta={...} secondaryCta={...} />
 */
export function HeroSection({
  title,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-primary text-white">
      <div className="absolute inset-0 bg-steel-grid bg-[size:40px_40px] opacity-20" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 lg:px-8 lg:py-24">
        <div className="relative z-10">
          <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-md border border-slate-400 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="relative z-10">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={900}
            height={640}
            priority
            className="h-full min-h-[280px] w-full rounded-xl object-cover shadow-steel"
          />
        </div>
      </div>
    </section>
  );
}
