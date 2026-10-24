// src/components/website-development/SectorGridSection.tsx
import { useState } from "react";
import { Sparkles, Layers, CheckCircle2 } from "lucide-react";
import SectorCard from "./SectorCard";
import { individualSectorCards, type IndividualSectorCard } from "../../data/websitePackagesData";

interface SectorGridSectionProps {
  onInquireSector: (sector: IndividualSectorCard) => void;
}

export default function SectorGridSection({ onInquireSector }: SectorGridSectionProps) {
  const [filter, setFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All 9 Industries" },
    { id: "tourism", label: "Travel, Trekking & Packages" },
    { id: "health-edu", label: "Clinics & Education" },
    { id: "commerce", label: "Hospitality & E-Commerce" },
    { id: "corporate", label: "Services & Startups" },
  ];

  const getFilteredSectors = () => {
    switch (filter) {
      case "tourism":
        return individualSectorCards.filter((s) =>
          ["travel-tours", "trekking", "package-based-travel"].includes(s.id)
        );
      case "health-edu":
        return individualSectorCards.filter((s) =>
          ["clinic-dental", "school-college-consultancy"].includes(s.id)
        );
      case "commerce":
        return individualSectorCards.filter((s) =>
          ["hotel-restaurant", "retail-ecommerce"].includes(s.id)
        );
      case "corporate":
        return individualSectorCards.filter((s) =>
          ["construction-legal-accounting", "startup-growing-company"].includes(s.id)
        );
      default:
        return individualSectorCards;
    }
  };

  const sectors = getFilteredSectors();

  return (
    <section id="sectors-section" className="relative bg-[#071328] py-16 sm:py-20 text-white overflow-hidden border-t border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(22,101,52,0.3),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.15),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 space-y-3">


          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Specialized Packages for{" "}
            <span className="text-emerald-400">Every Nepali Sector</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Click any sector card below to view its tailored workflows, recommended tier, and pricing engineered for local Nepali market demands.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                filter === tab.id
                  ? "bg-[#166534] text-white shadow-md shadow-green-950/30 ring-1 ring-emerald-400"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 9 Individual Sector Cards Grid (Compact & Sleek) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {sectors.map((sector) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              onInquire={onInquireSector}
            />
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-10 rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center text-xs text-slate-300 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5 font-bold text-white">
            <CheckCircle2 size={14} className="text-emerald-400" /> 100% Mobile 4G Fast Loading
          </span>
          <span className="flex items-center gap-1.5 font-bold text-white">
            <CheckCircle2 size={14} className="text-emerald-400" /> WhatsApp & Viber Lead Buttons
          </span>
          <span className="flex items-center gap-1.5 font-bold text-white">
            <CheckCircle2 size={14} className="text-emerald-400" /> Google Business Profile Ranking
          </span>
        </div>
      </div>
    </section>
  );
}
