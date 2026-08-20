"use client";

import { useState } from "react";
import { useDemo } from "./DemoState";
import { plans } from "@/lib/content";


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
    <section id="join" className="section-y bg-navy text-ivory">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-gold">Membership</p>
            <h2 className="mt-3 text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] text-ivory">
              One login. Everything I teach.
            </h2>
            <p className="mt-5 max-w-[46ch] text-ivory/70">
              Every programme, every article, and the video that sits behind
              them. Your access opens the moment you pay and closes when the
              term ends. Nothing to chase.
            </p>

            {member ? (
              <div className="mt-8 border border-gold/50 bg-white/5 p-5">
                <p className="text-[0.9375rem]">
                  <strong className="font-medium text-gold">
                    You are a member in this demo.
                  </strong>{" "}
                  Open the member library to see the unlocked view, or flip the
                  switch at the bottom to see it locked again.
                </p>
              </div>
            ) : null}
          </div>

          <div>
            <p className="eyebrow text-ivory/50">Choose a plan</p>
            <p className="mt-3 text-[0.8125rem] text-ivory/55">
              Cards accepted worldwide. Renewals and expiry are handled for you.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {plans.map((p, i) => {
                const on = picked === i;
                return (
                  <button
                    key={p.name}
                    onClick={() => setPicked(i)}
                    className={`flex flex-col items-start gap-2 border p-5 text-left transition-colors ${on ? "border-gold bg-white/5" : "border-white/15 hover:border-white/35"}`}
                  >
                    <span className="flex w-full items-center justify-between">
                      <span className="eyebrow text-ivory/60">{p.name}</span>
                      {p.best ? (
                        <span className="bg-gold px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-navy">
                          Best value
                        </span>
                      ) : null}
                    </span>
                    <span className="font-display text-[1.9rem] leading-none text-ivory">
                      {p.price}
                    </span>
                    <span className="text-[0.8125rem] text-ivory/60">
                      {p.note}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={pay}
              disabled={state === "paying"}
              className="mt-6 inline-flex items-center bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors hover:bg-gold-2 active:translate-y-px disabled:opacity-70"
            >
              {state === "paying" ? "Opening checkout" : "Join now"}
            </button>
            <p className="mt-3 text-[0.75rem] text-ivory/45">
              Demo only. No card is taken and no money moves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
