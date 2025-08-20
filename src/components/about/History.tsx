import Description from "../Description";
import H3 from "../H3";

export default function History() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <H3 className="text-5xl md:text-5xl text-green-800 mb-6 font-bold ">
        Our History
      </H3>
      <Description className="text-gray-700 text-center font-semibold text-lg md:text-xl mb-4">
        Founded in [Year], Al-Maysaroh Quran Institute has grown from a small
        community initiative into a respected educational institution. Over the
        years, we have successfully trained hundreds of students in Qur’ān
        recitation, memorization, and Islamic studies.
      </Description>
      <Description className="text-gray-700 text-center font-semibold text-lg md:text-xl">
        Our programs have been recognized for excellence in teaching, curriculum
        structure, and fostering spiritual growth in both online and physical
        classrooms.
      </Description>
    </section>
  );
}
