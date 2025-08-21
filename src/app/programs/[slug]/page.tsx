// "use client";

// import { useState } from "react";
// import { useParams } from "next/navigation";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// // Example programs data (you can expand later)
// const programs: Record<string, any> = {
//   tajweed: {
//     title: "Tajweed",
//     intro:
//       "Learn proper recitation with rules of pronunciation and articulation.",
//     outline: [
//       "Makharij (pronunciation points)",
//       "Sifaat (qualities of letters)",
//       "Practical recitation",
//     ],
//     requirements: [
//       "Basic ability to read Arabic",
//       "Willingness to practice regularly",
//     ],
//   },
//   tahfeedh: {
//     title: "Tahfeedh",
//     intro: "Memorize the Qur’an step by step with guided supervision.",
//     outline: ["Daily memorization", "Revision sessions", "Fluency building"],
//     requirements: ["Basic tajweed knowledge", "Commitment to consistency"],
//   },
// };

// // Pricing options
// const basePrices = {
//   online: { parttime: 100, fulltime: 180 },
//   physical: { parttime: 150, fulltime: 250 },
// };

// export default function ProgramDetails() {
//   const { slug } = useParams();
//   const program = programs[slug as string];

//   const [mode, setMode] = useState<"online" | "physical">("online");
//   const [type, setType] = useState<"parttime" | "fulltime">("parttime");
//   const [days, setDays] = useState(3);

//   if (!program) {
//     return (
//       <div className="flex flex-col items-center justify-center h-[60vh]">
//         <h2 className="text-2xl font-semibold">Program Not Found</h2>
//         <p className="text-gray-600">
//           The program you’re looking for doesn’t exist.
//         </p>
//         <Link href="/programs">
//           <Button className="mt-4">Back to Programs</Button>
//         </Link>
//       </div>
//     );
//   }

//   // Calculate fee
//   const baseFee = basePrices[mode][type];
//   const fee = baseFee + days * 10;

//   return (
//     <section className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold">{program.title}</h1>
//       <p className="text-gray-700 mt-2">{program.intro}</p>

//       <Card className="mt-6">
//         <CardContent className="p-4 space-y-4">
//           <h2 className="text-xl font-semibold">Outline</h2>
//           <ul className="list-disc pl-6 text-gray-700">
//             {program.outline.map((item: string, idx: number) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>

//       <Card className="mt-6">
//         <CardContent className="p-4 space-y-4">
//           <h2 className="text-xl font-semibold">Requirements</h2>
//           <ul className="list-disc pl-6 text-gray-700">
//             {program.requirements.map((item: string, idx: number) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Pricing Section */}
//       <Card className="mt-6">
//         <CardContent className="p-4 space-y-4">
//           <h2 className="text-xl font-semibold">Pricing Plans</h2>

//           <div className="space-y-3">
//             {/* Mode Selection */}
//             <div>
//               <label className="block font-medium">Mode:</label>
//               <select
//                 className="w-full p-2 border rounded-lg"
//                 value={mode}
//                 onChange={(e) =>
//                   setMode(e.target.value as "online" | "physical")
//                 }
//               >
//                 <option value="online">Online</option>
//                 <option value="physical">Physical</option>
//               </select>
//             </div>

//             {/* Type Selection */}
//             <div>
//               <label className="block font-medium">Type:</label>
//               <select
//                 className="w-full p-2 border rounded-lg"
//                 value={type}
//                 onChange={(e) =>
//                   setType(e.target.value as "parttime" | "fulltime")
//                 }
//               >
//                 <option value="parttime">Part-time</option>
//                 <option value="fulltime">Full-time</option>
//               </select>
//             </div>

//             {/* Days Selection */}
//             <div>
//               <label className="block font-medium">Days per week:</label>
//               <select
//                 className="w-full p-2 border rounded-lg"
//                 value={days}
//                 onChange={(e) => setDays(Number(e.target.value))}
//               >
//                 <option value={3}>3 days</option>
//                 <option value={5}>5 days</option>
//                 <option value={7}>7 days</option>
//               </select>
//             </div>
//           </div>

//           {/* Final Price */}
//           <div className="mt-4">
//             <p className="text-lg font-semibold">
//               Total Fee: <span className="text-emerald-600">${fee}</span>
//             </p>
//           </div>

//           {/* Register Button */}
//           <Link
//             href={`/register?program=${slug}&mode=${mode}&type=${type}&days=${days}&fee=${fee}`}
//           >
//             <Button className="mt-4 w-full">Register Now</Button>
//           </Link>
//         </CardContent>
//       </Card>
//     </section>
//   );
// }



// "use client";

// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// export default function ProgramDetails() {
//   return (
//     <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
//       {/* Title */}
//       <div className="text-center space-y-2">
//         <h2 className="text-3xl font-bold">Our Programs & Pricing</h2>
//         <p className="text-muted-foreground">
//           Choose between flexible online classes or structured on-campus
//           learning.
//         </p>
//       </div>

//       {/* Online Flexible */}
//       <Card className="shadow-md">
//         <CardHeader>
//           <CardTitle className="text-xl">💻 Online (Flexible)</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <p>
//             Study Qur’an and Islamic sciences from anywhere. Choose your own{" "}
//             <strong>days per week</strong> and <strong>class duration</strong>.
//           </p>
//           <ul className="list-disc pl-6 text-sm space-y-1">
//             <li>Choose 1–7 days per week</li>
//             <li>Class duration options: 30 mins, 45 mins, 1hr</li>
//             <li>Pricing depends on frequency and duration</li>
//           </ul>
//           <Button className="mt-4">Register for Online</Button>
//         </CardContent>
//       </Card>

//       {/* On-Campus Day Students */}
//       <Card className="shadow-md">
//         <CardHeader>
//           <CardTitle className="text-xl">🏫 On-Campus (Day Students)</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <ul className="list-disc pl-6 text-sm space-y-1">
//             <li>
//               <strong>Part-time:</strong> Weekend (Sat & Sun, 9am–4pm) —{" "}
//               <span className="font-semibold">₦3,000</span>
//             </li>
//             <li>
//               <strong>Full-time:</strong> Weekend (Sat & Sun, 9am–4pm) + Mon–Wed
//               (4pm–6:30pm) — <span className="font-semibold">₦5,000</span>
//             </li>
//           </ul>
//           <Button className="mt-4">Register for Day Program</Button>
//         </CardContent>
//       </Card>

//       {/* On-Campus Boarding Students */}
//       <Card className="shadow-md">
//         <CardHeader>
//           <CardTitle className="text-xl">
//             🏠 On-Campus (Boarding Students)
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <ul className="list-disc pl-6 text-sm space-y-1">
//             <li>
//               <strong>Part-time:</strong> Fri (4pm) – Sun (4pm) —{" "}
//               <span className="font-semibold">₦10,000</span>
//             </li>
//             <li>
//               <strong>Full-time:</strong> Everyday —{" "}
//               <span className="font-semibold">₦20,000</span>
//             </li>
//           </ul>

//           <p className="font-medium mt-2">🍽 Feeding Add-ons:</p>
//           <ul className="list-disc pl-6 text-sm space-y-1">
//             <li>
//               Part-time feeding — <span className="font-semibold">₦16,000</span>
//             </li>
//             <li>
//               Full-time feeding — <span className="font-semibold">₦60,000</span>
//             </li>
//           </ul>

//           <Button className="mt-4">Register for Boarding</Button>
//         </CardContent>
//       </Card>
//     </section>
//   );
// }



// "use client";

// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";

// export default function ProgramDetails({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   // Online dynamic options (later can be extended into a calculator)
//   const onlineOptions = [
//     { days: "2 days / week", duration: "30 mins", base: "₦2,000" },
//     { days: "3 days / week", duration: "45 mins", base: "₦3,500" },
//     { days: "5 days / week", duration: "1 hr", base: "₦5,000" },
//   ];

//   // Physical fixed options
//   const physicalOptions = {
//     day: [
//       { type: "Part-time (Weekend: 9am - 4pm)", price: "₦3,000" },
//       {
//         type: "Full-time (Weekend 9am-4pm + Mon-Wed 4pm-6:30pm)",
//         price: "₦5,000",
//       },
//     ],
//     boarding: [
//       { type: "Part-time (Fri 4pm - Sun 4pm)", price: "₦10,000" },
//       { type: "Full-time (Everyday)", price: "₦20,000" },
//     ],
//     feeding: [
//       { type: "Part-time feeding", price: "₦16,000" },
//       { type: "Full-time feeding", price: "₦60,000" },
//     ],
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-50 px-4">
//       <h1 className="text-3xl font-bold mb-6 capitalize">{slug} Program</h1>

//       <Tabs defaultValue="online" className="w-full">
//         <TabsList className="grid grid-cols-2 w-full">
//           <TabsTrigger value="online">Online</TabsTrigger>
//           <TabsTrigger value="physical">Physical</TabsTrigger>
//         </TabsList>

//         {/* Online Pricing */}
//         <TabsContent value="online">
//           <Card>
//             <CardHeader>
//               <CardTitle>Flexible Online Classes</CardTitle>
//               <p className="text-muted-foreground text-sm">
//                 Choose your preferred days per week and class duration. Price
//                 adjusts accordingly.
//               </p>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {onlineOptions.map((opt, i) => (
//                 <div
//                   key={i}
//                   className="flex justify-between items-center border-b pb-2"
//                 >
//                   <div>
//                     <p className="font-medium">{opt.days}</p>
//                     <p className="text-sm text-muted-foreground">
//                       Duration: {opt.duration}
//                     </p>
//                   </div>
//                   <span className="font-semibold">{opt.base}</span>
//                 </div>
//               ))}
//               <Button className="w-full mt-4">Register for Online</Button>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Physical Pricing */}
//         <TabsContent value="physical">
//           <Card>
//             <CardHeader>
//               <CardTitle>Physical Classes</CardTitle>
//               <p className="text-muted-foreground text-sm">
//                 Includes Day and Boarding options with part-time or full-time.
//               </p>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               {/* Day Students */}
//               <div>
//                 <h3 className="font-semibold mb-2">Day Students</h3>
//                 {physicalOptions.day.map((opt, i) => (
//                   <div
//                     key={i}
//                     className="flex justify-between items-center border-b pb-2"
//                   >
//                     <span>{opt.type}</span>
//                     <span className="font-semibold">{opt.price}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Boarding Students */}
//               <div>
//                 <h3 className="font-semibold mb-2">Boarding Students</h3>
//                 {physicalOptions.boarding.map((opt, i) => (
//                   <div
//                     key={i}
//                     className="flex justify-between items-center border-b pb-2"
//                   >
//                     <span>{opt.type}</span>
//                     <span className="font-semibold">{opt.price}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Feeding */}
//               <div>
//                 <h3 className="font-semibold mb-2">Feeding (Boarding Only)</h3>
//                 {physicalOptions.feeding.map((opt, i) => (
//                   <div
//                     key={i}
//                     className="flex justify-between items-center border-b pb-2"
//                   >
//                     <span>{opt.type}</span>
//                     <span className="font-semibold">{opt.price}</span>
//                   </div>
//                 ))}
//               </div>

//               <Button className="w-full mt-4">Register for Physical</Button>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }


// app/programs/[slug]/page.tsx

// "use client";

// import { useParams } from "next/navigation";
// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const physicalPricing = {
//   day: {
//     partTime: 3000,
//     fullTime: 5000,
//   },
//   boarding: {
//     partTime: 10000,
//     fullTime: 20000,
//     feeding: {
//       partTime: 16000,
//       fullTime: 60000,
//     },
//   },
// };

// export default function ProgramDetails() {
//   const { slug } = useParams();
//   const [days, setDays] = useState("2");
//   const [duration, setDuration] = useState("30");

//   // Online pricing calculation (example formula: base ₦1000 * days * durationMultiplier)
//   const durationMultiplier = {
//     "30": 1,
//     "45": 1.5,
//     "60": 2,
//   };
//   const onlinePrice = 1000 * Number(days) * durationMultiplier[duration as keyof typeof durationMultiplier];

//   return (
//     <div className="max-w-3xl mx-auto p-50">
//       <h1 className="text-3xl font-bold mb-4 capitalize">{slug} Program</h1>
//       <p className="text-gray-600 mb-6">
//         Learn more about our <span className="capitalize">{slug}</span> program. Choose whether you want to study online or on-campus and explore the available fee structures.
//       </p>

//       <Tabs defaultValue="online">
//         <TabsList className="grid grid-cols-2 max-w-md">
//           <TabsTrigger value="online">Online</TabsTrigger>
//           <TabsTrigger value="physical">On-Campus</TabsTrigger>
//         </TabsList>

//         {/* ONLINE TAB */}
//         <TabsContent value="online">
//           <Card className="mt-4">
//             <CardHeader>
//               <CardTitle>Flexible Online Pricing</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid gap-4">
//                 <div>
//                   <p className="mb-2">How many days per week?</p>
//                   <Select onValueChange={setDays} defaultValue={days}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select days" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="2">2 Days</SelectItem>
//                       <SelectItem value="3">3 Days</SelectItem>
//                       <SelectItem value="4">4 Days</SelectItem>
//                       <SelectItem value="5">5 Days</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div>
//                   <p className="mb-2">Duration per class</p>
//                   <Select onValueChange={setDuration} defaultValue={duration}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select duration" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="30">30 minutes</SelectItem>
//                       <SelectItem value="45">45 minutes</SelectItem>
//                       <SelectItem value="60">1 hour</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="mt-4">
//                   <p className="text-lg font-semibold">Estimated Fee: ₦{onlinePrice.toLocaleString()}</p>
//                 </div>

//                 <Button className="w-full mt-2">Register Now</Button>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* PHYSICAL TAB */}
//         <TabsContent value="physical">
//           <Card className="mt-4">
//             <CardHeader>
//               <CardTitle>On-Campus Pricing</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               {/* Day Students */}
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Day Students</h3>
//                 <p>📌 Part-Time (Weekend 9am – 4pm): ₦{physicalPricing.day.partTime}</p>
//                 <p>📌 Full-Time (Weekend + Mon–Wed 4pm – 6:30pm): ₦{physicalPricing.day.fullTime}</p>
//               </div>

//               {/* Boarding Students */}
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Boarding Students</h3>
//                 <p>📌 Part-Time (Fri 4pm – Sun 4pm): ₦{physicalPricing.boarding.partTime}</p>
//                 <p>📌 Full-Time (Everyday): ₦{physicalPricing.boarding.fullTime}</p>
//                 <p className="mt-3 font-medium">🍽 With Feeding:</p>
//                 <p>– Part-Time: ₦{physicalPricing.boarding.feeding.partTime}</p>
//                 <p>– Full-Time: ₦{physicalPricing.boarding.feeding.fullTime}</p>
//               </div>

//               <Button className="w-full mt-2">Register Now</Button>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }



// // app/programs/[slug]/page.tsx
// "use client";

// import { useParams } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function ProgramDetails() {
//   const { slug } = useParams();

//   return (
//     <section className="max-w-5xl mx-auto py-12 px-4">
//       <h1 className="text-3xl font-bold capitalize mb-8">
//         {slug} Program
//       </h1>

//       {/* Tabs for Online / Physical */}
//       <Tabs defaultValue="online" className="w-full">
//         <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
//           <TabsTrigger value="online">Online</TabsTrigger>
//           <TabsTrigger value="physical">Physical (Day/Boarding)</TabsTrigger>
//         </TabsList>

//         {/* Online Pricing */}
//         <TabsContent value="online">
//           <Card>
//             <CardHeader>
//               <CardTitle>Online Program</CardTitle>
//               <p className="text-sm text-gray-600">
//                 Flexible schedule — choose how many days per week/month and class
//                 duration. The price depends on your selection.
//               </p>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <ul className="list-disc pl-6 text-gray-700">
//                 <li>Choose number of days per week or month.</li>
//                 <li>Select class duration (30 mins, 45 mins, 1 hour).</li>
//                 <li>Pricing auto-adjusts based on your choices.</li>
//               </ul>
//               <p className="mt-4 text-sm text-gray-500">
//                 *Contact us for personalized pricing for Online classes.
//               </p>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Physical Pricing */}
//         <TabsContent value="physical">
//           <Card>
//             <CardHeader>
//               <CardTitle>Physical Program</CardTitle>
//               <p className="text-sm text-gray-600">
//                 Includes Day and Boarding, with part-time or full-time options.
//               </p>
//             </CardHeader>
//             <CardContent>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {/* Day Students */}
//                 <div>
//                   <h3 className="font-semibold mb-2">Day Students</h3>
//                   <ul className="space-y-2 text-gray-700">
//                     <li>
//                       <strong>Part-time:</strong> ₦3,000 <br />
//                       <span className="text-sm">Weekend (Sat-Sun, 9am - 4pm)</span>
//                     </li>
//                     <li>
//                       <strong>Full-time:</strong> ₦5,000 <br />
//                       <span className="text-sm">
//                         Weekend (9am - 4pm) + Mon-Wed (4pm - 6:30pm)
//                       </span>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Boarding Students */}
//                 <div>
//                   <h3 className="font-semibold mb-2">Boarding Students</h3>
//                   <ul className="space-y-2 text-gray-700">
//                     <li>
//                       <strong>Part-time:</strong> ₦10,000 <br />
//                       <span className="text-sm">Fri (4pm) - Sun (4pm)</span>
//                     </li>
//                     <li>
//                       <strong>Full-time:</strong> ₦20,000 <br />
//                       <span className="text-sm">Every day boarding</span>
//                     </li>
//                   </ul>
//                   <h4 className="mt-4 font-medium">Feeding (Optional)</h4>
//                   <ul className="space-y-2 text-gray-700">
//                     <li>Part-time: ₦16,000</li>
//                     <li>Full-time: ₦60,000</li>
//                   </ul>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </section>
//   );
// }



// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// export default function ProgramsPricing() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Our Programs & Pricing
//         </h2>

//         {/* Online Programs */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-semibold mb-6 text-center">
//             🌐 Online Programs (Flexible)
//           </h3>
//           <Card className="max-w-3xl mx-auto shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-lg">Available Programs</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-2 text-gray-700">
//               <ul className="list-disc list-inside space-y-1">
//                 <li>Qirā’ah – Learn correct Qur’ān recitation</li>
//                 <li>Tajwīd – Mastery of recitation rules</li>
//                 <li>Tahfīdh – Qur’ān memorization program</li>
//                 <li>Qirā’āt – Advanced recitation variants</li>
//                 <li>Intensive Taʿlīm – Full package covering everything</li>
//                 <li>
//                   Murājaʿah – Revision & correction for memorized portions
//                 </li>
//               </ul>
//               <p className="mt-4">
//                 ✅ Flexible scheduling: choose <strong>days per week</strong> &
//                 <strong> class duration</strong> (30min, 45min, 1hr).
//               </p>
//               <p className="font-semibold">
//                 💰 Pricing is based on your selection.
//               </p>
//               <Button className="mt-4">Calculate Your Plan</Button>
//             </CardContent>
//           </Card>
//         </div>

//         {/* On-Site Programs */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-6 text-center">
//             🏫 On-Site Programs (Day & Boarding)
//           </h3>
//           <div className="grid gap-6 md:grid-cols-2">
//             {/* Day Students */}
//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle>Day Students</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3 text-gray-700">
//                 <p>
//                   <strong>Part-time – ₦3,000</strong> <br />
//                   (Weekend: Sat & Sun, 9am – 4pm)
//                 </p>
//                 <p>
//                   <strong>Full-time – ₦5,000</strong> <br />
//                   (Weekend + Mon–Wed evenings)
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Boarding Students */}
//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle>Boarding Students</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3 text-gray-700">
//                 <p>
//                   <strong>Part-time – ₦10,000</strong> <br />
//                   (Fri 4pm – Sun 4pm)
//                 </p>
//                 <p>
//                   <strong>Full-time – ₦20,000</strong> <br />
//                   (Everyday boarding)
//                 </p>
//                 <hr className="my-2" />
//                 <p className="font-semibold">🍴 Feeding (Optional)</p>
//                 <p>Part-time – ₦16,000</p>
//                 <p>Full-time – ₦60,000</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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



"use client";

import Link from "next/link";
import { getProgramBySlug } from "@/data/programs";
import { notFound } from "next/navigation";

export default function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    return (
      
     notFound()
    );
  }

  return (
    <section className="min-h-screen bg-white py-50">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-emerald-900">{program.name}</h1>
        <p className="text-gray-700 mt-4">{program.description}</p>

        <div className="mt-8 grid gap-4">
          <div className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/50">
            <h2 className="font-semibold text-emerald-800">Online</h2>
            <p className="text-gray-700 mt-1">{program.online.note}</p>
          </div>

          <div className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/50">
            <h2 className="font-semibold text-emerald-800">
              On-site (Physical)
            </h2>
            {"partTime" in program.physical ||
            "fullTime" in program.physical ? (
              <ul className="mt-2 text-gray-700 list-disc list-inside">
                {program.physical.partTime && (
                  <li>Part-time: {program.physical.partTime}</li>
                )}
                {program.physical.fullTime && (
                  <li>Full-time: {program.physical.fullTime}</li>
                )}
              </ul>
            ) : (
              <ul className="mt-2 text-gray-700 list-disc list-inside">
                {program.physical.partTimeDay && (
                  <li>Day (Part-time): {program.physical.partTimeDay}</li>
                )}
                {program.physical.fullTimeDay && (
                  <li>Day (Full-time): {program.physical.fullTimeDay}</li>
                )}
                {program.physical.partTimeBoarding && (
                  <li>
                    Boarding (Part-time): {program.physical.partTimeBoarding}
                  </li>
                )}
                {program.physical.fullTimeBoarding && (
                  <li>
                    Boarding (Full-time): {program.physical.fullTimeBoarding}
                  </li>
                )}
                {program.physical.feeding && (
                  <li>
                    Feeding: Part-time {program.physical.feeding.partTime},
                    Full-time {program.physical.feeding.fullTime}
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link
            href={`/pricing/${program.slug}`}
            className="bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700"
          >
            Proceed to Pricing
          </Link>
          <Link
            href="/programs"
            className="text-emerald-700 hover:underline px-2 py-3"
          >
            Back to Programs
          </Link>
        </div>
      </div>
    </section>
  );
}