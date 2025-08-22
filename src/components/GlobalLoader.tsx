"use client";

import { sleep } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await sleep(1000);
      setLoading(false);
    };

    load();
  }, [pathname]);

  //   if (!showSpinner) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key={"loader"}
          className="fixed inset-0 z-50 flex items-center justify-center  bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            exit={{ opacity: 0 }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
