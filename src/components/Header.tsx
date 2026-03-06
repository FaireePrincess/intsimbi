"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";

/**
 * Header
 * Purpose: Sticky top navigation with logo, primary links, and quote CTA.
 * Props: None.
 * Usage: <Header />
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Intsimbi Concepts home">
          <Image src="/logo.svg" alt="Intsimbi Concepts logo" width={250} height={50} priority className="h-11 w-auto" />
        </Link>

        <button
          className="inline-flex items-center rounded-md p-2 text-brand-primary lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-accent">
              {item.label}
            </Link>
          ))}
          <Link
            href="/request-a-quote"
            className="rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Request a Quote
          </Link>
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-a-quote"
              className="rounded-md bg-brand-accent px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
