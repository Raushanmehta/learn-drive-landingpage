"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IoArrowForward,
  IoChevronBack,
  IoChevronForward,
  IoStar,
} from "react-icons/io5";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "@/components/cards/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { poppins } from "@/lib/fonts";
import {
  siteMap,
  type DriveLearnTestimonialData,
  type SectionProps,
} from "@/data";
import { useContactModal } from "@/context/ContactModalContext";

export default function TestimonialSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnTestimonialData> = {}) {
  const data = propData || siteMap.testimonial;
  const { openModal } = useContactModal();

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
      id="testimonials"
      className={`relative py-12 lg:py-16 bg-[#040e25] text-white overflow-hidden scroll-mt-20 ${poppins.className} ${className}`}
    >
      {/* Background Subtle Image */}
      <div className="absolute top-0 left-0 w-full lg:w-[48%] h-full z-0 opacity-45 pointer-events-none select-none">
        <Image
          src={data.bgImage}
          alt="Happy student driver"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#040e25]/70 to-[#040e25]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e25] via-transparent to-[#040e25]" />
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Rating & CTA */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight"
            >
              <span className="text-white block">{data.title.part1}</span>
              <span className="text-[#F5B90B] block">{data.title.part2}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#9db2ce] text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-sm"
            >
              {data.description}
            </motion.p>



            {/* Action Row: CTA & Controls */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="group inline-flex items-center gap-3 bg-[#F5B90B] hover:bg-[#e0a708] text-[#081839] font-bold text-[13px] tracking-wider uppercase pl-6 pr-2 py-2 rounded-full shadow-lg transition-all cursor-pointer"
                >
                  <span>{data.cta.text}</span>
                  <span className="w-7 h-7 rounded-full bg-[#081839] text-[#F5B90B] flex items-center justify-center text-sm font-bold shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                    <IoArrowForward />
                  </span>
                </button>
              </motion.div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#F5B90B] hover:border-[#F5B90B] hover:text-[#081839] text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#F5B90B]"
                >
                  <IoChevronBack className="text-lg" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#F5B90B] hover:border-[#F5B90B] hover:text-[#081839] text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#F5B90B]"
                >
                  <IoChevronForward className="text-lg" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Shadcn Carousel with Testimonials */}
          <div className="lg:col-span-8">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-3 sm:-ml-4">
                {data.testimonials.map((t) => (
                  <CarouselItem
                    key={t.name}
                    className="pl-3 sm:pl-4 basis-full md:basis-1/2"
                  >
                    <div className="h-full pb-2">
                      <TestimonialCard {...t} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Pagination Dots */}
            {count > 1 && (
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 pl-1">
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
        </div>
      </div>
    </section>
  );
}
