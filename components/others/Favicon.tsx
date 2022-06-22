const Favicon = () => {
  return (
    <svg fill='none' height={64} viewBox='0 0 64 64' width={64} xmlns='http://www.w3.org/2000/svg'>
      <rect fill='#1C4532' height={64} rx={8} width={64} />
      <circle cx={32} cy={32} fill='#D69E2E' r={24} stroke='black' />
      <path d='M30 50H34V14L30 14V50Z' fill='#B7791F' stroke='black' strokeLinejoin='round' />
      <path
        d='M42 41L50 37L22 23L14 27L42 41Z'
        fill='#B7791F'
        stroke='black'
        strokeLinejoin='round'
      />
      <path
        d='M26 33L14 27L38 15L50 21L26 33Z'
        fill='#975A16'
        stroke='black'
        strokeLinejoin='round'
      />
      <path
        d='M26 49L14 43L38 31L50 37L26 49Z'
        fill='#975A16'
        stroke='black'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Favicon;
