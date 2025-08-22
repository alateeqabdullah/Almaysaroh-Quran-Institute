// /components/TopLoader.tsx
"use client";

import { useState, useEffect } from "react";

interface TopLoaderProps {
  loading: boolean;
  showPercentage?: boolean;
}

export default function TopLoader({
  loading,
  showPercentage = true,
}: TopLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (loading) {
      setOpacity(1);
      setProgress(0);

      interval = setInterval(() => {
        setProgress((prev) => {
          // Fast at start, slow near end
          const increment = (100 - prev) * 0.05;
          return prev + increment;
        });
      }, 100);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setOpacity(0);
        setProgress(0);
      }, 400);
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div
          className="h-1 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%`, opacity, backgroundColor: "#16a34a" }} // green-600
        />
        {showPercentage && (
          <div
            className="absolute top-0 right-2 text-xs font-semibold text-green-700 transition-opacity duration-300"
            style={{ opacity }}
          >
            {Math.round(progress)}%
          </div>
        )}
      </div>

      {/* Center spinner */}
      {loading && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ opacity }}
        >
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin-slow" />
        </div>
      )}
    </>
  );
}


