'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { Plan } from '@/types/plan.type';
import {
  calculateDayNumber,
  formattedDate as dashedDate,
  getDateRange,
} from '@/utils/getDates';

type TravelItemProps = Plan & {
  selected: number | null;
  onSelect: (id: number) => void;
};

const TravelItem = ({
  id,
  url,
  startDate,
  endDate,
  title,
  selected,
  onSelect,
}: TravelItemProps) => {
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
    onSelect(id);
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

  // 마우스 시작
  const handleMouseDown = (e: React.MouseEvent) => {
    startRef.current = e.clientX;
    startPositionRef.current = position;
    setDragging(true);
    onSelect(id);
  };

  // 마우스 이동
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const deltaX = e.clientX - startRef.current;
    const limitedPosition = Math.min(
      Math.max(startPositionRef.current + deltaX, minPosition),
      maxPosition,
    );

    setPosition(limitedPosition);
  };

  // 마우스 종료
  const handleMouseUp = () => {
    setDragging(false);
    handleDragEnd();
  };

  // 공통 드래그 종료 처리 로직
  const handleDragEnd = () => {
    const totalMovement = position - startPositionRef.current;

    if (Math.abs(totalMovement) < threshold) {
      setPosition(startPositionRef.current);
    } else if (totalMovement > 0) {
      setPosition(maxPosition);
    } else {
      setPosition(minPosition);
    }
  };

  const dday = calculateDayNumber(startDate, dashedDate(new Date())) - 1;

  return (
    <div className="relative text-gray-900 font-semibold">
      <button
        className="relative z-[2] flex gap-[22px] w-full text-left p-[20px] border-2 border-gray-200 bg-white rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          transform: `translateX(${position}px)`,
          transition: dragging ? 'none' : 'transform 0.3s ease',
          border: selected === id ? '2px solid #8dd7c1' : '',
        }}
      >
        <span className="rounded-[9px] overflow-hidden">
          <Image src={`/${url}`} alt="test" width={40} height={40} />
        </span>
        <span>
          <p className="text-[15px]">
            {title || '여행'}
            <span className="pl-[10px] text-[14px] text-[#8dd7c1]">
              D{dday < 0 ? dday : `+${dday}`}
            </span>
          </p>
          <p className="font-rajdhani text-[13px] text-gray-600">
            {getDateRange(startDate, endDate)}
          </p>
        </span>
      </button>
      <button className="ico_pravel ico_delete56 absolute top-1/2 -translate-y-1/2 right-0">
        <span className="screen_out">삭제하기</span>
      </button>
      <button className="ico_pravel ico_delete56 absolute top-1/2 -translate-y-1/2 right-0">
        <span className="screen_out">삭제하기</span>
      </button>
    </div>
  );
};

export default TravelItem;
