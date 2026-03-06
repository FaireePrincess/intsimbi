import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const routes = [
  "",
  "/about",
  "/services",
  "/services/structural-steel",
  "/services/stainless-steel",
  "/services/metal-work-custom-fabrication",
  "/industries",
  "/projects",
  "/certifications-quality",
  "/request-a-quote",
  "/contact",
  "/blog",
  "/insights-resources"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
