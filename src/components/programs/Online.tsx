// components/OnlinePrograms.tsx
import { BookOpen, Clock, UserCheck } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import H2 from "../H2";

const onlinePrograms = [
  {
    icon: BookOpen,
    title: "Qirā’ah",
    description:
      "Learn correct Qur’ān recitation with professional guidance online.",
  },
  {
    icon: Clock,
    title: "Tajweed",
    description:
      "Master the rules of Tajweed to recite the Qur’ān beautifully.",
  },
  {
    icon: UserCheck,
    title: "Tahfeedh",
    description:
      "Structured memorization program with personalized mentorship.",
  },
];

export default function OnlinePrograms() {
  return (
    <section className="py-16 px-6 bg-green-800 max-w-6xl mx-auto">
      <H2 className="md:text-4xl  mb-12 text-center">
        Online Programs
      </H2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {onlinePrograms.map((program, i) => {
          const Icon = program.icon;
          return (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <Icon size={28} className="text-green-900" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {program.title}
              </h3>
              <p className="font-semibold text-gray-600">{program.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <Button asChild>
          <Link href={"/pricing"}>See Pricing</Link>
        </Button>
      </div>
    </section>
  );
}
