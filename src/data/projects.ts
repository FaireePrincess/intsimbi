import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "warehouse-steel-structure",
    title: "Warehouse Steel Structure",
    category: "Structural Steel",
    location: "Cape Town, Western Cape",
    summary: "Fabrication and installation of a steel frame warehouse extension.",
    challenge: "Maintain construction momentum while integrating new steel with an active facility.",
    solution: "Phased fabrication and installation sequencing reduced disruption and protected timelines.",
    image: "/images/projects/warehouse-steel-structure.svg",
    gallery: ["/images/projects/warehouse-steel-structure.svg"],
    featured: true
  },
  {
    id: "agricultural-steel-structure",
    title: "Agricultural Steel Structure",
    category: "Structural Steel",
    location: "George, Western Cape",
    summary: "Steel support structure for agricultural processing and storage workflows.",
    challenge: "Corrosion risk and heavy-use loading required robust detailing.",
    solution: "Specified protective finishes and reinforced member design for long-term service life.",
    image: "/images/projects/agricultural-steel-structure.svg",
    gallery: ["/images/projects/agricultural-steel-structure.svg"],
    featured: true
  },
  {
    id: "commercial-kitchen-stainless-installation",
    title: "Commercial Kitchen Stainless Installation",
    category: "Stainless Steel",
    location: "Paarl, Western Cape",
    summary: "Custom stainless kitchen counters, sink stations, and extraction components.",
    challenge: "Tight fit-out schedule and strict hygiene standards.",
    solution: "Precision workshop prep enabled rapid on-site installation and clean commissioning.",
    image: "/images/projects/kitchen-stainless-installation.svg",
    gallery: ["/images/projects/kitchen-stainless-installation.svg"],
    featured: true
  },
  {
    id: "custom-steel-staircase",
    title: "Custom Steel Staircase",
    category: "Metal Work",
    location: "Stellenbosch, Western Cape",
    summary: "Architectural staircase combining structural performance with a clean visual finish.",
    challenge: "Balancing design intent with structural and installation constraints.",
    solution: "Collaborative detailing delivered an efficient fabrication package and accurate site fit.",
    image: "/images/projects/custom-steel-staircase.svg",
    gallery: ["/images/projects/custom-steel-staircase.svg"],
    featured: true
  }
];
