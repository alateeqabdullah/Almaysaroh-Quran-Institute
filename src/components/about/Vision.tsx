// components/Vision.tsx
import { Globe } from "lucide-react";
import Description from "../Description";
import H3 from "../H3";

export default function Vision() {
  return (
    <section className="py-16 px-6 bg-primary max-w-6xl mx-auto rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-shrink-0">
          <div className="bg-green-50 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
            <Globe size={36} className="text-green-800" />
          </div>
        </div>
        <div>
          <H3 className="text-4xl md:text-5xl font-bold text-surface mb-4">
            Our Vision
          </H3>
          <Description className="font-medium text-gray-200 text-lg">
            To create a generation of confident Qur’ān learners with strong
            spiritual and moral foundations, who can positively impact their
            communities while having full access to flexible online and
            in-person learning.
          </Description>
          <Description className="text-gray-200 mt-4">
            We aim to be a leading Quranic institute recognized for excellence
            in teaching and student development.
          </Description>
        </div>
      </div>
    </section>
  );
}
