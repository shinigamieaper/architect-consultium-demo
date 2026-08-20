import Stage from "./Stage";
import Reveal from "./Reveal";

/** The same stage as the home page, opened at a shorter height. */
export default function PageHero({
  eyebrow,
  title,
  italic,
  lede,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lede?: string;
}) {
  return (
    <Stage minH="min-h-[clamp(340px,54vh,520px)]">
      <div className="relative isolate flex flex-1 flex-col justify-end px-[clamp(1.25rem,4vw,3.25rem)] pb-[clamp(1.75rem,4vh,3rem)] pt-[clamp(6.5rem,15vh,9rem)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(193,156,77,.28) 0%, transparent 66%)",
          }}
        />
        <Reveal>
          <p className="eyebrow text-gold-2">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-[15ch] font-display text-[clamp(2.4rem,1.6rem+3.2vw,5rem)] leading-[0.95] text-ivory">
            {title}
            {italic ? (
              <>
                {" "}
                <em className="italic text-gold-2">{italic}</em>
              </>
            ) : null}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={160}>
            <p className="mt-6 max-w-[54ch] text-[0.9375rem] text-ivory/65">
              {lede}
            </p>
          </Reveal>
        ) : null}
      </div>
    </Stage>
  );
}
