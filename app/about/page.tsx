import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Stage from "@/components/Stage";
import Arrow from "@/components/Arrow";
import { bio, programmes, speaking } from "@/lib/content";

export const metadata = { title: "About | The Architect Consultium" };

const beliefs = [
  {
    n: "01",
    head: "Character before platform",
    body: "What holds a leader up is not the size of the room. It is what they are when the room is empty.",
  },
  {
    n: "02",
    head: "Build people who build others",
    body: "A leader who only produces followers has built a queue. A leader who produces leaders has built a house.",
  },
  {
    n: "03",
    head: "Revival is architecture",
    body: "It is not an accident and it is not a mood. It is designed, built and maintained, in every space you are given.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="About"
          title="A pastor, a revival architect,"
          italic="a leadership coach."
          lede="Olabanji Afolabi teaches leaders to carry weight without breaking, and to build people who go on to build others."
        />

        {/* ---------- THE STORY ---------- */}
        <section className="section-y bg-ivory">
          <div className="shell">
            <SectionHead label="The story" />

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <Reveal>
                <figure className="panel relative aspect-4/5 w-full bg-navy">
                  <Image
                    src="/img/pba.jpg"
                    alt="Pastor Olabanji Afolabi"
                    fill
                    sizes="(min-width:1024px) 36vw, 92vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>

              <div>
                {bio.map((p, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <p
                      className={
                        i === 0
                          ? "font-display text-[clamp(1.4rem,1.15rem+1.1vw,2rem)] leading-[1.25] text-ink"
                          : "mt-5 max-w-[62ch] text-body"
                      }
                    >
                      {p}
                    </p>
                  </Reveal>
                ))}

                <Reveal delay={280}>
                  <div className="panel mt-10 border border-ink/12 bg-ivory-2 p-6">
                    <p className="eyebrow text-gold-deep">The mandate</p>
                    <p className="mt-3 font-display text-[1.35rem] leading-snug text-ink">
                      To build altars, raise leaders, and architect revival in
                      every space.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- WHAT HE TEACHES ---------- */}
        <Stage>
          <div className="px-[clamp(1.25rem,4vw,3.25rem)] py-[clamp(3rem,7vw,5.5rem)]">
            <SectionHead label="What I keep coming back to" tone="dark" />

            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {beliefs.map((b, i) => (
                <Reveal key={b.n} delay={i * 90}>
                  <article className="border-t border-white/15 pt-6">
                    <span className="font-display text-[1.7rem] text-gold-2">
                      {b.n}
                    </span>
                    <h2 className="mt-3 font-display text-[1.5rem] leading-tight text-ivory">
                      {b.head}
                    </h2>
                    <p className="mt-3 text-[0.9375rem] text-ivory/65">
                      {b.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Stage>

        {/* ---------- WHERE TO FIND HIM ---------- */}
        <section className="section-y bg-ivory">
          <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead label="Work with me" />
              <ul className="mt-10 border-t border-ink/12">
                {programmes.map((p) => (
                  <li key={p.slug} className="border-b border-ink/12">
                    <Link
                      href={`/programmes/${p.slug}`}
                      className="group flex items-baseline justify-between gap-4 py-5"
                    >
                      <span>
                        <span className="block font-display text-[1.35rem] text-ink">
                          {p.title}
                        </span>
                        <span className="mt-1 block text-[0.8125rem] text-muted">
                          {p.format}
                        </span>
                      </span>
                      <Arrow className="h-4 w-4 shrink-0 translate-y-1 text-muted transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHead label="Rooms I speak in" />
              <ul className="mt-10 border-t border-ink/12">
                {speaking.audiences.map((a) => (
                  <li
                    key={a}
                    className="border-b border-ink/12 py-4 text-[0.9375rem]"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="pill mt-8 bg-navy font-medium text-ivory hover:bg-navy-3"
              >
                Get in touch
                <Arrow />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
