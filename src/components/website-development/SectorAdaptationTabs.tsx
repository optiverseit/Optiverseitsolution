// src/components/website-development/SectorAdaptationTabs.tsx
import { useState } from "react";
import {
  Compass,
  Stethoscope,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Briefcase,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import type { SectorAdaptation } from "../../data/websitePackagesData";

interface SectorAdaptationTabsProps {
  adaptations: SectorAdaptation[];
  packageName: string;
}

export default function SectorAdaptationTabs({
  adaptations,
  packageName,
}: SectorAdaptationTabsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const getSectorIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass className="h-5 w-5" />;
      case "Stethoscope":
        return <Stethoscope className="h-5 w-5" />;
      case "GraduationCap":
        return <GraduationCap className="h-5 w-5" />;
      case "Utensils":
        return <Utensils className="h-5 w-5" />;
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

  const current = adaptations[activeIdx] || adaptations[0];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-lg">
      <div className="mb-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">
          Sector-Specific Adaptations
        </span>
        <h3 className="mt-1 text-2xl font-black text-slate-900">
          How the {packageName} Adapts to Your Industry
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
          Select your business category to see the customized workflows, pages, and integrations included.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-gray-100">
        {adaptations.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition ${
              activeIdx === idx
                ? "bg-[#166534] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <span>{getSectorIcon(item.iconName)}</span>
            <span>{item.sector.split("/")[0]}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Panel */}
      <div className="mt-6 rounded-2xl bg-gradient-to-r from-green-50/70 to-emerald-50/40 p-6 border border-green-200/60">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-md">
            {getSectorIcon(current.iconName)}
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#166534]">
              {packageName} Specialized Blueprint
            </span>
            <h4 className="text-xl font-black text-slate-900 mt-0.5">
              {current.sector}
            </h4>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
              {current.adaptation}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#166534]">
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 border border-green-200 shadow-2xs">
                <CheckCircle2 size={13} /> Tailored UI Wireframes
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 border border-green-200 shadow-2xs">
                <CheckCircle2 size={13} /> Mobile 4G Fast Loading
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 border border-green-200 shadow-2xs">
                <CheckCircle2 size={13} /> Custom Inquiries Funnel
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
