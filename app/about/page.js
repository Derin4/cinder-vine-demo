export const metadata = { title: "Our Story — Cinder & Vine" };

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-2 gap-14 items-start'>
      <div
        className='w-full aspect-[4/5]'
        style={{
          background: "linear-gradient(165deg, #5C534A 0%, #1A1714 100%)",
        }}
      />
      <div className='sm:pt-4 max-w-prose'>
        <h1 className='font-display text-4xl text-char mb-6'>Our Story</h1>
        <p className='font-body text-char/70 leading-relaxed mb-4'>
          Cinder & Vine started as an argument about whether a restaurant could
          run entirely on wood fire in a building with no gas line. Three years
          later, the argument is the menu.
        </p>
        <p className='font-body text-char/70 leading-relaxed mb-4'>
          We built the dining room around the hearth rather than the other way
          around — every table can see the fire, and most nights, the fire is
          doing more of the cooking than anyone standing near it.
        </p>
        <p className='font-body text-char/70 leading-relaxed'>
          The wine list leans natural and small-producer on purpose. If you
          don&apos;t recognize a name on it, that&apos;s usually the point — ask
          your server, they&apos;ll have an opinion.
        </p>
      </div>
    </div>
  );
}
