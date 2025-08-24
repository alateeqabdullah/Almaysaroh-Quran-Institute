


import ProgramsCard from "@/components/programs/ProgramsCard";
import { sleep } from "@/lib/utils";

export default async function ProgramsPage() {
  await sleep(2000)
  return (
    <section className="min-h-screen text-center py-4 pb-16 ">
      <ProgramsCard />
    </section>
  );
}





