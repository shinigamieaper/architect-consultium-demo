import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    head: "Explore",
    items: [
      { label: "About", href: "/about" },
      { label: "Programmes", href: "/programmes/purpose-academy" },
      { label: "Speaking", href: "/speaking" },
      { label: "Books", href: "/books" },
    ],
  },
  {
    head: "Members",
    items: [
      { label: "Journal", href: "/journal" },
      { label: "Member library", href: "/library" },
      { label: "Join", href: "/#join" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="ground">
      <div className="stage px-[clamp(1.25rem,4vw,3.25rem)] py-[clamp(2.5rem,5vw,4rem)] text-ivory/60">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[34ch] text-[0.875rem]">
              Books, writing and leadership programmes, in one place.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.head}>
              <p className="eyebrow mb-4 text-ivory/55">{c.head}</p>
              <ul className="flex flex-col gap-2 text-[0.875rem]">
                {c.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="transition-colors hover:text-ivory"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[0.75rem]">
          <span>The Architect Consultium</span>
          <span className="text-gold-2">
            Demo built by Growveloper. Nothing here takes payment.
          </span>
        </div>
      </div>
    </footer>
  );
}
