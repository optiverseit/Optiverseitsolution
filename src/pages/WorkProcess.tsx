import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  FileText,
  Image,
  Code2,
  Zap,
  Activity,
  CheckCircle,
  Clock,
} from "lucide-react";

type Step = {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Consultation & Planning",
    desc: "We start every project with a consultation to understand your business, ideas, and goals. We discuss your requirements, explore possible solutions, and plan the project together.",
    tags: ["Free call", "Goal mapping", "No obligation"],
    icon: <MessageCircle size={22} />,
  },
  {
    title: "Proposal & Scope",
    desc: "A detailed written proposal covering requirements, cost, timeline, milestones, and project direction with full transparency.",
    tags: ["Affordable pricing", "Clear milestones", "No hidden costs"],
    icon: <FileText size={22} />,
  },
  {
    title: "Design & Prototype",
    desc: "We turn ideas into visual designs and interactive prototypes so clients can review the flow before development begins.",
    tags: ["Designs", "User flows", "Client approval"],
    icon: <Image size={22} />,
  },
  {
    title: "Build & Development",
    desc: "Our team develops the product based on approved designs, ensuring features work smoothly, securely, and reliably.",
    tags: ["Agile sprints", "Progress updates", "Client review"],
    icon: <Code2 size={22} />,
  },
  {
    title: "Launch & Delivery",
    desc: "We deploy the final solution to a live environment with documentation, training, and guidance.",
    tags: ["Live deployment", "Documentation", "Support"],
    icon: <Zap size={22} />,
  },
  {
    title: "Support & Growth",
    desc: "We provide ongoing maintenance, feature additions, optimisation, and support to help your product grow.",
    tags: ["Retainer plans", "New features", "Priority support"],
    icon: <Activity size={22} />,
  },
];

export default function WorkProcess() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) setActive(index);
        });
      },
      { threshold: 0.45 }
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#040a05] py-24 sm:py-28 lg:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.16),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-green-400">
            How We Work
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Process from Start{" "}
            <span className="text-green-400">to Launch</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/50 sm:text-base">
            Every successful project begins with a clear strategy and a strong
            process. We understand your vision, design the right solution,
            develop it carefully, test it properly, and launch it with support.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <div
              className="w-px bg-gradient-to-b from-green-500 via-green-300 to-green-600 shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all duration-500"
              style={{
                height: `${((active + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <div className="mb-10 flex flex-col items-start md:items-center">
            <div className="ml-[-6px] flex h-14 w-14 items-center justify-center rounded-full border border-green-400/40 bg-green-500/10 text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.25)] md:ml-0">
              <Clock size={22} />
            </div>
            <p className="ml-20 mt-[-42px] text-xs font-bold uppercase tracking-[0.25em] text-green-400 md:ml-0 md:mt-4">
              Start
            </p>
          </div>

          <div className="space-y-10">
            {steps.map((step, index) => {
              const isActive = active === index;
              const isDone = index < active;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  data-index={index}
                  className="relative grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr] items-center gap-3 sm:gap-4 md:grid-cols-[1fr_96px_1fr]"
                >
                  <div
                    className={`hidden md:block ${
                      isLeft ? "order-1" : "order-3"
                    }`}
                  >
                    {isLeft && (
                      <ProcessCard
                        step={step}
                        index={index}
                        active={isActive}
                        onClick={() => setActive(index)}
                      />
                    )}
                  </div>

                  <div className="relative order-1 flex justify-center md:order-2">
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className={`relative z-10 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border transition-all duration-300 md:h-[72px] md:w-[72px] ${
                        isActive
                          ? "scale-105 sm:scale-110 border-green-400 bg-green-500 text-white shadow-[0_0_35px_rgba(34,197,94,0.65)]"
                          : isDone
                          ? "border-green-500/50 bg-green-500/10 text-green-400"
                          : "border-white/10 bg-[#101014] text-green-500/50"
                      }`}
                    >
                      {step.icon}
                    </button>
                  </div>

                  <div
                    className={`order-2 md:order-3 ${
                      !isLeft ? "md:block" : "md:hidden"
                    }`}
                  >
                    <ProcessCard
                      step={step}
                      index={index}
                      active={isActive}
                      onClick={() => setActive(index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-start md:items-center">
            <div className="ml-[-6px] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white shadow-[0_0_40px_rgba(34,197,94,0.55)] md:ml-0">
              <CheckCircle size={24} />
            </div>
            <p className="ml-20 mt-[-48px] text-xs font-bold uppercase tracking-[0.25em] text-green-400 md:ml-0 md:mt-4">
              Launch
            </p>
            <p className="ml-20 mt-1 text-sm text-white/40 md:ml-0">
              Your product is live & growing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
  active,
  onClick,
}: {
  step: Step;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-2xl border p-4 sm:p-6 text-left transition-all duration-300 ${
        active
          ? "border-green-500/40 bg-green-500/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          : "border-white/10 bg-white/[0.035] hover:border-green-500/30 hover:bg-green-500/[0.06]"
      }`}
    >
      <div className="absolute right-4 bottom-[-22px] text-7xl sm:text-8xl font-black leading-none text-white/[0.035]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-green-400">
        Step {String(index + 1).padStart(2, "0")}
      </p>

      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10 text-green-400">
          {step.icon}
        </div>

        <h3 className="text-xl font-black text-white">{step.title}</h3>
      </div>

      <p className="relative z-10 text-sm leading-7 text-white/50">
        {step.desc}
      </p>

      <div
        className={`relative z-10 mt-5 flex flex-wrap gap-2 transition-all ${
          active ? "opacity-100" : "opacity-70"
        }`}
      >
        {step.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}