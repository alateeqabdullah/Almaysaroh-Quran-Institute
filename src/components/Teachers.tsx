"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import H2 from "./H2";
import Description from "./Description";
import Image from "next/image";

type Teacher = {
  name: string;
  title: string;
  image: string; // Path to teacher image
  bio: string;
};

const teachers: Teacher[] = [
  {
    name: "Ustadh Abubakar Abdurrozzaq",
    title: "Qirā’ah Instructor",
    image: "/teachers/abubakar.jpeg",
    bio: "Certified Qur’an teacher with 15 years of experience teaching Tajweed and Qirā’ah.",
  },
  {
    name: "Ustadhah Faatimah Alagbada",
    title: "Tahfeedh Instructor",
    image: "/teachers/fatimah-alagbada.jpeg",
    bio: "Expert in memorization (Tahfeedh) with personalized student guidance.",
  },
  {
    name: "Ustadh 'Aliyyu 'Abdurrozzaq ",
    title: "Tajweed Instructor",
    image: "/teachers/aliyyu-abdurrozzaq.jpeg",
    bio: "Specializes in Tajweed rules, ensuring accurate and fluent recitation.",
  },
  {
    name: "Ustadhah Robee'ah Abdurrozzaq",
    title: "Qirā’aat Instructor",
    image: "/teachers/robeeah.png",
    bio: "Experienced in teaching multiple Qirā’aat, focusing on pronunciation and rhythm.",
  },
];

export default function Teachers() {
  return (
    <section className="py-20 bg-green-50 text-green-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <H2
      className=" text-green-800 "
        >
          Meet Our Instructors
        </H2>
        <Description className=" pb-10 ">
          Learn from highly qualified teachers who are passionate about helping
          every student succeed in their Qur’an journey.
        </Description>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden border-4 border-green-200">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800">
                    {teacher.name}
                  </h3>
                  <p className="text-green-600 mb-2">{teacher.title}</p>
                  <p className="text-gray-700 text-sm">{teacher.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
