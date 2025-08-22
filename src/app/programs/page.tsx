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


"use client";

import Link from "next/link";
import {motion } from "framer-motion"
import { programs } from "@/data/programs";
import H2 from "@/components/H2";
import Description from "@/components/Description";

export default function ProgramsPage() {
  return (
    <section className="min-h-screen bg-emerald-50 text-center py-50">
      <div className="max-w-6xl mx-auto px-6">
        <H2 className="text-3xl font-bold text-green-800 mb-8">Our Programs</H2>
        <Description className="text-yellow-700  pb-10 ">
          Explore our structured learning paths designed to help you grow in
          Qur’ān recitation, memorization, and Islamic knowledge.
        </Description>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, index) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl pt-10 p-6 shadow-md border border-green-100 hover:shadow-lg hover:border-green-400 transition duration-300`}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 mx-auto">
                  <Icon size={28} />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-emerald-800">
                    {p.name}
                  </h2>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <Link
                      href={`/programs/${p.slug}`}
                      className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-xl  hover:bg-emerald-700"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/pricing/${p.slug}`}
                      className="inline-block text-emerald-700 hover:underline"
                    >
                      Pricing →
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
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



