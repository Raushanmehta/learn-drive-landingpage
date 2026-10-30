"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoCar,
  IoChevronDown,
} from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnFaqData, type SectionProps } from "@/data";
import { useContactModal } from "@/context/ContactModalContext";

export default function FaqSection({
  data: propData,
  className = "",
}: SectionProps<DriveLearnFaqData> = {}) {
  const data = propData || siteMap.faqs;
  const { faqList } = data;
  const { openModal } = useContactModal();

  // First item open by default
  const [openId, setOpenId] = useState<string | null>(faqList[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className={`relative  py-8 lg:py-12 bg-[#f8fafc] overflow-hidden scroll-mt-20 ${poppins.className} ${className}`}
    >
      {/* Background Subtle Accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

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
        <div className="lg:col-span-7 space-y-3.5">
          {faqList.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-xl border transition-all duration-200 overflow-hidden bg-white ${isOpen
                  ? "border-[#F5B90B]/60 shadow-md ring-1 ring-[#F5B90B]/30"
                  : "border-gray-200/90 hover:border-gray-300 shadow-xs"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md transition-colors ${isOpen
                        ? "bg-[#F5B90B] text-[#081839]"
                        : "bg-gray-100 text-[#081839]"
                        }`}
                    >
                      Q{index + 1}
                    </span>
                    <span
                      className={`font-bold text-[15.5px] sm:text-[16.5px] leading-snug tracking-tight transition-colors ${isOpen ? "text-[#d97706]" : "text-[#081839]"
                        }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen
                      ? "bg-[#F5B90B] text-[#081839]"
                      : "bg-gray-100 text-[#081839]"
                      }`}
                  >
                    <IoChevronDown className="text-base" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-[#556987] text-[14px] sm:text-[14.5px] leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
