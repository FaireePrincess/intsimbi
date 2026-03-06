"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ProjectCategory } from "@/types/project";
import { projects } from "@/data/projects";

const categories: Array<ProjectCategory | "All"> = ["All", "Structural Steel", "Stainless Steel", "Metal Work"];

/**
 * ProjectsGallery
 * Purpose: Displays filterable project cards with challenge and solution summaries.
 * Props: None.
 * Usage: <ProjectsGallery />
 */
export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                active ? "bg-brand-accent text-white" : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={project.image}
              alt={`${project.title} - ${project.category}`}
              width={980}
              height={640}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="space-y-4 p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{project.category}</p>
                <h2 className="mt-1 text-2xl font-semibold text-brand-primary">{project.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{project.location}</p>
              </div>

              <p className="text-sm text-slate-700">{project.summary}</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-brand-background p-4">
                  <h3 className="text-sm font-semibold text-brand-primary">Challenge</h3>
                  <p className="mt-2 text-sm text-slate-600">{project.challenge}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-brand-background p-4">
                  <h3 className="text-sm font-semibold text-brand-primary">Solution</h3>
                  <p className="mt-2 text-sm text-slate-600">{project.solution}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-brand-primary">Image Gallery Placeholder</h3>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {project.gallery.map((image, index) => (
                    <Image
                      key={`${project.id}-${index}`}
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      width={300}
                      height={220}
                      loading="lazy"
                      className="h-20 w-full rounded-md object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
