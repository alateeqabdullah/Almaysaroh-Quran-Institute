"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import H2 from "./H2";
import Description from "./Description";
import EnrollButton from "./EnrollButton";

export default function CTA() {
  return (
    <section className="relative py-20 bg-green-800 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <H2
          className="text-4xl md:text-5xl mb-6"
        
        >
          Begin Your Qur’an Journey Today
        </H2>
        <motion.div
              
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white shadow-lg rounded-sm mb-4 border border-green-200 hover:shadow-xl hover:border-green-400 transition-all"
              >
        <Description
          className="text-lg md:text-xl pt-6 mb-8 text-green-700  "
          
          >
          Enroll now and join hundreds of students learning the Qur’an with
          passion and dedication. Online & in-person classes available.
        </Description>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <EnrollButton
           
            className="bg-yellow-500 text-gray-900 hover:bg-yellow-300"
          >
            Enroll Now
          </EnrollButton>
        </motion.div>
      </div>
    </section>
  );
}
