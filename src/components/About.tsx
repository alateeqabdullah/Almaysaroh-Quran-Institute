"use client";
import AboutIntro from "@/components/about/AboutIntro";

import { motion } from "framer-motion";
import Link from "next/link";
import H2 from "./H2";
import H3 from "./H3";
import Span from "./Span";
import Description from "./Description";

export default function About() {
  return (
    <section className="text-center bg-green-800 pb-16 pt-30 ">
      <H2 className=" ">
        About <Span>Us</Span>
        <H3> Al-Maysaroh Quran Institute</H3>
      </H2>
      <Description className="text-surface font-medium " >
        <AboutIntro />
      </Description>

      <motion.div
        className="my-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          href="/about"
          className="inline-block bg-surface hover:bg-green-600 hover:text-white text-primary font-semibold py-3 px-6 rounded-full shadow  transition-all"
        >
          Read More About Us
        </Link>
      </motion.div>
    </section>
  );
}
