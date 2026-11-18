import Link from "next/link";
import { hours } from "@/app/_lib/data";
import Embers from "./Embers";

export default function Footer() {
  return (
    <footer className='bg-char text-cream'>
      {/* Closing call to action */}
      <div className='relative overflow-hidden bg-wine'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 bottom-0 h-3/4'
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(226,103,43,.55), transparent 70%)",
          }}
        />
        <Embers count={16} />
        <div className='relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-32'>
          <p className='mb-5 font-body text-xs uppercase tracking-[0.3em] text-mustard'>
            Tonight, 5:30 until late
          </p>
          <h2 className='font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95]'>
            Pull up a <em className='fire-text pr-2'>chair.</em>
          </h2>
          <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/reservations'
              className='bg-mustard px-8 py-4 font-body text-sm font-medium text-char transition-colors hover:bg-cream'
            >
              Reserve a table
            </Link>
            <a
              href='tel:5550184402'
              className='border border-cream/30 px-8 py-4 font-body text-sm transition-colors hover:border-cream hover:bg-cream/5'
            >
              (555) 018-4402
            </a>
          </div>
        </div>
      </div>

      <div className='mx-auto grid max-w-6xl gap-10 px-6 py-16 font-body text-sm text-cream/60 sm:grid-cols-2 lg:grid-cols-4'>
        <div>
          <p className='mb-3 font-display text-2xl text-cream'>
            Cinder &amp; Vine
          </p>
          <p>118 Millrace Way</p>
          <p>Old Mill District</p>
          <p className='mt-3'>hello@cinderandvine.example</p>
        </div>
        <div>
          <p className='mb-3 text-cream'>Hours</p>
          <div className='space-y-1'>
            {hours.map((h) => (
              <p key={h.day}>
                {h.day}: {h.time}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3 text-cream'>Explore</p>
          <div className='space-y-1'>
            <p>
              <Link className='hover:text-cream' href='/menu'>
                Menu
              </Link>
            </p>
            <p>
              <Link className='hover:text-cream' href='/reservations'>
                Reservations
              </Link>
            </p>
            <p>
              <Link className='hover:text-cream' href='/about'>
                Our Story
              </Link>
            </p>
            <p>
              <Link className='hover:text-cream' href='/contact'>
                Visit
              </Link>
            </p>
          </div>
        </div>
        <div>
          <p className='mb-3 text-cream'>Notes</p>
          <p>
            Cinder &amp; Vine is a fictitious restaurant. This is a demo site
            built for the MyClickAid gallery. Menu, hours, and reservation
            availability are illustrative only.
          </p>
        </div>
      </div>
      <div className='border-t border-cream/10 px-6 py-4 text-center font-body text-xs text-cream/40'>
        &copy; {new Date().getFullYear()} Cinder &amp; Vine — demo site
      </div>
    </footer>
  );
}
