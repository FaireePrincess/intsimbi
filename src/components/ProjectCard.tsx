import Image from "next/image";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard
 * Purpose: Shows project preview content used in featured and listing grids.
 * Props: `project` object with category, location, and summary.
 * Usage: <ProjectCard project={project} />
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Image
        src={project.image}
        alt={`${project.title} in ${project.location}`}
        width={760}
        height={520}
        loading="lazy"
        className="h-52 w-full object-cover"
      />
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{project.category}</p>
        <h3 className="text-xl font-semibold text-brand-primary">{project.title}</h3>
        <p className="text-sm text-slate-500">{project.location}</p>
        <p className="text-sm text-slate-600">{project.summary}</p>
      </div>
    </article>
  );
}
