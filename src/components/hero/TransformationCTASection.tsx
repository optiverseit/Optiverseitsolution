import { Link } from "react-router-dom";
import waveTexture from "../../assets/hero/wave-texture.png";

export default function TransformationCTASection() {
  return (
    <section className="relative bg-[#bf7a00] py-6 sm:py-8 overflow-hidden">
      {/* 3D Wave Texture Overlay — same as HeaderStrape */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay bg-cover bg-center"
        style={{
          backgroundImage: `url(${waveTexture})`,
        }}
      />
      {/* Darkening tint to restore depth and text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Start Your Transformation from Today
            </h2>

            <p className="mt-2 text-sm font-medium text-white/95 sm:text-base">
              Ready to Write Your Success Story ?
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/connect-with-us"
                className="rounded-xl border-2 border-white bg-transparent px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#bf7a00] sm:text-base text-center"
              >
                Quick Chat
              </Link>

              <Link
                to="/connect-with-us"
                className="rounded-xl bg-[#166534] px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#14532d] sm:text-base text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="text-left lg:text-right">
            <p className="text-sm font-bold leading-relaxed text-white sm:text-base">
              Transformed your business with our expertise.
            </p>
            <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
              Let&apos;s discuss your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}