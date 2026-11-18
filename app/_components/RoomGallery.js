"use client";

import { useEffect, useRef, useState } from "react";
import Art from "./Art";
import Motif from "./Motif";
import { PICTURES } from "@/app/_lib/pictures";

const AUTO_MS = 4500;
const pad = (n) => String(n).padStart(2, "0");

// Full-bleed scroll-snap gallery with a 01 / 05 counter, arrows,
// mouse drag and arrow-key support.
export default function RoomGallery({ rooms }) {
  const scroller = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const [active, setActive] = useState(0);

  const offsets = () => {
    const el = scroller.current;
    const kids = Array.from(el.children);
    const base = kids[0].offsetLeft;
    return kids.map((k) => k.offsetLeft - base);
  };

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const offs = offsets();
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) {
        setActive(offs.length - 1);
        return;
      }
      let best = 0;
      let bestD = Infinity;
      offs.forEach((o, i) => {
        const d = Math.abs(o - el.scrollLeft);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Auto-advance. Pauses on hover, drag, touch/wheel/keys (7s), when the
  // tab is hidden, when the gallery is off-screen, and with reduced motion.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let inView = false;
    let hovered = false;
    let quietUntil = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    const enter = () => {
      hovered = true;
    };
    const leave = () => {
      hovered = false;
    };
    const touch = () => {
      quietUntil = Date.now() + 7000;
    };
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("touchstart", touch, { passive: true });
    el.addEventListener("wheel", touch, { passive: true });
    el.addEventListener("keydown", touch);
    const id = setInterval(() => {
      if (
        document.hidden ||
        !inView ||
        hovered ||
        drag.current.down ||
        Date.now() < quietUntil
      )
        return;
      const offs = offsets();
      const max = el.scrollWidth - el.clientWidth;
      let cur = 0;
      offs.forEach((o, i) => {
        if (Math.abs(o - el.scrollLeft) < Math.abs(offs[cur] - el.scrollLeft))
          cur = i;
      });
      const next = el.scrollLeft >= max - 4 ? 0 : cur + 1;
      el.scrollTo({ left: offs[next], behavior: "smooth" });
    }, AUTO_MS);
    return () => {
      clearInterval(id);
      io.disconnect();
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      el.removeEventListener("touchstart", touch);
      el.removeEventListener("wheel", touch);
      el.removeEventListener("keydown", touch);
    };
  }, []);

  const go = (i) => {
    const el = scroller.current;
    const n = rooms.length;
    const idx = Math.max(0, Math.min(n - 1, i));
    el.scrollTo({ left: offsets()[idx], behavior: "smooth" });
  };

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = scroller.current;
    drag.current = {
      down: true,
      x: e.clientX,
      left: el.scrollLeft,
      moved: false,
    };
    el.classList.add("is-dragging");
    el.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 3) d.moved = true;
    scroller.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    const d = drag.current;
    if (!d.down) return;
    d.down = false;
    const el = scroller.current;
    el.classList.remove("is-dragging");
    const offs = offsets();
    let best = 0;
    offs.forEach((o, i) => {
      if (Math.abs(o - el.scrollLeft) < Math.abs(offs[best] - el.scrollLeft))
        best = i;
    });
    go(best);
  };

  const onKey = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  const arrow =
    "grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-char disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-cream";

  return (
    <div>
      <div className='mx-auto mb-8 flex max-w-6xl items-end justify-between px-6'>
        <div className='flex items-baseline gap-3 font-display'>
          <span
            key={active}
            className='gal-num text-7xl leading-none text-cream sm:text-8xl'
          >
            {pad(active + 1)}
          </span>
          <span className='text-2xl text-cream/40'>/ {pad(rooms.length)}</span>
        </div>
        <div className='flex gap-3'>
          <button
            type='button'
            aria-label='Previous room'
            disabled={active === 0}
            onClick={() => go(active - 1)}
            className={arrow}
          >
            <svg
              viewBox='0 0 24 24'
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.6'
              aria-hidden='true'
            >
              <path d='M20 12H4m6-6-6 6 6 6' />
            </svg>
          </button>
          <button
            type='button'
            aria-label='Next room'
            disabled={active === rooms.length - 1}
            onClick={() => go(active + 1)}
            className={arrow}
          >
            <svg
              viewBox='0 0 24 24'
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.6'
              aria-hidden='true'
            >
              <path d='M4 12h16m-6-6 6 6-6 6' />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        tabIndex={0}
        role='region'
        aria-label='Rooms gallery'
        onKeyDown={onKey}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className='gal no-scrollbar flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto pb-2 outline-none'
      >
        {rooms.map((r, i) => (
          <figure
            key={r.title}
            draggable={false}
            className='w-[80vw] flex-none snap-start select-none sm:w-[46vw] lg:w-[34rem]'
          >
            <Art
              tones={r.tones}
              pic={`room-${r.kind}`}
              sizes='(min-width: 1024px) 34rem, 80vw'
              className='aspect-[4/5] w-full rounded-[1.25rem]'
            >
              {!PICTURES[`room-${r.kind}`] && <Motif kind={r.kind} />}
              <span className='absolute left-5 top-5 font-display text-xl text-cream/70'>
                {pad(i + 1)}
              </span>
            </Art>
            <figcaption className='mt-5 flex items-baseline justify-between gap-6 text-cream'>
              <span className='font-display text-3xl'>{r.title}</span>
              <span className='max-w-[15rem] text-right font-body text-sm text-cream/60'>
                {r.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className='mx-auto mt-10 max-w-6xl px-6'>
        <div className='h-px w-full bg-cream/15'>
          <div
            className='h-px bg-mustard transition-all duration-500'
            style={{ width: `${((active + 1) / rooms.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
