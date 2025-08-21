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

// export const programs: Program[] = [
//   {
//     slug: "quran-with-tajweed",
//     title: "Qur’ān with Tajwīd",
//     description: "Master proper recitation of the Qur’ān with tajwīd rules.",
//     about:
//       "This course focuses on the correct articulation of letters, pronunciation rules, and fluency in reciting the Qur’ān.",
//     outline: [
//       "Introduction to Tajwīd rules",
//       "Makharij (points of articulation)",
//       "Sifaat (characteristics of letters)",
//       "Practical recitation sessions",
//     ],
//     requirements: [
//       "Ability to read Arabic script",
//       "Commitment to practice daily",
//       "Notebook & pen",
//     ],
//     fees: [
//       {
//         days: 3,
//         hours: 1,
//         price: { usd: 30, eur: 28, ngn: 25000 },
//       },
//       {
//         days: 5,
//         hours: 1,
//         price: { usd: 50, eur: 46, ngn: 42000 },
//       },
//     ],
//   },
//   {
//     slug: "hifdh",
//     title: "Ḥifdh (Memorization)",
//     description: "Step-by-step memorization of the Holy Qur’ān with guidance.",
//     about:
//       "This program is designed for students who wish to memorize the Qur’ān entirely or partially, with revision and retention strategies.",
//     outline: [
//       "Daily new lesson (sabaq)",
//       "Revision (murāja‘ah)",
//       "Monthly assessments",
//       "Completion certificates",
//     ],
//     requirements: [
//       "Basic tajwīd knowledge",
//       "Commitment to consistency",
//       "Parental/guardian support (for children)",
//     ],
//     fees: [
//       {
//         days: 5,
//         hours: 2,
//         price: { usd: 100, eur: 95, ngn: 85000 },
//       },
//       {
//         days: 6,
//         hours: 3,
//         price: { usd: 140, eur: 132, ngn: 120000 },
//       },
//     ],
//   },
// ];



// /data/programs.ts
export type Feeding = { partTime: string; fullTime: string };
export type Physical = {
  partTimeDay?: string;
  fullTimeDay?: string;
  partTimeBoarding?: string;
  fullTimeBoarding?: string;
  feeding?: Feeding | null;
  // Murõja’ah special:
  partTime?: string;
  fullTime?: string;
};
export type Program = {
  slug: string;
  name: string;
  description: string;
  online: { note: string };
  physical: Physical;
};

export const programs: Program[] = [
  {
    slug: "qiraah",
    name: "Qirõ'ah",
    description:
      "Focuses on mastering the correct recitation of the Qur’an with emphasis on phonetics and articulation. Students will learn the proper way to pronounce each letter and word.",
    online: {
      note:
        "Flexible — choose number of days per week or month, and class duration (30, 45, or 60 minutes). Pricing adjusts accordingly.",
    },
    physical: {
      partTimeDay: "₦3,000 (Weekend: Sat–Sun, 9am–4pm)",
      fullTimeDay: "₦5,000 (Weekend 9am–4pm + Mon–Wed 4pm–6:30pm)",
      partTimeBoarding: "₦10,000 (Fri 4pm – Sun 4pm)",
      fullTimeBoarding: "₦20,000 (Everyday boarding)",
      feeding: { partTime: "₦16,000", fullTime: "₦60,000" },
    },
  },
  {
    slug: "tajweed",
    name: "Tajweed",
    description:
      "Dedicated to learning the rules of Tajweed to ensure proper Qur’anic recitation with precision and beauty. Includes practical recitations and corrections.",
    online: { note: "Flexible — pay per duration and days selected." },
    physical: {
      partTimeDay: "₦3,000",
      fullTimeDay: "₦5,000",
      partTimeBoarding: "₦10,000",
      fullTimeBoarding: "₦20,000",
      feeding: { partTime: "₦16,000", fullTime: "₦60,000" },
    },
  },
  {
    slug: "tahfeedh",
    name: "Tahfeedh",
    description:
      "Designed for students who want to memorize the Qur’an. Emphasis on consistency, revision, and proper memorization techniques.",
    online: { note: "Flexible — structured per duration and number of days." },
    physical: {
      partTimeDay: "₦3,000",
      fullTimeDay: "₅,000",
      partTimeBoarding: "₁0,000",
      fullTimeBoarding: "ₒ20,000",
      feeding: { partTime: "₦16,000", fullTime: "₦60,000" },
    },
  },
  {
    slug: "qiroaat",
    name: "Qirõ’aat",
    description:
      "Specialized program for learning the ten recognized modes of Qur’anic recitation (Qirõ’aat). Guided practice and application.",
    online: { note: "Flexible — structured pricing per mode and duration." },
    physical: {
      partTimeDay: "₦3,000",
      fullTimeDay: "₦5,000",
      partTimeBoarding: "₦10,000",
      fullTimeBoarding: "₦20,000",
      feeding: { partTime: "₦16,000", fullTime: "₦60,000" },
    },
  },
  {
    slug: "murojaah",
    name: "Murõja’ah",
    description:
      "Revision program for those who have memorized portions of the Qur’an — strengthens retention, fluency, and accuracy.",
    online: { note: "Flexible — available per session or monthly." },
    physical: {
      // Special: no feeding, flat rates
      partTime: "₦5,000",
      fullTime: "₦10,000",
      feeding: null,
    },
  },
  {
    slug: "intensive-taleem",
    name: "Intensive Ta’leem",
    description:
      "An all-in-one intensive program: recitation, Tajweed, memorization, and Islamic studies in a structured curriculum.",
    online: { note: "Flexible — pay based on selected subjects and duration." },
    physical: {
      partTimeDay: "₦4,000",
      fullTimeDay: "₦7,000",
      partTimeBoarding: "₦12,000",
      fullTimeBoarding: "₦25,000",
      feeding: { partTime: "₦18,000", fullTime: "₦65,000" },
    },
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}