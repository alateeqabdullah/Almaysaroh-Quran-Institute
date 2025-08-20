"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import H2 from "./H2";
import Description from "./Description";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What age groups can enroll in Al-Maysaroh?",
    answer:
      "We welcome students of all ages, from children to adults, for both online and physical classes.",
  },
  {
    question: "Do you offer both online and in-person classes?",
    answer:
      "Yes! Our programs are available online for flexibility, as well as on-site at our institute.",
  },
  {
    question: "What programs do you offer?",
    answer:
      "We offer Qirā’ah, Tahfeedh, Tajweed, Qirā’aat, Muraja’ah, and General Madrasah programs.",
  },
  {
    question: "How do I enroll?",
    answer:
      "You can enroll via our online registration form or visit the institute to register in person.",
  },
  {
    question: "Do students receive certificates?",
    answer:
      "Yes, students completing our programs receive recognized certificates from Al-Maysaroh Quran Institute.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-green-50 text-green-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <H2
     className=" text-green-800 "
        >
          Frequently Asked Questions
        </H2>
        <Description className=" mb-12">
          Find answers to common questions about our programs, registration, and
          learning methods.
        </Description>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-green-800">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-green-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
