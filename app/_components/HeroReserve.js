"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { timeSlots, availability } from "@/app/_lib/data";

const field =
  "w-full bg-transparent font-body text-base text-char outline-none placeholder:text-char/40";

export default function HeroReserve() {
  const router = useRouter();
  const [party, setParty] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const q = new URLSearchParams();
    q.set("party", party);
    if (date) q.set("date", date);
    if (time) q.set("time", time);
    router.push(`/reservations?${q.toString()}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className='grid gap-px overflow-hidden bg-char/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,.6)] sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1.2fr_auto]'
    >
      <label className='block bg-cream px-5 py-4'>
        <span className='mb-1 block font-body text-[11px] uppercase tracking-[0.2em] text-smoke'>
          Party size
        </span>
        <select
          value={party}
          onChange={(e) => setParty(e.target.value)}
          className={field}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </label>
      <label className='block bg-cream px-5 py-4'>
        <span className='mb-1 block font-body text-[11px] uppercase tracking-[0.2em] text-smoke'>
          Date
        </span>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={field}
        />
      </label>
      <label className='block bg-cream px-5 py-4'>
        <span className='mb-1 block font-body text-[11px] uppercase tracking-[0.2em] text-smoke'>
          Time
        </span>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={field}
        >
          <option value=''>Any time</option>
          {timeSlots.map((t) => (
            <option key={t} value={t} disabled={availability[t] === 0}>
              {t}
              {availability[t] === 0 ? " · full" : ""}
            </option>
          ))}
        </select>
      </label>
      <button
        type='submit'
        className='group flex items-center justify-center gap-3 bg-char px-8 py-5 font-body text-sm font-medium text-cream transition-colors hover:bg-ember sm:col-span-2 lg:col-span-1'
      >
        Find a table
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
      </button>
    </form>
  );
}
