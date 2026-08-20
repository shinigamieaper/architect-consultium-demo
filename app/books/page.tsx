import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { books } from "@/lib/content";

export const metadata = { title: "Books | The Architect Consultium" };

export default function BooksPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Books"
          title="Written down, so it"
          italic="outlives the room."
          lede="Cards accepted worldwide, so nobody is stopped at the till. The same checkout carries the resources and the membership plans."
        />

        <section className="section-y bg-ivory">
          <div className="shell">
            <SectionHead label="In print" />

            <div className="mt-12 grid gap-12">
              {books.map((b, i) => (
                <Reveal key={b.title} delay={i * 90}>
                  <article className="grid gap-8 border-b border-ink/12 pb-12 last:border-b-0 sm:grid-cols-[210px_1fr] sm:gap-12">
                    <div className="panel relative aspect-3/4 w-full bg-ivory-2">
                      <Image
                        src={b.img}
                        alt={b.alt}
                        fill
                        sizes="210px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h2 className="font-display text-[clamp(1.6rem,1.25rem+1.3vw,2.35rem)] leading-tight">
                        {b.title}
                      </h2>
                      <p className="mt-3 max-w-[58ch] text-body">{b.note}</p>

                      <dl className="mt-7 max-w-[420px] border-t border-ink/12 pt-4">
                        <dt className="eyebrow text-muted">Price</dt>
                        <dd className="mt-1 font-display text-[1.9rem]">
                          {b.price}
                        </dd>
                      </dl>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <button
                          type="button"
                          className="pill bg-navy px-7 py-3.5 font-medium text-ivory hover:bg-navy-3"
                        >
                          Add to basket
                        </button>
                        <button
                          type="button"
                          className="pill border border-ink/20 px-7 py-3.5 text-ink hover:border-ink hover:bg-ink/5"
                        >
                          Read a sample
                        </button>
                      </div>
                      <p className="mt-3 text-[0.75rem] text-muted">
                        Preview only. No card is taken and no money moves.
                      </p>
                    </div>
                  </article>
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
