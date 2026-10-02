import { useEffect } from "react";
import ContactSection from "../components/hero/ContactSection";
import Footer from "../components/hero/Footer";
import waveTexture from "../assets/hero/wave-texture.png";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ConnectWithUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ── Page Hero Banner ── */}
      <section className="relative overflow-hidden bg-[#071c54] py-12 sm:py-16 px-6">
        {/* Wave texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${waveTexture})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT — Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Let's Build Something{" "}
                <span className="text-[#d97706]">Great Together</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Tell us about your project. Our team will get back to you within
                24 hours with a tailored plan — no pushy sales, just an honest
                conversation.
              </p>
            </div>

            {/* RIGHT — Contact info cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Office */}
              <div className="flex flex-col gap-2 bg-white/8 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-[#d97706]/20 border border-[#d97706]/30 flex items-center justify-center text-[#d97706]">
                  <MapPin size={18} />
                </div>
                <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wider">Our Office</p>
                <p className="text-white text-sm font-semibold leading-snug">Jawalakhel, Lalitpur</p>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 bg-white/8 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-[#d97706]/20 border border-[#d97706]/30 flex items-center justify-center text-[#d97706]">
                  <Mail size={18} />
                </div>
                <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wider">Email Us</p>
                <a
                  href="mailto:info@optiverseits.com.np"
                  className="text-white text-sm font-semibold leading-snug hover:text-[#d97706] transition-colors"
                >
                  info@optiverseits.com.np
                </a>
              </div>

              {/* Phone — two numbers stacked vertically */}
              <div className="flex flex-col gap-2 bg-white/8 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-[#d97706]/20 border border-[#d97706]/30 flex items-center justify-center text-[#d97706]">
                  <Phone size={18} />
                </div>
                <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wider">Call Us</p>
                <a
                  href="tel:+9779803713931"
                  className="text-white text-sm font-semibold leading-snug hover:text-[#d97706] transition-colors"
                >
                  +977 - 9803713931
                </a>
                <a
                  href="tel:+9779824790012"
                  className="text-white text-sm font-semibold leading-snug hover:text-[#d97706] transition-colors"
                >
                  +977 - 9824790012
                </a>
              </div>

              {/* Response Time */}
              <div className="flex flex-col gap-2 bg-white/8 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-[#d97706]/20 border border-[#d97706]/30 flex items-center justify-center text-[#d97706]">
                  <Clock size={18} />
                </div>
                <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wider">Response Time</p>
                <p className="text-white text-sm font-semibold leading-snug">Within 24 hours</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact Form Section ── */}
      <ContactSection />

      <Footer />
    </>
  );
}
