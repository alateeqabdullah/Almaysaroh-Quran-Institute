"use client";

import { sleep } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Loading() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
   sleep(3000).then(()=>setShowSpinner(false))
 
  }, []);

  if (!showSpinner) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
