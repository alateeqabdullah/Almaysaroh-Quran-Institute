
// app/programs/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { programs } from "@/data/programs";
// import { Button } from "@/components/ui/button";

export default function ProgramDetailsPage() {
  const { slug } = useParams();
  // const router = useRouter();

  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <div className="p-6 text-center text-red-500">Program not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-16 pb-16 ">
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

      {/* Pricing Options
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
      </div> */}
    </div>
  );
}
