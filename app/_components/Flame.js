// Animated flame, drawn in SVG. Three layers flicker at different speeds.
export default function Flame({ className = "" }) {
  return (
    <svg
      viewBox='0 0 200 300'
      className={className}
      aria-hidden='true'
      focusable='false'
    >
      <defs>
        <linearGradient id='fl-a' x1='0' y1='1' x2='0' y2='0'>
          <stop offset='0' stopColor='#b8431a' />
          <stop offset='0.55' stopColor='#e2672b' />
          <stop offset='1' stopColor='#f2a24a' />
        </linearGradient>
        <linearGradient id='fl-b' x1='0' y1='1' x2='0' y2='0'>
          <stop offset='0' stopColor='#e2672b' />
          <stop offset='1' stopColor='#ffd089' />
        </linearGradient>
        <linearGradient id='fl-c' x1='0' y1='1' x2='0' y2='0'>
          <stop offset='0' stopColor='#ffd089' />
          <stop offset='1' stopColor='#fff2d4' />
        </linearGradient>
      </defs>
      <g className='flame flame-a'>
        <path
          fill='url(#fl-a)'
          d='M104 6C112 52 168 88 172 170c3 66-31 124-72 124S26 236 28 176c2-48 34-70 50-100 8-16 6-40 26-70Z'
        />
      </g>
      <g className='flame flame-b'>
        <path
          fill='url(#fl-b)'
          d='M100 70c6 38 52 64 54 118 2 48-24 98-54 98s-56-50-54-98c2-40 28-52 40-82 6-14 8-24 14-36Z'
        />
      </g>
      <g className='flame flame-c'>
        <path
          fill='url(#fl-c)'
          d='M100 150c4 24 30 42 32 76 1 28-14 60-32 60s-33-32-32-60c2-30 18-38 26-56 3-8 4-14 6-20Z'
        />
      </g>
    </svg>
  );
}
