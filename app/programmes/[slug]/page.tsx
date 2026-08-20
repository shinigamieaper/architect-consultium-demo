import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
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

  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy text-ivory">
          <div className="shell grid items-center gap-12 py-[clamp(3rem,6vw,5.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <p className="sect-title text-gold">{prog.format}</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-[clamp(2.1rem,1.4rem+2.6vw,3.5rem)]">
                  {prog.title}
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-[1.0625rem] text-gold-2">{prog.who}</p>
                <p className="mt-4 max-w-[52ch] text-ivory/75">{prog.blurb}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#join"
                    className="inline-flex items-center bg-gold px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold-2 active:translate-y-px"
                  >
                    Join to start
                  </Link>
                  <Link
                    href="/library"
                    className="inline-flex items-center border border-ivory/25 px-7 py-3.5 text-sm text-ivory transition-colors hover:border-ivory active:translate-y-px"
                  >
                    Watch the free session
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={prog.img}
                  alt={prog.alt}
                  fill
                  priority
                  sizes="(min-width:1024px) 44vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(27,34,55,0.55),rgba(27,34,55,0))]" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* sessions */}
        <section className="section-y">
          <div className="shell">
            <Reveal>
              <p className="sect-title trail text-ink/70">The Sessions</p>
            </Reveal>
            <ul className="mt-8 border-t border-ink/12">
              {prog.lessons.map((l, i) => (
                <Reveal key={l.n} delay={i * 60}>
                  <li className="flex items-center justify-between gap-4 border-b border-ink/12 py-4">
                    <span className="flex min-w-0 items-baseline gap-4">
                      <span className="font-display text-[1.05rem] text-muted">
                        {l.n}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate">{l.title}</span>
                        <span className="text-[0.75rem] text-muted">
                          {l.len}
                          {l.free ? " . Free to watch" : ""}
                        </span>
                      </span>
                    </span>
                    <span
                      className={`shrink-0 text-[0.75rem] uppercase tracking-wider ${l.free ? "text-gold-deep" : "text-muted"}`}
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
        <section className="section-y bg-ivory-2">
          <div className="shell">
            <Reveal>
              <p className="sect-title trail text-ink/70">What It Costs</p>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {plans.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <div
                    className={`flex h-full flex-col gap-2 border p-6 ${p.best ? "border-gold bg-ivory" : "border-ink/15"}`}
                  >
                    <span className="eyebrow text-muted">{p.name}</span>
                    <span className="font-display text-[2rem] leading-none">
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

        {/* others */}
        <section className="section-y">
          <div className="shell">
            <Reveal>
              <p className="sect-title trail text-ink/70">The Other Two</p>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link
                    href={`/programmes/${o.slug}`}
                    className="group flex gap-5 border border-ink/12 p-5 transition-colors hover:border-ink/30"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden">
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
                      <h3 className="mt-1 font-display text-[1.3rem]">
                        {o.title}
                      </h3>
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
