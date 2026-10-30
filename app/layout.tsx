import { Suspense } from "react";
import type { Metadata } from "next";
import { roboto, poppins } from "@/lib/fonts";
import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ContactModalProvider } from "@/context/ContactModalContext";

export const metadata: Metadata = {
  title: "Drive Learn",
  description: "Drive Learn Driving School Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.variable} ${poppins.variable} ${poppins.className} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <ContactModalProvider>
          <Topbar />
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
