"use client";

import H2 from "@/components/H2";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquarePlus } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <H2 className="text-green-700 ">Contact Us</H2>
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
              <p className="text-gray-700">{" Al-Maysaroh Qur'an Institute"}</p>
            </div>
            <div className="flex items-center gap-4">
              <MessageSquarePlus className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-700">chat with us on WhatsApp</p>
            </div>

            {/* Optional Map */}
            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-5xl"
            >
              <h2 className="text-2xl font-semibold text-emerald-700 text-center mb-6">
                Visit Us
              </h2>
              <iframe
                src="https://www.google.com/maps?q=Plot+9,+Moradeyo+L/Adisa+Layout,+IdiOse,+Moniya+Express,+Ibadan,+Oyo&output=embed"
                width="100%"
                
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-xl border border-emerald-100"
              ></iframe>
            </motion.div>
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
              src="https://tally.so/embed/nr4X8N?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
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


