import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

/**
 * ServiceCard
 * Purpose: Displays service summary and link to service detail page.
 * Props: `service` object from typed service dataset.
 * Usage: <ServiceCard service={service} />
 */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-steel">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-secondary text-brand-primary">
        <span className="text-xs font-bold">IC</span>
      </div>
      <h3 className="text-xl font-semibold text-brand-primary">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm text-slate-600">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent"
      >
        Learn more <ArrowRight size={16} />
      </Link>
    </article>
  );
}
