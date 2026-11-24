// src/components/website-development/PackageInquiryModal.tsx
import { useState, useEffect } from "react";
import { X, Send, MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { coreWebsitePackages, websitePackages, type WebsitePackage } from "../../data/websitePackagesData";

interface PackageInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: WebsitePackage | null;
  initialSector?: string;
  isAudit?: boolean;
}

export default function PackageInquiryModal({
  isOpen,
  onClose,
  initialPackage,
  initialSector,
  isAudit = false,
}: PackageInquiryModalProps) {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    initialPackage ? initialPackage.id : "growth-website-marketing"
  );
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [sector, setSector] = useState(initialSector || "Travel / Tourism");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Group related packages for modal's quick selection
  const modalPackageList = initialPackage
    ? websitePackages.filter((p) => {
        if (initialPackage.id.startsWith("travel-")) return p.id.startsWith("travel-");
        if (initialPackage.id.startsWith("clinic-")) return p.id.startsWith("clinic-");
        if (initialPackage.id.startsWith("school-")) return p.id.startsWith("school-");
        if (initialPackage.id.startsWith("hotel-")) return p.id.startsWith("hotel-");
        if (initialPackage.id.startsWith("retail-")) return p.id.startsWith("retail-");
        if (initialPackage.id.startsWith("corporate-")) return p.id.startsWith("corporate-");
        if (initialPackage.id.startsWith("startup-")) return p.id.startsWith("startup-");
        return coreWebsitePackages.some((cp) => cp.id === p.id);
      })
    : coreWebsitePackages;

  useEffect(() => {
    if (initialPackage) {
      setSelectedPkgId(initialPackage.id);
    }
    if (initialSector) {
      setSector(initialSector);
    }
  }, [initialPackage, initialSector]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPkg = websitePackages.find((p) => p.id === selectedPkgId) || websitePackages[1];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      await fetch("https://formsubmit.co/optiverseitsolution@gmail.com", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          _subject: isAudit
            ? `Audit Request: ${fullName || "Client"} (${businessName || phone})`
            : `Inquiry: ${currentPkg.name} - ${fullName || "Client"} (${phone})`,
          "Full Name": fullName || "Client",
          "Phone / WhatsApp": phone || "Not provided",
          "Business Name": businessName || "Not provided",
          "Industry / Sector": sector,
          "Email Address": email || "Not provided",
          "Selected Package": currentPkg.name,
          "Package Price": currentPkg.startingPrice,
          "Project Notes": message || "No additional notes",
          _template: "table",
          _captcha: "false",
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
    } catch (err) {
      console.warn("Package inquiry dispatched:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const generateWhatsAppUrl = () => {
    const text = isAudit
      ? `Hello Optiverse IT Solution, I would like to book a Free 30-Minute Digital Presence Audit.\nName: ${fullName || "Client"}\nBusiness: ${businessName || "My Business"}\nPhone: ${phone}\nSector: ${sector}`
      : `Hello Optiverse IT Solution, I am inquiring about the "${currentPkg.name}" package (${currentPkg.startingPrice}).\nName: ${fullName || "Client"}\nBusiness: ${businessName || "My Business"}\nPhone: ${phone}\nSector: ${sector}`;
    return `https://wa.me/9779803713931?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
      <div
        className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#166534] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-green-200">
              {isAudit ? "Complimentary Strategy Session" : "Direct SME Package Inquiry"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              {isAudit ? "Book Your Free 30-Min Audit" : `Inquire: ${currentPkg.name}`}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-[#166534]">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-2xl font-black text-slate-900">
              Inquiry Received Successfully!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Dhanyabad! An Optiverse senior consultant will contact you via WhatsApp/Phone at{" "}
              <strong className="text-slate-900">{phone || "+977"}</strong> within 2 hours with tailored recommendations.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:bg-emerald-600 transition shadow"
              >
                <MessageCircle size={16} />
                <span>Open Instant WhatsApp Chat</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-7 space-y-4 max-h-[75vh] overflow-y-auto"
          >
              {/* FormSubmit Configuration */}
              <input
                type="hidden"
                name="_subject"
                value={
                  isAudit
                    ? `Audit Request: ${fullName || "Client"} (${businessName || phone})`
                    : `Inquiry: ${currentPkg.name} - ${fullName || "Client"} (${phone})`
                }
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="Inquiry Type"
                value={isAudit ? "Free 30-Min Audit" : "SME Package Inquiry"}
              />
              <input
                type="hidden"
                name="Selected Package"
                value={`${currentPkg.name} (${currentPkg.startingPrice})`}
              />
            {!isAudit && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Select Desired Package
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {modalPackageList.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPkgId(p.id)}
                      className={`rounded-xl p-2.5 text-left border text-xs font-bold transition ${
                        selectedPkgId === p.id
                          ? "border-[#166534] bg-green-50 text-[#166534] shadow-2xs"
                          : "border-gray-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="truncate">{p.name.split(" ")[0]}</div>
                      <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                        {p.startingPrice}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  name="Full Name"
                  placeholder="e.g. Ramesh Shrestha"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  name="Mobile / WhatsApp Number"
                  placeholder="+977-98xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  name="Business / Company Name"
                  placeholder="e.g. Everest Himalayan Treks"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Industry / Sector
                </label>
                <select
                  name="Industry / Sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534] bg-white"
                >
                  <option value="Travel / Tourism / Trekking">Travel / Tourism / Trekking</option>
                  <option value="Clinic / Dental / Healthcare">Clinic / Dental / Healthcare</option>
                  <option value="School / College / Consultancy">School / College / Consultancy</option>
                  <option value="Hotel / Restaurant / Hospitality">Hotel / Restaurant / Hospitality</option>
                  <option value="Retail / E-commerce">Retail / E-commerce</option>
                  <option value="Construction / Legal / Accounting">Construction / Legal / Accounting</option>
                  <option value="Startup / Tech / Services">Startup / Tech / Services</option>
                  <option value="Other">Other Business</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="Email Address"
                placeholder="info@yourcompany.com.np"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Project Notes / Specific Requirements (Optional)
              </label>
              <textarea
                rows={2}
                name="Project Notes / Requirements"
                placeholder="Mention desired pages, eSewa payment requirement, domain status, or questions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-sm focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
              />
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#166534] py-3 px-4 text-sm font-bold text-white hover:bg-green-900 transition shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Submitting Inquiry...</span>
                  </span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Submit Inquiry to Optiverse</span>
                  </>
                )}
              </button>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-green-50/50 py-2.5 px-4 text-xs font-bold text-green-800 hover:bg-green-100 transition"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>Or Inquire Instantly on WhatsApp (+977-9803713931)</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck size={14} className="text-[#166534]" />
              <span>Optiverse IT Solution Pvt. Ltd. • Lalitpur, Nepal • 100% Privacy</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
