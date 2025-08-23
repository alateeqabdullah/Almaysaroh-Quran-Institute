import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lateef } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NProgressProvider from "./providers/NProgressProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lateef = Lateef({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Al-Maysaroh Institute",
  description: "Quran as a way of life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-bg ${lateef.variable} antialiased flex flex-col pt-40 min-h-dvh `}
      >
        <NProgressProvider />
        <Navbar />
        <main className="grow ">
          
          {children}
     </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
