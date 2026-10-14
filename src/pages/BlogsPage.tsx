import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
} from "lucide-react";
import SEOHead from "../components/seo/SEOHead";
import Footer from "../components/hero/Footer";
import { blogsData } from "../data/blogsData";
import { getBlogListingSeoPayload } from "../services/blogService";
import { normalizeIsoDate } from "../utils/blogSeoEngine";
import darkTexture from "../assets/section/dark-texture.jpg";
import heroBg from "../assets/section/blog_hero_bg.jpg";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    "Web Development",
    "SEO",
    "Digital Marketing",
    "Video Production",
    "Branding",
    "Social Media",
  ];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogsData[0];
  const seoPayload = getBlogListingSeoPayload(blogsData);

  return (
    <>
      <SEOHead
        title={seoPayload.title}
        description={seoPayload.description}
        keywords={seoPayload.keywords}
        canonicalPath={seoPayload.canonicalPath}
        ogType={seoPayload.ogType}
        structuredData={seoPayload.structuredData}
      />

      {/* ── Page Hero Banner ── */}
      <section className="relative overflow-hidden bg-[#071328] pt-14 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background hero image (composed with blog visuals on the right) */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-right sm:bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Dark gradient overlay so text is crisp on the left while showing the right blog workstation */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071328]/95 via-[#071328]/80 to-[#071328]/45" />

        {/* Circuit texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${darkTexture})`,
            backgroundSize: "600px 600px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Ambient emerald radial depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(22, 101, 52, 0.45), transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-left sm:pl-3 lg:pl-5 xl:pl-6">
          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-2xl sm:max-w-3xl">
            Knowledge to Grow Your{" "}
            <span className="text-lime-400">Digital Business</span>
          </h1>

          {/* Subheading */}
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Expert articles on custom web development, Google rankings, performance marketing, and creative production built specifically for the Nepali market.
          </p>

          {/* Search Box */}
          <div className="mt-6 sm:mt-8 max-w-xl relative">
            <Search
              className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, costs, SEO tips, ads..."
              className="w-full rounded-2xl bg-white/10 border border-white/20 pl-10 sm:pl-12 pr-14 sm:pr-12 py-3 sm:py-3.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:bg-white/15 backdrop-blur-md transition text-sm sm:text-base shadow-xl"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 rounded bg-white/10 transition"
              >
                Clear
              </button>
            )}
          </div>

          {/* Popular topic chips */}
          <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-start gap-1.5 sm:gap-2">
            <span className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-400">
              <TrendingUp size={13} className="text-lime-400" /> Popular:
            </span>
            {[
              { label: "Website", query: "website" },
              { label: "SEO", query: "seo" },
              { label: "Social Media Ads", query: "social" },
              { label: "Video Production", query: "video" },
              { label: "Branding", query: "brand" },
            ].map((topic) => {
              const isActive = searchQuery.toLowerCase() === topic.query.toLowerCase();
              return (
                <button
                  key={topic.label}
                  type="button"
                  onClick={() => {
                    setSearchQuery(isActive ? "" : topic.query);
                    setSelectedCategory("All");
                  }}
                  className={`rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold transition border backdrop-blur-sm ${
                    isActive
                      ? "bg-lime-400 text-slate-900 border-lime-300 font-bold"
                      : "bg-white/10 text-slate-300 border-white/15 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <section className="bg-slate-50 py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter Pills (Edge-to-edge scroll on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 no-scrollbar mb-6 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                  selectedCategory === category
                    ? "bg-[#166534] text-white shadow-green-900/20 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-green-800 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post Spotlight (shown when no search filter active & on "All") */}
          {selectedCategory === "All" && !searchQuery && featuredBlog && (
            <div className="mb-10 sm:mb-16">
              <div className="mb-3 sm:mb-4 pl-4 sm:pl-6">
                <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500">
                  Featured
                </h2>
              </div>

              <Link
                to={`/blogs/${featuredBlog.slug}`}
                className="group block overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-green-200"
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 h-52 sm:h-72 lg:h-full min-h-[200px] sm:min-h-[280px] overflow-hidden relative">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-[#166534] px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-extrabold text-white shadow-md">
                      {featuredBlog.category}
                    </span>
                  </div>

                  <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-400 mb-2.5 sm:mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-green-700" />
                          {featuredBlog.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-green-700" />
                          {featuredBlog.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-snug group-hover:text-green-800 transition">
                        {featuredBlog.title}
                      </h3>

                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-4">
                        {featuredBlog.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <img
                          src={featuredBlog.author.avatar}
                          alt={featuredBlog.author.name}
                          className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border border-slate-200"
                        />
                        <div className="text-left">
                          <p className="text-xs font-bold text-slate-900">
                            {featuredBlog.author.name}
                          </p>
                          <p className="text-[10px] sm:text-[11px] text-slate-400">
                            {featuredBlog.author.role}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-green-800 group-hover:translate-x-1 transition ml-auto sm:ml-0">
                        Read Story <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}


          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8">
              <Search className="mx-auto h-12 w-12 text-slate-300 mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No articles found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                No blogs matched &ldquo;{searchQuery}&rdquo;. Try selecting another category or resetting the search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-5 rounded-xl bg-green-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-green-900 transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blogs/${blog.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-green-200"
                >
                  <div className="h-52 w-full overflow-hidden relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#166534] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      <time dateTime={normalizeIsoDate(blog.date)}>{blog.date}</time>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="line-clamp-2 text-lg sm:text-xl font-extrabold text-slate-900 leading-snug group-hover:text-green-800 transition">
                      {blog.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {blog.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                        >
                          <Tag size={10} /> {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-sm font-bold text-green-800 group-hover:translate-x-1 transition inline-flex items-center gap-1">
                        Read More →
                      </span>
                      <span className="text-xs text-slate-400">
                        {blog.author.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* ── CTA Banner ── */}
          <div className="mt-12 sm:mt-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#071c54] to-[#166534] p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-[11px] sm:text-sm font-extrabold text-lime-400 uppercase tracking-widest">
                Start Your Project With Us
              </span>
              <h2 className="mt-2 text-xl sm:text-3xl lg:text-4xl font-black leading-tight">
                Ready to Implement These Growth Strategies for Your Brand?
              </h2>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-200 leading-relaxed">
                Book a free 10 - 30 Minutes consultation with our IT &amp; marketing experts. We analyze your website, competitors, and growth opportunities with zero pressure.
              </p>
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/connect-with-us"
                  className="w-full sm:w-auto text-center rounded-xl bg-amber-500 hover:bg-amber-600 px-5 sm:px-6 py-3 text-xs sm:text-base font-bold text-white shadow-lg transition active:scale-95"
                >
                  Get Free Consultation →
                </Link>
                <a
                  href="tel:+9779803713931"
                  className="w-full sm:w-auto text-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-5 sm:px-6 py-3 text-xs sm:text-base font-bold text-white backdrop-blur-sm transition active:scale-95"
                >
                  Call +977 - 9803713931
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
