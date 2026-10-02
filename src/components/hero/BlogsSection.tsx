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
    title: "Best Website Design and Development Cost in Nepal",
    excerpt:
      "In today's digital era, having a strong online presence is crucial for any businesses and individuals. A well-designed and functioning website stands as one of the key aspects of establishing such a presence. However, as the saying goes, there is a ...",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80&fit=crop",
    date: "SEPT 21, 2025",
    readTime: "8 MIN READ",
  },
  {
    id: 2,
    title: "Best Website Design and Development Cost in Nepal",
    excerpt:
      "In today's digital era, having a strong online presence is crucial for any businesses and individuals. A well-designed and functioning website stands as one of the key aspects of establishing such a presence. However, as the saying goes, there is a ...",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&fit=crop",
    date: "SEPT 21, 2025",
    readTime: "8 MIN READ",
  },
  {
    id: 3,
    title: "Best Website Design and Development Cost in Nepal",
    excerpt:
      "In today's digital era, having a strong online presence is crucial for any businesses and individuals. A well-designed and functioning website stands as one of the key aspects of establishing such a presence. However, as the saying goes, there is a ...",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&fit=crop",
    date: "SEPT 21, 2025",
    readTime: "8 MIN READ",
  },
  {
    id: 4,
    title: "Best Website Design and Development Cost in Nepal",
    excerpt:
      "In today's digital era, having a strong online presence is crucial for any businesses and individuals. A well-designed and functioning website stands as one of the key aspects of establishing such a presence. However, as the saying goes, there is a ...",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&fit=crop",
    date: "SEPT 21, 2025",
    readTime: "8 MIN READ",
  },
  {
    id: 5,
    title: "Best Website Design and Development Cost in Nepal",
    excerpt:
      "In today's digital era, having a strong online presence is crucial for any businesses and individuals. A well-designed and functioning website stands as one of the key aspects of establishing such a presence. However, as the saying goes, there is a ...",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&fit=crop",
    date: "SEPT 21, 2025",
    readTime: "8 MIN READ",
  },
  {
    id: 6,
    title: "Best Website Design and Development Cost in Nepal",
    excerpt:
      "In today's digital era, having a strong online presence is crucial for any businesses and individuals. A well-designed and functioning website stands as one of the key aspects of establishing such a presence. However, as the saying goes, there is a ...",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&fit=crop",
    date: "SEPT 21, 2025",
    readTime: "8 MIN READ",
  },
];

export default function BlogsSection() {
  return (
    <section className="relative overflow-hidden bg-[#071328] py-16 sm:py-20 lg:py-24">
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
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-[3px] w-16 bg-lime-400 sm:w-24" />
            <p className="text-lg font-extrabold text-white sm:text-xl">
              Our Blogs
            </p>
            <span className="h-[3px] w-16 bg-lime-400 sm:w-24" />
          </div>

          <h2 className="text-3xl font-extrabold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)] sm:text-4xl lg:text-5xl">
            Latest and Popular <span className="text-lime-400">Blogs</span>
          </h2>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group block cursor-pointer"
            >
              <article
                className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_56px_rgba(0,0,0,0.28)]"
              >
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
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
            </a>
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