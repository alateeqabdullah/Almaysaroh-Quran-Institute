

// // app/programs/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import { Button } from "@/components/ui/button";

// const programDetails: any = {
//   qiraah: {
//     title: "Qirā’ah",
//     about: "Focused on accurate Quranic recitation.",
//     outline: ["Arabic letters & pronunciation", "Makharij study", "Practice sessions"],
//     structure: "3-5 days a week, 1-2 hours per session.",
//     requirements: ["Basic ability to read Arabic"],
//   },
//   tajweed: {
//     title: "Tajweed",
//     about: "Learn the rules of Tajweed.",
//     outline: ["Rules of Noon & Meem", "Madd rules", "Stopping rules"],
//     structure: "Flexible timings (online & physical).",
//     requirements: ["Basic recitation ability"],
//   },
//   // ... add for other programs
// };

// const feePlans = [
//   { days: 2, duration: "1 hour/day", usd: 30, eur: 28, ngn: 25000 },
//   { days: 3, duration: "1.5 hours/day", usd: 45, eur: 42, ngn: 35000 },
//   { days: 5, duration: "2 hours/day", usd: 70, eur: 65, ngn: 55000 },
// ];

// export default function ProgramDetail({ params }: { params: { slug: string } }) {
//   const program = programDetails[params.slug];
//   if (!program) return notFound();

//   return (
//     <section className="py-12 bg-primary ">
//       <div className="max-w-4xl mx-auto px-6 space-y-6">
//         <h1 className="text-4xl font-bold">{program.title}</h1>
//         <p className="text-gray-700">{program.about}</p>

//         <div>
//           <h2 className="text-2xl font-semibold mb-2">Outline</h2>
//           <ul className="list-disc list-inside space-y-1">
//             {program.outline.map((item: string, i: number) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-2">Structure</h2>
//           <p>{program.structure}</p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
//           <ul className="list-disc list-inside space-y-1">
//             {program.requirements.map((item: string, i: number) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-2">Fee Plans</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border rounded-lg">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border px-4 py-2">Days/Week</th>
//                   <th className="border px-4 py-2">Duration</th>
//                   <th className="border px-4 py-2">USD</th>
//                   <th className="border px-4 py-2">EUR</th>
//                   <th className="border px-4 py-2">NGN</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {feePlans.map((plan, i) => (
//                   <tr key={i}>
//                     <td className="border px-4 py-2">{plan.days}</td>
//                     <td className="border px-4 py-2">{plan.duration}</td>
//                     <td className="border px-4 py-2">${plan.usd}</td>
//                     <td className="border px-4 py-2">€{plan.eur}</td>
//                     <td className="border px-4 py-2">₦{plan.ngn}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <Button asChild className="w-full md:w-auto">
//           <a href="https://tally.so/r/mYOURSIGNUPFORM" target="_blank">
//             Enroll Now
//           </a>
//         </Button>
//       </div>
//     </section>
//   );
// }

