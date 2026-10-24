// src/pages/WebsitePackageDetailPage.tsx
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Check,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Layers,
  MessageCircle,
  HelpCircle,
  TrendingUp,
  FileCheck,
  CreditCard,
  DollarSign,
  Package,
} from "lucide-react";
import SEOHead from "../components/seo/SEOHead";
import Footer from "../components/hero/Footer";
import WebsiteDevHeader from "../components/website-development/WebsiteDevHeader";
import SectorAdaptationTabs from "../components/website-development/SectorAdaptationTabs";
import PackageInquiryModal from "../components/website-development/PackageInquiryModal";
import { websitePackages, type WebsitePackage } from "../data/websitePackagesData";

export default function WebsitePackageDetailPage() {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuditModal, setIsAuditModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [packageId]);

  // Find package, supporting exact id as well as shorthand aliases (starter, growth, custom)
  const pkg = websitePackages.find(
    (p) =>
      p.id === packageId ||
      (packageId === "starter" && p.id === "starter-website") ||
      (packageId === "growth" && p.id === "growth-website-marketing") ||
      (packageId === "custom" && p.id === "custom-business-system")
  );

  if (!pkg) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center bg-slate-50">
        <Package className="h-16 w-16 text-slate-300 mb-4" />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Package Not Found
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-md">
          The SME website package you are looking for does not exist or has been updated.
        </p>
        <Link
          to="/services/website-development"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#166534] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-green-900 transition"
        >
          <ArrowLeft size={16} /> Return to All Website Packages
        </Link>
      </div>
    );
  }

  const isGrowth = pkg.id === "growth-website-marketing";
  const isCustom = pkg.id === "custom-business-system";

  return (
    <>
      <SEOHead
        title={`${pkg.name} (${pkg.startingPrice}) | SME Website Package Nepal — Optiverse`}
        description={`${pkg.name}: ${pkg.tagline}. Starting at ${pkg.startingPrice} with a timeline of ${pkg.timeline}. Best for ${pkg.bestFor}.`}
        keywords={`${pkg.name}, website development nepal, website price kathmandu, ${pkg.tier}, optiverse it solution`}
        canonicalPath={`/services/website-development/${pkg.id}`}
      />

      {/* User's Exact Header Design */}
      <WebsiteDevHeader
        title="Website Development"
        badgeText="Website Packages"
        packageTitle={pkg.name}
        packageTier={pkg.tier}
        startingPrice={pkg.startingPrice}
        priceSubtext={pkg.priceSubtext}
        showBackButton={true}
      />

      {/* Package Quick Switcher Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 overflow-x-auto [scrollbar-width:none]">
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
                Packages:
              </span>
              {websitePackages.map((item) => (
                <Link
                  key={item.id}
                  to={`/services/website-development/${item.id}`}
                  className={`flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2 text-xs font-bold transition whitespace-nowrap ${
                    item.id === pkg.id
                      ? "bg-[#166534] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] ${
                      item.id === pkg.id ? "bg-green-900/60 text-green-100" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {item.startingPrice}
                  </span>
                </Link>
              ))}
            </div>

            <div className="shrink-0 pl-4">
              <button
                type="button"
                onClick={() => {
                  setIsAuditModal(false);
                  setIsModalOpen(true);
                }}
                className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 transition shadow"
              >
                <span>Get Started with {pkg.name.split(" ")[0]}</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Body */}
      <div className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: Comprehensive Deliverables */}
            <div className="lg:col-span-8 space-y-10">
              {/* Overview Card */}
              <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#166534]">
                    Target Persona & Strategic Scope
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    {pkg.tagline}
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Best Suited For:
                  </span>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {pkg.bestFor}
                  </p>
                </div>

                {/* Key Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="rounded-xl border border-slate-200 p-3 bg-white">
                    <span className="text-slate-400 font-bold block text-[10px] uppercase">
                      Timeline
                    </span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {pkg.timeline.split("after")[0]}
                    </span>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-3 bg-white">
                    <span className="text-slate-400 font-bold block text-[10px] uppercase">
                      Maintenance
                    </span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {pkg.maintenance.split(",")[0]}
                    </span>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-3 bg-white col-span-2 sm:col-span-1">
                    <span className="text-slate-400 font-bold block text-[10px] uppercase">
                      Market Comparison
                    </span>
                    <span className="font-bold text-[#166534] text-xs leading-tight block">
                      {pkg.typicalMarketComparison.split(";")[0]}
                    </span>
                  </div>
                </div>

                {/* Ad Budget Note for Growth */}
                {pkg.adBudgetNote && (
                  <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-900">
                    <strong>Recommended Ad Budget:</strong> {pkg.adBudgetNote}
                  </div>
                )}
              </div>

              {/* Categorized In-Depth Deliverables */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Full Deliverables & Technical Specifications
                  </h3>
                  <span className="text-xs font-bold text-slate-500">
                    100% Guaranteed Inclusions
                  </span>
                </div>

                {pkg.deliverableCategories.map((cat, cIdx) => (
                  <div
                    key={cIdx}
                    className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                      <h4 className="text-lg font-black text-slate-900">
                        {cat.category}
                      </h4>
                      {cat.badge && (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-[#166534]">
                          {cat.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-5">
                      {cat.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-3.5">
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#166534]">
                            <Check size={13} strokeWidth={3} />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-900">
                              {item.title}
                            </h5>
                            <p className="mt-0.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ongoing Monthly Options (Specifically for Growth Package) */}
              {pkg.ongoingOptions && (
                <div className="rounded-3xl border-2 border-emerald-600/40 bg-gradient-to-br from-white via-green-50/20 to-white p-6 sm:p-8 shadow-md">
                  <div className="mb-6">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">
                      Flexible Growth Retainers
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      Ongoing Monthly Visibility & Care Options
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      Prices aligned with Nepal's standard social media management range (NPR 15K–45K/mo), backed by Optiverse's in-house video studio.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pkg.ongoingOptions.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className={`rounded-2xl border p-5 flex flex-col justify-between transition ${
                          opt.isPopular
                            ? "border-[#166534] bg-white shadow-lg ring-2 ring-emerald-500/30"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <div>
                          {opt.isPopular && (
                            <span className="inline-block rounded-md bg-[#166534] text-white text-[10px] font-black uppercase px-2 py-0.5 mb-2">
                              Recommended
                            </span>
                          )}
                          <h4 className="text-base font-black text-slate-900">
                            {opt.plan}
                          </h4>
                          <span className="text-xl font-black text-[#166534] block mt-1">
                            {opt.monthlyFee}
                          </span>
                          <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                            {opt.includes}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Optional Modules (Specifically for Custom Business System) */}
              {pkg.optionalModules && (
                <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="mb-6">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                      Modular Architecture
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      Available Operational Business Modules
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      Plug-and-play workflows engineered specifically for Nepali service and trade regulations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.optionalModules.map((mod, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 space-y-2 hover:border-slate-300 transition"
                      >
                        <div className="flex items-start justify-between">
                          <h5 className="text-sm font-bold text-slate-900">
                            {mod.title}
                          </h5>
                          <span className="text-[10px] font-bold uppercase rounded px-2 py-0.5 bg-blue-100 text-blue-800 shrink-0">
                            Module {mIdx + 1}
                          </span>
                        </div>
                        <div className="text-[11px] font-semibold text-[#166534]">
                          Sectors: {mod.sectors}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {mod.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sector Specific Adaptations */}
              <SectorAdaptationTabs
                adaptations={pkg.sectorAdaptations}
                packageName={pkg.name}
              />

              {/* Strategic Value: Why this works in Nepal */}
              <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  Strategic Market Insight
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Why this package wins in Nepal
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pkg.whyThisWorks}
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Sticky Inquiry Card & Payment Milestones */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
              {/* Main Action Card */}
              <div className="rounded-3xl border-2 border-[#166534] bg-white p-6 sm:p-7 shadow-xl space-y-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Selected Package
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                    {pkg.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#166534]">
                      {pkg.startingPrice}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {pkg.priceSubtext}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-gray-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Timeline:</span>
                    <span className="font-bold text-slate-900">{pkg.timeline.split(" ")[0]} {pkg.timeline.split(" ")[1]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Maintenance:</span>
                    <span className="font-bold text-slate-900">{pkg.maintenance.split(",")[0]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Milestone Model:</span>
                    <span className="font-bold text-emerald-700">{pkg.paymentStructure.advance}</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAuditModal(false);
                      setIsModalOpen(true);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#166534] py-3.5 px-4 text-sm font-black text-white hover:bg-green-900 transition shadow-md"
                  >
                    <span>Inquire for {pkg.name.split(" ")[0]}</span>
                    <ArrowRight size={15} />
                  </button>

                  <a
                    href={`https://wa.me/9779803713931?text=Hello%20Optiverse,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      pkg.name
                    )}%20package%20(${encodeURIComponent(pkg.startingPrice)}).%20Please%20share%20details.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-green-50/50 py-3 px-4 text-xs font-bold text-green-800 hover:bg-green-100 transition"
                  >
                    <MessageCircle size={15} className="text-[#25D366]" />
                    <span>WhatsApp Quick Inquiry (+977-9803713931)</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <ShieldCheck size={15} className="text-[#166534]" />
                  <span>100% Milestone-based release</span>
                </div>
              </div>

              {/* Payment Schedule Card */}
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <CreditCard size={18} className="text-[#166534]" />
                  <h4 className="text-base font-bold text-slate-900">
                    Payment Stages
                  </h4>
                </div>

                <div className="space-y-3">
                  {pkg.paymentStructure.steps.map((st, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-slate-50 p-3 border border-slate-200/80 text-xs"
                    >
                      <div className="flex items-center justify-between font-bold text-slate-900 mb-0.5">
                        <span>{st.stage}</span>
                        <span className="text-[#166534] font-black">{st.percentage}</span>
                      </div>
                      <p className="text-[11px] text-slate-500">{st.note}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-500 block">
                    Supported: eSewa • Khalti • Fonepay • ConnectIPS • Bank Wire
                  </span>
                </div>
              </div>

              {/* Free 30-min Audit Mini Card */}
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-[#166534] p-6 text-white space-y-3 shadow-md">
                <span className="rounded bg-yellow-400 text-slate-950 font-black text-[10px] uppercase px-2 py-0.5">
                  100% Free Session
                </span>
                <h4 className="text-lg font-black text-white">
                  Not sure which package fits your business?
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Book a free 30-minute digital presence audit with our Kathmandu team to review your goals.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsAuditModal(true);
                    setIsModalOpen(true);
                  }}
                  className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-white text-slate-900 py-2.5 px-3 text-xs font-bold hover:bg-slate-100 transition shadow"
                >
                  <Calendar size={13} />
                  <span>Book Free 30-Min Audit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Inquiry Modal */}
      <PackageInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage={pkg}
        isAudit={isAuditModal}
      />
    </>
  );
}
