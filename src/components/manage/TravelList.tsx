'use client';

import { useState } from 'react';

import { useActivePlanMutation, useFetchPlanFuture } from '@/hook/usePlan';

import TravelItem from './TravelItem';

const TravelList = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { data: list = [] } = useFetchPlanFuture();
  const activePlan = useActivePlanMutation();

  return (
    <>
      <div className="mx-[16px] h-[calc(100dvh-423px] pb-[100px] flex flex-col gap-2">
        {list.map((travel) => (
          <TravelItem
            key={travel.id}
            {...travel}
            selected={selected}
            onSelect={setSelected}
          />
        ))}
      </div>
      <div className="fixed max_min_width z-50 bottom-0 left-[50%] -translate-x-[50%] w-full before:content-[''] before:fixed before:bottom-0 before:left-0 before:w-full before:h-[190px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0)_5.79%,#FFFFFF_80.26%)] before:pointer-events-none  before:-z-10">
        <button
          className="absolute bottom-[34px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] py-[1em] bg-primary text-white font-bold rounded-xl  disabled:bg-gray-200 disabled:text-gray-400"
          disabled={!selected}
          onClick={() => activePlan.mutate(selected as number)}
        >
          여행 시작
        </button>
      </div>
    </>
  );
};

export default TravelList;
