import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../data/navItems";
import logo from "../../assets/Logo/Logo.png";
import {
  Globe,
  Search,
  Megaphone,
  Video,
  Scissors,
  PenTool,
  Users,
  BadgeDollarSign,
  MonitorCog,
  ChevronDown,
  Building2,
  Briefcase,
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";

export default function MainNavbar() {
  const [showServices, setShowServices] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [pinnedServices, setPinnedServices] = useState(false);
  const [pinnedAbout, setPinnedAbout] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowServices(false);
      setShowAbout(false);
      setPinnedServices(false);
      setPinnedAbout(false);
      setMobileOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside the navbar
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setShowServices(false);
    setShowAbout(false);
    setPinnedServices(false);
    setPinnedAbout(false);
    setMobileOpen(false);
  };

  const services = [
    { title: "Website Development", desc: "Specialized custom website development services.", icon: <Globe size={24} className="text-green-600" />, href: "/services/website-development" },
    { title: "SEO", desc: "Improve rankings and traffic.", icon: <Search size={24} className="text-green-600" />, href: "/#services" },
    { title: "Digital Marketing", desc: "Grow globally with measurable ROI.", icon: <Megaphone size={24} className="text-green-600" />, href: "/#services" },
    { title: "Video Production", desc: "Engaging video content.", icon: <Video size={24} className="text-green-600" />, href: "/#services" },
    { title: "Video Editing", desc: "Transform footage professionally.", icon: <Scissors size={24} className="text-green-600" />, href: "/#services" },
    { title: "Graphics Design", desc: "Brand identity visuals.", icon: <PenTool size={24} className="text-green-600" />, href: "/#services" },
    { title: "Social Media Management", desc: "Audience growth strategy.", icon: <Users size={24} className="text-green-600" />, href: "/#services" },
    { title: "Advertising", desc: "Promote products effectively.", icon: <BadgeDollarSign size={24} className="text-green-600" />, href: "/#services" },
    { title: "IT Technical Service", desc: "Hardware & network support.", icon: <MonitorCog size={24} className="text-green-600" />, href: "/#services" },
  ];

  const aboutItems = [
    {
      title: "Introduction",
      desc: "Optiverse IT Solution Pvt. Ltd...",
      href: "/about",
      icon: <Building2 size={24} className="text-green-600" />,
    },
    {
      title: "Our Work Process",
      desc: "For Website Development Service",
      href: "/work-process",
      icon: <Briefcase size={24} className="text-green-600" />,
    },
  ];

  return (
    <div ref={navRef} className="relative w-full bg-green-800 shadow-sm">
      <div className="relative z-50 mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" onClick={closeAll} className="flex items-center" aria-label="Optiverse IT Solution Home">
          <img src={logo} alt="Optiverse IT Solution Pvt. Ltd. - Nepal Logo" width={180} height={56} className="h-14 w-auto object-contain sm:h-16" />
        </Link>

        <div className="hidden items-center lg:flex gap-1 xl:gap-2 2xl:gap-3">
          {navItems.map((item) => {
            if (item.label === "About") {
              return (
                <div
                  key={item.href}
                  className="relative flex justify-center"
                  onMouseEnter={() => { setShowAbout(true); setShowServices(false); setPinnedServices(false); }}
                  onMouseLeave={() => { if (!pinnedAbout) setShowAbout(false); }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      const next = !pinnedAbout;
                      setPinnedAbout(next);
                      setShowAbout(next);
                      setPinnedServices(false);
                      setShowServices(false);
                    }}
                    className="inline-flex min-w-[78px] xl:min-w-[94px] 2xl:min-w-[102px] items-center justify-center rounded-lg px-2 xl:px-2.5 py-1.5 text-sm xl:text-base font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-[#F5F5F5] hover:text-[#166534] whitespace-nowrap"
                  >
                    <span>About</span>
                    <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${showAbout ? "rotate-180" : ""}`} />
                  </button>

                  {showAbout && (
                    <div className="absolute left-1/2 top-full z-50 mt-3 w-[92vw] max-w-[420px] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
                      {/* Items */}
                      <div className="p-3">
                        {aboutItems.map((about) => (
                          <Link
                            key={about.title}
                            to={about.href}
                            onClick={closeAll}
                            className="flex items-start gap-4 rounded-xl px-4 py-3 transition hover:bg-green-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100">
                              {about.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{about.title}</h4>
                              <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{about.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (item.label === "Services") {
              return (
                <div
                  key={item.href}
                  className="relative flex justify-center"
                  onMouseEnter={() => { setShowServices(true); setShowAbout(false); setPinnedAbout(false); }}
                  onMouseLeave={() => { if (!pinnedServices) setShowServices(false); }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      const next = !pinnedServices;
                      setPinnedServices(next);
                      setShowServices(next);
                      setPinnedAbout(false);
                      setShowAbout(false);
                    }}
                    className="inline-flex min-w-[78px] xl:min-w-[94px] 2xl:min-w-[102px] items-center justify-center rounded-lg px-2 xl:px-2.5 py-1.5 text-sm xl:text-base font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-[#F5F5F5] hover:text-[#166534] whitespace-nowrap"
                  >
                    <span>Services</span>
                    <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${showServices ? "rotate-180" : ""}`} />
                  </button>

                  {showServices && (
                    <div className="absolute left-1/2 top-full z-50 mt-3 w-[94vw] max-w-[860px] xl:max-w-[960px] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl max-h-[82vh] overflow-y-auto">
                      {/* Green inner border wrapping the grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-3">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            to={service.href || "/#services"}
                            onClick={closeAll}
                            className="group flex cursor-pointer items-start gap-3 rounded-xl p-4 transition-all duration-150 hover:bg-green-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 transition group-hover:bg-green-200">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="text-[14px] font-bold text-gray-900 group-hover:text-green-800">{service.title}</h4>
                              <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{service.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeAll}
                className="inline-flex min-w-[78px] xl:min-w-[94px] 2xl:min-w-[102px] items-center justify-center rounded-lg px-2 xl:px-2.5 py-1.5 text-sm xl:text-base font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-[#F5F5F5] hover:text-[#166534] whitespace-nowrap"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/connect-with-us"
            onClick={closeAll}
            className="rounded-md bg-white px-4 xl:px-5 py-2 text-sm xl:text-base font-bold transition hover:bg-gray-100 inline-block"
            style={{ color: '#166534' }}
          >
            Join With Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Contact Info Tab attached under navbar on bottom-left */}
      <div className="absolute left-0 top-full z-40 flex items-center gap-1.5 sm:gap-2 lg:gap-3 bg-white py-1 sm:py-1.5 lg:py-2 pl-2.5 sm:pl-5 lg:pl-7 pr-3 sm:pr-7 rounded-br-2xl sm:rounded-br-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border-r border-b border-gray-100 max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Phone numbers (hidden on mobile, visible on sm and up) */}
        <div className="hidden sm:flex items-center gap-2">
          <Phone className="h-4 w-4 text-[#166534] fill-[#166534] shrink-0" />
          <div className="flex flex-col text-[11px] font-bold leading-[1.25] text-slate-800">
            <a href="tel:+9779803713931" className="hover:text-[#166534] transition">
              +977 - 9803713931
            </a>
            <a href="tel:+9779824790012" className="hover:text-[#166534] transition">
              +977 - 9824790012
            </a>
          </div>
        </div>
        {/* Divider */}
        <div className="hidden sm:block h-6 w-px bg-gray-300 mx-1 lg:mx-2" />
        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-[#166534] fill-[#166534] shrink-0" />
          <a href="mailto:info@optiverseits.com.np" className="text-[12px] font-bold text-slate-800 hover:text-[#166534] transition">
            info@optiverseits.com.np
          </a>
        </div>
        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 mx-1 lg:mx-2" />
        {/* Social Icons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a href="https://www.facebook.com/people/Optiverse-IT-Solution-Pvt-Ltd/61583595820792/" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-6 w-6 items-center justify-center rounded-full bg-[#166534] text-white hover:bg-[#14532d] transition">
            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
          <a href="https://www.instagram.com/optiverseitsolution/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-6 w-6 items-center justify-center rounded-full bg-[#166534] text-white hover:bg-[#14532d] transition">
            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
          </a>
          <a href="https://np.linkedin.com/company/optiverse-it-solution" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-6 w-6 items-center justify-center rounded-full bg-[#166534] text-white hover:bg-[#14532d] transition">
            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
          <a href="#" aria-label="TikTok" className="flex h-6 w-6 items-center justify-center rounded-full bg-[#166534] text-white hover:bg-[#14532d] transition">
            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.35 0 .69.06 1 .17V9.01a6.35 6.35 0 0 0-1-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52v-3.45c-.35 0-.71-.04-1.05-.13z" /></svg>
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-green-900 px-4 py-5 shadow-2xl lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain pb-10">
          <div className="space-y-2">
            {navItems.map((item) => {
              if (item.label === "About") {
                return (
                  <div key={item.href} className="rounded-xl bg-white/5">
                    <button
                      type="button"
                      onClick={() => {
                        setShowAbout(!showAbout);
                        setShowServices(false);
                      }}
                      className="flex w-full items-center justify-between px-4 py-3 font-semibold text-white"
                    >
                      About
                      <ChevronDown size={18} className={`transition ${showAbout ? "rotate-180" : ""}`} />
                    </button>

                    {showAbout && (
                      <div className="space-y-2 px-3 pb-3">
                        {aboutItems.map((about) => (
                          <Link
                            key={about.title}
                            to={about.href}
                            onClick={closeAll}
                            className="flex gap-3 rounded-lg bg-white p-3"
                          >
                            <div>{about.icon}</div>
                            <div>
                              <h4 className="text-sm font-bold text-gray-900">{about.title}</h4>
                              <p className="text-xs leading-relaxed text-gray-600">{about.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.label === "Services") {
                return (
                  <div key={item.href} className="rounded-xl bg-white/5">
                    <button
                      type="button"
                      onClick={() => {
                        setShowServices(!showServices);
                        setShowAbout(false);
                      }}
                      className="flex w-full items-center justify-between px-4 py-3 font-semibold text-white"
                    >
                      Services
                      <ChevronDown size={18} className={`transition ${showServices ? "rotate-180" : ""}`} />
                    </button>

                    {showServices && (
                      <div className="grid gap-2 px-3 pb-3">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            to={service.href || "/#services"}
                            onClick={closeAll}
                            className="flex gap-3 rounded-lg bg-white p-3"
                          >
                            <div>{service.icon}</div>
                            <div>
                              <h4 className="text-sm font-bold text-gray-900">{service.title}</h4>
                              <p className="text-xs text-gray-600">{service.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeAll}
                  className="block rounded-xl px-4 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              to="/connect-with-us"
              onClick={closeAll}
              className="mt-3 block text-center w-full rounded-xl bg-white px-5 py-3 font-bold transition hover:bg-gray-100"
              style={{ color: '#166534' }}
            >
              Join With Us
            </Link>

            {/* Mobile Contact Info */}
            <div className="mt-4 border-t border-white/10 pt-4 space-y-3">
              <div className="flex items-start gap-2 text-xs text-white">
                <Phone className="h-4 w-4 text-green-300 shrink-0 mt-0.5" />
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a href="tel:+9779803713931" className="whitespace-nowrap hover:text-green-300 transition">+977 - 9803713931</a>
                  <span>|</span>
                  <a href="tel:+9779824790012" className="whitespace-nowrap hover:text-green-300 transition">+977 - 9824790012</a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-white">
                <Mail className="h-4 w-4 text-green-300 shrink-0" />
                <a href="mailto:info@optiverseits.com.np" className="break-all hover:text-green-300 transition">info@optiverseits.com.np</a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://www.facebook.com/people/Optiverse-IT-Solution-Pvt-Ltd/61583595820792/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/optiverseitsolution/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://np.linkedin.com/company/optiverse-it-solution"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.35 0 .69.06 1 .17V9.01a6.35 6.35 0 0 0-1-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52v-3.45c-.35 0-.71-.04-1.05-.13z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}