// src/components/website-development/NepalPaymentSection.tsx
import { useState } from "react";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Percent,
  Calendar,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { nepalPaymentMethods, websitePackages } from "../../data/websitePackagesData";

export default function NepalPaymentSection() {
  const [activeTier, setActiveTier] = useState<string>("growth-website-marketing");

  const selectedPkg = websitePackages.find((p) => p.id === activeTier) || websitePackages[1];

  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-t border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 space-y-3">


          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Transparent Milestone Payments & Local Gateways
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            We operate on a 100% transparent milestone-based release model. You inspect approved work at each stage before releasing the next payment.
          </p>
        </div>

        {/* Local Payment Gateways Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-12">
          {nepalPaymentMethods.map((method, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-5 transition hover:shadow-lg bg-white ${method.borderColor} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-lg font-black ${method.textColor}`}>
                    {method.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase rounded px-2 py-0.5 bg-slate-100 text-slate-600">
                    Nepal
                  </span>
                </div>
                <span className="inline-block text-xs font-extrabold text-slate-800 mb-1">
                  {method.badge}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Roadmap Container */}
        <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#166534]">
                Interactive Payment Stages
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">
                Milestones for: {selectedPkg.name}
              </h3>
            </div>

            {/* Tier Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {websitePackages.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setActiveTier(pkg.id)}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                    activeTier === pkg.id
                      ? "bg-[#166534] text-white shadow-md shadow-green-950/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {pkg.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Visual Milestone Stages */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedPkg.paymentStructure.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border-2 border-emerald-500/20 bg-gradient-to-b from-white to-green-50/20 p-5 flex flex-col justify-between shadow-sm hover:border-emerald-500/50 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#166534] text-xs font-black text-white shadow">
                      {idx + 1}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-[#166534]">
                      {step.percentage}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-slate-900 mb-1">
                    {step.stage}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {step.note}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                  <CheckCircle2 size={13} className="text-[#166534]" />
                  <span>Verified stage approval</span>
                </div>
              </div>
            ))}
          </div>

          {/* Maintenance & VAT Info Strip */}
          <div className="mt-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow">
                <Percent size={22} />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  5% to 10% Quarterly & Annual Maintenance Savings
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  {selectedPkg.paymentStructure.maintenanceNote} Save up to 10% by opting for quarterly or annual advance billing.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-slate-800 bg-white px-4 py-2.5 rounded-xl border border-amber-200 shadow-xs">
              <ShieldCheck size={16} className="text-[#166534]" />
              <span>Full Corporate VAT Bill Provided</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
