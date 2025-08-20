interface SpanProps {
  children: React.ReactNode;
  className?: string;
}

export default function Span({ children }: SpanProps) {
  return <span className="text-green-500">{children}</span>;
}
