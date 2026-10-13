import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alvex.example";

/** Live routes: the homepage and the published Insights articles. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    ...articles.map((a) => ({
      url: `${siteUrl}/insights/${a.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
