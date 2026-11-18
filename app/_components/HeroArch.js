import { menu } from "@/app/_lib/data";
import Art from "./Art";
import Flame from "./Flame";

const dish = (name) =>
  menu.flatMap((c) => c.items).find((i) => i.name === name);

// A plate that floats beside the arch. It uses the dish photo from
// PICTURES (keyed by dish name) and falls back to the illustrated plate.
function FloatingPlate({ name, className, float, chipAlign = "center" }) {
  const d = dish(name);
  return (
    <div className={`absolute ${className}`}>
      <div className={float}>
        <div className='relative'>
          <Art
            tones={d.tones}
            pic={d.name}
            plate
            sizes='(min-width: 768px) 14rem, 40vw'
            className='aspect-square w-full rounded-full border border-cream/20 shadow-[0_30px_60px_-10px_rgba(0,0,0,.75)]'
          />
          <span
            className={`absolute -bottom-3 whitespace-nowrap border border-cream/20 bg-char/85 px-3 py-1.5 font-body text-[11px] tracking-wide text-cream backdrop-blur ${
              chipAlign === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
            }`}
          >
            {d.name} <span className='ml-1 text-mustard'>${d.price}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HeroArch() {
  return (
    <div className='relative mx-auto w-[min(66vw,22rem)] md:col-span-5 md:w-full md:max-w-sm md:justify-self-end'>
      <div
        aria-hidden='true'
        className='absolute -inset-4 rounded-t-full border border-mustard/25 md:-inset-5'
      />
      {/* The arch and its live flame always stay */}
      <div className='grain relative aspect-[3/4.1] overflow-hidden rounded-t-full border border-cream/15 bg-gradient-to-b from-[#0f0c0b] via-[#2a1519] to-wine'>
        <div className='hero-arch-glow glow absolute inset-0' />
        <Flame className='absolute bottom-[12%] left-[56%] w-[44%] -translate-x-1/2 drop-shadow-[0_0_40px_rgba(226,103,43,.8)]' />
        <div
          aria-hidden='true'
          className='absolute bottom-[9%] left-[56%] h-3.5 w-[58%] -translate-x-1/2 -rotate-3 rounded-full bg-[#2b1e17]'
        />
        <div
          aria-hidden='true'
          className='absolute bottom-[9%] left-[56%] h-3.5 w-[58%] -translate-x-1/2 rotate-[5deg] rounded-full bg-[#3b2a20]'
        />
      </div>

      {/* Food floats over the arch */}
      <FloatingPlate
        name='Dry-Aged Ribeye'
        float='float-a'
        className='-bottom-6 -left-3 z-10 w-[52%] sm:-left-10 md:-left-16'
      />
      <FloatingPlate
        name='Burrata & Fire-Roasted Tomato'
        float='float-b'
        chipAlign='right'
        className='-right-3 top-[9%] z-10 w-[34%] sm:-right-6 md:-right-2 lg:-right-10'
      />
    </div>
  );
}
