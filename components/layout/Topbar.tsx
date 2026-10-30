"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnTopbarData } from "@/data";

interface TopbarProps {
  data?: DriveLearnTopbarData;
}

export default function Topbar({ data: propData }: TopbarProps = {}) {
  const data = propData || siteMap.topbar;
  const { logo, contactInfo } = data;

  return (
    <header className={`w-full bg-white border-b border-gray-100/90 ${poppins.className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row items-center justify-center md:justify-between py-2 md:py-0">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full md:w-auto flex justify-center md:justify-start shrink-0 py-1.5 md:py-1"
        >
          <Link href={logo.href || "/"} className="inline-block transition-transform hover:opacity-95" aria-label={logo.alt}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 380}
              height={logo.height || 125}
              priority
              className="h-11 sm:h-12 md:h-[46px] lg:h-[70px] w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }}
          className="hidden md:flex flex-nowrap items-center justify-end md:gap-3 lg:gap-7 xl:gap-8 shrink-0"
        >
          {/* Location */}
          <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 lg:gap-3 shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-[#F5B90B] text-[20px] lg:text-[26px] shrink-0 flex items-center justify-center"
            >
              <IoLocationSharp />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-[12px] lg:text-[14px] font-bold text-[#081839] tracking-tight whitespace-nowrap">
                {contactInfo.location.line1}
              </span>
              <span className="text-[10.5px] lg:text-[12px] font-normal text-[#5b6b82] mt-0.5 whitespace-nowrap">
                {contactInfo.location.line2}
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] md:h-6 lg:h-7 bg-gray-200/90 shrink-0" aria-hidden="true" />

          {/* Support */}
          <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 lg:gap-3 shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.12, rotate: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-[#F5B90B] text-[18px] lg:text-[21px] shrink-0 flex items-center justify-center"
            >
              <IoCall />
            </motion.div>
            <a
              href={contactInfo.phone.href}
              className="text-[12.5px] lg:text-[15px] font-bold text-[#081839] hover:text-[#F5B90B] transition-colors tracking-tight whitespace-nowrap"
            >
              {contactInfo.phone.number}
            </a>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] md:h-6 lg:h-7 bg-gray-200/90 shrink-0" aria-hidden="true" />

          {/* Email */}
          <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 lg:gap-3 shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] rounded-[5px] lg:rounded-[6px] bg-[#F5B90B] flex items-center justify-center text-[#081839] shrink-0 shadow-xs"
            >
              <IoMail className="text-[13px] lg:text-[17px]" />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <a
                href={contactInfo.emailTiming.href}
                className="text-[12px] lg:text-[14px] font-bold text-[#081839] hover:text-[#F5B90B] transition-colors tracking-tight whitespace-nowrap"
              >
                {contactInfo.emailTiming.email}
              </a>
              <span className="text-[10.5px] lg:text-[12px] font-normal text-[#5b6b82] mt-0.5 whitespace-nowrap">
                {contactInfo.emailTiming.timing}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}