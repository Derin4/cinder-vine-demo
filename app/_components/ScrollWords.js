"use client";

import { useEffect, useRef } from "react";

// Words light up one by one as the block scrolls through the viewport.
// Opacity is written straight to the elements (no re-render per frame).
export default function ScrollWords({ parts, className = "" }) {
  const rootRef = useRef(null);
  const nodes = useRef([]);

  // Flatten into words and chips, keeping order.
  const items = [];
  parts.forEach((p) => {
    if (typeof p === "string") {
      p.split(" ").forEach((w) => w && items.push({ word: w }));
    } else {
      items.push({ chip: p.chip });
    }
  });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = nodes.current;
    const n = els.length;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(
        1,
        Math.max(0, (vh * 0.85 - rect.top) / (rect.height + vh * 0.25)),
      );
      for (let i = 0; i < n; i++) {
        const t = Math.min(1, Math.max(0, (p * (n + 5) - i) / 5));
        if (els[i]) els[i].style.opacity = String(0.14 + 0.86 * t);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <p ref={rootRef} className={className}>
      {items.map((it, i) =>
        it.word ? (
          <span
            key={i}
            ref={(el) => {
              nodes.current[i] = el;
            }}
            className='inline-block pr-[0.25em] will-change-[opacity]'
          >
            {it.word}
          </span>
        ) : (
          <span
            key={i}
            ref={(el) => {
              nodes.current[i] = el;
            }}
            aria-hidden='true'
            className='relative -top-[0.06em] mr-[0.25em] inline-block h-[0.8em] w-[1.9em] rounded-full align-middle will-change-[opacity]'
            style={{
              background: `linear-gradient(120deg, ${it.chip[0]}, ${it.chip[1]})`,
            }}
          />
        ),
      )}
    </p>
  );
}
