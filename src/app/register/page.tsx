"use client";

import { useState } from "react";

const programs = [
  { slug: "qiroah", name: "Qirõ'ah" },
  { slug: "tajweed", name: "Tajweed" },
  { slug: "tahfeedh", name: "Tahfeedh" },
  { slug: "murojaah", name: "Murõja'ah" },
  { slug: "qiroaat", name: "Qirõ'aat" },
  { slug: "intensive", name: "Intensive Ta'leem" },
];

export default function RegisterPage() {
  const [mode, setMode] = useState("");
  const [program, setProgram] = useState("");

  const tallyUrl = "https://tally.so/r/3jRMva";

  const finalUrl =
    mode && program ? `${tallyUrl}?mode=${mode}&program=${program}` : tallyUrl;

  return (
    <section className="max-w-3xl mx-auto px-4 py-50">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-emerald-800 mb-8">
        Register for Our Programs
      </h1>

      {/* Step 1: Select Mode */}
      <div className="mb-6">
        <label className="block font-semibold text-emerald-700 mb-2">
          Choose Mode of Study:
        </label>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-lg border ${
              mode === "online"
                ? "bg-emerald-600 text-white"
                : "bg-white text-emerald-600 border-emerald-600"
            }`}
            onClick={() => setMode("online")}
          >
            Online
          </button>
          <button
            className={`px-4 py-2 rounded-lg border ${
              mode === "physical"
                ? "bg-emerald-600 text-white"
                : "bg-white text-emerald-600 border-emerald-600"
            }`}
            onClick={() => setMode("physical")}
          >
            Physical
          </button>
        </div>
      </div>

      {/* Step 2: Select Program */}
      {mode && (
        <div className="mb-6">
          <label className="block font-semibold text-emerald-700 mb-2">
            Choose Program:
          </label>
          <div className="grid grid-cols-2 gap-3">
            {programs.map((p) => (
              <button
                key={p.slug}
                className={`px-4 py-2 rounded-lg border ${
                  program === p.slug
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-emerald-600 border-emerald-600"
                }`}
                onClick={() => setProgram(p.slug)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Show Tally */}
      {mode && program && (
        <div className="mt-10">
          <iframe
            src={finalUrl}
            width="100%"
            height="600"
            frameBorder="0"
            title="Registration Form"
          ></iframe>
        </div>
      )}
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
