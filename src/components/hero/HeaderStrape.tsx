import waveTexture from "../../assets/hero/wave-texture.png";

export default function HeaderStrape() {
  return (
    <section className="relative overflow-hidden w-full bg-[#d97706] py-5 sm:py-6 md:py-7">
      {/* 3D Wave Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay bg-cover bg-center"
        style={{
          backgroundImage: `url(${waveTexture})`,
        }}
      />
      {/* Darkening tint to restore depth and text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        {/* LEFT */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Your Partner in Digital Innovation
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/90 sm:text-base">
            Optiverse I.T. Solution is a premier digital solutions provider
            dedicated for helping businesses to achieve success digitally.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
            CONNECT WITH US.
          </p>

          <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white px-5 py-1.5 text-base sm:text-lg font-bold text-[#d97706] shadow-sm transition hover:bg-gray-100">
            Call Now...
          </button>
        </div>

      </div>
    </section>
  );
}
