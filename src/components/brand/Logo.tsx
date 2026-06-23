export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-extrabold tracking-[-0.04em] text-[1.35rem] leading-none ${className}`}
      aria-label="RECOVR"
    >
      REC
      <span className="relative inline-block align-baseline">
        <span className="inline-block size-[0.55em] rounded-full border-[0.12em] border-current translate-y-[0.05em]" aria-hidden />
      </span>
      VR
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.25" />
      <path
        d="M18 38c0-10 7-17 16-17 6 0 11 3 13 9-4-3-9-3-13 0-5 4-6 11-2 16-7 0-14-3-14-8z"
        fill="currentColor"
      />
      <path
        d="M44 26c2 6-1 13-7 16-2 1-4 1-6 1 4-3 6-7 6-12 0-3-1-6-2-8 4 0 7 1 9 3z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}
