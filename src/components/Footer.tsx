import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Footer
 * Purpose: Bottom site footer with logo, navigation, services, and contact placeholders.
 * Props: None.
 * Usage: <Footer />
 */
export function Footer() {
  return (
    <footer className="mt-20 bg-brand-primary text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <Image src="/logo.png" alt="Intsimbi Concepts logo" width={300} height={60} className="h-12 w-auto" loading="lazy" />
          <p className="mt-4 text-sm text-slate-300">{siteConfig.name}</p>
          <p className="text-sm text-slate-300">{siteConfig.location}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 4).map((service) => (
              <li key={service.id}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Phone: {siteConfig.phone}</li>
            <li>Email: {siteConfig.email}</li>
            <li>Location: Western Cape, South Africa</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border border-slate-500 p-2 hover:border-white">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-slate-500 p-2 hover:border-white">
              <Linkedin size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-slate-500 p-2 hover:border-white">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 px-6 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Intsimbi Concepts. All rights reserved.
      </div>
    </footer>
  );
}
