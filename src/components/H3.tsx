import { cn } from "@/lib/utils";

interface H3Props {
    children: React.ReactNode;
    className?: string
}

export default function H3({ children, className }: H3Props) {
  return (
    <div className={cn("text-3xl md:text-4xl text-yellow-500  ", className )}>
     {children}
    </div>
  );
}
