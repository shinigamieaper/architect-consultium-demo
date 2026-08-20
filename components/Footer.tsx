import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-12 text-ivory/60">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[34ch] text-[0.875rem]">
              Books, writing and leadership programmes, in one place.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4 text-ivory/40">Explore</p>
            <ul className="flex flex-col gap-1.5 text-[0.875rem]">
              <li>Programmes</li>
              <li>Books</li>
              <li>Writing</li>
              <li>Member library</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4 text-ivory/40">Membership</p>
            <ul className="flex flex-col gap-1.5 text-[0.875rem]">
              <li>Six months</li>
              <li>One year</li>
              <li>Pay in dollars or naira</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[0.75rem]">
          <span>The Architect Consultium</span>
          <span className="text-gold">
            Demo built by Growveloper. Nothing here takes payment.
          </span>
        </div>
      </div>
    </footer>
  );
}
