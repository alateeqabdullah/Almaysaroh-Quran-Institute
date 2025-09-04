import { BookOpen } from "lucide-react";

type Events = {
  title: string;
  date: string;
  description: string;
};

export type Eventss = {
  slug: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  desc: string;
  mode: string;
  duration: string;
  cta: string;
  formLink: string;
  details: {
    about: string;
    learn: string[];
    highlights: string[];
    schedule: string[];
    fees: string;
  };
  availability: boolean;
};

export const events: Events[] = [
  {
    title: "Holiday Tahfeedh camping Program",
    date: "August 2 - September 8, 2025",
    description:
      "Intensive memorization sessions during Summer Holiday for all age groups.",
  },
  {
    title: "Khatmah Ceremony",
    date: "September 30, 2025",
    description:
      "Celebrate a student completing his Qur’an memorization journey.",
  },
  {
    title: "Tajweed Summer Camp",
    date: "June 10 - June 25, 2026",
    description:
      "Improve recitation skills with focused Tajweed sessions for children and adults.",
  },
];

// lib/events.ts
export const eventss: Eventss[] = [
  {
    slug: "nurul-bayan",
    icon: BookOpen,

    title: "Qur’ān Reading Mastery",
    subtitle: "Nūrul-Bayān Method",
    desc: "Build confidence, clarity, and fluency in Qur’ān reading step by step — from letters to full words.",
    duration: "4 Months",
    mode: "Online (Meet + WhatsApp)",
    cta: "Register Now",
    formLink: "https://tally.so/r/mO6gRk",
    details: {
      about:
        "This programme is designed to help learners build confidence, clarity, and fluency in reading the Noble Qur’ān...",
      learn: [
        "Correct pronunciation of Arabic letters and vowels",
        "Smooth connection of letters into words",
        "Step-by-step reading practice",
        "Application of basic Tajwīd rules",
        "Confidence to read directly from the Qur’ān",
      ],
      highlights: [
        "Duration: 4 Months",
        "Mode: 100% Online",
        "Class Size: Group learning with interaction",
        "Support: Voice note practice & feedback",
        "Certification: Almaysaroh Qur’ān Institute",
      ],
      schedule: [
        "2-3 classes per week",
        "Each session: 1 hour",
        "Weekly practice tasks with feedback",
      ],
      fees: "Affordable, with Paystack, bank transfer or WhatsApp arrangement",
    },
    availability: true,
  },
  {
    slug: "tajweed01",
    icon: BookOpen,
    title: "Beginner Tajweed Course",
    subtitle: "Improve fluency & precision",
    desc: "Revise Tajwīd rules, correct common mistakes, and gain confidence to recite with clarity.",
    duration: "6 Weeks",
    mode: "Online (Meet + WhatsApp)",
    cta: "Join the Class",
    formLink: "https://tally.so/r/mO6gRk",

    details: {
      about:
        "A focused short programme for learners who already read Qur’ān but need to polish their Tajwīd...",
      learn: [
        "Review of major Tajwīd rules",
        "Correction of common mistakes",
        "Practical recitation exercises",
      ],
      highlights: [
        "Duration: 6 Weeks",
        "Mode: Online",
        "Certificate available",
      ],
      schedule: ["Twice a week", "1 hour per session"],
      fees: "Affordable short programme",
    },
    availability: false,
  },
  {
    slug: "tajweed02",
    icon: BookOpen,
    title: "Advanced Tajweed Course",
    subtitle: "Improve fluency & precision",
    desc: "Revise Tajwīd rules, correct common mistakes, and gain confidence to recite with clarity.",
    duration: "6 Weeks",
    mode: "Online (Meet + WhatsApp)",
    cta: "Join the Class",
    formLink: "https://tally.so/r/mO6gRk",

    details: {
      about:
        "A focused short programme for learners who already read Qur’ān but need to polish their Tajwīd...",
      learn: [
        "Review of major Tajwīd rules",
        "Correction of common mistakes",
        "Practical recitation exercises",
      ],
      highlights: [
        "Duration: 6 Weeks",
        "Mode: Online",
        "Certificate available",
      ],
      schedule: ["Twice a week", "1 hour per session"],
      fees: "Affordable short programme",
    },
    availability: false,
  },
  {
    slug: "ramadan-special",
    icon: BookOpen,

    title: "Ramadan Qur’ān Bootcamp",
    subtitle: "Seasonal Programme",
    desc: "Special short-term course designed to prepare your recitation and connection with the Qur’ān for Ramadan.",
    duration: "1 Month",
    mode: "Online (Meet + WhatsApp)",
    cta: "Enroll Now",
    formLink: "https://tally.so/r/mO6gRk",

    details: {
      about:
        "This bootcamp helps learners prepare spiritually and practically for Ramadan with improved Qur’ān recitation...",
      learn: [
        "Daily guided recitation practice",
        "Correction of fluency issues",
        "Strengthening spiritual connection",
      ],
      highlights: [
        "Duration: 1 Month",
        "Extra practice & reminders",
        "Flexible timings",
      ],
      schedule: ["Daily short sessions", "Optional group practice"],
      fees: "Special seasonal discount",
    },
    availability: false,
  },
];
