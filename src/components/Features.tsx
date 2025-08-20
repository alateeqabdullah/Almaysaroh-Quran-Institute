// import { GraduationCap, Clock, BookOpen, UserCheck, Heart, Users } from "lucide-react";

// const reasons = [
//   {
//     icon: GraduationCap,
//     title: "Qualified Teachers",
//     description: "Learn from certified and experienced Qur’ān instructors with a passion for teaching."
//   },
//   {
//     icon: Clock,
//     title: "Flexible Learning",
//     description: "Join us online or in-person, with schedules that fit your lifestyle."
//   },
//   {
//     icon: BookOpen,
//     title: "Structured Curriculum",
//     description: "Step-by-step learning plans for Qirā’ah, Tajweed, Tahfeedh, and more."
//   },
//   {
//     icon: UserCheck,
//     title: "One-on-One Attention",
//     description: "Personalized support to ensure every student achieves their learning goals."
//   },
//   {
//     icon: Heart,
//     title: "Spiritual & Character Development",
//     description: "Focus not only on recitation, but also on building strong Islamic values."
//   },
//   {
//     icon: Users,
//     title: "Community & Support",
//     description: "Be part of a supportive learning family that encourages growth and success."
//   }
// ];

// export default function WhyAlmaysaroh() {
//   return (
//     <section className="bg-gradient-to-b from-green-50 to-green-100 py-16 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
//           Why Almaysaroh Stands Out
//         </h2>
//         <p className="text-green-700 max-w-2xl mx-auto mb-12">
//           Discover what makes our Qur’ān learning experience unique and impactful.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white shadow-lg rounded-2xl p-6 border border-green-200 hover:shadow-xl hover:border-green-400 transition duration-300"
//               >
//                 <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 mx-auto mb-4">
//                   <Icon size={28} />
//                 </div>
//                 <h3 className="text-lg font-semibold text-green-800 mb-2">{reason.title}</h3>
//                 <p className="text-green-600">{reason.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import {
  GraduationCap,
  Clock,
  BookOpen,
  UserCheck,
  Heart,
  Users,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: GraduationCap,
    title: "Qualified Teachers",
    description:
      "Learn from certified and experienced Qur’ān instructors with a passion for teaching.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "Join us online or in-person, with schedules that fit your lifestyle.",
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "Step-by-step learning plans for Qirā’ah, Tajweed, Tahfeedh, and more.",
  },
  {
    icon: UserCheck,
    title: "One-on-One Attention",
    description:
      "Personalized support to ensure every student achieves their learning goals.",
  },
  {
    icon: Heart,
    title: "Spiritual & Character Development",
    description:
      "Focus not only on recitation, but also on building strong Islamic values.",
  },
  {
    icon: Users,
    title: "Community & Support",
    description:
      "Be part of a supportive learning family that encourages growth and success.",
  },
];

export default function WhyAlmaysaroh() {
  return (
    <section className="relative py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why <span className="text-green-600 text-5xl md:text-6xl ">Al-maysaroh</span> Stands Out
        </motion.h2>

        <motion.p
          className="text-gray-500 max-w-2xl mx-auto mb-12 font-semibold md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover what makes our Qur’ān learning experience unique and
          impactful.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white shadow-lg rounded-2xl p-8 border border-green-200 hover:shadow-xl hover:border-green-400 transition-all"
              >
                <div className="flex items-center justify-center w-30 h-30 rounded-full bg-green-300 text-primary mx-auto mt-4 mb-8">
                  <Icon size={50} />
                </div>
                <h3 className="text-3xl font-semibold text-primary-dark mb-5">
                  {feature.title}
                </h3>
                <p className=" text-lg text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}