import { testimonials } from "@/lib/static-data";
import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Testimonials</h1>
      <div className="space-y-8">
        {testimonials.map((t) => (
          <div key={t.name} className="flex gap-4">
            <Image
              src={t.avatar}
              alt={t.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <p className="font-bold">{t.name}</p>
              <p className="text-muted-foreground">“{t.text}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
