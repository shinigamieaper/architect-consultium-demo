import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import PosterHero from "@/components/PosterHero";
import SectionHead from "@/components/SectionHead";
import Stage from "@/components/Stage";
import Arrow from "@/components/Arrow";
import {
  articles,
  bio,
  books,
  programmes,
  resources,
  speaking,
} from "@/lib/content";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <PosterHero />

        {/* ---------- THE MANDATE ---------- */}
        <section id="story" className="section-y bg-ivory">
          <div className="shell">
            <SectionHead label="The Mandate" />

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
              <div>
                <Reveal delay={60}>
                  <h2 className="font-display text-[clamp(2rem,1.4rem+2.2vw,3.25rem)] leading-[1.02]">
                    A pastor, a revival architect,
                    <br />
                    <em className="italic text-gold-deep">
                      a leadership coach.
                    </em>
                  </h2>
                </Reveal>
                {bio.map((p, i) => (
                  <Reveal key={i} delay={120 + i * 60}>
                    <p className="mt-5 max-w-[62ch] text-body">{p}</p>
                  </Reveal>
                ))}
                <Reveal delay={320}>
                  <Link
                    href="/about"
                    className="pill mt-8 border border-ink/20 text-ink hover:border-ink hover:bg-ink/5"
                  >
                    Read the full story
                    <Arrow />
                  </Link>
                </Reveal>
              </div>

              <Reveal delay={140}>
                <div className="panel bg-navy p-7 text-ivory">
                  <p className="eyebrow text-gold-2">In short</p>
                  <dl className="mt-6">
                    {[
                      { k: "Works with", v: "Leaders and teams" },
                      { k: "Reaches", v: "Wherever they are" },
                      { k: "Teaches", v: "Character, purpose, weight" },
                    ].map((r) => (
                      <div
                        key={r.k}
                        className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4 last:border-b-0"
                      >
                        <dt className="eyebrow text-ivory/55">{r.k}</dt>
                        <dd className="text-right font-display text-[1.1rem]">
                          {r.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- PROGRAMMES ---------- */}
        <Stage>
          <div
            id="programmes"
            className="px-[clamp(1.25rem,4vw,3.25rem)] py-[clamp(3rem,7vw,5.5rem)]"
          >
            <SectionHead label="Three ways to work with me" tone="dark" />

            <div className="mt-12 grid gap-9 md:grid-cols-3 md:gap-7">
              {programmes.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <article className="group flex h-full flex-col">
                    <div className="panel relative aspect-4/5">
                      <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        sizes="(min-width:768px) 31vw, 92vw"
                        className="object-cover transition-transform duration-[900ms] ease-arch group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,23,42,0.78),rgba(18,23,42,0))]" />
                      <span className="absolute left-5 top-4 font-display text-[1.7rem] text-gold-2">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[1.65rem] leading-tight">
                      {p.title}
                    </h3>
                    <p className="eyebrow mt-2.5 text-gold-2">{p.format}</p>
                    <p className="mt-3 text-[0.875rem] text-ivory/50">{p.who}</p>
                    <p className="mt-3 text-[0.9375rem] text-ivory/75">
                      {p.blurb}
                    </p>
                    <div className="mt-auto pt-7">
                      <Link
                        href={`/programmes/${p.slug}`}
                        className="pill border border-white/20 text-ivory hover:border-white/45 hover:bg-white/5"
                      >
                        Open the programme
                        <Arrow />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Stage>

        {/* ---------- SPEAKING ---------- */}
        <section id="speaking" className="section-y bg-ivory">
          <div className="shell">
            <SectionHead label="Speaking" />

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <Reveal delay={60}>
                <h2 className="font-display text-[clamp(2rem,1.4rem+2.2vw,3.25rem)] leading-[1.02]">
                  Bring me to{" "}
                  <em className="italic text-gold-deep">your room</em>.
                </h2>
                <p className="mt-5 max-w-[46ch] text-body">
                  Churches, boardrooms, conferences and campuses. Tell me the
                  room and the date and you get an answer, not a form that
                  disappears.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/speaking"
                    className="pill bg-navy font-medium text-ivory hover:bg-navy-3"
                  >
                    Check a date
                    <Arrow />
                  </Link>
                  <Link
                    href="/contact"
                    className="pill border border-ink/20 text-ink hover:border-ink hover:bg-ink/5"
                  >
                    Ask a question
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow mb-3 text-muted">Topics</p>
                    <ul>
                      {speaking.topics.map((t) => (
                        <li
                          key={t}
                          className="border-b border-ink/12 py-2.5 text-[0.9375rem]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3 text-muted">Audiences</p>
                    <ul>
                      {speaking.audiences.map((t) => (
                        <li
                          key={t}
                          className="border-b border-ink/12 py-2.5 text-[0.9375rem]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- BOOKS ---------- */}
        <section id="books" className="section-y bg-ivory-2">
          <div className="shell">
            <SectionHead label="Books" />
            <Reveal delay={60}>
              <h2 className="mt-12 font-display text-[clamp(2rem,1.4rem+2.2vw,3.25rem)] leading-[1.02]">
                Read it first, then{" "}
                <em className="italic text-gold-deep">come and work with me</em>.
              </h2>
              <p className="mt-4 max-w-[54ch] text-body">
                Cards accepted worldwide, for the books and for everything else.
                The same checkout carries the resources and the plans.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {books.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <article className="panel flex gap-5 bg-ivory p-5">
                    <div className="panel relative h-36 w-[104px] shrink-0">
                      <Image
                        src={b.img}
                        alt={b.alt}
                        fill
                        sizes="104px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-display text-[1.3rem] leading-snug">
                        {b.title}
                      </h3>
                      <p className="mt-1 text-[0.875rem] text-muted">{b.note}</p>
                      <p className="mt-auto pt-3 font-display text-[1.3rem]">
                        {b.price}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <Link
                href="/books"
                className="pill mt-8 border border-ink/20 text-ink hover:border-ink hover:bg-ink/5"
              >
                See both books
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ---------- JOURNAL + RESOURCES ---------- */}
        <section id="writing" className="section-y bg-ivory">
          <div className="shell">
            <SectionHead label="Journal and resources" />

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
              <div>
                <ul className="border-t border-ink/12">
                  {articles.map((a, i) => (
                    <Reveal key={a.title} delay={i * 60}>
                      <li className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/12 py-5">
                        <span>
                          <span className="eyebrow text-gold-deep">{a.cat}</span>
                          <span className="mt-1.5 block font-display text-[1.35rem]">
                            {a.title}
                          </span>
                        </span>
                        <span className="text-[0.8125rem] text-muted">
                          {a.date} &middot; {a.mins}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={220}>
                  <Link
                    href="/journal"
                    className="pill mt-7 border border-ink/20 text-ink hover:border-ink hover:bg-ink/5"
                  >
                    Read the journal
                    <Arrow />
                  </Link>
                </Reveal>
              </div>

              <div>
                <ul className="border-t border-ink/12">
                  {resources.map((r, i) => (
                    <Reveal key={r.title} delay={i * 60}>
                      <li className="flex items-baseline justify-between gap-4 border-b border-ink/12 py-4">
                        <span className="text-[0.9375rem]">{r.title}</span>
                        <span className="shrink-0 text-[0.75rem] uppercase tracking-wider text-muted">
                          {r.kind}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <p className="mt-4 text-[0.8125rem] text-muted">
                  Free downloads ask for an email. Paid ones go through the same
                  checkout as the books.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Join />
      </main>
      <Footer />
    </>
  );
}
