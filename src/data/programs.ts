// export type Program = {
//   slug: string;
//   title: string;
//   description: string;
//   about: string;
//   outline: string[];
//   requirements: string[];
//   fees: {
//     days: number;
//     hours: number;
//     price: {
//       usd: number;
//       eur: number;
//       ngn: number;
//     };
//   }[];
// };

import {
  BookAlertIcon,
  BookCheck,
  BookOpen,
  BookOpenCheck,
  PenTool,
} from "lucide-react";

export type FeedingOption = {
  partTime?: string;
  fullTime?: string;
};

export type PhysicalOptions = {
  partTimeDay: string;
  fullTimeDay: string;
  partTimeBoarding?: string;
  fullTimeBoarding?: string;
  partTimeDays: string;
  fullTimeDays: string;
  partTimeBoardings?: string;
  fullTimeBoardings?: string;
  feeding?: FeedingOption;
};

export type Program = {
  slug: string;
  name: string;
  icon: React.ElementType;
  description: string;
  outline: string[];
  requirements: string[];
  online: {
    note: string;
  };
  physical: PhysicalOptions;
};

export const programs: Program[] = [
  {
    slug: "qiraah",
    name: "Qirõ'ah",
    icon: BookOpen,
    description:
      "Focuses on mastering the correct recitation of the Qur’an with emphasis on phonetics and articulation. Students will learn the proper way to pronounce each letter and word.",
    outline: [
      "Introduction to the Arabic alphabet",
      "Correct pronunciation of each letter",
      "Practice of short and long vowels",
      "Reading selected short Surahs",
      "Progressive recitation exercises",
    ],
    requirements: [
      "Ability to read basic Arabic script",
      "Commitment to daily practice",
    ],
    online: {
      note: "Flexible — choose number of days per week and month, and class duration (30, 45, or 60 minutes). Pricing adjusts accordingly.",
    },
    physical: {
      partTimeDay: "₦3,000",
      fullTimeDay: "₦5,000",
      partTimeBoarding: "₦10,000",
      fullTimeBoarding: "₦20,000",
      partTimeDays: " (Weekend: Sat–Sun, 9am–4pm)",
      fullTimeDays: "(Weekend: 9am–4pm + Mon–Wed: 4pm–6:30pm)",
      partTimeBoardings: "(Fri: 4pm – Sun: 4pm)",
      fullTimeBoardings: "(Everyday boarding)",
      feeding: {
        partTime: "₦16,000",
        fullTime: "₦60,000",
      },
    },
  },
  {
    slug: "tajweed",
    name: "Tajweed",
    icon: BookOpen,
    description:
      "Dedicated to learning the rules of Tajweed to ensure proper Qur’anic recitation with precision and beauty. Includes practical recitations and corrections.",
    outline: [
      "Introduction to Makharij al-Huruf",
      "Rules of Recitation",
      "Introduction to Tajweed rules",
      "Makhaarij (points of articulation)",
      "Rules of Noon Saakin and Tanween",
      "Madd (elongation rules)",
      "Practice with selected Surahs",
      "Correcting Common Mistakes",
      "Practical Recitations with Teacher",
    ],
    requirements: ["Ability to read the Qur’an", "Willingness to be corrected"],
    online: {
      note: "Flexible — pay per duration and days selected.",
    },
    physical: {
      partTimeDay: "₦3,000",
      fullTimeDay: "₦5,000",
      partTimeBoarding: "₦10,000",
      fullTimeBoarding: "₦20,000",
      partTimeDays: " (Weekend: Sat–Sun, 9am–4pm)",
      fullTimeDays: "(Weekend: 9am–4pm + Mon–Wed: 4pm–6:30pm)",
      partTimeBoardings: "(Fri: 4pm – Sun: 4pm)",
      fullTimeBoardings: "(Everyday boarding)",
      feeding: {
        partTime: "₦16,000",
        fullTime: "₦60,000",
      },
    },
  },
  {
    slug: "tahfeedh",
    name: "Tahfeedh",
    icon: PenTool,
    description:
      "A structured memorization program for the Qur’an. Students are guided through consistent memorization and revision schedules.",
    outline: [
      "Daily memorization targets",
      "Weekly revision sessions",
      "Peer recitation checks",
      "Teacher-led correction sessions",
      "Completion milestones",
    ],
    requirements: [
      "Basic fluency in Qur’anic recitation",
      "Strong memory and discipline",
    ],
    online: {
      note: "Flexible schedule — per day/week with accountability system.",
    },
    physical: {
      partTimeDay: "₦3,000",
      fullTimeDay: "₦5,000",
      partTimeBoarding: "₦10,000",
      fullTimeBoarding: "₦20,000",
      partTimeDays: " (Weekend: Sat–Sun, 9am–4pm)",
      fullTimeDays: "(Weekend: 9am–4pm + Mon–Wed: 4pm–6:30pm)",
      partTimeBoardings: "(Fri: 4pm – Sun: 4pm)",
      fullTimeBoardings: "(Everyday boarding)",
      feeding: {
        partTime: "₦16,000",
        fullTime: "₦60,000",
      },
    },
  },
  {
    slug: "qiroaat",
    name: "Qirõ’aat",
    icon: BookAlertIcon,
    description:
      "Advanced study of the different recognized modes of Qur’anic recitation (Qirõ’aat).",
    outline: [
      "Introduction to the ten Qirõ’aat",
      "Differences in pronunciation",
      "Study of narrations (Riwayaat)",
      "Comparison recitations",
      "Certification of mastery",
    ],
    requirements: ["Completion of Tajweed program", "Fluent recitation"],
    online: {
      note: "Scheduled advanced sessions only.",
    },
    physical: {
      partTimeDay: "₦5,000",
      fullTimeDay: "₦10,000",
      partTimeBoarding: "₦10,000",
      fullTimeBoarding: "₦20,000",
      partTimeDays: " (Weekend: Sat–Sun, 9am–4pm)",
      fullTimeDays: "(Weekend: 9am–4pm + Mon–Wed: 4pm–6:30pm)",
      partTimeBoardings: "(Fri: 4pm – Sun: 4pm)",
      fullTimeBoardings: "(Everyday boarding)",
      feeding: {
        partTime: "₦16,000",
        fullTime: "₦60,000",
      },
    },
  },
  {
    slug: "murojaah",
    name: "Murõja’ah",
    icon: BookCheck,
    description:
      "Designed for students who have already memorized parts or the whole Qur’an to revise and strengthen their retention.",
    outline: [
      "Daily revision cycles",
      "Group recitation",
      "Error correction sessions",
      "Revision competitions",
    ],
    requirements: [
      "Must have memorized a portion of the Qur'an - at least Juz ‘Amma",
      "Commitment to consistent review",
    ],
    online: {
      note: "Flexible revision schedules available online.",
    },
    physical: {
      partTimeDay: "₦5,000",
      fullTimeDay: "₦10,000",
      partTimeBoarding: "₦10,000",
      fullTimeBoarding: "₦20,000",
      partTimeDays: " (Weekend: Sat–Sun, 9am–4pm)",
      fullTimeDays: "(Weekend: 9am–4pm + Mon–Wed: 4pm–6:30pm)",
      partTimeBoardings: "(Fri: 4pm – Sun: 4pm)",
      fullTimeBoardings: "(Everyday boarding)",
      feeding: {
        partTime: "₦16,000",
        fullTime: "₦60,000",
      },
    },
  },
  {
    slug: "intensive-taleem",
    name: "Intensive Ta’leem",
    icon: BookOpenCheck,
    description:
      "A comprehensive Islamic learning program designed for students who want to cover all aspects — Qirõ’ah, Tajweed, Tahfeedh,Qirõ’aat and more — in an intensive format.",
    outline: [
      "Qirõ’ah foundations",
      "Qur’an recitation (Qirõ’ah & Tajweed)",
      "Tahfeedh (Memorization)",
      "Qirõ’aat overview",
    ],
    requirements: ["Serious commitment", "Full-time availability"],
    online: {
      note: "Full-course package with scheduled classes.",
    },
    physical: {
      partTimeDay: "₦5,000",
      fullTimeDay: "₦10,000",
      partTimeBoarding: "₦10,000",
      fullTimeBoarding: "₦20,000",
      partTimeDays: " (Weekend: Sat–Sun, 9am–4pm)",
      fullTimeDays: "(Weekend: 9am–4pm + Mon–Wed: 4pm–6:30pm)",
      partTimeBoardings: "(Fri: 4pm – Sun: 4pm)",
      fullTimeBoardings: "(Everyday boarding)",
      feeding: {
        partTime: "₦16,000",
        fullTime: "₦60,000",
      },
    },
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

// // data/programs.ts
// export const programs = [
//   {
//     slug: "qiraah",
//     name: "Qirõ’ah",
//     description: "Learn to read the Qur’an fluently with correct pronunciation.",
//     outline: [
//       "Arabic alphabet mastery",
//       "Word formation and recognition",
//       "Qur’anic reading practice",
//     ],
//     requirements: [
//       "Basic familiarity with Arabic letters (preferred)",
//       "Age 6+",
//     ],
//     physicalDayPricing: "₦25,000 per term (Day)",
//     physicalBoardingPricing: "₦55,000 per term (Boarding)",
//   },
//   {
//     slug: "tajweed",
//     name: "Tajweed",
//     description: "Master the rules of Tajweed for precise Qur’anic recitation.",
//     outline: [
//       "Makharij (articulation points)",
//       "Rules of Noon & Meem",
//       "Qalqalah, Idghaam, Ikhfaa",
//       "Practical Qur’anic recitation",
//     ],
//     requirements: [
//       "Ability to read Qur’an (basic level)",
//       "Commitment to daily practice",
//     ],
//     physicalDayPricing: "₦30,000 per term (Day)",
//     physicalBoardingPricing: "₦60,000 per term (Boarding)",
//   },
//   {
//     slug: "tahfeedh",
//     name: "Tahfeedh",
//     description: "Memorize the Qur’an with guidance from expert Huffaadh.",
//     outline: [
//       "Daily memorization schedules",
//       "Revision & Murõja’ah system",
//       "Tracking progress with teacher",
//     ],
//     requirements: [
//       "Strong commitment and discipline",
//       "Prior Tajweed knowledge (recommended)",
//     ],
//     physicalDayPricing: "₦35,000 per term (Day)",
//     physicalBoardingPricing: "₦70,000 per term (Boarding)",
//   },
//   {
//     slug: "qiraat",
//     name: "Qirõ’aat",
//     description: "Study the different modes of Qur’anic recitation.",
//     outline: [
//       "Introduction to Qirõ’aat",
//       "Comparative recitation",
//       "Practical mastery",
//     ],
//     requirements: [
//       "Advanced Tajweed knowledge",
//       "Previous Qur’an memorization (preferred)",
//     ],
//     physicalDayPricing: "₦40,000 per term (Day)",
//     physicalBoardingPricing: "₦80,000 per term (Boarding)",
//   },
//   {
//     slug: "intensive-taleem",
//     name: "Intensive Ta’leem",
//     description:
//       "An intensive program for students who want to learn everything (Qur’an reading, Tajweed, Memorization, and Qirõ’aat) in one package.",
//     outline: [
//       "Qirõ’ah foundations",
//       "Tajweed mastery",
//       "Tahfeedh (Memorization)",
//       "Qirõ’aat overview",
//       "Arabic basics",
//     ],
//     requirements: [
//       "Willingness to commit to full-time learning",
//       "Age 12+ (preferred)",
//     ],
//     physicalDayPricing: "₦50,000 per term (Day)",
//     physicalBoardingPricing: "₦100,000 per term (Boarding)",
//   },
//   {
//     slug: "murojaah",
//     name: "Murõja’ah",
//     description: "Strengthen and revise memorized Qur’an with a structured system.",
//     outline: [
//       "Revision planning",
//       "Daily guided reviews",
//       "Correcting weak memorization",
//     ],
//     requirements: [
//       "Must have memorized a portion of Qur’an",
//       "Commitment to consistent review",
//     ],
//     physicalDayPricing: "₦20,000 per term (Day)",
//     physicalBoardingPricing: "₦45,000 per term (Boarding)",
//   },
// ];
