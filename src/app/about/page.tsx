import AboutIntro from "@/components/about/AboutIntro";
import History from "@/components/about/History";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import Vision from "@/components/about/Vision";
import Description from "@/components/Description";
import H2 from "@/components/H2";
import H3 from "@/components/H3";
import Span from "@/components/Span";

// components/AboutIntro.tsx
export default async function About() {
  
  return (
    <main className="px-6 text-center  ">
      <H2 className=" text-green-800 ">
        About <Span>Us</Span>
        <H3> Al-Maysaroh Quran Institute</H3>
      </H2>
      <Description className="pb-16 font-semibold ">
        <AboutIntro />
      </Description>
      <History />
      <Mission />
      <Vision/>
      <Values/>
    </main>
  );
}
