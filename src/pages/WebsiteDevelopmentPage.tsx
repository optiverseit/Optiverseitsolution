// src/pages/WebsiteDevelopmentPage.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Zap,
} from "lucide-react";
import SEOHead from "../components/seo/SEOHead";
import Footer from "../components/hero/Footer";
import WebsiteDevHero from "../components/website-development/WebsiteDevHero";
import PackageCard from "../components/website-development/PackageCard";
import SectorGridSection from "../components/website-development/SectorGridSection";
import MarketFitSectorSection from "../components/website-development/MarketFitSectorSection";
import NepalPaymentSection from "../components/website-development/NepalPaymentSection";
import PackageComparisonTable from "../components/website-development/PackageComparisonTable";
import AuditCTASection from "../components/website-development/AuditCTASection";
import PackageInquiryModal from "../components/website-development/PackageInquiryModal";
import {
  websitePackages,
  type WebsitePackage,
  type IndividualSectorCard,
  type SectorTier,
} from "../data/websitePackagesData";

export default function WebsiteDevelopmentPage() {
  const [selectedPkgForModal, setSelectedPkgForModal] = useState<WebsitePackage | null>(null);
  const [selectedSectorForModal, setSelectedSectorForModal] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuditModal, setIsAuditModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenInquiry = (pkg: WebsitePackage) => {
    setSelectedPkgForModal(pkg);
    setSelectedSectorForModal("");
    setIsAuditModal(false);
    setIsModalOpen(true);
  };

  const handleOpenSectorInquiry = (sector: IndividualSectorCard, tier?: SectorTier) => {
    const pkgId = tier?.packageId || sector.packageId;
    const pkg = websitePackages.find((p) => p.id === pkgId) || websitePackages[1];
    setSelectedPkgForModal(pkg);
    setSelectedSectorForModal(
      tier
        ? `${sector.title} — ${tier.name} Package (${tier.price})`
        : `${sector.title} (${sector.subtitle})`
    );
    setIsAuditModal(false);
    setIsModalOpen(true);
  };

  const handleOpenAudit = () => {
    setSelectedPkgForModal(null);
    setSelectedSectorForModal("");
    setIsAuditModal(true);
    setIsModalOpen(true);
  };

  const faqs = [
    {
      q: "What is an SME, and how do we help businesses through these packages?",
      a: "An SME (Small and Medium-sized Enterprise) represents the backbone of Nepal's economy—including retail shops, travel and trekking agencies, private clinics, consultancies, hotels, restaurants, and emerging startups. Many Nepali SMEs struggle with either exorbitant agency quotes or cheap, unmaintained templates that break within months. Optiverse helps businesses thrive by providing fixed, predictable pricing with zero hidden fees, verified milestone-based payment schedules, and digital systems pre-engineered for Nepal (such as direct WhatsApp/Viber inquiry capture, Google Business Profile ranking, and native eSewa/Khalti integrations) ensuring you get a reliable online engine that generates measurable leads from day one.",
    },
    {
      q: "Why should my business choose an SME Package rather than a random custom quote?",
      a: "Custom quotes from Nepali agencies often lead to hidden costs, scope creep, and unexpected delays. Optiverse's 3 SME packages provide guaranteed deliverables, transparent pricing, verified delivery timelines (15–20 days for Starter, 4–6 weeks for Growth), and full local SEO & Google Business Profile setup without hidden surprises.",
    },
    {
      q: "What makes the 'Growth + SEO Website' package Optiverse's most popular choice?",
      a: "Most technical agencies only hand over basic templates. The Growth + SEO Website package delivers a custom 12–18 page dynamic CMS platform with API integrations, 2X faster performance, blogs with video, local and mid-level SEO ranking, and direct inquiry workflows.",
    },
    {
      q: "Can we integrate local Nepali payment gateways like eSewa, Khalti, and Fonepay?",
      a: "Yes! Our Custom Business System comes fully engineered with official APIs for eSewa, Khalti, Fonepay, and ConnectIPS, allowing local customers to pay in NPR instantly with automatic verification.",
    },
    {
      q: "What are your milestone payment terms in Nepal?",
      a: "We never ask for 100% upfront payment. For Starter Website, it is 50% advance and 50% before live launch. For Growth, it is 40% advance, 30% upon interactive design approval, and 30% before go-live. For Custom Business System, it is 30% / 30% / 30% / 10%. We accept eSewa, Khalti, Fonepay QR, ConnectIPS, and direct Bank Transfer.",
    },
    {
      q: "What is included in the Free 30-Minute Digital Presence Audit?",
      a: "Our senior technical leads will evaluate your existing website (or competitor landscape if you are starting new), Google Maps search visibility in Kathmandu/Nepal, page speed on mobile 4G, and give you an actionable roadmap with zero sales pressure.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Website Development Packages in Nepal | Starter, Growth & Custom Business Systems — Optiverse"
        description="Transparent SME website packages in Nepal: Starter Website at 24,999/-, Growth + SEO Website at 44,999/-, and Custom Systems based on requirements. Featuring mobile-responsive design, local SEO, Google Business Profile, API dynamic pages, and eSewa/Khalti workflows."
        keywords="website development nepal, website price in nepal, website packages kathmandu, web design lalitpur, optiverse it solution, esewa website integration, nepali sme website"
        canonicalPath="/services/website-development"
      />

      {/* Modern Agency Hero Section */}
      <WebsiteDevHero onOpenAudit={handleOpenAudit} />

      {/* The 3 Core SME Package Cards Section */}
      <section
        id="packages-section"
        className="scroll-mt-28 relative bg-[#f8fafc] py-16 sm:py-20 text-slate-900 border-b border-slate-200/80 overflow-hidden"
      >
        {/* Subtle Architectural Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-35 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)]"
          aria-hidden="true"
        />

        {/* Soft Emerald Ambient Glow */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(22,101,52,0.06),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 space-y-3">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Select Your Website Package
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">
              Three clear, fixed-price tiers engineered for the Nepali business reality. Click any package to explore complete deliverables, sector adaptations, and milestone schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch pt-2">
            {websitePackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelectForInquiry={handleOpenInquiry}
              />
            ))}
          </div>

          {/* Architecture Consultation Banner */}
          <div className="relative overflow-hidden mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-[#0e331b] border border-slate-700/80 shadow-xl shadow-slate-950/15 p-5 sm:p-6 text-white">
            {/* Ambient Background Accents */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-emerald-500/15 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-cyan-500/10 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Need a specialized multi-vendor marketplace, hotel ERP, or university portal?
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Our technical architects scope custom database systems, role permissions, and bespoke API workflows.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleOpenAudit}
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#166534] hover:bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-green-950/40 hover:shadow-emerald-900/40 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Book Free Architecture Consultation</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Individual Sector Cards Section */}
      <SectorGridSection onInquireSector={handleOpenSectorInquiry} />

      {/* Sector Market-Fit Analysis (Interactive Showcase) */}
      <MarketFitSectorSection />

      {/* Nepal Payment Gateways & Milestone Schedule */}
      <NepalPaymentSection />

      {/* Side-By-Side Feature Comparison Table */}
      <PackageComparisonTable />

      {/* Positioning Statement & Free 30-Minute Audit Section */}
      <AuditCTASection onOpenAuditModal={handleOpenAudit} />

      {/* Frequently Asked Questions */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#166534]">
              Clear Answers
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 overflow-hidden transition shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:bg-slate-50 transition"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#166534] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-gray-100 pt-3 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Inquiry / Audit Modal */}
      <PackageInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage={selectedPkgForModal}
        initialSector={selectedSectorForModal}
        isAudit={isAuditModal}
      />
    </>
  );
}
