'use client';

import { useEffect, useState } from 'react';

import { useFetchPlan } from '@/hook/usePlan';

import ScheduleItem from './ScheduleItem';

const ScheduleList = () => {
  const { data } = useFetchPlan();

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
    if (clearedSvg.id < data?.schedules.length) {
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
      <button
        onClick={handlePrevClick}
        className="fixed z-50 top-[134px] right-5 text-[10px] bg-primary text-white p-1 rounded-xl opacity-50"
      >
        PREV
      </button>
      <button
        onClick={handleDoneClick}
        className="fixed z-50 top-[164px] right-5 text-[10px] bg-primary text-white p-1 rounded-xl opacity-50"
      >
        DONE
      </button>
      <div className="relative mx-[auto] max-w-[356px] mt-[144px]">
        {data?.schedules.map((v) => (
          <ScheduleItem key={v.id} schedule={v} clearedSvg={clearedSvg} />
        ))}
      </div>
    </>
  );
};

export default ScheduleList;
