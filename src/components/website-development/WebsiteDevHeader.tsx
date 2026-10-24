// src/components/website-development/WebsiteDevHeader.tsx
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, ShieldCheck } from "lucide-react";

interface WebsiteDevHeaderProps {
  title?: string;
  badgeText?: string;
  packageTitle?: string;
  packageTier?: string;
  startingPrice?: string;
  priceSubtext?: string;
  showBackButton?: boolean;
}

export default function WebsiteDevHeader({
  title = "Website Development",
  badgeText = "Website Packages",
  packageTitle,
  packageTier,
  startingPrice,
  priceSubtext,
  showBackButton = false,
}: WebsiteDevHeaderProps) {
  return (
    <section className="relative w-full bg-[#eaedf2] pt-8 sm:pt-10 pb-6 sm:pb-8 border-b border-gray-300/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb when viewing package details */}
        {showBackButton && (
          <div className="mb-3 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600">
            <Link
              to="/services/website-development"
              className="inline-flex items-center gap-1.5 text-[#166534] hover:text-green-900 transition hover:underline"
            >
              <ArrowLeft size={14} /> Back to All Packages
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-slate-800 font-extrabold truncate">
              {packageTitle || "Package Details"}
            </span>
          </div>
        )}

        {/* User's Exact Header Title: - Website Development in bold dark navy */}
        <div className="mb-3 sm:mb-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0a194f]">
            - {title}
          </h1>
        </div>

        {/* User's Exact Header Container:
            Solid vibrant orange background with a bright electric-blue border */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl border-4 border-[#0099ff] bg-[#f59e0b] p-5 sm:p-7 lg:p-8 shadow-lg overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Left Content Area with the exact Green Pill Badge from user mockup */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#166534] px-4 py-2 text-xs sm:text-sm font-extrabold text-white shadow-md">
                <span>{badgeText}</span>
              </div>

              {packageTitle ? (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-950/80 mb-0.5">
                    <span>{packageTier || "Nepal SME Tier"}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-amber-900">
                      <ShieldCheck size={13} /> Official Optiverse Package
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                    {packageTitle}
                  </h2>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight">
                    Fixed SME Website & Workflow Packages
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-900/80 max-w-xl leading-relaxed">
                    Clear deliverables, guaranteed timelines, and local payment gateways for Nepali businesses.
                  </p>
                </div>
              )}
            </div>

            {/* Right Price Display if on package details */}
            {startingPrice && (
              <div className="shrink-0 flex flex-col sm:items-end justify-center rounded-2xl bg-white/20 backdrop-blur-sm p-4 sm:p-5 border border-white/40 text-slate-950">
                <span className="text-[11px] uppercase font-black tracking-wider text-slate-800">
                  Fixed Investment
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 mt-0.5">
                  {startingPrice}
                </span>
                {priceSubtext && (
                  <span className="text-xs font-bold text-slate-800 mt-1">
                    {priceSubtext}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
