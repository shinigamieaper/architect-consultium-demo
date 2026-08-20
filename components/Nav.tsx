"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useDemo } from "./DemoState";

const links = [
  { href: "/#programmes", label: "Programmes" },
  { href: "/#speaking", label: "Speaking" },
  { href: "/#books", label: "Books" },
  { href: "/#writing", label: "Journal" },
  { href: "/library", label: "Library" },
];

export default function Nav() {
  const { member } = useDemo();
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="shell flex min-h-[76px] items-center justify-between gap-6">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.875rem] text-ivory/70 transition-colors hover:text-ivory"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href={member ? "/library" : "/#join"}
          className="inline-flex items-center bg-gold px-5 py-2.5 text-[0.8125rem] font-medium tracking-wide text-navy transition-colors hover:bg-gold-2 active:translate-y-px"
        >
          {member ? "My library" : "Join"}
        </Link>
      </div>
    </header>
  );
}
