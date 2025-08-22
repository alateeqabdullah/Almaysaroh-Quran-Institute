// import { HistoryIcon } from "lucide-react";
// import Description from "../Description";
// import H3 from "../H3";

// export default function History() {
//   return (
//     <section className="py-16 px-6 max-w-6xl mx-auto">
//       <div className="flex-shrink-0">
//         <div className="bg-green-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
//           <HistoryIcon size={36} className="text-green-700" />
//         </div>
//       </div>
//       <H3 className="text-5xl md:text-5xl text-green-800 mb-6 font-bold ">
//         Our History
//       </H3>
//       <Description className="text-gray-700 text-center font-semibold text-lg md:text-xl mb-4">
//         Founded in 2022, Al-Maysaroh Quran Institute has grown from a small
//         community initiative into a respected educational institution. Over the
//         years, we have successfully trained hundreds of students in Qur’ān
//         recitation, memorization, and Islamic studies.
//       </Description>
//       <Description className="text-gray-700 text-center font-semibold text-lg md:text-xl">
//         Our programs have been recognized for excellence in teaching, curriculum
//         structure, and fostering spiritual growth in both online and physical
//         classrooms.
//       </Description>
//     </section>
//   );
// }

// components/Mission.tsx
import { History } from "lucide-react";
import H3 from "../H3";
import Description from "../Description";

export default function Mission() {
  return (
    <section className="py-16 px-8 max-w-6xl rounded-2xl bg-primary mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-shrink-0">
          <div className="bg-green-50 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
            <History size={36} className="text-green-700" />
          </div>
        </div>
        <div>
          <H3 className="text-4xl md:text-5xl font-bold text-surface mb-6">
            Our History
          </H3>
          <Description className="text-gray-200 text-center font-medium text-lg md:text-xl mb-4">
            Founded in 2022, Al-Maysaroh Quran Institute has grown from a small
            community initiative into a respected educational institution. Over
            the years, we have successfully trained hundreds of students in
            Qur’ān recitation, memorization, and Islamic studies.
          </Description>
          <Description className="text-gray-200 text-center font-medium text-lg md:text-xl">
            Our programs have been recognized for excellence in teaching,
            curriculum structure, and fostering spiritual growth in both online
            and physical classrooms.
          </Description>
        </div>
      </div>
    </section>
  );
}
