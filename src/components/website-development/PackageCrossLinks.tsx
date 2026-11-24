// src/components/website-development/PackageCrossLinks.tsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Layers,
  ArrowUpRight,
  MessageCircle,
  Calendar,
  Compass,
} from "lucide-react";
import type { WebsitePackage, PackageCrossLink } from "../../data/websitePackagesData";

interface PackageCrossLinksProps {
  currentPkg: WebsitePackage;
  onOpenAudit?: () => void;
}

export default function PackageCrossLinks({
  currentPkg,
  onOpenAudit,
}: PackageCrossLinksProps) {
  const crossLinks = currentPkg.crossLinks || [];

  if (crossLinks.length === 0) return null;

  const getBadgeStyle = (targetId: string) => {
    if (targetId === "growth-website-marketing" || targetId.includes("-growth-")) {
      return {
        badgeBg: "bg-emerald-100 text-[#166534] border border-emerald-300",
        cardBorder: "border-[#166534]/50 hover:border-[#166534]",
        btnBg: "bg-[#166534] hover:bg-[#14532d] text-white shadow-emerald-950/20",
        priceColor: "text-[#166534]",
        icon: <Sparkles size={14} className="text-amber-500 fill-amber-500" />,
      };
    }
    if (targetId === "custom-business-system" || targetId.includes("-custom-")) {
      return {
        badgeBg: "bg-cyan-100 text-cyan-900 border border-cyan-300",
        cardBorder: "border-cyan-400/50 hover:border-cyan-600",
        btnBg: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-950/20",
        priceColor: "text-cyan-800",
        icon: <Layers size={14} className="text-cyan-600" />,
      };
    }
    // Starter
    return {
      badgeBg: "bg-amber-100 text-amber-900 border border-amber-300",
      cardBorder: "border-amber-300/60 hover:border-amber-500",
      btnBg: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-950/20",
      priceColor: "text-slate-900",
      icon: <Zap size={14} className="text-amber-600 fill-amber-600" />,
    };
  };

  return (
    <section className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t-2 border-slate-200">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#166534] border border-emerald-200/80 shadow-2xs">
          <Compass size={14} />
          <span>Compare & Explore Based on Your Needs</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          Not Sure If {currentPkg.name} Is the Perfect Fit?
        </h3>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          Depending on your current business stage, technical scope, and budget, another Optiverse package may match your goals more closely.
        </p>
      </div>

      {/* Cards Grid: Links to other packages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {crossLinks.map((link: PackageCrossLink, idx: number) => {
          const style = getBadgeStyle(link.targetPackageId);

          return (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-3xl border-2 bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${style.cardBorder}`}
            >
              <div className="space-y-5">
                {/* Interest Badge & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider ${style.badgeBg}`}
                  >
                    {style.icon}
                    <span>{link.interestBadge}</span>
                  </span>

                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    Alternative Tier
                  </span>
                </div>

                {/* Interest Trigger Question */}
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                    {link.interestTrigger}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {link.description}
                  </p>
                </div>

                {/* Target Package & Pricing Strip */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Recommended Package
                    </span>
                    <span className="text-base sm:text-lg font-black text-slate-900">
                      {link.targetPackageName}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Starting Investment
                    </span>
                    <span className={`text-base sm:text-lg font-black ${style.priceColor}`}>
                      {link.targetPrice}
                    </span>
                  </div>
                </div>

                {/* Key Inclusions Matching User Interest */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                    Why users choose this package:
                  </span>
                  <div className="space-y-2">
                    {link.keyHighlights.map((hl: string, hIdx: number) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#166534]">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="font-semibold leading-tight">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Direct Backlink */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Link
                  to={`/services/website-development/${link.targetPackageId}`}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-5 text-xs sm:text-sm font-black transition-all shadow-md active:scale-[0.98] ${style.btnBg}`}
                >
                  <span>{link.ctaText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Helpful Consultation Bottom Banner */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#166534] p-5 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
        <div className="space-y-1 text-center md:text-left">
          <h5 className="text-sm sm:text-base font-black text-white">
            Want an expert recommendation tailored to your exact industry?
          </h5>
          <p className="text-xs text-slate-300">
            Tell our Kathmandu team your business category, and we will tell you which package gives you the highest ROI.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {onOpenAudit && (
            <button
              type="button"
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white text-slate-900 px-4 py-2.5 text-xs font-black hover:bg-slate-100 transition shadow"
            >
              <Calendar size={13} />
              <span>Book 30-Min Audit</span>
            </button>
          )}

          <a
            href="https://wa.me/9779803713931?text=Hello%20Optiverse,%20I%20am%20comparing%20your%20SME%20packages%20and%20need%20a%20recommendation%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2.5 text-xs font-bold transition shadow"
          >
            <MessageCircle size={13} />
            <span>WhatsApp Quick Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
