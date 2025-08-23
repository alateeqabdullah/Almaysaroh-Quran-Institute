// app/loading.tsx
"use client";

import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="space-y-12">
      {/* Hero Section Skeleton */}
      <section className="text-center py-12 md:py-20">
        <div className="space-y-4 max-w-2xl mx-auto">
          <Skeleton className="h-10 w-3/4 mx-auto" /> {/* Title */}
          <Skeleton className="h-6 w-2/3 mx-auto" /> {/* Subtitle */}
          <div className="flex justify-center mt-6">
            <Skeleton className="h-10 w-32 rounded-lg" /> {/* Button */}
          </div>
        </div>
      </section>

      {/* Programs Grid Skeleton */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-6 border rounded-2xl shadow-sm space-y-4">
            <Skeleton className="h-40 w-full rounded-lg" /> {/* Image */}
            <Skeleton className="h-6 w-2/3" /> {/* Program title */}
            <Skeleton className="h-4 w-3/4" /> {/* Small description */}
          </div>
        ))}
      </section>
    </div>
  );
}
