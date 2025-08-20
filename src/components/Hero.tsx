"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Pattern from "./Pattern";
import EnrollButton from "./EnrollButton";

export default function Hero() {
  return (
    <section className="relative  overflow-hidden   py-40 ">
      {/* Subtle pattern background (optional) */}
      {/* <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.svg')] opacity-5 pointer-events-none" /> */}

      <Pattern />

      <div className="container mx-auto  px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10  ">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6 mx-auto items-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight text-primary">
            Learn the Qur’an <br className="hidden sm:block" />
            with <span className="text-primary-light">Excellence</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-xl mx-auto md:mx-0">
            At Al-Maysaroh Qur’an Institute, we provide expert guidance with
            qualified teachers to help you master recitation, memorization, and
            understanding.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start text-primary  gap-4 pt-2">
            <EnrollButton>Enroll Now</EnrollButton>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:text-surface hover:bg-primary py-6 text-xl w-full sm:w-auto"
              asChild
            >
              <Link href={"/programs"}>Learn More</Link>
            </Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/images/hero-quran.jpg"
            alt="Qur’an learning illustration"
            width={500}
            height={500}
            priority
            className="w-[80%] sm:w-[70%] md:w-[90%] lg:w-[500px] rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
