"use client";

import { useMemo, useState } from "react";
import { timeSlots, availability } from "@/app/_lib/data";

const TOTAL_TABLES = 8;

export default function ReservationWidget({
  initialParty = 2,
  initialDate = "",
  initialTime = "",
}) {
  const [party, setParty] = useState(initialParty);
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(null);

  const selectedAvailability = time ? availability[time] : null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!date || !time || selectedAvailability === 0) return;
    setConfirmed({
      code: `CV-${Math.floor(1000 + Math.random() * 9000)}`,
      party,
      date,
      time,
    });
  }

  if (confirmed) {
    return (
      <div className='max-w-lg border border-dashed border-char/30 bg-cream p-8'>
        <p className='mb-2 flex items-center gap-3 font-display text-4xl text-char'>
          <span className='grid h-9 w-9 place-items-center rounded-full bg-ember text-cream'>
            <svg
              viewBox='0 0 24 24'
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.2'
              aria-hidden='true'
            >
              <path d='m5 12 5 5 9-10' />
            </svg>
          </span>
          Table reserved
        </p>
        <p className='font-body text-char/60 mb-6'>
          Confirmation code: <span className='text-char'>{confirmed.code}</span>
        </p>
        <div className='border-l-2 border-mustard pl-5 space-y-1 font-body text-sm text-char/70 mb-6'>
          <p>Party of {confirmed.party}</p>
          <p>
            {confirmed.date} at {confirmed.time}
          </p>
        </div>
        <p className='font-body text-xs text-char/40'>
          This is a demo confirmation — no reservation has actually been made.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-lg'>
      <div className='mb-8'>
        <label className='block font-body text-sm text-char/60 mb-2'>
          Party size
        </label>
        <div className='flex gap-2 flex-wrap'>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <button
              type='button'
              key={n}
              onClick={() => setParty(n)}
              className={`w-10 h-10 font-body text-sm border transition-colors ${
                party === n
                  ? "border-mustard bg-mustard/15 text-char"
                  : "border-smoke/25 text-char/60 hover:border-smoke/50"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <div className='mb-8'>
        <label className='block font-body text-sm text-char/60 mb-2'>
          Date
        </label>
        <input
          type='date'
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className='border border-smoke/25 bg-transparent px-3 py-2 font-body text-sm w-full sm:w-auto'
        />
      </div>

      <div className='mb-8'>
        <p className='font-body text-sm text-char/60 mb-3'>
          Available times{" "}
          <span className='text-char/40'>
            (tables remaining out of {TOTAL_TABLES})
          </span>
        </p>
        <div className='grid grid-cols-4 gap-2'>
          {timeSlots.map((t) => {
            const avail = availability[t];
            const full = avail === 0;
            return (
              <button
                type='button'
                key={t}
                disabled={full}
                onClick={() => setTime(t)}
                className={`relative font-body text-xs px-2 py-3 border transition-colors ${
                  full
                    ? "border-smoke/10 text-char/25 cursor-not-allowed"
                    : time === t
                      ? "border-mustard bg-mustard/15 text-char"
                      : "border-smoke/25 text-char/70 hover:border-smoke/50"
                }`}
              >
                <span className='block'>{t}</span>
                <span className='block text-[10px] mt-1 opacity-70'>
                  {full ? "Full" : `${avail} left`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className='space-y-4 mb-8'>
        <input
          type='text'
          required
          placeholder='Full name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full border border-smoke/25 bg-transparent px-3 py-2.5 font-body text-sm'
        />
        <input
          type='email'
          required
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full border border-smoke/25 bg-transparent px-3 py-2.5 font-body text-sm'
        />
        <input
          type='tel'
          required
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='w-full border border-smoke/25 bg-transparent px-3 py-2.5 font-body text-sm'
        />
      </div>

      <button
        type='submit'
        disabled={!date || !time || selectedAvailability === 0}
        className='w-full sm:w-auto bg-char text-cream font-body text-sm px-8 py-3.5 disabled:opacity-30 hover:bg-char/90 transition-colors'
      >
        Confirm reservation (demo)
      </button>
    </form>
  );
}
