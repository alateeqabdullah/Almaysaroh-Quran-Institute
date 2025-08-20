"use client";
import TallyDialog from "@/components/Teachers";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Donate() {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-2xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Support Quranic Education</h1>
      <p className="mb-6">
        100 % of donations fund scholarships and teacher training.
      </p>
      <Button size="lg" onClick={() => setOpen(true)}>
        Donate Now
      </Button>
      <TallyDialog open={open} setOpen={setOpen} formId="donateFormId" />
    </div>
  );
}
