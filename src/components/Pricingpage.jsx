"use client";

import { useMemo, useState } from "react";
import { getProgramBySlug } from "@/data/programs";
import {
  ONLINE_RATE_PER_SESSION_NGN,
  DEFAULT_WEEKS_PER_MONTH,
} from "@/config/pricing";
import { notFound } from "next/navigation";
import Link from "next/link";

const dayModes = ["online", "day", "boarding"];

export default function PricingPage({ slug }) {
  const program = getProgramBySlug(slug);
  const [mode, setMode] = useState("online");
  const [daysPerWeek, setDaysPerWeek] = useState(3);
  const [minutes, setMinutes] = useState(30);

  const isMurajaah = program?.slug === "murojaah";

  const monthlyOnlinePrice = useMemo(() => {
    const perSession = ONLINE_RATE_PER_SESSION_NGN[minutes];
    return daysPerWeek * DEFAULT_WEEKS_PER_MONTH * perSession;
  }, [minutes, daysPerWeek]);

  if (!program) {
    return notFound();
  }

  return (
    <section className="min-h-screen bg-bg pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-900">
          Pricing — {program.name}
        </h1>

        {/* Mode Select */}
        <div className="mt-6 flex flex-wrap gap-3">
          {dayModes.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 rounded-xl border transition
              ${
                mode === m
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-emerald-700 border-emerald-200 hover:border-emerald-400"
              }`}
            >
              {m === "online"
                ? "Online"
                : m === "day"
                ? "Physical (Day)"
                : "Physical (Boarding)"}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="mt-6">
          {/* ONLINE CALCULATOR */}
          {mode === "online" && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
              <h2 className="text-xl font-semibold text-emerald-800">
                Online Pricing Calculator
              </h2>
              <p className="text-gray-600 mt-1">{program.online.note}</p>

              <div className="mt-5 grid sm:grid-cols-3 gap-4">
                <label className="block">
                  <span className="text-sm text-emerald-900">
                    Days per week
                  </span>
                  <select
                    className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 bg-white"
                    value={daysPerWeek}
                    onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                      <option key={d} value={d}>
                        {d} day{d > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm text-emerald-900">
                    Minutes per session
                  </span>
                  <select
                    className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 bg-white"
                    value={minutes}
                    onChange={(e) => setMinutes(Number(e.target.value))}
                  >
                    {[30, 45, 60].map((m) => (
                      <option key={m} value={m}>
                        {m} minutes
                      </option>
                    ))}
                  </select>
                </label>

                <div className="flex items-end">
                  <div className="w-full rounded-lg border border-emerald-200 p-3 bg-emerald-50/70">
                    <div className="text-sm text-emerald-900">
                      Estimated monthly (₦)
                    </div>
                    <div className="text-2xl font-bold text-emerald-700">
                      {monthlyOnlinePrice.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {daysPerWeek} day(s) / week × {DEFAULT_WEEKS_PER_MONTH}{" "}
                      weeks
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href="https://tally.so/r/nr4X8N"
                  className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700"
                >
                  Enroll / Request Schedule
                </Link>
              </div>
            </div>
          )}

          {mode === "day" && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
              <h2 className="text-xl font-semibold text-emerald-800">
                Physical (Day) Fees
              </h2>

              <ul className="mt-4 space-y-2 text-gray-700">
                {program.physical.partTimeDay && (
                  <li className="flex justify-between border-b border-emerald-50 pb-2">
                    <span>Part-time (Day)</span>
                    <span className="font-semibold text-emerald-700">
                      {program.physical.partTimeDays}
                    </span>
                    <span className="font-semibold text-emerald-700">
                      {program.physical.partTimeDay}
                    </span>
                  </li>
                )}
                {program.physical.fullTimeDay && (
                  <li className="flex justify-between pt-2">
                    <span>Full-time (Day)</span>
                    <span className="font-semibold text-emerald-700">
                      {program.physical.fullTimeDays}
                    </span>
                    <span className="font-semibold text-emerald-700">
                      {program.physical.fullTimeDay}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          )}

          {mode === "boarding" && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
              <h2 className="text-xl font-semibold text-emerald-800">
                Physical (Boarding) Fees
              </h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                {program.physical.partTimeBoarding && (
                  <li className="flex justify-between border-b border-emerald-50 pb-2">
                    <span>Part-time (Boarding)</span>
                    <span className="font-semibold text-emerald-700">
                      {program.physical.partTimeBoardings}
                    </span>
                    <span className="font-semibold text-emerald-700">
                      {program.physical.partTimeBoarding}
                    </span>
                  </li>
                )}
                {program.physical.fullTimeBoarding && (
                  <li className="flex justify-between  border-b border-emerald-50 py-2">
                    <span>Full-time (Boarding)</span>
                    <span className="font-semibold text-emerald-700">
                      {program.physical.fullTimeBoardings}
                    </span>
                    <span className="font-semibold text-emerald-700">
                      {program.physical.fullTimeBoarding}
                    </span>
                  </li>
                )}
                {program.physical.feeding && (
                  <li className="flex justify-between pt-2">
                    <span>Feeding (Boarding)</span>
                    <span className="font-semibold text-emerald-700">
                      Part-time - <br /> {program.physical.feeding.partTime}{" "}
                    </span>{" "}
                    <span className="font-semibold text-emerald-700 ">
                      {" "}
                      Full-time - <br /> {program.physical.feeding.fullTime}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Murõja’ah has no boarding block */}
          {/* {mode === "boarding" && isMurajaah && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
              <p className="text-gray-700">
                Boarding pricing is not applicable for Murõja’ah. Please choose{" "}
                <b>Online</b> or <b>Physical (Day)</b>.
              </p>
            </div>
          )}  */}
        </div>

        <div className="mt-8">
          <a
            href="https://tally.so/r/wba7j7"
            className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
