'use client';

import { useEffect, useState } from 'react';

import { useFetchSchedules } from '@/hook/usePlan';

import MainModalWrapper from '../MainModalWrapper';

import ScheduleItem from './ScheduleItem';

type ScheduleListProps = {
  currentDate: string;
};

const ScheduleList = ({ currentDate }: ScheduleListProps) => {
  const { data } = useFetchSchedules(currentDate);

  const [clearedSvg, setClearedSvg] = useState({
    id: 0,
    isDoneClicked: false,
  });

  const handlePrevClick = () => {
    if (!data) return;
    if (clearedSvg.id > 0) {
      setClearedSvg((prev) => ({
        id: prev.id - 1,
        isDoneClicked: false,
      }));
      localStorage.setItem('lastSvgId', `${clearedSvg.id - 1}`);
    }
  };

  const handleDoneClick = () => {
    if (!data) return;

    if (clearedSvg.id < data?.length) {
      setClearedSvg((prev) => ({
        id: clearedSvg.id < 0 ? 1 : prev.id + 1,
        isDoneClicked: true,
      }));
      localStorage.setItem(
        'lastSvgId',
        `${clearedSvg.id < 0 ? 1 : clearedSvg.id + 1}`,
      );
    }
  };

  useEffect(() => {
    const lastSvgId = Number(localStorage.getItem('lastSvgId'));

    if (lastSvgId)
      setClearedSvg({
        id: lastSvgId,
        isDoneClicked: true,
      });

    return () => {
      if (!lastSvgId) localStorage.setItem('lastSvgId', `-1`);
    };
  }, []);

  return (
    <>
      <div className="relative mx-[auto] max-w-[356px] min-h-dvh pt-[144px]">
        {data?.map((v) => (
          <ScheduleItem
            key={v.id}
            schedule={v}
            schedulesLength={data?.length}
            clearedSvg={clearedSvg}
          />
        ))}
      </div>
      <div className="fixed top-0 max_min_width w-full h-full">
        <button
          onClick={handlePrevClick}
          className="absolute z-50 top-[200px] right-5 h-[24px] text-[10px] bg-primary text-white p-1 rounded-xl opacity-50"
        >
          PREV
        </button>
        <button
          onClick={handleDoneClick}
          className="absolute z-50 top-[240px] right-5 h-[24px] text-[10px] bg-primary text-white p-1 rounded-xl opacity-50"
        >
          DONE
        </button>
        <MainModalWrapper />
      </div>
    </>
  );
};

export default ScheduleList;
