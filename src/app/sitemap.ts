import type { MetadataRoute } from "next";

function getPublicSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getPublicSiteUrl()}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}


