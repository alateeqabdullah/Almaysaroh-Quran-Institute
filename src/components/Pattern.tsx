export default function Pattern() {
  return (
    <div>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/islamic-pattern.svg')] bg-center bg-no-repeat bg-cover" />

      {/* Soft geometric shapes / accents */}
      <div className="absolute top-40  -right-50 w-96 h-96 bg-green-200 rounded-full opacity-30 -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full opacity-20 translate-x-32 translate-y-32" />
    </div>
  );
}
