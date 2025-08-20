// import CourseFilter from "@/components/CourseFilter";
import CTA from "@/components/Cta";
import WhyAlmaysaroh from "@/components/Features";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Teachers from "@/components/Teachers";
import Events from "@/components/Events";
import FAQSection from "@/components/Faqs";
import ContactSection from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main >
      <Hero />
      <About />
      <WhyAlmaysaroh />
      <Programs />
      <Teachers />
      <Testimonials />
      <FAQSection />
      <Events />
      <CTA />
      <ContactSection />
    </main>
  );
}

// "use client";
// import { useEffect } from "react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";

// export default function TallyDialog({
//   open,
//   setOpen,
//   formId,
// }: {
//   open: boolean;
//   setOpen: (o: boolean) => void;
//   formId: string;
// }) {
//   useEffect(() => {
//     const s = document.createElement("script");
//     s.src = "https://tally.so/widgets/embed.js";
//     s.async = true;
//     document.body.appendChild(s);
//     return () => s.remove();
//   }, []);

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent className="max-w-2xl p-0">
//         <iframe
//           data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
//           width="100%"
//           height="600"
//           frameBorder={0}
//         />
//       </DialogContent>
//     </Dialog>
//   );
// }
