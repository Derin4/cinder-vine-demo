// Small illustrated scenes for the gallery panels (no photos required).
export default function Motif({ kind }) {
  const common = {
    viewBox: "0 0 400 560",
    preserveAspectRatio: "xMidYMid slice",
    className: "absolute inset-0 h-full w-full",
    "aria-hidden": true,
  };

  if (kind === "hearth") {
    return (
      <svg {...common}>
        <defs>
          <radialGradient id='mh' cx='50%' cy='88%' r='60%'>
            <stop offset='0' stopColor='#e2672b' stopOpacity='.95' />
            <stop offset='.45' stopColor='#b8431a' stopOpacity='.45' />
            <stop offset='1' stopColor='#000' stopOpacity='0' />
          </radialGradient>
        </defs>
        <rect width='400' height='560' fill='url(#mh)' />
        <path
          d='M90 560V260a110 110 0 0 1 220 0v300'
          fill='none'
          stroke='#f5efe6'
          strokeOpacity='.25'
          strokeWidth='2'
        />
        <path
          d='M120 560V268a80 80 0 0 1 160 0v292'
          fill='none'
          stroke='#c89b3c'
          strokeOpacity='.35'
          strokeWidth='2'
        />
        <path
          d='M200 330c6 30 36 46 36 84 0 34-16 64-36 64s-36-30-36-64c0-30 22-40 28-62 4-10 4-16 8-22Z'
          fill='#f2a24a'
        />
        <path
          d='M200 392c3 16 18 26 18 44 0 16-8 30-18 30s-18-14-18-30c0-16 12-22 14-32l4-12Z'
          fill='#ffd089'
        />
        <rect
          x='140'
          y='488'
          width='120'
          height='14'
          rx='7'
          fill='#2a1f18'
          transform='rotate(-6 200 495)'
        />
        <rect
          x='140'
          y='488'
          width='120'
          height='14'
          rx='7'
          fill='#3a2a20'
          transform='rotate(7 200 495)'
        />
      </svg>
    );
  }

  if (kind === "table") {
    return (
      <svg {...common}>
        <defs>
          <radialGradient id='mt' cx='50%' cy='55%' r='55%'>
            <stop offset='0' stopColor='#c89b3c' stopOpacity='.35' />
            <stop offset='1' stopColor='#000' stopOpacity='0' />
          </radialGradient>
        </defs>
        <rect width='400' height='560' fill='url(#mt)' />
        <path d='M120 200L280 200L380 560L20 560Z' fill='#3a2a20' />
        <path d='M120 200L280 200L286 222L114 222Z' fill='#4a372a' />
        {[0, 1, 2].map((r) =>
          [0, 1].map((c) => {
            const y = 260 + r * 90;
            const w = 12 + r * 6;
            const x = c === 0 ? 200 - (50 + r * 38) : 200 + (50 + r * 38);
            return (
              <ellipse
                key={`${r}-${c}`}
                cx={x}
                cy={y}
                rx={w}
                ry={w * 0.4}
                fill='#f5efe6'
                fillOpacity='.8'
              />
            );
          }),
        )}
        {[0, 1, 2].map((r) => (
          <g key={r}>
            <circle
              cx='200'
              cy={238 + r * 90}
              r={26 + r * 8}
              fill='#e2672b'
              fillOpacity='.18'
            />
            <rect
              x={198}
              y={228 + r * 90}
              width='4'
              height={14 + r * 4}
              fill='#f5efe6'
            />
            <circle cx='200' cy={226 + r * 90} r={2.5 + r} fill='#ffd089' />
          </g>
        ))}
      </svg>
    );
  }

  if (kind === "cellar") {
    const dots = [];
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 6; c++) {
        dots.push(
          <circle
            key={`${r}-${c}`}
            cx={50 + c * 60 + (r % 2) * 30 - 15}
            cy={50 + r * 58}
            r='22'
            fill={(r + c) % 3 === 0 ? "#c89b3c" : "#f5efe6"}
            fillOpacity={(r * 7 + c * 3) % 5 === 0 ? 0.5 : 0.14}
            stroke='#f5efe6'
            strokeOpacity='.22'
          />,
        );
      }
    }
    return (
      <svg {...common}>
        <rect width='400' height='560' fill='#000' fillOpacity='.18' />
        {dots}
      </svg>
    );
  }

  if (kind === "bar") {
    const hs = [150, 210, 120, 250, 180, 140, 230, 160];
    return (
      <svg {...common}>
        <defs>
          <linearGradient id='mb' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0' stopColor='#c89b3c' stopOpacity='.25' />
            <stop offset='1' stopColor='#000' stopOpacity='0' />
          </linearGradient>
        </defs>
        <rect width='400' height='300' fill='url(#mb)' />
        <rect
          x='20'
          y='300'
          width='360'
          height='8'
          fill='#f5efe6'
          fillOpacity='.35'
        />
        {hs.map((h, i) => (
          <g key={i}>
            <rect
              x={34 + i * 44}
              y={300 - h * 0.7}
              width='20'
              height={h * 0.7}
              rx='9'
              fill={i % 3 === 0 ? "#c89b3c" : "#f5efe6"}
              fillOpacity={i % 3 === 0 ? 0.55 : 0.2}
            />
            <rect
              x={39 + i * 44}
              y={300 - h * 0.7 - 16}
              width='10'
              height='18'
              rx='3'
              fill='#f5efe6'
              fillOpacity='.3'
            />
          </g>
        ))}
        <rect x='0' y='380' width='400' height='20' fill='#2a1f18' />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <ellipse
              cx={55 + i * 58}
              cy='470'
              rx='22'
              ry='8'
              fill='#c89b3c'
              fillOpacity='.7'
            />
            <rect
              x={52 + i * 58}
              y='470'
              width='6'
              height='70'
              fill='#f5efe6'
              fillOpacity='.2'
            />
          </g>
        ))}
      </svg>
    );
  }

  // patio
  return (
    <svg {...common}>
      <path
        d='M-10 150Q200 290 410 130'
        fill='none'
        stroke='#f5efe6'
        strokeOpacity='.35'
        strokeWidth='2'
      />
      <path
        d='M-10 250Q200 380 410 230'
        fill='none'
        stroke='#f5efe6'
        strokeOpacity='.25'
        strokeWidth='2'
      />
      {Array.from({ length: 9 }, (_, i) => {
        const t = (i + 0.5) / 9;
        const x = -10 + 420 * t;
        const yy =
          (1 - t) * (1 - t) * 150 + 2 * (1 - t) * t * 290 + t * t * 130;
        return (
          <g key={i}>
            <circle
              cx={x}
              cy={yy + 8}
              r='18'
              fill='#ffd089'
              fillOpacity='.18'
            />
            <circle cx={x} cy={yy + 8} r='5' fill='#ffd089' />
          </g>
        );
      })}
      {Array.from({ length: 7 }, (_, i) => {
        const t = (i + 0.5) / 7;
        const x = -10 + 420 * t;
        const yy =
          (1 - t) * (1 - t) * 250 + 2 * (1 - t) * t * 380 + t * t * 230;
        return (
          <g key={i}>
            <circle
              cx={x}
              cy={yy + 8}
              r='14'
              fill='#ffd089'
              fillOpacity='.14'
            />
            <circle cx={x} cy={yy + 8} r='4' fill='#ffd089' fillOpacity='.9' />
          </g>
        );
      })}
      <circle cx='70' cy='520' r='110' fill='#0f1a14' />
      <circle cx='330' cy='540' r='130' fill='#0f1a14' />
      <circle cx='200' cy='580' r='120' fill='#14211a' />
    </svg>
  );
}
