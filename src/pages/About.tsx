import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  Quote,
  CheckCircle,
  Users,
  Heart,
  Zap,
  MessageSquare,
  ChevronDown,
  Globe,
  TrendingUp,
  Share2,
  Search,
  Video,
  Wrench,
  Megaphone,
  Scissors,
  Palette,
  Clock,
  Code2,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Check,
  HelpCircle,
} from "lucide-react";
import Footer from "../components/hero/Footer";
import heroImg from "../assets/extra/Website/about_hero_visual.jpg";
import waveTexture from "../assets/hero/wave-texture.png";

/* ─── ALL 9 SERVICES (Interactive & Enterprise Scope) ─── */
/* ─── ALL 9 SERVICES ─── */
const ourServices = [
  {
    num: "01",
    tag: "Web & Software",
    category: "tech",
    icon: <Globe className="h-6 w-6" />,
    title: "Website Development",
    desc: "Specialized custom website development and web applications tailored to your business goals. Engineered for speed, responsive design, and seamless customer conversions.",
    deliverables: ["Custom Full-Stack Web Apps", "React & Next.js Frameworks", "E-Commerce & Online Stores", "API & Payment Integrations"],
    accent: "text-emerald-700 bg-emerald-50 border-emerald-100 group-hover:bg-[#166534] group-hover:text-white",
  },
  {
    num: "02",
    tag: "Organic Search",
    category: "growth",
    icon: <Search className="h-6 w-6" />,
    title: "SEO (Search Engine Optimization)",
    desc: "Improve rankings, organic traffic, and domain authority with deep technical audits, keyword mapping, and white-hat link acquisition.",
    deliverables: ["Comprehensive SEO Audits", "Keyword Strategy & Architecture", "Core Web Vitals Speed", "High-Authority Link Building"],
    accent: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    num: "03",
    tag: "Growth Marketing",
    category: "growth",
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Digital Marketing",
    desc: "Grow globally with data-driven marketing campaigns, conversion rate optimization (CRO), and measurable customer acquisition pipelines.",
    deliverables: ["Marketing Funnel Optimization", "Lead Generation Systems", "Email Marketing Automation", "Multi-Channel ROI Analytics"],
    accent: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-600 group-hover:text-white",
  },
  {
    num: "04",
    tag: "Media Production",
    category: "media",
    icon: <Video className="h-6 w-6" />,
    title: "Video Production",
    desc: "Engaging commercial video content crafted to capture attention and tell your brand story with 4K cinema cameras and professional studio lighting.",
    deliverables: ["Corporate Brand Films", "Product Launch Showcases", "Scriptwriting & Storyboards", "4K Drone & Cinema Shoots"],
    accent: "text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:text-white",
  },
  {
    num: "05",
    tag: "Post-Production",
    category: "media",
    icon: <Scissors className="h-6 w-6" />,
    title: "Video Editing",
    desc: "Transform footage professionally with seamless pacing, motion graphics, audio mastering, and color grading tailored for cross-platform impact.",
    deliverables: ["High-Impact Motion Graphics", "Precision Color Grading", "Short-Form Social Reels", "Studio Audio Mastering"],
    accent: "text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:text-white",
  },
  {
    num: "06",
    tag: "Branding & Visuals",
    category: "media",
    icon: <Palette className="h-6 w-6" />,
    title: "Graphics Design",
    desc: "Brand identity visuals, logos, marketing collateral, and UI assets that build instant credibility and leave a lasting impression.",
    deliverables: ["Primary & Secondary Logo Marks", "Complete Brand Guidelines", "Marketing & Pitch Collateral", "Social Media Vector Kits"],
    accent: "text-pink-600 bg-pink-50 border-pink-100 group-hover:bg-pink-600 group-hover:text-white",
  },
  {
    num: "07",
    tag: "Social Media",
    category: "media",
    icon: <Share2 className="h-6 w-6" />,
    title: "Social Media Management",
    desc: "Strategic audience growth across platforms with consistent brand presence, custom-designed creatives, and active community care.",
    deliverables: ["Monthly Content Calendars", "Custom Designed Visual Posts", "Active Community Management", "Reach & Engagement Reports"],
    accent: "text-cyan-600 bg-cyan-50 border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white",
  },
  {
    num: "08",
    tag: "Paid Advertising",
    category: "growth",
    icon: <Megaphone className="h-6 w-6" />,
    title: "Advertising (Paid PPC)",
    desc: "Promote products effectively with targeted paid campaigns across Google Search, Meta Ads, and LinkedIn with continuous A/B testing.",
    deliverables: ["Google Search & Display Ads", "Meta (FB & IG) Paid Funnels", "Pixel & Event Tracking Setup", "Weekly A/B Creative Testing"],
    accent: "text-orange-600 bg-orange-50 border-orange-100 group-hover:bg-orange-600 group-hover:text-white",
  },
  {
    num: "09",
    tag: "IT & Infrastructure",
    category: "tech",
    icon: <Wrench className="h-6 w-6" />,
    title: "IT Technical Service",
    desc: "Hardware & network support, server management, firewall security protocols, and on-demand technical troubleshooting to prevent downtime.",
    deliverables: ["Enterprise Router & Wi-Fi Setup", "Workstation Hardware Support", "Firewall & Security Protocols", "Rapid On-Demand IT Helpdesk"],
    accent: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-700 group-hover:text-white",
  },
];

/* ─── STRUCTURED DEPARTMENTS ─── */
const serviceDepartments = [
  {
    id: "tech",
    name: "Web & Software Engineering",
    services: ["01", "09"],
    gridClass: "grid md:grid-cols-2 gap-6",
  },
  {
    id: "growth",
    name: "Growth, SEO & Paid Advertising",
    services: ["02", "03", "08"],
    gridClass: "grid md:grid-cols-3 gap-6",
  },
  {
    id: "media",
    name: "Creative Studio & Media Production",
    services: ["04", "05", "06", "07"],
    gridClass: "grid md:grid-cols-2 gap-6",
  },
];

/* ─── CROSS-DISCIPLINARY STANDARDS & CLIENT TRUST ─── */
const culturePillars = [
  {
    num: "01",
    metric: "⚡ Sub-Second Speed",
    icon: <Code2 className="h-6 w-6" />,
    tag: "Web & Software Development",
    heading: "Websites & Software Engineered to Convert",
    text: "We build modern, mobile-first websites and web applications with clean, scalable code. Engineered for lightning-fast loading, airtight security, and intuitive user experiences that turn everyday visitors into paying clients.",
    highlight: "Fast, secure & built to scale",
    accent: "text-emerald-700 bg-emerald-50 border-emerald-100 group-hover:bg-[#166534] group-hover:text-white",
  },
  {
    num: "02",
    metric: "📈 1st-Page Google Target",
    icon: <TrendingUp className="h-6 w-6" />,
    tag: "SEO & Digital Advertising",
    heading: "Search Engine Authority & High-Return Ads",
    text: "We position your business directly in front of active buyers on Google. Combining data-backed SEO with hyper-targeted paid advertising, every campaign is calibrated to deliver measurable ROI and genuine sales leads.",
    highlight: "Consistent high-intent inquiries",
    accent: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    num: "03",
    metric: "🎬 4K Cinematic Quality",
    icon: <Video className="h-6 w-6" />,
    tag: "Video Production & Editing",
    heading: "Commercial Video Production That Demands Attention",
    text: "From broadcast-quality corporate brand films to dynamic short-form social reels for Instagram and TikTok, our media studio scripts, shoots, and edits visual stories that command viewer attention and build lasting prestige.",
    highlight: "Scroll-stopping visual impact",
    accent: "text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:text-white",
  },
  {
    num: "04",
    metric: "✨ Premium Brand Presence",
    icon: <Palette className="h-6 w-6" />,
    tag: "Branding & Graphic Design",
    heading: "Distinct Visual Identities That Inspire Instant Trust",
    text: "A compelling visual identity is your strongest competitive advantage. We design memorable logo systems, comprehensive brand style guides, marketing collateral, and clean user interfaces that position you as an industry leader.",
    highlight: "100% Trademark-ready branding",
    accent: "text-pink-600 bg-pink-50 border-pink-100 group-hover:bg-pink-600 group-hover:text-white",
  },
  {
    num: "05",
    metric: "🚀 Scalable Audience Growth",
    icon: <Share2 className="h-6 w-6" />,
    tag: "Social Media Management",
    heading: "Strategic Social Presence That Builds Real Community",
    text: "Transform your social media channels into active growth drivers. We curate monthly content calendars, craft high-engagement visuals, and manage daily interactions across LinkedIn, Instagram, and Facebook to foster true brand loyalty.",
    highlight: "Active community & daily reach",
    accent: "text-cyan-600 bg-cyan-50 border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white",
  },
  {
    num: "06",
    metric: "🛡️ 99.9% Uptime Guarantee",
    icon: <Wrench className="h-6 w-6" />,
    tag: "Enterprise IT & Network Support",
    heading: "Enterprise Network Infrastructure & Rapid IT Support",
    text: "Never let technical downtime disrupt your business operations. Our certified IT technicians deliver robust office network configurations, workstation maintenance, cybersecurity protection, and rapid on-demand technical support.",
    highlight: "Zero-downtime office reliability",
    accent: "text-slate-700 bg-slate-100 border-slate-200 group-hover:bg-slate-700 group-hover:text-white",
  },
];

/* ─── PROMISES ─── */
const promises = [
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "You will always talk to a human",
    body: "No bots, no ticket queues. When you reach us, a real team member picks up — someone who actually worked on your project.",
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Plain-English updates, every week",
    body: "We translate dev-speak into clear progress reports so you always know exactly where your project stands.",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "We say no when we should",
    body: "If a feature won't help your users, we will tell you. Honest advice beats padding out a scope any day.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "No surprise invoices",
    body: "What we quote is what you pay. If scope changes, we discuss it first — always.",
  },
];

/* ─── FAQs ─── */
const faqs = [
  {
    category: "Clients & Scope",
    icon: <Users className="h-5 w-5" />,
    q: "Are you only for large businesses?",
    a: "Not at all. Some of our favourite projects have been for solo founders, growing startups, small non-profits, and local stores in Nepal. If you have a clear objective and a realistic timeline, we would love to build together.",
    highlight: "Startups, SMEs & Enterprises welcome",
  },
  {
    category: "Timelines & Delivery",
    icon: <Clock className="h-5 w-5" />,
    q: "How long does a typical project take?",
    a: "A standard production website or web application takes 4 to 10 weeks depending on complexity. We map out precise milestones and delivery dates directly in your proposal — no ambiguous open-ended estimates.",
    highlight: "Clear milestone sprints & weekly demos",
  },
  {
    category: "Collaboration & Teams",
    icon: <Code2 className="h-5 w-5" />,
    q: "Can you work with our existing team or vendor?",
    a: "Absolutely. We routinely collaborate with in-house product developers, UI/UX designers, marketing leads, or legacy agencies. Standard Git workflows, documentation, and open Slack/WhatsApp channels keep teamwork frictionless.",
    highlight: "Seamless GitHub/GitLab integration",
  },
  {
    category: "Support & Warranty",
    icon: <ShieldCheck className="h-5 w-5" />,
    q: "What happens if something breaks after launch?",
    a: "We offer proactive ongoing maintenance. However, even without a maintenance contract, if any bug appears in features we built within 30 days of launch, our engineers fix it immediately at zero cost. That is our ironclad guarantee.",
    highlight: "30-Day Zero-Cost Bug Warranty",
  },
  {
    category: "Pricing & Billing",
    icon: <Sparkles className="h-5 w-5" />,
    q: "Are there any hidden fees or surprise invoices?",
    a: "None. We provide detailed, itemized quotes before any development begins. If project scope expands during production, we formally specify the exact timeline and pricing adjustments for your written sign-off first.",
    highlight: "100% Transparent Fixed Estimates",
  },
];

/* ─── FAQ ACCORDION ─── */
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3.5">
      {faqs.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
              isOpen
                ? "bg-white border-[#166534] shadow-lg shadow-green-950/5 ring-1 ring-[#166534]/20"
                : "bg-white border-gray-200/90 hover:border-green-300 shadow-sm hover:shadow-md"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4 transition-colors"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen
                      ? "bg-green-100 text-[#166534]"
                      : "bg-slate-100 text-gray-500"
                  }`}
                >
                  {f.icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                    {f.category}
                  </span>
                  <span
                    className={`font-bold text-[15px] sm:text-[16px] leading-snug transition-colors ${
                      isOpen ? "text-[#071c54]" : "text-gray-900"
                    }`}
                  >
                    {f.q}
                  </span>
                </div>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-[#166534] text-white rotate-180 shadow-sm"
                    : "bg-gray-100 text-gray-400 hover:text-gray-600"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-100">
                <p className="text-gray-600 text-[14px] leading-relaxed pl-0 sm:pl-[54px] mb-4">
                  {f.a}
                </p>
                <div className="pl-0 sm:pl-[54px]">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-green-50 text-[#166534] border border-green-200/70">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-600 flex-shrink-0" />
                    {f.highlight}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── PAGE ─── */
export default function About() {
  return (
    <div className="font-[Inter,sans-serif] text-gray-800 bg-white">

      {/* ════ HERO ════ */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#166534] via-emerald-400 to-[#166534]" />

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-16 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="pt-4">
            <h1 className="text-4xl sm:text-[52px] font-extrabold leading-[1.1] text-gray-900 mb-6">
              The team that <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#166534]">actually shows up</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-green-100 -z-0 rounded" />
              </span>
              <br />for your business.
            </h1>

            <p className="text-gray-500 text-[16px] leading-relaxed mb-5 max-w-[480px]">
              Optiverse IT Solution Pvt. Ltd. is a Lalitpur-based technology company
              helping businesses — from local startups to international clients — build
              software they can rely on and understand.
            </p>

            <p className="text-gray-500 text-[16px] leading-relaxed mb-10 max-w-[480px]">
              We keep things simple: clear communication, honest pricing, and code that
              works long after we hand it over. No disappearing acts. No jargon walls.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/connect-with-us"
                className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-[14px] shadow-lg shadow-amber-900/20 hover:-translate-y-0.5"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex items-start justify-center lg:justify-end pt-4">
            <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl" />
            <div className="relative z-10 w-full max-w-[540px] p-6">
              <img
                src={heroImg}
                alt="Optiverse team reviewing code together"
                className="w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute top-10 -left-3 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">Client satisfaction</p>
                  <p className="text-[15px] font-extrabold text-gray-800">98%</p>
                </div>
              </div>
              <div className="absolute bottom-10 -right-3 bg-[#d97706] text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[11px] text-amber-100 font-medium">Team members</p>
                  <p className="text-[15px] font-extrabold">Expert Teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ OUR SERVICES ════ */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white border-y border-gray-100 relative overflow-hidden" id="services-section">
        {/* Subtle background ambient lights */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-green-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#071c54] tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
              Providing specialized technical expertise, data-backed marketing, and creative production.
            </p>
          </div>

          {/* Department-Grouped Services */}
          <div className="space-y-16">
            {serviceDepartments.map((dept) => {
              const deptServices = ourServices.filter((s) =>
                dept.services.includes(s.num)
              );

              return (
                <div key={dept.id} className="relative">
                  {/* Department Title Header */}
                  <div className="pb-3 mb-6 border-b border-gray-200/80">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#071c54]">
                      {dept.name}
                    </h3>
                  </div>

                  {/* Services Grid for this Department */}
                  <div className={dept.gridClass}>
                    {deptServices.map((s) => (
                      <div
                        key={s.num}
                        className="group relative bg-white rounded-2xl p-7 border border-gray-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-green-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                      >
                        {/* Hover indicator glow */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-[#166534] opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div>
                          <div className="mb-5">
                            <div
                              className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm ${s.accent}`}
                            >
                              {s.icon}
                            </div>
                          </div>

                          <h4 className="font-bold text-gray-900 text-[18px] mb-2.5 group-hover:text-[#166534] transition-colors leading-snug">
                            {s.title}
                          </h4>
                          <p className="text-gray-600 text-[13.5px] leading-relaxed mb-6">
                            {s.desc}
                          </p>

                          {/* Deliverables Checklist */}
                          <div className="space-y-2 pt-4 border-t border-gray-100">
                            {s.deliverables.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-xs text-gray-700 font-medium"
                              >
                                <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                                </div>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ GROWING NEPAL'S TECH TALENT ════ */}
      <section className="bg-[#0d1a0d] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-0 mb-5 leading-tight text-white">
              We invest in the next generation — not just our bottom line
            </h2>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
              Since 2022, we have taken on interns from universities across Nepal and
              treated them like junior team members from day one — real projects, real
              deadlines, real code reviews. Not a coffee-fetching programme.
            </p>
            <p className="text-gray-300 text-[15px] leading-relaxed">
              Several of our best full-time developers started as interns here. Building
              a strong tech ecosystem in Nepal means investing in the people who will
              build it.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Sushil Thapa",
                role: "Intern → Full-Stack Developer",
                quote: "I expected to be handed mockup tasks. Instead I was debugging live APIs by week two. Terrifying — and exactly what I needed.",
              },
              {
                name: "Priya Shrestha",
                role: "Intern → UI/UX Designer",
                quote: "The team reviewed my designs the same way they'd review a senior's. No sugarcoating, lots of learning.",
              },
              {
                name: "Bikram Rai",
                role: "Intern → SEO Specialist",
                quote: "Six months here gave me more practical experience than two years of coursework. That's not an exaggeration.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 hover:border-green-500 rounded-2xl p-5 transition-colors duration-200"
              >
                <p className="text-gray-300 text-[13px] italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-800 flex items-center justify-center text-green-300 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-[13px] font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ WHO WE ARE — Promise cards ════ */}
      <section className="bg-[#f8faf8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-green-600 font-semibold block mb-4">
                Who we are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                A small team with<br />a big sense of ownership
              </h2>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-7">
                <Quote className="h-8 w-8 text-green-100 absolute top-4 left-4" />
                <p className="text-gray-700 text-[16px] italic leading-relaxed pl-5">
                  "The best feedback we ever got was a client saying
                  'you're the first agency that actually called me back.'
                  That should be the baseline — we treat it as the floor, not the ceiling."
                </p>
              </div>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                We are a registered IT company founded in 2020. Our team includes
                developers, designers, SEO specialists, and digital marketers who
                work closely with each client — not as vendors, but as an extended part of your team.
              </p>
            </div>

            <div className="grid gap-4">
              {promises.map((p, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-green-300 hover:shadow-md transition-all duration-200 group cursor-default"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center text-green-600 transition-colors">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[14px] mb-1">{p.title}</h4>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ SERVICE STANDARDS & CORE VALUES ════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071c54] mt-1 tracking-tight">
            Cross-Disciplinary Excellence Built for Tangible Growth
          </h2>
          <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
            We combine technical engineering rigor, creative visual storytelling, and data-backed marketing to deliver measurable advantages across every facet of your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturePillars.map((c, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-200/90 p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-green-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top indicator bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 via-emerald-400 to-[#166534] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm ${c.accent}`}
                  >
                    {c.icon}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    {c.tag}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-[17px] mb-3 group-hover:text-[#166534] transition-colors leading-snug">
                  {c.heading}
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">
                  {c.text}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-green-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  {c.highlight}
                </span>
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform text-green-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section className="bg-[#f8fafc] py-24 border-t border-gray-100 relative overflow-hidden" id="faq-section">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Left Column: Interactive Accordion */}
            <div>
              <FAQAccordion />
            </div>

            {/* Right Column: Heading & Human Support Card */}
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200/80 text-[#166534] text-xs font-bold tracking-wide uppercase mb-4 shadow-xs">
                <HelpCircle className="h-3.5 w-3.5 text-green-600" />
                <span>Questions We Actually Get</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#071c54] leading-[1.18] tracking-tight mb-4">
                Honest answers, <br />
                <span className="text-[#166534]">no sales spin.</span>
              </h2>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-md">
                Clear, upfront answers on timelines, billing, IP ownership, and how our engineering and marketing teams collaborate with your business.
              </p>

              {/* Direct Support Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-green-900/20">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Have a question?</h4>
                    <p className="text-xs text-gray-500">Average response: Under 4 hours</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  Can't find the specific information you need? Chat directly with our technical leads without sitting in a sales queue.
                </p>
                <Link
                  to="/connect-with-us"
                  className="inline-flex items-center justify-between w-full bg-[#071c54] hover:bg-[#0c2e8a] text-white text-xs font-bold py-3.5 px-5 rounded-xl transition-all shadow-md shadow-blue-950/20 hover:-translate-y-0.5"
                >
                  <span>Ask our team directly</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ BOTTOM CTA ════ */}
      <section className="relative bg-[#bf7a00] py-6 sm:py-8 overflow-hidden">
        {/* 3D Wave Texture Overlay — same as HeaderStrape */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay bg-cover bg-center"
          style={{
            backgroundImage: `url(${waveTexture})`,
          }}
        />
        {/* Darkening tint to restore depth and text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-black/25" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left */}
            <div>
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Ready to Elevate Your Business?
              </h2>
              <p className="mt-2 text-sm font-medium text-white/95 sm:text-base">
                Let's build something exceptional together. Share your vision and our experts will craft a tailored strategy for your growth.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/connect-with-us"
                  className="rounded-xl border-2 border-white bg-transparent px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#bf7a00] sm:text-base text-center"
                >
                  Quick Chat
                </Link>
                <Link
                  to="/connect-with-us"
                  className="rounded-xl bg-[#166534] px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#14532d] sm:text-base text-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="text-left lg:text-right">
              <p className="text-sm font-bold leading-relaxed text-white sm:text-base">
                Trusted by startups and enterprises across Nepal and beyond.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                From concept to deployment — we deliver results that matter.
              </p>
              <p className="mt-3 text-xs text-white/70">
                Average response time: under 4 hours · info@optiverseits.com.np
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
