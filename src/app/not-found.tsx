"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-white px-6 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg"
      >
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 shadow-md">
          <BookOpen className="h-10 w-10 text-emerald-600" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-emerald-900 md:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, the page you’re looking for doesn’t exist. Perhaps you’re
          looking for one of our programs or events at{" "}
          <span className="font-semibold text-emerald-700">
            Almaysaroh Quran Institute
          </span>
          .
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild className="rounded-2xl text-surface px-6 py-3">
            <Link href="/">🏠 Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-2xl px-6 py-3">
            <Link href="/programs">📖 Explore Programs</Link>
          </Button>
        </div>

        {/* Qur'an Verse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 border-t pt-6 text-gray-700"
        >
          <p className="text-xl font-arabic leading-relaxed text-emerald-800">
            وَعَسَىٰ أَن تَكْرَهُوا شَيْـًٔا وَهُوَ خَيْرٌۭ لَّكُمْ
          </p>
          <p className="mt-2 text-sm italic text-gray-500">
            “But perhaps you hate a thing and it is good for you.” (Qur’an
            2:216)
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
