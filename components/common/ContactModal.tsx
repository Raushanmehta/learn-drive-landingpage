"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  IoCar,
  IoPerson,
  IoCall,
  IoMail,
  IoCheckmarkCircle,
  IoArrowForward,
} from "react-icons/io5";
import { poppins } from "@/lib/fonts";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultCourse?: string;
}

const COURSES = [
  "Novice Driver Foundation",
  "Official License Preparation",
  "Car Safety & Mechanics",
  "Confidence Booster Sessions",
  "Accelerated Express Program",
];

export default function ContactModal({
  open,
  onOpenChange,
  defaultCourse = "",
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: defaultCourse || COURSES[0],
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onOpenChange(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        course: COURSES[0],
        message: "",
      });
    }, 2500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-lg p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-2xl ${poppins.className}`}>
        {/* Header - Centered Title and Description */}
        <DialogHeader className="text-center sm:text-center space-y-2 mb-2">

          {/* Centered Title */}
          <DialogTitle className="text-2xl sm:text-[26px] font-extrabold text-[#081839] text-center tracking-tight leading-snug">
            Schedule Your <span className="text-[#F5B90B]">Driving Lessons</span>
          </DialogTitle>

          {/* Centered Description */}
          <DialogDescription className="text-[#556987] text-[13.5px] sm:text-[14px] text-center max-w-sm mx-auto leading-relaxed">
            Submit your details below and our licensed driving trainers will reach out promptly to confirm your sessions.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto text-4xl shadow-sm animate-bounce">
              <IoCheckmarkCircle />
            </div>
            <h4 className="text-xl font-bold text-[#081839]">
              Enquiry Submitted Successfully!
            </h4>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Thank you for choosing DriveLearn. Our team will contact you shortly on your provided phone number.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            {/* 1. Full Name */}
            <div className="space-y-1 text-left">
              <label
                htmlFor="modal-name"
                className="text-[12px] font-bold text-[#081839] uppercase tracking-wider block"
              >
                Full Name <span className="text-[#F5B90B]">*</span>
              </label>
              <div className="relative">
                <IoPerson className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  id="modal-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-[#081839] text-sm focus:border-[#F5B90B] focus:ring-2 focus:ring-[#F5B90B]/20 outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* 2. Phone Number */}
            <div className="space-y-1 text-left">
              <label
                htmlFor="modal-phone"
                className="text-[12px] font-bold text-[#081839] uppercase tracking-wider block"
              >
                Phone Number <span className="text-[#F5B90B]">*</span>
              </label>
              <div className="relative">
                <IoCall className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-[#081839] text-sm focus:border-[#F5B90B] focus:ring-2 focus:ring-[#F5B90B]/20 outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* 3. Email Address */}
            <div className="space-y-1 text-left">
              <label
                htmlFor="modal-email"
                className="text-[12px] font-bold text-[#081839] uppercase tracking-wider block"
              >
                Email Address <span className="text-[#F5B90B]">*</span>
              </label>
              <div className="relative">
                <IoMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  id="modal-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-[#081839] text-sm focus:border-[#F5B90B] focus:ring-2 focus:ring-[#F5B90B]/20 outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* 4. Select Course */}
            <div className="space-y-1 text-left">
              <label
                htmlFor="modal-course"
                className="text-[12px] font-bold text-[#081839] uppercase tracking-wider block"
              >
                Select Course <span className="text-[#F5B90B]">*</span>
              </label>
              <select
                id="modal-course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-[#081839] text-sm bg-white focus:border-[#F5B90B] focus:ring-2 focus:ring-[#F5B90B]/20 outline-none transition-all cursor-pointer font-medium"
              >
                {COURSES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* 5. Message / Preferred Slot */}
            <div className="space-y-1 text-left">
              <label
                htmlFor="modal-message"
                className="text-[12px] font-bold text-[#081839] uppercase tracking-wider block"
              >
                Preferred Timing / Note
              </label>
              <input
                id="modal-message"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="e.g. Weekend morning slot or dual control car"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-[#081839] text-sm focus:border-[#F5B90B] focus:ring-2 focus:ring-[#F5B90B]/20 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* 1 Single Action Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full py-3.5 h-auto bg-[#F5B90B] hover:bg-[#e0a708] text-[#081839] font-bold text-[15px] rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>Submit</span>
                <IoArrowForward className="text-base" />
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

