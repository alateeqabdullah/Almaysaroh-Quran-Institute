"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Description from "./Description";
import H2 from "./H2";

export default function ContactSection() {
  return (
    <section className="py-20 bg-surface" >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <H2 className="text-primary mb-4">Contact Us</H2>
        <Description className=" mb-12 max-w-2xl mx-auto">
          Get in touch with us for inquiries, enrollment, or more information
          about our programs.
        </Description>

        <div className="grid gap-8 text-gray-900 md:grid-cols-3 max-w-4xl mx-auto">
          {/* Location */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-700 rounded-full mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Our Location
            </h3>
            <p className="text-center">
              Al-Maysaroh Quran Institute, Ibadan, Oyo, Nigeria
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-700 rounded-full mb-4">
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Email</h3>
            <p className="text-center">
              almaysaroh3117.com
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-700 rounded-full mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Phone</h3>
            <p className="text-gray-900 text-center">+234 703 117 0308</p>
          </motion.div>
        </div>

        {/* Optional Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d7.435!3d10.512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sAl-Maysaroh+Quran+Institute!5e0!3m2!1sen!2sng!4v0000000000"
            className="w-full h-64 rounded-2xl border-0 shadow-md"
            allowFullScreen
            loading="lazy"
            title="Al-Maysaroh Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}


