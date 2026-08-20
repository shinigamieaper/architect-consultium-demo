import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { speaking } from "@/lib/content";

export const metadata = { title: "Speaking | The Architect Consultium" };

const steps = [
  {
    n: "01",
    t: "Send the date",
    d: "The room, the date and roughly how many people. Two lines is enough.",
  },
  {
    n: "02",
    t: "You get an answer",
    d: "Available or not, within two working days. Not a form that disappears.",
  },
  {
    n: "03",
    t: "We shape the talk",
    d: "A short call to fit the message to your room rather than reheating a keynote.",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Speaking"
          title="Bring me to"
          italic="your room."
          lede="Churches, boardrooms, conferences and campuses. I teach on character, purpose and the weight leaders carry, and I shape the talk around the room rather than arriving with a script."
        />

        <section className="section-y">
          <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)]">
                What I speak on
              </h2>
              <ul className="mt-6 border-t border-ink/12">
                {speaking.topics.map((t) => (
                  <li key={t} className="border-b border-ink/12 py-3.5">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)]">
                Rooms I am usually in
              </h2>
              <ul className="mt-6 border-t border-ink/12">
                {speaking.audiences.map((t) => (
                  <li key={t} className="border-b border-ink/12 py-3.5">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section-y bg-ivory-2">
          <div className="shell">
            <Reveal>
              <p className="sect-title trail text-ink/70">How Booking Works</p>
            </Reveal>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="border-t border-ink/20 pt-5">
                    <span className="font-display text-[1.8rem] text-gold-deep">
                      {s.n}
                    </span>
                    <h3 className="mt-2 font-display text-[1.3rem]">{s.t}</h3>
                    <p className="mt-2 text-[0.9375rem] text-body">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-navy text-ivory">
          <div className="shell max-w-[680px]">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] text-ivory">
                Check a date
              </h2>
              <p className="mt-4 text-ivory/70">
                On the live site this books straight into his calendar. Here it
                is a preview, so nothing is sent.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <form
                className="mt-8 grid gap-5 sm:grid-cols-2"
                onSubmit={undefined}
              >
                {[
                  { id: "org", label: "Church or organisation" },
                  { id: "name", label: "Your name" },
                  { id: "date", label: "Date you have in mind" },
                  { id: "size", label: "Roughly how many people" },
                ].map((f) => (
                  <label key={f.id} className="flex flex-col gap-2">
                    <span className="text-[0.8125rem] font-medium">
                      {f.label}
                    </span>
                    <input
                      name={f.id}
                      className="border border-ivory/25 bg-transparent px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
                    />
                  </label>
                ))}
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[0.8125rem] font-medium">
                    Anything I should know
                  </span>
                  <textarea
                    rows={3}
                    className="border border-ivory/25 bg-transparent px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="inline-flex items-center bg-gold px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold-2 active:translate-y-px"
                  >
                    Send the enquiry
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
