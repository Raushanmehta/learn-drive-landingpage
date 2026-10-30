"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IoArrowForward,
  IoChevronDown,
} from "react-icons/io5";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnHeroData } from "@/data";
import { useContactModal } from "@/context/ContactModalContext";

interface HeroSectionProps {
  data?: DriveLearnHeroData;
}

export default function HeroSection({ data: propData }: HeroSectionProps = {}) {
  const data = propData || siteMap.hero;
  const slides = data.slides;
  const { openModal } = useContactModal();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="home" className={`relative w-full overflow-hidden bg-[#040e25] scroll-mt-20 ${poppins.className}`}>
      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          duration: 35,
        }}
        plugins={[
          Autoplay({
            delay: 5500,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className="relative pl-0 w-full min-h-[540px] sm:min-h-[560px] lg:min-h-[585px] flex items-center justify-center"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.titleTop}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transition-transform duration-1000 scale-100"
                />

                {/* Background */}
                <div className="absolute inset-0 bg-[#040e25]/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#040e25]/95 via-[#040e25]/65 to-transparent z-10" />
              </div>

              {/* Content */}
              <div className="max-w-[1420px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 lg:py-20 relative z-20">
                <div className="max-w-xl lg:max-w-2xl">
                  {/* Eyebrow */}
                  <motion.div
                    key={`eyebrow-${current}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="text-[15px] sm:text-[17px] font-medium text-white/90 tracking-wide block mb-1 sm:mb-2">
                      {slide.eyebrow}
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    key={`headline-${current}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                    className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-white leading-[1.12] tracking-tight"
                  >
                    <span className="block">{slide.titleTop}</span>

                    {/* Slanted */}
                    <span className="inline-block relative my-1.5 sm:my-2">
                      <span className="inline-block bg-[#F5B90B] text-[#081839] px-6 sm:px-8 py-1.5 sm:py-1.5 -skew-x-[20deg] rounded-[3px] shadow-lg">
                        <span className="inline-block skew-x-[20deg] italic font-black tracking-wide">
                          {slide.badge}
                        </span>
                      </span>
                    </span>

                    <span className="block">{slide.titleBottom}</span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    key={`desc-${current}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                    className="text-[14.5px] sm:text-[16px] text-gray-200/90 leading-relaxed max-w-lg mt-2 sm:mt-2"
                  >
                    {slide.description}
                  </motion.p>

                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-wrap items-center gap-5 sm:gap-7 mt-2 sm:mt-2"
                  >
                    {/* Services */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <button
                        type="button"
                        onClick={() => openModal()}
                        className="group inline-flex items-center gap-2.5 bg-[#F5B90B] hover:bg-[#e0a708] text-[#081839] px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] font-bold text-[15px] sm:text-[16px] transition-all shadow-md cursor-pointer"
                      >
                        <span>Book Your Lesson</span>
                        <IoArrowForward className="text-lg transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Center */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center"
      >
        <a
          href="#about"
          aria-label="Scroll down"
          className="w-7 h-10 rounded-full border border-white/60 flex items-center justify-center hover:border-white transition-colors"
        >
          <IoChevronDown className="text-white text-sm" />
        </a>
      </motion.div>

    </section>
  );
}