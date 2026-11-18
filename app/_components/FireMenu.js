"use client";

import { useState } from "react";
import Link from "next/link";
import Art from "./Art";

export default function FireMenu({ menu }) {
  const [tab, setTab] = useState(1);
  const [hover, setHover] = useState(0);
  const section = menu[tab];

  function pick(i) {
    setTab(i);
    setHover(0);
  }

  return (
    <div>
      {/* Tabs with a sliding highlight */}
      <div
        role='tablist'
        className='relative mb-12 grid max-w-xl grid-cols-3 border border-char/15'
      >
        <span
          aria-hidden='true'
          className='absolute inset-y-0 left-0 w-1/3 bg-char transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]'
          style={{ transform: `translateX(${tab * 100}%)` }}
        />
        {menu.map((s, i) => (
          <button
            key={s.category}
            type='button'
            role='tab'
            aria-selected={tab === i}
            onClick={() => pick(i)}
            className={`relative z-10 px-3 py-3.5 font-body text-sm transition-colors duration-300 ${
              tab === i ? "text-cream" : "text-char/70 hover:text-char"
            }`}
          >
            {s.category}
          </button>
        ))}
      </div>

      <div className='grid items-start gap-14 lg:grid-cols-[1.15fr_1fr]'>
        <ol key={section.category} className='menu-in'>
          {section.items.map((it, i) => {
            const on = hover === i;
            return (
              <li
                key={it.name}
                onMouseEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                tabIndex={0}
                className='group border-b border-char/12 py-6 outline-none first:pt-0'
              >
                <div className='flex items-baseline gap-4'>
                  <span className='font-body text-xs tabular-nums text-smoke'>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className={`font-display text-3xl leading-tight transition-all duration-300 sm:text-4xl ${
                      on ? "translate-x-2 text-ember" : ""
                    }`}
                  >
                    {it.name}
                  </p>
                  <span className='mb-1.5 hidden flex-1 border-b border-dotted border-char/30 sm:block' />
                  <span className='ml-auto font-body text-base tabular-nums sm:ml-0'>
                    ${it.price}
                  </span>
                </div>
                <p
                  className={`mt-2 max-w-md pl-8 font-body text-[15px] leading-relaxed transition-colors duration-300 ${
                    on ? "text-char/80" : "text-char/50"
                  }`}
                >
                  {it.desc}
                </p>
              </li>
            );
          })}
        </ol>

        {/* Preview plate, desktop only */}
        <div className='sticky top-28 hidden lg:block'>
          <div className='relative aspect-[4/5] overflow-hidden'>
            {section.items.map((it, i) => (
              <div
                key={`${section.category}-${it.name}`}
                data-active={hover === i}
                className='menu-art absolute inset-0'
              >
                <Art
                  tones={it.tones}
                  pic={it.name}
                  plate
                  sizes='40vw'
                  className='h-full w-full'
                />
              </div>
            ))}
            <div className='pointer-events-none absolute inset-0'>
              {section.items.map((it, i) => (
                <div
                  key={it.name}
                  className='absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-6 text-cream transition-opacity duration-500'
                  style={{ opacity: hover === i ? 1 : 0 }}
                >
                  <span className='font-display text-2xl'>{it.name}</span>
                  {it.tag && (
                    <span className='border border-cream/40 px-2.5 py-1 font-body text-[11px] uppercase tracking-[0.15em]'>
                      {it.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-12'>
        <Link
          href='/menu'
          className='group inline-flex items-center gap-3 border-b border-char pb-1 font-body text-sm font-medium'
        >
          See the full menu
          <svg
            viewBox='0 0 24 24'
            className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.8'
            aria-hidden='true'
          >
            <path d='M4 12h16m-6-6 6 6-6 6' />
          </svg>
        </Link>
      </div>
    </div>
  );
}
