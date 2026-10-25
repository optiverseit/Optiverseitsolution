// src/data/websitePackagesData.ts
import travelToursWebImg from "../assets/sectors/travel-tours.jpg";
import trekkingWebImg from "../assets/sectors/trekking.jpg";
import packageTravelWebImg from "../assets/sectors/package-based-travel.jpg";
import clinicDentalWebImg from "../assets/sectors/clinic-dental.jpg";
import schoolCollegeWebImg from "../assets/sectors/school-college-consultancy.jpg";
import hotelRestaurantWebImg from "../assets/sectors/hotel-restaurant.jpg";
import retailEcommerceWebImg from "../assets/sectors/retail-ecommerce.jpg";
import constructionLegalWebImg from "../assets/sectors/construction-legal-accounting.jpg";
import startupCompanyWebImg from "../assets/sectors/startup-growing-company.jpg";
import travelStarterWebImg from "../assets/sectors/travel-starter.jpg";
import travelBudgetWebImg from "../assets/sectors/travel-budget.jpg";
import travelPremiumWebImg from "../assets/sectors/travel-premium.jpg";
import hotelStarterWebImg from "../assets/sectors/hotel-starter.jpg";
import hotelPremiumWebImg from "../assets/sectors/hotel-premium.jpg";
import clinicStarterWebImg from "../assets/sectors/clinic-starter.jpg";
import clinicPremiumWebImg from "../assets/sectors/clinic-premium.jpg";
import schoolStarterWebImg from "../assets/sectors/school-starter.jpg";
import schoolPremiumWebImg from "../assets/sectors/school-premium.jpg";
import retailStarterWebImg from "../assets/sectors/retail-starter.jpg";
import retailPremiumWebImg from "../assets/sectors/retail-premium.jpg";
import corporateStarterWebImg from "../assets/sectors/corporate-starter.jpg";
import corporatePremiumWebImg from "../assets/sectors/corporate-premium.jpg";
import startupStarterWebImg from "../assets/sectors/startup-starter.jpg";
import startupPremiumWebImg from "../assets/sectors/startup-premium.jpg";

export type DeliverableItem = {
  title: string;
  desc: string;
};

export type DeliverableCategory = {
  category: string;
  badge?: string;
  items: DeliverableItem[];
};

export type SectorAdaptation = {
  sector: string;
  iconName: string;
  adaptation: string;
};

export type OngoingCareOption = {
  plan: string;
  monthlyFee: string;
  includes: string;
  isPopular?: boolean;
};

export type OptionalModule = {
  id: string;
  title: string;
  sectors: string;
  value: string;
};

export type PaymentStructure = {
  advance: string;
  milestone?: string;
  final: string;
  maintenanceNote: string;
  steps: { percentage: string; stage: string; note: string }[];
};

export type WebsitePackage = {
  id: string;
  name: string;
  tier: string;
  tagline: string;
  bestFor: string;
  startingPrice: string;
  priceNumber: number;
  priceSubtext: string;
  priceBadge?: string;
  timeline: string;
  maintenance: string;
  adBudgetNote?: string;
  isPopular?: boolean;
  badge?: string;
  summaryHighlights: string[];
  deliverableCategories: DeliverableCategory[];
  sectorAdaptations: SectorAdaptation[];
  ongoingOptions?: OngoingCareOption[];
  optionalModules?: OptionalModule[];
  paymentStructure: PaymentStructure;
  whyThisWorks: string;
  typicalMarketComparison: string;
};

export const websitePackages: WebsitePackage[] = [
  {
    id: "starter-website",
    name: "Starter Website",
    tier: "Low-Friction SME Launch",
    tagline: "Modern, credible business website with Google visibility in 15–20 working days.",
    bestFor:
      "Startups, small retail shops, restaurants, consultancies, professionals, and businesses that need a credible online presence quickly.",
    startingPrice: "24,999/-",
    priceNumber: 24999,
    priceSubtext: "One-time investment",
    priceBadge: "Budget-Friendly",
    timeline: "15–20 working days after content and approvals",
    maintenance: "Optional from NPR 3,999/month",
    badge: "Fastest Turnaround",
    typicalMarketComparison: "Nepali market average: NPR 40,000–120,000 for standard business sites.",
    summaryHighlights: [
      "6–10 Mobile-Responsive Pages",
      "Modern design customized with client branding",
      "Basic CMS (Content Management System)",
      "Social Media Integrations",
      "Image and Video Integration",
      "Direct WhatsApp / Viber / Call inquiry integration",
      "Google Business Profile creation / optimization",
      "1 Month of dedicated technical support",
    ],
    deliverableCategories: [
      {
        category: "Website Design & Structure",
        items: [
          {
            title: "6–10 Mobile-Responsive Pages",
            desc: "Custom-designed 6 to 10 mobile-ready pages including Home, About, Services/Products, Gallery/Portfolio, Contact, and custom business pages.",
          },
          {
            title: "Basic CMS (Content Management System)",
            desc: "Simple, intuitive admin interface to update text, photos, services, announcements, and blog notices easily.",
          },
          {
            title: "Image and Video Integration",
            desc: "Optimized multimedia galleries, high-resolution photo showcases, and responsive video embedding for YouTube, Vimeo, and Reels.",
          },
          {
            title: "Social Media Integrations",
            desc: "Seamless connection with Facebook, Instagram, TikTok, LinkedIn, OpenGraph previews, and floating WhatsApp/Viber quick-chat.",
          },
          {
            title: "Premium Customized Design",
            desc: "Tailored to your brand typography, logo, and colors for an immediate trustworthy impression.",
          },
          {
            title: "Ultra-Fast Loading Performance",
            desc: "Optimized image compression and modern clean code for flawless viewing on standard Nepali mobile 4G/WiFi.",
          },
        ],
      },
      {
        category: "Lead Capture & Communication",
        items: [
          {
            title: "Multi-Channel Inquiry Form",
            desc: "Instant customer inquiries connected with email alerts and direct WhatsApp/Viber quick-chat buttons.",
          },
          {
            title: "Interactive Google Maps Embedding",
            desc: "Precise location pinning so local walk-in customers and delivery drivers find you effortlessly.",
          },
          {
            title: "Social Media Share Integration",
            desc: "Direct links and OpenGraph previews ready for Facebook, Instagram, and LinkedIn sharing.",
          },
        ],
      },
      {
        category: "Google Visibility & Technical Launch",
        items: [
          {
            title: "Google Business Profile (GBP)",
            desc: "Creation or complete verification optimization to capture local Kathmandu/Lalitpur/Pokhara searches.",
          },
          {
            title: "Domain & Hosting Deployment",
            desc: "Full setup support on fast servers; domain and hosting billed transparently at actual annual cost.",
          },
          {
            title: "1 Month Post-Launch Support",
            desc: "Security bug fixes, minor content tweaks, and post-launch troubleshooting included free.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Travel / Tours / Trekking",
        iconName: "Compass",
        adaptation:
          "Key destination highlights, popular tour packages, high-res photo gallery, direct WhatsApp inquiry button, and booking contact form.",
      },
      {
        sector: "Clinics / Dental Offices",
        iconName: "Stethoscope",
        adaptation:
          "Doctor & staff profiles, key medical/dental treatments, working hours, clinic location map, and consultation inquiry workflow.",
      },
      {
        sector: "Schools / Colleges / Consultancies",
        iconName: "GraduationCap",
        adaptation:
          "Offered courses & study abroad programs, admission inquiry form, campus photo gallery, and latest notices board.",
      },
      {
        sector: "Hotels & Restaurants",
        iconName: "Utensils",
        adaptation:
          "Digital food/drinks menu or room photo tour, opening timings, interactive location map, and table/room reservation form.",
      },
      {
        sector: "Retail / E-commerce Shops",
        iconName: "ShoppingBag",
        adaptation:
          "Online product showcase catalogue without complex checkout friction; customers order or inquire directly via WhatsApp/phone.",
      },
      {
        sector: "Construction / Legal / Accounting",
        iconName: "Briefcase",
        adaptation:
          "Core professional services, past completed projects & case studies, executive team credentials, and quote request form.",
      },
      {
        sector: "Startups & Emerging Businesses",
        iconName: "Rocket",
        adaptation:
          "High-converting landing page, founder story section, clear value proposition explanation, and investor/lead capture form.",
      },
    ],
    paymentStructure: {
      advance: "50% Advance",
      milestone: "None (Streamlined 2-stage)",
      final: "50% Before Final Live Launch",
      maintenanceNote: "Optional maintenance from NPR 3,999/month (covers updates, backups & security).",
      steps: [
        { percentage: "50%", stage: "Project Kickoff", note: "Upon requirement approval and content collection" },
        { percentage: "50%", stage: "Live Handover", note: "After staging preview approval before pointing live domain" },
      ],
    },
    whyThisWorks:
      "This package gives a business a professional presence at a price point below the typical NPR 40,000–120,000 business-website range, while still including SEO setup and Google Business Profile support—features that many low-cost template offers omit. It is designed to be an entry product that upgrades naturally into the Growth package.",
  },
  {
    id: "growth-website-marketing",
    name: "Growth + SEO Website",
    tier: "Flagship / Most Popular",
    tagline: "Dynamic CMS website combined with mid-level SEO, API integrations, and fast booking workflows.",
    bestFor:
      "Booking, Reservation, travel agencies, trekking companies, package-tour operators, clinics, schools, consultancies, hotels, restaurants, professional service firms, and growing businesses needing dynamic websites & SEO.",
    startingPrice: "44,999/-",
    priceNumber: 44999,
    priceSubtext: "One-time investment",
    priceBadge: "Reasonable Pricing",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "Optional from NPR 4,999/month",
    isPopular: true,
    badge: "Recommended",
    typicalMarketComparison: "Website build (NPR 60K–120K) with enterprise SEO and API workflows.",
    summaryHighlights: [
      "12–18 Pages",
      "Everything included in Starter Website",
      "Secured and 2X Faster",
      "Self-managed CMS for blogs, packages, notices & services",
      "Blogs with video and articles included",
      "Direct WhatsApp / Viber / Call inquiry integration",
      "Mid Level SEO & Local SEO (Schema, GBP & Location optimization)",
      "1 Months of included technical support & speed tuning",
    ],
    deliverableCategories: [
      {
        category: "Website Deliverables (12–18 Pages)",
        badge: "Dynamic CMS Architecture",
        items: [
          {
            title: "12–18 Custom-Designed Pages",
            desc: "Completely tailored layout reflecting enterprise polish—no cookie-cutter templates.",
          },
          {
            title: "Everything included in Starter Website",
            desc: "Includes all Starter features: custom branding, mobile responsiveness, social media links, image/video galleries, and inquiry integration.",
          },
          {
            title: "Secured and 2X Faster Performance",
            desc: "Sub-second load times with advanced caching, image optimization, SSL certificate, and robust anti-spam shielding.",
          },
          {
            title: "Static and Dynamic Pages (API Integration)",
            desc: "Static and Dynamic pages through api Integration for automated data sync, live updates, and external service connectors.",
          },
          {
            title: "Blogs with Video and Articles Included",
            desc: "Dynamic CMS publishing engine supporting full articles, embedded video reels/YouTube, categories, and author profiles.",
          },
          {
            title: "Direct WhatsApp / Viber / Call Inquiry Integration",
            desc: "Multi-channel lead capture with quick-action buttons connecting directly to WhatsApp, Viber, and phone lines.",
          },
          {
            title: "Mid-Level SEO & Local SEO",
            desc: "Location-based landing pages, rich snippet schema markup, keyword architecture, and Google Business Profile optimization.",
          },
          {
            title: "1 Months Technical Support & Speed Tuning",
            desc: "Priority engineering support, monthly health audits, and post-launch speed tuning included.",
          },
        ],
      },
    ],
    ongoingOptions: [
      {
        plan: "Visibility Care",
        monthlyFee: "NPR 14,999/month",
        includes: "8 branded static posts, 2 edited reels/videos, weekly Google Business Profile updates, and basic monthly reach report.",
      },
      {
        plan: "Growth Care",
        monthlyFee: "NPR 24,999/month",
        isPopular: true,
        includes: "12 branded static posts, 4 custom video reels, GBP management, active Meta Ad campaign management, and in-depth ROI report.",
      },
      {
        plan: "Lead Growth Care",
        monthlyFee: "NPR 39,999/month",
        includes: "Multi-platform content (FB, IG, TikTok, LinkedIn), weekly video reels, end-to-end paid ad funnel, landing page updates & conversion tracking.",
      },
    ],
    sectorAdaptations: [
      {
        sector: "Travel / Tours / Trekking",
        iconName: "Compass",
        adaptation:
          "Tour package detail pages, day-by-day itineraries, permit information, verified traveler testimonials, destination SEO, travel reels, and Meta lead campaigns.",
      },
      {
        sector: "Package-Based Travel & Tours",
        iconName: "MapPin",
        adaptation:
          "Fixed departure calendar, pricing tables with inclusions/exclusions, instant booking inquiry flow, and seasonal trek promotion reels.",
      },
      {
        sector: "Clinics / Dental Offices",
        iconName: "Stethoscope",
        adaptation:
          "Treatment service hubs, doctor specialty profiles, appointment workflow, patient education reels/posts, and local 'dentist near me' SEO.",
      },
      {
        sector: "Schools / Colleges / Consultancies",
        iconName: "GraduationCap",
        adaptation:
          "Academic program pages, counselor consultation funnel, notice announcements, student testimonial videos, and targeted intake admission campaigns.",
      },
      {
        sector: "Hotels & Restaurants",
        iconName: "Utensils",
        adaptation:
          "Room suites & food menu presentation, festival discounts, Google Maps local ranking, culinary reels, and table reservation Meta campaigns.",
      },
      {
        sector: "Professional Services (Legal, Tax, Engineering)",
        iconName: "Briefcase",
        adaptation:
          "Authority-building blog content, corporate case studies, free consultation funnels, LinkedIn/Facebook thought leadership, and local search visibility.",
      },
    ],
    paymentStructure: {
      advance: "40% Advance Payment",
      milestone: "30% Upon Interactive Design Approval",
      final: "30% Before Live Launch",
      maintenanceNote: "Monthly marketing retainer billed in advance on the 1st of each month.",
      steps: [
        { percentage: "40%", stage: "Discovery & Kickoff", note: "Initial deposit upon project onboarding and asset briefing" },
        { percentage: "30%", stage: "Design & CMS Approval", note: "After full visual design and interactive prototype sign-off" },
        { percentage: "30%", stage: "Launch & Go-Live", note: "Upon full deployment, testing, and marketing campaign activation" },
      ],
    },
    whyThisWorks:
      "This is Optiverse's main profit and differentiation package. It combines website development with ongoing content, local visibility, and lead generation—exactly where purely technical competitors such as Webtech Nepal are less prominent, and where Optiverse's video/multimedia capability becomes a real advantage.",
  },
  {
    id: "custom-business-system",
    name: "Custom Systems",
    tier: "Enterprise Workflows & Portals",
    tagline: "Custom web software, local e-commerce, and automated operational pipelines.",
    bestFor:
      "E-commerce sellers, travel companies needing booking workflows, clinics requiring appointment management, schools/consultancies needing admission or CRM workflows, construction firms needing project enquiry systems, and startups building operational tools.",
    startingPrice: "Based on Requirements",
    priceNumber: 0,
    priceSubtext: "Custom scoped to your workflows, modules & integrations",
    priceBadge: "Custom Scope",
    timeline: "6–10 weeks for standard systems; 10–16 weeks for complex systems",
    maintenance: "From NPR 7,999/month, or 10–15% of project cost annually",
    badge: "Full Custom Engineering",
    typicalMarketComparison: "Nepali custom ERP/e-commerce platforms often cost NPR 200,000–500,000+; Optiverse provides modular predictability.",
    summaryHighlights: [
      "Discovery workshop & comprehensive workflow blueprints",
      "Custom UI/UX interface designed exclusively for your workflows",
      "Dedicated Admin Dashboard with Role-Based User Access",
      "Database-backed booking, order, or application management",
      "eSewa, Khalti, Fonepay & ConnectIPS digital payment integration",
      "Exportable analytics, invoices, and custom report generators",
      "3 Months post-launch SLA support + staff operational training",
    ],
    deliverableCategories: [
      {
        category: "Core Engineering Deliverables",
        badge: "Architected for Scale",
        items: [
          {
            title: "Discovery Workshop & Workflow Documentation",
            desc: "In-depth requirement gathering, database schemas, user-journey mapping, and functional system specifications.",
          },
          {
            title: "Custom UI/UX Design System",
            desc: "Tailor-made screens for public users, registered customers, staff, and system administrators.",
          },
          {
            title: "Centralized Admin Dashboard",
            desc: "Comprehensive control panel to monitor inquiries, manage inventory, review bookings, approve records, and manage team members.",
          },
          {
            title: "Role-Based User Access (RBAC)",
            desc: "Granular access levels for Super Admins, Managers, Staff, and Customers to ensure complete data security.",
          },
          {
            title: "Database-Backed Workflow Engine",
            desc: "Reliable SQL/NoSQL transactional database tracking bookings, orders, student leads, or project milestones.",
          },
          {
            title: "Reports & Data Export Engine",
            desc: "Instant generation and export of financial records, lead activity, and customer data in CSV, Excel, and PDF formats.",
          },
          {
            title: "API & Third-Party Integrations",
            desc: "Clean integrations with SMS gateways (Sparrow SMS, Aakash SMS), payment gateways, and third-party CRMs.",
          },
          {
            title: "Cloud Deployment & Hardened Security",
            desc: "Deployed on resilient cloud servers with automated daily backups, SSL encryption, rate limiting, and DDoS mitigation.",
          },
          {
            title: "User Training & Video Documentation",
            desc: "Hands-on walkthroughs for your administrative staff plus step-by-step video manuals for future reference.",
          },
          {
            title: "3 Months Post-Launch Support",
            desc: "Dedicated SLA engineering support for optimization, troubleshooting, and continuous workflow assurance.",
          },
        ],
      },
    ],
    optionalModules: [
      {
        id: "online-booking",
        title: "Online Booking & Appointment Scheduling",
        sectors: "Clinics, dental offices, beauty salons, professional consultants",
        value: "Reduces phone-based scheduling friction and captures patient/client leads automatically with calendar slot management.",
      },
      {
        id: "tour-booking",
        title: "Tour & Fixed Departure Booking Engine",
        sectors: "Travel agencies, trekking operators, package tour providers",
        value: "Manages fixed departure dates, group capacity, itinerary stages, customer passport details, and booking deposit records.",
      },
      {
        id: "ecommerce-catalogue",
        title: "E-Commerce Catalogue & Cart Checkout",
        sectors: "Retail shops, fashion boutiques, e-commerce brands",
        value: "Enables online selling with product attributes (size/color), shopping cart, discounts, stock alerts, and delivery fee calculation.",
      },
      {
        id: "nepal-payments",
        title: "eSewa / Khalti / Fonepay / ConnectIPS Integration",
        sectors: "E-commerce, travel, educational institutes, service firms",
        value: "Accepts domestic digital payments seamlessly; reduces cash-on-delivery defaults and verifies transactions automatically.",
      },
      {
        id: "admission-crm",
        title: "Admission & Student Application System",
        sectors: "Schools, colleges, abroad education consultancies",
        value: "Organizes student leads, document uploads, visa stages, counselor assignment, and automated SMS/email follow-ups.",
      },
      {
        id: "crm-pipeline",
        title: "CRM & Inquiry Follow-Up Pipeline",
        sectors: "Travel companies, real estate, clinics, corporate B2B",
        value: "Tracks customer inquiries from first touchpoint to closed deal; prevents dropped inquiries and measures team performance.",
      },
      {
        id: "invoice-quotation",
        title: "Digital Quotation & Invoicing Module",
        sectors: "Construction, interior designers, accounting, legal firms",
        value: "Speeds up quote generation, branded PDF invoicing, payment tracking, and structured audit record-keeping.",
      },
      {
        id: "bilingual-system",
        title: "Multi-Language Nepali & English Interface",
        sectors: "Tourism portals, government-facing platforms, community education",
        value: "Improves accessibility and user conversion for both domestic Nepali-speaking users and international tourists.",
      },
      {
        id: "inventory-delivery",
        title: "Inventory & Local Delivery Coordination",
        sectors: "Retail, consumer e-commerce, food supply distributors",
        value: "Tracks real-time stock levels, low-stock warnings, delivery hub assignments, and courier dispatch tracking.",
      },
    ],
    sectorAdaptations: [
      {
        sector: "Travel / Trekking / Package Tours",
        iconName: "Compass",
        adaptation:
          "Automated tour booking engine, customizable itineraries, fixed departures schedule, traveler document intake, and deposit gateway.",
      },
      {
        sector: "Clinics / Hospitals / Dental",
        iconName: "Stethoscope",
        adaptation:
          "Doctor schedule management, patient token/appointment booking, automated SMS reminders, and treatment history records.",
      },
      {
        sector: "Schools / Colleges / Consultancies",
        iconName: "GraduationCap",
        adaptation:
          "Student lead management, online application submission, document verification workflow, and fee payment tracking.",
      },
      {
        sector: "Retail & E-commerce Sellers",
        iconName: "ShoppingBag",
        adaptation:
          "Multi-category product catalogue, shopping cart, eSewa/Khalti checkout, delivery zone rates, and automated stock alerts.",
      },
      {
        sector: "Construction & Engineering",
        iconName: "Building2",
        adaptation:
          "Client quotation builder, architectural project milestone showcase, material enquiry portal, and subcontractor task tracker.",
      },
      {
        sector: "Startups & Digital Platforms",
        iconName: "Rocket",
        adaptation:
          "Scalable MVP architecture, customized user onboarding, subscription/billing logic, and third-party API integration.",
      },
    ],
    paymentStructure: {
      advance: "30% Advance Payment",
      milestone: "30% Design Approval + 30% Demo Sign-off",
      final: "10% Final Live Launch Handover",
      maintenanceNote: "Support and maintenance from NPR 7,999/month, or 10–15% of project cost annually with SLA uptime.",
      steps: [
        { percentage: "30%", stage: "Discovery & Initiation", note: "Upon project kickoff and workflow architecture sign-off" },
        { percentage: "30%", stage: "Design & UX Approval", note: "After complete wireframe, UI design, and prototype approval" },
        { percentage: "30%", stage: "Development & Staging Demo", note: "After core system build, database integration, and feature walkthrough" },
        { percentage: "10%", stage: "Final Deployment & Training", note: "Upon live cloud deployment, staff training, and final handover" },
      ],
    },
    whyThisWorks:
      "Nepali e-commerce and booking platforms require more than a normal website: local payment integration, delivery logic, product management, and operational workflows. Market references place e-commerce development around NPR 120,000–300,000 or higher, making NPR 149,999 a credible entry point for a properly scoped custom system. This package also prevents Optiverse from being trapped in low-margin website work while creating recurring maintenance revenue.",
  },
];

export type SectorMarketFit = {
  buyerGroup: string;
  iconName: string;
  mainNeed: string;
  bestPackage: string;
  packageId: string;
  whyItFits: string;
};

export type SectorTier = {
  tierId: "starter" | "budget" | "premium";
  name: string;
  badge?: string;
  price: string;
  pagesCount: string;
  deliveryTimeline: string;
  packageId: string;
  imageUrl?: string;
  requirements: string[];
  features: string[];
};

export type IndividualSectorCard = {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  bestPackage: string;
  packageId: string;
  startingPrice: string;
  mainNeed: string;
  whyItFits: string;
  keyFeatures: string[];
  imageUrl: string;
  tiers: SectorTier[];
};

export const individualSectorCards: IndividualSectorCard[] = [
  {
    id: "travel-tours",
    title: "Travel & Tours",
    subtitle: "National & International",
    iconName: "Globe",
    badge: "Inbound & Outbound",
    bestPackage: "Budget-Friendly Website",
    packageId: "growth-website-marketing",
    startingPrice: "44,999/-",
    imageUrl: travelToursWebImg,
    mainNeed: "Visual credibility, multi-destination package pages, WhatsApp/Messenger inquiries, Google Maps visibility, and dynamic booking forms.",
    whyItFits: "Tourism buyers research visually and contact through WhatsApp/Viber; dynamic SEO and Google Business Profile strongly influence bookings.",
    keyFeatures: [
      "International & domestic holiday package pages",
      "Multi-channel WhatsApp/Viber inquiry button",
      "Mid-level SEO setup & API integration",
    ],
    tiers: [
      {
        tierId: "starter",
        name: "Starter",
        badge: "Starter Package",
        price: "24,999/-",
        pagesCount: "6–8 Pages",
        deliveryTimeline: "15–20 Working Days",
        packageId: "starter-website",
        imageUrl: travelStarterWebImg,
        requirements: [
          "Client provides destination itineraries & trip photos",
          "Standard brand logo & contact details",
          "Domain & cPanel / DNS configuration access",
        ],
        features: [
          "National & international destination showcase pages",
          "Direct WhatsApp & Viber instant booking button",
          "Google Maps location indexing & local profile setup",
          "Mobile-first responsive layout (100% 4G speed)",
          "Standard SSL security & inquiry contact forms",
          "Official .np / .com domain configuration & DNS setup",
          "1 Professional business email setup (e.g. info@company.com)",
          "Click-to-call mobile buttons & email inquiry notifications",
          "Social media integration (Facebook, Instagram & TikTok)",
        ],
      },
      {
        tierId: "budget",
        name: "Budget-Friendly",
        badge: "Budget-Friendly Package",
        price: "44,999/-",
        pagesCount: "12–18 Pages",
        deliveryTimeline: "3–4 Weeks",
        packageId: "growth-website-marketing",
        imageUrl: travelBudgetWebImg,
        requirements: [
          "Custom branding guidelines & logo vector files",
          "Destination package breakdown & pricing tables",
          "Staged milestone preview & approval feedback",
        ],
        features: [
          "Full Dynamic CMS for tours, packages, notices & blogs",
          "Day-by-day itinerary view with high-res photo gallery",
          "Mid-level SEO optimization & local Nepal schema",
          "Multi-channel inquiry triggers (WhatsApp, Viber, Call)",
          "1 Month post-launch dedicated technical maintenance",
          "Downloadable PDF tour itinerary brochure button",
          "Customer reviews, star ratings & traveler testimonial slider",
          "Dual currency display (NPR & USD estimated rates)",
          "2X Speed optimization (under 2s load time) & daily backups",
        ],
      },
      {
        tierId: "premium",
        name: "Premium",
        badge: "Premium Package",
        price: "79,999/-",
        pagesCount: "20+ Custom Pages",
        deliveryTimeline: "6–8 Weeks",
        packageId: "custom-business-system",
        imageUrl: travelPremiumWebImg,
        requirements: [
          "Official business registration & payment receiving details",
          "Complete tour packages, inclusions/exclusions & departure schedules",
          "Multi-role administrative access specifications",
        ],
        features: [
          "Complete online booking & departure calendar system",
          "Integrated eSewa, Khalti & Fonepay deposit payments",
          "Interactive custom tour builder & inquiry workflows",
          "Dominant local & international organic SEO ranking",
          "3 Months priority SLA support & performance tuning",
          "Automated booking vouchers & instant PDF invoice generation",
          "Multi-language toggle (English & Nepali visitor interface)",
          "Email notification system for instant customer booking alerts",
          "Centralized booking & inquiry management dashboard with exports",
        ],
      },
    ],
  },
  {
    id: "trekking",
    title: "Trekking & Expeditions",
    subtitle: "Himalayan Adventures",
    iconName: "Compass",
    badge: "Permits & Itineraries",
    bestPackage: "Budget-Friendly Website",
    packageId: "growth-website-marketing",
    startingPrice: "44,999/-",
    imageUrl: trekkingWebImg,
    mainNeed: "Detailed day-by-day itineraries, altitude maps, permit checklists, verified trekker testimonials, and interactive route showcases.",
    whyItFits: "Foreign and domestic trekkers demand transparency on elevation, permits, and guides; dynamic pages and reviews convert leads rapidly.",
    keyFeatures: [
      "Day-by-day trek itineraries & altitude charts",
      "Permit, packing & season guidelines",
      "Google Business Profile local SEO ranking",
    ],
    tiers: [
      {
        tierId: "starter",
        name: "Starter",
        badge: "Starter Package",
        price: "24,999/-",
        pagesCount: "6–8 Pages",
        deliveryTimeline: "15–20 Working Days",
        packageId: "starter-website",
        imageUrl: travelStarterWebImg,
        requirements: [
          "Trek descriptions, route highlights & elevation data",
          "Guide profiles & agency registration details",
          "Standard hosting & domain credentials",
        ],
        features: [
          "Top Nepal trek showcases (EBC, Annapurna, Langtang)",
          "Permit checklists, packing lists & season guidelines",
          "Direct WhatsApp & Viber trek booking trigger",
          "Google Maps local registration & business profile",
          "Mobile-first responsive design for international visitors",
          "Free .np domain setup & DNS configuration",
          "1 Professional business email account",
          "Click-to-call direct trek inquiry & email alerts",
          "Social media profiles & mountain photo gallery integration",
        ],
      },
      {
        tierId: "budget",
        name: "Budget-Friendly",
        badge: "Budget-Friendly Package",
        price: "44,999/-",
        pagesCount: "14–18 Pages",
        deliveryTimeline: "3–4 Weeks",
        packageId: "growth-website-marketing",
        imageUrl: travelBudgetWebImg,
        requirements: [
          "Detailed day-by-day trek breakdown & altitude profiles",
          "High-res mountain photography & verified reviews",
          "Design approval feedback at each development stage",
        ],
        features: [
          "Self-managed dynamic CMS for unlimited trek packages",
          "Interactive day-by-day altitude charts & teahouse info",
          "Verified trekker review engine & testimonial slider",
          "Mid-level international & Nepal local SEO rankings",
          "1 Month post-launch support & Google Search indexing",
          "Downloadable PDF trek itinerary & elevation map guide",
          "Currency converter display (USD, EUR, NPR)",
          "Inquiry lead capture with gear rental checklist",
          "Fast cloud CDN caching & daily automated backup",
        ],
      },
      {
        tierId: "premium",
        name: "Premium",
        badge: "Premium Package",
        price: "79,999/-",
        pagesCount: "20+ Custom Pages",
        deliveryTimeline: "6–8 Weeks",
        packageId: "custom-business-system",
        imageUrl: travelPremiumWebImg,
        requirements: [
          "Official business registration & payment receiving details",
          "Complete tour packages, inclusions/exclusions & departure schedules",
          "Team role permissions for expedition operations desk",
        ],
        features: [
          "Interactive 3D elevation maps & GPS route coordinates",
          "Online permit, guide & gear reservation booking engine",
          "Instant eSewa, Khalti & international deposit checkout",
          "Automated WhatsApp follow-ups",
          "3 Months priority SLA support & CDN global acceleration",
          "Automated booking confirmation voucher & invoice PDF",
          "Multi-language switcher for global travelers (English, German, Nepali)",
          "Email notification system for guide & client",
          "Dedicated operations admin dashboard with CSV/Excel exports",
        ],
      },
    ],
  },
  {
    id: "package-based-travel",
    title: "Package-Based Travel",
    subtitle: "Fixed Departures & Groups",
    iconName: "Calendar",
    badge: "Departure Calendars",
    bestPackage: "Budget-Friendly Website",
    packageId: "growth-website-marketing",
    startingPrice: "44,999/-",
    imageUrl: packageTravelWebImg,
    mainNeed: "Fixed departure dates, transparent pricing tables with inclusions/exclusions, instant group booking flow, and seasonal campaign calendars.",
    whyItFits: "Pilgrimage and holiday groups book on fixed schedules; timely booking workflows and search rankings fill departure seats fast.",
    keyFeatures: [
      "Fixed departure calendar & group seat slots",
      "Pricing tables with clear inclusions/exclusions",
      "Blogs with videos & inquiry triggers",
    ],
    tiers: [
      {
        tierId: "starter",
        name: "Starter",
        badge: "Starter Package",
        price: "24,999/-",
        pagesCount: "6–8 Pages",
        deliveryTimeline: "15–20 Working Days",
        packageId: "starter-website",
        imageUrl: travelStarterWebImg,
        requirements: [
          "Holiday package descriptions & fixed departure dates",
          "Transparent pricing table with inclusions/exclusions",
          "Agency telephone & WhatsApp contact setup",
        ],
        features: [
          "Fixed departure holiday & pilgrimage group tour cards",
          "Seasonal pricing tables with inclusion/exclusion tabs",
          "Direct WhatsApp & Viber group inquiry button",
          "Google Business Profile location indexing",
          "Fast loading across mobile 4G networks in Nepal",
        ],
      },
      {
        tierId: "budget",
        name: "Budget-Friendly",
        badge: "Budget-Friendly Package",
        price: "44,999/-",
        pagesCount: "12–18 Pages",
        deliveryTimeline: "3–4 Weeks",
        packageId: "growth-website-marketing",
        imageUrl: packageTravelWebImg,
        requirements: [
          "Departure calendar schedule & available seat quotas",
          "High-res group tour photos & marketing videos",
          "Milestone review schedule and approval sign-off",
        ],
        features: [
          "Interactive departure calendar with live month filter",
          "Seat vacancy status tags & group booking flow",
          "Dynamic CMS for publishing seasonal group packages",
          "Local SEO optimization for domestic & international leads",
          "1 Month post-launch maintenance & security backups",
        ],
      },
      {
        tierId: "premium",
        name: "Premium",
        badge: "Premium Package",
        price: "79,999/-",
        pagesCount: "20+ Custom Pages",
        deliveryTimeline: "6–8 Weeks",
        packageId: "custom-business-system",
        imageUrl: travelPremiumWebImg,
        requirements: [
          "Payment merchant account for advance seat deposits",
          "Passenger allocation rules & early-bird discount logic",
          "Admin access permissions for travel booking desk",
        ],
        features: [
          "Real-time seat reservation & passenger booking engine",
          "Instant eSewa, Khalti & Fonepay online deposit checkout",
          "Automated booking confirmation emails & manifest export",
          "Dynamic group pricing rules & promotional voucher codes",
          "3 Months enterprise SLA support & CDN acceleration",
        ],
      },
    ],
  },
  {
    id: "clinic-dental",
    title: "Clinic or Dental Office",
    subtitle: "Healthcare & Polyclinics",
    iconName: "Stethoscope",
    badge: "Doctor Appointments",
    bestPackage: "Budget-Friendly Website",
    packageId: "growth-website-marketing",
    startingPrice: "44,999/-",
    imageUrl: clinicDentalWebImg,
    mainNeed: "Doctor specialty profiles, treatment service cards, clinic timings, interactive location map, and repeatable appointment inquiry workflows.",
    whyItFits: "Patients seek immediate trust and location clarity; 'dentist near me' local SEO combined with WhatsApp booking captures walk-ins and appointments.",
    keyFeatures: [
      "Doctor profiles & clinic timing schedules",
      "Direct appointment inquiry booking workflow",
      "Local search SEO & patient education posts",
    ],
    tiers: [
      {
        tierId: "starter",
        name: "Starter",
        badge: "Starter Package",
        price: "24,999/-",
        pagesCount: "6–8 Pages",
        deliveryTimeline: "15–20 Working Days",
        packageId: "starter-website",
        imageUrl: clinicStarterWebImg,
        requirements: [
          "Doctor bio, medical degrees & clinic timings",
          "Core treatment services & clinic contact telephone",
          "Domain & hosting configuration access",
        ],
        features: [
          "Doctor & dental specialist profile cards",
          "Core medical treatments & consultation fee guide",
          "Direct WhatsApp appointment request trigger",
          "Google Maps local SEO setup for 'doctor near me'",
          "Fast mobile-friendly layout with SSL encryption",
        ],
      },
      {
        tierId: "budget",
        name: "Budget-Friendly",
        badge: "Budget-Friendly Package",
        price: "44,999/-",
        pagesCount: "12–16 Pages",
        deliveryTimeline: "3–4 Weeks",
        packageId: "growth-website-marketing",
        imageUrl: clinicDentalWebImg,
        requirements: [
          "Department breakdowns & treatment descriptions",
          "Clinic interior & equipment high-res photos",
          "Patient intake questionnaire guidelines",
        ],
        features: [
          "Online appointment inquiry scheduling workflow",
          "Department treatment cards with procedure details",
          "Patient education blog & hygiene notice CMS",
          "Local Nepal healthcare schema & top Google Maps ranking",
          "1 Month post-launch support & reception staff training",
        ],
      },
      {
        tierId: "premium",
        name: "Premium",
        badge: "Premium Package",
        price: "79,999/-",
        pagesCount: "18+ Custom Pages",
        deliveryTimeline: "6–8 Weeks",
        packageId: "custom-business-system",
        imageUrl: clinicPremiumWebImg,
        requirements: [
          "Doctor consultation fee payment rules",
          "Clinic doctor shift schedule calendar specs",
          "Patient privacy consent & data guidelines",
        ],
        features: [
          "Doctor shift schedule & online time-slot booking portal",
          "Consultation fee prepayment via eSewa, Khalti & cards",
          "Automated SMS/WhatsApp appointment reminders",
          "Patient inquiry management dashboard for reception",
          "3 Months priority SLA support & encrypted cloud backup",
        ],
      },
    ],
  },
  {
    id: "school-college-consultancy",
    title: "School, College, or Consultancy",
    subtitle: "Education & Abroad Studies",
    iconName: "GraduationCap",
    badge: "Admission CRM",
    bestPackage: "Budget-Friendly Website",
    packageId: "growth-website-marketing",
    startingPrice: "44,999/-",
    imageUrl: schoolCollegeWebImg,
    mainNeed: "Academic program pages, study abroad destination hubs, counselor appointment funnel, notice announcements, and student articles.",
    whyItFits: "Students and parents demand clear course details and quick counseling access; counselor follow-up workflows convert inquiries into enrollments.",
    keyFeatures: [
      "Course & study-abroad destination listings",
      "Online admission & counselor lead funnel",
      "Notice board & blogs with video",
    ],
    tiers: [
      {
        tierId: "starter",
        name: "Starter",
        badge: "Starter Package",
        price: "24,999/-",
        pagesCount: "6–10 Pages",
        deliveryTimeline: "15–20 Working Days",
        packageId: "starter-website",
        imageUrl: schoolStarterWebImg,
        requirements: [
          "Course curriculum & admission criteria brochures",
          "Faculty directory & campus photography",
          "Official contact emails & telephone numbers",
        ],
        features: [
          "Academic program & course listing cards",
          "Campus photo gallery & student achievement showcase",
          "Direct admission inquiry form & WhatsApp trigger",
          "Google Maps location indexing for prospective students",
          "Mobile-responsive ultra-fast layout",
        ],
      },
      {
        tierId: "budget",
        name: "Budget-Friendly",
        badge: "Budget-Friendly Package",
        price: "44,999/-",
        pagesCount: "14–18 Pages",
        deliveryTimeline: "3–4 Weeks",
        packageId: "growth-website-marketing",
        imageUrl: schoolCollegeWebImg,
        requirements: [
          "Study abroad destination hubs & university partner lists",
          "Student visa success stories & testimonial videos",
          "Notice board publishing guidelines",
        ],
        features: [
          "Dynamic CMS for daily notices, events & exam routines",
          "Study abroad destination hubs (USA, UK, Australia, Canada)",
          "Counselor appointment booking & student lead funnel",
          "Educational local SEO for higher Google ranking",
          "1 Month included technical maintenance & support",
        ],
      },
      {
        tierId: "premium",
        name: "Premium",
        badge: "Premium Package",
        price: "79,999/-",
        pagesCount: "20+ Custom Pages",
        deliveryTimeline: "6–8 Weeks",
        packageId: "custom-business-system",
        imageUrl: schoolPremiumWebImg,
        requirements: [
          "Student application document upload specifications",
          "Multi-counselor assignment workflow rules",
          "Payment gateway for online admission fee collection",
        ],
        features: [
          "Full online student admission portal with file uploads",
          "Application status tracking & counselor CRM dashboard",
          "Online application fee collection via eSewa & Khalti",
          "Automated student notification emails & SMS",
          "3 Months dedicated SLA support & high-traffic tuning",
        ],
      },
    ],
  },
  {
    id: "hotel-restaurant",
    title: "Hotel, Restaurant, or Agency",
    subtitle: "Hospitality & Dining",
    iconName: "Utensils",
    badge: "Room & Table Booking",
    bestPackage: "Budget-Friendly Website",
    packageId: "growth-website-marketing",
    startingPrice: "44,999/-",
    imageUrl: hotelRestaurantWebImg,
    mainNeed: "Digital food/drink menus, room suite photo tours, location mapping, and table/room reservation inquiry forms.",
    whyItFits: "Diners and travelers choose venues based on visual menus and Google Maps ratings; simple WhatsApp reserve eliminates booking commission.",
    keyFeatures: [
      "Digital food menu / room showcase gallery",
      "Google Maps 3-Pack ranking optimization",
      "Reservation inquiry integration",
    ],
    tiers: [
      {
        tierId: "starter",
        name: "Starter",
        badge: "Starter Package",
        price: "24,999/-",
        pagesCount: "6–8 Pages",
        deliveryTimeline: "15–20 Working Days",
        packageId: "starter-website",
        imageUrl: hotelStarterWebImg,
        requirements: [
          "Food & cocktail menu items with pricing",
          "High-res room / restaurant ambiance photos",
          "Operating timings & Google Maps address",
        ],
        features: [
          "Digital food & beverage menu showcase",
          "Room / dining hall visual gallery with pricing",
          "Direct table & room reservation WhatsApp button",
          "Google Maps 3-Pack location pin setup",
          "Fast mobile-responsive performance",
        ],
      },
      {
        tierId: "budget",
        name: "Budget-Friendly",
        badge: "Budget-Friendly Package",
        price: "44,999/-",
        pagesCount: "12–16 Pages",
        deliveryTimeline: "3–4 Weeks",
        packageId: "growth-website-marketing",
        imageUrl: hotelRestaurantWebImg,
        requirements: [
          "Menu category breakdowns & chef specialties",
          "Room amenities checklist & virtual tour visuals",
          "Milestone approval feedback at each phase",
        ],
        features: [
          "Self-managed digital menu & room suite CMS",
          "Online table reservation inquiry form with guest count",
          "Local hospitality SEO for tourists in Kathmandu & Pokhara",
          "Interactive customer review slider & Instagram feed",
          "1 Month dedicated technical tuning & training",
        ],
      },
      {
        tierId: "premium",
        name: "Premium",
        badge: "Premium Package",
        price: "79,999/-",
        pagesCount: "18+ Custom Pages",
        deliveryTimeline: "6–8 Weeks",
        packageId: "custom-business-system",
        imageUrl: hotelPremiumWebImg,
        requirements: [
          "Room inventory rates & seasonal pricing rules",
          "Payment merchant account for advance booking deposits",
          "Table allocation logic for restaurant shifts",
        ],
        features: [
          "Zero-commission direct room & suite booking engine",
          "Real-time table availability calendar & automated reservation",
          "Online advance deposit via eSewa, Khalti & card payments",
          "Banquet & corporate event inquiry management system",
          "3 Months priority SLA support & performance CDN",
        ],
      },
    ],
  },
  {
    id: "retail-ecommerce",
    title: "Retail Shop or E-Commerce",
    subtitle: "Online Stores & Boutiques",
    iconName: "ShoppingBag",
    badge: "eSewa & Khalti Payments",
    bestPackage: "Budget-Friendly Website",
    packageId: "custom-business-system",
    startingPrice: "44,999/-",
    imageUrl: retailEcommerceWebImg,
    mainNeed: "Online product catalogue, size/color variants, shopping cart, eSewa/Khalti/Fonepay payments, delivery rates, and manageable stock levels.",
    whyItFits: "Nepali consumers want instant local payment without COD drop-offs; integrated payment gateways and local delivery zones automate orders.",
    keyFeatures: [
      "Product catalogue with variants & shopping cart",
      "eSewa, Khalti & Fonepay native checkout",
      "Automated stock & delivery zone logic",
    ],
    tiers: [
      {
        tierId: "starter",
        name: "Starter",
        badge: "Starter Package",
        price: "24,999/-",
        pagesCount: "6–8 Pages",
        deliveryTimeline: "15–20 Working Days",
        packageId: "starter-website",
        imageUrl: retailStarterWebImg,
        requirements: [
          "Product catalog list with photos & prices",
          "Store location & delivery coverage areas",
          "WhatsApp business order contact number",
        ],
        features: [
          "Online product showcase catalog with categories",
          "Direct WhatsApp 'Order This Item' instant button",
          "Store location map, working hours & brand story",
          "Google Business Profile indexing for local shoppers",
          "Lightweight 100% mobile 4G fast loading",
        ],
      },
      {
        tierId: "budget",
        name: "Budget-Friendly",
        badge: "Budget-Friendly Package",
        price: "44,999/-",
        pagesCount: "12–18 Pages",
        deliveryTimeline: "3–4 Weeks",
        packageId: "growth-website-marketing",
        imageUrl: retailEcommerceWebImg,
        requirements: [
          "Product variants (sizes, colors) & stock counts",
          "Delivery charge rules for Kathmandu & outside valley",
          "Banner promotion graphics",
        ],
        features: [
          "Full e-commerce catalog with search & filter",
          "Product variant selector (sizes, colors) & shopping cart",
          "Cash on Delivery (COD) & WhatsApp order checkout",
          "Self-managed CMS for adding new products & sales banners",
          "1 Month technical support & order flow setup",
        ],
      },
      {
        tierId: "premium",
        name: "Premium",
        badge: "Premium Package",
        price: "79,999/-",
        pagesCount: "20+ Custom Pages",
        deliveryTimeline: "6–8 Weeks",
        packageId: "custom-business-system",
        imageUrl: retailPremiumWebImg,
        requirements: [
          "eSewa, Khalti, Fonepay merchant API credentials",
          "Courier partner API integration details",
          "Inventory tracking and invoice tax settings",
        ],
        features: [
          "Instant automated checkout with eSewa, Khalti & Fonepay",
          "Automated inventory stock tracking & low-stock alerts",
          "Dynamic delivery charge calculator by city/district",
          "Customer account dashboard with past order tracking",
          "3 Months priority SLA support & payment reconciliation",
        ],
      },
    ],
  },
  {
    id: "construction-legal-accounting",
    title: "Construction, Legal, Accounting",
    subtitle: "Professional Services",
    iconName: "Briefcase",
    badge: "Corporate Credibility",
    bestPackage: "Budget-Friendly Website",
    packageId: "growth-website-marketing",
    startingPrice: "44,999/-",
    imageUrl: constructionLegalWebImg,
    mainNeed: "Professional authority, completed project portfolios, verified credentials, case studies, quote request forms, and corporate local SEO.",
    whyItFits: "High-ticket corporate clients choose firms based on verified track records and prompt consultation funnels rather than complex e-commerce.",
    keyFeatures: [
      "Portfolio of completed projects & case studies",
      "Quotation & consultation request forms",
      "Corporate authority SEO & LinkedIn setup",
    ],
    tiers: [
      {
        tierId: "starter",
        name: "Starter",
        badge: "Starter Package",
        price: "24,999/-",
        pagesCount: "6–8 Pages",
        deliveryTimeline: "15–20 Working Days",
        packageId: "starter-website",
        imageUrl: corporateStarterWebImg,
        requirements: [
          "Firm credentials, registration & practice areas",
          "Completed projects list & partner biographies",
          "Corporate telephone & email contact",
        ],
        features: [
          "Corporate authority landing page with practice cards",
          "Past completed projects & client credentials showcase",
          "Direct consultation inquiry form & call triggers",
          "Google Maps location indexing for corporate clients",
          "Mobile-ready responsive architecture",
        ],
      },
      {
        tierId: "budget",
        name: "Budget-Friendly",
        badge: "Budget-Friendly Package",
        price: "44,999/-",
        pagesCount: "12–16 Pages",
        deliveryTimeline: "3–4 Weeks",
        packageId: "growth-website-marketing",
        imageUrl: constructionLegalWebImg,
        requirements: [
          "Detailed project case studies with technical specs",
          "Executive profiles & team member headshots",
          "Service quote inquiry questionnaire",
        ],
        features: [
          "Dynamic CMS for case studies, projects & legal articles",
          "Comprehensive service practice pages with quote inquiry",
          "Corporate authority SEO ranking & Google Business Profile",
          "Lead capture funnel directly connected to email & WhatsApp",
          "1 Month included technical assistance",
        ],
      },
      {
        tierId: "premium",
        name: "Premium",
        badge: "Premium Package",
        price: "79,999/-",
        pagesCount: "18+ Custom Pages",
        deliveryTimeline: "6–8 Weeks",
        packageId: "custom-business-system",
        imageUrl: corporatePremiumWebImg,
        requirements: [
          "Client portal document privacy specifications",
          "Custom project estimation fee calculation formula",
          "Multi-department quote routing logic",
        ],
        features: [
          "Interactive project cost estimator & quote generator",
          "Secure client portal for document sharing & case tracking",
          "Multi-branch / department lead distribution dashboard",
          "Enterprise SSL security & high-availability cloud architecture",
          "3 Months dedicated SLA support & technical account lead",
        ],
      },
    ],
  },
  {
    id: "startup-growing-company",
    title: "Startup or Growing Company",
    subtitle: "Emerging Local Brands",
    iconName: "Rocket",
    badge: "Fast Launch MVP",
    bestPackage: "Budget-Friendly Website",
    packageId: "starter-website",
    startingPrice: "24,999/-",
    imageUrl: startupCompanyWebImg,
    mainNeed: "High-impact MVP landing page, founder story section, clear value proposition explanation, lead capture funnel, and a staged upgrade path.",
    whyItFits: "A low-friction entry price gets startups launched fast in 15–20 working days, creating a natural upgrade path into Growth as revenue expands.",
    keyFeatures: [
      "Rapid 15–20 working day live deployment",
      "6–10 Mobile-Responsive Pages",
      "Basic CMS & Social media integration",
    ],
    tiers: [
      {
        tierId: "starter",
        name: "Starter",
        badge: "Starter Package",
        price: "24,999/-",
        pagesCount: "6–8 Pages",
        deliveryTimeline: "15–20 Working Days",
        packageId: "starter-website",
        imageUrl: startupStarterWebImg,
        requirements: [
          "Product value proposition & problem statement",
          "Founder bio & company vision assets",
          "Waitlist / early-access email collection",
        ],
        features: [
          "High-converting MVP product launch landing page",
          "Founder story & early investor traction showcase",
          "Early-bird lead capture form & WhatsApp trigger",
          "Fast 15–20 working day delivery for rapid market validation",
          "Mobile-first 4G ultra-fast performance",
        ],
      },
      {
        tierId: "budget",
        name: "Budget-Friendly",
        badge: "Budget-Friendly Package",
        price: "44,999/-",
        pagesCount: "12–18 Pages",
        deliveryTimeline: "3–4 Weeks",
        packageId: "growth-website-marketing",
        imageUrl: startupCompanyWebImg,
        requirements: [
          "Feature release roadmaps & product screenshots",
          "Customer persona case studies & demo videos",
          "Analytics & tracking pixel integration access",
        ],
        features: [
          "Full multi-page company website with product tour",
          "Interactive demo showcase & video reels integration",
          "Self-managed CMS for company blogs, updates & press",
          "Local & international organic SEO for product keywords",
          "1 Month technical maintenance & conversion tuning",
        ],
      },
      {
        tierId: "premium",
        name: "Premium",
        badge: "Premium Package",
        price: "79,999/-",
        pagesCount: "20+ Custom Pages",
        deliveryTimeline: "6–8 Weeks",
        packageId: "custom-business-system",
        imageUrl: startupPremiumWebImg,
        requirements: [
          "SaaS web app API endpoints or webhook specs",
          "User registration / trial workflow logic",
          "Database architecture requirements",
        ],
        features: [
          "Custom web application landing with interactive preview",
          "User signup, trial onboarding & lead qualification funnel",
          "API documentation portal & developer changelog",
          "Payment gateway integration for recurring SaaS or deposits",
          "3 Months priority SLA support & scalable cloud CDN",
        ],
      },
    ],
  },
];

export const sectorMarketFitData: SectorMarketFit[] = [
  {
    buyerGroup: "Travel/Tours, Trekking, Package Travel, Hotels, Restaurants",
    iconName: "Compass",
    mainNeed: "Visual credibility, itinerary/package pages, inquiries, Google Maps visibility, Facebook/Instagram content",
    bestPackage: "Growth + SEO Website",
    packageId: "growth-website-marketing",
    whyItFits:
      "Tourism buyers research visually and contact through WhatsApp/Viber/Messenger; dynamic SEO and Google Business Profile strongly influence bookings.",
  },
  {
    buyerGroup: "Clinics, Dental Offices, Schools, Colleges, Consultancies",
    iconName: "Stethoscope",
    mainNeed: "Appointment/booking, inquiry forms, service/course pages, trust signals, local SEO",
    bestPackage: "Growth + SEO Website or Custom Business System",
    packageId: "growth-website-marketing",
    whyItFits:
      "These businesses need repeatable lead capture and appointment/course enquiry workflows, not only a brochure site.",
  },
  {
    buyerGroup: "Retail Shops, E-Commerce Sellers",
    iconName: "ShoppingBag",
    mainNeed: "Online catalogue, cart, eSewa/Khalti payments, delivery, product management",
    bestPackage: "Custom Business System",
    packageId: "custom-business-system",
    whyItFits:
      "Nepali e-commerce requires local payment gateways, delivery logic, and manageable product catalogues.",
  },
  {
    buyerGroup: "Construction, Legal, Accounting, Professional Services",
    iconName: "Briefcase",
    mainNeed: "Credibility, service pages, lead forms, portfolio/case studies, SEO",
    bestPackage: "Growth + SEO Website",
    packageId: "growth-website-marketing",
    whyItFits:
      "Trust, expertise presentation, and local search visibility matter more than complex e-commerce.",
  },
  {
    buyerGroup: "Startups and Growing Local Companies",
    iconName: "Rocket",
    mainNeed: "Brand identity, landing pages, lead generation, scalable systems",
    bestPackage: "Starter initially, then upgrade to Growth or Custom",
    packageId: "starter-website",
    whyItFits:
      "A staged offer reduces upfront cost and creates a seamless upgrade path for Optiverse.",
  },
];

export const nepalPaymentMethods = [
  {
    name: "eSewa",
    badge: "Most Widely Used",
    description: "Instant mobile wallet payment across Nepal with automated verification.",
    bgColor: "bg-[#60bb46]/10",
    textColor: "text-[#4a9735]",
    borderColor: "border-[#60bb46]/30",
  },
  {
    name: "Khalti",
    badge: "Popular with Tech SMEs",
    description: "Fast digital payment via Khalti wallet, mobile banking, and debit/credit cards.",
    bgColor: "bg-[#5c2d91]/10",
    textColor: "text-[#5c2d91]",
    borderColor: "border-[#5c2d91]/30",
  },
  {
    name: "Fonepay",
    badge: "Universal QR",
    description: "Scan-and-pay supported by almost every commercial and development bank in Nepal.",
    bgColor: "bg-[#dc2626]/10",
    textColor: "text-[#dc2626]",
    borderColor: "border-[#dc2626]/30",
  },
  {
    name: "ConnectIPS",
    badge: "Direct Interbank",
    description: "Secure, high-limit direct bank account transfers regulated by Nepal Clearing House (NCHL).",
    bgColor: "bg-[#0284c7]/10",
    textColor: "text-[#0284c7]",
    borderColor: "border-[#0284c7]/30",
  },
  {
    name: "Bank Transfer",
    badge: "Official Corporate Account",
    description: "Direct wire transfer to Optiverse IT Solution Pvt. Ltd. company bank account with official VAT receipt.",
    bgColor: "bg-[#166534]/10",
    textColor: "text-[#166534]",
    borderColor: "border-[#166534]/30",
  },
];

export const strategicPositioning = {
  statement:
    "Optiverse helps Nepali businesses launch, attract customers, and grow online—with a website, local SEO, social media, video content, and business systems in one place.",
  subtext:
    "We don't sell generic dead-end code or cheap template dumps. We engineer digital engines tailored to the Nepali business reality: local payment gateways, WhatsApp/Viber lead workflows, Google Business Profile supremacy, and multimedia video reels.",
};

export const comparisonMatrix = [
  { feature: "Suitable For", starter: "Startups, Small Shops, Local Clinics", growth: "Booking, Reservations, Travel, Clinics, Consultancies", custom: "E-Commerce, Booking Portals, ERP Systems" },
  { feature: "Starting Price", starter: "24,999/-", growth: "44,999/-", custom: "Based on Requirements" },
  { feature: "Delivery Timeline", starter: "15–20 Working Days", growth: "4–6 Weeks", custom: "6–16 Weeks" },
  { feature: "Total Page Architecture", starter: "6–10 Pages", growth: "12–18 Pages", custom: "Unlimited Custom Screens & Modules" },
  { feature: "Content Management System (CMS)", starter: "Basic CMS (Content Management)", growth: "Full CMS (Blogs, Notices, Services)", custom: "Enterprise Headless/Custom CMS & DB" },
  { feature: "Mobile-First Responsive Design", starter: "Yes (100% Mobile Ready)", growth: "Yes (Custom UI/UX)", growthCheck: true, starterCheck: true, customCheck: true, custom: "Yes (Bespoke Application Design)" },
  { feature: "WhatsApp & Viber Quick-Chat", starter: "Yes", growth: "Yes (Integrated Direct Triggers)", custom: "Yes (Automated Workflows)" },
  { feature: "Google Business Profile Setup", starter: "Yes (Creation/Opt)", growth: "Yes (Posts + Optimization)", custom: "Yes (Enterprise Setup)" },
  { feature: "SEO Optimization", starter: "Optional Add-on", growth: "Mid-Level SEO & Local SEO + Schema", custom: "Full Dynamic SEO & Architecture" },
  { feature: "Blogs with Video & Articles", starter: "Standard CMS", growth: "Included (Full Video/Article Engine)", custom: "Custom Multi-Author CMS & Media Portal" },
  { feature: "Static & Dynamic Pages (API)", starter: "Static Only", growth: "Included (API Integration)", custom: "Enterprise Custom Microservices & API" },
  { feature: "Speed & Performance", starter: "Standard Speed", growth: "Secured & 2X Faster Performance", custom: "Enterprise CDN & Hardened Cloud" },
  { feature: "Local Digital Payments (eSewa/Khalti)", starter: "Manual Inquiries Only", growth: "Inquiry/Deposit Forms", custom: "Full API Integration (eSewa, Khalti, Fonepay)" },
  { feature: "Admin Management Dashboard", starter: "Standard Admin", growth: "CMS Admin Panel", custom: "Custom Role-Based Admin Portal" },
  { feature: "Database & Workflow Engine", starter: "Form Submissions", growth: "Inquiry & Booking Logging", custom: "Full Relational/Document DB Architecture" },
  { feature: "Technical Support Duration", starter: "1 Month Included", growth: "1 Month Included", custom: "3 Months Dedicated SLA Support" },
  { feature: "Ongoing Maintenance Options", starter: "From NPR 3,999/mo", growth: "From NPR 4,999/mo", custom: "From NPR 7,999/mo or 10-15% annually" },
];
