"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Description({children, className }: DescriptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("text-gray-700 max-w-2xl mx-auto text-lg font-semibold  md:text-xl", className )}
    >
     {children}
    </motion.div>
  );
}
