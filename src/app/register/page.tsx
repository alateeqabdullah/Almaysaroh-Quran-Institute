// "use client";
// // import Link from "next/link";
// import React, { useEffect, useMemo, useRef, useState } from "react";
// // import type { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Qur’an School Registration",
// //   description:
// //     "Register for our Qur’an School (Online & Physical). Choose Qirõ’ah, Hifdh, Tajweed, Qirõ’aat, Murõja’ah, or Islamic Studies.",
// //   openGraph: {
// //     title: "Qur’an School Registration",
// //     description:
// //       "Register for our Qur’an School (Online & Physical). Choose Qirõ’ah, Hifdh, Tajweed, Qirõ’aat, Murõja’ah, or Islamic Studies.",
// //     type: "website",
// //     url: "/register",
// //   },
// // };

// // const TALLY_FORM_URL = process.env.NEXT_PUBLIC_TALLY_FORM_URL;
// const TALLY_FORM_URL = "https://tally.so/r/3jRMva";

// export default function RegisterPage() {
//   const [iframeHeight, setIframeHeight] = useState(1200);
//   const iframeRef = useRef<HTMLIFrameElement | null>(null);

//   // Add helpful embed params: hide Tally’s title & use transparent background
//   const src = useMemo(() => {
//     const url = new URL(TALLY_FORM_URL);
//     url.searchParams.set("hideTitle", "1");
//     url.searchParams.set("transparentBackground", "1");
//     return url.toString();
//   }, []);

//   // Auto-resize based on postMessage from Tally
//   useEffect(() => {
//     function onMessage(event: MessageEvent) {
//       if (typeof event.data !== "object" || !event.data) return;
//       const { type, height } = event.data as { type?: string; height?: number };
//       if (type === "tally:height" && typeof height === "number") {
//         setIframeHeight(Math.max(height, 900));
//       }
//     }
//     window.addEventListener("message", onMessage);
//     return () => window.removeEventListener("message", onMessage);
//   }, []);

//   return (
//     <main className="min-h-screen w-full bg-green-700">
//       <section className="mx-auto max-w-5xl px-4 py-50">
//         <div className="mb-8 text-center">
//           <h1 className="text-4xl text-surface font-semibold tracking-tight">
//             {"  Al-maysaroh Qur'an Institute Registration Form"}
//           </h1>
//           <p className="mt-2 text-gray-100">
//             One form for <span className="font-medium">Online</span> and{" "}
//             <span className="font-medium">Physical</span> students. Choose from
//             Qirõ’ah, Hifdh (Memorization), Tajweed, Qirõ’aat, Murõja’ah, and
//             Islamic Studies.
//           </p>
//           {/* <div className="mt-4">
//             <Link
//               href={TALLY_FORM_URL}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100"
//             >
//               Open form in a new tab
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 className="h-4 w-4"
//               >
//                 <path d="M14 3h7v7" />
//                 <path d="M10 14 21 3" />
//                 <path d="M21 14v7h-7" />
//                 <path d="M3 10 14 21" />
//               </svg>
//             </Link>
//           </div>*/}
//         </div>

//         <div className="rounded-2xl bg-white p-2 shadow-sm">
//           <div className="relative">
//             <iframe
//               ref={iframeRef}
//               src={src}
//               title="Almaysaroh Qur’an Institution Registration Form"
//               width="100%"
//               style={{ height: `${iframeHeight}px` }}
//               frameBorder={0}
//               marginHeight={0}
//               marginWidth={0}
//               allow="clipboard-write"
//               className="w-full rounded-xl"
//             />
//           </div>
//         </div>

//         <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
//           <h2 className="mb-2 text-base text-primary font-semibold">Registration Tips</h2>
//           <ul className="list-inside list-disc space-y-1">
//             <li>
//               For <span className="font-medium">Online</span>: select your
//               program (Qirõ’ah / Hifdh / Tajweed), class type, and time zone.
//             </li>
//             <li>
//               For <span className="font-medium">Physical</span>: select from
//               Qirõ’ah, Tajweed, Hifdh, Qirõ’aat, Murõja’ah, or Islamic Studies
//               and provide your address.
//             </li>
//             <li>
//               After submission, you’ll receive a confirmation message. We’ll
//               contact you with payment details and your schedule.
//             </li>
//           </ul>
//         </div>
//       </section>
//     </main>
//   );
// }


// "use client";

// import { useState } from "react";

// const programs = [
//   { slug: "qiroah", name: "Qirõ'ah" },
//   { slug: "tajweed", name: "Tajweed" },
//   { slug: "tahfeedh", name: "Tahfeedh" },
//   { slug: "murojaah", name: "Murõja'ah" },
//   { slug: "qiroaat", name: "Qirõ'aat" },
//   { slug: "intensive", name: "Intensive Ta'leem" },
// ];

// export default function RegisterPage() {
//   const [mode, setMode] = useState("");
//   const [program, setProgram] = useState("");

//   const tallyUrl = "https://tally.so/r/your-form-id";

//   const finalUrl =
//     mode && program ? `${tallyUrl}?mode=${mode}&program=${program}` : tallyUrl;

//   return (
//     <section className="max-w-3xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold text-center text-emerald-800 mb-8">
//         Register for Our Programs
//       </h1>

//       {/* Step 1: Select Mode */}
//       <div className="mb-6">
//         <label className="block font-semibold text-emerald-700 mb-2">
//           Choose Mode of Study:
//         </label>
//         <div className="flex gap-4">
//           <button
//             className={`px-4 py-2 rounded-lg border ${
//               mode === "online"
//                 ? "bg-emerald-600 text-white"
//                 : "bg-white text-emerald-600 border-emerald-600"
//             }`}
//             onClick={() => setMode("online")}
//           >
//             Online
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg border ${
//               mode === "physical"
//                 ? "bg-emerald-600 text-white"
//                 : "bg-white text-emerald-600 border-emerald-600"
//             }`}
//             onClick={() => setMode("physical")}
//           >
//             Physical
//           </button>
//         </div>
//       </div>

//       {/* Step 2: Select Program */}
//       {mode && (
//         <div className="mb-6">
//           <label className="block font-semibold text-emerald-700 mb-2">
//             Choose Program:
//           </label>
//           <div className="grid grid-cols-2 gap-3">
//             {programs.map((p) => (
//               <button
//                 key={p.slug}
//                 className={`px-4 py-2 rounded-lg border ${
//                   program === p.slug
//                     ? "bg-emerald-600 text-white"
//                     : "bg-white text-emerald-600 border-emerald-600"
//                 }`}
//                 onClick={() => setProgram(p.slug)}
//               >
//                 {p.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Step 3: Show Tally */}
//       {mode && program && (
//         <div className="mt-10">
//           <iframe
//             src={finalUrl}
//             width="100%"
//             height="600"
//             frameBorder="0"
//             title="Registration Form"
//           ></iframe>
//         </div>
//       )}
//     </section>
//   );
// }

// app/register/page.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function RegisterPage() {
  const [studyType, setStudyType] = useState("");
  const [program, setProgram] = useState("");

  return (
    <section className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Register at Al-Maysaroh Qur’an Institute</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <Input placeholder="Enter your full name" />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <Input type="tel" placeholder="Enter your phone number" />
          </div>

          {/* Study Type */}
          <div>
            <label className="block mb-1 font-medium">Study Type</label>
            <Select onValueChange={(val) => setStudyType(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select study type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="physical">Physical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Program */}
          <div>
            <label className="block mb-1 font-medium">Program</label>
            <Select onValueChange={(val) => setProgram(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="qiroah">Qirõ’ah</SelectItem>
                <SelectItem value="tajweed">Tajweed</SelectItem>
                <SelectItem value="tahfeedh">Tahfeedh</SelectItem>
                <SelectItem value="murojaah">Murõja’ah</SelectItem>
                <SelectItem value="qiroaat">Qirõ’aat</SelectItem>
                <SelectItem value="intensive">Intensive Ta’leem</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Schedule Notes */}
          <div>
            <label className="block mb-1 font-medium">Preferred Schedule / Notes</label>
            <Textarea placeholder="E.g. Weekends only, mornings preferred, etc." />
          </div>

          {/* Submit */}
          <Button className="w-full">Submit Registration</Button>
        </CardContent>
      </Card>
    </section>
  );
}