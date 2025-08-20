"use client";

import { BookOpen, Award, Heart, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutIntro from "./about/AboutIntro";
import History from "./about/History";

interface AboutCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: AboutCard[] = [
  {
    icon: BookOpen,
    title: "Our Mission",
    description:
      "To nurture students in Qur’ān recitation, memorization, and Islamic character through modern, flexible learning methods.",
  },
  {
    icon: Award,
    title: "Our Vision",
    description:
      "To be a leading Quranic institute recognized for excellence in teaching and student development.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, dedication, compassion, and fostering a lifelong love for the Qur’an and Islamic knowledge.",
  },
];

export default function Try() {
  return (
    <section className="relative py-16 px-6 lg:px-20 bg-primary-dark ">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-surface mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-primary-light/50">Us</span>
        </motion.h2>

    

        
        <motion.p
          className="text-surface text-xl font-semibold max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Learn more about our philosophy, goals, and the values that guide our
          students’ learning journey.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`bg-surface rounded-2xl shadow-md p-8 hover:shadow-lg transition-all 
                  ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
                  `}
              >
                <div className="flex items-center justify-center w-30 h-30 rounded-full bg-green-300 text-primary mx-auto my-6 ">
                  <Icon size={50} />
                </div>
                <h3 className="text-3xl font-semibold text-primary-dark mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-lg ">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href="/about"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full shadow transition-all"
          >
            Read More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
