export type Program = {
  slug: string;
  title: string;
  description: string;
  about: string;
  outline: string[];
  requirements: string[];
  fees: {
    days: number;
    hours: number;
    price: {
      usd: number;
      eur: number;
      ngn: number;
    };
  }[];
};

export const programs: Program[] = [
  {
    slug: "quran-with-tajweed",
    title: "Qur’ān with Tajwīd",
    description: "Master proper recitation of the Qur’ān with tajwīd rules.",
    about:
      "This course focuses on the correct articulation of letters, pronunciation rules, and fluency in reciting the Qur’ān.",
    outline: [
      "Introduction to Tajwīd rules",
      "Makharij (points of articulation)",
      "Sifaat (characteristics of letters)",
      "Practical recitation sessions",
    ],
    requirements: [
      "Ability to read Arabic script",
      "Commitment to practice daily",
      "Notebook & pen",
    ],
    fees: [
      {
        days: 3,
        hours: 1,
        price: { usd: 30, eur: 28, ngn: 25000 },
      },
      {
        days: 5,
        hours: 1,
        price: { usd: 50, eur: 46, ngn: 42000 },
      },
    ],
  },
  {
    slug: "hifdh",
    title: "Ḥifdh (Memorization)",
    description: "Step-by-step memorization of the Holy Qur’ān with guidance.",
    about:
      "This program is designed for students who wish to memorize the Qur’ān entirely or partially, with revision and retention strategies.",
    outline: [
      "Daily new lesson (sabaq)",
      "Revision (murāja‘ah)",
      "Monthly assessments",
      "Completion certificates",
    ],
    requirements: [
      "Basic tajwīd knowledge",
      "Commitment to consistency",
      "Parental/guardian support (for children)",
    ],
    fees: [
      {
        days: 5,
        hours: 2,
        price: { usd: 100, eur: 95, ngn: 85000 },
      },
      {
        days: 6,
        hours: 3,
        price: { usd: 140, eur: 132, ngn: 120000 },
      },
    ],
  },
];

