// src/components/website-development/PackageComparisonTable.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Sparkles, Filter } from "lucide-react";
import { comparisonMatrix } from "../../data/websitePackagesData";

export default function PackageComparisonTable() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterCategories = [
    { id: "all", label: "All Features (Full Matrix)" },
    { id: "core", label: "Architecture & Pages" },
    { id: "leads", label: "Lead Capture & Workflows" },
    { id: "marketing", label: "Marketing & Video Studio" },
    { id: "system", label: "Payments, DB & Support" },
  ];

  const getFilteredRows = () => {
    switch (activeFilter) {
      case "core":
        return comparisonMatrix.filter((r) =>
          ["Suitable For", "Starting Price", "Delivery Timeline", "Total Page Architecture", "Content Management System (CMS)", "Mobile-First Responsive Design"].includes(r.feature)
        );
      case "leads":
        return comparisonMatrix.filter((r) =>
          ["WhatsApp & Viber Quick-Chat", "Google Business Profile Setup", "On-Page SEO Optimization"].includes(r.feature)
        );
      case "marketing":
        return comparisonMatrix.filter((r) =>
          ["Social Media Posts (Monthly)", "Video Reels Production", "Meta Ads Campaign Setup"].includes(r.feature)
        );
      case "system":
        return comparisonMatrix.filter((r) =>
          ["Local Digital Payments (eSewa/Khalti)", "Admin Management Dashboard", "Database & Workflow Engine", "Technical Support Duration", "Ongoing Maintenance Options"].includes(r.feature)
        );
      default:
        return comparisonMatrix;
    }
  };

  const rows = getFilteredRows();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#166534]">
            Transparent Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Detailed Package Feature Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore side-by-side technical, creative, and ongoing maintenance capabilities across each package tier.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                activeFilter === cat.id
                  ? "bg-[#166534] text-white shadow-md shadow-green-950/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-xl [scrollbar-width:thin]">
          <table className="w-full min-w-[780px] text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="py-5 px-6 text-sm font-black w-1/4">Inclusions & Capabilities</th>
                <th className="py-5 px-6 text-sm font-bold w-1/4 text-center">
                  <div className="font-black text-base">Starter Website</div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">24,999/-</div>
                </th>
                <th className="py-5 px-6 text-sm font-bold w-1/4 text-center bg-[#166534] relative">
                  <div className="font-black text-base">Growth + SEO Website</div>
                  <div className="text-xs font-semibold text-green-100 mt-0.5">44,999/-</div>
                </th>
                <th className="py-5 px-6 text-sm font-bold w-1/4 text-center">
                  <div className="font-black text-base">Custom Systems</div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">Based on Requirements</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-slate-700">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/80 hover:bg-slate-100/60"}
                >
                  <td className="py-4 px-6 font-bold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center text-slate-600 font-medium">
                    {row.starter}
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-slate-900 bg-green-50/50">
                    {row.growth}
                  </td>
                  <td className="py-4 px-6 text-center text-slate-600 font-medium">
                    {row.custom}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-100 border-t-2 border-gray-200">
                <td className="py-5 px-6 font-bold text-slate-900">
                  Ready to proceed?
                </td>
                <td className="py-5 px-6 text-center">
                  <Link
                    to="/services/website-development/starter-website"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#166534] hover:underline"
                  >
                    View Starter <ArrowRight size={13} />
                  </Link>
                </td>
                <td className="py-5 px-6 text-center bg-green-50/80">
                  <Link
                    to="/services/website-development/growth-website-marketing"
                    className="inline-flex items-center gap-1 rounded-xl bg-[#166534] px-4 py-2.5 text-xs font-black text-white hover:bg-[#14532d] shadow-md"
                  >
                    View Growth Package <ArrowRight size={13} />
                  </Link>
                </td>
                <td className="py-5 px-6 text-center">
                  <Link
                    to="/services/website-development/custom-business-system"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:underline"
                  >
                    View Custom System <ArrowRight size={13} />
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
