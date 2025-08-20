// components/Mission.tsx
import { Heart } from "lucide-react";

export default function Mission() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <div className="bg-green-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
            <Heart size={36} className="text-green-700" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Our Mission
          </h2>
          <p className="text-green-700 text-lg">
            To make Qur’ān learning accessible, engaging, and effective through
            online and physical classes. We aim to build a supportive Islamic
            community where learners can thrive spiritually and academically.
          </p>
        </div>
      </div>
    </section>
  );
}
