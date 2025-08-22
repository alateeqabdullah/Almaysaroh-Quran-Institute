
// // app/programs/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// // Dummy data (replace later with DB or CMS)
// const programs = {
//   qiraah: {
//     title: "Qirā’ah",
//     about: "Focuses on perfecting Qur’ān recitation with accurate makhārij and fluency.",
//     outline: [
//       "Introduction to Makharij al-Huruf",
//       "Rules of Recitation",
//       "Correcting Common Mistakes",
//       "Practical Recitations with Teacher",
//     ],
//     requirements: [
//       "Basic ability to read Arabic script",
//       "Notebook & Pen",
//       "Willingness to practice daily",
//     ],
//   },
//   tajweed: {
//     title: "Tajwīd",
//     about: "Mastering the rules of tajwīd to beautify Qur’ān recitation.",
//     outline: [
//       "Madd rules (elongations)",
//       "Idghām, Iqlāb, Ikhfā’",
//       "Qalqalah & Sakt",
//       "Practical Tajwīd Recitations",
//     ],
//     requirements: [
//       "Some Qur’ān reading experience",
//       "Commitment to consistent practice",
//     ],
//   },
// };

// export default function ProgramPage({ params }: { params: { slug: string } }) {
//   const program = programs[params.slug as keyof typeof programs];

//   if (!program) return notFound();

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-50 space-y-6">
//       {/* Title */}
//       <h1 className="text-3xl font-bold">{program.title}</h1>
//       <p className="text-gray-600">{program.about}</p>

//       {/* Outline */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Program Outline</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ul className="list-disc pl-6 space-y-1">
//             {program.outline.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Requirements */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Requirements</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ul className="list-disc pl-6 space-y-1">
//             {program.requirements.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Pricing Plans */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Pricing Plans</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid md:grid-cols-2 gap-4">
//             {/* Online */}
//             <div className="p-4 border rounded-xl">
//               <h3 className="font-semibold text-lg">Online (Flexible)</h3>
//               <p className="text-sm text-gray-600">Choose number of days & duration per class.</p>
//               <p className="mt-2">💻 Custom Pricing (depends on schedule)</p>
//             </div>

//             {/* Physical */}
//             <div className="p-4 border rounded-xl">
//               <h3 className="font-semibold text-lg">Physical</h3>
//               <ul className="mt-2 space-y-1 text-sm">
//                 <li>📌 Part-time (Weekend) – ₦3,000</li>
//                 <li>📌 Full-time (Weekend + Mon-Wed) – ₦5,000</li>
//                 <li>📌 Boarding Part-time – ₦10,000</li>
//                 <li>📌 Boarding Full-time – ₦20,000</li>
//               </ul>
//               <p className="mt-3 font-semibold">Feeding (Boarding):</p>
//               <ul className="text-sm">
//                 <li>🍽 Part-time – ₦16,000</li>
//                 <li>🍽 Full-time – ₦60,000</li>
//               </ul>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* CTA */}
//       <div className="flex justify-center">
//         <Button asChild>
//           <a href={`/register?program=${params.slug}`}>Register Now</a>
//         </Button>
//       </div>
//     </div>
//   );
// }



// "use client";

// import Link from "next/link";
// import { getProgramBySlug } from "@/data/programs";
// import { notFound } from "next/navigation";

// export default function ProgramDetailPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const program = getProgramBySlug(params.slug);

//   if (!program) {
//     return (
      
//      notFound()
//     );
//   }

//   return (
//     <section className="min-h-screen bg-white py-50">
//       <div className="max-w-3xl mx-auto px-6">
//         <h1 className="text-3xl font-bold text-emerald-900">{program.name}</h1>
//         <p className="text-gray-700 mt-4">{program.description}</p>

//         {/* <div className="mt-8 grid gap-4">
//           <div className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/50">
//             <h2 className="font-semibold text-emerald-800">Online</h2>
//             <p className="text-gray-700 mt-1">{program.online.note}</p>
//           </div> */}

//           <div className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/50">
//             <h2 className="font-semibold text-emerald-800">
//               On-site (Physical)
//             </h2>
//             {"partTime" in program.physical ||
//             "fullTime" in program.physical ? (
//               <ul className="mt-2 text-gray-700 list-disc list-inside">
//                 {program.physical.partTime && (
//                   <li>Part-time: {program.physical.partTime}</li>
//                 )}
//                 {program.physical.fullTime && (
//                   <li>Full-time: {program.physical.fullTime}</li>
//                 )}
//               </ul>
//             ) : (
//               <ul className="mt-2 text-gray-700 list-disc list-inside">
//                 {program.physical.partTimeDay && (
//                   <li>Day (Part-time): {program.physical.partTimeDay}</li>
//                 )}
//                 {program.physical.fullTimeDay && (
//                   <li>Day (Full-time): {program.physical.fullTimeDay}</li>
//                 )}
//                 {program.physical.partTimeBoarding && (
//                   <li>
//                     Boarding (Part-time): {program.physical.partTimeBoarding}
//                   </li>
//                 )}
//                 {program.physical.fullTimeBoarding && (
//                   <li>
//                     Boarding (Full-time): {program.physical.fullTimeBoarding}
//                   </li>
//                 )}
//                 {program.physical.feeding && (
//                   <li>
//                     Feeding: Part-time {program.physical.feeding.partTime},
//                     Full-time {program.physical.feeding.fullTime}
//                   </li>
//                 )}
//               </ul>
//             )}
//           </div>
//         </div>

//         <div className="mt-8 flex gap-3">
//           <Link
//             href={`/pricing/${program.slug}`}
//             className="bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700"
//           >
//             Proceed to Pricing
//           </Link>
//           <Link
//             href="/programs"
//             className="text-emerald-700 hover:underline px-2 py-3"
//           >
//             Back to Programs
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



// // app/programs/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { Metadata } from "next";
// import { programs } from "@/data/programs";
// import type { Program } from "@/data/programs";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   BookOpen,
//   CheckCircle2,
//   GraduationCap,
//   CalendarClock,
//   Wallet,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";

// type PageProps = {
//   params: { slug: string };
// };

// function getProgramBySlug(slug: string): Program | undefined {
//   return programs.find((p) => p.slug === slug);
// }

// export async function generateMetadata(
//   { params }: PageProps
// ): Promise<Metadata> {
//   const program = getProgramBySlug(params.slug);
//   return {
//     title: program ? `${program.name} • Programs | Almaysaroh Quran Institute` : "Program | Almaysaroh Quran Institute",
//     description: program?.description,
//   };
// }

// export default function ProgramDetailsPage({ params }: PageProps) {
//   const program = getProgramBySlug(params.slug);
//   if (!program) return notFound();

//   const hasDay =
//     !!program.physical?.partTimeDay || !!program.physical?.fullTimeDay;
//   const hasBoarding =
//     !!program.physical?.partTimeBoarding || !!program.physical?.fullTimeBoarding;

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-12">
//       {/* Breadcrumb */}
//       <div className="mb-6 flex items-center gap-2 text-sm">
//         <Link
//           href="/programs"
//           className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800"
//         >
//           <ArrowLeft className="h-4 w-4" />
//           Back to Programs
//         </Link>
//       </div>

//       {/* Header */}
//       <header className="mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-emerald-800">
//           {program.name}
//         </h1>
//         <p className="mt-3 text-slate-700 max-w-3xl">
//           {program.description}
//         </p>
//       </header>

//       {/* Top summary cards */}
//       <div className="grid gap-6 md:grid-cols-2">
//         <Card className="border-emerald-200">
//           <CardHeader className="pb-3">
//             <CardTitle className="flex items-center gap-2 text-emerald-800">
//               <CalendarClock className="h-5 w-5" />
//               Online Option
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-slate-700">
//             <p>{program.online.note}</p>
//             <div className="mt-4">
//               <Link
//                 href={`/programs/${program.slug}/pricing?mode=online`}
//                 className="inline-block"
//               >
//                 <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
//                   View Online Pricing
//                 </Button>
//               </Link>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="border-emerald-200">
//           <CardHeader className="pb-3">
//             <CardTitle className="flex items-center gap-2 text-emerald-800">
//               <Wallet className="h-5 w-5" />
//               Physical Options
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-slate-700 space-y-3">
//             {hasDay && (
//               <div className="rounded-lg border border-emerald-100 p-4">
//                 <p className="font-semibold text-emerald-800">Day (On-site)</p>
//                 <ul className="mt-2 space-y-1 text-sm">
//                   {program.physical?.partTimeDay && (
//                     <li>• Part-time Day: {program.physical.partTimeDay}</li>
//                   )}
//                   {program.physical?.fullTimeDay && (
//                     <li>• Full-time Day: {program.physical.fullTimeDay}</li>
//                   )}
//                 </ul>
//                 <div className="mt-3">
//                   <Link
//                     href={`/programs/${program.slug}/pricing?mode=physical-day`}
//                   >
//                     <Button
//                       variant="outline"
//                       className="border-emerald-300 text-emerald-800 hover:bg-emerald-50 rounded-xl"
//                     >
//                       View Day Pricing
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             )}

//             {hasBoarding && (
//               <div className="rounded-lg border border-emerald-100 p-4">
//                 <p className="font-semibold text-emerald-800">Boarding</p>
//                 <ul className="mt-2 space-y-1 text-sm">
//                   {program.physical?.partTimeBoarding && (
//                     <li>
//                       • Part-time Boarding: {program.physical.partTimeBoarding}
//                     </li>
//                   )}
//                   {program.physical?.fullTimeBoarding && (
//                     <li>
//                       • Full-time Boarding: {program.physical.fullTimeBoarding}
//                     </li>
//                   )}
//                   {program.physical?.feeding &&
//                     (program.physical.feeding.partTime ||
//                       program.physical.feeding.fullTime) && (
//                       <li className="mt-2">
//                         <span className="font-medium text-emerald-800">
//                           Feeding:
//                         </span>{" "}
//                         {[
//                           program.physical.feeding.partTime
//                             ? `Part-time: ${program.physical.feeding.partTime}`
//                             : null,
//                           program.physical.feeding.fullTime
//                             ? `Full-time: ${program.physical.feeding.fullTime}`
//                             : null,
//                         ]
//                           .filter(Boolean)
//                           .join(" • ")}
//                       </li>
//                     )}
//                 </ul>
//                 <div className="mt-3">
//                   <Link
//                     href={`/programs/${program.slug}/pricing?mode=physical-boarding`}
//                   >
//                     <Button
//                       variant="outline"
//                       className="border-emerald-300 text-emerald-800 hover:bg-emerald-50 rounded-xl"
//                     >
//                       View Boarding Pricing
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>

//       {/* Outline & Requirements */}
//       <div className="mt-10 grid gap-6 md:grid-cols-2">
//         <Card className="border-emerald-200">
//           <CardHeader className="pb-3">
//             <CardTitle className="flex items-center gap-2 text-emerald-800">
//               <BookOpen className="h-5 w-5" />
//               Outline
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="list-disc pl-5 space-y-2 text-slate-700">
//               {program.outline.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className="border-emerald-200">
//           <CardHeader className="pb-3">
//             <CardTitle className="flex items-center gap-2 text-emerald-800">
//               <CheckCircle2 className="h-5 w-5" />
//               Requirements
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="list-disc pl-5 space-y-2 text-slate-700">
//               {program.requirements?.length ? (
//                 program.requirements.map((req, idx) => (
//                   <li key={idx}>{req}</li>
//                 ))
//               ) : (
//                 <li>No prerequisites — beginners welcome.</li>
//               )}
//             </ul>
//           </CardContent>
//         </Card>
//       </div>

//       {/* CTA */}
//       <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
//         <Link href={`/programs`}>
//           <Button variant="outline" className="rounded-xl">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Browse Other Programs
//           </Button>
//         </Link>
//         <Link href={`/enroll?program=${program.slug}`}>
//           <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
//             Enroll Now
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// }


// app/programs/[slug]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";

export default function ProgramDetailsPage() {
  const { slug } = useParams();
  const router = useRouter();

  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <div className="p-6 text-center text-red-500">Program not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto pt-40 p-30">
      <h1 className="text-3xl font-bold text-emerald-700 mb-4">{program.name}</h1>
      <p className="text-gray-700 mb-6">{program.description}</p>

      {/* Outline */}
      {program.outline && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-emerald-600">Outline</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {program.outline.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Requirements */}
      {program.requirements && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-emerald-600">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {program.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Pricing Options */}
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-emerald-600">Select Mode</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => router.push(`/pricing?program=${program.slug}&mode=online`)}
          >
            Online
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() =>
              router.push(`/pricing?program=${program.slug}&mode=physical-day`)
            }
          >
            Physical (Day)
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() =>
              router.push(`/pricing?program=${program.slug}&mode=physical-boarding`)
            }
          >
            Physical (Boarding)
          </Button>
        </div>
      </div>
    </div>
  );
}
