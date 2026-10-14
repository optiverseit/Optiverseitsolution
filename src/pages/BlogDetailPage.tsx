import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Share2,
  Check,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import SEOHead from "../components/seo/SEOHead";
import Footer from "../components/hero/Footer";
import { blogsData } from "../data/blogsData";
import { generateBlogDetailSeo } from "../utils/blogSeoEngine";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center bg-slate-50">
        <BookOpen className="h-16 w-16 text-slate-300 mb-4" />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Article Not Found
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-md">
          The blog post you are looking for might have been moved or removed.
        </p>
        <Link
          to="/blogs"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#166534] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-green-900 transition"
        >
          <ArrowLeft size={16} /> Return to All Blogs
        </Link>
      </div>
    );
  }

  const relatedBlogs = blogsData
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Automated Dynamic SEO Engine generates Full BlogPosting + Breadcrumbs + FAQPage Schemas
  const seo = generateBlogDetailSeo(blog);

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
        ogType="article"
        ogImage={seo.ogImage}
        structuredData={seo.structuredData}
      />

      <article itemScope itemType="https://schema.org/BlogPosting" className="bg-slate-50 min-h-screen w-full">
        <meta itemProp="wordCount" content={seo.wordCount.toString()} />
        <meta itemProp="inLanguage" content="en-US" />
        <meta itemProp="articleSection" content={blog.category} />

        {/* ── Article Header ── */}
        <header className="w-full bg-gradient-to-b from-white via-white to-slate-50 pt-10 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-slate-200/80">
          <div className="w-full max-w-7xl mx-auto">
            {/* Visual Breadcrumb for Users & Search Crawlers */}
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-semibold text-slate-500">
                <li>
                  <Link to="/" className="hover:text-green-800 transition">Home</Link>
                </li>
                <li className="text-slate-300">/</li>
                <li>
                  <Link to="/blogs" className="hover:text-green-800 transition">Blogs</Link>
                </li>
                <li className="text-slate-300">/</li>
                <li className="text-[#166534] font-bold truncate max-w-[220px] sm:max-w-md" aria-current="page">
                  {blog.title}
                </li>
              </ol>
            </nav>

            {/* Title */}
            <h1 itemProp="headline" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
              {blog.title}
            </h1>

            {/* Category badge & reading time */}
            <div className="flex items-center gap-2 mt-4 sm:mt-5 mb-5 sm:mb-6">
              <span className="bg-[#166534] text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                {blog.category}
              </span>
              <span className="text-xs font-bold text-slate-400">
                • {blog.readTime}
              </span>
            </div>

            {/* Excerpt Lead */}
            <p itemProp="description" className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal border-l-4 border-lime-500 pl-4 sm:pl-6 bg-slate-100/70 py-3 rounded-r-2xl">
              {blog.excerpt}
            </p>

            {/* Author & Date metadata bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div itemProp="author" itemScope itemType="https://schema.org/Person" className="flex items-center gap-3.5">
                <img
                  src={blog.author.avatar}
                  alt={`${blog.author.name} - Optiverse IT Solution Nepal`}
                  className="h-12 w-12 rounded-full object-cover border-2 border-green-700/20 shadow-sm"
                />
                <div>
                  <p itemProp="name" className="text-sm sm:text-base font-bold text-slate-900">{blog.author.name}</p>
                  <p className="text-xs text-slate-500">{blog.author.role} • Optiverse IT Solution</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-sm">
                  <Calendar size={15} className="text-green-700" />
                  <time itemProp="datePublished" dateTime={seo.isoDatePublished}>{blog.date}</time>
                </div>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-3.5 py-2 rounded-xl shadow-sm transition"
                  title="Share article link"
                >
                  {copied ? (
                    <>
                      <Check size={15} className="text-green-600" />
                      <span className="text-green-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={15} className="text-slate-500" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ── Featured Image ── */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mt-6 sm:mt-8">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-slate-200/80 bg-slate-900 aspect-video max-h-[520px] w-full">
            <img
              src={blog.image}
              alt={`${blog.title} - Optiverse IT Solution Nepal`}
              itemProp="image"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* ── Article Body Content ── */}
        <div itemProp="articleBody" className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-16">
          <div className="w-full space-y-8">
            {/* Introduction */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed font-normal">
              {blog.content.introduction}
            </p>

            {/* Sections */}
            {blog.content.sections.map((section, idx) => (
              <div key={idx} className="pt-6 border-t border-slate-200">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                  {section.heading}
                </h2>

                <div className="space-y-4">
                  {section.body.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {section.keyPoints && section.keyPoints.length > 0 && (
                  <div className="mt-6 rounded-2xl bg-green-50/80 border border-green-200 p-6 sm:p-8 shadow-sm">
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-900 mb-4 flex items-center gap-2">
                      <Sparkles size={18} className="text-green-700" />
                      Key Strategic Takeaways
                    </h3>
                    <ul className="space-y-3">
                      {section.keyPoints.map((point, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-3 text-sm sm:text-base text-green-950 leading-relaxed font-medium">
                          <CheckCircle2 size={18} className="shrink-0 text-green-600 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion CTA */}
            <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#166534] text-white shadow-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-lime-400">
                Strategic Summary
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-2 mb-3">
                Final Thoughts &amp; Implementation
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-4xl">
                {blog.content.conclusion}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/connect-with-us"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 px-6 py-3 text-sm sm:text-base font-bold text-white shadow-lg transition"
                >
                  Consult with Optiverse Team →
                </Link>
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 text-sm sm:text-base font-bold text-white backdrop-blur-sm transition"
                >
                  Explore More Articles
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                Topics:
              </span>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xl bg-white border border-slate-200 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Related Articles Section ── */}
        <section className="bg-white border-t border-slate-200 py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-green-700">
                  Keep Reading
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Related Insights
                </h2>
              </div>

              <Link
                to="/blogs"
                className="text-xs sm:text-sm font-bold text-green-800 hover:text-green-900 transition flex items-center gap-1.5"
              >
                All Blogs →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((relBlog) => (
                <Link
                  key={relBlog.id}
                  to={`/blogs/${relBlog.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-green-200"
                >
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={relBlog.image}
                      alt={relBlog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#166534] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      {relBlog.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <span className="text-[11px] font-semibold text-slate-400 mb-2">
                      {relBlog.date} • {relBlog.readTime}
                    </span>
                    <h3 className="line-clamp-2 text-base sm:text-lg font-bold text-slate-900 group-hover:text-green-800 transition">
                      {relBlog.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 flex-1">
                      {relBlog.excerpt}
                    </p>
                    <span className="mt-4 text-xs sm:text-sm font-bold text-green-800 group-hover:translate-x-1 transition inline-flex items-center gap-1">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
}
