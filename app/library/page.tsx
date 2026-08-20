"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Stage from "@/components/Stage";
import { useDemo } from "@/components/DemoState";
import { programmes } from "@/lib/content";

function Lock() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect x="4.5" y="10.5" width="15" height="10" rx="1.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function Play() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  );
}

export default function Library() {
  const { member } = useDemo();
  const [openProg, setOpenProg] = useState(0);
  const prog = programmes[openProg];
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <>
      <Nav />
      <main>
        <Stage minH="min-h-[clamp(300px,42vh,420px)]">
          <div className="flex flex-1 flex-wrap items-end justify-between gap-8 px-[clamp(1.25rem,4vw,3.25rem)] pb-[clamp(1.75rem,4vh,3rem)] pt-[clamp(6.5rem,15vh,9rem)]">
            <div>
              <p className="eyebrow text-gold-2">Member library</p>
              <h1 className="mt-5 font-display text-[clamp(2.2rem,1.5rem+2.8vw,4rem)] leading-[0.98] text-ivory">
                {member ? "Welcome back." : "You are not signed in."}
              </h1>
              <p className="mt-5 max-w-[52ch] text-[0.9375rem] text-ivory/65">
                {member
                  ? "Your plan is active. Everything below is open to you until it expires."
                  : "The first session of each programme is open to everyone. The rest opens when you join."}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <span className="eyebrow text-ivory/55">Status</span>
              <span
                className={`pill border ${
                  member
                    ? "border-gold/50 bg-gold/10 text-gold-2"
                    : "border-white/20 text-ivory/70"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${member ? "bg-gold" : "bg-ivory/40"}`}
                />
                {member ? "One year plan, active" : "No active plan"}
              </span>
              {member ? (
                <span className="text-[0.75rem] text-ivory/55">
                  Renews 20 August 2027
                </span>
              ) : null}
            </div>
          </div>
        </Stage>

        <section className="section-y bg-ivory">
          <div className="shell grid min-w-0 gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            {/* programme list */}
            <aside>
              <p className="eyebrow mb-4 text-muted">Programmes</p>
              <ul className="flex flex-col">
                {programmes.map((p, i) => (
                  <li key={p.slug}>
                    <button
                      onClick={() => {
                        setOpenProg(i);
                        setPlaying(null);
                      }}
                      aria-pressed={i === openProg}
                      className={`w-full border-b border-ink/10 py-3.5 text-left text-[0.9375rem] transition-colors ${
                        i === openProg
                          ? "font-medium text-ink"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      {p.title}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* player + lessons */}
            <div>
              <div className="panel relative aspect-video w-full bg-navy">
                <Image
                  src={prog.img}
                  alt={prog.alt}
                  fill
                  sizes="(min-width:1024px) 60vw, 92vw"
                  className={`object-cover ${playing ? "opacity-70" : "opacity-45"}`}
                />
                <div className="absolute inset-0 grid place-items-center px-6">
                  {playing ? (
                    <div className="text-center text-ivory">
                      <p className="eyebrow text-gold-2">Now playing</p>
                      <p className="mt-2 font-display text-[1.6rem]">{playing}</p>
                      <p className="mt-2 text-[0.8125rem] text-ivory/60">
                        Video streams inside the platform. No download, no
                        sharing link.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center text-ivory/80">
                      <p className="font-display text-[1.45rem]">{prog.title}</p>
                      <p className="mt-1 text-[0.8125rem] text-ivory/55">
                        Pick a session below
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <ul className="mt-8 border-t border-ink/10">
                {prog.lessons.map((l) => {
                  const open = member || l.free;
                  return (
                    <li
                      key={l.n}
                      className="flex items-center justify-between gap-4 border-b border-ink/10 py-4"
                    >
                      <span className="flex min-w-0 items-center gap-5">
                        <span className="font-display text-[1.1rem] text-muted">
                          {l.n}
                        </span>
                        <span className="min-w-0">
                          <span
                            className={`block truncate text-[0.9375rem] ${open ? "" : "text-muted"}`}
                          >
                            {l.title}
                          </span>
                          <span className="text-[0.75rem] text-muted">
                            {l.len}
                            {l.free ? " · Free to watch" : ""}
                          </span>
                        </span>
                      </span>

                      {open ? (
                        <button
                          onClick={() => setPlaying(l.title)}
                          className="pill shrink-0 border border-ink/20 text-ink hover:border-ink hover:bg-ink/5"
                        >
                          <Play />
                          Watch
                        </button>
                      ) : (
                        <Link
                          href="/#join"
                          className="pill shrink-0 bg-navy text-ivory hover:bg-navy-3"
                        >
                          <Lock />
                          Join to unlock
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              {!member ? (
                <div className="panel mt-10 border border-gold/50 bg-gold/10 p-7">
                  <p className="font-display text-[1.5rem]">
                    The rest of this programme is for members.
                  </p>
                  <p className="mt-2 max-w-[54ch] text-[0.9375rem] text-body">
                    Six months or a year. Access opens the moment you pay and
                    closes when the term ends.
                  </p>
                  <Link
                    href="/#join"
                    className="pill mt-6 bg-navy px-7 py-3.5 font-medium text-ivory hover:bg-navy-3"
                  >
                    See the plans
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
