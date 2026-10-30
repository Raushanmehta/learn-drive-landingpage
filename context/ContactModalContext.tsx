"use client";

import React, { createContext, useContext, useState } from "react";
import ContactModal from "@/components/common/ContactModal";

interface ContactModalContextType {
  isOpen: boolean;
  openModal: (defaultCourse?: string) => void;
  closeModal: () => void;
  defaultCourse: string;
}

const ContactModalContext = createContext<ContactModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  defaultCourse: "",
});

export const useContactModal = () => useContext(ContactModalContext);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultCourse, setDefaultCourse] = useState<string>("");

  const openModal = (course?: string) => {
    if (course) {
      setDefaultCourse(course);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ContactModalContext.Provider
      value={{ isOpen, openModal, closeModal, defaultCourse }}
    >
      {children}
      <ContactModal
        open={isOpen}
        onOpenChange={setIsOpen}
        defaultCourse={defaultCourse}
      />
    </ContactModalContext.Provider>
  );
}

