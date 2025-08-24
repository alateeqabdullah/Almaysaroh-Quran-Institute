// components/Mission.tsx
import { Heart } from "lucide-react";
import H3 from "../H3";
import Description from "../Description";

export default function Mission() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-shrink-0">
          <div className="bg-green-300 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
            <Heart size={36} className="text-green-700" />
          </div>
        </div>
        <div>
          <H3 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Mission
          </H3>
          <Description className="font-semibold text-lg">
            To make Qur’ān learning accessible, engaging, and effective through
            online and physical classes. We aim to build a supportive Islamic
            community through modern and flexible learning methods where
            learners can thrive spiritually and academically.
          </Description>
        </div>
      </div>
    </section>
  );
}
