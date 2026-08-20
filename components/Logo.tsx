export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 52" className={className} aria-hidden="true">
      <path
        d="M24 2 44 13v26L24 50 4 39V13z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path d="M24 14v24M14 20v12M34 20v12" stroke="currentColor" strokeWidth="1.4" opacity=".55" />
    </svg>
  );
}

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const main = tone === "light" ? "text-ivory" : "text-ink";
  const sub = tone === "light" ? "text-ivory/50" : "text-muted";
  return (
    <span className="flex items-center gap-3">
      <Monogram className="h-8 w-7 shrink-0 text-gold" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] ${main}`}>
          Olabanji Afolabi
        </span>
        <span className={`eyebrow mt-1.5 ${sub}`}>The Leadership Architect</span>
      </span>
    </span>
  );
}
