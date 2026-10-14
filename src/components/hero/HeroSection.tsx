import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";

const heroSlides = [
  {
    image: hero1,
    bgColor: "#040816",
    gradient: "from-black/85 via-[#040816]/60 to-transparent",
    mobilePosition: "82% 45%",
    alt: "Optiverse IT Solution - Web Development & Digital Marketing Nepal",
  },
  {
    image: hero2,
    bgColor: "#165d91",
    gradient: "from-[#0d3b5c]/95 via-[#104870]/60 to-transparent",
    mobilePosition: "72% 50%",
    alt: "IT Services and Software Development in Kathmandu Nepal",
  },
  {
    image: hero3,
    bgColor: "#093d70",
    gradient: "from-[#052342]/95 via-[#072f57]/60 to-transparent",
    mobilePosition: "75% 32%",
    alt: "Digital Marketing and SEO Services Nepal",
  },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroSlides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-auto sm:h-[calc(100vh-105px)] min-h-0 sm:min-h-[580px] w-full overflow-hidden bg-[#040816]"
      aria-label="Hero — Optiverse IT Solution, Top IT Company in Nepal"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ backgroundColor: slide.bgColor }}
          aria-hidden={index !== currentImage}
        >
          {/* Hero background image — first slide gets fetchpriority high for LCP */}
          <img
            src={slide.image}
            alt={slide.alt}
            style={{ objectPosition: slide.mobilePosition }}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-65 sm:opacity-100 sm:!object-right transition-opacity"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding={index === 0 ? "sync" : "async"}
            width="1200"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/60 to-[#040816]/20 sm:hidden" aria-hidden="true" />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} aria-hidden="true" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 py-20 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8 lg:pt-20">
        <div className="max-w-3xl text-white">
          {/* H1 Heading */}
          <h1 className="text-4xl font-black leading-[1.2] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] sm:text-5xl md:text-5xl lg:text-[52px] lg:leading-[1.16]">
            Digital Success in Tomorrow's World
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-justify">
            We design, build, and scale digital solutions for the businesses by providing best services of website development, digital marketing and tech consulting – engineered to accelerate business growth.
          </p>

          <h2 className="mt-5 sm:mt-7 text-lg font-extrabold tracking-wide sm:text-xl md:text-2xl">
            Your Success Our Mission
          </h2>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-amber-700 shadow-lg shadow-amber-950/20"
              aria-label="Explore our IT services"
            >
              Explore Services →
            </a>

            <Link
              to="/connect-with-us"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Get a free consultation"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
