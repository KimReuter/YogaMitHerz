export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-iris-golden">
      <div className="flex flex-col items-center gap-4">
        <span className="font-[var(--font-cookie)] text-3xl text-iris-terracotta">
          Yoga mit Herz
        </span>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-iris-terracotta animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
