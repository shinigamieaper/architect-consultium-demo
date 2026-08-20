import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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

        <section className="section-y">
          <div className="shell grid gap-10">
            {books.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <article className="grid gap-8 border-b border-ink/12 pb-10 sm:grid-cols-[200px_1fr] sm:gap-10">
                  <div className="relative aspect-3/4 w-full overflow-hidden bg-ivory-2">
                    <Image
                      src={b.img}
                      alt={b.alt}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-display text-[clamp(1.5rem,1.2rem+1vw,2rem)]">
                      {b.title}
                    </h2>
                    <p className="mt-3 max-w-[58ch] text-body">{b.note}</p>

                    <dl className="mt-6 max-w-[420px] border-t border-ink/12 pt-4">
                      <dt className="eyebrow text-muted">Price</dt>
                      <dd className="mt-1 font-display text-[1.75rem]">
                        {b.price}
                      </dd>
                    </dl>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="inline-flex items-center bg-navy px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-navy-3 active:translate-y-px"
                      >
                        Add to basket
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center border border-ink/25 px-7 py-3.5 text-sm transition-colors hover:border-ink active:translate-y-px"
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
        </section>
      </main>
      <Footer />
    </>
  );
}
