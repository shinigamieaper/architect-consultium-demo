export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 52" className={className} aria-hidden="true">
      <path
        d="M24 2 44 13v26L24 50 4 39V13z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="17"
        letterSpacing="0.5"
        fill="currentColor"
      >
        OA
      </text>
    </svg>
  );
}

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const main = tone === "light" ? "text-ivory" : "text-navy";
  return (
    <span className="flex items-center gap-3">
      <Monogram className={`h-9 w-8 shrink-0 text-gold`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] ${main}`}>
          Olabanji Afolabi
        </span>
        <span
          className={`eyebrow mt-1 ${tone === "light" ? "text-ivory/55" : "text-muted"}`}
        >
          The Leadership Architect
        </span>
      </span>
    </span>
  );
}
