"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronForward, IoMenu, IoClose } from "react-icons/io5";
import { poppins } from "@/lib/fonts";
import { siteMap, type DriveLearnNavbarData } from "@/data";
import { useContactModal } from "@/context/ContactModalContext";

interface NavbarProps {
  data?: DriveLearnNavbarData;
}

const SECTION_IDS = ["home", "about", "services", "why-choose-us", "testimonials", "faqs"];

export default function Navbar({ data: propData }: NavbarProps = {}) {
  const data = propData || siteMap.navbar;
  const { navLinks, cta } = data;
  const { openModal } = useContactModal();

  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // ScrollSpy to highlight the active section on scroll
  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY;
    setIsScrolled(scrollPos > 30);

    if (scrollPos < 150) {
      setActiveSection("home");
      return;
    }

    const offset = 180;
    for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
      const id = SECTION_IDS[i];
      const element = document.getElementById(id);
      if (element) {
        const top = element.offsetTop - offset;
        if (scrollPos >= top) {
          setActiveSection(id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const navHeight = 70;
        const targetPosition = element.offsetTop - navHeight;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth",
        });

        setActiveSection(targetId);
        window.history.pushState(null, "", href);
      }
      setMobileMenuOpen(false);
    }
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`w-full bg-[#061536] sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-xl border-b border-white/10" : "shadow-md"
        } ${poppins.className}`}
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-[60px] md:h-[68px]">
          {/* Desktop Nav Links */}
          <ul className="hidden xl:flex items-center gap-2 2xl:gap-3">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive =
                activeSection === targetId ||
                (link.href === "/" && activeSection === "home") ||
                (link.href === "#home" && activeSection === "home");

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`inline-block px-4 py-2 rounded-[6px] font-bold text-[14.5px] transition-all duration-200 ${isActive
                        ? "bg-[#F5B90B] text-[#081839] shadow-sm"
                        : "text-white/90 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5B90B]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <IoClose className="text-2xl text-white" />
              ) : (
                <IoMenu className="text-2xl text-white" />
              )}
            </button>
            <span className="text-white font-semibold text-sm xl:hidden select-none">
              Navigation Menu
            </span>
          </div>

          {/* CTA Action Button */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button
                type="button"
                onClick={() => openModal()}
                className="group flex items-center gap-2.5 bg-[#F5B90B] hover:bg-[#e0a708] text-[#081839] font-bold text-[14px] sm:text-[14.5px] pl-5 pr-2 py-1.5 sm:py-2 rounded-full transition-all shadow-md cursor-pointer"
              >
                <span>{cta.text}</span>
                <span className="w-6 h-6 rounded-full bg-[#081839] flex items-center justify-center text-[#F5B90B] text-xs font-bold shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <IoChevronForward className="stroke-[2.5]" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="xl:hidden border-t border-white/10 bg-[#061536] overflow-hidden shadow-2xl"
          >
            <div className="px-4 sm:px-6 pt-3 pb-5 space-y-1.5">
              {navLinks.map((link) => {
                const targetId = link.href.replace("#", "");
                const isActive =
                  activeSection === targetId ||
                  (link.href === "/" && activeSection === "home") ||
                  (link.href === "#home" && activeSection === "home");

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`block px-4 py-2.5 rounded-md text-[14.5px] font-bold transition-colors ${isActive
                        ? "bg-[#F5B90B] text-[#081839] shadow-xs"
                        : "text-white/90 hover:bg-white/5 hover:text-[#F5B90B]"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
