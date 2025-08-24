"use client"

import { motion } from "framer-motion";

export default function GoogleMap() {
    return (
      <div>
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
    );
}