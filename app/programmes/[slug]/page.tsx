import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Stage from "@/components/Stage";
import Arrow from "@/components/Arrow";
import { plans, programmes } from "@/lib/content";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prog = programmes.find((p) => p.slug === slug);
  if (!prog) notFound();

  const others = programmes.filter((p) => p.slug !== slug);
  // the private track is quoted directly, so the membership plans do not apply
  const showPlans = slug !== "one-to-one-mentorship";

  return (
    <>
      <Nav />
      <main>
        <Stage minH="min-h-[clamp(420px,64vh,640px)]">
          <div className="grid flex-1 items-center gap-10 px-[clamp(1.25rem,4vw,3.25rem)] pb-[clamp(2rem,4vw,3.5rem)] pt-[clamp(6.5rem,15vh,9rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="eyebrow text-gold-2">{prog.format}</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 font-display text-[clamp(2.4rem,1.6rem+3.2vw,4.5rem)] leading-[0.98] text-ivory">
                  {prog.title}
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 font-display text-[1.2rem] italic text-gold-2">
                  {prog.who}
                </p>
                <p className="mt-4 max-w-[52ch] text-ivory/70">{prog.blurb}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#join"
                    className="pill bg-gold px-7 py-3.5 font-medium text-navy hover:bg-gold-2"
                  >
                    Join to start
                  </Link>
                  <Link
                    href="/library"
                    className="pill border border-white/20 px-7 py-3.5 text-ivory hover:border-white/45 hover:bg-white/5"
                  >
                    Watch the free session
                    <Arrow />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="panel relative aspect-4/3 w-full">
                <Image
                  src={prog.img}
                  alt={prog.alt}
                  fill
                  priority
                  sizes="(min-width:1024px) 44vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,23,42,0.55),rgba(18,23,42,0))]" />
              </div>
            </Reveal>
          </div>
        </Stage>

        {/* sessions */}
        <section className="section-y bg-ivory">
          <div className="shell">
            <SectionHead label="The sessions" />
            <ul className="mt-10 border-t border-ink/12">
              {prog.lessons.map((l, i) => (
                <Reveal key={l.n} delay={i * 60}>
                  <li className="flex items-center justify-between gap-4 border-b border-ink/12 py-5">
                    <span className="flex min-w-0 items-baseline gap-5">
                      <span className="font-display text-[1.1rem] text-muted">
                        {l.n}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate">{l.title}</span>
                        <span className="text-[0.75rem] text-muted">
                          {l.len}
                          {l.free ? " · Free to watch" : ""}
                        </span>
                      </span>
                    </span>
                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 text-[0.6875rem] uppercase tracking-wider ${
                        l.free
                          ? "border-gold-deep/40 text-gold-deep"
                          : "border-ink/15 text-muted"
                      }`}
                    >
                      {l.free ? "Open" : "Members"}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* plans */}
        {showPlans ? (
        <section className="section-y bg-ivory-2">
          <div className="shell">
            <SectionHead label="What it costs" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {plans.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <div
                    className={`panel flex h-full flex-col gap-2 border p-6 ${
                      p.best ? "border-gold bg-ivory" : "border-ink/15"
                    }`}
                  >
                    <span className="eyebrow text-muted">{p.name}</span>
                    <span className="font-display text-[2.1rem] leading-none">
                      {p.price}
                    </span>
                    <span className="mt-2 text-[0.9375rem] text-body">
                      {p.note}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-[0.8125rem] text-muted">
              Cards accepted worldwide. Access opens the moment the payment
              clears and closes when the term ends.
            </p>
          </div>
        </section>
        ) : (
        <section className="section-y bg-ivory-2">
          <div className="shell">
            <SectionHead label="What it costs" />
            <p className="mt-10 max-w-[54ch] font-display text-[1.5rem] leading-snug">
              Private work is quoted on the call, not off a page.
            </p>
            <p className="mt-3 max-w-[54ch] text-body">
              Tell him what you are carrying and how long you want to work
              together, and he will give you a figure for the whole track.
            </p>
            <Link
              href="/contact"
              className="pill mt-7 bg-navy px-7 py-3.5 font-medium text-ivory hover:bg-navy-3"
            >
              Ask about the private track
              <Arrow />
            </Link>
          </div>
        </section>
        )}

        {/* others */}
        <section className="section-y bg-ivory">
          <div className="shell">
            <SectionHead label="The other two" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link
                    href={`/programmes/${o.slug}`}
                    className="panel group flex gap-5 border border-ink/12 p-5 transition-colors hover:border-ink/30"
                  >
                    <div className="panel relative h-24 w-24 shrink-0">
                      <Image
                        src={o.img}
                        alt={o.alt}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="eyebrow text-gold-deep">{o.format}</p>
                      <h2 className="mt-1.5 font-display text-[1.35rem]">
                        {o.title}
                      </h2>
                      <p className="mt-1 text-[0.875rem] text-muted">{o.who}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
