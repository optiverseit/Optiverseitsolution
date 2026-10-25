// src/components/website-development/SectorGridSection.tsx
import { useState } from "react";
import {
  Globe,
  Compass,
  Calendar,
  Stethoscope,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Briefcase,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SectorCard from "./SectorCard";
import {
  individualSectorCards,
  type IndividualSectorCard,
  type SectorTier,
} from "../../data/websitePackagesData";
import darkTextureModern from "../../assets/section/dark-texture-modern.jpg";

interface SectorGridSectionProps {
  onInquireSector: (sector: IndividualSectorCard, tier: SectorTier) => void;
}

export default function SectorGridSection({ onInquireSector }: SectorGridSectionProps) {
  const [activeSectorId, setActiveSectorId] = useState<string>("travel-tours");

  const selectedSector =
    individualSectorCards.find((s) => s.id === activeSectorId) || individualSectorCards[0];

  const getTopicIcon = (name: string, isActive: boolean) => {
    const iconClass = `h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-emerald-400"}`;
    switch (name) {
      case "Globe":
        return <Globe className={iconClass} />;
      case "Compass":
        return <Compass className={iconClass} />;
      case "Calendar":
        return <Calendar className={iconClass} />;
      case "Stethoscope":
        return <Stethoscope className={iconClass} />;
      case "GraduationCap":
        return <GraduationCap className={iconClass} />;
      case "Utensils":
        return <Utensils className={iconClass} />;
      case "ShoppingBag":
        return <ShoppingBag className={iconClass} />;
      case "Briefcase":
        return <Briefcase className={iconClass} />;
      case "Rocket":
        return <Rocket className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="sectors-section" className="relative bg-[#050b14] py-16 sm:py-24 text-white overflow-hidden border-t border-b border-slate-800">
      {/* Dark Texture Overlay (Sci-Fi Tech Pattern) */}
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-45 mix-blend-luminosity"
        style={{
          backgroundImage: `url(${darkTextureModern})`,
          backgroundSize: "440px 440px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Emerald & Cyan Glow for High-End Depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(16,185,129,0.22),transparent_70%),radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(14,165,233,0.15),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-8 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-sm">
            Specialized Packages for{" "}
            <span className="text-emerald-400">Every Nepali Sector</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Select an industry below to compare its 3 tailored tiers (Starter, Budget-Friendly, and Premium) engineered for local Nepali market demands.
          </p>
        </div>

        {/* 9 Industry Topic Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {individualSectorCards.map((sector) => {
            const isActive = sector.id === activeSectorId;
            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => setActiveSectorId(sector.id)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#166534] text-white shadow-lg shadow-emerald-950/50 ring-1 ring-emerald-400 scale-102"
                    : "bg-slate-900/80 text-slate-300 hover:bg-slate-800/90 hover:text-white border border-slate-700/80 backdrop-blur-md shadow-sm"
                }`}
              >
                {getTopicIcon(sector.iconName, isActive)}
                <span>{sector.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Context Bar */}
        <div className="mb-8 rounded-2xl bg-slate-900/85 border border-slate-700/80 px-5 py-3.5 sm:py-4 shadow-xl backdrop-blur-md flex items-center">
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            {selectedSector.title} Website Packages
          </h3>
        </div>

        {/* 3 Tier Cards Side-by-Side (Starter, Budget-Friendly, Premium) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {selectedSector.tiers.map((tier) => (
            <SectorCard
              key={tier.tierId}
              sector={selectedSector}
              tier={tier}
              onInquire={onInquireSector}
            />
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 rounded-2xl bg-slate-900/85 border border-slate-700/80 p-4 sm:p-5 text-center text-xs text-slate-300 shadow-xl backdrop-blur-md flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          <span className="flex items-center gap-2 font-bold text-white">
            <CheckCircle2 size={16} className="text-emerald-400" /> 100% Mobile Responsive
          </span>
          <span className="flex items-center gap-2 font-bold text-white">
            <CheckCircle2 size={16} className="text-emerald-400" /> Secured
          </span>
          <span className="flex items-center gap-2 font-bold text-white">
            <CheckCircle2 size={16} className="text-emerald-400" /> Fast Loading
          </span>
          <span className="flex items-center gap-2 font-bold text-white">
            <CheckCircle2 size={16} className="text-emerald-400" /> WhatsApp & Viber Lead Buttons
          </span>
          <span className="flex items-center gap-2 font-bold text-white">
            <CheckCircle2 size={16} className="text-emerald-400" /> Google Business Profile Ranking
          </span>
        </div>
      </div>
    </section>
  );
}
