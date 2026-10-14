import { MapPin, Mail, Phone, Clock, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select a service...");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Website Development",
    "SEO",
    "Digital Marketing",
    "Video Production",
    "Video Editing",
    "Graphics Design",
    "Social Media Management",
    "Advertising",
    "IT Technical Service",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const formMountedAt = useRef(Date.now());

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    const formData = new FormData(e.currentTarget);

    // 🛡️ ANTI-SPAM SAFEGUARD 1: Honeypot check (Bots fill this, humans never see it)
    const honeypot = formData.get("company_website_url_hp");
    if (honeypot && String(honeypot).trim() !== "") {
      console.warn("Spam bot detected via honeypot trap. Silently rejected.");
      setSubmitSuccess(true);
      return;
    }

    // 🛡️ ANTI-SPAM SAFEGUARD 2: Bot submission speed check (Bots submit in <1.5s)
    const elapsed = Date.now() - formMountedAt.current;
    if (elapsed < 1500) {
      console.warn("Spam bot detected via sub-second submission velocity.");
      setSubmitSuccess(true);
      return;
    }

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // 🛡️ ANTI-SPAM SAFEGUARD 3: Input Validation
    if (!fullName || fullName.length < 2) {
      setFormError("Please enter your genuine full name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setFormError("Please enter a valid, authentic email address.");
      return;
    }

    if (!phone || phone.replace(/\D/g, "").length < 7) {
      setFormError("Please provide a valid phone number (minimum 7 digits).");
      return;
    }

    setIsSubmitting(true);

    const verifiedData = {
      fullName,
      email,
      phone,
      service: selected === "Select a service..." ? "" : selected,
      message,
      submittedAt: new Date().toISOString(),
    };

    console.log("Verified Genuine Form Submission:", verifiedData);

    // Simulated successful submission ready for production API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      e.currentTarget.reset();
      setSelected("Select a service...");
    }, 600);
  };

  return (
    <section className="bg-white px-3 py-12 sm:px-4 sm:py-16">
      <div className="mx-auto max-w-[1200px] rounded-2xl sm:rounded-3xl border border-slate-300 bg-[#e2e8f0] p-5 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT CONTENT */}
          <div>
            <p className="font-semibold text-[#166534]">— Connect with us</p>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Ready to Build <br />
              Something
              <span className="text-[#166534]"> Great?</span>
            </h2>

            <p className="mt-4 max-w-md text-sm text-slate-600">
              Free 30-minute consultation. No pushy sales — just a real
              conversation about your project and whether we’re the right fit.
            </p>

            <div className="mt-6 space-y-4 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-green-600/20 bg-green-600/10 text-[#166534] shadow-sm">
                  <MapPin size={18} />
                </div>
                <p>Jawalakhel, Lalitpur</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-green-600/20 bg-green-600/10 text-[#166534] shadow-sm">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:info@optiverseits.com.np"
                  className="break-all transition hover:text-[#166534]"
                >
                  info@optiverseits.com.np
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-green-600/20 bg-green-600/10 text-[#166534] shadow-sm">
                  <Phone size={18} />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a
                    href="tel:+9779803713931"
                    className="whitespace-nowrap transition hover:text-[#166534]"
                  >
                    +977 - 9803713931
                  </a>
                  <span className="text-slate-400">|</span>
                  <a
                    href="tel:+9779824790012"
                    className="whitespace-nowrap transition hover:text-[#166534]"
                  >
                    +977 - 9824790012
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-600/20 bg-green-600/10 text-[#166534] shadow-sm">
                  <Clock size={18} />
                </div>
                <p>Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20"
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20"
            />

            {/* CUSTOM SELECT */}
            <div className="relative w-full" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-left outline-none transition-all duration-300 ${
                  open
                    ? "border-[#166534] ring-2 ring-[#166534]/20 text-slate-900"
                    : "border-slate-300 text-slate-900"
                }`}
              >
                <span
                  className={
                    selected === "Select a service..."
                      ? "text-slate-400"
                      : "text-slate-900 font-medium"
                  }
                >
                  {selected}
                </span>

                <ChevronDown
                  size={18}
                  className={`text-slate-500 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              <input
                type="hidden"
                name="service"
                value={selected === "Select a service..." ? "" : selected}
              />

              {open && (
                <div className="absolute left-0 top-full z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelect(opt)}
                      className="block w-full cursor-pointer px-5 py-3 text-left text-slate-800 transition hover:bg-green-50 hover:text-[#166534]"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <textarea
              rows={4}
              name="message"
              placeholder="Tell us about your project..."
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20"
            />

            {/* 🛡️ HONEYPOT BOT TRAP: Hidden from human eyes, bots auto-populate */}
            <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
              <label htmlFor="company_website_url_hp">Please leave this field empty</label>
              <input
                type="text"
                id="company_website_url_hp"
                name="company_website_url_hp"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {formError && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700 animate-fadeIn">
                ⚠️ {formError}
              </div>
            )}

            {submitSuccess && (
              <div className="rounded-lg border border-green-300 bg-green-50 p-3.5 text-xs font-semibold text-[#166534] animate-fadeIn">
                ✓ Thank you! Your consultation request has been received. Our team in Jawalakhel, Lalitpur will contact you within 24 hours.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#166534] py-3.5 font-bold text-white shadow-md transition hover:bg-[#14532d] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Verifying & Sending..." : "Send Message →"}
            </button>

            <p className="text-center text-xs text-slate-500">
              Your information is never shared. We respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}