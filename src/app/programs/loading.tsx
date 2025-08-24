// app/loading.tsx
"use client";

import { Skeleton } from "@/components/ui/Skeleton";

export default function LoadingProgram() {
  return (
    <div className="space-y-12 p-16">
      <section className="text-center py-12 md:py-20">
        <div className="space-y-4 max-w-2xl mx-auto">
          <Skeleton className="h-10 w-60 mx-auto" />
            
           <div className="space-y-4 ">
          <Skeleton className="h-6 w-3/4 mx-auto" /> 
          <Skeleton className="h-6 w-2/3 mx-auto" />
            </div>
        
        </div>
      </section>

      {/* Programs Grid Skeleton */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-6 rounded-2xl shadow-sm space-y-4">
            <Skeleton className="h-40 w-full rounded-lg" /> {/* Image */}
            <Skeleton className="h-6 w-2/3" /> {/* Program title */}
            <Skeleton className="h-4 w-3/4" /> {/* Small description */}
          </div>
        ))}
      </section>
    </div>
  );
}
