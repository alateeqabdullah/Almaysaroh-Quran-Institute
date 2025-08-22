import OnlinePricingPage from "@/components/Pricing";

export default function PricingPage() {
  return (
    <main className=" ">
      <OnlinePricingPage />

    </main>
  )
}


// // app/pricing/page.tsx
// "use client";

// import { useSearchParams } from "next/navigation";
// import { programs } from "@/data/programs";
// import {
//   ONLINE_RATE_PER_SESSION_NGN,
//   DEFAULT_WEEKS_PER_MONTH,
// } from "@/config/pricing";
// import { useMemo } from "react";

// type Mode = "online" | "physical" | "physical";

// export default function PricingPage() {
//   const searchParams = useSearchParams();
//   const programSlug = searchParams.get("program");
//   const mode = searchParams.get("mode") as Mode | null;

//   const program = useMemo(
//     () => programs.find((p) => p.slug === programSlug),
//     [programSlug]
//   );

//   // Pricing logic
//   const pricingDetails = useMemo(() => {
//     if (!program || !mode) return null;

//     switch (mode) {
//       case "online":
//         return {
//           title: "Online Pricing",
//           details: `₦${ONLINE_RATE_PER_SESSION_NGN[30]} per session, assuming ${DEFAULT_WEEKS_PER_MONTH} weeks per month.`,
//         };
//       case "physical":
//         return {
//           title: "Physical (Day) Pricing",
//           details: program.physical.fullTimeDay ?? "Contact school for details",
//         };
//       case "physical":
//         return {
//           title: "Physical (Boarding) Pricing",
//           details: program.physical.fullTimeBoarding ?? "Contact school for details",
//         };
//       default:
//         return null;
//     }
//   }, [program, mode]);

//   if (!program || !mode) {
//     return (
//       <div className="max-w-3xl mx-auto pt-50 p-6">
//         <h1 className="text-2xl font-bold text-emerald-700 mb-4">Pricing</h1>
//         <p className="text-gray-600">
//           Please select a program and mode from the Programs page to view pricing.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-emerald-700 mb-2">{program.name}</h1>
//       <p className="text-gray-600 mb-6">{program.description}</p>

//       <div className="rounded-2xl shadow-md bg-white p-6 border border-emerald-100">
//         <h2 className="text-xl font-semibold text-emerald-600 mb-2">
//           {pricingDetails?.title}
//         </h2>
//         <p className="text-gray-700">{pricingDetails?.details}</p>
//       </div>
//     </div>
//   );
// }
