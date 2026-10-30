"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IoCar,
  IoPeople,
  IoShieldCheckmark,
  IoCalendar,
} from "react-icons/io5";
import { FaAward, FaHandHoldingDollar } from "react-icons/fa6";
import FeatureCard from "@/components/cards/FeatureCard";
import { poppins } from "@/lib/fonts";
import {
  siteMap,
  type DriveLearnWhyChooseUsData,
  type SectionProps,
} from "@/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaAward,
  IoPeople,
  IoCar,
  IoShieldCheckmark,
  IoCalendar,
  FaHandHoldingDollar,
};

export default function WhyChooseUsSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnWhyChooseUsData> = {}) {
  const data = propData || siteMap.whyChooseUs;

  return (
    <section
      id="why-choose-us"
      className={`relative py-8 lg:py-12 bg-white overflow-hidden scroll-mt-20 ${poppins.className} ${className}`}
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-2 sm:mb-3 space-y-1.5 sm:space-y-2">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3.5"
          >
            <span className="w-10 sm:w-14 h-[2px] bg-[#F5B90B] rounded-full" />
            <span className="flex items-center gap-2 text-[#081839] font-medium text-[14px] sm:text-[15px] tracking-wide">
              <IoCar className="text-[#F5B90B] text-lg sm:text-4xl shrink-0" />
              <span>{data.eyebrow}</span>
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#F5B90B] rounded-full" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight"
          >
            <span className="text-[#081839]">{data.title.part1} </span>
            <span className="text-[#F5B90B]">{data.title.part2}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#556987] text-[15px] sm:text-[16px] leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-4 lg:gap-4 items-start">
          {/* Features */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-3 order-2 lg:order-1">
            {data.leftFeatures.map((feat) => {
              const IconComp = iconMap[feat.icon] || IoCar;
              return (
                <FeatureCard
                  key={feat.number}
                  number={feat.number}
                  title={feat.title}
                  description={feat.description}
                  icon={IconComp}
                  iconBg={feat.iconBg as "red" | "navy"}
                  borderSide={feat.borderSide as "left" | "right"}
                  borderColor={feat.borderColor as "red" | "navy"}
                  align={feat.align as "left" | "right"}
                />
              );
            })}
          </div>

          {/* Center */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-2 lg:py-0 order-1 lg:order-2">
            <div className="relative w-[330px] sm:w-[390px] lg:w-[420px] aspect-square flex items-center justify-center translate-y-6 sm:translate-y-7 lg:translate-y-8">
              {/* Outer */}
              <div
                className="absolute inset-2 sm:inset-3 rounded-full border-2 border-dashed border-[#F5B90B]/50 animate-[spin_60s_linear_infinite] pointer-events-none"
                aria-hidden="true"
              />

              {/* Central */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full z-10 drop-shadow-2xl scale-105 sm:scale-110"
              >
                <Image
                  src={data.centerImage}
                  alt="Modern car steering wheel"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Features */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-3 order-3">
            {data.rightFeatures.map((feat) => {
              const IconComp = iconMap[feat.icon] || IoCar;
              return (
                <FeatureCard
                  key={feat.number}
                  number={feat.number}
                  title={feat.title}
                  description={feat.description}
                  icon={IconComp}
                  iconBg={feat.iconBg as "red" | "navy"}
                  borderSide={feat.borderSide as "left" | "right"}
                  borderColor={feat.borderColor as "red" | "navy"}
                  align={feat.align as "left" | "right"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}