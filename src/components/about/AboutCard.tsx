"use client";

import { BookOpen, Award, Heart, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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

export default function AboutCard() {
  return (
    <section className="relative py-16 px-6 lg:px-20 bg-primary-dark ">
      <div className="max-w-7xl mx-auto text-center">
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

      </div>
    </section>
  );
}
