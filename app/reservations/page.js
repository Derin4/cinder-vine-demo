import { Suspense } from "react";
import ReservationFromUrl from "@/app/_components/ReservationFromUrl";
import { hours } from "@/app/_lib/data";

export const metadata = { title: "Reservations — Cinder & Vine" };

export default function ReservationsPage() {
  return (
    <div className='mx-auto grid max-w-6xl gap-14 px-6 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]'>
      <div>
        <p className='mb-5 font-body text-xs uppercase tracking-[0.3em] text-ember'>
          Reservations
        </p>
        <h1 className='font-display text-6xl leading-[0.95] sm:text-7xl'>
          Reserve a table.
        </h1>
        <p className='mt-6 max-w-sm font-body leading-relaxed text-char/65'>
          We hold every table for fifteen minutes past the reservation time.
          Parties of seven or more, please call us directly.
        </p>

        <div className='mt-10 border-l-2 border-mustard pl-6'>
          <p className='mb-3 font-body text-xs uppercase tracking-[0.25em] text-smoke'>
            Hours
          </p>
          <div className='space-y-1.5 font-body text-sm text-char/75'>
            {hours.map((h) => (
              <p key={h.day} className='flex justify-between gap-6'>
                <span>{h.day}</span>
                <span className='text-char/55'>{h.time}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-bone/60 p-6 sm:p-10'>
        <Suspense fallback={null}>
          <ReservationFromUrl />
        </Suspense>
      </div>
    </div>
  );
}
