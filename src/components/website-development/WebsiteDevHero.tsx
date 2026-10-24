// src/components/website-development/WebsiteDevHero.tsx
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import webDevHeroBg from "../../assets/hero/web_dev_hero_bg.jpg";

interface WebsiteDevHeroProps {
  onOpenAudit: () => void;
}

export default function WebsiteDevHero({ onOpenAudit }: WebsiteDevHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#020704] pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 text-white min-h-[600px] lg:min-h-[660px] flex items-center">
      {/* Background High-Res 3D Web Dev Visual with Nepal Stupa & Himalayas (Preserved 100%) */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-right lg:bg-right bg-no-repeat opacity-95 transition-all duration-700 select-none"
        style={{ backgroundImage: `url(${webDevHeroBg})` }}
        aria-hidden="true"
      />

      {/* Smooth Dark Scrim for Pristine Left-Side Typography Readability */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020704] via-[#020704]/90 to-transparent sm:from-[#020704]/98 sm:via-[#020704]/80 sm:to-transparent"
        aria-hidden="true"
      />

      {/* Subtle Top & Bottom Blends */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#040816]/70 via-transparent to-[#040a05]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-2xl text-left">
          {/* Main Title with Clean, Authoritative Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.14] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            Websites & Business Systems{" "}
            <span className="text-[#22c55e]">Engineered for Nepal</span>
          </h1>

          {/* Clean Subtitle */}
          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/90 font-normal drop-shadow-sm">
            Get a modern, mobile-first website designed to generate real customer inquiries across Nepal. Transparent pricing with guaranteed delivery, local payment gateways, Google Maps ranking, and dedicated support.
          </p>

          {/* Clean Trust Highlights Row */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-slate-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#22c55e] shrink-0" />
              100% Milestone-Based Release
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#22c55e] shrink-0" />
              eSewa, Khalti & Fonepay Ready
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#22c55e] shrink-0" />
              Guaranteed 15–20 Day Launch
            </span>
          </div>

          {/* Primary & Secondary Action Buttons (Optiverse Signature Styling) */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="#packages-section"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl shadow-amber-950/30 transition hover:scale-105"
            >
              <span>Explore The 3 SME Packages</span>
              <ArrowRight size={16} />
            </a>

            <button
              type="button"
              onClick={onOpenAudit}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition cursor-pointer"
            >
              <span>Book Free 30-Min Audit</span>
            </button>
          </div>

          {/* Sleek Floating Tier Navigation Bar */}
          <div className="mt-10 pt-6 border-t border-white/15 max-w-xl">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Fixed SME Tiers:
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              <a
                href="#packages-section"
                className="group flex flex-col rounded-xl border border-white/10 bg-black/40 hover:bg-white/10 hover:border-emerald-400/40 backdrop-blur-md p-3 transition"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-300">
                  Starter Website
                </span>
                <span className="text-sm font-black text-white mt-0.5">
                  24,999/-
                </span>
              </a>

              <a
                href="#packages-section"
                className="group flex flex-col rounded-xl border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 backdrop-blur-md p-3 transition ring-1 ring-emerald-500/30"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  Growth + SEO Website
                </span>
                <span className="text-sm font-black text-white mt-0.5">
                  44,999/-
                </span>
              </a>

              <a
                href="#packages-section"
                className="group flex flex-col rounded-xl border border-white/10 bg-black/40 hover:bg-white/10 hover:border-cyan-400/40 backdrop-blur-md p-3 transition"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-cyan-300">
                  Custom Systems
                </span>
                <span className="text-xs sm:text-sm font-black text-white mt-0.5 leading-tight">
                  Based on Requirements
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
