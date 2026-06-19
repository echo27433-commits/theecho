import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { useCasesData } from "@/data/usecases";
import { SITE_URL } from "@/lib/site";

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product", changeFrequency: "monthly", priority: 0.9 },
  { path: "/product/loyalty", changeFrequency: "monthly", priority: 0.85 },
  { path: "/product/omnichannel", changeFrequency: "monthly", priority: 0.85 },
  { path: "/product/ai-platform", changeFrequency: "monthly", priority: 0.85 },
  { path: "/enterprise-ready", changeFrequency: "monthly", priority: 0.8 },
  { path: "/use-cases", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const useCaseEntries: MetadataRoute.Sitemap = useCasesData.map((useCase) => ({
    url: `${SITE_URL}/use-cases/${useCase.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries, ...useCaseEntries];
}
