"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Arrow from "@/components/Arrow";

const reasons = [
  "Book me to speak",
  "1:1 mentorship",
  "Group coaching for my team",
  "Purpose Academy",
  "Something else",
];

const field =
  "panel w-full border border-ink/15 bg-ivory px-4 py-3 text-[0.9375rem] text-ink transition-colors placeholder:text-muted/70 focus:border-gold-deep";

export default function ContactPage() {
  const [reason, setReason] = useState(reasons[0]);
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
          eyebrow="Contact"
          title="Tell me the room"
          italic="and the date."
          lede="One form for everything: speaking, mentorship, cohorts and the academy. On the live site it reaches him directly and it gets an answer."
        />

        <section className="section-y bg-ivory">
          <div className="shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <SectionHead label="Send a message" />

              {sent ? (
                <Reveal>
                  <div className="panel mt-10 border border-gold-deep/40 bg-ivory-2 p-8">
                    <p className="font-display text-[1.6rem] leading-snug text-ink">
                      That would have landed in his inbox.
                    </p>
                    <p className="mt-3 max-w-[46ch] text-body">
                      On the live site this sends the message, files it against
                      the right programme, and replies to you with a
                      confirmation so nothing gets lost.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="pill mt-6 border border-ink/20 text-ink hover:border-ink hover:bg-ink/5"
                    >
                      Send another
                    </button>
                  </div>
                </Reveal>
              ) : (
                <form onSubmit={submit} className="mt-10 flex flex-col gap-5">
                  <fieldset className="border-0 p-0">
                    <legend className="eyebrow mb-3 block text-muted">
                      What is this about
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {reasons.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setReason(r)}
                          aria-pressed={reason === r}
                          className={`pill border transition-colors ${
                            reason === r
                              ? "border-navy bg-navy text-ivory"
                              : "border-ink/20 text-ink hover:border-ink"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="eyebrow mb-2 block text-muted"
                      >
                        Your name
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        required
                        autoComplete="name"
                        className={field}
                        placeholder="First and last"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="c-email"
                        className="eyebrow mb-2 block text-muted"
                      >
                        Email
                      </label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={field}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="c-org"
                      className="eyebrow mb-2 block text-muted"
                    >
                      Church, company or team
                    </label>
                    <input
                      id="c-org"
                      name="org"
                      className={field}
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="c-msg"
                      className="eyebrow mb-2 block text-muted"
                    >
                      Your message
                    </label>
                    <textarea
                      id="c-msg"
                      name="message"
                      required
                      rows={5}
                      className={`${field} resize-y`}
                      placeholder="If this is a date, tell me the date."
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={busy}
                      className="pill bg-navy px-8 py-3.5 font-medium text-ivory hover:bg-navy-3 disabled:opacity-70"
                    >
                      {busy ? "Sending" : "Send the message"}
                      {busy ? null : <Arrow />}
                    </button>
                    <p className="text-[0.75rem] text-muted">
                      Demo only. Nothing is sent and nothing is stored.
                    </p>
                  </div>
                </form>
              )}
            </div>

            <div>
              <SectionHead label="Before you write" />
              <dl className="mt-10 border-t border-ink/12">
                {[
                  {
                    k: "Speaking",
                    v: "Give me the date, the room and roughly how long you want. I will tell you yes or no, not maybe.",
                  },
                  {
                    k: "Mentorship",
                    v: "Twelve private sessions. Tell me what you are carrying and we will start there.",
                  },
                  {
                    k: "Teams",
                    v: "Group coaching runs eight weeks with a small cohort. Say how many people you have.",
                  },
                  {
                    k: "Everything else",
                    v: "The Purpose Academy is self paced, so you do not need to write first. You can just join.",
                  },
                ].map((r) => (
                  <div key={r.k} className="border-b border-ink/12 py-5">
                    <dt className="eyebrow text-gold-deep">{r.k}</dt>
                    <dd className="mt-2 max-w-[44ch] text-[0.9375rem] text-body">
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
