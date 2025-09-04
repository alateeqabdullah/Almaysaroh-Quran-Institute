"use client";

import { links, socials } from "@/data/links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Al-Maysaroh</h2>
          <p className="text-green-200">
            Almaysaroh Quran Institute — nurturing Qur’an knowledge with
            excellence in both online and physical programs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href} className="hover:text-yellow-400 transition">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

         
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4">
            {socials.map(social => {
              const Icon = social.icon
              return(<Link
              key={social.href}
              href={social.href}
              target="_blank"
              className="hover:text-yellow-400 transition"
            >{ <Icon size={24} /> }</Link> )})}

          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-green-700 pt-4 text-center text-green-300 text-sm">
        © {new Date().getFullYear()} Al-Maysaroh Quran Institute. All rights
        reserved.
      </div>
    </footer>
  );
}
