import type { MetadataRoute } from "next";
import { navItems, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...navItems.map((item) => item.href)];
  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
