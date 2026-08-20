import Reveal from "./Reveal";

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
    <section className="bg-navy text-ivory">
      <div className="shell py-[clamp(3rem,6vw,5.5rem)]">
        <Reveal>
          <p className="sect-title text-gold">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-[18ch] text-[clamp(2.1rem,1.4rem+2.6vw,3.5rem)]">
            {title}
            {italic ? (
              <>
                {" "}
                <em className="italic text-gold">{italic}</em>
              </>
            ) : null}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={160}>
            <p className="mt-6 max-w-[56ch] text-ivory/75">{lede}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
