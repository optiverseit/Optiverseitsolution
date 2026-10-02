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
    bgPosition: "right center",
  },
  {
    image: hero2,
    bgColor: "#165d91",
    gradient: "from-[#0d3b5c]/95 via-[#104870]/60 to-transparent",
    bgPosition: "right center",
  },
  {
    image: hero3,
    bgColor: "#093d70",
    gradient: "from-[#052342]/95 via-[#072f57]/60 to-transparent",
    bgPosition: "right center",
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
    <section className="relative h-[calc(100vh-105px)] min-h-[580px] w-full overflow-hidden bg-[#040816]">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ backgroundColor: slide.bgColor }}
        >
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "contain",
              backgroundPosition: slide.bgPosition,
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl font-black leading-[1.15] sm:text-4xl lg:text-[44px]">
            Digital Success in Tomorrow’s World
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-8 text-white/90 sm:text-base md:text-justify">
            We design, build, and scale digital solutions for the businesses by
            providing best services of website development, digital marketing
            and tech consulting - engineered to accelerate business growth.
          </p>

          <p className="mt-12 text-2xl font-black text-white sm:text-[32px]">
            Your Success Our Mission
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-amber-700">
              Explore Services
              <span className="ml-2">→</span>
            </button>

            <Link
              to="/connect-with-us"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentImage ? "bg-yellow-400" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
}
