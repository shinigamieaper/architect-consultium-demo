"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Monogram } from "./Logo";
import { useDemo } from "./DemoState";

const links = [
  { href: "/about", label: "About" },
  { href: "/programmes/purpose-academy", label: "Programmes" },
  { href: "/speaking", label: "Speaking" },
  { href: "/books", label: "Books" },
  { href: "/journal", label: "Journal" },
  { href: "/library", label: "Library" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const { member } = useDemo();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  /* Over the stage the pills float on glass. Once the dark stage has
     scrolled away they need their own ground to stay readable. */
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellTone = stuck
    ? "border-white/10 bg-navy/92 backdrop-blur-md"
    : "border-white/15 bg-white/8 backdrop-blur-sm";

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 p-[calc(var(--frame)+clamp(0.5rem,1.1vw,1rem))]">
      <div className="pointer-events-auto mx-auto flex max-w-[1400px] items-start justify-between gap-3">
        <Link
          href="/"
          className={`pill border ${shellTone} text-ivory`}
          aria-label="Olabanji Afolabi, home"
        >
          <Monogram className="h-4 w-3.5 shrink-0 text-gold" />
          <span className="eyebrow">Olabanji Afolabi</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav
            className={`hidden items-center rounded-full border p-1 lg:flex ${shellTone}`}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-[0.8125rem] text-ivory/70 transition-colors hover:bg-white/10 hover:text-ivory"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href={member ? "/library" : "/#join"}
            className="pill bg-gold font-medium text-navy hover:bg-gold-2"
          >
            {member ? "My library" : "Join"}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-sheet"
            className={`pill border lg:hidden ${shellTone} text-ivory`}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-sheet"
          className="pointer-events-auto mx-auto mt-2 max-w-[1400px] rounded-3xl border border-white/12 bg-navy/95 p-2 backdrop-blur-md lg:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-[0.9375rem] text-ivory/80 transition-colors hover:bg-white/8 hover:text-ivory"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
