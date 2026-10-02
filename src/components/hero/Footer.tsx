import logo from "../../assets/Logo/Logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#020d0a] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Glow Layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Company Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              We help businesses across Nepal and beyond design, build, and grow
              their digital presence with clarity and craft.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/75">
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-green-400" />
                <a
                  href="mailto:info@optiverseits.com.np"
                  className="transition hover:text-white"
                >
                  info@optiverseits.com.np
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-green-400" />
                <a
                  href="tel:+9779803713931"
                  className="transition hover:text-white"
                >
                  +977 - 9803713931 | +977 - 9824790012
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-green-400" />
                <span>Jawalakhel, Lalitpur</span>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2 lg:pl-2">
            <h4 className="text-base font-bold text-white tracking-wide mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <span className="transition hover:text-white hover:translate-x-1 inline-block duration-200 cursor-pointer">
                  Website Development
                </span>
              </li>
              <li>
                <span className="transition hover:text-white hover:translate-x-1 inline-block duration-200 cursor-pointer">
                  Digital Marketing
                </span>
              </li>
              <li>
                <span className="transition hover:text-white hover:translate-x-1 inline-block duration-200 cursor-pointer">
                  Video Production
                </span>
              </li>
              <li>
                <span className="transition hover:text-white hover:translate-x-1 inline-block duration-200 cursor-pointer">
                  Graphics Design
                </span>
              </li>
              <li>
                <span className="transition hover:text-white hover:translate-x-1 inline-block duration-200 cursor-pointer">
                  SEO Optimization
                </span>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="lg:col-span-2 lg:pl-2">
            <h4 className="text-base font-bold text-white tracking-wide mb-5">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <Link
                  to="/blogs"
                  className="transition hover:text-white hover:translate-x-1 inline-block duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="transition hover:text-white hover:translate-x-1 inline-block duration-200"
                >
                  Process
                </Link>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="transition hover:text-white hover:translate-x-1 inline-block duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition hover:text-white hover:translate-x-1 inline-block duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="transition hover:text-white hover:translate-x-1 inline-block duration-200"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-bold text-white tracking-wide mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-white/65 mb-4 leading-relaxed">
              Subscribe for updates and digital growth insights.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#166534] py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#14532d] active:scale-[0.99]"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col gap-4 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between pr-14 sm:pr-16">
          {/* LEFT: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/people/Optiverse-IT-Solution-Pvt-Ltd/61583595820792/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#166534] hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#166534] hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#166534] hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* RIGHT: Copyright */}
          <p className="text-xs sm:text-sm text-white/50">
            © {new Date().getFullYear()} Optiverse I.T. Solution Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
