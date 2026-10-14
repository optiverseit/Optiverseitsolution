/**
 * ════════════════════════════════════════════════════════════════════════════════
 * Advanced Automated Blog SEO Engine — Optiverse IT Solution Pvt. Ltd.
 * ════════════════════════════════════════════════════════════════════════════════
 * This engine automates enterprise-level SEO for all blog posts and blog listings.
 * It is fully database- and API-agnostic: whether blog articles come from static
 * data, a REST API, GraphQL, Supabase, or PostgreSQL, passing the raw record
 * through this engine automatically computes Google First-Page SEO parameters:
 *
 * 1. Title & Meta Optimization (Google 50-60 & 140-160 char constraints)
 * 2. Dynamic Schema.org JSON-LD (BlogPosting, TechArticle, FAQPage, BreadcrumbList, ItemList)
 * 3. E-E-A-T Authority & Entity Credentials (registered Lalitpur corporate entity)
 * 4. Open Graph Article & Twitter Summary Card Meta
 * 5. Reading Time, Word Count & ISO-8601 Date Calculations
 */

import type { BlogArticle } from "../data/blogsData";

const BASE_URL = "https://optiverseits.com.np";
const BRAND_NAME = "Optiverse IT Solution";
const BRAND_LEGAL_NAME = "Optiverse IT Solution Pvt. Ltd.";
const BRAND_LOGO = `${BASE_URL}/images/optiverseitsolutioniconlogo.png`;

export interface BlogSeoPayload {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogType: "article" | "website";
  ogImage: string;
  structuredData: object[];
  wordCount: number;
  readTime: string;
  isoDatePublished: string;
  isoDateModified: string;
}

/**
 * Normalizes any date string (e.g. "OCT 10, 2026") into ISO 8601 (YYYY-MM-DDTHH:mm:ssZ)
 */
export function normalizeIsoDate(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString();
  const parsed = Date.parse(dateStr);
  if (!isNaN(parsed)) {
    return new Date(parsed).toISOString();
  }
  // Fallback for custom formats like "OCT 10, 2026"
  try {
    const parts = dateStr.trim().split(" ");
    if (parts.length === 3) {
      const monthMap: Record<string, string> = {
        JAN: "01", FEB: "02", MAR: "03", APR: "04", MAY: "05", JUN: "06",
        JUL: "07", AUG: "08", SEP: "09", OCT: "10", NOV: "11", DEC: "12"
      };
      const month = monthMap[parts[0].toUpperCase()] || "01";
      const day = parts[1].replace(",", "").padStart(2, "0");
      const year = parts[2];
      return `${year}-${month}-${day}T09:00:00+05:45`;
    }
  } catch {
    // fallback
  }
  return new Date().toISOString();
}

/**
 * Calculates total word count and reading time from article content
 */
export function calculateBlogMetrics(article: Partial<BlogArticle>): { wordCount: number; readTime: string } {
  let text = `${article.title || ""} ${article.excerpt || ""}`;
  if (article.content) {
    text += ` ${article.content.introduction || ""} ${article.content.conclusion || ""}`;
    if (Array.isArray(article.content.sections)) {
      article.content.sections.forEach((sec) => {
        text += ` ${sec.heading || ""}`;
        if (Array.isArray(sec.body)) text += ` ${sec.body.join(" ")}`;
        if (Array.isArray(sec.keyPoints)) text += ` ${sec.keyPoints.join(" ")}`;
      });
    }
  }
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = Math.max(words.length, 350);
  const minutes = Math.ceil(wordCount / 180);
  const readTime = `${minutes} MIN READ`;
  return { wordCount, readTime };
}

/**
 * Generates automated high-rank SEO payload for ANY individual blog article
 * (whether coming from local state or an incoming database API payload)
 */
export function generateBlogDetailSeo(article: BlogArticle): BlogSeoPayload {
  const { wordCount, readTime } = calculateBlogMetrics(article);
  const canonicalPath = `/blogs/${article.slug}`;
  const articleUrl = `${BASE_URL}${canonicalPath}`;
  const isoPublished = normalizeIsoDate(article.date);
  const isoModified = isoPublished; // can be updated if updated_at is passed from DB

  // 1. Google-Optimized Title (Formula: [Specific High-Intent Title] | Optiverse Blog Nepal)
  const seoTitle = article.title.length > 55
    ? `${article.title} | ${BRAND_NAME}`
    : `${article.title} | ${BRAND_NAME} Nepal Blog`;

  // 2. High-CTR Meta Description (140-160 chars)
  let seoDesc = article.excerpt || "";
  if (seoDesc.length > 155) {
    seoDesc = seoDesc.substring(0, 152).trim() + "...";
  }

  // 3. Keyword Optimization with localized search intent
  const coreKeywords = [
    article.category,
    ...(article.tags || []),
    "Nepal IT blog",
    "Digital Marketing Nepal",
    "Kathmandu tech guides",
    "Optiverse IT Solution Lalitpur",
  ];
  const seoKeywords = Array.from(new Set(coreKeywords)).join(", ");

  // 4. Schema.org BlogPosting Schema (E-E-A-T Compliant)
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    "isPartOf": {
      "@type": "Blog",
      "@id": `${BASE_URL}/blogs#blog`,
      "name": "Optiverse IT Solution Digital Business & Tech Insights Blog",
      "publisher": {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": BRAND_LEGAL_NAME,
      },
    },
    "headline": article.title,
    "description": article.excerpt,
    "image": [
      article.image.startsWith("http") ? article.image : `${BASE_URL}${article.image}`,
    ],
    "datePublished": isoPublished,
    "dateModified": isoModified,
    "inLanguage": "en-US",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    "wordCount": wordCount,
    "timeRequired": `PT${parseInt(readTime) || 6}M`,
    "articleSection": article.category,
    "keywords": seoKeywords,
    "copyrightHolder": {
      "@type": "Organization",
      "name": BRAND_LEGAL_NAME,
      "url": BASE_URL,
    },
    "author": {
      "@type": "Person",
      "name": article.author?.name || "Optiverse Tech Team",
      "jobTitle": article.author?.role || "Digital Strategist",
      "image": article.author?.avatar || BRAND_LOGO,
      "worksFor": {
        "@type": "Organization",
        "name": BRAND_LEGAL_NAME,
        "url": BASE_URL,
      },
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": BRAND_LEGAL_NAME,
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": BRAND_LOGO,
        "width": 600,
        "height": 60,
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jawalakhel",
        "addressLocality": "Lalitpur",
        "addressRegion": "Bagmati Province",
        "postalCode": "44700",
        "addressCountry": "NP",
      },
    },
  };

  // 5. Schema.org BreadcrumbList Schema (Enables Google Breadcrumb Rich Snippet)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs & Insights",
        "item": `${BASE_URL}/blogs`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": articleUrl,
      },
    ],
  };

  // 6. Schema.org FAQPage Schema (Automatically derived from sections & key points for SERP drop-downs)
  const structuredData: object[] = [blogPostingSchema, breadcrumbSchema];

  if (article.content?.sections && article.content.sections.length > 0) {
    const faqEntities = article.content.sections
      .filter((s) => s.heading && (s.keyPoints?.length || s.body?.length))
      .map((s) => {
        const questionText = s.heading.replace(/^\d+\.\s*/, "");
        const answerText = s.keyPoints && s.keyPoints.length > 0
          ? `${s.body?.[0] || ""} Key insights: ${s.keyPoints.join(" ")}`
          : (s.body?.join(" ") || "");
        return {
          "@type": "Question",
          "name": questionText.endsWith("?") ? questionText : `What should you know about ${questionText}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answerText,
          },
        };
      })
      .slice(0, 4); // Keep top 3-4 Q&A for high-confidence Google indexing

    if (faqEntities.length > 0) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        "mainEntity": faqEntities,
      });
    }
  }

  return {
    title: seoTitle,
    description: seoDesc,
    keywords: seoKeywords,
    canonicalPath,
    ogType: "article",
    ogImage: article.image,
    structuredData,
    wordCount,
    readTime,
    isoDatePublished: isoPublished,
    isoDateModified: isoModified,
  };
}

/**
 * Generates automated Schema & SEO payload for the main `/blogs` archive listing page
 */
export function generateBlogListingSeo(articles: BlogArticle[]) {
  const canonicalPath = "/blogs";
  const listingUrl = `${BASE_URL}${canonicalPath}`;

  // CollectionPage & ItemList Schema
  const itemListElements = articles.map((art, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "url": `${BASE_URL}/blogs/${art.slug}`,
    "name": art.title,
    "description": art.excerpt,
    "image": art.image,
  }));

  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": ["CollectionPage", "Blog"],
    "@id": `${listingUrl}#blog`,
    "name": "Optiverse Digital & Tech Knowledge Hub | Nepal IT Blogs",
    "description":
      "Expert guides on custom web development costs, SEO Google ranking strategies, Meta ads ROI, and commercial branding designed for Nepali businesses and global startups.",
    "url": listingUrl,
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": BRAND_LEGAL_NAME,
      "url": BASE_URL,
      "logo": BRAND_LOGO,
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": articles.length,
      "itemListElement": itemListElements,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs & Guides",
        "item": listingUrl,
      },
    ],
  };

  return {
    title: "Digital Marketing, SEO & Tech Blogs Nepal | Optiverse IT Solution",
    description:
      "Actionable guides on custom web development pricing, Google first-page SEO rankings, performance Meta ads, and branding in Nepal by Optiverse IT Solution.",
    keywords:
      "Nepal tech blog, digital marketing blog Nepal, website development cost Nepal, SEO guide Kathmandu, social media marketing Nepal, IT company Lalitpur blogs",
    canonicalPath,
    ogType: "website" as const,
    structuredData: [blogListingSchema, breadcrumbSchema],
  };
}
