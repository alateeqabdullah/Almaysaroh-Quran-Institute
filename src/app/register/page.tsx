"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Qur’an School Registration",
//   description:
//     "Register for our Qur’an School (Online & Physical). Choose Qirõ’ah, Hifdh, Tajweed, Qirõ’aat, Murõja’ah, or Islamic Studies.",
//   openGraph: {
//     title: "Qur’an School Registration",
//     description:
//       "Register for our Qur’an School (Online & Physical). Choose Qirõ’ah, Hifdh, Tajweed, Qirõ’aat, Murõja’ah, or Islamic Studies.",
//     type: "website",
//     url: "/register",
//   },
// };

// const TALLY_FORM_URL = process.env.NEXT_PUBLIC_TALLY_FORM_URL;
const TALLY_FORM_URL = "https://tally.so/r/3jRMva";

export default function RegisterPage() {
  const [iframeHeight, setIframeHeight] = useState(1200);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Add helpful embed params: hide Tally’s title & use transparent background
  const src = useMemo(() => {
    const url = new URL(TALLY_FORM_URL);
    url.searchParams.set("hideTitle", "1");
    url.searchParams.set("transparentBackground", "1");
    return url.toString();
  }, []);

  // Auto-resize based on postMessage from Tally
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (typeof event.data !== "object" || !event.data) return;
      const { type, height } = event.data as { type?: string; height?: number };
      if (type === "tally:height" && typeof height === "number") {
        setIframeHeight(Math.max(height, 900));
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <section className="mx-auto max-w-5xl px-4 py-50">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            {"  Almaysaroh Qur'an Institute Registration Form"}
          </h1>
          <p className="mt-2 text-gray-600">
            One form for <span className="font-medium">Online</span> and{" "}
            <span className="font-medium">Physical</span> students. Choose from
            Qirõ’ah, Hifdh (Memorization), Tajweed, Qirõ’aat, Murõja’ah, and
            Islamic Studies.
          </p>
          <div className="mt-4">
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100"
            >
              Open form in a new tab
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M14 3h7v7" />
                <path d="M10 14 21 3" />
                <path d="M21 14v7h-7" />
                <path d="M3 10 14 21" />
              </svg>
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-2 shadow-sm">
          <div className="relative">
            <iframe
              ref={iframeRef}
              src={src}
              title="Qur’an School Registration Form"
              width="100%"
              style={{ height: `${iframeHeight}px` }}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              allow="clipboard-write"
              className="w-full rounded-xl"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
          <h2 className="mb-2 text-base font-semibold">Registration Tips</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>
              For <span className="font-medium">Online</span>: select your
              program (Qirõ’ah / Hifdh / Tajweed), class type, and time zone.
            </li>
            <li>
              For <span className="font-medium">Physical</span>: select from
              Qirõ’ah, Tajweed, Hifdh, Qirõ’aat, Murõja’ah, or Islamic Studies
              and provide your address.
            </li>
            <li>
              After submission, you’ll receive a confirmation message. We’ll
              contact you with payment details and your schedule.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
