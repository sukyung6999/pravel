'use client';

import { useEffect, useRef } from 'react';

import styles from './energy-progress.module.css';

const ZERO_DEFAULT = 716.283;
const RADIUS = 114;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const animation = (offset: number, callback: (value: number) => void) => {
  const duration = 1000;
  const startTime = performance.now();

  function update(currentTime: number) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentValue = ZERO_DEFAULT - (ZERO_DEFAULT - offset) * progress;

    if (progress < 1) {
      callback(currentValue);
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
};

const progress = (bar: SVGCircleElement, per: number) => {
  const percent = per / 100;
  const dashoffset = CIRCUMFERENCE * (1 - percent);

  animation(dashoffset, (value) => {
    bar.style.strokeDashoffset = String(value);
  });
};

interface EnergeProgressProps {
  progressNumber: number;
}

const EnergeProgress = ({ progressNumber }: EnergeProgressProps) => {
  const frameRef = useRef<SVGCircleElement>(null);
  const barRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    progress(barRef.current, Math.min(progressNumber, 100));
  }, [barRef, progressNumber]);

  return (
    <div className="circle_progress_wrap absolute w-[250px] h-[250px] left-[50%] translate-x-[-50%]">
      <svg
        className="circle_progress rotate-[275deg] fill-none"
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
          className={`${styles.bar} stroke-primary`}
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
