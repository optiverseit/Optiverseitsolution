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
  Clock,
  FileText,
} from "lucide-react";
import type { IndividualSectorCard, SectorTier } from "../../data/websitePackagesData";

interface SectorCardProps {
  sector: IndividualSectorCard;
  tier: SectorTier;
  onInquire: (sector: IndividualSectorCard, tier: SectorTier) => void;
}

export default function SectorCard({ sector, tier, onInquire }: SectorCardProps) {
  const getSectorIcon = (name: string) => {
    switch (name) {
      case "Globe":
        return <Globe className="h-5 w-5 text-emerald-600" />;
      case "Compass":
        return <Compass className="h-5 w-5 text-teal-600" />;
      case "Calendar":
        return <Calendar className="h-5 w-5 text-amber-600" />;
      case "Stethoscope":
        return <Stethoscope className="h-5 w-5 text-rose-600" />;
      case "GraduationCap":
        return <GraduationCap className="h-5 w-5 text-indigo-600" />;
      case "Utensils":
        return <Utensils className="h-5 w-5 text-orange-600" />;
      case "ShoppingBag":
        return <ShoppingBag className="h-5 w-5 text-emerald-600" />;
      case "Briefcase":
        return <Briefcase className="h-5 w-5 text-blue-600" />;
      case "Rocket":
        return <Rocket className="h-5 w-5 text-purple-600" />;
      default:
        return <Sparkles className="h-5 w-5 text-amber-600" />;
    }
  };

  const isBudget = tier.tierId === "budget";
  const isPremium = tier.tierId === "premium";

  return (
    <div className={`group relative flex flex-col justify-between rounded-2xl border bg-white shadow-2xl shadow-black/70 transition-all duration-300 hover:shadow-emerald-500/25 hover:-translate-y-1.5 text-slate-900 overflow-hidden ${
      isBudget ? "border-emerald-500 ring-2 ring-emerald-500/30" : "border-white/20 hover:border-emerald-400"
    }`}>
      {/* Top Media Image Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-900">
        <img
          src={tier.imageUrl || sector.imageUrl}
          alt={`${sector.title} - ${tier.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
        />
        {/* Subtle Gradient Scrim at bottom to give badges great contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

        {/* Repositioned Bottom Left Sector Icon */}
        <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60 z-10">
          {getSectorIcon(sector.iconName)}
        </div>

        {/* Repositioned Bottom Right Tier Badge */}
        <div className="absolute bottom-3 right-3 z-10">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-lg backdrop-blur-md ${
              isBudget
                ? "bg-[#166534] text-white border border-emerald-400"
                : isPremium
                ? "bg-slate-900/90 text-amber-300 border border-amber-400/40"
                : "bg-white/95 text-slate-800 border border-slate-300"
            }`}
          >
            {tier.name} Package
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Main Card Title */}
          <div>
            <h4 className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-[#166534] transition-colors leading-tight">
              {sector.id === "travel-tours" || sector.id === "trekking" || sector.id === "package-based-travel"
                ? "Travel & Tours, Trekking Website"
                : `${sector.title} Website`}
            </h4>
          </div>
          <p className="text-xs font-bold text-emerald-700 mt-0.5">
            {sector.subtitle} • {tier.pagesCount}
          </p>

          {/* Pricing & Timeline Pill */}
          <div className="mt-3.5 rounded-xl bg-slate-50/90 p-3 border border-slate-200/80 flex items-center justify-between text-xs transition-colors group-hover:bg-emerald-50/40 group-hover:border-emerald-200/50">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block tracking-wide">
                Price (One-Time)
              </span>
              <span className="font-black text-[#166534] text-base sm:text-lg">
                {tier.price}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-500 block flex items-center justify-end gap-1">
                <Clock size={10} /> Timeline
              </span>
              <span className="rounded-lg bg-emerald-100/90 border border-emerald-200/80 px-2 py-0.5 text-[10px] font-extrabold text-[#14532d] shadow-2xs inline-block mt-0.5">
                {tier.deliveryTimeline}
              </span>
            </div>
          </div>

          {/* Requirements & Scope */}
          <div className="mt-4">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-1.5">
              <FileText size={11} className="text-slate-400" /> Requirements & Scope
            </span>
            <ul className="space-y-1.5">
              {tier.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-snug">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Included List */}
          <div className="mt-4 space-y-2 pt-3 border-t border-slate-100">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block">
              Features Included
            </span>
            {tier.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700 font-medium">
                <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#166534] mt-0.5">
                  <Check size={9} strokeWidth={3.5} />
                </div>
                <span className="leading-tight">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={`/services/website-development/${tier.packageId}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#166534] hover:bg-[#14532d] py-2.5 px-3 text-xs font-bold text-white shadow-sm shadow-emerald-950/20 hover:shadow-md transition active:scale-[0.98]"
          >
            <span>Select Package</span>
            <ArrowRight size={13} />
          </Link>

          <button
            type="button"
            onClick={() => onInquire(sector, tier)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 p-2.5 text-slate-700 hover:text-[#166534] transition active:scale-[0.98] shadow-2xs cursor-pointer"
            title={`Inquire about ${sector.title} - ${tier.name}`}
          >
            <MessageCircle size={15} className="text-emerald-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
