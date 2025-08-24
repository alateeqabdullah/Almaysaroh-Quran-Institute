// // app/programs/page.tsx
// import PhysicalPrograms from "@/components/programs/Onsite";
// import CTA from "@/components/Cta";
// import OnlinePrograms from "@/components/programs/Online";
// import H2 from "@/components/H2";
// import Description from "@/components/Description";

// export default function ProgramsPage() {
//   return (
//     <main className="bg-green-50 text-green-900  ">
//       {/* Hero / Page Intro */}
//       <section className="pt-50 pb-30  px-6 text-center">
//         <H2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
//           Our Programs & Offerings
//         </H2>
//         <Description className="text-gray-700  max-w-2xl mx-auto text-lg md:text-xl">
//           We offer a variety of online and physical programs to suit all
//           learners. Our courses are designed to guide students from beginner to
//           mastery in Qur’ān recitation and memorization.
//         </Description>
//       </section>

//       <OnlinePrograms />

//      <PhysicalPrograms />

//       <CTA />
//     </main>
//   );
// }


import ProgramsCard from "@/components/programs/ProgramsCard";
import { sleep } from "@/lib/utils";

export default async function ProgramsPage() {
  await sleep(2000)
  return (
    <section className="min-h-screen text-center py-12 ">
      <ProgramsCard />
    </section>
  );
}

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";

// const programs = [
//   {
//     slug: "tajweed",
//     title: "Qur’an with Tajweed",
//     description:
//       "Master the correct pronunciation and articulation of the Qur’an.",
//   },
//   {
//     slug: "tahfeedh",
//     title: "Tahfeedh (Memorization)",
//     description: "Step-by-step memorization program with revision techniques.",
//   },
//   {
//     slug: "qiroaat",
//     title: "Qirõ’aat",
//     description: "Learn the different authentic recitations of the Qur’an.",
//   },
//   {
//     slug: "intensive",
//     title: "Intensive Ta’leem",
//     description:
//       "Comprehensive course covering recitation, tajweed, and hifdh.",
//   },
// ];

// export default function ProgramsPage() {
//   return (
//     <section className="py-50 bg-gradient-to-b from-emerald-800 to-white text-green-800 ">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {programs.map((program, i) => (
//             <motion.div
//               key={program.slug}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Link href={`/programs/${program.slug}`}>
//                 <Card className="cursor-pointer hover:shadow-lg transition rounded-2xl">
//                   <CardHeader>
//                     <CardTitle>{program.title}</CardTitle>
//                     <CardDescription>{program.description}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
