// src/components/website-development/PackageCard.tsx
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Clock,
  Zap,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import type { WebsitePackage } from "../../data/websitePackagesData";

interface PackageCardProps {
  pkg: WebsitePackage;
  onSelectForInquiry: (pkg: WebsitePackage) => void;
}

export default function PackageCard({ pkg, onSelectForInquiry }: PackageCardProps) {
  const isGrowth = pkg.id === "growth-website-marketing";
  const isCustom = pkg.id === "custom-business-system";

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl transition-all duration-300 bg-white ${
        isGrowth
          ? "border-2 border-[#166534] shadow-xl shadow-green-950/10 ring-4 ring-emerald-500/10 hover:shadow-2xl lg:-translate-y-1.5 z-10"
          : "border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300"
      }`}
    >
      {/* Top Floating Badge */}
      {isGrowth && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center rounded-full bg-[#166534] px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md shadow-green-950/30 whitespace-nowrap">
            Recommended
          </span>
        </div>
      )}

      {!isGrowth && pkg.badge && (
        <div className="absolute -top-3 left-6 z-10">
          <span
            className={`inline-block rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-xs ${
              isCustom
                ? "bg-cyan-50 text-cyan-800 border border-cyan-200"
                : "bg-slate-100 text-slate-700 border border-slate-200"
            }`}
          >
            {pkg.badge}
          </span>
        </div>
      )}

      {/* Main Body */}
      <div className="p-5 sm:p-6 pb-4 space-y-3.5">
        {/* Tier & Timeline Header */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <span
            className={`text-[10px] font-black uppercase tracking-wider rounded-md px-2 py-0.5 ${
              isGrowth
                ? "bg-emerald-50 text-[#166534] border border-emerald-200"
                : isCustom
                ? "bg-cyan-50 text-cyan-800 border border-cyan-200"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {pkg.tier.split("/")[0]}
          </span>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
            <Clock size={12} className={isGrowth ? "text-[#166534]" : "text-slate-400"} />
            <span>{pkg.timeline.split("after")[0].trim()}</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
            {pkg.name}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 line-clamp-2">
            {pkg.tagline}
          </p>
        </div>

        {/* Refined, Compact Price Box (Price kept small & clean) */}
        <div
          className={`rounded-xl p-3 border transition ${
            isGrowth
              ? "bg-emerald-50/80 border-emerald-200"
              : "bg-slate-50 border-slate-200/80"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-baseline gap-1.5">
              {!isCustom && (
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  NPR
                </span>
              )}
              {/* Reduced price size: text-lg sm:text-xl */}
              <span
                className={`font-black tracking-tight ${
                  isGrowth
                    ? "text-lg sm:text-xl text-[#166534]"
                    : isCustom
                    ? "text-sm sm:text-base text-slate-900"
                    : "text-lg sm:text-xl text-slate-900"
                }`}
              >
                {pkg.startingPrice}
              </span>
            </div>

            <span
              className={`text-[9px] font-bold uppercase rounded px-2 py-0.5 tracking-wider shrink-0 ${
                isGrowth
                  ? "bg-emerald-100 text-[#166534] border border-emerald-200"
                  : isCustom
                  ? "bg-cyan-100 text-cyan-800 border border-cyan-200"
                  : "bg-emerald-50 text-emerald-800 border border-emerald-200"
              }`}
            >
              {pkg.priceBadge || (isGrowth ? "Reasonable Pricing" : isCustom ? "Custom Scope" : "Budget-Friendly")}
            </span>
          </div>

          <div className="mt-1.5 text-[11px] text-slate-500 font-medium">
            <span>{pkg.priceSubtext}</span>
          </div>
        </div>

        {/* Target Audience */}
        <div
          className={`rounded-lg p-2.5 text-[11px] ${
            isGrowth ? "bg-emerald-50/60 border border-emerald-100 text-slate-700" : "bg-slate-100/70 text-slate-600"
          }`}
        >
          <strong className="text-slate-900 font-bold">Best for: </strong>
          <span className="line-clamp-2">{pkg.bestFor}</span>
        </div>

        {/* Key Features List */}
        <div className="space-y-1.5 pt-1">
          {pkg.summaryHighlights.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs">
              <div
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                  isGrowth
                    ? "bg-[#166534] text-white"
                    : "bg-emerald-100 text-[#166534]"
                }`}
              >
                <Check size={10} strokeWidth={3} />
              </div>
              <span className="leading-tight font-medium text-slate-700">
                {feat}
              </span>
            </div>
          ))}
        </div>

        {/* Specialized Feature Callout */}
        {isGrowth && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200/80 p-2.5 text-xs text-emerald-950">
            <div className="flex items-center gap-1 font-bold text-[#166534] text-[11px] mb-0.5">
              <Zap size={12} className="text-[#166534]" />
              <span>API & Dynamic Engine Included</span>
            </div>
            <p className="text-emerald-900/90 text-[11px] leading-tight font-medium">
              Static and Dynamic pages through api Integration
            </p>
          </div>
        )}

        {isCustom && (
          <div className="rounded-xl bg-cyan-50 border border-cyan-200/80 p-2.5 text-xs text-cyan-950">
            <div className="flex items-center gap-1 font-bold text-cyan-800 text-[11px] mb-0.5">
              <Zap size={12} className="text-cyan-600" />
              <span>9 Custom SME Modules</span>
            </div>
            <p className="text-cyan-900/90 text-[11px] leading-tight font-medium">
              eSewa/Khalti checkout, bookings & role-based portals.
            </p>
          </div>
        )}

        {!isGrowth && !isCustom && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200/80 p-2.5 text-xs text-emerald-950">
            <div className="flex items-center gap-1 font-bold text-[#166534] text-[11px] mb-0.5">
              <ShieldCheck size={12} className="text-[#166534]" />
              <span>100% Milestone-Based Release</span>
            </div>
            <p className="text-emerald-900/90 text-[11px] leading-tight font-medium">
              Pay 50% advance and 50% only after full approval & launch.
            </p>
          </div>
        )}
      </div>

      {/* Action Footer Buttons */}
      <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 space-y-2">
        <Link
          to={`/services/website-development/${pkg.id}`}
          className={`flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 px-4 text-xs font-black transition shadow-sm ${
            isGrowth
              ? "bg-[#166534] text-white hover:bg-[#14532d] shadow-green-950/20"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          <span>View Full Deliverables</span>
          <ArrowRight size={13} />
        </Link>

        <button
          type="button"
          onClick={() => onSelectForInquiry(pkg)}
          className="group flex w-full items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold transition-all duration-200 cursor-pointer border border-slate-200 bg-white text-slate-700 hover:border-[#166534] hover:bg-emerald-50 hover:text-[#166534] hover:shadow-md hover:shadow-emerald-950/10 active:scale-[0.98]"
        >
          <MessageCircle size={14} className="text-slate-400 transition-transform duration-200 group-hover:text-[#166534] group-hover:scale-110" />
          <span>Quick Inquiry</span>
        </button>
      </div>
    </div>
  );
}
