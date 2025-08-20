"use client"

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

export default function H2({ children, className }: H2Props ) {
  return (
    <motion.h2
      className={cn("text-4xl md:text-6xl font-bold text-surface mb-4 text-center", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
}
