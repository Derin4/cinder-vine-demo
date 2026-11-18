import Link from "next/link";
import {
  menu,
  timeSlots,
  availability,
  STORY,
  WEEK,
  ROOMS,
  QUOTES,
  FAQS,
} from "@/app/_lib/data";
import Reveal from "@/app/_components/Reveal";
import CountUp from "@/app/_components/CountUp";
import Embers from "@/app/_components/Embers";
import HeroArch from "@/app/_components/HeroArch";
import HeroReserve from "@/app/_components/HeroReserve";
import ScrollWords from "@/app/_components/ScrollWords";
import WeekPanels from "@/app/_components/WeekPanels";
import FireMenu from "@/app/_components/FireMenu";
import RoomGallery from "@/app/_components/RoomGallery";
import QuoteStage from "@/app/_components/QuoteStage";
import Faq from "@/app/_components/Faq";

const TOTAL_TABLES = 8;
const tablesLeft = Object.values(availability).reduce((a, b) => a + b, 0);

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`mb-5 font-body text-xs uppercase tracking-[0.3em] ${
        light ? "text-mustard" : "text-ember"
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className='relative -mt-20 flex min-h-[calc(100svh-3rem)] flex-col justify-center overflow-x-clip bg-char pb-24 pt-20 text-cream'>
        <div className='absolute inset-0 overflow-hidden'>
          <div
            aria-hidden='true'
            className='glow absolute -bottom-32 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2'
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(226,103,43,.45) 0%, rgba(122,40,40,.25) 40%, transparent 70%)",
            }}
          />
          <div
            aria-hidden='true'
            className='absolute inset-0'
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 80% 20%, rgba(59,31,43,.9), transparent 70%)",
            }}
          />
          <Embers count={30} />
        </div>
        <div className='grain pointer-events-none absolute inset-0' />

        <div className='relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-8 md:grid-cols-12'>
          <div className='md:col-span-7'>
            <p className='mb-6 flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-mustard'>
              <span className='pulse-dot inline-block h-2 w-2 rounded-full bg-ember' />
              Wood-fired · Old Mill District
            </p>
            <h1 className='font-display text-[clamp(3.6rem,10.5vw,9rem)] leading-[0.9]'>
              Dinner,
              <br />
              by the{" "}
              <em className='fire-text pr-3 not-italic md:italic'>fire.</em>
            </h1>
            <p className='mt-8 max-w-md font-body text-lg leading-relaxed text-cream/75'>
              No gas line, no shortcuts. Everything at Cinder &amp; Vine is
              cooked over oak and ember in the middle of the room.
            </p>
            <div className='mt-10 flex flex-wrap items-center gap-x-8 gap-y-4'>
              <Link
                href='/reservations'
                className='bg-mustard px-8 py-4 font-body text-sm font-medium text-char transition-colors hover:bg-cream'
              >
                Reserve a table
              </Link>
              <Link
                href='/menu'
                className='group inline-flex items-center gap-3 font-body text-sm text-cream'
              >
                <span className='border-b border-cream/40 pb-0.5 transition-colors group-hover:border-cream'>
                  See the menu
                </span>
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

          <HeroArch />
        </div>

        {/* Reservation bar straddling the hero edge */}
        <div className='absolute inset-x-0 bottom-0 z-20 translate-y-1/2'>
          <div className='mx-auto max-w-6xl px-6'>
            <HeroReserve />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ STORY */}
      <section className='bg-cream pb-28 pt-52 sm:pb-36 sm:pt-44'>
        <div className='mx-auto max-w-6xl px-6'>
          <Eyebrow>Our approach</Eyebrow>
          <ScrollWords
            parts={STORY}
            className='max-w-5xl font-display text-[clamp(2.1rem,5.4vw,4.6rem)] leading-[1.12]'
          />
          <Reveal delay={100} className='mt-12'>
            <Link
              href='/about'
              className='group inline-flex items-center gap-3 border-b border-char pb-1 font-body text-sm font-medium'
            >
              Read our story
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
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ THE WEEK */}
      <section className='grain relative bg-char py-24 text-cream sm:py-32'>
        <div className='relative mx-auto max-w-6xl px-6'>
          <Reveal className='mb-14 flex flex-wrap items-end justify-between gap-6'>
            <div>
              <Eyebrow light>The week at the hearth</Eyebrow>
              <h2 className='font-display text-5xl leading-none sm:text-7xl'>
                A reason for every <em className='fire-text pr-2'>night.</em>
              </h2>
            </div>
            <p className='max-w-xs font-body text-sm text-cream/55'>
              Mondays the fire rests. The other six nights it does something
              different.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <WeekPanels items={WEEK} />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ MENU */}
      <section className='bg-cream py-24 sm:py-32'>
        <div className='mx-auto max-w-6xl px-6'>
          <Reveal className='mb-12'>
            <Eyebrow>From the menu</Eyebrow>
            <h2 className='font-display text-5xl leading-none sm:text-7xl'>
              What the fire is doing.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <FireMenu menu={menu} />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ ROOMS */}
      <section className='grain relative overflow-hidden bg-[#14100e] py-24 text-cream sm:py-32'>
        <div className='relative'>
          <Reveal className='mx-auto mb-14 max-w-6xl px-6'>
            <Eyebrow light>Inside</Eyebrow>
            <h2 className='font-display text-5xl leading-none sm:text-7xl'>
              Five rooms, one <em className='fire-text pr-2'>fire.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <RoomGallery rooms={ROOMS} />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ TONIGHT */}
      <section className='bg-bone py-24 sm:py-32'>
        <div className='mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]'>
          <Reveal>
            <Eyebrow>Tonight</Eyebrow>
            <h2 className='font-display text-5xl leading-none sm:text-7xl'>
              Still a table or two.
            </h2>
            <p className='mt-6 max-w-sm font-body leading-relaxed text-char/65'>
              Pick a time and we will carry it into the booking form. Parties of
              seven or more, please call.
            </p>
            <div className='mt-10 flex items-end gap-4'>
              <span className='font-display text-8xl leading-[0.8]'>
                <CountUp to={tablesLeft} />
              </span>
              <span className='pb-1 font-body text-sm text-char/60'>
                of {TOTAL_TABLES * timeSlots.length} table-times
                <br />
                still open tonight
              </span>
            </div>
            <p className='mt-6 font-body text-xs text-char/40'>
              Illustrative availability for the demo.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
              {timeSlots.map((t) => {
                const left = availability[t];
                const full = left === 0;
                const low = left > 0 && left <= 2;
                const base =
                  "group relative flex flex-col justify-between border px-4 py-5 transition-all duration-300";
                if (full) {
                  return (
                    <div
                      key={t}
                      className={`${base} cursor-not-allowed border-char/10 text-char/30`}
                    >
                      <span className='font-display text-3xl line-through'>
                        {t.replace(" ", " ")}
                      </span>
                      <span className='mt-6 font-body text-xs'>Full</span>
                    </div>
                  );
                }
                return (
                  <Link
                    key={t}
                    href={`/reservations?time=${encodeURIComponent(t)}`}
                    className={`${base} border-char/25 bg-cream/60 hover:-translate-y-1 hover:border-char hover:bg-char hover:text-cream hover:shadow-xl`}
                  >
                    <span className='font-display text-3xl'>
                      {t.replace(" ", " ")}
                    </span>
                    <span
                      className={`mt-6 flex items-center gap-2 font-body text-xs ${
                        low
                          ? "text-ember"
                          : "text-char/60 group-hover:text-cream/70"
                      }`}
                    >
                      {low && (
                        <span className='pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-ember' />
                      )}
                      {left === 1 ? "Last table" : `${left} left`}
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ QUOTES */}
      <section className='grain relative overflow-hidden bg-wine py-24 text-cream sm:py-32'>
        <div
          aria-hidden='true'
          className='absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full'
          style={{
            background:
              "radial-gradient(circle, rgba(226,103,43,.22), transparent 65%)",
          }}
        />
        <div className='relative mx-auto max-w-6xl px-6'>
          <QuoteStage quotes={QUOTES} />
        </div>
      </section>

      {/* ------------------------------------------------ FAQ */}
      <section className='bg-cream py-24 sm:py-32'>
        <div className='mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]'>
          <Reveal>
            <Eyebrow>Good to know</Eyebrow>
            <h2 className='font-display text-5xl leading-none sm:text-7xl'>
              Before you come.
            </h2>
            <p className='mt-6 max-w-xs font-body leading-relaxed text-char/65'>
              Still unsure? Call{" "}
              <a className='underline underline-offset-4' href='tel:5550184402'>
                (555) 018-4402
              </a>{" "}
              and a person will answer.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
