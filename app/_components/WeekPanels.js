"use client";

import { useState } from "react";
import Art from "./Art";

// Expanding panels. Hover, focus or tap opens one; the rest fold to a spine.
export default function WeekPanels({ items }) {
  const [active, setActive] = useState(3);

  return (
    <div className='flex flex-col gap-3 lg:flex-row lg:gap-4'>
      {items.map((it, i) => {
        const on = active === i;
        return (
          <button
            type='button'
            key={it.title}
            data-active={on}
            aria-expanded={on}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className='wk-panel'
          >
            <div
              className={`absolute inset-0 transition-transform duration-[1400ms] ease-out ${
                on ? "scale-100" : "scale-110"
              }`}
            >
              <Art
                tones={it.tones}
                pic={it.pic}
                sizes='(min-width: 1024px) 36rem, 100vw'
                className='h-full w-full'
              />
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25' />
            <div
              aria-hidden='true'
              className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${
                on ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* mobile header row */}
            <div className='relative flex h-[5.25rem] items-center justify-between px-6 lg:hidden'>
              <div>
                <p className='font-body text-[11px] uppercase tracking-[0.25em] text-cream/70'>
                  {it.day}
                </p>
                <p className='font-display text-3xl leading-none'>{it.title}</p>
              </div>
              <span className='font-display text-2xl text-cream/60'>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* desktop spine */}
            <div className='wk-vert absolute inset-0 hidden flex-col items-center justify-between py-7 lg:flex'>
              <span className='font-display text-2xl text-cream/60'>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className='font-display text-3xl [writing-mode:vertical-rl]'
                style={{ transform: "rotate(180deg)" }}
              >
                {it.title}
              </span>
            </div>

            {/* details */}
            <div className='wk-detail relative px-6 pb-7 pt-2 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-9 lg:pb-9'>
              <p className='mb-2 hidden font-body text-[11px] uppercase tracking-[0.25em] text-mustard lg:block'>
                {it.day}
              </p>
              <p className='mb-3 hidden font-display text-5xl leading-none lg:block'>
                {it.title}
              </p>
              <p className='max-w-md font-body text-[15px] leading-relaxed text-cream/85'>
                {it.body}
              </p>
              <p className='mt-4 inline-block border border-cream/30 px-3 py-1 font-body text-xs tracking-wide text-cream/90'>
                {it.meta}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
