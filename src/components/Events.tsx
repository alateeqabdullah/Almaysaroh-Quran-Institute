"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import H2 from "./H2";
import Description from "./Description";
import { events } from "@/data/events";

export default function Events() {
  return (
    <section className="py-20 bg-yellow-600 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <H2 className="text-surface ">Upcoming Events</H2>
        <Description className=" text-gray-700 mb-12 ">
          Join our upcoming programs and events designed to help students
          advance in their Qur’an learning journey.
        </Description>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 mb-4 mx-auto">
                <Calendar size={28} />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-1">
                {event.title}
              </h3>
              <p className="text-green-600 mb-2">{event.date}</p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
