// src/data/domainPackagesData.ts
import type { WebsitePackage } from "./websitePackagesData";

export const domainPackages: WebsitePackage[] = [
  // =========================================================================
  // 0. TRAVEL & TOURS, TREKKING & EXPEDITIONS (Tourism & Adventure)
  // =========================================================================
  {
    id: "travel-starter-website",
    name: "Travel & Tours Starter Website",
    tier: "Tourism Starter",
    tagline: "Credible travel & trekking website engineered for international tourist inquiries and WhatsApp bookings.",
    bestFor: "Inbound tour operators, trekking agencies, day-tour organizers, homestays, vehicle rental operators, and local holiday guides in Nepal.",
    startingPrice: "24,999/-",
    priceNumber: 24999,
    priceSubtext: "One-time investment",
    priceBadge: "Budget-Friendly",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "3,999/- Per Year",
    badge: "Fastest Turnaround",
    typicalMarketComparison: "Market average: NPR 40K–60K for static travel templates with no route maps or inquiry routing.",
    summaryHighlights: [
      "4–8 Mobile-Responsive Travel & Trekking Pages",
      "National & international destination showcase pages",
      "Direct WhatsApp & Viber instant booking button",
      "Google Maps location indexing & local profile setup",
      "Mobile-first responsive layout (100% 4G speed)",
      "Standard SSL security & inquiry contact forms",
      "Official .np / .com domain configuration & DNS setup",
      "1 Professional business email setup (e.g. info@company.com)",
      "1 Month dedicated post-launch technical support",
    ],
    deliverableCategories: [
      {
        category: "Destination Showcase & Web Structure",
        items: [
          {
            title: "4–8 Mobile-Responsive Travel Pages",
            desc: "Custom-designed pages including Home, Popular Tour Packages, Trekking Routes, About Agency, Gallery, and Direct Contact.",
          },
          {
            title: "National & International Tour Highlights",
            desc: "Structured destination cards (Pokhara, Chitwan, Everest, Annapurna, Bali, Dubai) with highlight overviews and pricing guidelines.",
          },
          {
            title: "High-Resolution Himalayan Photo Gallery",
            desc: "Optimized multimedia galleries showcasing mountain vistas, trekking trails, and cultural experiences.",
          },
          {
            title: "Official Agency Credentials & License Showcase",
            desc: "Display NTB (Nepal Tourism Board), TAAN, and NMA affiliation badges to instill instant traveler trust.",
          },
        ],
      },
      {
        category: "Traveler Inquiries & Lead Capture",
        badge: "Lead Conversion",
        items: [
          {
            title: "Direct WhatsApp & Viber Booking Trigger",
            desc: "Floating quick-action buttons allowing international and domestic travelers to inquire about tour availability directly on WhatsApp.",
          },
          {
            title: "Interactive Google Maps & Office Pinning",
            desc: "Precise Thamel/Lakeside office GPS location so walk-in tourists and travelers find your agency effortlessly.",
          },
          {
            title: "Multi-Channel Tour Inquiry Forms",
            desc: "Instant booking inquiries with traveler group size, desired travel dates, and direct email notifications.",
          },
        ],
      },
      {
        category: "Hosting & Technical Launch",
        badge: "Launch & Support",
        items: [
          {
            title: "Official .np / .com Domain & Cloud Hosting",
            desc: "Full setup on high-speed servers with automated SSL certificate for international traveler security.",
          },
          {
            title: "1 Professional Business Email",
            desc: "Branded agency email (e.g. info@youragency.com.np) for formal tourist correspondence and booking confirmations.",
          },
          {
            title: "1 Month Post-Launch Support",
            desc: "Free technical assistance, itinerary tweaks, and agency staff support included for the first 30 days.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Trekking & Mountain Expeditions",
        iconName: "Compass",
        adaptation: "Top Nepal trek showcases (EBC, ABC, Langtang), permit checklists, packing guides, and best trekking season advice.",
      },
      {
        sector: "Inbound Holiday & Cultural Tours",
        iconName: "Globe",
        adaptation: "Heritage site guides (Kathmandu Durbar Square, Lumbini, Janakpur), jungle safari itineraries, and private transport options.",
      },
    ],
    paymentStructure: {
      advance: "50% Advance",
      milestone: "None (Streamlined 2-stage)",
      final: "50% Before Final Live Launch",
      maintenanceNote: "Optional annual travel website maintenance from NPR 3,999/- Per Year.",
      steps: [
        { percentage: "50%", stage: "Project Kickoff", note: "Upon destination itinerary collection and brand briefing" },
        { percentage: "50%", stage: "Live Handover", note: "After staging preview approval before pointing live domain" },
      ],
    },
    whyThisWorks:
      "Gives emerging travel agencies a professional, credible online presence at NPR 24,999/- below typical agency quotes of NPR 40K–60K, while including Google Maps and direct WhatsApp lead triggers that convert international tourists quickly.",
    crossLinks: [
      {
        targetPackageId: "travel-growth-website",
        targetPackageName: "Travel & Tours Growth Website",
        targetPrice: "39,999/-",
        interestTrigger: "Need Day-by-Day Dynamic Itineraries, Route Maps & Google SEO?",
        interestBadge: "Most Popular Upgrade",
        description: "Upgrade to dynamic CMS for unlimited packages, day-by-day itineraries, downloadable PDF brochures, and top organic search ranking.",
        keyHighlights: [
          "8–12 Custom-Designed Dynamic Travel Pages",
          "Day-by-Day Itineraries with Elevation & Route Breakdown",
          "Downloadable PDF Tour Itinerary Brochure Button",
          "SEO-Friendly & Local Nepal Schema Optimization",
        ],
        ctaText: "Explore Travel Growth Package (39,999/-)",
      },
      {
        targetPackageId: "travel-custom-system",
        targetPackageName: "Travel & Expeditions Enterprise Booking Portal",
        targetPrice: "79,999/-",
        interestTrigger: "Need Online Booking Engine, eSewa/Khalti Deposits & Multi-Language?",
        interestBadge: "Enterprise Tourism",
        description: "For established tour operators needing live departure calendars, online deposit payments, and booking manifest dashboards.",
        keyHighlights: [
          "Complete Online Booking & Departure Calendar",
          "Integrated eSewa, Khalti & Card Deposit Checkout",
          "Automated Booking Confirmation Vouchers & PDF Invoices",
          "Custom Enterprise Scope: NPR 90,000–500,000+",
        ],
        ctaText: "Explore Travel Enterprise Portal (79,999/-)",
      },
    ],
  },
  {
    id: "travel-growth-website",
    name: "Travel & Tours Growth Website",
    tier: "Flagship Tourism Tier",
    tagline: "Dynamic travel & trekking platform with day-by-day itineraries, tour booking workflows, and international search ranking.",
    bestFor: "Established travel agencies, Himalayan trekking operators, fixed-departure adventure companies, inbound tour planners, and holiday package providers.",
    startingPrice: "39,999/-",
    priceNumber: 39999,
    priceSubtext: "One-time investment",
    priceBadge: "Reasonable Pricing",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "4,999/- Per Year",
    isPopular: true,
    badge: "Recommended",
    typicalMarketComparison: "Competitor agency quote: NPR 65K–95K for dynamic travel platforms with itineraries and route maps.",
    summaryHighlights: [
      "8–12 Custom-Designed Dynamic Travel & Trekking Pages",
      "Premium Customized UI/UX Design & 100% Mobile Responsive",
      "Secured and 2X Faster Performance Engine",
      "CMS API Integration",
      "Dynamic Content Modules & Multi-Category Showcases",
      "Tours, Travel, Trekking or Any One Fully Functional Booking System",
      "Day-by-day dynamic itineraries with altitude charts & route overviews",
      "Self-Managed Dynamic Tour CMS for unlimited packages",
      "Downloadable PDF tour itinerary brochure button",
      "SEO-Friendly & local Nepal schema for Google search ranking",
      "Customer reviews, star ratings & verified traveler testimonial slider",
      "1 Month dedicated technical maintenance & staff training",
    ],
    deliverableCategories: [
      {
        category: "Dynamic Travel & Trekking Architecture",
        badge: "Dynamic Engine",
        items: [
          {
            title: "8–12 Custom-Designed Dynamic Pages",
            desc: "Complete travel platform including Home, Featured Tours, Himalayan Treks, Day-by-Day Itineraries, Fixed Departures, Reviews, and Contact.",
          },
          {
            title: "Premium Customized UI/UX Design",
            desc: "Tailored to your corporate brand typography, custom color palette, logo assets, and visual hierarchy for immediate authority and trust.",
          },
          {
            title: "100% Mobile-First Responsive Architecture",
            desc: "Fluid, touch-optimized layouts engineered for flawless viewing and fast interaction across smartphones, tablets, laptops, and large desktop screens.",
          },
          {
            title: "Secured and 2X Faster Performance",
            desc: "Sub-second load times with advanced caching, image optimization, SSL certificate, and robust anti-spam shielding.",
          },
          {
            title: "CMS API Integration",
            desc: "Custom content management system with CMS API integration for automated data sync, dynamic page rendering, live updates, and external service connectors.",
          },
          {
            title: "Dynamic Content Modules & Multi-Category Showcases",
            desc: "Custom structured layouts for service catalogs, portfolio case studies, dynamic project galleries, and multi-category business offerings.",
          },
          {
            title: "Day-by-Day Dynamic Itineraries & Route Modules",
            desc: "Structured day-by-day itinerary layouts with elevation/altitude highlights, route overviews, daily activity breakdowns, and inclusions/exclusions tables.",
          },
          {
            title: "Self-Managed Dynamic Tour CMS",
            desc: "Intuitive admin dashboard for agency staff to add new destinations, seasonal trek packages, and pricing updates easily.",
          },
          {
            title: "High-Definition Mountain Photo & Video Showcases",
            desc: "Optimized image galleries, interactive photo showcases, lightbox previews, and responsive video embedding for YouTube and reels.",
          },
        ],
      },
      {
        category: "Conversion, Inquiries & Booking Engine",
        badge: "Conversion Engine",
        items: [
          {
            title: "Tours, Travel, Trekking or Any One Fully Functional Booking System",
            desc: "Fully functional, interactive booking and reservation system tailored for tours, travel packages, Himalayan trekking departures, or any one custom adventure booking workflow—complete with date selection, group size calculator, traveler detail capture, and automated inquiry notification.",
          },
          {
            title: "Downloadable PDF Tour Itinerary Generator",
            desc: "One-click branded PDF brochure download button on each package page for travelers to save and print trip itineraries.",
          },
          {
            title: "Multi-Channel Instant Lead Triggers (WhatsApp, Viber, Call)",
            desc: "Direct quick-action buttons connecting interested travelers to your tour sales consultants instantly.",
          },
          {
            title: "Verified Traveler Review & Testimonial Slider",
            desc: "Social proof showcase featuring Google star ratings, verified trekker photos, and customer feedback.",
          },
        ],
      },
      {
        category: "International SEO, Launch & Support",
        badge: "Global Reach",
        items: [
          {
            title: "SEO-Friendly & Local Nepal Travel Schema Optimization",
            desc: "Structured TouristAttraction and TouristTrip schema markup engineered to rank for key tourism queries like 'Nepal tour packages' and 'Everest base camp trek'.",
          },
          {
            title: "Domain, DNS & SSL Deployment",
            desc: "Complete server setup on fast cloud hosting with global CDN caching and SSL encryption for sub-2s international load speeds.",
          },
          {
            title: "1 Month Dedicated Technical Maintenance",
            desc: "Post-launch speed tuning, daily cloud backups, security monitoring, and staff training included.",
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
        sector: "Trekking & High Altitude Expeditions",
        iconName: "Compass",
        adaptation: "Altitude charts, tea house lodging details, acclimatization schedules, TIMS/permit requirements, and gear rental checklists.",
      },
      {
        sector: "Luxury & Cultural Tour Packages",
        iconName: "Globe",
        adaptation: "5-star hotel partners, private helicopter transfers, custom VIP itineraries, and family-friendly holiday packages.",
      },
    ],
    paymentStructure: {
      advance: "40% Advance Payment",
      milestone: "30% Upon Interactive Design Approval",
      final: "30% Before Live Launch",
      maintenanceNote: "Annual travel website maintenance of 4,999/- Per Year.",
      steps: [
        { percentage: "40%", stage: "Discovery & Tour Asset Collection", note: "Upon onboarding and itinerary material collection" },
        { percentage: "30%", stage: "Interactive Design & CMS Approval", note: "After visual design, day-by-day layouts, and prototype sign-off" },
        { percentage: "30%", stage: "Live Launch & Staff Handover", note: "Upon production deployment, domain pointing, and staff training" },
      ],
    },
    whyThisWorks:
      "Tourism buyers research visually and compare itineraries before contacting. By providing dynamic day-by-day routes, downloadable PDF brochures, and direct WhatsApp booking, this package delivers significantly higher lead conversions than static agency templates.",
    crossLinks: [
      {
        targetPackageId: "travel-starter-website",
        targetPackageName: "Travel & Tours Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Need a Budget-Friendly 4–8 Page Travel Website Fast?",
        interestBadge: "Budget Alternative",
        description: "If you only need a clean, professional travel brochure website with destination cards and WhatsApp booking at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "4–8 Mobile-Responsive Showcase Pages",
          "Direct WhatsApp & Viber Quick Inquiries",
          "3,999/- Per Year Annual Upkeep",
        ],
        ctaText: "Explore Travel Starter (24,999/-)",
      },
      {
        targetPackageId: "travel-custom-system",
        targetPackageName: "Travel & Expeditions Enterprise Booking Portal",
        targetPrice: "79,999/-",
        interestTrigger: "Need Live Departure Calendars, eSewa/Khalti Deposits & Multi-Role ERP?",
        interestBadge: "Enterprise Tourism",
        description: "For high-volume tour operators needing automated departure seat reservations, advance digital payments, and dispatch dashboards.",
        keyHighlights: [
          "Complete Online Booking & Departure Calendar",
          "Integrated eSewa, Khalti, Fonepay & Card Payments",
          "Automated Booking Confirmation Vouchers & PDF Invoices",
          "Custom Enterprise Scope: NPR 90,000–500,000+",
        ],
        ctaText: "Explore Travel Enterprise Portal (79,999/-)",
      },
    ],
  },
  {
    id: "travel-custom-system",
    name: "Travel & Expeditions Enterprise Booking Portal",
    tier: "Enterprise Tourism Portal",
    tagline: "Enterprise tour & expedition management portal with real-time departure calendars, online deposit payments, and dispatch operations.",
    bestFor: "Large travel operators, mountaineering expeditions, multi-vehicle charter services, multi-branch travel agencies, and international booking portals.",
    startingPrice: "79,999/-",
    priceNumber: 79999,
    priceSubtext: "Standard Portal (Custom Enterprise Systems NPR 90,000–500,000+)",
    priceBadge: "Enterprise Scope",
    timeline: "6–10 weeks for standard systems; 10–16 weeks for complex enterprise ERP",
    maintenance: "10–15% Annually (or custom SLA)",
    badge: "Full Tourism Engineering",
    typicalMarketComparison: "Custom travel ERP/booking software typically ranges from NPR 150,000–450,000+; Optiverse provides modular predictability.",
    summaryHighlights: [
      "20+ Custom Pages / Full Travel & Trekking Web Portal",
      "Real-Time Seat Reservation & Passenger Booking Engine",
      "Integrated eSewa, Khalti, Fonepay & Credit Card Deposit Checkout",
      "Interactive Custom Tour & Trek Builder with Route Coordinates",
      "Automated Booking Vouchers & Instant PDF Invoice Generation",
      "Multi-Language Toggle (English, German, French, Nepali)",
      "Centralized Operations Dashboard with Manifest & Lead Exports (CSV/Excel)",
      "3 Months Priority SLA Support & Global CDN Acceleration",
    ],
    deliverableCategories: [
      {
        category: "Enterprise Tour Booking Architecture",
        badge: "Travel Portal",
        items: [
          {
            title: "Departure Calendar & Group Reservation Engine",
            desc: "Real-time departure calendar showing available seats, guaranteed departures, early-bird discounts, and automated seat quota holds.",
          },
          {
            title: "Online Digital Payment Integration (eSewa / Khalti / Cards)",
            desc: "Accept advance booking deposits and full tour payments online with automated currency conversion and instant payment receipts.",
          },
          {
            title: "Interactive Custom Tour Builder",
            desc: "Allows international travelers to assemble custom multi-day itineraries, select hotel tiers, choose activities, and get instant pricing estimates.",
          },
          {
            title: "Automated Booking Vouchers & PDF Invoicing",
            desc: "Generates branded confirmation vouchers, payment receipts, and travel vouchers automatically upon successful deposit.",
          },
        ],
      },
      {
        category: "Operations Management & Dispatch",
        badge: "Admin Engine",
        items: [
          {
            title: "Centralized Operations & Booking Dashboard",
            desc: "Control panel for travel desk staff to review traveler passport details, assign trekking guides, track deposits, and export passenger manifests to Excel.",
          },
          {
            title: "Multi-Language Visitor Switcher",
            desc: "Localized interface for English, German, French, Chinese, and Nepali travelers to maximize global conversion rates.",
          },
          {
            title: "Multi-Role Staff Access Permissions",
            desc: "Granular access controls for Tour Planners, Dispatch Guides, Accounting Staff, and Super Admins.",
          },
        ],
      },
      {
        category: "Enterprise Infrastructure & SLA",
        badge: "Enterprise SLA",
        items: [
          {
            title: "Hardened Security, SSL & Automated Daily Backups",
            desc: "Deployed on resilient cloud servers with DDoS protection, encrypted traveler data, and automated database backups.",
          },
          {
            title: "3 Months Priority SLA Support & Staff Training",
            desc: "Dedicated technical assistance, feature updates, performance tuning, and hands-on staff operational training included.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "High-Altitude Expeditions & Peak Climbing",
        iconName: "Compass",
        adaptation: "Climber document verification, medical clearance uploads, satellite comms integration, and base camp logistics tracking.",
      },
      {
        sector: "Fleet Vehicle & Helicopter Charter",
        iconName: "Compass",
        adaptation: "Fleet availability calendar, hourly/daily charter pricing, emergency rescue bookings, and airport pickup dispatch.",
      },
    ],
    paymentStructure: {
      advance: "30% Advance Payment",
      milestone: "30% Design Approval + 30% Demo Sign-off",
      final: "10% Final Live Launch Handover",
      maintenanceNote: "Support and maintenance from 10–15% of project cost annually with SLA uptime.",
      steps: [
        { percentage: "30%", stage: "Discovery & Architecture", note: "Upon kickoff and custom booking workflow blueprint sign-off" },
        { percentage: "30%", stage: "UI/UX & Interactive Prototype", note: "After traveler booking journey and interface approval" },
        { percentage: "30%", stage: "System Build & Staging Demo", note: "After core booking engine, payment gateway, and dashboard walkthrough" },
        { percentage: "10%", stage: "Live Deployment & Staff Handover", note: "Upon live cloud deployment, staff training, and final handover" },
      ],
    },
    whyThisWorks:
      "Enterprise travel platforms require custom departure engines, deposit gateways, and passenger manifest management. Optiverse delivers this at predictable milestones starting at NPR 79,999/- (with custom enterprise scopes from NPR 90,000–500,000+) saving agencies from expensive, unpredictable software contracts.",
    crossLinks: [
      {
        targetPackageId: "travel-growth-website",
        targetPackageName: "Travel & Tours Growth Website",
        targetPrice: "39,999/-",
        interestTrigger: "Prefer a Fixed-Price Turnkey Travel Website with Day-by-Day Itineraries?",
        interestBadge: "Flagship Tourism Solution",
        description: "If you don't require heavy enterprise ERP and want a proven 8–12 page dynamic travel website delivered within 4–6 weeks at a fixed NPR 39,999/-.",
        keyHighlights: [
          "Guaranteed Fixed Investment of NPR 39,999/-",
          "Day-by-Day Itineraries with Route Highlights",
          "Downloadable PDF Itinerary Brochures",
          "Fast 4–6 Weeks Turnaround",
        ],
        ctaText: "Explore Travel Growth Package (39,999/-)",
      },
      {
        targetPackageId: "travel-starter-website",
        targetPackageName: "Travel & Tours Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Travel Website First?",
        interestBadge: "Rapid Market Entry",
        description: "Perfect for testing new tour packages with a clean, modern 4–8 page brochure website before investing in enterprise booking portals.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "4–8 Mobile-Responsive Travel Pages",
          "Direct WhatsApp & Viber Booking Triggers",
          "Fastest Turnaround",
        ],
        ctaText: "Explore Travel Starter (24,999/-)",
      },
    ],
  },

  // =========================================================================
  // 1. CLINIC OR DENTAL OFFICE (Healthcare & Polyclinics)
  // =========================================================================
  {
    id: "clinic-starter-website",
    name: "Clinic Starter Website",
    tier: "Healthcare Starter",
    tagline: "Credible healthcare website engineered for local patient trust and appointments.",
    bestFor: "Dental clinics, private medical practitioners, physiotherapy centers, eye care clinics, and neighborhood polyclinics.",
    startingPrice: "24,999/-",
    priceNumber: 24999,
    priceSubtext: "One-time investment",
    priceBadge: "Budget-Friendly",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "3,999/- Per Year",
    badge: "Fastest Turnaround",
    typicalMarketComparison: "Market average: NPR 40K–60K for basic medical sites with no appointment funnel.",
    summaryHighlights: [
      "4–8 Mobile-Responsive Healthcare Pages",
      "Doctor bio cards with NMC medical license numbers",
      "Core treatment services & transparent consultation fee guide",
      "Direct WhatsApp & phone doctor appointment booking trigger",
      "Google Maps local SEO setup for 'doctor / dentist near me'",
      "Domain setup, SSL certificate & 1 business email",
      "1 Month dedicated post-launch technical support",
    ],
    deliverableCategories: [
      {
        category: "Clinical Identity & Structure",
        items: [
          {
            title: "4–8 Mobile-Responsive Healthcare Pages",
            desc: "Custom-designed pages including Home, About Doctors, Treatments & Services, Clinic Infrastructure, Consultation Fees, and Contact & Location.",
          },
          {
            title: "Doctor Profiles with NMC Credentials",
            desc: "Dedicated specialist cards showcasing medical degrees, specialization, years of experience, and working OPD hours to instill instant patient trust.",
          },
          {
            title: "Core Treatments & Fee Transparency",
            desc: "Structured treatment cards (dental cleaning, root canal, general checkup, etc.) with transparent consultation guidelines.",
          },
          {
            title: "Clinic Facility & Equipment Showcase",
            desc: "High-resolution photo tour of sanitized treatment rooms, dental chairs, and diagnostic facilities.",
          },
        ],
      },
      {
        category: "Patient Inquiries & Appointment Booking",
        badge: "Patient Conversion",
        items: [
          {
            title: "Direct WhatsApp Doctor Appointment Booking Trigger",
            desc: "Floating quick-action booking button allowing patients to message reception or book consultations directly on WhatsApp or phone with a single tap.",
          },
          {
            title: "Google Maps & Local SEO Setup",
            desc: "Precise GPS pin on Google Maps optimized for local searches like 'dentist near me' or 'clinic in Kathmandu/Lalitpur'.",
          },
          {
            title: "Emergency Contact Hotline Bar",
            desc: "Top alert banner featuring urgent emergency hotline numbers and ambulance contact info.",
          },
        ],
      },
      {
        category: "Hosting & Technical Launch",
        badge: "Launch & Support",
        items: [
          {
            title: "Official .np Domain & High-Speed Hosting",
            desc: "Full setup on secure servers with automated SSL certificate for patient data safety.",
          },
          {
            title: "1 Professional Clinic Email",
            desc: "Branded email setup (e.g. appointment@yourclinic.com.np) for formal hospital/clinic correspondence.",
          },
          {
            title: "1 Month Post-Launch Support",
            desc: "Free technical support, schedule tweaks, and staff assistance included for the first 30 days.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Dental Clinics",
        iconName: "Stethoscope",
        adaptation: "Procedure visual guides (implants, braces, whitening), before/after smile galleries, and routine appointment intake.",
      },
      {
        sector: "Polyclinics & Diagnostic Labs",
        iconName: "Stethoscope",
        adaptation: "Doctor department schedules, blood test packages, working lab timings, and home sample collection inquiries.",
      },
    ],
    paymentStructure: {
      advance: "50% Advance",
      milestone: "None (Streamlined 2-stage)",
      final: "50% Before Final Live Launch",
      maintenanceNote: "Optional annual healthcare maintenance from NPR 3,999/- Per Year.",
      steps: [
        { percentage: "50%", stage: "Project Kickoff", note: "Upon doctor profile collection and brand briefing" },
        { percentage: "50%", stage: "Live Handover", note: "After staging preview approval before pointing live domain" },
      ],
    },
    whyThisWorks:
      "Unlike generic website templates that offer no medical focus, this package provides verified NMC doctor cards, transparent OPD hours, and direct WhatsApp appointment routing—essential for capturing local neighborhood walk-ins.",
    crossLinks: [
      {
        targetPackageId: "clinic-growth-website",
        targetPackageName: "Clinic Growth & SEO Website",
        targetPrice: "39,999/-",
        interestTrigger: "Need Online Slot Booking, Patient Guides & Top Google Ranking?",
        interestBadge: "Most Popular Upgrade",
        description: "Upgrade to dynamic department pages, time-slot appointment booking, patient blog CMS, and top Google Maps ranking.",
        keyHighlights: [
          "8–12 Dynamic Healthcare Pages",
          "Doctor Shift Calendar & Time-Slot Booking",
          "Local Healthcare SEO & Top Google Maps Ranking",
          "Patient Intake Questionnaire & CMS",
        ],
        ctaText: "Explore Clinic Growth Package (39,999/-)",
      },
      {
        targetPackageId: "clinic-custom-system",
        targetPackageName: "Polyclinic & Hospital Management Portal",
        targetPrice: "79,999/-",
        interestTrigger: "Need Multi-Doctor Shifts, Token Management & eSewa Payments?",
        interestBadge: "Hospital Portal",
        description: "For multi-specialty polyclinics requiring live doctor token management, consultation prepayments, and staff dashboards.",
        keyHighlights: [
          "Doctor Shift Schedule & Live Token Booking",
          "Consultation Prepayments via eSewa & Khalti",
          "Automated SMS/WhatsApp Patient Reminders",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Polyclinic Portal (79,999/-)",
      },
    ],
  },

  {
    id: "clinic-growth-website",
    name: "Clinic Growth & SEO Website",
    tier: "Flagship Healthcare Tier",
    tagline: "Dynamic healthcare platform with Online Doctor Appointment Booking, Real-Time Slot Management, and local Google Maps dominance.",
    bestFor: "Growing medical centers, multi-specialty dental clinics, diagnostic centers, dermatology practices, and specialized healthcare clinics.",
    startingPrice: "39,999/-",
    priceNumber: 39999,
    priceSubtext: "One-time investment",
    priceBadge: "Reasonable Pricing",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "4,999/- Per Year",
    isPopular: true,
    badge: "Recommended",
    typicalMarketComparison: "Competitor agency fee: NPR 65K–90K for dynamic medical websites with SEO.",
    summaryHighlights: [
      "8–12 Custom-Designed Dynamic Medical Pages",
      "Online Doctor Appointment Booking & Real-Time Slot Management",
      "Doctor Shift Rosters & Time-Slot Capacity Control (15/20/30 min intervals)",
      "Interactive treatment procedure guides with recovery FAQs",
      "Patient health articles & notice CMS for clinic staff",
      "Healthcare Schema & top Google Maps 3-Pack ranking in Nepal",
      "Automated reception email & WhatsApp lead alerts",
      "Sub-second mobile 4G performance & SSL encryption",
      "1 Month technical support & reception staff training",
    ],
    deliverableCategories: [
      {
        category: "Dynamic Medical Architecture",
        badge: "Dynamic Engine",
        items: [
          {
            title: "8–12 Custom-Designed Dynamic Pages",
            desc: "Complete medical platform including Home, Specialist Doctors, Departments, Online Booking, Treatment FAQ Hub, Patient Testimonials, and Emergency Contact.",
          },
          {
            title: "Online Doctor Appointment Booking System",
            desc: "Full-featured appointment booking system: patients select medical department, choose their doctor, pick available date and time slots, fill intake notes, and receive instant automated appointment confirmation via SMS and WhatsApp.",
          },
          {
            title: "Doctor Shift & Real-Time Slot Management",
            desc: "Reception dashboard to configure daily appointment slots, set consultation intervals (15/20/30 mins), enforce daily patient booking quotas, and block emergency/surgery slots with a single click.",
          },
          {
            title: "Interactive Treatment Procedure Guides",
            desc: "Comprehensive service cards detailing symptoms, treatment procedures, expected duration, and post-treatment recovery instructions.",
          },
          {
            title: "Self-Managed Patient Articles & Notice CMS",
            desc: "Intuitive admin dashboard for clinic staff to post health tips, doctor leave notices, vaccine schedules, and festival holiday hours.",
          },
        ],
      },
      {
        category: "Search Dominance & Conversion",
        badge: "Local SEO & Reach",
        items: [
          {
            title: "Local Healthcare Schema & Google 3-Pack Ranking",
            desc: "Advanced MedicalClinic Schema markup helping your clinic dominate local Kathmandu/Lalitpur/Pokhara searches for dental & medical terms.",
          },
          {
            title: "Instant Multi-Channel Lead Alerts",
            desc: "Inquiry forms and booking requests connect directly to reception WhatsApp and clinic email with zero lag.",
          },
          {
            title: "Verified Patient Reviews & Video Reel Sliders",
            desc: "Social proof showcases featuring patient recovery stories and high-trust medical testimonials.",
          },
        ],
      },
      {
        category: "Security, Launch & Support",
        items: [
          {
            title: "Encrypted Patient Data Transfer (SSL/HTTPS)",
            desc: "Enterprise-grade encryption ensuring patient inquiry confidentiality and Google trust.",
          },
          {
            title: "Reception Staff Walkthrough & Training",
            desc: "Hands-on video training and live session teaching your front-desk staff how to review inquiries and update doctor timings.",
          },
          {
            title: "1 Month Dedicated Technical Support",
            desc: "Post-launch speed monitoring, database backups, and technical assistance included.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Multi-Specialty Polyclinics",
        iconName: "Stethoscope",
        adaptation: "Department filters (Cardiology, Orthopedics, Gynecology, Pediatrics) with individual doctor shift timings.",
      },
      {
        sector: "Cosmetic & Dental Studios",
        iconName: "Sparkles",
        adaptation: "Interactive before-after sliders, treatment cost breakdowns, and direct consultation booking.",
      },
    ],
    paymentStructure: {
      advance: "40% Advance Payment",
      milestone: "30% Upon Interactive Design Approval",
      final: "30% Before Live Launch",
      maintenanceNote: "Annual healthcare maintenance of 4,999/- Per Year.",
      steps: [
        { percentage: "40%", stage: "Discovery & Doctor Profiling", note: "Upon onboarding and department asset collection" },
        { percentage: "30%", stage: "Design & CMS Approval", note: "After visual design and booking workflow sign-off" },
        { percentage: "30%", stage: "Deployment & Staff Training", note: "Upon live launch and front-desk reception handover" },
      ],
    },
    whyThisWorks:
      "Patients in Nepal search Google on their smartphones before choosing a clinic. This package secures top Google Maps ranking while giving them a 30-second mobile booking workflow, capturing high-intent patients that competitors miss.",
    crossLinks: [
      {
        targetPackageId: "clinic-starter-website",
        targetPackageName: "Clinic Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Need an Essential 4–8 Page Clinic Presence on a Smaller Budget?",
        interestBadge: "Budget Alternative",
        description: "If you only need a fast, credible clinic brochure website with doctor cards and WhatsApp inquiries at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "4–8 Mobile-Responsive Pages with Doctor Bios",
          "Direct WhatsApp & Phone Consultation Triggers",
          "3,999/- Per Year Annual Upkeep",
        ],
        ctaText: "Explore Clinic Starter (24,999/-)",
      },
      {
        targetPackageId: "clinic-custom-system",
        targetPackageName: "Polyclinic & Hospital Management Portal",
        targetPrice: "79,999/-",
        interestTrigger: "Need Advance Consultation Payments, Live Tokens & Multi-Staff ERP?",
        interestBadge: "Enterprise Healthcare",
        description: "For hospitals and polyclinics needing live doctor tokens, online consultation fees via eSewa/Khalti, and EHR integrations.",
        keyHighlights: [
          "Live Doctor Shift & Token Booking Portal",
          "Online Payment Integration (eSewa / Khalti / Fonepay)",
          "Reception Admin Dashboard with Patient Records",
          "Custom Enterprise Scope: NPR 90,000–500,000+",
        ],
        ctaText: "Explore Polyclinic Portal (79,999/-)",
      },
    ],
  },

  {
    id: "clinic-custom-system",
    name: "Polyclinic & Hospital Management Portal",
    tier: "Enterprise Healthcare Portal",
    tagline: "Comprehensive polyclinic management portal with doctor shift schedules, token booking, and local payment checkout.",
    bestFor: "Hospitals, multi-branch polyclinics, diagnostic chains, high-volume dental centers, and medical institutions needing digital patient workflows.",
    startingPrice: "79,999/-",
    priceNumber: 79999,
    priceSubtext: "Standard Portal (Custom Enterprise Systems NPR 90,000–500,000+)",
    priceBadge: "Enterprise Scope",
    timeline: "6–10 weeks for standard systems; 10–16 weeks for custom hospital ERP",
    maintenance: "10–15% Annually (or custom SLA)",
    badge: "Full Healthcare Engineering",
    typicalMarketComparison: "Nepali custom hospital/clinic software often costs NPR 180,000–400,000+; Optiverse provides modular predictability.",
    summaryHighlights: [
      "18+ Custom Pages / Full Hospital Web Portal",
      "Multi-Doctor Shift Schedule & Live Availability Calendar",
      "Patient Token Generation & Online Appointment Booking System",
      "Advance Consultation Fee Payment via eSewa, Khalti & Fonepay QR",
      "Dedicated Reception Management Dashboard with Patient Records",
      "Automated SMS & WhatsApp Appointment Reminders",
      "Encrypted Patient Data Storage & HIPAA-Informed Protocols",
      "3 Months Dedicated Priority SLA Support & Staff Training",
    ],
    deliverableCategories: [
      {
        category: "Enterprise Clinical Architecture",
        badge: "Hospital Portal",
        items: [
          {
            title: "Multi-Specialty Doctor Shift Engine",
            desc: "Administrators easily configure doctor weekly rosters, consultation slots, vacation dates, and emergency availability.",
          },
          {
            title: "Multi-Specialty Doctor Shift & Token Appointment Booking System",
            desc: "Patients receive digital tokens with estimated reporting times and live doctor shift allocation, reducing hospital waiting room congestion.",
          },
          {
            title: "Online Consultation Prepayments (eSewa / Khalti)",
            desc: "Accept advance booking deposits and consultation charges automatically with instant verification and transaction receipts.",
          },
          {
            title: "Automated Patient Reminders (SMS/WhatsApp)",
            desc: "Reduces appointment no-shows by automatically pinging patients 24 hours and 2 hours before their scheduled appointment.",
          },
        ],
      },
      {
        category: "Reception Operations & Records",
        badge: "Admin Engine",
        items: [
          {
            title: "Centralized Reception Management Dashboard",
            desc: "Front-desk staff view daily patient queues, check-in attendees, reschedule bookings, and export OPD lists to Excel.",
          },
          {
            title: "Patient History & Prescription Intake",
            desc: "Allows registered patients to upload past lab reports, medical histories, and view doctor prescriptions securely.",
          },
          {
            title: "Multi-Branch Support",
            desc: "Unified web portal capable of managing multiple clinic branches across Kathmandu, Lalitpur, and regional centers.",
          },
        ],
      },
      {
        category: "Security & Dedicated SLA",
        items: [
          {
            title: "Hospital-Grade Encrypted Cloud Architecture",
            desc: "Database encryption, strict role-based user access (Admins, Doctors, Receptionists), and automated daily off-site backups.",
          },
          {
            title: "3 Months Priority SLA Support",
            desc: "Guaranteed technical uptime, priority bug resolution, and on-call operational assistance.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Private Hospitals & Polyclinics",
        iconName: "Stethoscope",
        adaptation: "Emergency OPD queues, in-patient ward inquiries, diagnostic lab test booking, and doctor roster management.",
      },
      {
        sector: "Ayurveda & Wellness Retreats",
        iconName: "Compass",
        adaptation: "Residential treatment package booking, customized consultation intake, and advance deposit payments.",
      },
    ],
    paymentStructure: {
      advance: "30% Advance Payment",
      milestone: "30% Design Approval + 30% Staging Demo",
      final: "10% Final Live Handover",
      maintenanceNote: "Healthcare support and SLA maintenance from 10–15% annually.",
      steps: [
        { percentage: "30%", stage: "Discovery & Clinical Workflow Blueprint", note: "Upon project kickoff and database schema sign-off" },
        { percentage: "30%", stage: "Interactive UI & Patient Journey Approval", note: "After visual design and prototype sign-off" },
        { percentage: "30%", stage: "System Integration & Staging Demo", note: "After core booking engine, eSewa and dashboard walkthrough" },
        { percentage: "10%", stage: "Live Cloud Handover & Staff Training", note: "Upon deployment, staff training, and final live go-live" },
      ],
    },
    whyThisWorks:
      "Most polyclinics in Nepal suffer from dropped inquiries, long phone hold times, and reception chaos. By combining an authoritative public web presence with automated token booking and local digital payments, Optiverse delivers measurable administrative savings.",
    crossLinks: [
      {
        targetPackageId: "clinic-growth-website",
        targetPackageName: "Clinic Growth & SEO Website",
        targetPrice: "39,999/-",
        interestTrigger: "Prefer a Fixed-Price Turnkey Clinic Website with Booking & SEO?",
        interestBadge: "Fixed-Price Flagship",
        description: "If you don't require custom hospital ERP software and prefer a proven appointment & SEO engine at NPR 39,999/-.",
        keyHighlights: [
          "Fixed Investment of NPR 39,999/-",
          "8–12 Dynamic Healthcare Pages",
          "Doctor Appointment Scheduling & Local SEO",
          "Fast 4–6 Weeks Turnaround",
        ],
        ctaText: "Explore Clinic Growth (39,999/-)",
      },
      {
        targetPackageId: "clinic-starter-website",
        targetPackageName: "Clinic Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Clinic Presence First?",
        interestBadge: "Rapid Launch",
        description: "Clean, professional 4–8 page brochure presence with doctor credentials and WhatsApp inquiries at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "Doctor Bio Cards & Treatment Guide",
          "Direct WhatsApp Consultation Triggers",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Clinic Starter (24,999/-)",
      },
    ],
  },

  // =========================================================================
  // 2. SCHOOL, COLLEGE, OR CONSULTANCY (Education & Abroad Studies)
  // =========================================================================
  {
    id: "school-starter-website",
    name: "Education Starter Website",
    tier: "Education Starter",
    tagline: "Professional education presence that builds trust with students and parents.",
    bestFor: "Private secondary schools, abroad study consultancies, coaching institutes, language centers, and Montessori pre-schools.",
    startingPrice: "24,999/-",
    priceNumber: 24999,
    priceSubtext: "One-time investment",
    priceBadge: "Budget-Friendly",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "3,999/- Per Year",
    badge: "Fastest Turnaround",
    typicalMarketComparison: "Market average: NPR 40K–65K for generic school websites with zero lead tracking.",
    summaryHighlights: [
      "4–8 Mobile-Responsive Academic Pages",
      "Offered academic courses & abroad study destination showcase",
      "Campus facilities photo gallery & student achievement highlights",
      "Downloadable prospectus & course curriculum PDF buttons",
      "Direct admission inquiry form & WhatsApp counselor quick-chat",
      "Google Maps campus pin indexing for prospective parents",
      "1 Month dedicated post-launch technical support",
    ],
    deliverableCategories: [
      {
        category: "Institutional Identity & Structure",
        items: [
          {
            title: "4–8 Mobile-Responsive Academic Pages",
            desc: "Custom layouts including Home, About Institution, Offered Programs/Courses, Campus Life & Infrastructure, Fee Guidelines, and Contact.",
          },
          {
            title: "Course & Destination Listing Cards",
            desc: "Clear visual breakdown of programs, entry requirements, course duration, and affiliated universities/boards (NEB, TU, Cambridge, etc.).",
          },
          {
            title: "Campus Photo Gallery & Student Achievements",
            desc: "Optimized multimedia gallery showcasing classrooms, science/computer labs, sports grounds, and annual toppers.",
          },
          {
            title: "Downloadable Prospectus & Forms",
            desc: "One-click download button for official institution prospectus, fee structure, and offline admission forms.",
          },
        ],
      },
      {
        category: "Admission Inquiries & Outreach",
        badge: "Student Leads",
        items: [
          {
            title: "Direct Admission Inquiry Funnel",
            desc: "Lead capture form connecting prospective parents and students directly with the admissions desk via instant email and WhatsApp.",
          },
          {
            title: "Google Maps Campus Location Pin",
            desc: "Verified location indexing making your campus or consultancy easy to find in Putalisadak, Baneshwor, or local hubs.",
          },
        ],
      },
      {
        category: "Hosting & Technical Launch",
        badge: "Launch & Support",
        items: [
          {
            title: "Official .edu.np / .com Configuration",
            desc: "Complete DNS configuration, fast hosting deployment, and free SSL certificate.",
          },
          {
            title: "1 Professional Email Setup",
            desc: "Branded institution email (e.g. info@yourschool.edu.np) for formal academic and government correspondence.",
          },
          {
            title: "1 Month Post-Launch Support",
            desc: "Security bug fixes, notice updates, and technical troubleshooting included free.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Schools & Colleges",
        iconName: "GraduationCap",
        adaptation: "Curriculum highlights, faculty directories, bus route maps, and admission intake criteria.",
      },
      {
        sector: "Abroad Education Consultancies",
        iconName: "Globe",
        adaptation: "Key study destinations (USA, UK, Australia, Canada, Japan), test prep schedules (IELTS, PTE), and counselor inquiry buttons.",
      },
    ],
    paymentStructure: {
      advance: "50% Advance",
      milestone: "None (Streamlined 2-stage)",
      final: "50% Before Final Live Launch",
      maintenanceNote: "Optional annual education maintenance from NPR 3,999/- Per Year.",
      steps: [
        { percentage: "50%", stage: "Project Kickoff", note: "Upon prospectus collection and curriculum briefing" },
        { percentage: "50%", stage: "Live Handover", note: "After staging preview approval before pointing live domain" },
      ],
    },
    whyThisWorks:
      "Educational institutions in Nepal need a clean, authoritative website that loads instantly on smartphones. This package eliminates clutter, delivers high credibility to parents, and captures student inquiries immediately via WhatsApp.",
    crossLinks: [
      {
        targetPackageId: "school-growth-website",
        targetPackageName: "Education Growth & Counselor Website",
        targetPrice: "39,999/-",
        interestTrigger: "Need Daily Notice Board CMS, Destination Hubs & Counselor Booking?",
        interestBadge: "Most Popular Upgrade",
        description: "Upgrade to self-managed daily notices, study abroad destination hubs, counselor appointment scheduling, and local educational SEO.",
        keyHighlights: [
          "8–12 Dynamic Education Pages",
          "Daily Notice Board CMS (Exam/Routine)",
          "Counselor 1-on-1 Consultation Booking",
          "Top Google Search Ranking in Nepal",
        ],
        ctaText: "Explore Education Growth (39,999/-)",
      },
      {
        targetPackageId: "school-custom-system",
        targetPackageName: "Education Portal & Student Application CRM",
        targetPrice: "79,999/-",
        interestTrigger: "Need Online Student Application Portal, Document Uploads & Fee Collection?",
        interestBadge: "Full Student CRM",
        description: "For institutions needing complete online admission submissions, document verification, counselor CRM pipelines, and eSewa fee payments.",
        keyHighlights: [
          "Online Student Application Submission Portal",
          "Counselor Lead Management CRM Dashboard",
          "Online Application Fee Checkout via eSewa",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Education Portal (79,999/-)",
      },
    ],
  },

  {
    id: "school-growth-website",
    name: "Education Growth & Counselor Website",
    tier: "Flagship Education Tier",
    tagline: "Dynamic education engine with live notice board CMS, destination hubs, and counselor booking funnels.",
    bestFor: "Growing abroad education consultancies, private 10+2 colleges, vocational training institutes, and test preparation academies.",
    startingPrice: "39,999/-",
    priceNumber: 39999,
    priceSubtext: "One-time investment",
    priceBadge: "Reasonable Pricing",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "4,999/- Per Year",
    isPopular: true,
    badge: "Recommended",
    typicalMarketComparison: "Competitor agency fee: NPR 70K–95K for educational portals with dynamic notice CMS.",
    summaryHighlights: [
      "8–12 Custom-Designed Dynamic Academic Pages",
      "Self-managed daily notice board CMS (Exam routines, results, holidays)",
      "Comprehensive study abroad destination hubs (USA, UK, Australia, Canada, Japan)",
      "1-on-1 Counselor appointment booking workflow",
      "Verified student visa success stories & testimonial video reels",
      "Educational local SEO ranking for 'best abroad consultancy in Kathmandu'",
      "Instant student lead routing to counselor WhatsApp & email",
      "1 Month dedicated technical maintenance & staff training",
    ],
    deliverableCategories: [
      {
        category: "Dynamic Academic Architecture",
        badge: "Dynamic Engine",
        items: [
          {
            title: "8–12 Custom-Designed Dynamic Pages",
            desc: "Full institutional portal including Home, Courses/Programs, Study Destinations, Daily Notices, Counselor Booking, Visa Testimonials, and Student Services.",
          },
          {
            title: "Self-Managed Daily Notice Board CMS",
            desc: "Intuitive admin interface allowing administrative staff to publish circulars, holiday notices, exam schedules, and fee deadlines in seconds.",
          },
          {
            title: "Study Abroad Destination Hubs",
            desc: "Rich country landing pages detailing university options, scholarship opportunities, work rights, and visa checklists.",
          },
          {
            title: "1-on-1 Counselor Appointment Funnel",
            desc: "Prospective students choose preferred study country and book an in-person or virtual counseling session with time-slot selection.",
          },
        ],
      },
      {
        category: "Reach & Student Conversion",
        badge: "SEO & Authority",
        items: [
          {
            title: "Educational Local SEO Ranking",
            desc: "Optimized for high-value student searches like 'IELTS classes Kathmandu', 'study in Australia consultancy Nepal', and college admissions.",
          },
          {
            title: "Student Visa Success Stories & Video Reels",
            desc: "High-trust testimonial showcase featuring student visa grant photos, university offer letters, and authentic video reviews.",
          },
          {
            title: "Multi-Channel Instant Lead Triggers",
            desc: "Inquiries route instantly to the admissions desk with student academic background and intended destination.",
          },
        ],
      },
      {
        category: "Security & Support",
        items: [
          {
            title: "High-Speed 4G Mobile Performance",
            desc: "Sub-second load times on Nepali mobile networks so students browsing on smartphones never drop off.",
          },
          {
            title: "Staff Admin Training & Documentation",
            desc: "Comprehensive video training guiding your staff on uploading notices and managing student leads.",
          },
          {
            title: "1 Month Dedicated Technical Maintenance",
            desc: "Free technical support, monthly backups, and performance monitoring included.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Abroad Education Consultancies",
        iconName: "Globe",
        adaptation: "University partner listings, intake season countdowns, visa checklists, and counselor appointment calendars.",
      },
      {
        sector: "Private Colleges & Schools",
        iconName: "GraduationCap",
        adaptation: "Faculty directories, academic calendars, fee structure calculators, and ECA/sports activity showcases.",
      },
    ],
    paymentStructure: {
      advance: "40% Advance Payment",
      milestone: "30% Upon Interactive Design Approval",
      final: "30% Before Live Launch",
      maintenanceNote: "Annual educational maintenance of 4,999/- Per Year.",
      steps: [
        { percentage: "40%", stage: "Discovery & Academic Briefing", note: "Upon onboarding and course structure collection" },
        { percentage: "30%", stage: "Design & Notice CMS Approval", note: "After visual design and notice board workflow sign-off" },
        { percentage: "30%", stage: "Launch & Staff Handover", note: "Upon live cloud deployment and counselor staff training" },
      ],
    },
    whyThisWorks:
      "Education decisions in Nepal are heavily driven by trust and speed of counselor response. By providing a self-managed daily notice board CMS and an automated counseling booking funnel, this package turns website traffic into enrolled students.",
    crossLinks: [
      {
        targetPackageId: "school-starter-website",
        targetPackageName: "Education Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Education Presence First?",
        interestBadge: "Budget Alternative",
        description: "Need a fast, credible 4–8 page brochure website with course listings and WhatsApp inquiries at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "4–8 Mobile-Responsive Showcase Pages",
          "Direct Admission Inquiries via WhatsApp",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Education Starter (24,999/-)",
      },
      {
        targetPackageId: "school-custom-system",
        targetPackageName: "Education Portal & Student Application CRM",
        targetPrice: "79,999/-",
        interestTrigger: "Need Online Student Application Portal, Document Uploads & Fee Collection?",
        interestBadge: "Enterprise Education",
        description: "For institutions needing complete online student admission submissions, document verification, counselor CRM pipelines, and eSewa fee payments.",
        keyHighlights: [
          "Online Student Application Submission Portal",
          "Counselor Lead Management CRM Dashboard",
          "Online Application Fee Checkout via eSewa",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Education Portal (79,999/-)",
      },
    ],
  },

  {
    id: "school-custom-system",
    name: "Education Portal & Student Application CRM",
    tier: "Enterprise Education Portal",
    tagline: "End-to-end admission portal with document uploads, counselor pipeline tracking, and online fee checkout.",
    bestFor: "Large abroad study consultancies, college networks, multi-branch training institutes, and schools needing digital application workflows.",
    startingPrice: "79,999/-",
    priceNumber: 79999,
    priceSubtext: "Standard Portal (Custom School ERP Systems NPR 90,000–500,000+)",
    priceBadge: "Enterprise Scope",
    timeline: "6–10 weeks for standard systems; 10–16 weeks for custom school ERP",
    maintenance: "10–15% Annually (or custom SLA)",
    badge: "Full Education Engineering",
    typicalMarketComparison: "Nepali standalone consultancy CRMs and school ERPs cost NPR 150,000–350,000+; Optiverse delivers a unified portal.",
    summaryHighlights: [
      "20+ Custom Pages / Comprehensive Education Portal",
      "Full Online Student Admission & Application Submission Portal",
      "Academic Document Upload & Multi-Stage Verification Pipeline",
      "Counselor Lead Management CRM Dashboard (Applied -> Verified -> Offer -> Visa)",
      "Online Admission & Application Fee Payment via eSewa & Khalti",
      "Automated Student Notification Emails & SMS Updates",
      "Multi-Branch & Counselor Role-Based Permissions",
      "3 Months Priority SLA Support & Staff Training",
    ],
    deliverableCategories: [
      {
        category: "Online Student Intake & Portal",
        badge: "Application Engine",
        items: [
          {
            title: "Online Student Application Submission",
            desc: "Custom multi-step application form collecting personal details, academic history, test scores (IELTS/PTE), and passport details.",
          },
          {
            title: "Secure Document Upload & Verification Vault",
            desc: "Students upload transcripts, citizenship copies, and test certificates directly into encrypted cloud storage.",
          },
          {
            title: "Online Application Fee Checkout (eSewa / Khalti)",
            desc: "Automated domestic digital payment gateway integration for collecting registration and application processing fees.",
          },
        ],
      },
      {
        category: "Counselor CRM & Pipeline Engine",
        badge: "CRM Architecture",
        items: [
          {
            title: "Multi-Stage Student Pipeline Dashboard",
            desc: "Counselors move student leads through structured stages: New Inquiry -> Document Review -> University Applied -> Offer Received -> Visa Granted.",
          },
          {
            title: "Counselor Assignment & Performance Metrics",
            desc: "Branch managers assign incoming leads to specific counselors and track follow-up times and conversion rates.",
          },
          {
            title: "Automated Student SMS & Email Alerts",
            desc: "Students receive automated status alerts whenever an offer letter arrives or additional documents are needed.",
          },
        ],
      },
      {
        category: "Security & Enterprise SLA",
        items: [
          {
            title: "Role-Based User Permissions (RBAC)",
            desc: "Granular access levels for Managing Directors, Branch Managers, Counselors, and Reception staff.",
          },
          {
            title: "Exportable Analytics & Registry Reports",
            desc: "Export student lists, university intake records, and revenue summaries to CSV/Excel.",
          },
          {
            title: "3 Months Priority SLA Support",
            desc: "Dedicated technical account lead, regular backups, and priority support.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Multi-Branch Abroad Consultancies",
        iconName: "Globe",
        adaptation: "Branch-specific lead routing (Kathmandu, Pokhara, Chitwan, Butwal) with unified head office reporting.",
      },
      {
        sector: "Private Colleges & Academies",
        iconName: "GraduationCap",
        adaptation: "Online entrance examination registration, seat quota tracking, and automated student roll generation.",
      },
    ],
    paymentStructure: {
      advance: "30% Advance Payment",
      milestone: "30% Design Approval + 30% Staging Demo",
      final: "10% Final Live Handover",
      maintenanceNote: "Educational support and SLA maintenance from 10–15% annually.",
      steps: [
        { percentage: "30%", stage: "Discovery & Application Architecture Blueprint", note: "Upon project kickoff and student CRM schema sign-off" },
        { percentage: "30%", stage: "Interactive UI & Student Journey Approval", note: "After visual design and application form prototype sign-off" },
        { percentage: "30%", stage: "System Integration & Staging Demo", note: "After core CRM, eSewa and document upload walkthrough" },
        { percentage: "10%", stage: "Live Cloud Handover & Staff Training", note: "Upon deployment, staff training, and final live go-live" },
      ],
    },
    whyThisWorks:
      "Most education consultancies lose 30–40% of their student inquiries due to unorganized WhatsApp chats and spreadsheets. By bringing the entire student journey—from first inquiry to document upload and fee payment—into one portal, this package dramatically increases student conversions.",
    crossLinks: [
      {
        targetPackageId: "school-growth-website",
        targetPackageName: "Education Growth & Counselor Website",
        targetPrice: "39,999/-",
        interestTrigger: "Prefer a Fixed-Price Turnkey Website with Daily Notices & SEO?",
        interestBadge: "Fixed-Price Flagship",
        description: "If you don't require full student CRM engineering and want a proven notice board and counselor booking engine at NPR 39,999/-.",
        keyHighlights: [
          "Fixed Investment of NPR 39,999/-",
          "8–12 Dynamic Education Pages",
          "Daily Notice Board CMS & Counselor Booking",
          "Fast 4–6 Weeks Delivery",
        ],
        ctaText: "Explore Education Growth (39,999/-)",
      },
      {
        targetPackageId: "school-starter-website",
        targetPackageName: "Education Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Education Presence First?",
        interestBadge: "Rapid Launch",
        description: "Clean, professional 4–8 page brochure presence with course listings and WhatsApp inquiries at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "Course Listing Cards & Campus Gallery",
          "Direct Admission Inquiries via WhatsApp",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Education Starter (24,999/-)",
      },
    ],
  },

  // =========================================================================
  // 3. HOTEL, RESTAURANT, OR AGENCY (Hospitality & Dining)
  // =========================================================================
  {
    id: "hotel-starter-website",
    name: "Hospitality Starter Website",
    tier: "Hospitality Starter",
    tagline: "Visual digital menu and hospitality showcase that drives local diners and guests.",
    bestFor: "Cafes, restaurants, bakeries, boutique guest houses, bed & breakfasts, and regional dining venues.",
    startingPrice: "24,999/-",
    priceNumber: 24999,
    priceSubtext: "One-time investment",
    priceBadge: "Budget-Friendly",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "3,999/- Per Year",
    badge: "Fastest Turnaround",
    typicalMarketComparison: "Market average: NPR 40K–60K for static PDF menu uploads that fail on mobile.",
    summaryHighlights: [
      "4–8 Mobile-First Pages with High-Res Food & Room Gallery",
      "Digital food & beverage menu showcase (Mobile 4G optimized)",
      "Room types & nightly tariff presentation",
      "Direct table & room reservation WhatsApp quick-button",
      "Google Maps 3-Pack location ranking (Thamel, Pokhara, Lalitpur)",
      "1 Professional business email & social media linking",
      "1 Month dedicated post-launch technical support",
    ],
    deliverableCategories: [
      {
        category: "Hospitality Showcase & Structure",
        items: [
          {
            title: "4–8 Mobile-Responsive Pages",
            desc: "Visually rich pages including Home, Dining Menu / Room Suites, Ambiance & Photo Tour, Special Offers, and Location & Contact.",
          },
          {
            title: "Mobile-Optimized Digital Menu",
            desc: "Clean digital food and drinks presentation with high-res photos, dish descriptions, and pricing (no blurry PDF downloads).",
          },
          {
            title: "Room Types & Nightly Tariffs",
            desc: "Showcases Deluxe, Standard, and Suite accommodations with amenity checklists (WiFi, AC, breakfast included).",
          },
          {
            title: "Ambiance & Dining Hall Photo Gallery",
            desc: "High-definition photo showcase highlighting restaurant seating, outdoor patios, and bar ambiance.",
          },
        ],
      },
      {
        category: "Direct Bookings & Foot Traffic",
        badge: "Zero Commission",
        items: [
          {
            title: "Direct WhatsApp Reservation Quick-Button",
            desc: "Floating quick-action button allowing guests to reserve a table or book a room instantly without paying OTA commissions.",
          },
          {
            title: "Google Maps 3-Pack Local Optimization",
            desc: "Precise GPS pin on Google Maps optimized for local searches like 'best restaurant near me' or 'boutique hotel in Thamel/Pokhara'.",
          },
          {
            title: "Click-to-Call Hotline & Opening Timings",
            desc: "Prominent operating hours and direct telephone numbers for instant takeaway orders and inquiries.",
          },
        ],
      },
      {
        category: "Hosting & Technical Launch",
        badge: "Launch & Support",
        items: [
          {
            title: "Official Domain & High-Speed Hosting",
            desc: "Fast server setup with SSL certificate ensuring instant page loading for hungry diners on mobile networks.",
          },
          {
            title: "1 Professional Business Email",
            desc: "Branded email setup (e.g. reservations@yourhotel.com.np) for corporate bookings and supplier communications.",
          },
          {
            title: "1 Month Post-Launch Support",
            desc: "Free menu updates, price tweaks, and technical support included for the first 30 days.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Restaurants & Cafes",
        iconName: "Utensils",
        adaptation: "Visual food and cocktail menu, chef specialties, daily opening hours, and direct WhatsApp takeaway orders.",
      },
      {
        sector: "Hotels & Bed & Breakfasts",
        iconName: "Compass",
        adaptation: "Room suite amenities, breakfast inclusions, airport pickup inquiry, and direct WhatsApp booking.",
      },
    ],
    paymentStructure: {
      advance: "50% Advance",
      milestone: "None (Streamlined 2-stage)",
      final: "50% Before Final Live Launch",
      maintenanceNote: "Optional annual hospitality maintenance from NPR 3,999/- Per Year.",
      steps: [
        { percentage: "50%", stage: "Project Kickoff", note: "Upon menu items and photo asset collection" },
        { percentage: "50%", stage: "Live Handover", note: "After staging preview approval before pointing live domain" },
      ],
    },
    whyThisWorks:
      "Diners and travelers in Nepal make quick decisions on their phones based on photos and Google Maps location. This package gives venues a fast, beautiful mobile showcase with zero-commission direct WhatsApp bookings.",
    crossLinks: [
      {
        targetPackageId: "hotel-growth-website",
        targetPackageName: "Hospitality Growth & Table Booking Website",
        targetPrice: "39,999/-",
        interestTrigger: "Need Self-Managed Digital Menu CMS, Table Booking System & Local SEO?",
        interestBadge: "Most Popular Upgrade",
        description: "Upgrade to self-managed digital menu CMS, automated table reservation forms, banqueting inquiry funnels, and local SEO ranking.",
        keyHighlights: [
          "8–12 Dynamic Hospitality Pages",
          "Self-Managed Menu & Room Suite CMS",
          "Online Table Reservation System",
          "Top Google Search Ranking in Nepal",
        ],
        ctaText: "Explore Hospitality Growth (39,999/-)",
      },
      {
        targetPackageId: "hotel-custom-system",
        targetPackageName: "Direct Hotel Reservation & Multi-Room Platform",
        targetPrice: "79,999/-",
        interestTrigger: "Need Zero-Commission Room Booking Engine with eSewa/Khalti Deposits?",
        interestBadge: "Direct Booking Engine",
        description: "For hotels and resorts needing live room availability calendars, advance deposit checkouts via eSewa/Khalti, and banquet management.",
        keyHighlights: [
          "Zero-Commission Direct Room Booking Engine",
          "Online Advance Deposit Checkout (eSewa / Khalti)",
          "Real-Time Room Availability Calendar",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Hotel Booking Engine (79,999/-)",
      },
    ],
  },

  {
    id: "hotel-growth-website",
    name: "Hospitality Growth & Table Booking Website",
    tier: "Flagship Hospitality Tier",
    tagline: "Interactive dining & hotel website with self-managed menu CMS, table reservation system, and local SEO.",
    bestFor: "Popular multi-cuisine restaurants, boutique heritage hotels, rooftop lounges, banqueting venues, and resort properties.",
    startingPrice: "39,999/-",
    priceNumber: 39999,
    priceSubtext: "One-time investment",
    priceBadge: "Reasonable Pricing",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "4,999/- Per Year",
    isPopular: true,
    badge: "Recommended",
    typicalMarketComparison: "Competitor agency fee: NPR 65K–90K for dynamic restaurant websites with reservation forms.",
    summaryHighlights: [
      "8–12 Custom-Designed Dynamic Hospitality Pages",
      "Self-managed digital menu & room suite CMS (Update dishes and rates in seconds)",
      "Online table reservation booking workflow with guest counter & date selection",
      "Banqueting, wedding hall & corporate event inquiry lead funnel",
      "Interactive customer review slider & live Instagram feed integration",
      "Local hospitality SEO for domestic & international tourists in Nepal",
      "Instant reservation alerts to management WhatsApp & email",
      "1 Month dedicated speed tuning & staff training",
    ],
    deliverableCategories: [
      {
        category: "Dynamic Hospitality Architecture",
        badge: "Dynamic Engine",
        items: [
          {
            title: "8–12 Custom-Designed Dynamic Pages",
            desc: "Complete platform including Home, Dining Menu, Room Suites, Banquet & Event Halls, Table Reservation, Photo Tour, and Contact.",
          },
          {
            title: "Self-Managed Menu & Rates CMS",
            desc: "Staff easily update dish prices, add new seasonal cocktails, create chef specials, and mark items as sold-out on their smartphones.",
          },
          {
            title: "Online Table Reservation System",
            desc: "Guests select date, preferred seating time, number of diners, and special dietary requests, sending instant notifications to the front desk.",
          },
          {
            title: "Banquet & Event Inquiry Funnel",
            desc: "High-value lead capture form for weddings, birthdays, corporate meetings, and cocktail parties with guest capacity calculators.",
          },
        ],
      },
      {
        category: "Tourism SEO & Social Proof",
        badge: "Local SEO & Reach",
        items: [
          {
            title: "Local Hospitality SEO for Tourists",
            desc: "Optimized for foreign and domestic travelers searching 'best dining in Kathmandu', 'heritage stay Patan', or 'lakeside cafe Pokhara'.",
          },
          {
            title: "Live Instagram Feed & Tripadvisor Widgets",
            desc: "Displays real customer food photos, aesthetic dining ambiance reels, and verified 5-star traveler reviews.",
          },
          {
            title: "Instant Front-Desk WhatsApp Alerts",
            desc: "Reservation requests ping front-desk managers directly on WhatsApp so tables can be confirmed in minutes.",
          },
        ],
      },
      {
        category: "Speed & Support",
        items: [
          {
            title: "Sub-Second Mobile 4G Loading Speed",
            desc: "Advanced image compression ensures high-resolution culinary photos load without delay on standard Nepali mobile connections.",
          },
          {
            title: "1 Month Dedicated Technical Maintenance",
            desc: "Includes routine speed tuning, database backups, and on-call operational assistance.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Fine Dining & Lounges",
        iconName: "Utensils",
        adaptation: "Wine lists, tasting menus, VIP table bookings, and DJ/live acoustic event schedules.",
      },
      {
        sector: "Resorts & Boutique Hotels",
        iconName: "Compass",
        adaptation: "Seasonal stay packages, room tours, swimming pool/spa amenities, and banquet wedding inquiries.",
      },
    ],
    paymentStructure: {
      advance: "40% Advance Payment",
      milestone: "30% Upon Interactive Design Approval",
      final: "30% Before Live Launch",
      maintenanceNote: "Annual hospitality maintenance of 4,999/- Per Year.",
      steps: [
        { percentage: "40%", stage: "Discovery & Menu Onboarding", note: "Upon project kickoff and branding asset collection" },
        { percentage: "30%", stage: "Design & Menu CMS Approval", note: "After visual layout and reservation workflow sign-off" },
        { percentage: "30%", stage: "Launch & Staff Handover", note: "Upon live deployment and front-desk reservation training" },
      ],
    },
    whyThisWorks:
      "Third-party delivery and booking apps take up to 25% of restaurant and hotel revenues. This package gives hospitality brands their own direct booking and menu engine, converting local diners directly with zero commission.",
    crossLinks: [
      {
        targetPackageId: "hotel-starter-website",
        targetPackageName: "Hospitality Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Dining Presence First?",
        interestBadge: "Budget Alternative",
        description: "Need a fast, mobile-friendly 4–8 page brochure website with digital food menu and WhatsApp bookings at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "4–8 Mobile-Responsive Pages",
          "Direct WhatsApp Table & Room Reservation",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Hospitality Starter (24,999/-)",
      },
      {
        targetPackageId: "hotel-custom-system",
        targetPackageName: "Direct Hotel Reservation & Multi-Room Platform",
        targetPrice: "79,999/-",
        interestTrigger: "Need Zero-Commission Room Booking Engine with eSewa/Khalti Deposits?",
        interestBadge: "Enterprise Hospitality",
        description: "For hotels and resorts needing live room availability calendars, advance deposit checkouts via eSewa/Khalti, and banquet management.",
        keyHighlights: [
          "Zero-Commission Direct Room Booking Engine",
          "Online Advance Deposit Checkout (eSewa / Khalti)",
          "Real-Time Room Availability Calendar",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Hotel Booking Engine (79,999/-)",
      },
    ],
  },

  {
    id: "hotel-custom-system",
    name: "Direct Hotel Reservation & Multi-Room Platform",
    tier: "Enterprise Hospitality Portal",
    tagline: "Commission-free direct room booking engine with live availability calendars and eSewa/Khalti deposits.",
    bestFor: "Hotels, resorts, multi-property hospitality groups, apartment complexes, and high-volume banquet centers.",
    startingPrice: "79,999/-",
    priceNumber: 79999,
    priceSubtext: "Standard Platform (Custom Hotel ERP Systems NPR 90,000–500,000+)",
    priceBadge: "Enterprise Scope",
    timeline: "6–10 weeks for standard systems; 10–16 weeks for custom hotel ERP",
    maintenance: "10–15% Annually (or custom SLA)",
    badge: "Full Hospitality Engineering",
    typicalMarketComparison: "Nepali custom hotel reservation platforms cost NPR 180,000–400,000+; Optiverse provides modular predictability.",
    summaryHighlights: [
      "18+ Custom Pages / Full Direct Reservation Engine",
      "Zero-Commission Direct Room & Suite Booking Engine",
      "Real-Time Room Availability Calendar & Seasonal Tariff Rules",
      "Online Advance Deposit Checkout via eSewa, Khalti & Cards",
      "Banquet & Corporate Event Booking Management System",
      "Automated Guest Vouchers & Branded PDF Invoicing",
      "Centralized Front Desk & Housekeeping Reservation Dashboard",
      "3 Months Priority SLA Support & Staff Training",
    ],
    deliverableCategories: [
      {
        category: "Direct Booking Engine",
        badge: "Zero Commission",
        items: [
          {
            title: "Real-Time Room Availability & Rate Engine",
            desc: "Guests select check-in / check-out dates, room tier, number of guests, and see live pricing and remaining room quotas.",
          },
          {
            title: "Advance Deposit Gateway (eSewa / Khalti / Cards)",
            desc: "Accept non-refundable advance room deposits or full payments with instant confirmation vouchers and invoice generation.",
          },
          {
            title: "Seasonal Tariff & Package Builder",
            desc: "Managers configure festive pricing, weekend rates, honeymoon packages, and promotional voucher codes easily.",
          },
        ],
      },
      {
        category: "Front-Desk Operations & Events",
        badge: "Admin Engine",
        items: [
          {
            title: "Centralized Reservation Management Dashboard",
            desc: "Front-desk staff view upcoming check-ins, room assignment statuses, payment receipts, and guest history.",
          },
          {
            title: "Banquet Hall & Event Management",
            desc: "Dedicated booking workflow for wedding receptions, conferences, and private banquets with catering selection.",
          },
          {
            title: "Multi-Language Visitor Switcher",
            desc: "Seamless language toggle (English, Nepali, Chinese) to accommodate international travelers and domestic tourists.",
          },
        ],
      },
      {
        category: "Enterprise SLA & Security",
        items: [
          {
            title: "Encrypted Cloud Hosting & Data Security",
            desc: "High-availability cloud servers with automated daily backups and SSL encryption.",
          },
          {
            title: "3 Months Dedicated Priority SLA Support",
            desc: "On-call technical assistance, priority bug fixes, and staff operational training.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Boutique Heritage Resorts",
        iconName: "Compass",
        adaptation: "Cultural experience packages, airport transfer add-ons, and multi-night discount structures.",
      },
      {
        sector: "Event & Banquet Venues",
        iconName: "Utensils",
        adaptation: "Hall seating layouts, food package calculators, advance date reservation, and balance payment tracking.",
      },
    ],
    paymentStructure: {
      advance: "30% Advance Payment",
      milestone: "30% Design Approval + 30% Staging Demo",
      final: "10% Final Live Handover",
      maintenanceNote: "Hospitality support and SLA maintenance from 10–15% annually.",
      steps: [
        { percentage: "30%", stage: "Discovery & Room Inventory Blueprint", note: "Upon project kickoff and rate logic sign-off" },
        { percentage: "30%", stage: "Interactive UI & Booking Journey Approval", note: "After visual design and guest checkout prototype sign-off" },
        { percentage: "30%", stage: "Payment Gateway Integration & Staging Demo", note: "After core booking engine, eSewa and dashboard walkthrough" },
        { percentage: "10%", stage: "Live Cloud Handover & Staff Training", note: "Upon deployment, front-desk training, and final live go-live" },
      ],
    },
    whyThisWorks:
      "A 30-room hotel in Nepal paying 18% commission to Booking.com loses hundreds of thousands of rupees annually. This platform enables hotels to capture high-margin direct bookings while automating front-desk reservation management.",
    crossLinks: [
      {
        targetPackageId: "hotel-growth-website",
        targetPackageName: "Hospitality Growth & Table Booking Website",
        targetPrice: "39,999/-",
        interestTrigger: "Prefer a Fixed-Price Turnkey Restaurant/Hotel Website with Table Booking?",
        interestBadge: "Fixed-Price Flagship",
        description: "If you don't require heavy direct booking software and prefer a proven table reservation and menu engine at NPR 39,999/-.",
        keyHighlights: [
          "Fixed Investment of NPR 39,999/-",
          "8–12 Dynamic Hospitality Pages",
          "Online Table Reservation System & Menu CMS",
          "Fast 4–6 Weeks Turnaround",
        ],
        ctaText: "Explore Hospitality Growth (39,999/-)",
      },
      {
        targetPackageId: "hotel-starter-website",
        targetPackageName: "Hospitality Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Dining Presence First?",
        interestBadge: "Rapid Launch",
        description: "Clean, professional 4–8 page brochure presence with digital food menu and WhatsApp bookings at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "Digital Menu Showcase & Room Tariffs",
          "Direct WhatsApp Table & Room Reservation",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Hospitality Starter (24,999/-)",
      },
    ],
  },

  // =========================================================================
  // 4. RETAIL SHOP OR E-COMMERCE (Online Stores & Boutiques)
  // =========================================================================
  {
    id: "retail-starter-website",
    name: "Retail Product Showcase Website",
    tier: "Retail Starter",
    tagline: "Modern retail catalog with zero checkout friction and instant WhatsApp order capture.",
    bestFor: "Clothing boutiques, electronics shops, handicraft exporters, jewelry stores, and local retail outlets.",
    startingPrice: "24,999/-",
    priceNumber: 24999,
    priceSubtext: "One-time investment",
    priceBadge: "Budget-Friendly",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "3,999/- Per Year",
    badge: "Fastest Turnaround",
    typicalMarketComparison: "Market average: NPR 40K–65K for unmaintained template stores that lag on mobile.",
    summaryHighlights: [
      "4–8 Mobile-Responsive Showcase Pages",
      "Online product showcase catalog with category filtering",
      "Direct WhatsApp 'Order This Item' instant button (Auto-fills item & price)",
      "Physical store location map, working hours & brand story",
      "Google Business Profile indexing for local retail shoppers",
      "Fast 4G mobile performance & SSL encryption",
      "1 Month dedicated post-launch technical support",
    ],
    deliverableCategories: [
      {
        category: "Product Showcase & Structure",
        items: [
          {
            title: "4–8 Mobile-Responsive Showcase Pages",
            desc: "Custom pages including Home, Product Catalog, New Arrivals, Brand Story, Store Locations, and Contact.",
          },
          {
            title: "Categorized Product Showcase",
            desc: "Showcase products with high-res photos, descriptions, pricing, and category filters (Men, Women, Accessories, etc.).",
          },
          {
            title: "Physical Store Walk-In Guide",
            desc: "Store opening hours, physical address in New Road, Durbar Marg, or local bazaars, and interactive Google Map.",
          },
        ],
      },
      {
        category: "Frictionless Order Capture",
        badge: "WhatsApp Commerce",
        items: [
          {
            title: "Direct WhatsApp 'Order This Item' Trigger",
            desc: "Customer clicks 'Order via WhatsApp' on any product, and a chat automatically opens pre-filled with the product title, image, and price.",
          },
          {
            title: "Local Search & Google Business Profile",
            desc: "Helps walk-in shoppers discover your physical retail store when searching for products in your city.",
          },
        ],
      },
      {
        category: "Hosting & Technical Launch",
        badge: "Launch & Support",
        items: [
          {
            title: "Official Domain & High-Speed Hosting",
            desc: "Setup on secure servers with automated SSL certificate for consumer trust.",
          },
          {
            title: "1 Professional Business Email",
            desc: "Branded email setup (e.g. orders@yourstore.com.np) for formal supplier and customer correspondence.",
          },
          {
            title: "1 Month Post-Launch Support",
            desc: "Technical bug fixes, minor product tweaks, and troubleshooting included free.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Fashion Boutiques & Apparel",
        iconName: "ShoppingBag",
        adaptation: "Lookbook presentation, seasonal collections, fabric details, and direct WhatsApp size inquiries.",
      },
      {
        sector: "Handicrafts & Nepali Organic Products",
        iconName: "Sparkles",
        adaptation: "Export inquiry buttons, wholesale bulk order forms, and authentic artisan background stories.",
      },
    ],
    paymentStructure: {
      advance: "50% Advance",
      milestone: "None (Streamlined 2-stage)",
      final: "50% Before Final Live Launch",
      maintenanceNote: "Optional annual retail maintenance from NPR 3,999/- Per Year.",
      steps: [
        { percentage: "50%", stage: "Project Kickoff", note: "Upon product catalog list and photo collection" },
        { percentage: "50%", stage: "Live Handover", note: "After staging preview approval before pointing live domain" },
      ],
    },
    whyThisWorks:
      "Most Nepali shoppers prefer asking questions and ordering via WhatsApp rather than filling out complex registration forms. This package captures orders immediately with zero friction while keeping upfront costs low.",
    crossLinks: [
      {
        targetPackageId: "retail-growth-website",
        targetPackageName: "Full E-Commerce Website with Shopping Cart",
        targetPrice: "39,999/-",
        interestTrigger: "Need Full E-Commerce Cart, Product Variants & Self-Managed CMS?",
        interestBadge: "Most Popular Upgrade",
        description: "Upgrade to interactive shopping cart, product variants (sizes, colors), Cash on Delivery checkout, and self-managed admin CMS.",
        keyHighlights: [
          "8–12 Dynamic E-Commerce Pages",
          "Product Variant Selector (Sizes, Colors)",
          "Interactive Shopping Cart & Cash on Delivery",
          "Self-Managed Admin CMS for Unlimited Products",
        ],
        ctaText: "Explore Full E-Commerce (39,999/-)",
      },
      {
        targetPackageId: "retail-custom-system",
        targetPackageName: "Automated E-Commerce Engine with eSewa & Khalti",
        targetPrice: "79,999/-",
        interestTrigger: "Need Instant Digital Payments (eSewa/Khalti) & Inventory Automation?",
        interestBadge: "Automated Checkout",
        description: "For high-volume stores needing instant payment verification via eSewa, Khalti, Fonepay, live stock alerts, and delivery fee calculation.",
        keyHighlights: [
          "Instant Payment Integration (eSewa / Khalti / Fonepay)",
          "Real-Time Stock Tracking & Low-Stock Alerts",
          "Dynamic Delivery Fee Calculator by District",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Payment Gateway Store (79,999/-)",
      },
    ],
  },

  {
    id: "retail-growth-website",
    name: "Full E-Commerce Website with Shopping Cart",
    tier: "Flagship Retail E-Commerce",
    tagline: "Complete online store with product variants, shopping cart, cash on delivery, and self-managed CMS.",
    bestFor: "Growing online brands, apparel stores, beauty & cosmetics shops, electronic retailers, and multi-category merchants.",
    startingPrice: "39,999/-",
    priceNumber: 39999,
    priceSubtext: "One-time investment",
    priceBadge: "Reasonable Pricing",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "4,999/- Per Year",
    isPopular: true,
    badge: "Recommended",
    typicalMarketComparison: "Competitor agency fee: NPR 75K–110K for complete e-commerce stores with product variant CMS.",
    summaryHighlights: [
      "8–12 Custom-Designed Dynamic E-Commerce Pages",
      "Multi-category product catalog with live search & instant filters",
      "Product variant selector (sizes, colors, stock status badges)",
      "Interactive shopping cart with Cash on Delivery (COD) & WhatsApp checkout",
      "Self-managed admin CMS for adding unlimited products & discount banners",
      "Sub-2s mobile 4G load speed with image optimization",
      "Instant order alert notifications to store managers",
      "1 Month dedicated technical support & staff training",
    ],
    deliverableCategories: [
      {
        category: "E-Commerce Architecture & Cart",
        badge: "Shopping Engine",
        items: [
          {
            title: "8–12 Custom-Designed Dynamic Pages",
            desc: "Complete store layout including Home, Shop Catalogue, Product Detail Pages, Shopping Cart, Checkout, Brand Story, and Order Tracking.",
          },
          {
            title: "Product Variant Selector (Sizes & Colors)",
            desc: "Shoppers select sizes (S, M, L, XL), colors, and view real-time price adjustments and availability.",
          },
          {
            title: "Interactive Shopping Cart & Checkout",
            desc: "Frictionless checkout capturing customer name, phone number, delivery address, and delivery instructions without forced registration.",
          },
          {
            title: "Self-Managed Admin CMS for Unlimited Products",
            desc: "Store owners easily add new products, update prices, upload photos, and create promotional discount banners.",
          },
        ],
      },
      {
        category: "Order Fulfillment & Marketing",
        badge: "Conversion Engine",
        items: [
          {
            title: "Cash on Delivery & WhatsApp Order Confirmation",
            desc: "Customers place orders with COD or verify their order details directly on WhatsApp with your dispatch team.",
          },
          {
            title: "Local Search SEO & OpenGraph Social Sharing",
            desc: "Product links share beautifully on Facebook, Instagram, and TikTok with rich preview images, titles, and prices.",
          },
          {
            title: "Instant Order Alert System",
            desc: "New orders trigger instant email alerts and WhatsApp notifications to store managers so dispatch happens quickly.",
          },
        ],
      },
      {
        category: "Speed & Support",
        items: [
          {
            title: "Blazing Sub-2s Mobile 4G Performance",
            desc: "Engineered specifically for Nepali mobile networks to eliminate cart abandonment caused by slow loading.",
          },
          {
            title: "Staff Operational Training",
            desc: "Hands-on video training guiding your staff on adding products, managing orders, and changing stock counts.",
          },
          {
            title: "1 Month Dedicated Technical Support",
            desc: "Free support, backups, and security monitoring included.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Apparel & Shoe Stores",
        iconName: "ShoppingBag",
        adaptation: "Size charts, color swatches, stock availability badges, and customer photo review galleries.",
      },
      {
        sector: "Electronics & Gadgets",
        iconName: "Sparkles",
        adaptation: "Technical specification comparison tables, warranty information, and WhatsApp technical inquiries.",
      },
    ],
    paymentStructure: {
      advance: "40% Advance Payment",
      milestone: "30% Upon Interactive Design Approval",
      final: "30% Before Live Launch",
      maintenanceNote: "Annual e-commerce maintenance of 4,999/- Per Year.",
      steps: [
        { percentage: "40%", stage: "Discovery & Store Catalog Briefing", note: "Upon onboarding and product asset collection" },
        { percentage: "30%", stage: "Design & Store CMS Approval", note: "After visual design and cart prototype sign-off" },
        { percentage: "30%", stage: "Launch & Staff Handover", note: "Upon live cloud deployment and order management training" },
      ],
    },
    whyThisWorks:
      "Most WooCommerce stores in Nepal are weighed down by 30+ plugins, making them agonizingly slow on mobile phones. Optiverse builds lightweight, high-speed stores that keep mobile shoppers engaged and converting into buyers.",
    crossLinks: [
      {
        targetPackageId: "retail-starter-website",
        targetPackageName: "Retail Product Showcase Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Showcase First?",
        interestBadge: "Budget Alternative",
        description: "Need a fast, mobile-friendly 4–8 page showcase with direct WhatsApp ordering at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "4–8 Mobile-Responsive Pages",
          "Direct WhatsApp 'Order This Item' Trigger",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Retail Starter (24,999/-)",
      },
      {
        targetPackageId: "retail-custom-system",
        targetPackageName: "Automated E-Commerce Engine with eSewa & Khalti",
        targetPrice: "79,999/-",
        interestTrigger: "Need Instant Digital Payments (eSewa/Khalti) & Inventory Automation?",
        interestBadge: "Enterprise E-Commerce",
        description: "For high-volume stores needing instant payment verification via eSewa, Khalti, Fonepay, live stock alerts, and delivery fee calculation.",
        keyHighlights: [
          "Instant Payment Integration (eSewa / Khalti / Fonepay)",
          "Real-Time Stock Tracking & Low-Stock Alerts",
          "Dynamic Delivery Fee Calculator by District",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Payment Gateway Store (79,999/-)",
      },
    ],
  },

  {
    id: "retail-custom-system",
    name: "Automated E-Commerce Engine with eSewa & Khalti",
    tier: "Enterprise E-Commerce Portal",
    tagline: "Enterprise e-commerce store with automated digital payment checkouts, delivery zone rates, and stock alerts.",
    bestFor: "Established retail brands, high-volume online merchants, multi-brand marketplaces, and wholesale e-commerce businesses.",
    startingPrice: "79,999/-",
    priceNumber: 79999,
    priceSubtext: "Standard Platform (Custom Marketplace ERP Systems NPR 90,000–500,000+)",
    priceBadge: "Enterprise Scope",
    timeline: "6–10 weeks for standard systems; 10–16 weeks for custom marketplace ERP",
    maintenance: "10–15% Annually (or custom SLA)",
    badge: "Full E-Commerce Engineering",
    typicalMarketComparison: "Nepali verified payment gateway e-commerce platforms cost NPR 160,000–350,000+; Optiverse provides modular predictability.",
    summaryHighlights: [
      "20+ Custom Pages / Full Scalable E-Commerce Engine",
      "Instant Automated Payment Integration for eSewa, Khalti & Fonepay QR",
      "Real-Time Inventory Stock Tracking & Low-Stock Alerts",
      "Dynamic Delivery Fee Calculator by Kathmandu Valley vs Outer Districts",
      "Customer Account Dashboard with Past Order Tracking",
      "Automated Order Confirmation Receipts & PDF Invoices",
      "Store Admin Dashboard with Sales Analytics & CSV Exports",
      "3 Months Priority SLA Support & Staff Training",
    ],
    deliverableCategories: [
      {
        category: "Automated Payment & Fulfillment",
        badge: "Payment Gateways",
        items: [
          {
            title: "Automated eSewa, Khalti & Fonepay Checkout",
            desc: "Customers pay digitally with instant OTP verification, eliminating COD cash collection risks and fake orders.",
          },
          {
            title: "Dynamic Delivery Zone Rate Calculator",
            desc: "Automatically applies delivery fees based on customer location (Inside Ring Road, Outside Ring Road, Major Cities, Remote Districts).",
          },
          {
            title: "Real-Time Stock Inventory & Low-Stock Alerts",
            desc: "Inventory decreases automatically with each purchase; admins receive warnings when stock falls below threshold.",
          },
        ],
      },
      {
        category: "Customer Portal & Operations",
        badge: "Admin Engine",
        items: [
          {
            title: "Customer Account & Order History",
            desc: "Registered shoppers track shipment status, re-order past items, and download branded PDF tax invoices.",
          },
          {
            title: "Centralized Order Processing Dashboard",
            desc: "Dispatch team views pending orders, prints packing slips, updates courier tracking codes, and reconciles daily bank payouts.",
          },
          {
            title: "Promotional Coupon & Flash Sale Engine",
            desc: "Create percentage discounts, festive promo codes, buy-1-get-1 offers, and free delivery thresholds.",
          },
        ],
      },
      {
        category: "Enterprise SLA & Security",
        items: [
          {
            title: "PCI-DSS Compliant Security & Encryption",
            desc: "Secure transactions, database encryption, and automated cloud backups.",
          },
          {
            title: "3 Months Priority SLA Support",
            desc: "Payment reconciliation support, priority bug fixing, and staff operational training.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Multi-Category Retail Stores",
        iconName: "ShoppingBag",
        adaptation: "Warehouse dispatch tracking, bulk Excel product imports, and automated courier status sync.",
      },
      {
        sector: "Brand Flagship Stores",
        iconName: "Sparkles",
        adaptation: "VIP customer loyalty points, member-only discounts, and international shipping calculators.",
      },
    ],
    paymentStructure: {
      advance: "30% Advance Payment",
      milestone: "30% Design Approval + 30% Staging Demo",
      final: "10% Final Live Handover",
      maintenanceNote: "E-commerce support and SLA maintenance from 10–15% annually.",
      steps: [
        { percentage: "30%", stage: "Discovery & Merchant Gateway Blueprint", note: "Upon project kickoff and payment API credentials verification" },
        { percentage: "30%", stage: "Interactive UI & Checkout Journey Approval", note: "After visual layout and shopping prototype sign-off" },
        { percentage: "30%", stage: "Payment Gateway Integration & Staging Demo", note: "After core payment APIs, eSewa and dashboard walkthrough" },
        { percentage: "10%", stage: "Live Cloud Handover & Staff Training", note: "Upon deployment, staff dispatch training, and final live go-live" },
      ],
    },
    whyThisWorks:
      "Cash on Delivery default rates in Nepal reach up to 25%. By integrating instant verified digital payments via eSewa and Khalti with real-time stock tracking, this package automates the entire sales cycle and protects merchant margins.",
    crossLinks: [
      {
        targetPackageId: "retail-growth-website",
        targetPackageName: "Full E-Commerce Website with Shopping Cart",
        targetPrice: "39,999/-",
        interestTrigger: "Prefer a Fixed-Price Turnkey Store with COD & Shopping Cart?",
        interestBadge: "Fixed-Price Flagship",
        description: "If you don't require automated merchant APIs and prefer a proven shopping cart with COD and WhatsApp checkout at NPR 39,999/-.",
        keyHighlights: [
          "Fixed Investment of NPR 39,999/-",
          "8–12 Dynamic E-Commerce Pages",
          "Shopping Cart & Cash on Delivery Checkout",
          "Fast 4–6 Weeks Turnaround",
        ],
        ctaText: "Explore Full E-Commerce (39,999/-)",
      },
      {
        targetPackageId: "retail-starter-website",
        targetPackageName: "Retail Product Showcase Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Showcase First?",
        interestBadge: "Rapid Launch",
        description: "Clean, professional 4–8 page brochure presence with product catalog and WhatsApp inquiries at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "Product Showcase & Store Location Map",
          "Direct WhatsApp 'Order This Item' Trigger",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Retail Starter (24,999/-)",
      },
    ],
  },

  // =========================================================================
  // 5. CONSTRUCTION, LEGAL, ACCOUNTING (Professional Services & Firms)
  // =========================================================================
  {
    id: "corporate-starter-website",
    name: "Corporate & Firm Starter Website",
    tier: "Corporate Starter",
    tagline: "Authoritative digital presence that commands trust for law chambers, CA firms, and builders.",
    bestFor: "Law firms, chartered accounting practices, engineering consultants, architecture studios, and construction contractors.",
    startingPrice: "24,999/-",
    priceNumber: 24999,
    priceSubtext: "One-time investment",
    priceBadge: "Budget-Friendly",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "3,999/- Per Year",
    badge: "Fastest Turnaround",
    typicalMarketComparison: "Market average: NPR 40K–65K for generic corporate templates that fail to convey authority.",
    summaryHighlights: [
      "4–8 Mobile-Responsive Pages with Corporate Typography",
      "Corporate authority layout with practice areas & services breakdown",
      "Completed projects showcase & senior partner profiles",
      "Direct consultation inquiry form & click-to-call hotlines",
      "Google Maps corporate office indexing",
      "1 Professional business email setup",
      "1 Month dedicated post-launch technical support",
    ],
    deliverableCategories: [
      {
        category: "Corporate Authority & Structure",
        items: [
          {
            title: "4–8 Mobile-Responsive Pages",
            desc: "Polished corporate layout including Home, About Firm, Practice Areas, Senior Partners / Engineers, Project Portfolio, and Contact.",
          },
          {
            title: "Practice Areas & Service Breakdown",
            desc: "Structured cards detailing corporate law, tax audit, structural engineering, or construction management services.",
          },
          {
            title: "Senior Partner & CA / Bar Credentials",
            desc: "Executive biographies showcasing bar council licenses, ICAN chartered accountant credentials, and completed milestones.",
          },
          {
            title: "Completed Project / Portfolio Showcase",
            desc: "Showcase completed architectural designs, infrastructure contracts, or landmark corporate advisory transactions.",
          },
        ],
      },
      {
        category: "Client Inquiries & Reach",
        badge: "Client Intake",
        items: [
          {
            title: "Direct Consultation Inquiry Funnel",
            desc: "Corporate lead capture form capturing prospective client requirements, organization name, and preferred consultation time.",
          },
          {
            title: "Google Maps Corporate Office Pin",
            desc: "Verified location indexing making your firm easy to find in Babarmahal, Anamnagar, Kupondole, or commercial hubs.",
          },
        ],
      },
      {
        category: "Hosting & Technical Launch",
        badge: "Launch & Support",
        items: [
          {
            title: "Official Domain & High-Speed Hosting",
            desc: "Setup on secure servers with automated SSL certificate for corporate credibility.",
          },
          {
            title: "1 Professional Business Email",
            desc: "Branded email setup (e.g. contact@yourfirm.com.np) for formal legal, audit, and client correspondence.",
          },
          {
            title: "1 Month Post-Launch Support",
            desc: "Technical bug fixes, credential updates, and support included free.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Law Firms & Legal Chambers",
        iconName: "Briefcase",
        adaptation: "Practice areas (Corporate, Litigation, IP, Labor), attorney credentials, and confidential consultation intake.",
      },
      {
        sector: "Construction & Engineering",
        iconName: "Building2",
        adaptation: "Architectural blueprints, commercial/residential project galleries, and quotation inquiry forms.",
      },
    ],
    paymentStructure: {
      advance: "50% Advance",
      milestone: "None (Streamlined 2-stage)",
      final: "50% Before Final Live Launch",
      maintenanceNote: "Optional annual corporate maintenance from NPR 3,999/- Per Year.",
      steps: [
        { percentage: "50%", stage: "Project Kickoff", note: "Upon practice credentials and partner profile collection" },
        { percentage: "50%", stage: "Live Handover", note: "After staging preview approval before pointing live domain" },
      ],
    },
    whyThisWorks:
      "High-value commercial clients in Nepal judge a firm's capability by its digital polish. This package delivers crisp typography, verified credentials, and immediate credibility that justifies high professional billing rates.",
    crossLinks: [
      {
        targetPackageId: "corporate-growth-website",
        targetPackageName: "Corporate Authority & Lead Generation Website",
        targetPrice: "39,999/-",
        interestTrigger: "Need Dynamic Case Study CMS, Quote Estimators & Corporate SEO?",
        interestBadge: "Most Popular Upgrade",
        description: "Upgrade to dynamic case study publishing, quote inquiry calculators, corporate authority local SEO, and multi-department routing.",
        keyHighlights: [
          "8–12 Dynamic Corporate Pages",
          "Case Studies, Projects & Legal Articles CMS",
          "Structured Quotation Inquiry Funnels",
          "Corporate Authority SEO Ranking in Nepal",
        ],
        ctaText: "Explore Corporate Growth (39,999/-)",
      },
      {
        targetPackageId: "corporate-custom-system",
        targetPackageName: "Enterprise Firm Portal & Client Case System",
        targetPrice: "79,999/-",
        interestTrigger: "Need Secure Client Document Portal & Project Cost Estimators?",
        interestBadge: "Enterprise Firm Portal",
        description: "For established firms needing secure client document vaults, multi-branch lead distribution, and interactive project estimators.",
        keyHighlights: [
          "Interactive Project Cost Estimator",
          "Secure Client Document Portal & Vault",
          "Multi-Department Inquiry Dashboard",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Enterprise Firm Portal (79,999/-)",
      },
    ],
  },

  {
    id: "corporate-growth-website",
    name: "Corporate Authority & Lead Generation Website",
    tier: "Flagship Corporate Tier",
    tagline: "High-credibility firm platform with dynamic case study CMS, quote calculators, and local SEO.",
    bestFor: "Established law firms, auditing & accounting firms, architectural studios, general contractors, and corporate consultancies.",
    startingPrice: "39,999/-",
    priceNumber: 39999,
    priceSubtext: "One-time investment",
    priceBadge: "Reasonable Pricing",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "4,999/- Per Year",
    isPopular: true,
    badge: "Recommended",
    typicalMarketComparison: "Competitor agency fee: NPR 70K–100K for corporate websites with case study CMS.",
    summaryHighlights: [
      "8–12 Custom-Designed Dynamic Corporate Pages",
      "Dynamic case studies, projects & legal/tax advisory articles CMS",
      "Structured practice area quote & consultation request funnels",
      "Corporate authority local SEO for competitive Kathmandu searches",
      "Direct WhatsApp & senior partner email routing",
      "Client testimonials & corporate trust badges",
      "Sub-second mobile 4G performance with SSL encryption",
      "1 Month dedicated support & technical tuning",
    ],
    deliverableCategories: [
      {
        category: "Corporate Authority & Architecture",
        badge: "Dynamic Engine",
        items: [
          {
            title: "8–12 Custom-Designed Dynamic Pages",
            desc: "Comprehensive platform including Home, About Firm, Practice Areas, Case Studies & Projects, Advisory Articles, Client Testimonials, and Consultation Booking.",
          },
          {
            title: "Dynamic Case Studies & Articles CMS",
            desc: "Self-managed admin interface for partners to publish recent legal updates, tax budget breakdowns, completed engineering projects, and firm news.",
          },
          {
            title: "Structured Service Quote & Consultation Funnel",
            desc: "Detailed questionnaire capturing project scope, budget range, and timeline to pre-qualify corporate leads before meetings.",
          },
        ],
      },
      {
        category: "Corporate SEO & Conversion",
        badge: "SEO & Authority",
        items: [
          {
            title: "Corporate Authority Local SEO Ranking",
            desc: "Optimized for high-ticket searches like 'corporate law firm Nepal', 'chartered accountant Lalitpur', and 'civil engineering consultants Kathmandu'.",
          },
          {
            title: "Verified Client Testimonials & Trust Badges",
            desc: "High-trust social proof showcasing corporate client logos, industry certifications, and verified testimonials.",
          },
          {
            title: "Instant Multi-Channel Lead Distribution",
            desc: "Consultation requests route directly to designated senior partners with complete background briefs.",
          },
        ],
      },
      {
        category: "Security & Support",
        items: [
          {
            title: "Enterprise SSL & Data Confidentiality",
            desc: "High-grade security encryption protecting confidential client inquiries.",
          },
          {
            title: "1 Month Dedicated Technical Maintenance",
            desc: "Free technical support, backups, and security monitoring included.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Law Firms & Arbitrators",
        iconName: "Briefcase",
        adaptation: "Legal commentary blog, regulatory update alerts, practice group leader cards, and consultation intake.",
      },
      {
        sector: "Architects & Civil Contractors",
        iconName: "Building2",
        adaptation: "Interactive project milestone timelines, 3D render showcases, construction material spec sheets, and tender inquiries.",
      },
    ],
    paymentStructure: {
      advance: "40% Advance Payment",
      milestone: "30% Upon Interactive Design Approval",
      final: "30% Before Live Launch",
      maintenanceNote: "Annual corporate maintenance of 4,999/- Per Year.",
      steps: [
        { percentage: "40%", stage: "Discovery & Corporate Identity Briefing", note: "Upon onboarding and practice area asset collection" },
        { percentage: "30%", stage: "Design & Case Study CMS Approval", note: "After visual design and quote funnel sign-off" },
        { percentage: "30%", stage: "Launch & Partner Handover", note: "Upon live cloud deployment and staff CMS training" },
      ],
    },
    whyThisWorks:
      "Commercial clients and institutional tenders require proof of past performance. By providing a dynamic case study CMS and specialized consultation inquiry funnels, this package turns website visitors into long-term retainer clients.",
    crossLinks: [
      {
        targetPackageId: "corporate-starter-website",
        targetPackageName: "Corporate & Firm Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Presence First?",
        interestBadge: "Budget Alternative",
        description: "Need a fast, authoritative 4–8 page brochure website with partner profiles and consultation forms at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "4–8 Mobile-Responsive Pages",
          "Practice Areas & Partner Credentials",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Corporate Starter (24,999/-)",
      },
      {
        targetPackageId: "corporate-custom-system",
        targetPackageName: "Enterprise Firm Portal & Client Case System",
        targetPrice: "79,999/-",
        interestTrigger: "Need Secure Client Document Portal & Project Cost Estimators?",
        interestBadge: "Enterprise Firm Portal",
        description: "For established firms needing secure client document vaults, multi-branch lead distribution, and interactive project estimators.",
        keyHighlights: [
          "Interactive Project Cost Estimator",
          "Secure Client Document Portal & Vault",
          "Multi-Department Inquiry Dashboard",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Enterprise Firm Portal (79,999/-)",
      },
    ],
  },

  {
    id: "corporate-custom-system",
    name: "Enterprise Firm Portal & Client Case System",
    tier: "Enterprise Corporate Portal",
    tagline: "Secure client portal for document sharing, case tracking, and multi-department quote estimation.",
    bestFor: "Large law chambers, multi-partner accounting practices, construction consortia, and engineering firms managing complex project lifecycles.",
    startingPrice: "79,999/-",
    priceNumber: 79999,
    priceSubtext: "Standard Portal (Custom ERP Systems NPR 90,000–500,000+)",
    priceBadge: "Enterprise Scope",
    timeline: "6–10 weeks for standard systems; 10–16 weeks for custom practice ERP",
    maintenance: "10–15% Annually (or custom SLA)",
    badge: "Full Corporate Engineering",
    typicalMarketComparison: "Nepali enterprise firm portals and client vaults cost NPR 160,000–350,000+; Optiverse provides modular predictability.",
    summaryHighlights: [
      "18+ Custom Pages / Full Enterprise Firm Portal",
      "Interactive Project Cost Estimator & Consultation Fee Calculator",
      "Secure Client Portal for Drawing Downloads, Contracts & Tax Audits",
      "Multi-Department / Branch Lead Distribution Dashboard",
      "Enterprise-Grade SSL Encryption & Automated Cloud Backups",
      "Staff Role-Based Access Control (Admins, Partners, Associates)",
      "Automated Invoicing & Audit Record Generators",
      "3 Months Dedicated Priority SLA Support & Staff Training",
    ],
    deliverableCategories: [
      {
        category: "Client Portal & Workflow",
        badge: "Client Vault",
        items: [
          {
            title: "Secure Client Document Sharing Portal",
            desc: "Clients log in to securely download signed contracts, architectural blueprints, audit reports, and court filings.",
          },
          {
            title: "Interactive Project Cost Estimator",
            desc: "Prospective clients input square footage, material tier, or legal scope to generate instant estimated fee quotes.",
          },
          {
            title: "Multi-Department / Branch Lead Routing",
            desc: "Inquiries are automatically categorized and assigned to litigation, tax, corporate advisory, or architectural project teams.",
          },
        ],
      },
      {
        category: "Firm Operations & Security",
        badge: "Admin Engine",
        items: [
          {
            title: "Role-Based Staff Access (RBAC)",
            desc: "Granular access levels ensuring associates only access their assigned cases while managing partners oversee all branch metrics.",
          },
          {
            title: "Automated PDF Invoice & Retainer Generation",
            desc: "Generate professional VAT-compliant PDF invoices, payment receipts, and retainer agreements.",
          },
          {
            title: "Encrypted Cloud Storage & Audit Trail",
            desc: "Enterprise data encryption with automated daily cloud backups and detailed access logs for compliance.",
          },
        ],
      },
      {
        category: "Enterprise SLA & Support",
        items: [
          {
            title: "3 Months Dedicated Priority SLA Support",
            desc: "Dedicated senior technical engineer, security patches, and staff operational training.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Construction & Engineering Consortia",
        iconName: "Building2",
        adaptation: "Subcontractor bid management, project milestone certifications, drawing revisions, and material quote tracking.",
      },
      {
        sector: "Full-Service Legal Chambers",
        iconName: "Briefcase",
        adaptation: "Client matter intake, conflict check workflows, confidential document sharing, and court appearance calendars.",
      },
    ],
    paymentStructure: {
      advance: "30% Advance Payment",
      milestone: "30% Design Approval + 30% Staging Demo",
      final: "10% Final Live Handover",
      maintenanceNote: "Enterprise support and SLA maintenance from 10–15% annually.",
      steps: [
        { percentage: "30%", stage: "Discovery & Security Architecture Blueprint", note: "Upon project kickoff and data encryption schema sign-off" },
        { percentage: "30%", stage: "Interactive UI & Client Portal Approval", note: "After visual design and client vault prototype sign-off" },
        { percentage: "30%", stage: "System Integration & Staging Demo", note: "After core portal, estimator and dashboard walkthrough" },
        { percentage: "10%", stage: "Live Cloud Handover & Staff Training", note: "Upon deployment, partner training, and final live go-live" },
      ],
    },
    whyThisWorks:
      "Established professional practices manage confidential documents and high-value client retainers. By combining an authoritative public web presence with a secure private client portal, Optiverse elevates the firm into top-tier corporate status.",
    crossLinks: [
      {
        targetPackageId: "corporate-growth-website",
        targetPackageName: "Corporate Authority & Lead Generation Website",
        targetPrice: "39,999/-",
        interestTrigger: "Prefer a Fixed-Price Turnkey Corporate Platform with Case Study CMS?",
        interestBadge: "Fixed-Price Flagship",
        description: "If you don't require custom client portal software and prefer a proven case study and quote funnel at NPR 39,999/-.",
        keyHighlights: [
          "Fixed Investment of NPR 39,999/-",
          "8–12 Dynamic Corporate Pages",
          "Case Studies & Articles CMS with Local SEO",
          "Fast 4–6 Weeks Turnaround",
        ],
        ctaText: "Explore Corporate Growth (39,999/-)",
      },
      {
        targetPackageId: "corporate-starter-website",
        targetPackageName: "Corporate & Firm Starter Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter Presence First?",
        interestBadge: "Rapid Launch",
        description: "Clean, professional 4–8 page brochure presence with partner profiles and consultation forms at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "Practice Area Cards & Partner Bios",
          "Direct Consultation Inquiry Funnel",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Corporate Starter (24,999/-)",
      },
    ],
  },

  // =========================================================================
  // 6. STARTUP OR GROWING COMPANY (Emerging Local Brands & Tech)
  // =========================================================================
  {
    id: "startup-starter-website",
    name: "Startup MVP & Fast Traction Website",
    tier: "Startup Starter",
    tagline: "High-conversion MVP launchpad designed to validate market demand and collect early leads.",
    bestFor: "Early-stage tech startups, mobile app launches, D2C local consumer brands, and bootstrap entrepreneurs.",
    startingPrice: "24,999/-",
    priceNumber: 24999,
    priceSubtext: "One-time investment",
    priceBadge: "Budget-Friendly",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "3,999/- Per Year",
    badge: "Fastest Turnaround",
    typicalMarketComparison: "Market average: NPR 40K–60K for slow agencies that take months to launch an MVP.",
    summaryHighlights: [
      "4–8 Mobile-Responsive Pages with Modern Tech UI/UX",
      "High-converting MVP product launch landing page",
      "Founder story & early investor traction metrics",
      "Early-bird waitlist & investor lead capture funnel",
      "Direct WhatsApp founder connect button",
      "100% Mobile 4G ultra-fast performance",
      "1 Month dedicated post-launch support",
    ],
    deliverableCategories: [
      {
        category: "Product Launch & Structure",
        items: [
          {
            title: "4–8 Mobile-Responsive Pages",
            desc: "Custom high-conversion layout including Home/Landing, Problem & Solution, Product Features, Traction/Roadmap, Founder Story, and Contact.",
          },
          {
            title: "High-Converting Value Proposition",
            desc: "Crisp headline hierarchy, product visual mocks, and clear value statements that explain complex tech simply.",
          },
          {
            title: "Founder Vision & Traction Metrics",
            desc: "Showcase early traction (user count, pilot partners, pre-seed backing) to build credibility with investors and early adopters.",
          },
        ],
      },
      {
        category: "Early Adopter Lead Funnel",
        badge: "Traction Engine",
        items: [
          {
            title: "Early-Access Waitlist & Beta Signup",
            desc: "Lead capture form collecting name, email, company, and feedback for upcoming product beta launches.",
          },
          {
            title: "Direct WhatsApp Founder Connect",
            desc: "Quick-chat trigger connecting prospective pilot clients and angel investors directly with the founding team.",
          },
        ],
      },
      {
        category: "Hosting & Technical Launch",
        badge: "Launch & Support",
        items: [
          {
            title: "Official Domain & Cloud CDN Deployment",
            desc: "Fast cloud setup with SSL encryption for lightning-fast loading across Nepal and international visitors.",
          },
          {
            title: "1 Professional Startup Email",
            desc: "Branded email setup (e.g. founder@yourstartup.com) for investor pitches and partnership outreach.",
          },
          {
            title: "1 Month Post-Launch Support",
            desc: "Free technical troubleshooting and minor copy tweaks included for the first 30 days.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Mobile Apps & SaaS Startups",
        iconName: "Rocket",
        adaptation: "App store download badges, UI screen walkthroughs, and beta user waitlist lead funnels.",
      },
      {
        sector: "Local D2C Consumer Brands",
        iconName: "ShoppingBag",
        adaptation: "Product story, sustainable sourcing highlights, and WhatsApp pre-order inquiries.",
      },
    ],
    paymentStructure: {
      advance: "50% Advance",
      milestone: "None (Streamlined 2-stage)",
      final: "50% Before Final Live Launch",
      maintenanceNote: "Optional annual startup maintenance from NPR 3,999/- Per Year.",
      steps: [
        { percentage: "50%", stage: "Project Kickoff", note: "Upon product brief and wireframe sign-off" },
        { percentage: "50%", stage: "Live Handover", note: "After staging preview approval before pointing live domain" },
      ],
    },
    whyThisWorks:
      "Early-stage startups need to validate market demand rapidly without burning their precious runway. This package delivers Silicon Valley-grade product presentation and waitlist lead capture in just 4 weeks.",
    crossLinks: [
      {
        targetPackageId: "startup-growth-website",
        targetPackageName: "SaaS & Product Landing Growth Website",
        targetPrice: "39,999/-",
        interestTrigger: "Need Interactive Product Tours, Video Demo Reels & Tracking Pixels?",
        interestBadge: "Most Popular Upgrade",
        description: "Upgrade to multi-page product tours, interactive demo reels, company press CMS, and analytics tracking pixels for paid ad funnels.",
        keyHighlights: [
          "8–12 Dynamic Product Pages",
          "Interactive Product Feature Breakdown & Demo Reels",
          "Tracking Pixel Setup (Meta, Google Tag Manager)",
          "Company Press & Changelog CMS",
        ],
        ctaText: "Explore Startup Growth (39,999/-)",
      },
      {
        targetPackageId: "startup-custom-system",
        targetPackageName: "Custom Cloud Web Platform & SaaS MVP",
        targetPrice: "79,999/-",
        interestTrigger: "Need Web App Frontend, API Documentation & Subscription Billing?",
        interestBadge: "Custom SaaS Platform",
        description: "For tech companies needing full interactive web application frontends, developer API portals, and subscription billing logic.",
        keyHighlights: [
          "Custom Web Application User Onboarding",
          "Developer API Documentation Portal",
          "Subscription & Deposit Billing Engine",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Custom Cloud Platform (79,999/-)",
      },
    ],
  },

  {
    id: "startup-growth-website",
    name: "SaaS & Product Landing Growth Website",
    tier: "Flagship Startup Tier",
    tagline: "Modern tech startup web engine with interactive product tours, video demos, and conversion tracking.",
    bestFor: "Funded tech startups, B2B SaaS platforms, digital marketplaces, fintech ventures, and scaling local brands.",
    startingPrice: "39,999/-",
    priceNumber: 39999,
    priceSubtext: "One-time investment",
    priceBadge: "Reasonable Pricing",
    timeline: "4–6 weeks after content and approvals",
    maintenance: "4,999/- Per Year",
    isPopular: true,
    badge: "Recommended",
    typicalMarketComparison: "Competitor agency fee: NPR 70K–110K for modern SaaS product landing platforms.",
    summaryHighlights: [
      "8–12 Custom-Designed Dynamic Product Pages",
      "Interactive product feature tour with video demo reels integration",
      "Company press, product changelog & announcements CMS",
      "Local & international organic SEO for product discovery",
      "Analytics & tracking pixel integration (Meta, Google Tag Manager, LinkedIn)",
      "Investor pitch deck gated download lead funnel",
      "Sub-second global CDN performance with SSL encryption",
      "1 Month dedicated conversion rate tuning & technical support",
    ],
    deliverableCategories: [
      {
        category: "Product Story & Architecture",
        badge: "Dynamic Engine",
        items: [
          {
            title: "8–12 Custom-Designed Dynamic Pages",
            desc: "Comprehensive product platform including Home, Product Tour, Solutions by Industry, Pricing & ROI Calculator, Changelog/Press, and Demo Request.",
          },
          {
            title: "Interactive Product Feature Breakdown",
            desc: "Tabbed UI walkthroughs, interactive feature comparison matrices, and responsive video embedding for product demo reels.",
          },
          {
            title: "Company Changelog & Announcements CMS",
            desc: "Self-managed admin CMS to post product updates, release notes, new feature announcements, and funding news.",
          },
        ],
      },
      {
        category: "Conversion & Growth Funnels",
        badge: "Growth Engine",
        items: [
          {
            title: "Analytics & Tracking Pixel Integration",
            desc: "Full integration with Google Tag Manager, Meta Pixel, and LinkedIn Insight Tag for high-ROI paid ad retargeting.",
          },
          {
            title: "Gated Investor Deck & Whitepaper Funnel",
            desc: "High-intent lead generation form requiring visitor name and work email before unlocking investor presentations or case studies.",
          },
          {
            title: "Product Keyword Local & Global SEO",
            desc: "Optimized for organic discovery across search engines in Nepal and foreign target markets.",
          },
        ],
      },
      {
        category: "Speed & Support",
        items: [
          {
            title: "Global CDN Acceleration & 4G Speed",
            desc: "Edge-cached globally for instant response times whether viewed in Kathmandu, Singapore, or the US.",
          },
          {
            title: "1 Month Dedicated Technical Tuning",
            desc: "Conversion rate optimization, heatmaps setup, and on-call operational assistance.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "B2B SaaS & Tech Startups",
        iconName: "Rocket",
        adaptation: "Interactive pricing tier toggles (Monthly/Annual), enterprise sales quote funnels, and feature matrices.",
      },
      {
        sector: "Fintech & Local Consumer Apps",
        iconName: "Sparkles",
        adaptation: "Security trust badges, merchant partner onboarding forms, and interactive savings/fee calculators.",
      },
    ],
    paymentStructure: {
      advance: "40% Advance Payment",
      milestone: "30% Upon Interactive Design Approval",
      final: "30% Before Live Launch",
      maintenanceNote: "Annual startup maintenance of 4,999/- Per Year.",
      steps: [
        { percentage: "40%", stage: "Discovery & Product Architecture Briefing", note: "Upon onboarding and feature hierarchy collection" },
        { percentage: "30%", stage: "Design & Demo Workflow Approval", note: "After visual layout and interactive prototype sign-off" },
        { percentage: "30%", stage: "Launch & Analytics Handover", note: "Upon live cloud deployment and tracking pixel setup" },
      ],
    },
    whyThisWorks:
      "Scaling tech products need to convince both end-users and investors. This package combines Silicon Valley-standard UI/UX aesthetics with rigorous analytics tracking, turning cold ad traffic into qualified enterprise leads and signups.",
    crossLinks: [
      {
        targetPackageId: "startup-starter-website",
        targetPackageName: "Startup MVP & Fast Traction Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter MVP Presence First?",
        interestBadge: "Budget Alternative",
        description: "Need a fast, high-converting 4–8 page MVP landing page with early-access waitlist at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "4–8 Mobile-Responsive Pages",
          "Early-Bird Waitlist & Investor Lead Funnel",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Startup Starter (24,999/-)",
      },
      {
        targetPackageId: "startup-custom-system",
        targetPackageName: "Custom Cloud Web Platform & SaaS MVP",
        targetPrice: "79,999/-",
        interestTrigger: "Need Web App Frontend, API Documentation & Subscription Billing?",
        interestBadge: "Enterprise SaaS",
        description: "For tech companies needing full interactive web application frontends, developer API portals, and subscription billing logic.",
        keyHighlights: [
          "Custom Web Application User Onboarding",
          "Developer API Documentation Portal",
          "Subscription & Deposit Billing Engine",
          "Custom Scope Available (NPR 90,000–500,000+)",
        ],
        ctaText: "Explore Custom Cloud Platform (79,999/-)",
      },
    ],
  },

  {
    id: "startup-custom-system",
    name: "Custom Cloud Web Platform & SaaS MVP",
    tier: "Enterprise Startup Portal",
    tagline: "Scalable web platform architecture with user trial onboarding, API portal, and subscription billing.",
    bestFor: "Tech companies building digital products, SaaS platforms, custom marketplaces, web portals, and venture-backed startups.",
    startingPrice: "79,999/-",
    priceNumber: 79999,
    priceSubtext: "Standard Platform (Custom Web App Systems NPR 90,000–500,000+)",
    priceBadge: "Enterprise Scope",
    timeline: "6–10 weeks for standard systems; 10–16 weeks for custom SaaS web app",
    maintenance: "10–15% Annually (or custom SLA)",
    badge: "Full Cloud Engineering",
    typicalMarketComparison: "Nepali custom SaaS MVP and web app engineering costs NPR 200,000–500,000+; Optiverse provides modular predictability.",
    summaryHighlights: [
      "20+ Custom Pages / Full Web Application Landing & Portal",
      "Custom Web Application Frontend with Interactive User Trial Onboarding",
      "Developer API Documentation Portal & Interactive Endpoint Guides",
      "Subscription / Deposit Billing Logic Ready for eSewa, Khalti & Stripe",
      "Centralized Product Operations Admin Dashboard with User Management",
      "Scalable Cloud Architecture with Database Optimization",
      "Automated User Verification & Email Transaction Flows",
      "3 Months Dedicated Priority SLA Support & Staff Training",
    ],
    deliverableCategories: [
      {
        category: "Cloud Platform Architecture",
        badge: "Web App Engine",
        items: [
          {
            title: "Interactive User Onboarding & Trial Funnel",
            desc: "Multi-step registration workflow with email verification, password management, and trial workspace provisioning.",
          },
          {
            title: "Developer API Documentation Portal",
            desc: "Structured API documentation hub with code snippets (cURL, Python, JS), webhook guides, and authentication parameters.",
          },
          {
            title: "Subscription & Digital Payment Gateway",
            desc: "Integrated payment processing for recurring subscriptions or one-time credit deposits supporting eSewa, Khalti, and international cards.",
          },
        ],
      },
      {
        category: "Product Management & Operations",
        badge: "Admin Engine",
        items: [
          {
            title: "Centralized Product Operations Dashboard",
            desc: "Admin control panel to monitor active users, track monthly recurring revenue (MRR), manage accounts, and view audit logs.",
          },
          {
            title: "Automated Transactional Email Triggers",
            desc: "Integration with Postmark/Resend for instant welcome emails, password resets, payment invoices, and usage alerts.",
          },
          {
            title: "Database Architecture & Optimization",
            desc: "Engineered for high concurrency with indexed SQL/NoSQL transactional schemas and cloud backups.",
          },
        ],
      },
      {
        category: "Enterprise SLA & Security",
        items: [
          {
            title: "Enterprise Cloud Security & SSL",
            desc: "Hardened API endpoints, rate limiting to prevent DDoS, and encrypted user data storage.",
          },
          {
            title: "3 Months Dedicated Priority SLA Support",
            desc: "Dedicated senior software engineer, code reviews, and infrastructure scaling assistance.",
          },
        ],
      },
    ],
    sectorAdaptations: [
      {
        sector: "Cloud SaaS Platforms",
        iconName: "Rocket",
        adaptation: "Tiered subscription pricing models, developer webhooks, user seats management, and usage-based billing.",
      },
      {
        sector: "Two-Sided Digital Marketplaces",
        iconName: "ShoppingBag",
        adaptation: "Buyer/seller verification workflows, escrow deposit handling, and rating/review algorithms.",
      },
    ],
    paymentStructure: {
      advance: "30% Advance Payment",
      milestone: "30% Design Approval + 30% Staging Demo",
      final: "10% Final Live Handover",
      maintenanceNote: "Cloud support and SLA maintenance from 10–15% annually.",
      steps: [
        { percentage: "30%", stage: "Discovery & System Architecture Blueprint", note: "Upon project kickoff and API schema sign-off" },
        { percentage: "30%", stage: "Interactive UI & User Flow Approval", note: "After visual design and user onboarding prototype sign-off" },
        { percentage: "30%", stage: "System Integration & Staging Demo", note: "After core web app, database, and payment walkthrough" },
        { percentage: "10%", stage: "Live Cloud Handover & Staff Training", note: "Upon deployment, staff training, and final live go-live" },
      ],
    },
    whyThisWorks:
      "Startups building web software cannot afford months of slow, buggy development. By providing a production-grade, modular web app foundation with built-in user onboarding, API docs, and payment gateways, Optiverse cuts time-to-market in half.",
    crossLinks: [
      {
        targetPackageId: "startup-growth-website",
        targetPackageName: "SaaS & Product Landing Growth Website",
        targetPrice: "39,999/-",
        interestTrigger: "Prefer a Fixed-Price Turnkey Product Landing Platform?",
        interestBadge: "Fixed-Price Flagship",
        description: "If you don't require full SaaS backend engineering and prefer a proven product tour and video demo website at NPR 39,999/-.",
        keyHighlights: [
          "Fixed Investment of NPR 39,999/-",
          "8–12 Dynamic Product Pages",
          "Interactive Demo Reels & Tracking Pixels",
          "Fast 4–6 Weeks Turnaround",
        ],
        ctaText: "Explore Startup Growth (39,999/-)",
      },
      {
        targetPackageId: "startup-starter-website",
        targetPackageName: "Startup MVP & Fast Traction Website",
        targetPrice: "24,999/-",
        interestTrigger: "Looking for an Affordable Starter MVP Presence First?",
        interestBadge: "Rapid Launch",
        description: "Clean, professional 4–8 page brochure presence with waitlist lead capture at NPR 24,999/-.",
        keyHighlights: [
          "Fixed NPR 24,999/- One-Time Investment",
          "MVP Landing & Early-Access Waitlist",
          "Direct WhatsApp Founder Connect",
          "Low Annual Upkeep (3,999/- Per Year)",
        ],
        ctaText: "Explore Startup Starter (24,999/-)",
      },
    ],
  },
];
