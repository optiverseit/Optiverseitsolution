// src/components/website-development/SectorCard.tsx
import { Link } from "react-router-dom";
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
  Check,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import type { IndividualSectorCard } from "../../data/websitePackagesData";

interface SectorCardProps {
  sector: IndividualSectorCard;
  onInquire: (sector: IndividualSectorCard) => void;
}

export default function SectorCard({ sector, onInquire }: SectorCardProps) {
  const getSectorIcon = (name: string) => {
    switch (name) {
      case "Globe":
        return <Globe className="h-5 w-5 text-emerald-400" />;
      case "Compass":
        return <Compass className="h-5 w-5 text-cyan-400" />;
      case "Calendar":
        return <Calendar className="h-5 w-5 text-amber-400" />;
      case "Stethoscope":
        return <Stethoscope className="h-5 w-5 text-rose-400" />;
      case "GraduationCap":
        return <GraduationCap className="h-5 w-5 text-indigo-400" />;
      case "Utensils":
        return <Utensils className="h-5 w-5 text-orange-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="h-5 w-5 text-emerald-400" />;
      case "Briefcase":
        return <Briefcase className="h-5 w-5 text-blue-400" />;
      case "Rocket":
        return <Rocket className="h-5 w-5 text-purple-400" />;
      default:
        return <Sparkles className="h-5 w-5 text-yellow-400" />;
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 transition-all duration-200 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-green-950/20 text-white">
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition">
            {getSectorIcon(sector.iconName)}
          </div>
          <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-slate-300">
            {sector.badge}
          </span>
        </div>

        <h4 className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-emerald-300 transition">
          {sector.title}
        </h4>
        <p className="text-xs font-semibold text-emerald-400/90 mt-0.5">
          {sector.subtitle}
        </p>

        {/* Recommended Package Tag */}
        <div className="mt-3 rounded-lg bg-white/5 p-2.5 border border-white/5 flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">
              Best Package
            </span>
            <span className="font-extrabold text-white text-xs">
              {sector.bestPackage}
            </span>
          </div>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[11px] font-black text-emerald-300">
            {sector.startingPrice}
          </span>
        </div>

        {/* Concise Need & Nepal Fit */}
        <p className="mt-3 text-xs text-slate-300 leading-relaxed line-clamp-2">
          {sector.whyItFits}
        </p>

        {/* 3 Key Feature Checkmarks */}
        <div className="mt-3.5 space-y-1.5 pt-2 border-t border-slate-800">
          {sector.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
              <Check size={11} className="text-emerald-400 shrink-0 mt-0.5" strokeWidth={3} />
              <span className="leading-tight">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
        <Link
          to={`/services/website-development/${sector.packageId}`}
          className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#166534] py-2 px-2.5 text-[11px] font-bold text-white hover:bg-[#14532d] transition"
        >
          <span>View Package</span>
          <ArrowRight size={12} />
        </Link>

        <button
          type="button"
          onClick={() => onInquire(sector)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-white/5 p-2 text-slate-300 hover:text-white hover:bg-white/10 transition"
          title="Quick Inquire"
        >
          <MessageCircle size={13} className="text-emerald-400" />
        </button>
      </div>
    </div>
  );
}
