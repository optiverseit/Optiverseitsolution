import { services } from "../components/hero/OurServicesSection";

/**
 * Dynamically generates comprehensive Schema.org OfferCatalog & Service structured data
 * for all 4 categories and 28 sub-services in Optiverse IT Solution.
 */
export function generateServicesCatalogSchema() {
  const allServicesList = services.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Service",
      "name": `${item.title} in Nepal`,
      "alternateName": item.shortTitle,
      "serviceType": category.label,
      "description": item.description,
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://optiverseits.com.np/#business",
        "name": "Optiverse IT Solution Pvt. Ltd."
      },
      "areaServed": [
        { "@type": "Country", "name": "Nepal" },
        { "@type": "City", "name": "Kathmandu" },
        { "@type": "City", "name": "Lalitpur" },
        { "@type": "City", "name": "Bhaktapur" },
        { "@type": "AdministrativeArea", "name": "Bagmati Province" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${item.title} Highlights & Features`,
        "itemListElement": item.highlights.map((h) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": h.title,
            "description": h.text
          }
        }))
      }
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": "https://optiverseits.com.np/#services-catalog",
    "name": "Optiverse IT Solution - Complete Digital, Creative & IT Services Catalog Nepal",
    "url": "https://optiverseits.com.np/#services",
    "numberOfItems": allServicesList.length,
    "itemListElement": allServicesList.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": service
    }))
  };
}

/**
 * FAQPage Schema targeting high-intent service queries in Nepal
 */
export const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://optiverseits.com.np/#services-faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Optiverse IT Solution provide in Nepal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Optiverse IT Solution Pvt. Ltd. provides four core service pillars in Nepal: 1) Custom Web Development (e-commerce, news portals, booking systems, healthcare & consultancy websites), 2) Digital Marketing (Meta ads, Google Ads, SEO, content creation), 3) Commercial Video Production (reels, AI video content & creation, DaVinci Resolve editing, corporate films), and 4) Social Media Management (branding, community management, influencer partnerships)."
      }
    },
    {
      "@type": "Question",
      "name": "How much does custom website development cost in Nepal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website development costs in Nepal typically range from NPR 25,000 for standard business and consultancy websites to NPR 100,000+ for high-traffic news portals, multi-vendor e-commerce platforms, and custom booking engines. Optiverse IT Solution provides transparent, milestone-based pricing with modern React/Next.js/TypeScript engineering, mobile responsiveness, and built-in SEO."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer AI Video Content & Creation services in Nepal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Optiverse IT Solution offers cutting-edge AI Video Content & Creation services in Nepal. This includes multilingual AI digital presenters and corporate avatars, prompt-to-video generative b-roll, automated clipping, smart reframing, and AI-powered viral reels tailored for TikTok, Instagram, and YouTube."
      }
    },
    {
      "@type": "Question",
      "name": "How does Optiverse IT Solution guarantee Google 1st page SEO rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our SEO methodology combines rigorous technical SEO (Schema.org microdata, green Core Web Vitals, sub-second LCP), local Nepal schema markup (GeoCoordinates, local citations), intent-driven Nepali keyword research, on-page content architecture, and authority backlink acquisition to systematically achieve first-page rankings."
      }
    },
    {
      "@type": "Question",
      "name": "Can Optiverse develop high-traffic News Portals and Online Media CMS in Nepal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Optiverse specializes in high-performance news portals capable of handling breaking news surges of thousands of concurrent visitors. We build on resilient CMS architectures with CDN caching, Google News sitemaps, AMP readiness, and role-based editorial workflows."
      }
    }
  ]
};
