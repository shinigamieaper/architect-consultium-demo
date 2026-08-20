import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import {
  articles,
  bio,
  books,
  PERSON,
  programmes,
  resources,
  speaking,
  TAGLINE,
} from "@/lib/content";

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

/* letterspaced serif divider, the spine of the page */
function SectionTitle({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`sect-title trail ${tone === "dark" ? "text-ivory/70" : "text-ink/70"}`}
    >
      {children}
    </p>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden bg-navy text-ivory">
          <div className="shell pb-[clamp(3.5rem,7vw,6rem)] pt-[clamp(2.5rem,5vw,4rem)]">
            <Reveal>
              <p className="sect-title text-center text-gold">{PERSON}</p>
            </Reveal>

            <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <Reveal delay={80}>
                  <h1 className="text-[clamp(2.3rem,1.4rem+3.2vw,4rem)]">
                    Build altars.
                    <br />
                    Raise leaders.
                    <br />
                    <em className="italic text-gold">Architect revival.</em>
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-7 max-w-[50ch] text-ivory/75">
                    Mentorship, coaching and the Purpose Academy, with the books
                    and the writing behind them. One place, one login, and a way
                    to pay whether you are in Lagos or in Canada.
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Link
                      href="#join"
                      className="inline-flex items-center bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors hover:bg-gold-2 active:translate-y-px"
                    >
                      Become a member
                    </Link>
                    <Link
                      href="#speaking"
                      className="inline-flex items-center gap-2 border border-ivory/25 px-7 py-3.5 text-sm tracking-wide text-ivory transition-colors hover:border-ivory active:translate-y-px"
                    >
                      Book me to speak
                      <Arrow />
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={120}>
                <figure className="relative mx-auto w-full max-w-[420px]">
                  <div className="absolute -inset-3 border border-gold/40" />
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/img/pba.jpg"
                      alt="Pastor Olabanji Afolabi"
                      fill
                      priority
                      sizes="(min-width:1024px) 34vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-5 text-center">
                    <span className="eyebrow text-gold">{TAGLINE}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- THE MANDATE ---------- */}
        <section id="story" className="section-y">
          <div className="shell">
            <Reveal>
              <SectionTitle tone="light">The Mandate</SectionTitle>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
              <div>
                <Reveal delay={60}>
                  <h2 className="text-[clamp(1.8rem,1.3rem+1.9vw,2.75rem)]">
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
                  <p className="mt-8 font-display text-[1.6rem] italic text-ink">
                    Olabanji Afolabi
                  </p>
                  <p className="eyebrow mt-1 text-muted">
                    Lead Pastor, Lighthouse Global
                  </p>
                </Reveal>
              </div>

              <Reveal delay={140}>
                <dl className="border-t border-ink/12">
                  {[
                    { k: "Works with", v: "Leaders and teams" },
                    { k: "Based in", v: "Lagos and Canada" },
                    { k: "Teaches", v: "Character, purpose, weight" },
                  ].map((r) => (
                    <div
                      key={r.k}
                      className="flex items-baseline justify-between gap-4 border-b border-ink/12 py-4"
                    >
                      <dt className="eyebrow text-muted">{r.k}</dt>
                      <dd className="text-right font-display text-[1.15rem]">
                        {r.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- PROGRAMMES ---------- */}
        <section id="programmes" className="section-y bg-navy text-ivory">
          <div className="shell">
            <Reveal>
              <SectionTitle>Three Ways To Work With Me</SectionTitle>
            </Reveal>

            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {programmes.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <article className="group flex h-full flex-col">
                    <div className="relative aspect-4/5 overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        sizes="(min-width:768px) 31vw, 92vw"
                        className="object-cover transition-transform duration-[900ms] ease-arch group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(27,34,55,0.7),rgba(27,34,55,0))]" />
                      <span className="absolute left-4 top-4 font-display text-[1.6rem] text-gold">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[1.6rem] leading-tight">
                      {p.title}
                    </h3>
                    <p className="eyebrow mt-2 text-gold">{p.format}</p>
                    <p className="mt-3 text-[0.875rem] text-ivory/55">
                      {p.who}
                    </p>
                    <p className="mt-3 text-[0.9375rem] text-ivory/75">
                      {p.blurb}
                    </p>
                    <Link
                      href="/library"
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.8125rem] tracking-wide text-gold underline-offset-4 hover:underline"
                    >
                      Open in the library
                      <Arrow />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SPEAKING ---------- */}
        <section id="speaking" className="section-y">
          <div className="shell">
            <Reveal>
              <SectionTitle tone="light">Speaking</SectionTitle>
            </Reveal>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <Reveal delay={60}>
                <h2 className="text-[clamp(1.8rem,1.3rem+1.9vw,2.75rem)]">
                  Bring me to <em className="italic text-gold-deep">your room</em>.
                </h2>
                <p className="mt-5 max-w-[46ch] text-body">
                  Churches, boardrooms, conferences and campuses. Tell me the
                  room and the date and you get an answer, not a form that
                  disappears.
                </p>
                <Link
                  href="#join"
                  className="mt-7 inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-navy-3 active:translate-y-px"
                >
                  Check a date
                  <Arrow />
                </Link>
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
            <Reveal>
              <SectionTitle tone="light">Books</SectionTitle>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-10 text-[clamp(1.8rem,1.3rem+1.9vw,2.75rem)]">
                Buy the book, in{" "}
                <em className="italic text-gold-deep">your own currency</em>.
              </h2>
              <p className="mt-4 max-w-[54ch] text-body">
                Canada and the rest of the world check out in dollars. Nigeria
                checks out in naira, on a Nigerian card that actually clears.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {books.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <article className="flex gap-5 border border-ink/12 bg-ivory p-5">
                    <div className="relative h-36 w-26 shrink-0 overflow-hidden">
                      <Image
                        src={b.img}
                        alt={b.alt}
                        fill
                        sizes="104px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-display text-[1.25rem] leading-snug">
                        {b.title}
                      </h3>
                      <p className="mt-1 text-[0.875rem] text-muted">{b.note}</p>
                      <p className="mt-auto pt-3 text-[0.9375rem]">
                        <span className="font-medium">{b.price}</span>
                        <span className="text-muted"> / {b.priceNgn}</span>
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- JOURNAL + RESOURCES ---------- */}
        <section id="writing" className="section-y">
          <div className="shell">
            <Reveal>
              <SectionTitle tone="light">Journal And Resources</SectionTitle>
            </Reveal>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
              <div>
                <ul className="border-t border-ink/12">
                  {articles.map((a, i) => (
                    <Reveal key={a.title} delay={i * 60}>
                      <li className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/12 py-5">
                        <span>
                          <span className="eyebrow text-gold-deep">{a.cat}</span>
                          <span className="mt-1 block font-display text-[1.3rem]">
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
