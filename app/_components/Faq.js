"use client";

import { useState } from "react";

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className='border-t border-char/15'>
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div key={it.q} className='border-b border-char/15'>
            <h3>
              <button
                type='button'
                aria-expanded={on}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(on ? -1 : i)}
                className='group flex w-full items-center justify-between gap-6 py-6 text-left'
              >
                <span
                  className={`font-display text-2xl transition-colors duration-300 sm:text-3xl ${
                    on ? "text-ember" : "group-hover:text-ember"
                  }`}
                >
                  {it.q}
                </span>
                <span
                  className={`relative h-9 w-9 flex-none rounded-full border transition-colors duration-300 ${
                    on
                      ? "border-ember bg-ember text-cream"
                      : "border-char/30 group-hover:border-char"
                  }`}
                >
                  <span className='absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 bg-current' />
                  <span
                    className={`absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
                      on ? "scale-y-0" : ""
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div id={`faq-${i}`} data-open={on} className='acc-panel'>
              <div className='overflow-hidden'>
                <p className='max-w-2xl pb-7 font-body leading-relaxed text-char/65'>
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
