"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView } from "framer-motion";
import {
  TbSteeringWheel,
  TbUserStar,
  TbMap2,
  TbUserCheck,
} from "react-icons/tb";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnStatsData, type SectionProps } from "@/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TbSteeringWheel,
  TbUserStar,
  TbMap2,
  TbUserCheck,
};

function Counter({
  end,
  suffix = "",
  duration = 2.2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, end, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnStatsData> = {}) {
  const data = propData || siteMap.stats;

  return (
    <section
      id="stats"
      className={`relative py-8 lg:py-16 bg-[#061536] text-white overflow-hidden scroll-mt-20 ${poppins.className} ${className}`}
    >
      {/* Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage}
          alt="Fleet of training vehicles"
          fill
          className="object-cover object-center mix-blend-multiply opacity-35 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040e25]/95 via-[#081839]/90 to-[#040e25]/95" />
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
          {data.statsList.map((stat, index) => {
            const Icon = iconMap[stat.icon] || TbSteeringWheel;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                {/* Divider */}
                <div className="flex items-center gap-3 self-stretch shrink-0">
                  <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] sm:text-[12px] font-bold text-white/80 tracking-widest uppercase select-none">
                    {stat.verticalLabel}
                  </span>
                  <div className="w-[1.5px] h-full min-h-[110px] bg-[#F5B90B]/40 rounded-full" />
                </div>

                {/* Stats */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* Stats */}
                  <div className="select-none">
                    <span className="font-black text-5xl sm:text-6xl lg:text-[70px] leading-none tracking-tight text-transparent [-webkit-text-stroke:2.5px_#F5B90B] block tabular-nums">
                      <Counter end={stat.target} suffix={stat.suffix} />
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight mt-2 mb-3 leading-snug">
                    {stat.title}
                  </h3>

                  {/* Bottom */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-18 h-18 flex items-center justify-center text-[#F5B90B] text-6xl mt-1"
                  >
                    <Icon className="stroke-[1.8]" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}