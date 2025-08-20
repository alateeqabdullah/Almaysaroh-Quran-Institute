// components/PhysicalPrograms.tsx
import { BookOpen, Users, CheckCircle2, Heart, Globe } from "lucide-react";

const physicalPrograms = [
  {
    icon: BookOpen,
    title: "Qirā’ah",
    description: "Traditional recitation classes at our institute.",
  },
  {
    icon: CheckCircle2,
    title: "Tajweed",
    description: "Perfect your recitation using Tajweed rules in-person.",
  },
  {
    icon: Users,
    title: "Tahfeedh",
    description: "Memorization classes with structured guidance.",
  },
  {
    icon: Heart,
    title: "Murāja’ah",
    description: "Revision sessions to consolidate memorization.",
  },
  {
    icon: Globe,
    title: "General Madrasah",
    description:
      "Holistic Islamic education including Qur’ān studies, Fiqh, and Akhlaq.",
  },
];

export default function PhysicalPrograms() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-green-100 rounded-2xl">
      <h2 className="text-4xl font-bold text-green-900 mb-12 text-center">
        Physical Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {physicalPrograms.map((program, i) => {
          const Icon = program.icon;
          return (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-200 rounded-full">
                <Icon size={28} className="text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {program.title}
              </h3>
              <p className="font-semibold text-gray-700">{program.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
