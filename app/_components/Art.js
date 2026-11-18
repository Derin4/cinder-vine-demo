import Image from "next/image";
import { PICTURES } from "@/app/_lib/pictures";

// Illustrated panel. Shows a real photo when PICTURES has one for `pic`,
// otherwise a tone gradient (optionally with a plate drawn on it).
export default function Art({
  tones = ["#5C534A", "#1A1714"],
  pic,
  plate = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  className = "",
  children,
}) {
  const src = pic ? PICTURES[pic] : null;
  return (
    <div
      className={`grain relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(160deg, ${tones[0]} 0%, ${tones[1]} 100%)`,
      }}
    >
      {src ? (
        <Image src={src} alt='' fill sizes={sizes} className='object-cover' />
      ) : plate ? (
        <div
          className='absolute inset-0 grid place-items-center'
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(226,103,43,.22), transparent 70%)",
          }}
        >
          <div
            className='relative aspect-square w-[74%] rounded-full'
            style={{
              background: `radial-gradient(circle at 34% 28%, rgba(255,255,255,.16), transparent 42%), radial-gradient(circle, ${tones[1]} 0 60%, rgba(245,239,230,.14) 60.5% 68%, rgba(245,239,230,.05) 68.5%)`,
              boxShadow: "0 24px 60px rgba(0,0,0,.5)",
            }}
          >
            <div
              className='absolute inset-[22%]'
              style={{
                borderRadius: "46% 54% 52% 48% / 55% 45% 55% 45%",
                background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,.28), transparent 45%), linear-gradient(150deg, ${tones[0]}, ${tones[1]})`,
                boxShadow: "inset 0 -8px 18px rgba(0,0,0,.35)",
              }}
            />
            <span className='absolute left-[30%] top-[26%] h-[7%] w-[7%] rounded-full bg-cream/35' />
            <span className='absolute left-[58%] top-[60%] h-[5%] w-[5%] rounded-full bg-cream/25' />
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
}
