import Reveal from "./Reveal";

/** The small gold label and hairline that opens every section. */
export default function SectionHead({
  label,
  tone = "light",
}: {
  label: string;
  tone?: "light" | "dark";
}) {
  const rule = tone === "dark" ? "text-ivory/45" : "text-muted";
  const mark = tone === "dark" ? "text-gold-2" : "text-gold-deep";
  return (
    <Reveal>
      <div className={`flex items-center gap-4 ${rule}`}>
        <span className={`eyebrow shrink-0 ${mark}`}>{label}</span>
        <span className="h-px flex-1 bg-current opacity-25" />
      </div>
    </Reveal>
  );
}
