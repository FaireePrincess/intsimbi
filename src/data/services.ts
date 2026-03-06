import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "structural-steel",
    title: "Structural Steel",
    slug: "structural-steel",
    shortDescription: "Engineered steel structures for commercial and industrial projects.",
    detailedDescription:
      "We fabricate and install structural steel components built for durability, safety, and site efficiency.",
    icon: "Building2",
    highlights: ["Steel frames", "Mezzanines", "Platforms", "Stairs", "Handrails", "Warehouse structures"]
  },
  {
    id: "stainless-steel",
    title: "Stainless Steelwork",
    slug: "stainless-steel",
    shortDescription: "Hygienic stainless fabrication for food, hospitality, and processing environments.",
    detailedDescription:
      "From kitchen fit-outs to specialist fabrication, our stainless work combines practicality and clean finishes.",
    icon: "ShieldCheck",
    highlights: ["Commercial kitchens", "Counters", "Sinks", "Extractor hoods", "Food processing equipment"]
  },
  {
    id: "metal-work",
    title: "Metal Work",
    slug: "metal-work-custom-fabrication",
    shortDescription: "Custom fabricated steel elements for architectural and functional requirements.",
    detailedDescription:
      "We produce precision metalwork for structural support, visual impact, and durable everyday use.",
    icon: "Wrench",
    highlights: ["Balustrades", "Gates", "Custom frames", "Decorative metal work", "Architectural steel"]
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication",
    slug: "metal-work-custom-fabrication",
    shortDescription: "Project-specific fabrication and site installation aligned to your drawings.",
    detailedDescription:
      "Complex one-off or repeat steel packages planned and built to suit timelines, specs, and site constraints.",
    icon: "Cog",
    highlights: ["Detailed shop drawings support", "Workshop fabrication", "Site installation", "Snag and handover"]
  }
];
