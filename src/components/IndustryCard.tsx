import Image from "next/image";
import type { Industry } from "@/types/industry";

interface IndustryCardProps {
  industry: Industry;
}

/**
 * IndustryCard
 * Purpose: Renders a target-industry block with image and short description.
 * Props: `industry` object from typed industry dataset.
 * Usage: <IndustryCard industry={industry} />
 */
export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Image
        src={industry.image}
        alt={`${industry.title} steel fabrication`}
        width={720}
        height={420}
        loading="lazy"
        className="h-44 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-brand-primary">{industry.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{industry.description}</p>
      </div>
    </article>
  );
}
