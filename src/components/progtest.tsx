// app/programs/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Example programs data
const programs = {
  tajweed: {
    title: "Qur’an with Tajweed",
    about:
      "Learn proper pronunciation and articulation of Qur’anic recitation.",
    outline: [
      "Arabic Alphabet Mastery",
      "Makharij (Articulation Points)",
      "Tajweed Rules",
      "Practical Recitation",
    ],
    requirements: "Ability to read basic Arabic script.",
  },
  hifdh: {
    title: "Tahfeedh (Memorization)",
    about: "Structured Qur’an memorization program with revision support.",
    outline: [
      "Daily Memorization",
      "Weekly Review",
      "Advanced Revision Cycles",
      "Ijazah Pathway",
    ],
    requirements: "Commitment to daily sessions.",
  },
  // Add more programs...
};

export default function ProgramDetails() {
  const { slug } = useParams();
  const program = programs[slug as keyof typeof programs];

  if (!program) {
    return <p className="text-center mt-10">Program not found</p>;
  }

  return (
    <section className="container mx-auto py-12 px-6">
      <Card className="p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{program.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="mb-6">{program.about}</p>

          <h2 className="text-xl font-semibold mb-2">Outline</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            {program.outline.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <p className="mb-6">{program.requirements}</p>

          <Link href={`/pricing?program=${slug}`}>
            <Button className="w-full mt-4">View Fee Plans</Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
