// // export default function Loading() {
// //   return (
// //     <div className="flex min-h-screen items-center justify-center bg-white">
// //       <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
// //     </div>
// //   );
// // }


// // import { Skeleton } from "@/components/ui/Skeleton";

// // export default function Loading() {
// //   return (
// //     <div className="p-6 space-y-4">
// //       <Skeleton className="h-6 w-1/3" />
// //       <div className="space-y-2">
// //         <Skeleton className="h-4 w-2/3" />
// //         <Skeleton className="h-4 w-1/2" />
// //         <Skeleton className="h-4 w-5/6" />
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         <Skeleton className="h-32" />
// //         <Skeleton className="h-32" />
// //         <Skeleton className="h-32" />
// //       </div>
// //     </div>
// //   );
// // }



// // app/loading.tsx
// "use client";

// import { Skeleton } from "@/components/ui/Skeleton";

// export default function Loading() {
//   return (
//     <div className="space-y-12">
//       {/* Hero Section Skeleton */}
//       <section className="text-center py-12 md:py-20">
//         <div className="space-y-4 max-w-2xl mx-auto">
//           <Skeleton className="h-10 w-3/4 mx-auto" /> {/* Title */}
//           <Skeleton className="h-6 w-2/3 mx-auto" /> {/* Subtitle */}
//           <div className="flex justify-center mt-6">
//             <Skeleton className="h-10 w-32 rounded-lg" /> {/* Button */}
//           </div>
//         </div>
//       </section>

//       {/* Programs Grid Skeleton */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div
//             key={i}
//             className="p-6 border rounded-2xl shadow-sm space-y-4"
//           >
//             <Skeleton className="h-40 w-full rounded-lg" /> {/* Image */}
//             <Skeleton className="h-6 w-2/3" /> {/* Program title */}
//             <Skeleton className="h-4 w-3/4" /> {/* Small description */}
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";

// export default function Loading() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     // Wait 200ms before showing skeleton
//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 200);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!show) {
//     // Don't render skeleton immediately
//     return null;
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       {/* Example skeleton loader */}
//       <div className="animate-pulse space-y-4 p-8 w-full max-w-md">
//         <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//         <div className="h-6 bg-gray-200 rounded w-1/2"></div>
//         <div className="h-40 bg-gray-200 rounded"></div>
//       </div>
//     </div>
//   );
// }


// app/loading.tsx
"use client";

import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="space-y-12">
      {/* Hero Section Skeleton */}
      <section className="text-center py-12 pb-16 md:py-20">
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
          <div
            key={i}
            className="p-6 border rounded-2xl shadow-sm space-y-4"
          >
            <Skeleton className="h-40 w-full rounded-lg" /> {/* Image */}
            <Skeleton className="h-6 w-2/3" /> {/* Program title */}
            <Skeleton className="h-4 w-3/4" /> {/* Small description */}
          </div>
        ))}
      </section>
    </div>
  );
}