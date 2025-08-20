"use client";

import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/2348185300293"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-50 bg-green-600 text-white hover:bg-green-700 transition-all"
      style={{
        animation: "pulse 1s ease-in-out  infinite",
      }}
    >
      <PhoneCallIcon size={28} /> 
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
          }
        `}
      </style>
    </Link>
  );
}
