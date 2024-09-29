'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { dummyTravel } from './TravelList';

const TravelItem = ({ travel }: { travel: (typeof dummyTravel)[0] }) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const startRef = useRef(0);
  const startPositionRef = useRef(0);

  const minPosition = -70;
  const maxPosition = 0;
  const threshold = 5; // 스와이프 감지를 위한 값

  // 드래그 시작
  const handleTouchStart = (e: React.TouchEvent) => {
    startRef.current = e.touches[0].clientX;
    startPositionRef.current = position;
    setDragging(true);
  };
  // 드래그 중
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    const deltaX = e.touches[0].clientX - startRef.current; // 현재위치와 시작점 차이
    const limitedPosition = Math.min(
      Math.max(startPositionRef.current + deltaX, minPosition),
      maxPosition,
    );

    setPosition(limitedPosition);
  };
  // 드래그 종료
  const handleTouchEnd = () => {
    setDragging(false);
    const totalMovement = position - startPositionRef.current;

    if (Math.abs(totalMovement) < threshold) {
      setPosition(startPositionRef.current);
    } else if (totalMovement > 0) {
      setPosition(maxPosition);
    } else {
      setPosition(minPosition);
    }
  };

  return (
    <div className="relative text-gray-900 font-semibold">
      <button
        className="relative z-[2] flex gap-[22px] w-full text-left p-[20px] border-2 border-gray-200 bg-white rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(${position}px)`,
          transition: dragging ? 'none' : 'transform 0.3s ease',
        }}
      >
        <span className="rounded-[9px] overflow-hidden">
          <Image src={`/${travel.img}`} alt="test" width={40} height={40} />
        </span>
        <span>
          <p className="text-[15px]">
            {travel.title}
            <span className="pl-[10px] text-[14px] text-[#8dd7c1]">D+1</span>
          </p>
          <p className="font-rajdhani text-[13px] text-gray-600">
            2024.05.03(Fri) - 05.06(Mon)
          </p>
        </span>
      </button>
      <button className="ico_pravel ico_delete56 absolute top-1/2 -translate-y-1/2 right-0">
        <span className="screen_out">삭제하기</span>
      </button>
    </div>
  );
};

export default TravelItem;
