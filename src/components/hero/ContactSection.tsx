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

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service:
        selected === "Select a service..." ? "" : selected,
      message: formData.get("message"),
    };

    console.log("Form submitted:", data);

    // add your API call here
  };

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-3xl border border-slate-300 bg-[#e2e8f0] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-600/20 bg-green-600/10 text-[#166534] shadow-sm">
                  <MapPin size={18} />
                </div>
                <p>Jawalakhel, Lalitpur</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-600/20 bg-green-600/10 text-[#166534] shadow-sm">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:info@optiverseits.com.np"
                  className="transition hover:text-[#166534]"
                >
                  info@optiverseits.com.np
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-600/20 bg-green-600/10 text-[#166534] shadow-sm">
                  <Phone size={18} />
                </div>
                <a
                  href="tel:+9779803713931"
                  className="transition hover:text-[#166534]"
                >
                  +977 - 9803713931 | +977 - 9824790012
                </a>
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

            <button
              type="submit"
              className="w-full rounded-lg bg-[#166534] py-3.5 font-bold text-white shadow-md transition hover:bg-[#14532d]"
            >
              Send Message →
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