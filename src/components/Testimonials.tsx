// "use client";

// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";

// type Testimonial = {
//   name: string;
//   role: string;
//   feedback: string;
// };

// const testimonials: Testimonial[] = [
//   {
//     name: "Fatimah Yusuf",
//     role: "Parent",
//     feedback:
//       "Al-Maysaroh has transformed my son’s learning experience. The teachers are patient, dedicated, and truly care about the students’ success.",
//   },
//   {
//     name: "Abdullah Musa",
//     role: "Student",
//     feedback:
//       "I never thought learning Qur’an could be this engaging. The online sessions feel like I am in a real classroom.",
//   },
//   {
//     name: "Maryam Ibrahim",
//     role: "Parent",
//     feedback:
//       "The flexibility of classes is what stands out. I can schedule lessons around my child’s daily activities. It’s a blessing!",
//   },
//   {
//     name: "Ahmed Ali",
//     role: "Student",
//     feedback:
//       "The teachers explain everything clearly and encourage us to do our best. I feel more confident in my recitation now.",
//   },
//   {
//     name: "Zainab Sani",
//     role: "Parent",
//     feedback:
//       "This is more than just a Qur’an school. It feels like a community where every student is valued.",
//   },
//   {
//     name: "Hassan Umar",
//     role: "Student",
//     feedback:
//       "I love the way classes are interactive. It doesn’t feel boring at all. I’ve improved so much since joining.",
//   },
//   {
//     name: "Aisha Abdulkareem",
//     role: "Parent",
//     feedback:
//       "Al-Maysaroh makes learning accessible. I appreciate how they keep parents updated on progress.",
//   },
//   {
//     name: "Ibrahim Sule",
//     role: "Student",
//     feedback:
//       "The best part is the teachers are approachable and always willing to help. It motivates me to keep learning.",
//   },
// ];

// export default function Testimonials() {
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 4000 }),
//   ]);

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-green-700 mb-12"
//         >
//           What Our Students & Parents Say
//         </motion.h2>

//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex">
//             {testimonials.map((t, index) => (
//               <motion.div
//                 key={index}
//                 className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] px-4"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full shadow-md rounded-2xl border border-green-100 bg-green-50">
//                   <CardContent className="p-6 flex flex-col justify-between h-full">
//                     <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
//                     <div className="mt-4 text-left">
//                       <p className="font-semibold text-green-700">{t.name}</p>
//                       <p className="text-sm text-gray-500">{t.role}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import H2 from "./H2";

type Testimonial = { name: string; role: string; feedback: string };

const testimonials: Testimonial[] = [
  {
    name: "Amina Yusuf",
    role: "Parent",
    feedback: "Al-Maysaroh has transformed the way my children learn Qur’an. The teachers are patient and dedicated.",
  },
  {
    name: "Abdullah Ibrahim",
    role: "Student",
    feedback: "A truly welcoming environment. My recitation has improved greatly since joining.",
  },
  {
    name: "Fatima Bello",
    role: "Parent",
    feedback: "The programs are well-structured and easy to follow. Highly recommended.",
  },
  {
    name: "Muhammad Ali",
    role: "Student",
    feedback: "Online classes are smooth, and I’m always motivated to continue learning.",
  },
  {
    name: "Zainab Suleiman",
    role: "Parent",
    feedback: "Excellent teachers who genuinely care about progress.",
  },
  {
    name: "Hassan Umar",
    role: "Student",
    feedback: "I was a beginner—now I read with confidence.",
  },
  {
    name: "Maryam Usman",
    role: "Parent",
    feedback: "Uplifting atmosphere. My child looks forward to classes.",
  },
  {
    name: "Khalid Sani",
    role: "Alumnus",
    feedback: "One of the best decisions for my spiritual growth.",
  },
   {
    name: "Fatimah Yusuf",
    role: "Parent",
    feedback:
      "Al-Maysaroh has transformed my son’s learning experience. The teachers are patient, dedicated, and truly care about the students’ success.",
  },
  {
    name: "Abdullah Musa",
    role: "Student",
    feedback:
      "I never thought learning Qur’an could be this engaging. The online sessions feel like I am in a real classroom.",
  },
  {
     name: "Maryam Ibrahim",
     role: "Parent",
     feedback:
    "The flexibility of classes is what stands out. I can schedule lessons around my child’s daily activities. It’s a blessing!",
  },
  {
   name: "Ahmed Ali",
   role: "Student",
   feedback:
     "The teachers explain everything clearly and encourage us to do our best. I feel more confident in my recitation now.",
  },
 {
  name: "Zainab Sani",
   role: "Parent",
   feedback:
   "This is more than just a Qur’an school. It feels like a community where every student is valued.",
 },
  {
   name: "Hassan Umar",
   role: "Student",
  feedback:
    "I love the way classes are interactive. It doesn’t feel boring at all. I’ve improved so much since joining.",
   },
  {
    name: "Aisha Abdulkareem",
   role: "Parent",
   feedback:
    "Al-Maysaroh makes learning accessible. I appreciate how they keep parents updated on progress.",
  },
  {
  name: "Ibrahim Sule",
 role: "Student",
feedback:
     "The best part is the teachers are approachable and always willing to help. It motivates me to keep learning.",
  },
];

export default function TestimonialsCarousel() {
  //  ✅ Make the plugin instance stable across renders
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });

    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );
  const scrollTo = (idx: number) => emblaApi?.scrollTo(idx);

  return (
    <section className="py-20 bg-primary relative">
      <div className="max-w-6xl mx-auto px-6">
        <H2 className="text-3xl md:text-4xl lg:text-5xl mb-12 ">
          What Our Community Says
        </H2>

        {/* Viewport (Embla) */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_90%] sm:flex-[0_0_65%] md:flex-[0_0_45%] lg:flex-[0_0_33%] px-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="h-full"
                >
                  <Card className="h-full rounded-2xl shadow-md border border-green-100 bg-green-50 hover:shadow-lg transition">
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                      <p className="text-gray-700 italic leading-relaxed">
                        “{t.feedback}”
                      </p>
                      <div className="mt-5">
                        <h4 className="font-semibold text-green-800">
                          {t.name}
                        </h4>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="hidden md:block">
          <Button
            onClick={scrollPrev}
            size="icon"
            variant="outline"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-green-100"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5 text-green-700" />
          </Button>
          <Button
            onClick={scrollNext}
            size="icon"
            variant="outline"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-green-100"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5 text-green-700" />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                idx === selectedIndex
                  ? "bg-green-100"
                  : "bg-green-700 hover:bg-green-100"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
