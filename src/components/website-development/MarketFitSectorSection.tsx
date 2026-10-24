// src/components/website-development/MarketFitSectorSection.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { sectorMarketFitData, type SectorMarketFit } from "../../data/websitePackagesData";

export default function MarketFitSectorSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="h-5 w-5" />;
      case "Stethoscope":
        return <Stethoscope className="h-5 w-5" />;
      case "ShoppingBag":
        return <ShoppingBag className="h-5 w-5" />;
      case "Briefcase":
        return <Briefcase className="h-5 w-5" />;
      case "Rocket":
        return <Rocket className="h-5 w-5" />;
      default:
        return <Sparkles className="h-5 w-5" />;
    }
  };

  const selected = sectorMarketFitData[activeIdx];

  return (
    <section className="relative bg-[#071328] py-16 sm:py-24 text-white overflow-hidden border-t border-b border-slate-800">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(22,101,52,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.18),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 space-y-3">


          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Engineered for Nepali{" "}
            <span className="text-emerald-400">Buying Patterns</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
            Nepali SMEs don't need generic brochure websites. They need lead engines built for WhatsApp & Viber culture, local payment gateways, Google Maps search, and viral video reels.
          </p>
        </div>

        {/* Sector Interactive Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {sectorMarketFitData.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2.5 rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#166534] text-white shadow-xl shadow-green-950/50 ring-2 ring-emerald-400 scale-105"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700"
                }`}
              >
                <span className={isActive ? "text-yellow-300" : "text-emerald-400"}>
                  {getIcon(item.iconName)}
                </span>
                <span>{item.buyerGroup.split(",")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Feature Panel for Selected Sector */}
        <div className="rounded-3xl border border-slate-700 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Sector Insights */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400 block mb-1">
                  Selected Sector
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {selected.buyerGroup}
                </h3>
              </div>

              {/* Core Business Need Card */}
              <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Main Business Need in Nepal
                </span>
                <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">
                  {selected.mainNeed}
                </p>
              </div>

              {/* Strategic Fit in Nepal */}
              <div className="rounded-2xl bg-emerald-950/20 p-5 border border-emerald-500/30 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                  Why It Fits The Nepali Reality
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  {selected.whyItFits}
                </p>
              </div>
            </div>

            {/* Right Column: Recommended Package Card */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-300 mb-3">
                  <Sparkles size={13} />
                  <span>Optimal Optiverse Package</span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-white">
                  {selected.bestPackage}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Engineered with specialized modules, instant lead capture, and marketing deliverables designed specifically for {selected.buyerGroup.split(",")[0]}.
                </p>

                <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Direct WhatsApp & Viber integration</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Google Business Profile local SEO ranking</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Mobile-first 4G ultra-fast performance</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-700/80">
                <Link
                  to={`/services/website-development/${selected.packageId}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-xs sm:text-sm font-black text-slate-950 hover:bg-emerald-300 transition shadow-lg shadow-green-950/40"
                >
                  <span>View {selected.bestPackage.split(" ")[0]} Package Details</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
