"use client";

import { useState } from "react";

interface QuoteFormProps {
  compact?: boolean;
}

/**
 * QuoteForm
 * Purpose: Captures request-for-quote leads with project details.
 * Props: Optional `compact` mode for shorter embed contexts.
 * Usage: <QuoteForm />
 */
export function QuoteForm({ compact = false }: QuoteFormProps) {
  const [hasDrawings, setHasDrawings] = useState("yes");

  return (
    <form className="grid gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-brand-primary">
          Full Name
          <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="text" name="fullName" required />
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-primary">
          Company Name
          <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="text" name="companyName" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-brand-primary">
          Phone Number
          <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="tel" name="phone" required />
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-primary">
          Email Address
          <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="email" name="email" required />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-brand-primary">
          Project Location
          <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="text" name="projectLocation" required />
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-primary">
          Project Type
          <select className="w-full rounded-md border border-slate-300 px-3 py-2" name="projectType" required>
            <option>Structural Steel</option>
            <option>Stainless Steelwork</option>
            <option>Metal Work</option>
            <option>Custom Fabrication</option>
            <option>Installation</option>
          </select>
        </label>
      </div>

      {!compact ? (
        <>
          <label className="space-y-2 text-sm font-medium text-brand-primary">
            Do you have drawings?
            <select
              className="w-full rounded-md border border-slate-300 px-3 py-2"
              name="hasDrawings"
              value={hasDrawings}
              onChange={(event) => setHasDrawings(event.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label className="space-y-2 text-sm font-medium text-brand-primary">
            Upload Drawings
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="file" name="drawings" />
          </label>

          <label className="space-y-2 text-sm font-medium text-brand-primary">
            Project Details
            <textarea className="min-h-28 w-full rounded-md border border-slate-300 px-3 py-2" name="details" required />
          </label>

          <label className="space-y-2 text-sm font-medium text-brand-primary">
            Desired Timeline
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="text" name="timeline" />
          </label>
        </>
      ) : null}

      <button type="submit" className="rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700">
        Submit RFQ
      </button>
    </form>
  );
}
