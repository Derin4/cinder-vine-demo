import { hours } from "@/app/_lib/data";

export const metadata = { title: "Visit — Cinder & Vine" };

export default function ContactPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-2 gap-14'>
      <div>
        <h1 className='font-display text-4xl text-char mb-8'>Visit Us</h1>

        <div className='mb-10'>
          <p className='font-body text-sm text-smoke mb-2'>Address</p>
          <p className='font-body text-char'>
            118 Millrace Way
            <br />
            Old Mill District
          </p>
        </div>

        <div className='mb-10'>
          <p className='font-body text-sm text-smoke mb-2'>Hours</p>
          <div className='space-y-1'>
            {hours.map((h) => (
              <div
                key={h.day}
                className='flex justify-between max-w-xs font-body text-sm text-char/80 py-1 border-b border-smoke/15'
              >
                <span>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className='font-body text-sm text-smoke mb-2'>Contact</p>
          <p className='font-body text-char'>
            hello@cinderandvine.example
            <br />
            (555) 018-4402
          </p>
        </div>
      </div>

      <div
        className='w-full aspect-square'
        style={{
          background:
            "linear-gradient(160deg, #C89B3C 0%, #3B1F2B 60%, #1A1714 100%)",
        }}
      />
    </div>
  );
}
