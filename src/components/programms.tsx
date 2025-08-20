// "use client";

// import Link from "next/link";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { programs } from "@/data/programs";

// export default function ProgramsPage() {
//   return (
//     <section className="container mx-auto py-16">
//       <h1 className="text-3xl font-bold mb-8 text-center">Our Programs</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {programs.map((program) => (
//           <Link key={program.slug} href={`/programs/${program.slug}`}>
//             <Card className="cursor-pointer hover:shadow-xl transition">
//               <CardHeader>
//                 <CardTitle>{program.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">{program.description}</p>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const programs = [
  {
    slug: "tajweed",
    title: "Qur’an with Tajweed",
    description:
      "Master the correct pronunciation and articulation of the Qur’an.",
  },
  {
    slug: "tahfeedh",
    title: "Tahfeedh (Memorization)",
    description: "Step-by-step memorization program with revision techniques.",
  },
  {
    slug: "qiroaat",
    title: "Qirõ’aat",
    description: "Learn the different authentic recitations of the Qur’an.",
  },
  {
    slug: "intensive",
    title: "Intensive Ta’leem",
    description:
      "Comprehensive course covering recitation, tajweed, and hifdh.",
  },
];

export default function ProgramsPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.slug}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/programs/${program.slug}`}>
                <Card className="cursor-pointer hover:shadow-lg transition rounded-2xl">
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



