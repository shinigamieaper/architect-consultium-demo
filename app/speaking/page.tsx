"use client";

import Image from "next/image";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Stage from "@/components/Stage";
import Arrow from "@/components/Arrow";
import { speaking } from "@/lib/content";

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

const gallery = [
  { src: "/img/speak_a.jpg", alt: "Speaking to a seated audience" },
  { src: "/img/speak_b.jpg", alt: "A cohort in discussion" },
];

const fields = [
  { id: "org", label: "Church or organisation", type: "text" },
  { id: "name", label: "Your name", type: "text" },
  { id: "date", label: "Date you have in mind", type: "text" },
  { id: "size", label: "Roughly how many people", type: "text" },
];

export default function SpeakingPage() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    await new Promise((r) => setTimeout(r, 700));
    setBusy(false);
    setSent(true);
  }

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

        <section className="section-y bg-ivory">
          <div className="shell">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <SectionHead label="What I speak on" />
                <ul className="mt-8 border-t border-ink/12">
                  {speaking.topics.map((t) => (
                    <li key={t} className="border-b border-ink/12 py-3.5">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={100}>
                <SectionHead label="Rooms I am usually in" />
                <ul className="mt-8 border-t border-ink/12">
                  {speaking.audiences.map((t) => (
                    <li key={t} className="border-b border-ink/12 py-3.5">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {gallery.map((g, i) => (
                <Reveal key={g.src} delay={i * 80}>
                  <div className="panel relative aspect-4/3 w-full bg-ivory-2">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width:640px) 31vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-ivory-2">
          <div className="shell">
            <SectionHead label="How booking works" />
            <div className="mt-12 grid gap-9 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="border-t border-ink/20 pt-6">
                    <span className="font-display text-[1.9rem] text-gold-deep">
                      {s.n}
                    </span>
                    <h2 className="mt-2 font-display text-[1.4rem]">{s.t}</h2>
                    <p className="mt-2.5 text-[0.9375rem] text-body">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Stage>
          <div className="px-[clamp(1.25rem,4vw,3.25rem)] py-[clamp(3rem,7vw,5.5rem)]">
            <div className="mx-auto max-w-[680px]">
              <SectionHead label="Check a date" tone="dark" />

              {sent ? (
                <Reveal>
                  <div className="panel mt-10 border border-gold/40 bg-white/5 p-8">
                    <p className="font-display text-[1.7rem] leading-snug text-ivory">
                      That date is with him.
                    </p>
                    <p className="mt-3 max-w-[46ch] text-ivory/65">
                      On the live site the enquiry lands in his calendar and you
                      get a confirmation, so a date is never lost in an inbox.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="pill mt-6 border border-white/20 text-ivory hover:border-white/45 hover:bg-white/5"
                    >
                      Send another
                    </button>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={100}>
                  <p className="mt-6 text-ivory/65">
                    Tell me the room and the date. Nothing here is sent, this is
                    a preview of how the live form behaves.
                  </p>
                  <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
                    {fields.map((f) => (
                      <label key={f.id} className="flex flex-col gap-2">
                        <span className="eyebrow text-ivory/50">{f.label}</span>
                        <input
                          name={f.id}
                          type={f.type}
                          required
                          className="panel border border-white/20 bg-white/5 px-4 py-3 text-ivory transition-colors focus:border-gold"
                        />
                      </label>
                    ))}
                    <label className="flex flex-col gap-2 sm:col-span-2">
                      <span className="eyebrow text-ivory/50">
                        Anything I should know
                      </span>
                      <textarea
                        name="notes"
                        rows={4}
                        className="panel resize-y border border-white/20 bg-white/5 px-4 py-3 text-ivory transition-colors focus:border-gold"
                      />
                    </label>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={busy}
                        className="pill bg-gold px-8 py-3.5 font-medium text-navy hover:bg-gold-2 disabled:opacity-70"
                      >
                        {busy ? "Sending" : "Send the enquiry"}
                        {busy ? null : <Arrow />}
                      </button>
                    </div>
                  </form>
                </Reveal>
              )}
            </div>
          </div>
        </Stage>
      </main>
      <Footer />
    </>
  );
}
