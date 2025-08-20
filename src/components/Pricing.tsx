// // app/pricing/page.tsx
// "use client";

// import { useState } from "react";

// type Currency = "NGN" | "USD" | "EUR";

// const currencySymbols: Record<Currency, string> = {
//   NGN: "₦",
//   USD: "$",
//   EUR: "€",
// };

// // Base prices (same for all online programs)
// const basePrices = {
//   "30min": { NGN: 10000, USD: 10, EUR: 10 },
//   "1hr": { NGN: 15000, USD: 16, EUR: 16 },
//   "2hr": { NGN: 20000, USD: 24, EUR: 24 },
// };

// const daysMultiplier: Record<number, number> = {
//   1: 1,
//   2: 2,
//   3: 3,
//   5: 5,
// };

// export default function OnlinePricingPage() {
//   const [selectedCurrency, setSelectedCurrency] = useState<Currency>("NGN");
//   const [selectedDays, setSelectedDays] = useState<number>(1);
//   const [selectedDuration, setSelectedDuration] = useState<
//     "30min" | "1hr" | "2hr"
//   >("30min");

//   const calculatedPrice =
//     basePrices[selectedDuration][selectedCurrency] *
//     daysMultiplier[selectedDays];

//   return (
//     <main className="bg-green-50 min-h-screen text-green-900">
//       {/* Hero */}
//       <section className="relative py-16 px-6 text-center bg-gradient-to-r from-green-600 to-green-800 text-white">
//         <h1 className="text-4xl font-bold mb-4">Online Programs Pricing</h1>
//         <p className="max-w-2xl mx-auto text-lg">
//           Flexible plans based on days per week and duration per day. Prices
//           shown in {selectedCurrency}.
//         </p>
//       </section>

//       {/* Currency Selector */}
//       <section className="py-8 px-6 max-w-4xl mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-4">Select Currency</h2>
//         <div className="flex justify-center gap-4">
//           {(["NGN", "USD", "EUR"] as Currency[]).map((cur) => (
//             <button
//               key={cur}
//               onClick={() => setSelectedCurrency(cur)}
//               className={`px-4 py-2 rounded-full font-semibold border transition ${
//                 selectedCurrency === cur
//                   ? "bg-green-700 text-white border-green-700"
//                   : "bg-white text-green-800 border-green-300 hover:bg-green-100"
//               }`}
//             >
//               {currencySymbols[cur]}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Selection Controls */}
//       <section className="py-8 px-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-md p-6">
//           <h3 className="font-semibold mb-2">Days per Week</h3>
//           <div className="flex gap-2 flex-wrap">
//             {[1, 2, 3, 5].map((day) => (
//               <button
//                 key={day}
//                 onClick={() => setSelectedDays(day)}
//                 className={`px-4 py-2 rounded-full border font-medium transition ${
//                   selectedDays === day
//                     ? "bg-green-700 text-white border-green-700"
//                     : "bg-white text-green-800 border-green-300 hover:bg-green-100"
//                 }`}
//               >
//                 {day} day{day > 1 ? "s" : ""}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-md p-6">
//           <h3 className="font-semibold mb-2">Duration per Day</h3>
//           <div className="flex gap-2 flex-wrap">
//             {(["30min", "1hr", "2hr"] as const).map((dur) => (
//               <button
//                 key={dur}
//                 onClick={() => setSelectedDuration(dur)}
//                 className={`px-4 py-2 rounded-full border font-medium transition ${
//                   selectedDuration === dur
//                     ? "bg-green-700 text-white border-green-700"
//                     : "bg-white text-green-800 border-green-300 hover:bg-green-100"
//                 }`}
//               >
//                 {dur === "30min" ? "30 min" : dur === "1hr" ? "1 hr" : "2 hrs"}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Calculated Price */}
//       <section className="py-12 px-6 max-w-4xl mx-auto text-center">
//         <div className="bg-white rounded-2xl shadow-lg p-8">
//           <h3 className="text-2xl font-semibold mb-4">Your Price</h3>
//           <p className="text-green-800 text-3xl font-bold mb-6">
//             {currencySymbols[selectedCurrency]}
//             {calculatedPrice.toLocaleString()}
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
//           >
//             Enroll Now
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Currency = "NGN" | "USD" | "EUR";
type Duration = "30min" | "1hr" | "2hr";

const currencySymbols: Record<Currency, string> = {
  NGN: "₦",
  USD: "$",
  EUR: "€",
};

const basePrices: Record<Duration, Record<Currency, number>> = {
  "30min": { NGN: 5000, USD: 10, EUR: 9 },
  "1hr": { NGN: 8000, USD: 16, EUR: 14 },
  "2hr": { NGN: 12000, USD: 24, EUR: 22 },
};

const daysOptions = [1, 2, 3, 5] as const;
const durationOptions: Duration[] = ["30min", "1hr", "2hr"];

const recommendedPlan = { days: 3, duration: "1hr" as Duration };

const formatPrice = (amount: number, currency: Currency) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);

export default function OnlinePricingPage() {
  const [currency, setCurrency] = useState<Currency>("NGN");
  const [selectedDays, setSelectedDays] = useState<number>(
    recommendedPlan.days
  );
  const [selectedDuration, setSelectedDuration] = useState<Duration>(
    recommendedPlan.duration
  );

  return (
    <main className="bg-green-50 min-h-screen text-green-900 relative">
      {/* Hero */}
      <section className="relative pt-50 py-16 px-6 text-center bg-gradient-to-r from-green-700 to-green-800 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Flexible Online Programs
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Learn Qur’ān your way — choose duration, days per week, and currency.
        </p>
      </section>

      {/* Currency Selector */}
      <section className="py-8 px-6 max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-4">
          {(["NGN", "USD", "EUR"] as Currency[]).map((cur) => (
            <button
              key={cur}
              onClick={() => setCurrency(cur)}
              className={`px-5 py-2 rounded-full font-semibold border transition ${
                currency === cur
                  ? "bg-green-700 text-white border-green-700"
                  : "bg-white text-green-800 border-green-300 hover:bg-green-100"
              }`}
            >
              {currencySymbols[cur]}
            </button>
          ))}
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {daysOptions.flatMap((days) =>
          durationOptions.map((dur) => {
            const price = basePrices[dur][currency] * days;
            const isSelected =
              selectedDays === days && selectedDuration === dur;
            const isRecommended =
              recommendedPlan.days === days && recommendedPlan.duration === dur;

            return (
              <motion.div
                key={`${days}-${dur}`}
                onClick={() => {
                  setSelectedDays(days);
                  setSelectedDuration(dur);
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative bg-white rounded-3xl shadow-lg p-6 cursor-pointer border transition ${
                  isSelected ? "border-green-700 shadow-xl" : "border-green-200"
                }`}
              >
                {isRecommended && (
                  <motion.span
                    className="absolute top-3 right-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    Most Popular
                  </motion.span>
                )}
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {days} day{days > 1 ? "s" : ""} /{" "}
                  {dur === "30min"
                    ? "30 min"
                    : dur === "1hr"
                    ? "1 hr"
                    : "2 hrs"}{" "}
                  per day
                </h3>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${days}-${dur}-${currency}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-3xl font-bold text-green-700 mb-2"
                  >
                    {formatPrice(price, currency)}
                  </motion.p>
                </AnimatePresence>
                <p className="text-green-600 text-sm">
                  Flexible online learning
                </p>
              </motion.div>
            );
          })
        )}
      </section>

      {/* Selected Plan CTA */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          key={`${selectedDays}-${selectedDuration}-${currency}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">Your Selected Plan</h3>
          <p className="text-green-800 text-3xl md:text-4xl font-bold mb-4">
            {formatPrice(
              basePrices[selectedDuration][currency] * selectedDays,
              currency
            )}
          </p>
          <p className="mb-6">
            {selectedDays} day{selectedDays > 1 ? "s" : ""} per week,{" "}
            {selectedDuration === "30min"
              ? "30 min/day"
              : selectedDuration === "1hr"
              ? "1 hr/day"
              : "2 hrs/day"}
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-600 transition text-lg font-semibold"
          >
            Enroll Now
          </a>
        </motion.div>
      </section>
    </main>
  );
}