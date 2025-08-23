
import StudyMode from "@/components/register/StudyMode";
import { sleep } from "@/lib/utils";

export default async function RegisterPage() {
  await sleep(2000)
  return (
    <section className="max-w-3xl mx-auto px-4 pb-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-emerald-800 mb-8">
        Register for Our Programs
      </h1>
      <StudyMode />
    </section>
  );
}

// "use client";

// export default function RegisterPage() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white p-6">
//       <button
//         data-tally-open="your-tally-form-id" // 🔗 Replace with your form ID
//         data-tally-width="800"
//         data-tally-overlay="1"
//         className="px-6 py-3 rounded-xl bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 transition"
//       >
//         Register Now
//       </button>
//     </section>
//   );
// }
