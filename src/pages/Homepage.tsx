import SEOHead from "../components/seo/SEOHead";
import HeroSection from "../components/hero/HeroSection";
import HeaderStrape from "../components/hero/HeaderStrape";
import WhyOptiverseSection from "../components/hero/WhyOptiverseSection";
import OurServicesSection from "../components/hero/OurServicesSection";
import BlogsSection from "../components/hero/BlogsSection";
import TestimonialsSection from "../components/hero/TestimonialsSection";
import TransformationCTASection from "../components/hero/TransformationCTASection";
import Footer from "../components/hero/Footer";

import { generateServicesCatalogSchema, servicesFaqSchema } from "../data/servicesSchema";

/* ─── Structured Data Schemas ─── */
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://optiverseits.com.np/#webpage",
  "url": "https://optiverseits.com.np/",
  "name": "Optiverse IT Solution Pvt. Ltd. | Premier IT Solutions, Web Development & Digital Marketing Nepal",
  "isPartOf": { "@id": "https://optiverseits.com.np/#website" },
  "description": "Optiverse IT Solution Pvt. Ltd. (OptiverseIT / OptiverseITSolution) is a premier IT company in Lalitpur, Nepal. We specialize in complete IT solutions, custom web development, SEO, digital marketing, AI video creation, and branding.",
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "ReadAction",
    "target": ["https://optiverseits.com.np/"]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "ITService"],
  "@id": "https://optiverseits.com.np/#business",
  "name": "Optiverse IT Solution Pvt. Ltd.",
  "legalName": "Optiverse IT Solution Pvt. Ltd.",
  "alternateName": [
    "Optiverse IT Solution",
    "OptiverseIT",
    "OptiverseITSolution",
    "Optiverse ITS",
    "Optiverse IT Solutions",
    "Optiverse IT",
    "Optiverse I.T. Solution Pvt. Ltd.",
    "IT Solution"
  ],
  "image": "https://optiverseits.com.np/og-image.jpg",
  "url": "https://optiverseits.com.np",
  "telephone": "+9779803713931",
  "email": "info@optiverseits.com.np",
  "priceRange": "$$",
  "currenciesAccepted": "NPR, USD",
  "paymentAccepted": "Cash, Bank Transfer, eSewa, Khalti",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pulchowk - Dhobighat Rd, Jawalakhel",
    "addressLocality": "Lalitpur",
    "addressRegion": "Bagmati Province",
    "postalCode": "44700",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.6644,
    "longitude": 85.3188
  },
  "areaServed": [
    { "@type": "Country", "name": "Nepal" },
    { "@type": "City", "name": "Kathmandu" },
    { "@type": "City", "name": "Lalitpur" },
    { "@type": "City", "name": "Bhaktapur" },
    { "@type": "AdministrativeArea", "name": "Bagmati Province" }
  ],
  "knowsAbout": [
    "IT Solutions",
    "IT Solution",
    "Optiverse IT Solution",
    "Custom Web Development",
    "React & TypeScript",
    "Node.js Backend Engineering",
    "Search Engine Optimization (SEO)",
    "Digital Marketing & PPC",
    "Social Media Management",
    "Commercial Video Production",
    "AI Video Content & Creation",
    "News Portal & Media CMS",
    "E-Commerce Website Engineering",
    "Healthcare & Clinic Portals",
    "Booking & Appointment Systems",
    "Graphic & UI/UX Design",
    "Enterprise IT & Network Support"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT Solutions, Digital Marketing, Creative & Tech Services in Nepal",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT Solutions Nepal", "description": "Enterprise IT solutions, infrastructure setup, network support, and cloud systems across Nepal." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development Nepal", "description": "Custom high-performance websites, e-commerce stores, news portals, and web applications built with modern frameworks." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing Nepal", "description": "Full-funnel digital marketing, performance advertising, lead generation, and ROI campaigns across Nepal and internationally." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services Nepal", "description": "Technical SEO, local SEO, keyword ranking, and Google 1st page search engine optimization." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Brand Identity Design Nepal", "description": "Brand strategy, logo design, visual identity guidelines, and corporate branding solutions." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Creation & Video Production Nepal", "description": "High-impact 4K corporate video production, commercial advertisements, reels, and video storytelling." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Video Content & Creation Nepal", "description": "State-of-the-art AI video synthesis, digital avatars, automated video workflows, and prompt-to-video reels in Nepal." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Designing & UI/UX Nepal", "description": "Marketing graphics, social media designs, infographics, packaging, and digital UI/UX creation." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management Nepal", "description": "End-to-end social media growth, daily content calendars, community engagement, and viral creative campaigns." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising & PPC Management Nepal", "description": "Targeted Google Ads, Meta Facebook & Instagram ads, TikTok ads, and conversion-optimized ad funnels." } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Aayush Shrestha" },
      "datePublished": "2026-03-01",
      "reviewBody": "Optiverse rebuilt our e-commerce platform from scratch and took charge of our SEO and digital marketing. Within four months, our organic search traffic grew significantly, and the website loads with lightning speed across mobile devices worldwide.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sunita Maharjan" },
      "datePublished": "2026-02-15",
      "reviewBody": "Their creative team produced our commercial promotional videos, redesigned our brand identity, and managed our paid ad funnels across Meta and Google. Student consultation inquiries doubled during our primary intake season.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Bikash Thapa" },
      "datePublished": "2026-01-20",
      "reviewBody": "We partnered with Optiverse IT Solution for dedicated web application engineering, modern UI/UX design, and IT support. Their technical excellence, transparent communication, and reliable sprint deadlines make them a trusted long-term partner.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://optiverseits.com.np/#website",
  "url": "https://optiverseits.com.np",
  "name": "Optiverse IT Solution",
  "alternateName": [
    "Optiverse IT Solution Pvt. Ltd.",
    "OptiverseIT",
    "OptiverseITSolution",
    "Optiverse ITS",
    "Optiverse IT Solutions",
    "Optiverse IT",
    "Optiverse I.T. Solution Pvt. Ltd.",
    "IT Solution Nepal"
  ],
  "description": "Leading IT solutions and digital agency in Nepal offering web development, SEO, digital marketing, video production, graphic designing, and enterprise IT services.",
  "publisher": { "@id": "https://optiverseits.com.np/#business" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://optiverseits.com.np/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "en-US"
};

export default function HomePage() {
  const servicesCatalogSchema = generateServicesCatalogSchema();

  return (
    <>
      <SEOHead
        title="Optiverse IT Solution Pvt. Ltd. | Best IT Solution & Web Agency Nepal"
        description="Optiverse IT Solution Pvt. Ltd. (OptiverseIT / OptiverseITSolution) is Nepal's premier IT solution company in Lalitpur. Custom web development, SEO services, digital marketing, AI video creation & tech consulting."
        keywords="optiverse it solution, optiverse it solution pvt ltd, optiverseit, optiverseitsolution, it solution, itsolution, it solutions nepal, it company nepal, optiverse, optiverse its, optiverse it, best it solution company nepal, digital marketing Nepal, SEO services Nepal, branding agency Nepal, web development Nepal, IT company Lalitpur Kathmandu"
        canonicalPath="/"
        structuredData={[
          homePageSchema,
          localBusinessSchema,
          websiteSchema,
          servicesCatalogSchema,
          servicesFaqSchema
        ]}
      />
      <HeroSection />
      <HeaderStrape />
      <WhyOptiverseSection />
      <OurServicesSection />
      <BlogsSection />
      <TestimonialsSection />
      <TransformationCTASection />
      <Footer />
    </>
  );
}
