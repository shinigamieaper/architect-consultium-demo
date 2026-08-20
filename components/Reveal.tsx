"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) { setShown(true); io.unobserve(e.target); }
      },
      { rootMargin: "0px 0px 20% 0px", threshold: 0 },
    );
    io.observe(el);
    const t = window.setTimeout(() => setShown(true), 1500);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, []);

  return (
    <div ref={ref} data-in={shown ? "true" : "false"} style={{ transitionDelay: `${delay}ms` }} className={`rv ${className}`}>
      {children}
    </div>
  );
}
