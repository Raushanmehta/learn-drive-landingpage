"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoStar, IoStarOutline } from "react-icons/io5";

export interface TestimonialCardProps {
  title: string;
  review: string;
  name: string;
  location: string;
  avatar: string;
  rating?: number;
}

export default function TestimonialCard({
  title,
  review,
  name,
  location,
  avatar,
  rating = 4.5,
}: TestimonialCardProps) {
  return (
    <motion.div
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative h-full flex flex-col justify-between p-6 rounded-lg  sm:p-7 bg-[#091b3e]/95 border border-white/15 hover:border-white/30 rounded-xl shadow-2xl transition-all duration-300 [clip-path:polygon(0_0,calc(100%-70px)_0,100%_70px,100%_100%,0_100%)]"
    >
      {/* Decorative */}
      <svg
        className="absolute top-0 right-0 w-[70px] h-[70px] pointer-events-none z-10"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="0"
          x2="70"
          y2="70"
          stroke="currentColor"
          className="text-white/25 group-hover:text-white/45 transition-colors"
          strokeWidth="1.5"
        />
      </svg>

      {/* Tabs */}
      <div
        className="absolute bottom-0 left-0 w-28 h-20 bg-[#0d2350] -z-0 [clip-path:polygon(0_0,100%_35%,75%_100%,0_100%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Testimonial */}
      <div className="relative z-10">
        {/* Rating */}
        <div className="flex items-center gap-1 text-[#F5B90B] text-lg mb-2" aria-label={`${rating} stars rating`}>
          {[1, 2, 3, 4, 5].map((star) =>
            star <= Math.floor(rating) ? (
              <IoStar key={star} />
            ) : (
              <IoStarOutline key={star} />
            )
          )}
        </div>

        {/* Headline */}
        <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight leading-snug mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#9db2ce] text-[13.5px] sm:text-[14px] leading-relaxed mb-2">
          {review}
        </p>
      </div>

      {/* Testimonial */}
      <div className="relative z-10 flex items-center gap-4 pt-1">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white overflow-hidden shadow-lg shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-white font-bold text-[15px] sm:text-[16px]">
            {name}
          </span>
          <span className="text-[#F5B90B] font-bold text-[11px] sm:text-[12px] uppercase tracking-wider mt-1">
            {location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
