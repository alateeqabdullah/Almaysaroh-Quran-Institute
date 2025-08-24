"use client"

import { motion } from "framer-motion"

export default function ContactForm() {
    return (<div>

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
    );
}