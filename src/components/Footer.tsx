"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Al-Maysaroh</h2>
          <p className="text-green-200">
            Almaysaroh Quran Institute — nurturing Qur’an knowledge with excellence in both online and physical programs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-yellow-400 transition">Programs</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-yellow-400 transition"><Facebook size={24} /></Link>
            <Link href="#" className="hover:text-yellow-400 transition"><Instagram size={24} /></Link>
            <Link href="#" className="hover:text-yellow-400 transition"><Twitter size={24} /></Link>
            <Link href="#" className="hover:text-yellow-400 transition"><Youtube size={24} /></Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-green-700 pt-4 text-center text-green-300 text-sm">
        © {new Date().getFullYear()} Al-Maysaroh Quran Institute. All rights reserved.
      </div>
    </footer>
  );
}