interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

/**
 * SectionHeading
 * Purpose: Shared heading block for page sections.
 * Props: Eyebrow label, title, optional description, and centered alignment toggle.
 * Usage: <SectionHeading title="Services" description="..." />
 */
export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  const alignment = centered ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-accent">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
