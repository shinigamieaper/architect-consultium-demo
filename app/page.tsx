import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import { articles, books, programmes, TAGLINE } from "@/lib/content";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-navy text-ivory">
          <div className="shell grid items-center gap-12 py-[clamp(3.5rem,8vw,7rem)] lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <p className="eyebrow text-gold">{TAGLINE}</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 text-[clamp(2.4rem,1.5rem+3.4vw,4.25rem)]">
                  Leaders are built.
                  <br />
                  <em className="italic text-gold">Here is the plan.</em>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-[52ch] text-ivory/75">
                  Two decades of teaching on leadership, character and carrying
                  weight, gathered into one place. The books, the writing and
                  the programmes, all under one login.
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
                    href="#programmes"
                    className="inline-flex items-center border border-ivory/25 px-7 py-3.5 text-sm tracking-wide text-ivory transition-colors hover:border-ivory active:translate-y-px"
                  >
                    See the programmes
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src="/img/speak_c.jpg"
                  alt="Speaking to an audience"
                  fill
                  priority
                  sizes="(min-width:1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(27,34,55,0.75),rgba(27,34,55,0.05))]" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="programmes" className="section-y">
          <div className="shell">
            <Reveal>
              <p className="eyebrow text-gold-deep">Programmes</p>
              <h2 className="mt-3 text-[clamp(1.9rem,1.3rem+2.2vw,3rem)]">
                Taught in sessions, not slogans.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {programmes.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <article className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-white">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        sizes="(min-width:768px) 45vw, 92vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="font-display text-[1.5rem]">{p.title}</h3>
                      <p className="text-[0.9375rem] text-muted">{p.blurb}</p>
                      <p className="mt-auto pt-3 text-[0.8125rem] text-muted">
                        {p.lessons.length} sessions, one free to watch
                      </p>
                      <Link
                        href="/library"
                        className="text-[0.8125rem] font-medium text-gold-deep underline-offset-4 hover:underline"
                      >
                        Open in the library
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="books" className="section-y bg-ivory-2">
          <div className="shell">
            <Reveal>
              <p className="eyebrow text-gold-deep">Books</p>
              <h2 className="mt-3 text-[clamp(1.9rem,1.3rem+2.2vw,3rem)]">
                Buy the book, in your own currency.
              </h2>
              <p className="mt-4 max-w-[54ch] text-muted">
                Canada and the rest of the world check out in dollars. Nigeria
                checks out in naira, on a Nigerian card that actually clears.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {books.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <article className="flex gap-5 border border-ink/10 bg-white p-5">
                    <div className="relative h-32 w-24 shrink-0 overflow-hidden">
                      <Image
                        src={b.img}
                        alt={b.alt}
                        fill
                        sizes="96px"
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

        <section id="writing" className="section-y">
          <div className="shell">
            <Reveal>
              <p className="eyebrow text-gold-deep">Writing</p>
              <h2 className="mt-3 text-[clamp(1.9rem,1.3rem+2.2vw,3rem)]">
                Recent articles.
              </h2>
            </Reveal>
            <ul className="mt-8 border-t border-ink/10">
              {articles.map((a, i) => (
                <Reveal key={a.title} delay={i * 60}>
                  <li className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/10 py-5">
                    <span className="font-display text-[1.3rem]">{a.title}</span>
                    <span className="text-[0.8125rem] text-muted">
                      {a.date} &middot; {a.mins}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <Join />
      </main>
      <Footer />
    </>
  );
}
