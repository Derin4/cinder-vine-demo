"use client";

import { useEffect, useRef, useState } from "react";

const AUTO_MS = 6500;
const pad = (n) => String(n).padStart(2, "0");

// One big quote at a time, crossfading. The progress bar drives the
// auto-advance (its animationend moves to the next quote), so pausing the
// bar pauses the slideshow.
export default function QuoteStage({ quotes }) {
  const [i, setI] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => setReduced(mq.matches);
    const onVis = () => setHidden(document.hidden);
    const raf = requestAnimationFrame(() => {
      onMq();
      onVis();
    });
    mq.addEventListener("change", onMq);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const paused = hovered || hidden || !inView;
  const n = quotes.length;

  return (
    <div
      ref={root}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='mb-10 flex items-center justify-between font-body text-xs uppercase tracking-[0.3em] text-mustard'>
        <span>Guest notes</span>
        <span className='tabular-nums text-cream/50'>
          {pad(i + 1)} / {pad(n)}
        </span>
      </div>

      <div className='grid'>
        {quotes.map((q, idx) => (
          <figure
            key={q.who}
            data-active={i === idx}
            aria-hidden={i !== idx}
            className='q-slide col-start-1 row-start-1'
          >
            <blockquote className='max-w-5xl font-display text-[clamp(1.9rem,4.6vw,3.9rem)] leading-[1.12] text-cream'>
              <span className='mr-1 text-mustard'>&ldquo;</span>
              {q.text}
              <span className='ml-1 text-mustard'>&rdquo;</span>
            </blockquote>
            <figcaption className='mt-8 flex items-center gap-4 font-body text-sm text-cream/70'>
              <span className='h-px w-10 bg-mustard' />
              <span className='text-cream'>{q.who}</span>
              <span>{q.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className='mt-14 grid grid-cols-5 gap-3'>
        {quotes.map((q, idx) => (
          <button
            key={q.who}
            type='button'
            aria-label={`Show note ${idx + 1}`}
            onClick={() => setI(idx)}
            className='group py-3'
          >
            <span className='relative block h-0.5 w-full overflow-hidden bg-cream/20'>
              {idx < i && <span className='absolute inset-0 bg-cream/70' />}
              {idx === i && (
                <span
                  key={`${i}-bar`}
                  data-bar
                  onAnimationEnd={() => setI((v) => (v + 1) % n)}
                  className='absolute inset-0 origin-left bg-mustard'
                  style={
                    reduced
                      ? { transform: "scaleX(1)" }
                      : {
                          animation: `qprog ${AUTO_MS}ms linear forwards`,
                          animationPlayState: paused ? "paused" : "running",
                        }
                  }
                />
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
