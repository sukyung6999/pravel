import { useState } from 'react';

import { useFetchPlan } from '@/hook/usePlan';

import ScheduleItem from './ScheduleItem';

const ScheduleList = () => {
  const { data } = useFetchPlan();

  const [svgId, setSvgId] = useState(0);
  const handleSvgClick = () => {
    if (!data) return;
    if (svgId < data?.schedules.length) {
      setSvgId((prev) => prev + 1);
    }
  };

  return (
    <>
      <button
        onClick={handleSvgClick}
        className="fixed z-50 top-[164px] right-5 text-[10px] bg-primary text-white p-1 rounded-xl opacity-50"
      >
        Done
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
