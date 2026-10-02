import { MessageSquareQuote, Building2, Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  companySize: string;
  date: string;
  review: string;
  avatar: string;
  softBg: string;
  roleColor: string;
  iconBg: string;
  dateColor: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "VP of Engineering",
    company: "TechVenture Global",
    companySize: "Enterprise (5000+ employees)",
    date: "March 2026",
    review:
      "The AI-driven analytics platform they built for us has fundamentally changed how we make business decisions. We're now predicting market trends with 94% accuracy and staying ahead of our competitors. The team's expertise in machine learning is unmatched.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop",
    softBg: "bg-[#eaf8ff]",
    roleColor: "text-sky-500",
    iconBg: "bg-sky-100 text-sky-500",
    dateColor: "text-sky-600",
  },
  {
    id: 2,
    name: "Samantha Rodriguez",
    role: "Chief Information Security Officer",
    company: "Healthcare Systems United",
    companySize: "Large (1000-5000 employees)",
    date: "February 2026",
    review:
      "Their zero-trust security architecture implementation exceeded all expectations. We achieved SOC 2 Type II and HIPAA compliance within 6 months. The proactive threat detection system has blocked over 10,000 potential breaches. Patient data has never been more secure.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop",
    softBg: "bg-[#edf9f1]",
    roleColor: "text-green-500",
    iconBg: "bg-green-100 text-green-500",
    dateColor: "text-green-600",
  },
  {
    id: 3,
    name: "James Whitaker",
    role: "Director of Cloud Operations",
    company: "RetailNext Commerce",
    companySize: "Medium (250-1000 employees)",
    date: "January 2026",
    review:
      "The multi-cloud migration strategy was flawless. Moving 500+ microservices from legacy systems to AWS and Azure with zero downtime was incredible. Our operational costs dropped 62% while performance improved dramatically. Black Friday handled 10M+ transactions seamlessly.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop",
    softBg: "bg-[#fbf6df]",
    roleColor: "text-amber-500",
    iconBg: "bg-amber-100 text-amber-500",
    dateColor: "text-amber-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 sm:mb-14">
          <div className="flex items-center gap-3">
            <MessageSquareQuote className="h-7 w-7 text-sky-500" />
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Client Testimonials
            </h2>
          </div>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Real feedback from real clients. We let our work and relationships
            speak for themselves.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-8">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className={`rounded-[35px] border border-slate-200/80 ${item.softBg} px-7 py-7 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1`}
            >
              {/* Stars row — always at top right */}
              <div className="mb-3 flex justify-end">
                <div className="flex items-center gap-[2px] rounded-full bg-white/60 px-2.5 py-1.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Avatar + Name row */}
              <div className="flex min-w-0 items-start gap-4">
                <div className="relative shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-16 w-16 rounded-[18px] object-cover ring-2 ring-white shadow-[0_8px_20px_rgba(0,0,0,0.10)]"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white ${item.iconBg}`}
                  >
                    <MessageSquareQuote className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="text-[17px] font-extrabold leading-tight text-slate-900">
                    {item.name}
                  </h3>
                  <p className={`mt-1 text-[15px] font-semibold leading-6 ${item.roleColor}`}>
                    {item.role}
                  </p>
                </div>
              </div>

              {/* review */}
              <div className="mt-8">
                <p className="text-[15px] leading-7 text-slate-700">
                  {item.review}
                </p>
              </div>

              {/* divider */}
              <div className="my-8 h-px w-full bg-white/80" />

              {/* bottom */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconBg}`}
                  >
                    <Building2 className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-[16px] font-extrabold leading-tight text-slate-900">
                      {item.company}
                    </h4>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center lg:justify-end">
          <button className="rounded-xl bg-green-600 px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-green-700">
            See All
          </button>
        </div>
      </div>
    </section>
  );
}