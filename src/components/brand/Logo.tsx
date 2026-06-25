import logo from "@/assets/henri-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`} aria-label="RECOVR">
      <img
        src={logo}
        alt="RECOVR"
        className="h-10 w-auto object-contain md:h-12"
        draggable={false}
      />
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="RECOVR"
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
}
