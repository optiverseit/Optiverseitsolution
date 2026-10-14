import darkTexture from "../../assets/section/dark-texture.jpg";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Website Design & Development Cost in Nepal (2026 Practical Guide)",
    excerpt:
      "A transparent breakdown of website design costs in Nepal for small businesses, consultancies, and e-commerce stores. Learn what factors determine pricing, hosting, and long-term maintenance.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80&fit=crop",
    date: "OCT 10, 2026",
    readTime: "7 MIN READ",
  },
  {
    id: 2,
    title: "SEO in Nepal: Proven Strategies to Rank on Google's First Page",
    excerpt:
      "How Nepali businesses outrank competitors using technical SEO, local schema markup, high-intent Nepali keyword research, and Google Business Profile optimization.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&fit=crop",
    date: "OCT 05, 2026",
    readTime: "9 MIN READ",
  },
  {
    id: 3,
    title: "ROI-Driven Digital Marketing & Meta Ads for Growing Nepali Brands",
    excerpt:
      "Why vanity likes fail and how structured performance marketing funnels across Facebook, Instagram, and Google generate qualified inquiries and real revenue.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&fit=crop",
    date: "SEP 28, 2026",
    readTime: "6 MIN READ",
  },
  {
    id: 4,
    title: "Why Commercial Video Creation & Reels Drive Modern Brand Reach",
    excerpt:
      "From cinematic 4K corporate videos to viral promotional reels, discover why video production delivers the highest engagement rates across TikTok, YouTube, and Meta.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&fit=crop",
    date: "SEP 18, 2026",
    readTime: "5 MIN READ",
  },
  {
    id: 5,
    title: "Brand Identity & Graphic Designing That Builds Immediate Client Trust",
    excerpt:
      "Branding goes far beyond a logo. Explore how cohesive typography, visual hierarchy, and professional marketing graphics communicate authority to your customers.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&fit=crop",
    date: "SEP 12, 2026",
    readTime: "6 MIN READ",
  },
  {
    id: 6,
    title: "Social Media Management & Advertising Workflows for Businesses",
    excerpt:
      "How planned monthly content calendars, consistent storytelling, and strategic community management convert passive social scrollers into loyal repeat clients.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&fit=crop",
    date: "AUG 30, 2026",
    readTime: "8 MIN READ",
  },
];

export default function BlogsSection() {
  return (
    <section aria-label="Digital Marketing & Technology Insights Blog" className="relative overflow-hidden bg-[#071328] py-16 sm:py-20 lg:py-24">
      {/* Circuit Board Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${darkTexture})`,
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
          opacity: 0.55,
        }}
      />

      {/* Ambient lighting depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% -10%, rgba(14, 165, 233, 0.22), transparent 60%), radial-gradient(circle at 85% 100%, rgba(16, 185, 129, 0.12), transparent 50%)`,
        }}
      />

      {/* decorative bottom waves */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 opacity-20">
        <svg
          viewBox="0 0 1440 320"
          className="h-40 w-full"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,256 C160,180 320,170 480,210 C660,255 840,330 1080,290 C1240,264 1340,220 1440,180"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M0,278 C180,205 340,198 510,230 C690,265 860,325 1090,308 C1260,295 1360,255 1440,225"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M0,300 C190,228 360,220 530,248 C710,278 890,330 1120,316 C1288,305 1378,275 1440,248"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <span className="hidden xs:block sm:block h-[3px] w-8 sm:w-16 md:w-24 bg-lime-400" />
            <p className="text-base font-extrabold text-white sm:text-lg md:text-xl">
              Digital Marketing &amp; Tech Insights
            </p>
            <span className="hidden xs:block sm:block h-[3px] w-8 sm:w-16 md:w-24 bg-lime-400" />
          </div>

          <h2 className="text-2xl font-extrabold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)] sm:text-4xl lg:text-5xl">
            Latest and Popular <span className="text-lime-400">Blogs</span>
          </h2>
        </div>

        {/* cards */}
        <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group block"
            >
              <article
                className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_56px_rgba(0,0,0,0.28)]"
              >
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={220}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="line-clamp-2 text-xl font-extrabold leading-7 text-[#0b2a7a] transition duration-300 group-hover:text-[#0d47a1]">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black">
                    {blog.excerpt}
                  </p>

                  <div className="mt-5">
                    <span className="text-sm font-bold text-green-800 transition duration-300 group-hover:text-green-900 group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="mt-10 flex justify-center lg:justify-end">
          <button className="rounded-xl bg-white px-8 py-3 text-base font-bold text-green-700 shadow-md transition hover:bg-slate-100">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}