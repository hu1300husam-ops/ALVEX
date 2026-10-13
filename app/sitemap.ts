import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { services } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alvex.example";

/** Live routes: the homepage, inner pages, service details and published Insights articles. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({ url: `${siteUrl}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/canton-fair`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/insights`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.9 },
    ...articles.map((a) => ({
      url: `${siteUrl}/insights/${a.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
