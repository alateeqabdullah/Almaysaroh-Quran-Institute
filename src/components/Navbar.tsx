"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import EnrollButton from "./EnrollButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-white top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-10 py-8 flex items-center justify-between   ">
        {/* Logo */}
        <Link
          href="/"
          className=" text-xl md:text-2xl lg:text-3xl font-bold text-primary "
        >
          Almaysaroh
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <div key={link.href} className="relative">
              <Link
                href={link.href}
                className={`text-gray-700 text-xl  font-semibold hover:text-primary-dark transition-colors`}
              >
                {link.label}
              </Link>
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 w-[110%] h-[3px] bg-primary-light"
                />
              )}
            </div>
          ))}
          <EnrollButton className=" leading-relaxed rounded-full py-6 px-6">
            Enroll Now
          </EnrollButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="lg:hidden bg-white shadow-inner overflow-hidden"
        >
          <div className="flex flex-col items-center px-6 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-gray-700 text-2xl hover:text-primary transition-colors ${
                  pathname === link.href ? "font-semibold text-green-700" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <EnrollButton
              onClick={() => setIsOpen(false)}
              className=" rounded py-6"
            >
              Enroll Now
            </EnrollButton>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
