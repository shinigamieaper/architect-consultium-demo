import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { articles, resources } from "@/lib/content";

export const metadata = { title: "Journal | The Architect Consultium" };

const cats = ["All", "Character", "Teams", "Purpose"];

export default function JournalPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Journal"
          title="The writing behind"
          italic="the teaching."
          lede="Short pieces on character, teams and the weight leaders carry. Each one is written to be found, and to be quoted correctly when an AI answers a question about leadership."
        />

        <section className="section-y">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {cats.map((c, i) => (
                  <span
                    key={c}
                    className={`border px-4 py-1.5 text-[0.8125rem] ${
                      i === 0
                        ? "border-navy bg-navy text-ivory"
                        : "border-ink/20 text-body"
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            <ul className="mt-10 border-t border-ink/12">
              {articles.map((a, i) => (
                <Reveal key={a.title} delay={i * 70}>
                  <li className="border-b border-ink/12 py-7">
                    <Link href="/journal" className="group block">
                      <span className="eyebrow text-gold-deep">{a.cat}</span>
                      <h2 className="mt-2 font-display text-[clamp(1.4rem,1.15rem+0.9vw,1.9rem)] transition-colors group-hover:text-gold-deep">
                        {a.title}
                      </h2>
                      <p className="mt-2 max-w-[62ch] text-body">
                        An executive summary sits at the top of every article,
                        written so a search engine or an AI assistant can quote
                        it without mangling the point.
                      </p>
                      <span className="mt-3 block text-[0.8125rem] text-muted">
                        {a.date} &middot; {a.mins}
                      </span>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y bg-ivory-2">
          <div className="shell">
            <Reveal>
              <p className="sect-title trail text-ink/70">Resources</p>
            </Reveal>
            <ul className="mt-8 border-t border-ink/12">
              {resources.map((r, i) => (
                <Reveal key={r.title} delay={i * 60}>
                  <li className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/12 py-4">
                    <span>{r.title}</span>
                    <span className="flex items-center gap-4">
                      <span className="text-[0.75rem] uppercase tracking-wider text-muted">
                        {r.kind}
                      </span>
                      <button
                        type="button"
                        className="border border-ink/25 px-4 py-1.5 text-[0.8125rem] transition-colors hover:border-ink"
                      >
                        Get it
                      </button>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <p className="mt-4 text-[0.8125rem] text-muted">
              Free ones ask for an email and add the person to your list. Paid
              ones go through the same checkout as the books.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
