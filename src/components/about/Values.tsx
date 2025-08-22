// components/Vision.tsx
import {  Heart } from "lucide-react";
import Description from "../Description";
import H3 from "../H3";

export default function Values() {
  return (
    <section className="py-16 pb-24 px-6 max-w-6xl mx-auto rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-shrink-0">
          <div className="bg-green-300 0 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
            <Heart size={36} className="text-green-800" />
          </div>
        </div>
        <div>
          <H3 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Our Values</H3>
          <Description className="font-semibold text-lg">
            Integrity, dedication, compassion, and fostering a lifelong love for
            the Qur’an and Islamic knowledge.
          </Description>
        </div>
      </div>
    </section>
  );
}
