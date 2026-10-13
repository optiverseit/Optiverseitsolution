import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  structuredData?: object | object[];
}

const BASE_URL = "https://optiverseits.com.np";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath = "/",
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  structuredData,
}: SEOHeadProps) {
  const canonical = `${BASE_URL}${canonicalPath}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (attrType: "name" | "property", attrValue: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attrType}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrType, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Canonical
    setLink("canonical", canonical);

    // Standard meta
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);
    setMeta("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("name", "author", "Optiverse IT Solution Pvt. Ltd.");

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:site_name", "Optiverse IT Solution");
    setMeta("property", "og:locale", "en_US");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setMeta("name", "twitter:site", "@OptiverseITS");

    // Geo / Local SEO
    setMeta("name", "geo.region", "NP-3");
    setMeta("name", "geo.placename", "Lalitpur, Nepal");
    setMeta("name", "geo.position", "27.6644;85.3188");
    setMeta("name", "ICBM", "27.6644, 85.3188");

    // JSON-LD Structured Data
    if (structuredData) {
      const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
      document.querySelectorAll("script[data-seo-schema]").forEach((el) => el.remove());
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-seo-schema", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll("script[data-seo-schema]").forEach((el) => el.remove());
    };
  }, [title, description, keywords, canonical, ogType, ogImage, structuredData]);

  return null;
}
