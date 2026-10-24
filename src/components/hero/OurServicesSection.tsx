import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Share2,
  Video,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

type Highlight = {
  title: string;
  text: string;
};

type ServiceItem = {
  title: string;
  shortTitle?: string;
  image: string;
  description: string;
  highlights: Highlight[];
};

type ServiceCategory = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    id: "web",
    label: "Web Development",
    icon: Globe,
    items: [
      {
        title: "Custom Website Development",
        shortTitle: "Custom Website",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=90",
        description:
          "A custom website is one of the most powerful investments your business can make in the digital era. Unlike generic templates that force your brand into a pre-made mold, a fully custom-built website is an original digital asset engineered from the ground up to reflect your unique identity, communicate your value proposition with absolute clarity, and guide visitors naturally toward conversion. Our process begins with a deep discovery phase â€” we study your industry, analyse competitors, understand your target audience, and align every design decision with your specific business objectives. Our senior developers then architect a robust, maintainable codebase using modern frameworks, ensuring your website is visually outstanding today and scalable for years to come.",
        highlights: [
          {
            title: "Bespoke UI/UX Design",
            text: "Every element uniquely designed for your brand â€” custom layouts, animations, and visual identity that stands out and communicates trust instantly.",
          },
          {
            title: "Scalable Architecture",
            text: "Battle-tested modern frameworks with clean, maintainable code â€” easily scalable as your business grows with zero technical debt.",
          },
          {
            title: "Enterprise-Grade Security",
            text: "SSL encryption, firewall protection, regular security audits, and GDPR-compliant architecture protecting your data and users.",
          },
        ],
      },
      {
        title: "Educational / Consultancy Website",
        shortTitle: "Educational Website",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=90",
        description:
          "The education and consultancy sector has undergone a radical digital transformation. Prospective students and clients now make critical decisions based almost entirely on your online presence â€” an outdated or confusing website actively damages your credibility and trust. We specialise in building sophisticated, conversion-optimised websites for educational institutions, coaching centres, universities, and professional consultancies. Our platforms feature intelligent course catalog systems with dynamic filtering, seamless inquiry and application forms, integrated student portals, automated admission workflows, faculty profile pages, testimonial showcases, and rich CMS tools that empower non-technical staff to manage all content without writing a single line of code.",
        highlights: [
          {
            title: "Dynamic Course Catalog",
            text: "Comprehensive listing with advanced filtering by subject, duration, fee, and format â€” making it effortless for prospects to find their perfect program.",
          },
          {
            title: "Smart Admission System",
            text: "Multi-step forms that capture lead info, integrate with your CRM, send automated confirmation emails, and streamline your entire admissions workflow.",
          },
          {
            title: "Student & Client Portals",
            text: "Secure portals where students or clients can access materials, track progress, download certificates, and communicate with your team.",
          },
        ],
      },
      {
        title: "Booking & Appointment System",
        shortTitle: "Booking System",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
        description:
          "In today's fast-paced world, customers expect to book appointments instantly â€” at any time, from any device, without ever picking up a phone. A powerful online booking system is a fundamental necessity for any service-based business that wants to reduce administrative overhead and deliver the seamless experience modern customers demand. We build sophisticated booking and appointment platforms featuring real-time availability calendars, automated email and SMS confirmations and reminders, secure integrated payment processing, multi-staff scheduling capabilities, client management dashboards with full appointment history, and comprehensive analytics revealing your busiest periods and most popular services.",
        highlights: [
          {
            title: "Real-Time Calendar Sync",
            text: "Live availability management across all staff and locations, synced to Google Calendar and Outlook â€” zero double-bookings guaranteed.",
          },
          {
            title: "Automated Reminders",
            text: "Intelligent email and SMS sequences sent automatically before appointments, reducing no-show rates by up to 70%.",
          },
          {
            title: "Integrated Payments",
            text: "Secure online payment gateway supporting deposits, full prepayments, and refund management â€” PCI-compliant and built into your booking flow.",
          },
        ],
      },
      {
        title: "E-Commerce Website",
        shortTitle: "E-Commerce Website",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
        description:
          "E-commerce has become the primary driver of revenue growth for millions of businesses worldwide. Building a successful online store requires far more than listing products on a webpage â€” it demands a meticulously engineered platform combining a compelling visual storefront, intuitive shopping experience, robust inventory management, secure payment processing, and intelligent marketing capabilities. We build powerful, enterprise-grade e-commerce platforms tailored precisely to your needs. Whether you're launching a new brand, scaling an existing retail operation, or building a complex multi-vendor marketplace, our team delivers an online store that consistently outperforms in sales conversions, average order value, and customer retention metrics.",
        highlights: [
          {
            title: "Advanced Product Management",
            text: "Unlimited products with variants, bulk inventory management, automated low-stock alerts, and powerful category and filter systems.",
          },
          {
            title: "Secure Multi-Gateway Checkout",
            text: "PCI-DSS compliant checkout supporting credit/debit cards, digital wallets, bank transfer, and buy-now-pay-later with one-click repeat purchase.",
          },
          {
            title: "Analytics & Marketing Tools",
            text: "Abandoned cart recovery, upselling modules, discount engine, loyalty programs, and deep sales analytics to maximise revenue at every touchpoint.",
          },
        ],
      },
      {
        title: "Health Care Website",
        shortTitle: "Health Care Website",
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=900&q=80",
        description:
          "Healthcare is one of the most trust-dependent industries in the world â€” and patients begin their healthcare journey with an online search. The quality of your digital presence directly influences their choice of provider. A professional healthcare website does far more than list services; it establishes credibility, communicates commitment to patient care, and serves as a critical bridge between your medical expertise and the patients who need it most. Our healthcare websites feature doctor profiles with detailed specialisations, intuitive appointment booking integrated with clinical scheduling software, patient information portals, emergency contact information, telehealth integration, and multilingual support for diverse patient populations.",
        highlights: [
          {
            title: "Doctor & Staff Profiles",
            text: "Comprehensive profiles with qualifications, specialisations, patient reviews, and personalised booking â€” building patient confidence from the first click.",
          },
          {
            title: "Emergency & Contact Features",
            text: "Prominent emergency hotlines, live chat integration, multi-department routing, and WhatsApp booking â€” patients can always reach you.",
          },
          {
            title: "Privacy-First Architecture",
            text: "HIPAA-conscious design with encrypted patient data handling, secure form submissions, and strict access controls protecting your practice.",
          },
        ],
      },
      {
        title: "News Portal & Business Website",
        shortTitle: "News Portal",
        image: "/images/news-portal-website.jpg",
        description:
          "The ability to publish and distribute content quickly is a critical competitive advantage for media companies, news agencies, and corporate entities. A news portal is not merely a digital brochure â€” it is a living content platform capable of handling breaking news, high traffic surges, diverse multimedia content, complex categorisation, and multiple editorial workflows simultaneously. Our high-performance news portals are architectured on robust CMS foundations that empower editorial teams to publish and manage thousands of articles, videos, galleries, and infographics with ease â€” while ensuring the site remains blazingly fast and perfectly available even during major traffic spikes.",
        highlights: [
          {
            title: "Powerful CMS & Editorial Tools",
            text: "Role-based workflows supporting writers, editors, and administrators â€” with drag-and-drop builders, multimedia management, and scheduled publishing.",
          },
          {
            title: "High-Traffic Performance",
            text: "CDN integration, advanced caching, lazy loading, and server-side optimisation ensuring your site loads instantly for thousands of concurrent visitors.",
          },
          {
            title: "News SEO & Discovery",
            text: "Structured data markup, Google News sitemap, AMP support, and advanced SEO configuration to maximise visibility in Google Search and News.",
          },
        ],
      },
      {
        title: "Responsive Web Development",
        shortTitle: "Responsive Design",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
        description:
          "With mobile devices now accounting for over 60% of all global web traffic, building a website that delivers a flawless experience across every screen size is an absolute commercial necessity. A website that performs poorly on mobile destroys your search engine rankings, decimates conversion rates, and sends hard-earned visitors directly to your competitors. Our responsive web development service ensures every website we build is engineered from the very first line of code with a mobile-first philosophy â€” designing and optimising for the smallest screens first, then progressively enhancing the experience for larger displays, resulting in websites that feel perfectly native on every device.",
        highlights: [
          {
            title: "Mobile-First Engineering",
            text: "Designed and coded mobile-first â€” ensuring perfect touch interactions, optimised tap targets, and seamless navigation on every smartphone.",
          },
          {
            title: "Cross-Device Testing",
            text: "Rigorous testing across 50+ device and browser combinations â€” pixel-perfect consistency for every visitor on Chrome, Safari, Firefox, and Edge.",
          },
          {
            title: "Performance Under Any Condition",
            text: "Adaptive image serving, progressive loading, and network-aware optimisation ensuring your site remains fast even on slow mobile connections.",
          },
        ],
      },
      {
        title: "SEO & Speed Optimization",
        shortTitle: "SEO & Speed",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=80",
        description:
          "Your website's visibility on search engines and its loading speed are two of the most critical factors determining whether your online presence generates business or simply consumes hosting fees. Research consistently shows that 75% of users never scroll past the first page of Google results, and a mere one-second delay in page load time can reduce conversions by up to 20%. Investing in professional SEO and performance optimisation is one of the highest-return investments your business can make. Our comprehensive programme combines on-page SEO expertise, technical SEO auditing, Core Web Vitals optimisation, strategic keyword research, authority link-building, and performance engineering to transform your website into a consistent, compounding lead-generation machine.",
        highlights: [
          {
            title: "First-Page Google Rankings",
            text: "Comprehensive on-page optimisation, technical SEO fixes, schema markup, and content planning to achieve and maintain first-page rankings for your target keywords.",
          },
          {
            title: "Core Web Vitals Mastery",
            text: "Expert optimisation of LCP, FID, and CLS â€” achieving Google's green scores that directly boost search rankings and user satisfaction metrics.",
          },
          {
            title: "Sustained Organic Growth",
            text: "Long-term SEO strategies including content clusters, internal linking architecture, and authority backlink acquisition that compound in value month after month.",
          },
        ],
      },
    ],
  },
  {
    id: "social",
    label: "Social Media",
    icon: Share2,
    items: [
      {
        title: "Social Media Management",
        shortTitle: "Social Media Mgmt",
        image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=80",
        description:
          "Comprehensive social media management is the backbone of a thriving digital brand. In today's hyper-competitive online landscape, inconsistent posting or neglected community interactions can rapidly erode the trust and loyalty you have worked hard to build. Our Social Media Management service delivers a fully managed, end-to-end solution handling every aspect of your social presence across Facebook, Instagram, LinkedIn, Twitter/X, TikTok, and YouTube. Our dedicated social media managers act as an extension of your marketing team â€” developing content calendars, crafting compelling copy, designing eye-catching visuals, monitoring brand mentions, responding to your community, and analysing performance metrics so your brand remains impossible to ignore.",
        highlights: [
          {
            title: "Strategic Content Calendar",
            text: "Meticulously planned 30-day content calendars aligned with your objectives, seasonal opportunities, and campaigns for maximum daily engagement.",
          },
          {
            title: "Real-Time Engagement",
            text: "Dedicated managers responding to every comment, DM, mention, and review within hours â€” building authentic relationships and humanising your brand.",
          },
          {
            title: "Performance Optimisation",
            text: "Continuous A/B testing of content formats, posting times, and hashtag strategies to systematically improve reach and follower growth month-over-month.",
          },
        ],
      },
      {
        title: "Brand Strategy Development",
        shortTitle: "Brand Strategy",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80",
        description:
          "Brand strategy is the invisible architecture that gives your business its voice, personality, and power to connect with people on an emotional level. Without a clear, cohesive brand strategy, even the most talented marketing efforts will lack the resonance needed to cut through an increasingly crowded marketplace. Our Brand Strategy Development service is a comprehensive, research-driven process that takes you from brand confusion to brand clarity â€” defining every essential element of who you are, what you stand for, who you serve, and why customers should choose you. We conduct workshops, competitive landscape analysis, audience persona research, and positioning exercises to develop a complete, actionable brand system.",
        highlights: [
          {
            title: "Brand Positioning",
            text: "Rigorous competitive analysis and strategic positioning identifying your unique market space and articulating a compelling reason-to-choose-you.",
          },
          {
            title: "Visual Identity System",
            text: "Complete brand identity system covering logo, colour palette with psychological rationale, typography system, and comprehensive brand guidelines.",
          },
          {
            title: "Brand Playbook & Training",
            text: "Detailed brand playbook with team training ensuring every member communicates your brand with consistency and conviction.",
          },
        ],
      },
      {
        title: "Content Calendar Planning",
        shortTitle: "Content Calendar",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&q=80",
        description:
          "Behind every social media account that consistently captivates its audience lies one fundamental tool â€” a strategic, well-researched, and meticulously planned content calendar. Without it, social media management becomes reactive, inconsistent, and strategically incoherent. Our Content Calendar Planning service transforms your social media from ad-hoc broadcasting into a precision content marketing machine. We begin with a deep strategic brief â€” understanding your business goals, audience personas, key messages, seasonal opportunities, competitor content analysis, and platform-specific best practices â€” then construct a comprehensive monthly or quarterly calendar mapping every post, story, reel, and campaign across all social channels.",
        highlights: [
          {
            title: "Multi-Format Content Mix",
            text: "Strategic balance of educational posts, promotional content, behind-the-scenes stories, user-generated content, and thought leadership for diverse engagement.",
          },
          {
            title: "Algorithm-Optimised Timing",
            text: "Platform-specific scheduling based on deep audience analytics â€” posting at the precise times when your audience is most active and likely to engage.",
          },
          {
            title: "Approval & Review Workflow",
            text: "Structured content review and approval process ensuring every piece is signed off before publication â€” maintaining quality control at scale.",
          },
        ],
      },
      {
        title: "Community Management",
        shortTitle: "Community Mgmt",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
        description:
          "A thriving online community is one of the most valuable and defensible assets a brand can build in the digital age â€” yet also one of the most demanding to cultivate and sustain. True community management goes far beyond responding to comments; it requires a genuine commitment to building authentic human connections at scale and fostering a culture of belonging around your brand. Our dedicated brand-trained professionals proactively engage with your audience, respond to every interaction with brand-consistent voice and genuine care, monitor your brand across all platforms in real-time, professionally handle negative feedback with empathy, and run community-building initiatives that transform followers into passionate brand champions.",
        highlights: [
          {
            title: "Authentic Relationship Building",
            text: "Community managers who genuinely invest in your audience â€” creating real conversations and fostering belonging that turns followers into advocates.",
          },
          {
            title: "Brand Reputation Protection",
            text: "Real-time monitoring across all platforms â€” professionally handling negative feedback and defusing potential crises before they escalate.",
          },
          {
            title: "Loyalty & Advocacy Programs",
            text: "Community engagement initiatives, UGC campaigns, and ambassador programs designed to recognise and reward your most engaged followers.",
          },
        ],
      },
      {
        title: "Social Media Audit & Analysis",
        shortTitle: "Social Media Audit",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
        description:
          "You cannot optimise what you cannot measure â€” and you cannot measure what you do not understand. A comprehensive Social Media Audit is the essential first step for any business serious about improving performance, because it replaces guesswork with evidence and confusion with clarity. Our audit delivers a forensically detailed examination of your entire social media presence â€” evaluating every dimension to identify exactly what is working, what is failing, and where the greatest opportunities lie. We analyse all major platforms â€” content quality, posting frequency, engagement benchmarks, competitor performance, hashtag effectiveness, advertising historical performance, and brand sentiment â€” producing a comprehensive, prioritised action plan.",
        highlights: [
          {
            title: "360 Performance Analysis",
            text: "Forensic examination of every content format, posting pattern, and platform metric â€” identifying precisely which activities drive value and which consume budget.",
          },
          {
            title: "Competitor Benchmarking",
            text: "Detailed competitive intelligence comparing your performance against top 5 competitors â€” revealing actionable gaps and opportunities.",
          },
          {
            title: "Prioritised Action Roadmap",
            text: "Clear, actionable recommendations ranked by impact and effort â€” giving you a practical 90-day improvement roadmap to elevate social performance.",
          },
        ],
      },
      {
        title: "Influencer Collaborations",
        shortTitle: "Influencer Collabs",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
        description:
          "Influencer marketing has evolved from a trendy experiment into one of the most powerful and ROI-efficient channels available to modern brands. Consumers today are increasingly sceptical of traditional advertising, but they trust the authentic recommendations of creators they follow and admire. A well-executed influencer collaboration transfers the creator's credibility directly to your products â€” creating a powerful social proof mechanism that drives dramatic spikes in brand awareness, engagement, and sales. Our service manages the entire process from creator discovery and vetting through to contract negotiation, campaign briefing, content approval, performance tracking, and post-campaign analysis.",
        highlights: [
          {
            title: "Precision Creator Matching",
            text: "AI-assisted and human-curated influencer identification based on audience demographics, engagement authenticity, and brand alignment.",
          },
          {
            title: "End-to-End Campaign Mgmt",
            text: "Complete coordination including contract negotiation, creative briefing, content review, posting schedule management, and compliance monitoring.",
          },
          {
            title: "ROI Measurement",
            text: "Comprehensive tracking using discount codes, UTM parameters, and platform analytics â€” providing clear ROI calculation for every collaboration.",
          },
        ],
      },
    ],
  },
  {
    id: "video",
    label: "Video Production",
    icon: Video,
    items: [
      {
        title: "Video Production & Reels Creation",
        shortTitle: "Video & Reels",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80",
        description:
          "Video is the dominant content format of our time â€” accounting for over 82% of all internet traffic and generating 1200% more shares than text and image content combined. For businesses seeking to capture attention, build brand awareness, and convert audiences into customers, video is the single most powerful content investment available. Our Video Production and Reels Creation service delivers full-spectrum, cinematic-quality video content tailored precisely to your brand and goals. From the initial creative concept and scriptwriting all the way through to professional filming, expert editing, sound design, colour grading, motion graphics, and final delivery across all required formats and platforms â€” every frame handled with obsessive attention to detail.",
        highlights: [
          {
            title: "4K Cinematic Production",
            text: "Professional filming with cinema cameras, stabilised gimbal movement, expert lighting, and external audio recording delivering broadcast-quality visual content.",
          },
          {
            title: "Expert Post-Production",
            text: "Advanced colour grading, dynamic editing, professional sound design with licensed music, animated lower thirds, and polished graphic treatments.",
          },
          {
            title: "Platform-Native Reels",
            text: "Short-form content engineered for Instagram, TikTok, and YouTube Shorts â€” hook-led structure, trending audio selection, and subtitle overlays for maximum reach.",
          },
        ],
      },
      {
        title: "Professional Video Editing",
        shortTitle: "Video Editing",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=900&q=90",
        description:
          "Great video editing is the invisible art that separates amateur content from professional, memorable storytelling. Without expert editing â€” compelling narrative structure, precise timing, professional colour grading, crisp audio mixing, and polished graphic treatments â€” even the most valuable footage will fail to engage viewers or communicate your message. Our Professional Video Editing service transforms your raw footage into polished, high-impact video assets that capture attention, hold viewers to the final frame, and deliver your message with clarity and emotion. Our senior editors bring years of experience across corporate video, social content, documentary, commercial advertising, and event filming.",
        highlights: [
          {
            title: "Cinematic Color Grading",
            text: "Professional DaVinci Resolve colour grading establishing a consistent, cinematic look â€” correcting exposure while creating a distinctive signature visual style.",
          },
          {
            title: "Immersive Sound Design",
            text: "Professional audio mixing, noise reduction, dialogue enhancement, licensed music synchronisation, and sound effects for an emotionally engaging experience.",
          },
          {
            title: "Fast Turnaround",
            text: "Streamlined editing workflows ensuring fast delivery â€” typically 3-5 business days for standard edits â€” without sacrificing quality your brand deserves.",
          },
        ],
      },
      {
        title: "Motion Graphics & Animations",
        shortTitle: "Motion Graphics",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80",
        description:
          "In a world saturated with static imagery and talking-head videos, motion graphics and animations represent one of the most powerful tools for capturing attention, simplifying complex ideas, and creating brand experiences that are genuinely unforgettable. From a mesmerising animated logo reveal that instantly communicates premium brand quality, to a sophisticated infographic animation transforming dense data into an engaging visual story, to a complete brand motion identity system â€” motion graphics are the secret weapon of the world's most impactful brands. Our team combines artistic creativity with technical mastery in Adobe After Effects, Cinema 4D, and Lottie.",
        highlights: [
          {
            title: "Brand Motion Identity",
            text: "Comprehensive motion system â€” animated logo intros, lower third templates, title cards, and transition graphics creating a cohesive premium visual language.",
          },
          {
            title: "2D & 3D Animation",
            text: "From 2D character animations and infographic motion graphics to photorealistic 3D product visualisations â€” we animate ideas that cannot be captured with a camera.",
          },
          {
            title: "Explainer & Training Videos",
            text: "Animated explainer videos simplifying complex products into clear, engaging visual stories â€” perfect for landing pages, sales pitches, and onboarding.",
          },
        ],
      },
      {
        title: "Video Marketing Strategy",
        shortTitle: "Video Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
        description:
          "Creating outstanding video content is only half the battle â€” without a sophisticated, data-driven video marketing strategy to distribute and optimise that content, even the most brilliantly produced videos will fail to reach their intended audience or achieve their commercial objectives. Video marketing strategy aligns creative decisions with business goals, platform algorithms, audience behaviour, and performance data â€” ensuring every video your brand produces works as hard as possible to maximise reach, engagement, lead generation, and revenue. Our service provides a comprehensive, evidence-based roadmap for building a dominant video presence across YouTube, Instagram, TikTok, LinkedIn, Facebook, and your own website.",
        highlights: [
          {
            title: "YouTube Channel Growth",
            text: "Complete YouTube SEO â€” keyword research, title optimisation, custom thumbnails, and subscriber growth strategies to build an owned audience.",
          },
          {
            title: "Paid Video Advertising",
            text: "High-ROI video ad campaigns across YouTube, Instagram, Facebook, and TikTok â€” crafted for specific funnel stages from awareness to conversion.",
          },
          {
            title: "Video SEO & Analytics",
            text: "Comprehensive video SEO and performance tracking â€” analysing watch time, retention, CTR, and conversion attribution to continuously refine your strategy.",
          },
        ],
      },
      {
        title: "Corporate Video Production",
        shortTitle: "Corporate Video",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
        description:
          "Corporate video is the most powerful tool for shaping how the world perceives your organisation â€” communicating your vision, demonstrating expertise, showcasing your culture, and building the trust and credibility that drives business relationships and talent acquisition. In a business environment where first impressions are increasingly formed digitally before any human contact occurs, a library of professional corporate videos is no longer a luxury; it is an essential business asset that works tirelessly to represent your organisation at the highest possible level. Our Corporate Video Production delivers the full spectrum â€” company profile films, executive interviews, product launch videos, employee testimonials, and investor presentations.",
        highlights: [
          {
            title: "Company Profile Films",
            text: "Cinematic flagship brand films authentically capturing your organisation's purpose, culture, capabilities, and vision â€” compelling stakeholders, clients, and talent.",
          },
          {
            title: "Executive Thought Leadership",
            text: "Professionally produced interview series and keynotes positioning your leadership team as credible, authoritative industry voices.",
          },
          {
            title: "Investor & Stakeholder Videos",
            text: "Polished investor presentation videos presenting your growth strategy and market opportunity with confidence and professionalism.",
          },
        ],
      },
      {
        title: "Product Demo Videos",
        shortTitle: "Product Demo",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
        description:
          "A product demonstration video is quite possibly the single highest-converting piece of marketing content your business can produce. Research consistently shows that customers are 85% more likely to purchase after watching a demonstration video â€” because seeing a product in action removes the uncertainty and risk that typically inhibit purchase decisions. An exceptional product demo does not just show your product; it tells a compelling story beginning with your customer's pain point, illustrates how your product provides the perfect solution, demonstrates key features in action, and concludes with a clear and compelling call to action. We create high-converting demonstrations for physical products, software, SaaS platforms, and mobile apps.",
        highlights: [
          {
            title: "Feature Showcase & Storytelling",
            text: "Strategically structured demonstrations leading with the customer's problem before revealing your product as the solution â€” building desire through benefit-led presentation.",
          },
          {
            title: "Screen Recording & UI Walkthroughs",
            text: "Crystal-clear software and app demonstrations with professional screen recording, cursor highlighting, zoom animations, and step-by-step UI walkthroughs.",
          },
          {
            title: "Sales & Landing Page Integration",
            text: "Demo videos optimised for product landing pages, e-commerce listings, and sales decks â€” where video presence alone can increase conversions by up to 80%.",
          },
        ],
      },
      {
        title: "AI Video Content & Creation",
        shortTitle: "AI Video Creation",
        image: "/images/ai-video-creation.jpg",
        description:
          "Harness the power of cutting-edge artificial intelligence to create captivating, high-impact video content at unprecedented speed and scale. Generative AI is transforming modern video production â€” enabling hyper-realistic digital avatars, synthetic voiceovers, automated video workflows, script-to-video generation, and personalised marketing videos that captivate audiences while slashing production cycles and costs. We combine state-of-the-art AI video synthesis models with human creative direction, professional motion design, and meticulous post-processing to deliver broadcast-quality visual assets that drive engagement, lead conversions, and brand innovation.",
        highlights: [
          {
            title: "AI Avatars & Synthetic Presenters",
            text: "Lifelike multilingual digital presenters and custom corporate avatars delivering polished product explainers, training series, and personalized outreach videos without camera crews.",
          },
          {
            title: "Prompt-to-Video & Generative B-Roll",
            text: "Cutting-edge text-to-video diffusion models creating cinematic concept scenes, stylized b-roll, and imaginative visual effects that would otherwise require costly physical production.",
          },
          {
            title: "Scalable Content Repurposing",
            text: "Automated AI clipping, smart reframing, intelligent captions, and multi-platform versioning turning long-form footage into dozens of high-performing short reels and viral clips in minutes.",
          },
        ],
      },
    ],
  },
  {
    id: "mkt",
    label: "Digital Marketing",
    icon: TrendingUp,
    items: [
      {
        title: "Page Setup and Handling",
        shortTitle: "Page Setup",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=80",
        description:
          "Your social media pages and business profiles are often the very first point of contact between potential customers and your brand â€” and first impressions are formed in milliseconds. An incomplete, unprofessional, or poorly optimised business page does not just fail to attract new customers; it actively repels them, signalling a lack of professionalism that immediately undermines trust. Our Page Setup and Handling service ensures every business page across Facebook, Instagram, LinkedIn, Google Business Profile, YouTube, and TikTok is impeccably set up, comprehensively optimised, and consistently maintained to project maximum professionalism and credibility.",
        highlights: [
          {
            title: "Complete Platform Optimisation",
            text: "Platform-specific profile optimisation for every social channel â€” keyword-rich bios, strategic link placement, call-to-action buttons, and highlight covers.",
          },
          {
            title: "Business Verification Support",
            text: "Expert guidance and hands-on assistance with verification applications across Facebook, Instagram, Google Business, and LinkedIn.",
          },
          {
            title: "Ongoing Profile Management",
            text: "Regular profile audits ensuring your business information, service listings, contact details, and visual elements remain accurate and optimised.",
          },
        ],
      },
      {
        title: "Advertisement & Meta Ads Campaign",
        shortTitle: "Meta Ads",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
        description:
          "Paid advertising on Meta's platforms â€” Facebook and Instagram â€” represents one of the most powerful and cost-efficient customer acquisition channels available to businesses of any size. With a combined user base of over 4 billion monthly active users and sophisticated targeting capabilities, Meta advertising â€” when managed expertly â€” can transform your customer acquisition economics and drive predictable, scalable revenue growth. Our Advertisement and Meta Ads Campaign management is led by certified Meta advertising specialists with hundreds of successful campaign launches across diverse industries. We manage the complete advertising lifecycle â€” from audience research through to creative production, campaign buildout, pixel tracking, A/B testing, continuous optimisation, and detailed performance reporting.",
        highlights: [
          {
            title: "Laser-Precise Targeting",
            text: "Multi-layered audience strategy combining interest targeting, behavioural signals, custom audiences, lookalike audiences, and retargeting funnels.",
          },
          {
            title: "High-Converting Ad Creative",
            text: "Professionally designed static images, carousel ads, video ads, and story ads with conversion-optimised copy and compelling calls-to-action.",
          },
          {
            title: "ROAS Maximisation",
            text: "Continuous optimisation including bid strategy management, audience refinement, creative fatigue monitoring, and budget reallocation to top performers.",
          },
        ],
      },
      {
        title: "Custom and Creative Graphics",
        shortTitle: "Creative Graphics",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
        description:
          "In the visual economy of social media and digital advertising, the quality and distinctiveness of your graphic content directly reflects your brand's professionalism and value. Audiences scroll through hundreds of images every day â€” and only the most visually arresting, brand-consistent, and strategically designed graphics have the power to stop that scroll and communicate your message instantly. Our Custom and Creative Graphics service provides a comprehensive, on-demand graphic design solution tailored to the demands of social media marketing, digital advertising, and brand communication. Our brand designers create social media post graphics, animated GIFs, Instagram Story designs, advertising creatives, promotional banners, product showcase graphics, and infographics.",
        highlights: [
          {
            title: "Brand-Consistent Visuals",
            text: "Every graphic designed within your brand guidelines â€” consistent colour palette, typography, and visual language creating instant brand recognition everywhere.",
          },
          {
            title: "Rapid Creative Production",
            text: "High-volume graphic production with fast turnaround â€” typically same-day to 24-hour delivery for standard social graphics keeping your content calendar full.",
          },
          {
            title: "Conversion-Optimised Creatives",
            text: "Ad graphics engineered with conversion psychology â€” strategic visual hierarchy, colour contrast, and urgency triggers to maximise click-through rates.",
          },
        ],
      },
      {
        title: "Content Writing and Scheduling",
        shortTitle: "Content Writing",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80",
        description:
          "Words are the foundation of all digital communication â€” and the quality, strategic alignment, and consistency of the written content your brand produces determines how your audience perceives you, trusts you, and ultimately chooses to do business with you. Professional content writing is not simply about producing grammatically correct text; it is the sophisticated craft of understanding your audience's specific needs, desires, and pain points, then communicating your brand's message in a way that resonates authentically, demonstrates genuine expertise, builds trust progressively, and motivates specific actions. Our service provides a complete, professionally managed content production and publishing solution.",
        highlights: [
          {
            title: "Platform-Native Copywriting",
            text: "Expertly crafted captions and calls-to-action written specifically for each platform â€” from punchy Instagram captions to professional LinkedIn articles.",
          },
          {
            title: "Automated Scheduling",
            text: "Professional scheduling using advanced platforms â€” publishing at algorithm-optimised times ensuring maximum organic reach without manual daily effort.",
          },
          {
            title: "SEO-Optimised Content",
            text: "Research-driven blog articles and website copy strategically optimised with target keywords â€” driving organic search traffic that converts to leads.",
          },
        ],
      },
      {
        title: "Engaging Content Creation",
        shortTitle: "Engaging Content",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80",
        description:
          "In the attention economy, engagement is the currency that determines whether your content achieves its business objectives or disappears into the infinite scroll. Creating genuinely engaging content â€” content that sparks conversations, provokes shares, saves, and comments, builds emotional connections, and creates memorable brand experiences â€” requires a rare combination of creative intelligence, deep audience understanding, cultural awareness, and strategic commercial thinking. Our Engaging Content Creation service is built around creative specialists who live and breathe digital culture â€” tracking emerging trends, understanding platform algorithm changes in real-time, and channelling this intelligence into irresistibly shareable content.",
        highlights: [
          {
            title: "Trend-Driven Viral Content",
            text: "Real-time trend monitoring and rapid creative response â€” leveraging emerging audio trends, meme formats, and cultural moments for maximum organic discovery.",
          },
          {
            title: "Interactive Community Content",
            text: "Polls, quizzes, challenges, giveaways, and collaborative content maximising comments, shares, and saves â€” the engagement signals driving distribution.",
          },
          {
            title: "Emotional Storytelling",
            text: "Long-form narrative content building deep emotional connections â€” customer success stories, behind-the-scenes documentaries, and founder journey content.",
          },
        ],
      },
      {
        title: "Social Media Strategy & Planning",
        shortTitle: "Strategy & Planning",
        image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=900&q=80",
        description:
          "Strategy is the difference between social media that costs your business money and social media that makes your business money. Without a clear, commercially grounded social media strategy, even the most creative and consistent content efforts will fail to translate into meaningful business outcomes â€” because activity without strategic direction is simply noise. Our Social Media Strategy and Planning service provides the intelligence, clarity, and actionable roadmap needed to transform your social media channels from cost centres into powerful, scalable revenue drivers. Our strategic process begins with audience persona development, platform-specific competitive analysis, brand positioning review, historical performance audit, and business goal alignment workshops.",
        highlights: [
          {
            title: "Full-Funnel Channel Strategy",
            text: "Comprehensive platform strategy covering the entire customer journey â€” from top-of-funnel awareness through to bottom-funnel conversion and post-purchase advocacy.",
          },
          {
            title: "Quarterly Planning & Roadmapping",
            text: "Detailed quarterly content and campaign planning with monthly themes, seasonal opportunities, and weekly priorities â€” providing total clarity and direction.",
          },
          {
            title: "KPI Framework & Reporting",
            text: "Clearly defined, commercially meaningful KPIs aligned with your business goals â€” with comprehensive monthly dashboards translating metrics into business impact.",
          },
        ],
      },
      {
        title: "Social Media Management",
        shortTitle: "Social Media Mgmt",
        image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=80",
        description:
          "Comprehensive social media management is the engine that powers a thriving digital brand presence. In today's hyper-competitive landscape, inconsistent posting or neglected community interactions can rapidly erode the trust and loyalty you have worked hard to build. Our Social Media Management service delivers a fully managed, end-to-end solution handling every aspect of your social presence across Facebook, Instagram, LinkedIn, TikTok, and YouTube. Our dedicated social media managers act as a true extension of your marketing team â€” crafting compelling content, designing eye-catching visuals, scheduling with precision, monitoring brand mentions, responding to your community, and delivering in-depth performance analytics that fuel continuous growth and measurable ROI.",
        highlights: [
          {
            title: "Strategic Content Calendar",
            text: "Meticulously planned 30-day content calendars aligned with your business objectives, seasonal campaigns, and platform best practices for maximum daily engagement.",
          },
          {
            title: "Real-Time Community Engagement",
            text: "Dedicated managers responding to every comment, DM, mention, and review â€” building authentic relationships and humanising your brand across all channels.",
          },
          {
            title: "Data-Driven Growth Optimisation",
            text: "Continuous A/B testing of content formats, posting times, and hashtag strategies to systematically improve organic reach and follower growth month-over-month.",
          },
        ],
      },
    ],
  },
];

export default function OurServicesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState("web");
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const activeCategory = useMemo(
    () => services.find((service) => service.id === activeCategoryId) ?? services[0],
    [activeCategoryId]
  );

  const activeItem = activeCategory.items[activeItemIndex] ?? activeCategory.items[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setActiveItemIndex(0);
  };

  return (
    <section id="services" aria-label="Web Development, SEO, Digital Marketing & Video Production Services in Nepal" className="relative overflow-hidden bg-[#080c14] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(6,182,212,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-cyan-100 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl">
            Our Services
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            We offer comprehensive digital solutions to help your business thrive â€” from stunning websites to powerful marketing strategies.
          </p>
        </div>

        {/* Semantic Crawler & Full Catalog SEO Layer for All 28 Services */}
        <div className="sr-only" aria-label="Complete Catalog of Digital and IT Services in Nepal">
          {services.map((cat) => (
            <div key={cat.id} id={`services-cat-${cat.id}`}>
              <h3>{cat.label} Services in Nepal</h3>
              {cat.items.map((svc, sIdx) => (
                <article key={svc.title} id={`service-${cat.id}-${sIdx}`} itemScope itemType="https://schema.org/Service">
                  <h4 itemProp="name">{svc.title}</h4>
                  <p itemProp="description">{svc.description}</p>
                  <meta itemProp="serviceType" content={cat.label} />
                  <meta itemProp="provider" content="Optiverse IT Solution Pvt. Ltd." />
                  <meta itemProp="areaServed" content="Nepal, International" />
                  <ul>
                    {svc.highlights.map((hl) => (
                      <li key={hl.title}>
                        <strong>{hl.title}</strong>: {hl.text}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-cyan-500/15 bg-[#0f1520] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

          {/* â”€â”€ UNIFIED LAYOUT: stacks on mobile, 3-col on desktop â”€â”€ */}
          <div className="flex flex-col lg:grid lg:grid-cols-[220px_minmax(0,1fr)_260px]">

            {/* â”€â”€ LEFT / TOP: Category Nav â€” 2Ã—2 grid on mobile, vertical on desktop â”€â”€ */}
            <aside aria-label="Service categories" className="border-b lg:border-b-0 lg:border-r border-cyan-500/10 bg-gradient-to-b from-[#0a0e1a] to-[#0c1222]">
              <div className="grid grid-cols-2 lg:grid-cols-1">
                {services.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategoryId === category.id;
                  return (
                    <button
                      key={category.id}
                      id={`tab-cat-${category.id}`}
                      role="tab"
                      onClick={() => handleCategoryChange(category.id)}
                      aria-pressed={isActive}
                      className={`group flex flex-col items-center gap-2 lg:gap-3 border-b border-white/5 px-3 py-4 lg:py-5 text-center transition lg:border-l-4 ${
                        isActive
                          ? "border-cyan-400 bg-cyan-500/10 text-white"
                          : "border-transparent text-slate-300 hover:bg-cyan-500/5 hover:text-white"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 lg:h-11 lg:w-11 items-center justify-center rounded-xl lg:rounded-2xl transition ${
                          isActive
                            ? "bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-[0_8px_24px_rgba(6,182,212,0.4)]"
                            : "bg-white/5 text-slate-300 group-hover:bg-cyan-500/15 group-hover:text-cyan-300"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] lg:text-xs font-bold leading-4 lg:leading-5">
                        {category.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* â”€â”€ CENTER: Active Service Content â”€â”€ */}
            <div className="border-b border-cyan-500/10 lg:border-b-0 lg:border-r" itemScope itemType="https://schema.org/Service">
              <div className="relative h-52 overflow-hidden sm:h-64 lg:h-80">
                <img
                  src={activeItem.image}
                  alt={`${activeItem.title} - Professional ${activeCategory.label} Service in Nepal | Optiverse IT Solution`}
                  title={`${activeItem.title} - Optiverse IT Solution Nepal`}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#0f1520]" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-4 sm:gap-4 sm:p-6">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-[0_8px_24px_rgba(6,182,212,0.4)] sm:h-11 sm:w-11">
                    <ChevronRight className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-white sm:text-xl lg:text-2xl" itemProp="name">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 p-4 sm:p-6 lg:p-7">
                <p className="text-left text-sm leading-relaxed sm:leading-8 text-slate-300 sm:text-[15px]" itemProp="description">
                  <meta itemProp="serviceType" content={activeCategory.label} />
                  <meta itemProp="provider" content="Optiverse IT Solution Pvt. Ltd." />
                  <meta itemProp="areaServed" content="Nepal, International" />
                  {activeItem.description}
                </p>

                <div className="space-y-3">
                  {activeItem.highlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="rounded-xl sm:rounded-2xl border border-cyan-500/15 bg-cyan-500/5 p-3 sm:p-4 transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300 sm:h-8 sm:w-8">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-100">{highlight.title}</h4>
                          <p className="mt-1 text-left text-xs sm:text-sm leading-relaxed sm:leading-7 text-slate-400">
                            {highlight.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {activeCategory.id === "web" && (
                  <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-green-900/60 to-slate-900 p-4 sm:p-5 border border-emerald-500/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-300 mb-1">
                        <Sparkles size={13} />
                        <span>Fixed Pricing for Nepal</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        Looking for SME Website Packages? (Starter, Growth, Custom)
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Starting from 24,999/- with guaranteed timelines, local SEO & eSewa integration.
                      </p>
                    </div>
                    <Link
                      to="/services/website-development"
                      className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-slate-950 hover:bg-emerald-400 transition shadow"
                    >
                      <span>Explore Website Packages</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* â”€â”€ RIGHT / BOTTOM: Sub-services â€” wrapped flex on mobile, vertical on desktop â”€â”€ */}
            <aside aria-label="Sub services navigation" className="bg-gradient-to-b from-[#0a0e1a] to-[#0c1222]">
              <div className="border-b border-cyan-500/10 px-4 py-3 lg:py-4 text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                Sub Services
              </div>
              {/* Mobile: flex-wrap so ALL pills are visible; Desktop: vertical list */}
              <div className="flex flex-wrap gap-2 p-3 lg:hidden">
                {activeCategory.items.map((item, index) => {
                  const isActive = activeItemIndex === index;
                  return (
                    <button
                      key={item.title}
                      id={`subservice-pill-${activeCategory.id}-${index}`}
                      onClick={() => setActiveItemIndex(index)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                        isActive
                          ? "border-cyan-400/60 bg-cyan-500/20 text-cyan-300"
                          : "border-cyan-500/20 bg-cyan-500/5 text-slate-400 hover:border-cyan-400/40 hover:text-slate-200"
                      }`}
                    >
                      {item.shortTitle || item.title}
                    </button>
                  );
                })}
              </div>
              {/* Desktop: full vertical list with number badge */}
              <div className="hidden lg:block space-y-2 p-4">
                {activeCategory.items.map((item, index) => {
                  const isActive = activeItemIndex === index;
                  return (
                    <button
                      key={item.title}
                      id={`subservice-btn-${activeCategory.id}-${index}`}
                      onClick={() => setActiveItemIndex(index)}
                      className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                        isActive
                          ? "border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-white"
                          : "border-cyan-500/10 bg-cyan-500/[0.03] text-slate-300 hover:border-cyan-400/25 hover:bg-cyan-500/10 hover:text-white"
                      }`}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-cyan-300">
                        <span className="text-xs font-bold">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>
                      <p className="min-w-0 text-sm font-semibold leading-5">
                        {item.shortTitle || item.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
