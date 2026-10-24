// src/components/website-development/AuditCTASection.tsx
import { Sparkles, Calendar, MessageSquare, CheckCircle2, ShieldCheck } from "lucide-react";
import { strategicPositioning } from "../../data/websitePackagesData";

interface AuditCTASectionProps {
  onOpenAuditModal: () => void;
}

export default function AuditCTASection({ onOpenAuditModal }: AuditCTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#040c06] via-[#07190f] to-[#040c06] py-16 sm:py-24 text-white border-t border-slate-800">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Strategic Positioning Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold leading-relaxed tracking-tight text-white">
              Optiverse helps Nepali businesses{" "}
              <span className="text-emerald-400 font-extrabold">launch, attract customers, and grow online</span>
              —with a website, local SEO, social media, video content, and business systems in one place.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              {strategicPositioning.subtext}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Zero template lock-in or hidden costs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Google Maps & Local SEO supremacy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>In-house video reels studio in Kathmandu</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>eSewa & Khalti native workflow integrations</span>
              </div>
            </div>
          </div>

          {/* Right: Free 30-Minute Digital Presence Audit Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border-2 border-emerald-500/40 bg-slate-900/90 backdrop-blur-xl p-7 sm:p-9 shadow-2xl text-white space-y-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-400 text-slate-950 px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow">
                  100% Free Consultation
                </span>
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Claim Your Free 30-Min Audit
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Skip generic sales calls. Our senior web engineers will audit your online presence, analyze local competitors, and give you a 3-step action roadmap.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-4 px-5 text-sm font-black text-slate-950 hover:from-emerald-400 hover:to-green-500 transition shadow-xl shadow-green-950/50"
                >
                  <Calendar size={16} />
                  <span>Book Free 30-Min Strategy Audit</span>
                </button>

                <a
                  href="https://wa.me/9779803713931?text=Hi%20Optiverse,%20I%20would%20like%20to%20book%20a%20Free%2030-Minute%20Digital%20Presence%20Audit%20for%20my%20business."
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 py-3 px-5 text-xs sm:text-sm font-bold text-white hover:bg-slate-700 transition"
                >
                  <MessageSquare size={16} className="text-emerald-400" />
                  <span>Chat with an Engineer on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Strictly no obligation to purchase. Jawalakhel, Lalitpur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
