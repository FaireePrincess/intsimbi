import type { Metadata } from "next";
import { targetKeywords } from "@/data/seoKeywords";
import { siteConfig } from "@/lib/siteConfig";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function buildMetadata({ title, description, path = "/", keywords = [] }: BuildMetadataArgs): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  return {
    title,
    description,
    keywords: [...targetKeywords, ...keywords],
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
