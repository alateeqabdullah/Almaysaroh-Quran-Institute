// scripts/seedProgramsFull.ts

import { supabase } from "@/lib/supabaseClient";

async function seedPrograms() {
  const programs = [
    {
      slug: "qiraah",
      name: "Qirõ'ah",
      icon: "GraduationCap",
      description:
        "Focuses on mastering the correct recitation of the Qur’an with emphasis on phonetics and articulation. Students will learn the proper way to pronounce each letter and word.",
      outline: [
        "Introduction to Arabic letters",
        "Phonetics & articulation practice",
        "Short Surahs recitation",
        "Daily reading exercises",
      ],
      requirements: ["Basic knowledge of Arabic letters"],
      online_note:
        "Flexible — choose number of days per week or month, and class duration (30, 45, or 60 minutes). Pricing adjusts accordingly.",
      physical_day_part_time: "₦3,000 (Weekend: Sat–Sun, 9am–4pm)",
      physical_day_full_time: "₦5,000 (Weekend 9am–4pm + Mon–Wed 4pm–6:30pm)",
      physical_boarding_part_time: "₦10,000 (Fri 4pm – Sun 4pm)",
      physical_boarding_full_time: "₦20,000 (Everyday boarding)",
      feeding_part_time: "₦16,000",
      feeding_full_time: "₦60,000",
    },
    {
      slug: "tajweed",
      name: "Tajweed",
      icon: "BookOpen",
      description:
        "Dedicated to learning the rules of Tajweed to ensure proper Qur’anic recitation with precision and beauty. Includes practical recitations and corrections.",
      outline: [
        "Rules of Noon Sakinah and Tanween",
        "Rules of Meem Sakinah",
        "Qalqalah rules",
        "Practical Tajweed recitation",
      ],
      requirements: ["Basic recitation skills"],
      online_note: "Flexible — pay per duration and days selected.",
      physical_day_part_time: "₦3,000",
      physical_day_full_time: "₦5,000",
      physical_boarding_part_time: "₦10,000",
      physical_boarding_full_time: "₦20,000",
      feeding_part_time: "₦16,000",
      feeding_full_time: "₦60,000",
    },
    {
      slug: "tahfeedh",
      name: "Tahfeedh",
      icon: "UserCheck",
      description:
        "Designed for students who want to memorize the Qur’an. Emphasis on consistency, revision, and proper memorization techniques.",
      outline: [
        "Daily memorization goals",
        "Revision schedules",
        "Hifz techniques and mnemonics",
        "One-on-one review sessions",
      ],
      requirements: ["Basic recitation skills"],
      online_note: "Flexible — structured per duration and number of days.",
      physical_day_part_time: "₦3,000",
      physical_day_full_time: "₦5,000",
      physical_boarding_part_time: "₦10,000",
      physical_boarding_full_time: "₦20,000",
      feeding_part_time: "₦16,000",
      feeding_full_time: "₦60,000",
    },
    {
      slug: "qiroaat",
      name: "Qirõ’aat",
      icon: "Users",
      description:
        "Specialized program for learning the ten recognized modes of Qur’anic recitation (Qirõ’aat). Guided practice and application.",
      outline: [
        "Introduction to the ten Qirõ’aat",
        "Practice sessions for each mode",
        "Fluency and accuracy checks",
        "Evaluation and feedback",
      ],
      requirements: ["Intermediate recitation skills"],
      online_note: "Flexible — structured pricing per mode and duration.",
      physical_day_part_time: "₦3,000",
      physical_day_full_time: "₦5,000",
      physical_boarding_part_time: "₦10,000",
      physical_boarding_full_time: "₦20,000",
      feeding_part_time: "₦16,000",
      feeding_full_time: "₦60,000",
    },
    {
      slug: "murojaah",
      name: "Murõja’ah",
      icon: "Clock",
      description:
        "Revision program for those who have memorized portions of the Qur’an — strengthens retention, fluency, and accuracy.",
      outline: [
        "Review of previously memorized portions",
        "Fluency exercises",
        "Correction and evaluation",
        "Monthly tests and assessments",
      ],
      requirements: ["Must have memorized a portion of Qur’an"],
      online_note: "Flexible — available per session or monthly.",
      physical_day_part_time: "₦5,000",
      physical_day_full_time: "₦10,000",
      physical_boarding_part_time: null,
      physical_boarding_full_time: null,
      feeding_part_time: null,
      feeding_full_time: null,
    },
    {
      slug: "intensive-taleem",
      name: "Intensive Ta’leem",
      icon: "Heart",
      description:
        "An all-in-one intensive program: recitation, Tajweed, memorization, and Islamic studies in a structured curriculum.",
      outline: [
        "Comprehensive recitation practice",
        "Tajweed rules application",
        "Memorization techniques",
        "Islamic studies and character development",
      ],
      requirements: ["Basic to intermediate recitation skills"],
      online_note: "Flexible — pay based on selected subjects and duration.",
      physical_day_part_time: "₦4,000",
      physical_day_full_time: "₦7,000",
      physical_boarding_part_time: "₦12,000",
      physical_boarding_full_time: "₦25,000",
      feeding_part_time: "₦18,000",
      feeding_full_time: "₦65,000",
    },
  ];

  for (const program of programs) {
    const { error } = await supabase.from("programs").upsert(program);
    if (error) console.error("Error inserting program", program.slug, error);
    else console.log("Inserted program:", program.slug);
  }

  console.log("Seeding completed.");
}

seedPrograms();
