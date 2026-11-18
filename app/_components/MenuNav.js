"use client";

import { useEffect, useState } from "react";

// Sticky category chips that follow the section in view.
export default function MenuNav({ sections }) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    els.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label='Menu sections'
      className='sticky top-20 z-30 border-b border-char/10 bg-cream/90 backdrop-blur'
    >
      <div className='no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-3'>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`whitespace-nowrap rounded-full border px-5 py-2 font-body text-sm transition-colors duration-300 ${
              active === s.id
                ? "border-char bg-char text-cream"
                : "border-char/20 text-char/70 hover:border-char/50"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
