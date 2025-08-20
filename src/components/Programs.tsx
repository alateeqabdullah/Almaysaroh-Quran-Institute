"use client";

import { motion } from "framer-motion";
import { BookOpen, PenTool, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import H2 from "./H2";
import Description from "./Description";

type Program = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const programs: Program[] = [
  {
    icon: BookOpen,
    title: "Tajweed",
    description: "Master the rules of Tajweed with practical application.",
  },
  {
    icon: BookOpen,
    title: "Qiro'ah",
    description:
      "Master the art of reciting the Qur’ān with proper pronunciation, rhythm, and Tajweed rules.",
  },
  {
    icon: PenTool,
    title: "Tahfeedh (Qur’ān Memorization)",
    description:
      "Step-by-step memorization support with personalized plans for every learner’s pace.",
  },
  {
    icon: GraduationCap,
    title: "Murāja’ah (Revision and Retention) ",
    description: "Strengthen memorization through regular revision.",
  },
  // {
  //   icon: GraduationCap,
  //   title: "Intensive Ta’leem",
  //   description: "For students who want to learn everything comprehensively.",
  // },
];

export default function Programs() {
  return (
    <section className="bg-green-800 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <H2>Programs & Courses</H2>

        <Description className="text-yellow-400 pt-4 pb-10 ">
          Explore our structured learning paths designed to help you grow in
          Qur’ān recitation, memorization, and Islamic knowledge.
        </Description>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-green-50 rounded-2xl p-6 shadow-md border border-green-100 hover:shadow-lg hover:border-green-400 transition duration-300`}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 mx-auto mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-900 text-md">{program.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/programs">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg">
              View All Programs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

