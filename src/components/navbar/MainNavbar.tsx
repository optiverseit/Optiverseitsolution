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
    { title: "Website Development", desc: "Specialized custom website development services.", icon: <Globe size={24} className="text-green-600" /> },
    { title: "SEO", desc: "Improve rankings and traffic.", icon: <Search size={24} className="text-green-600" /> },
    { title: "Digital Marketing", desc: "Grow globally with measurable ROI.", icon: <Megaphone size={24} className="text-green-600" /> },
    { title: "Video Production", desc: "Engaging video content.", icon: <Video size={24} className="text-green-600" /> },
    { title: "Video Editing", desc: "Transform footage professionally.", icon: <Scissors size={24} className="text-green-600" /> },
    { title: "Graphics Design", desc: "Brand identity visuals.", icon: <PenTool size={24} className="text-green-600" /> },
    { title: "Social Media Management", desc: "Audience growth strategy.", icon: <Users size={24} className="text-green-600" /> },
    { title: "Advertising", desc: "Promote products effectively.", icon: <BadgeDollarSign size={24} className="text-green-600" /> },
    { title: "IT Technical Service", desc: "Hardware & network support.", icon: <MonitorCog size={24} className="text-green-600" /> },
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" onClick={closeAll} className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-14 w-auto object-contain sm:h-16" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            if (item.label === "About") {
              return (
                <div
                  key={item.href}
                  className="relative"
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
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 font-bold text-white transition-all duration-200 hover:scale-110 hover:bg-[#F5F5F5] hover:text-[#166534]"
                  >
                    About
                    <ChevronDown size={16} className={`transition ${showAbout ? "rotate-180" : ""}`} />
                  </button>

                  {showAbout && (
                    <div className="absolute left-1/2 top-full mt-3 w-[420px] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
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
                  className="relative"
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
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 font-bold text-white transition-all duration-200 hover:scale-110 hover:bg-[#F5F5F5] hover:text-[#166534]"
                  >
                    Services
                    <ChevronDown size={16} className={`transition ${showServices ? "rotate-180" : ""}`} />
                  </button>

                  {showServices && (
                    <div className="absolute left-1/2 top-full mt-3 w-[860px] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl xl:w-[960px]">
                      {/* Green inner border wrapping the grid */}
                      <div className="grid grid-cols-3 gap-1 p-3">
                        {services.map((service) => (
                          <div
                            key={service.title}
                            className="group flex cursor-pointer items-start gap-3 rounded-xl p-4 transition-all duration-150 hover:bg-green-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 transition group-hover:bg-green-200">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="text-[14px] font-bold text-gray-900 group-hover:text-green-800">{service.title}</h4>
                              <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{service.desc}</p>
                            </div>
                          </div>
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
                className="rounded-lg px-3 py-1.5 font-bold text-white transition-all duration-200 hover:scale-110 hover:bg-[#F5F5F5] hover:text-[#166534]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <button className="rounded-md bg-white px-5 py-2 font-bold transition hover:bg-gray-100" style={{ color: '#166534' }}>
            Join With Us
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-t border-white/10 bg-green-900 px-4 py-5 shadow-2xl md:hidden">
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
                          <div key={service.title} className="flex gap-3 rounded-lg bg-white p-3">
                            <div>{service.icon}</div>
                            <div>
                              <h4 className="text-sm font-bold text-gray-900">{service.title}</h4>
                              <p className="text-xs text-gray-600">{service.desc}</p>
                            </div>
                          </div>
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

            <button className="mt-3 w-full rounded-xl bg-white px-5 py-3 font-bold transition hover:bg-gray-100" style={{ color: '#166534' }}>
              Join With Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
}