import { menu } from "@/app/_lib/data";
import Art from "@/app/_components/Art";
import Embers from "@/app/_components/Embers";
import Reveal from "@/app/_components/Reveal";
import MenuNav from "@/app/_components/MenuNav";

export const metadata = { title: "Menu — Cinder & Vine" };

const slug = (s) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function MenuPage() {
  const sections = menu.map((m) => ({
    id: slug(m.category),
    label: m.category,
  }));

  return (
    <>
      <section className='grain relative overflow-hidden bg-char pb-16 pt-24 text-cream sm:pb-24 sm:pt-32'>
        <div
          aria-hidden='true'
          className='absolute -bottom-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2'
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(226,103,43,.35), transparent 70%)",
          }}
        />
        <Embers count={18} />
        <div className='relative mx-auto max-w-6xl px-6'>
          <p className='mb-5 font-body text-xs uppercase tracking-[0.3em] text-mustard'>
            Tonight&apos;s menu
          </p>
          <h1 className='font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92]'>
            The <em className='fire-text pr-2'>menu.</em>
          </h1>
          <p className='mt-6 max-w-md font-body leading-relaxed text-cream/65'>
            Subject to change with the season, the fire, and what looked best at
            the market this week. Ask your server what&apos;s not on here yet.
          </p>
        </div>
      </section>

      <MenuNav sections={sections} />

      <div className='mx-auto max-w-6xl px-6 py-16 sm:py-24'>
        {menu.map((section, si) => (
          <section
            key={section.category}
            id={slug(section.category)}
            className='scroll-mt-40 border-b border-char/10 pb-16 last:border-0 sm:pb-24 [&:not(:first-child)]:pt-16 sm:[&:not(:first-child)]:pt-24'
          >
            <Reveal className='mb-12 flex items-end gap-5'>
              <span className='font-display text-7xl leading-[0.75] text-char/15 sm:text-9xl'>
                {String(si + 1).padStart(2, "0")}
              </span>
              <h2 className='font-display text-4xl leading-none sm:text-6xl'>
                {section.category}
              </h2>
            </Reveal>

            <div className='grid gap-x-14 gap-y-12 md:grid-cols-2'>
              {section.items.map((item, i) => (
                <Reveal key={item.name} delay={(i % 2) * 90}>
                  <article className='group flex gap-6'>
                    <Art
                      tones={item.tones}
                      pic={item.name}
                      plate
                      sizes='9rem'
                      className='h-28 w-28 flex-none rounded-full shadow-lg transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105 sm:h-36 sm:w-36'
                    />
                    <div className='min-w-0 flex-1'>
                      <div className='flex items-baseline justify-between gap-4'>
                        <h3 className='font-display text-3xl leading-tight transition-colors duration-300 group-hover:text-ember'>
                          {item.name}
                        </h3>
                        <p className='font-body text-base tabular-nums'>
                          ${item.price}
                        </p>
                      </div>
                      {item.tag && (
                        <p className='mt-1.5 inline-block border border-char/25 px-2 py-0.5 font-body text-[10px] uppercase tracking-[0.15em] text-char/60'>
                          {item.tag}
                        </p>
                      )}
                      <p className='mt-2 font-body text-[15px] leading-relaxed text-char/60'>
                        {item.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <p className='mt-4 max-w-md font-body text-xs leading-relaxed text-char/45'>
          Everything is cooked on one shared hearth. Please tell us about any
          allergies when you book. Demo menu: dishes and prices are fictitious.
        </p>
      </div>
    </>
  );
}
