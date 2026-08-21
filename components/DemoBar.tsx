"use client";

import { useDemo } from "./DemoState";

export default function DemoBar() {
  const { member, setMember } = useDemo();
  return (
    <div className="fixed inset-x-[calc(var(--frame)+0.75rem)] bottom-[calc(var(--frame)+0.75rem)] z-40 ml-auto flex w-fit max-w-[calc(100vw-2.5rem)] flex-wrap items-center gap-3 rounded-full border border-white/15 bg-navy/95 px-3 py-2 text-ivory shadow-lg backdrop-blur">
      <span className="eyebrow pl-2 text-ivory/50">Demo</span>
      <div className="flex overflow-hidden rounded-full border border-white/15">
        <button
          onClick={() => setMember(false)}
          className={`px-4 py-2.5 text-[0.8125rem] transition-colors ${!member ? "bg-gold text-navy" : "text-ivory/70 hover:text-ivory"}`}
        >
          Not a member
        </button>
        <button
          onClick={() => setMember(true)}
          className={`px-4 py-2.5 text-[0.8125rem] transition-colors ${member ? "bg-gold text-navy" : "text-ivory/70 hover:text-ivory"}`}
        >
          Member
        </button>
      </div>
      <span className="hidden pr-2 text-[0.75rem] text-ivory/50 sm:block">
        Flip this to see what each visitor sees
      </span>
    </div>
  );
}
