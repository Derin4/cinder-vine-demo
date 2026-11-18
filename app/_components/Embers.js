// Rising embers. Positions are computed from the index so server and
// client render identically.
export default function Embers({ count = 26, className = "" }) {
  return (
    <div
      aria-hidden='true'
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {Array.from({ length: count }, (_, i) => {
        const left = (i * 37 + 11) % 100;
        const size = 2 + ((i * 7) % 4);
        const dur = 9 + ((i * 5) % 9);
        const delay = -((i * 13) % dur);
        const drift = ((i * 17) % 60) - 30;
        return (
          <span
            key={i}
            className='ember'
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              "--dur": `${dur}s`,
              "--delay": `${delay}s`,
              "--drift": `${drift}px`,
            }}
          />
        );
      })}
    </div>
  );
}
