export function RecDot({ className = "size-2.5" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 animate-rec rounded-full bg-rec ${className}`}
    />
  );
}
