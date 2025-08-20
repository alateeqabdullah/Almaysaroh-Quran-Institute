// components/Vision.tsx
import { Globe } from "lucide-react";

export default function Vision() {
  return (
    <section className="py-16 px-6 bg-green-100 max-w-6xl mx-auto rounded-2xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <div className="bg-green-200 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
            <Globe size={36} className="text-green-800" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-green-900 mb-4">Our Vision</h2>
          <p className="text-green-800 text-lg">
            To create a generation of confident Qur’ān learners with strong
            spiritual and moral foundations, who can positively impact their
            communities while having full access to flexible online and
            in-person learning.
          </p>
        </div>
      </div>
    </section>
  );
}
