// /components/Layout.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TopLoader from "./TopLoader";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 200); // Adjust delay as needed
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <TopLoader loading={loading} showPercentage={true} />
      {children}
    </>
  );
}
