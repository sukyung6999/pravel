'use client';

import { useEffect, useRef } from 'react';

const RADIUS = 114;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const progress = (bar: SVGCircleElement, per: number) => {
  const percent = per / 100;
  const dashoffset = CIRCUMFERENCE * (1 - percent);

  bar.style.strokeDashoffset = String(dashoffset);
};

const EnergeProgress = () => {
  const frameRef = useRef<SVGCircleElement>(null);
  const barRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    barRef.current.style.strokeDasharray = String(CIRCUMFERENCE);
    progress(barRef.current, 60);
  }, [barRef]);

  return (
    <div className="circle_progress_wrap absolute w-[250px] h-[250px] left-[50%] translate-x-[-50%]">
      <svg
        className="circle_progress rotate-[53deg] fill-none"
        width="250"
        height="250"
        viewBox="0 0 250 250"
        style={{ strokeLinecap: 'round' }}
      >
        <circle
          ref={frameRef}
          className="frame fill-none stroke-gray-400"
          cx="125"
          cy="125"
          r={RADIUS}
          strokeWidth="15"
        />
        <circle
          ref={barRef}
          className="bar stroke-primary"
          cx="125"
          cy="125"
          r={RADIUS}
          strokeWidth="15"
        />
      </svg>
      <strong className="value"></strong>
    </div>
  );
};

export default EnergeProgress;
