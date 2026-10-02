import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-auto max-w-7xl flex-col items-center justify-center gap-1.5 px-4 py-2 text-[12px] sm:h-9 sm:flex-row sm:justify-end sm:gap-4 sm:py-0 sm:text-[13px]">
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-[12px] font-semibold leading-none text-slate-800 sm:text-[13px]">
          <div className="flex items-center gap-1.5">
            <Phone size={14} className="shrink-0 text-green-700" />
            <a href="tel:+9779803713931" className="transition hover:text-green-700">
              +977 - 9803713931
            </a>
          </div>
          <span className="text-gray-300">|</span>
          <a href="tel:+9779824790012" className="transition hover:text-green-700">
            +977 - 9824790012
          </a>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-1.5">
            <Mail size={14} className="shrink-0 text-green-700" />
            <a
              href="mailto:info@optiverseits.com.np"
              className="transition hover:text-green-700"
            >
              info@optiverseits.com.np
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}