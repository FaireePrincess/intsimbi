import type { ProcessStep } from "@/types/processStep";

export const processSteps: ProcessStep[] = [
  {
    id: "submit",
    title: "Submit drawings or project information",
    description: "Share your scope, drawings, and timelines so we can assess requirements accurately."
  },
  {
    id: "quote",
    title: "Quote and planning",
    description: "We issue a clear quote and plan fabrication and installation to align with your schedule."
  },
  {
    id: "fabrication",
    title: "Fabrication and quality control",
    description: "Components are manufactured to engineering specifications with strict quality checks."
  },
  {
    id: "delivery",
    title: "Delivery and installation",
    description: "We deliver and install safely on site across the Western Cape."
  }
];
