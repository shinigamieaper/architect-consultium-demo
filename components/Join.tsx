"use client";

import Link from "next/link";
import { useState } from "react";
import { useDemo } from "./DemoState";
import { plans } from "@/lib/content";
import Stage from "./Stage";
import SectionHead from "./SectionHead";

export default function Join() {
  const { member, setMember } = useDemo();
  const [picked, setPicked] = useState(1);
  const [state, setState] = useState<"idle" | "paying">("idle");

  async function pay() {
    setState("paying");
    await new Promise((r) => setTimeout(r, 900));
    setState("idle");
    setMember(true);
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Stage>
      <div
        id="join"
        className="px-[clamp(1.25rem,4vw,3.25rem)] py-[clamp(3rem,7vw,5.5rem)]"
      >
        <SectionHead label="Membership" tone="dark" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-[clamp(2rem,1.4rem+2.2vw,3.25rem)] leading-[1.02] text-ivory">
              One login.
              <br />
              <em className="italic text-gold-2">Everything I teach.</em>
            </h2>
            <p className="mt-6 max-w-[46ch] text-ivory/65">
              Every programme, every article, and the video that sits behind
              them. Your access opens the moment you pay and closes when the
              term ends. Nothing to chase.
            </p>

            {member ? (
              <div className="panel mt-8 border border-gold/40 bg-white/5 p-5">
                <p className="text-[0.9375rem] text-ivory/85">
                  <strong className="font-medium text-gold-2">
                    You are a member in this demo.
                  </strong>{" "}
                  Open the member library to see the unlocked view, or flip the
                  switch at the bottom to see it locked again.
                </p>
              </div>
            ) : null}
          </div>

          {member ? (
            <div className="panel border border-gold/40 bg-white/5 p-7">
              <p className="eyebrow text-gold-2">Your plan</p>
              <p className="mt-4 font-display text-[2rem] leading-none text-ivory">
                One year
              </p>
              <p className="mt-3 text-[0.9375rem] text-ivory/65">
                Active until 20 August 2027. Everything opens for you, and it
                renews on its own unless you stop it.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/library"
                  className="pill bg-gold px-7 py-3.5 font-medium text-navy hover:bg-gold-2"
                >
                  Open the library
                </Link>
                <button
                  type="button"
                  className="pill border border-white/25 px-7 py-3.5 text-ivory hover:border-white/50 hover:bg-white/5"
                >
                  Manage billing
                </button>
              </div>
              <p className="mt-3 text-[0.75rem] text-ivory/55">
                Demo only. No card is taken and no money moves.
              </p>
            </div>
          ) : (
          <div>
            <p className="eyebrow text-ivory/55">Choose a plan</p>
            <p className="mt-3 text-[0.8125rem] text-ivory/50">
              Cards accepted worldwide. Renewals and expiry are handled for you.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {plans.map((p, i) => {
                const on = picked === i;
                return (
                  <button
                    key={p.name}
                    onClick={() => setPicked(i)}
                    aria-pressed={on}
                    className={`panel flex flex-col items-start gap-2 border p-5 text-left transition-colors ${
                      on
                        ? "border-gold bg-white/6"
                        : "border-white/15 hover:border-white/35"
                    }`}
                  >
                    <span className="flex w-full items-center justify-between gap-3">
                      <span className="eyebrow text-ivory/55">{p.name}</span>
                      {p.best ? (
                        <span className="rounded-full bg-gold px-2.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-navy">
                          Best value
                        </span>
                      ) : null}
                    </span>
                    <span className="font-display text-[2rem] leading-none text-ivory">
                      {p.price}
                    </span>
                    <span className="text-[0.8125rem] text-ivory/55">
                      {p.note}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={pay}
              disabled={state === "paying"}
              className="pill mt-7 bg-gold px-8 py-3.5 font-medium text-navy hover:bg-gold-2 disabled:opacity-70"
            >
              {state === "paying" ? "Opening checkout" : "Join now"}
            </button>
            <p className="mt-3 text-[0.75rem] text-ivory/55">
              Demo only. No card is taken and no money moves.
            </p>
            </div>
          )}
        </div>
      </div>
    </Stage>
  );
}
