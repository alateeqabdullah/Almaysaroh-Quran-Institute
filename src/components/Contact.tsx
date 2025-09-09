"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Description from "./Description";
import H2 from "./H2";

export default function ContactSection() {
  return (
    <section className="py-20 bg-surface">
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
              Idi-Ose Moniya Express, Ibadan, Oyo State, Nigeria.
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
            <p className="text-center">almaysaroh3117.com</p>
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
            <p className="text-gray-900 text-center">+2348185300293</p>
          </motion.div>
        </div>

        {/* Optional Map */}
        <div className="mt-12  max-w-7xl mx-auto">
          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full "
          >
            <h2 className="text-2xl font-semibold text-emerald-700 text-center mb-6">
              Visit Us
            </h2>
            <iframe
              src="https://www.google.com/maps?q=Plot+9,+Moradeyo+L/Adisa+Layout,+IdiOse,+Moniya+Express,+Ibadan,+Oyo&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Al-Maysaroh Quran Institute"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-xl border border-emerald-100"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
