'use client';

import { useEffect, useState } from 'react';

import { useFetchPlan } from '@/hook/usePlan';

import ScheduleItem from './ScheduleItem';

const ScheduleList = () => {
  const { data } = useFetchPlan();

  const [svgId, setSvgId] = useState(0);

  const handlePrevClick = () => {
    if (!data) return;
    if (svgId > data?.schedules.length) {
      setSvgId((prev) => prev - 1);
    }
  };

  const handleDoneClick = () => {
    if (!data) return;
    if (svgId < data?.schedules.length) {
      setSvgId((prev) => prev + 1);
      localStorage.setItem('lastSvgId', `${svgId + 1}`);
    }
  };

  useEffect(() => {
    const lastSvgId = Number(localStorage.getItem('lastSvgId'));

    if (lastSvgId) setSvgId(lastSvgId);
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
          <ScheduleItem key={v.id} schedule={v} svgId={svgId} />
        ))}
      </div>
    </>
  );
};

export default ScheduleList;
