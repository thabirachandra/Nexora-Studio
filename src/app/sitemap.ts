import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thabirachandra.github.io/Nexora-Studio";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/services/`, lastModified: new Date() },
    { url: `${baseUrl}/pricing/`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio/`, lastModified: new Date() },
    { url: `${baseUrl}/contact/`, lastModified: new Date() },
  ];
}
