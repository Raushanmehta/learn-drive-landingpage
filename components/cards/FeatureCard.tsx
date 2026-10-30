"use client";

import { motion } from "framer-motion";

export interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: "red" | "navy";
  borderSide: "left" | "right";
  borderColor: "red" | "navy";
  align: "left" | "right";
  arrowSide?: "left" | "right";
}

export default function FeatureCard({
  number,
  title,
  description,
  icon: Icon,
  iconBg,
  borderSide,
  borderColor,
  align,
  arrowSide,
}: FeatureCardProps) {
  const borderClass =
    borderSide === "left"
      ? borderColor === "red"
        ? "border-l-4 border-l-[#F5B90B]"
        : "border-l-4 border-l-[#081839]"
      : borderColor === "red"
        ? "border-r-4 border-r-[#F5B90B]"
        : "border-r-4 border-r-[#081839]";

  const iconBgClass =
    iconBg === "red" ? "bg-[#F5B90B] text-[#081839]" : "bg-[#081839] text-white";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative bg-white rounded-xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 ${borderClass} transition-all duration-300 flex items-center gap-3.5 sm:gap-4`}
    >
      {/* Ghost */}
      <span className="text-3xl sm:text-4xl font-extrabold text-gray-200 select-none shrink-0 leading-none">
        {number}
      </span>

      {/* Bigger */}
      <div
        className={`w-14 h-14 sm:w-18 sm:h-18 rounded-full ${iconBgClass} flex items-center justify-center shrink-0 shadow-md text-2xl sm:text-[38px]`}
      >
        <Icon />
      </div>

      {/* Divider */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#081839] tracking-tight">
          {title}
        </h3>
        <p className="text-[#556987] text-[12.5px] sm:text-[13px] leading-relaxed mt-1 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Dots */}
      {(arrowSide || (align === "left" ? "right" : "left")) === "right" ? (
        <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 items-center pointer-events-none z-20">
          {/* Tabs */}
          <div className="w-4.5 h-4.5 bg-white rotate-45 rounded-[2px] shadow-[2px_0_4px_rgba(0,0,0,0.04)] -mr-2.5" />
          {/* Image */}
          <div className="relative w-6 h-6 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.14)] border border-gray-100/90 flex items-center justify-center shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B90B] shadow-xs" />
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 items-center pointer-events-none z-20 flex-row-reverse">
          {/* Tabs */}
          <div className="w-4.5 h-4.5 bg-white rotate-45 rounded-[2px] shadow-[-2px_0_4px_rgba(0,0,0,0.04)] -ml-2.5" />
          {/* Image */}
          <div className="relative w-6 h-6 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.14)] border border-gray-100/90 flex items-center justify-center shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B90B] shadow-xs" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
