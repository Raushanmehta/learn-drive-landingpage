"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  IoCall,
  IoChevronForward,
  IoLocationSharp,
  IoMail,
  IoTimeSharp,
} from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnFooterData } from "@/data";
import { useContactModal } from "@/context/ContactModalContext";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  LinkedIn: FaLinkedinIn,
};

interface FooterProps {
  data?: DriveLearnFooterData;
}

export default function Footer({ data: propData }: FooterProps = {}) {
  const data = propData || siteMap.footer;
  const { logo, description, bgImage, quickLinks, ourServices, contact, socialLinks, copyright } = data;
  const { openModal } = useContactModal();

  return (
    <footer id="contact" className={`relative bg-[#061536] text-white overflow-hidden scroll-mt-20 ${poppins.className}`}>
      {/* Image */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 pointer-events-none select-none">
        <Image
          src={bgImage}
          alt="Driving background"
          fill
          priority={false}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061536] via-[#061536]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061536] via-transparent to-[#061536]" />
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href={logo.href || "/"} className="inline-block" aria-label={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 380}
                height={logo.height || 125}
                className="h-16 sm:h-20 md:h-[70px] w-auto object-contain"
              />
            </Link>

            <p className="text-[#9db2ce] text-[13.5px] sm:text-[14px] leading-relaxed max-w-sm">
              {description}
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ platform, href, label }) => {
                const Icon = socialIconMap[platform] || FaFacebookF;
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:text-[#081839] hover:bg-[#F5B90B] hover:border-[#F5B90B] transition-all duration-200 text-lg shadow-xs"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-[17px] tracking-tight">
              Quick Links
            </h3>
            <div className="w-8 h-[3px] bg-[#F5B90B] rounded-full mt-2 mb-5" />

            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={`${link.name}-${idx}`}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[14px] text-white/80 hover:text-white transition-colors"
                  >
                    <IoChevronForward className="text-[#F5B90B] text-xs shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-[17px] tracking-tight">
              Our Services
            </h3>
            <div className="w-8 h-[3px] bg-[#F5B90B] rounded-full mt-2 mb-5" />

            <ul className="space-y-3">
              {ourServices.map((service, idx) => (
                <li key={`${service.name}-${idx}`}>
                  <button
                    type="button"
                    onClick={() => openModal(service.name)}
                    className="group flex items-center gap-2 text-[14px] text-white/80 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    <IoChevronForward className="text-[#F5B90B] text-xs shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-[17px] tracking-tight">
              Get In Touch
            </h3>
            <div className="w-8 h-[3px] bg-[#F5B90B] rounded-full mt-2 mb-5" />

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#F5B90B] flex items-center justify-center text-[#081839] shrink-0 mt-0.5 shadow-sm">
                  <IoLocationSharp className="text-2xl" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[14px] font-medium text-white">
                    {contact.address.line1}
                  </span>
                  <span className="text-[13px] text-[#9db2ce] mt-0.5">
                    {contact.address.line2}
                  </span>
                </div>
              </div>

              {/* Support */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#F5B90B] flex items-center justify-center text-[#081839] shrink-0 shadow-sm">
                  <IoCall className="text-2xl" />
                </div>
                <a
                  href={contact.phone.href}
                  className="text-[14px] font-medium text-white hover:text-[#F5B90B] transition-colors"
                >
                  {contact.phone.display}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#F5B90B] flex items-center justify-center text-[#081839] shrink-0 shadow-sm">
                  <IoMail className="text-2xl" />
                </div>
                <a
                  href={contact.email.href}
                  className="text-[14px] font-medium text-white hover:text-[#F5B90B] transition-colors"
                >
                  {contact.email.display}
                </a>
              </div>



            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-5 text-center text-[13.5px] text-[#9db2ce]">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}