import type { ProcessStep } from "@/types/processStep";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

/**
 * ProcessSteps
 * Purpose: Visual timeline for the end-to-end project delivery process.
 * Props: Ordered list of `steps` with titles and descriptions.
 * Usage: <ProcessSteps steps={processSteps} />
 */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-brand-accent">Step {index + 1}</p>
          <h3 className="mt-2 text-lg font-semibold text-brand-primary">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
