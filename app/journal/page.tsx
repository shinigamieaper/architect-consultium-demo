"use client";

import Link from "next/link";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Stage from "@/components/Stage";
import { articles, resources } from "@/lib/content";

const cats = ["All", "Character", "Teams", "Purpose"];

export default function JournalPage() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? articles : articles.filter((a) => a.cat === cat);

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

        <section className="section-y bg-ivory">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {cats.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCat(c)}
                    aria-pressed={cat === c}
                    className={`pill border transition-colors ${
                      cat === c
                        ? "border-navy bg-navy text-ivory"
                        : "border-ink/20 text-body hover:border-ink"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>

            {shown.length === 0 ? (
              <div className="panel mt-10 border border-ink/12 bg-ivory-2 p-8">
                <p className="font-display text-[1.4rem]">
                  Nothing filed under {cat} yet.
                </p>
                <p className="mt-2 max-w-[48ch] text-body">
                  New pieces are added as they are written. Try another
                  category, or read everything.
                </p>
                <button
                  type="button"
                  onClick={() => setCat("All")}
                  className="pill mt-5 border border-ink/20 text-ink hover:border-ink hover:bg-ink/5"
                >
                  Show everything
                </button>
              </div>
            ) : (
              <ul className="mt-10 border-t border-ink/12">
                {shown.map((a, i) => (
                  <Reveal key={a.title} delay={i * 70}>
                    <li className="border-b border-ink/12 py-8">
                      <Link href="/journal" className="group block">
                        <span className="eyebrow text-gold-deep">{a.cat}</span>
                        <h2 className="mt-2.5 font-display text-[clamp(1.5rem,1.2rem+1vw,2.05rem)] transition-colors group-hover:text-gold-deep">
                          {a.title}
                        </h2>
                        <p className="mt-3 max-w-[62ch] text-body">
                          {a.excerpt}
                        </p>
                        <span className="mt-3 block text-[0.8125rem] text-muted">
                          {a.date} &middot; {a.mins}
                        </span>
                      </Link>
                    </li>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </section>

        <Stage>
          <div className="px-[clamp(1.25rem,4vw,3.25rem)] py-[clamp(3rem,7vw,5.5rem)]">
            <SectionHead label="Resources" tone="dark" />
            <ul className="mt-10 border-t border-white/12">
              {resources.map((r, i) => (
                <Reveal key={r.title} delay={i * 60}>
                  <li className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 py-5">
                    <span className="text-ivory">{r.title}</span>
                    <span className="flex items-center gap-5">
                      <span className="text-[0.75rem] uppercase tracking-wider text-ivory/55">
                        {r.kind}
                      </span>
                      <button
                        type="button"
                        className="pill border border-white/20 text-ivory hover:border-white/45 hover:bg-white/5"
                      >
                        Get it
                      </button>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <p className="mt-5 text-[0.8125rem] text-ivory/55">
              Free ones ask for an email and add the person to your list. Paid
              ones go through the same checkout as the books.
            </p>
          </div>
        </Stage>
      </main>
      <Footer />
    </>
  );
}
