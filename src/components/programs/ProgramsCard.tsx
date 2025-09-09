"use client";

import Link from "next/link";
import Description from "../Description";
import H2 from "../H2";
import { programs } from "@/data/programs";
import { motion } from "framer-motion";

export default function ProgramsCard() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <H2 className="text-3xl font-bold text-green-800 mb-8">Our Programs</H2>
      <Description className="text-yellow-700  pb-10 ">
        Explore our structured learning paths designed to help you grow in
        Qur’ān recitation, memorization, and Islamic knowledge.
      </Description>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, index) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl pt-10 p-6 shadow-md border border-green-100 hover:shadow-lg hover:border-green-400 transition duration-300`}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 mx-auto">
                <Icon size={28} />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-emerald-800">
                  {p.name}
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {p.description}
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <Link
                    href={`/programs/${p.slug}`}
                    className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-xl  hover:bg-emerald-700"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/pricing/${p.slug}`}
                    className="inline-block text-emerald-700 hover:underline"
                  >
                    Pricing →
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
