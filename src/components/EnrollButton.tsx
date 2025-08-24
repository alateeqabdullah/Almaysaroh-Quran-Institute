import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface EnrollButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler
}

export default function EnrollButton({
  onClick,
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
      onClick={onClick}   
      asChild
    >
      <Link href={"/register"}>{children}</Link>
    </Button>
  );
}
