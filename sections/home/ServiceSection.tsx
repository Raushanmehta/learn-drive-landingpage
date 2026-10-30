"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  IoCar,
  IoIdCard,
  IoShieldCheckmark,
  IoSpeedometer,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { PiSteeringWheelBold } from "react-icons/pi";
import Autoplay from "embla-carousel-autoplay";
import ServiceCard from "@/components/cards/ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnServicesData, type SectionProps } from "@/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PiSteeringWheelBold,
  IoIdCard,
  IoShieldCheckmark,
  IoCar,
  IoSpeedometer,
};

export default function ServiceSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnServicesData> = {}) {
  const data = propData || siteMap.services;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section
      id="services"
      className={`relative py-12 lg:py-16 bg-[#040e25] text-white overflow-hidden scroll-mt-20 ${poppins.className} ${className}`}
    >
      {/* Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Header with Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl space-y-2">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 sm:w-12 h-[2px] bg-[#F5B90B] rounded-full" />
              <span className="flex items-center gap-2 text-white font-medium text-[14px] sm:text-[15px] tracking-wide">
                <IoCar className="text-[#F5B90B] text-4xl shrink-0" />
                <span>{data.eyebrow}</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight"
            >
              <span className="text-white">{data.title.part1} </span>
              <span className="text-[#F5B90B]">{data.title.part2}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-[#9db2ce] text-[14.5px] sm:text-[15.5px] leading-relaxed pt-1"
            >
              {data.description}
            </motion.p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous service slide"
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-[#F5B90B] hover:border-[#F5B90B] hover:text-[#081839] text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#F5B90B]"
            >
              <IoChevronBack className="text-xl" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next service slide"
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-[#F5B90B] hover:border-[#F5B90B] hover:text-[#081839] text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#F5B90B]"
            >
              <IoChevronForward className="text-xl" />
            </button>
          </div>
        </div>

        {/* Shadcn UI Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4500,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {data.courseList.map((service) => {
                const IconComponent = iconMap[service.icon] || PiSteeringWheelBold;
                return (
                  <CarouselItem
                    key={service.number}
                    className="pl-3 sm:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full pb-2">
                      <ServiceCard
                        number={service.number}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        icon={IconComponent}
                        href={service.href}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Carousel Pagination Dots */}
        {count > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${current === index
                  ? "w-8 bg-[#F5B90B]"
                  : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
