import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface EnrollButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function EnrollButton({
  children,
  className,
}: EnrollButtonProps) {
  return (
    <Button
      size="lg"
      className={cn(
        "bg-text-sec  text-white px-8 w-full py-6 text-xl sm:w-auto",
        className
      )}
      asChild
    >
      <Link href={"/about"}>{children}</Link>
    </Button>
  );
}
