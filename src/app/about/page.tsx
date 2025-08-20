import AboutCard from "@/components/about/AboutCard";
import AboutIntro from "@/components/about/AboutIntro";
import History from "@/components/about/History";
import Description from "@/components/Description";
import H2 from "@/components/H2";
import H3 from "@/components/H3";
import Span from "@/components/Span";

// components/AboutIntro.tsx
export default function About() {
  return (
    <main className=" pt-50  px-6 text-center ">
      <H2 className=" text-green-800 ">
        About <Span>Us</Span>
        <H3> Al-Maysaroh Quran Institute</H3>
      </H2>
      <Description className="pb-16 font-semibold ">
        <AboutIntro />
      </Description>
      <AboutCard />
      <History />
    </main>
  );
}
