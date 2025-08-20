"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquarePlus } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white py-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-emerald-700 text-center"
        >
          Contact Us
        </motion.h1>
        <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you. Whether you have a question about
          programs, pricing, or enrollment, our team is ready to answer all your
          questions.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-700">+234 801 234 5678</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-700">info@quranschool.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-700">
                Al-Hidayah Islamic Centre, Kaduna, Nigeria
              </p>
            </div>
            <div className="flex items-center gap-4">
              <MessageSquarePlus className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-700">
               chat with us on WhatsApp
              </p>
            </div>

            {/* Optional Map */}
            <div className="w-full h-56 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center text-gray-500 text-sm">
              Google Maps Embed Here
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-emerald-50 p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
              Send us a Message
            </h2>
            <iframe
              src="https://tally.so/embed/wg7r5d?hideTitle=1&transparentBackground=1"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
