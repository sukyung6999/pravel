'use client';

import { useEffect } from 'react';

import { useFetchPlan } from '@/hook/usePlan';
import { usePlanStateStore } from '@/store';
import getDates, {
  calculateDayNumber,
  formattedDate as dashedDate,
} from '@/utils/getDates';

const DateHeader = () => {
  const { data, isError, isFetching } = useFetchPlan();
  const {
    currentDate,
    startDate,
    endDate,
    changeCurrentDate,
    changePlanId,
    changeStartDate,
    changeEndDate,
  } = usePlanStateStore();

  useEffect(() => {
    if (!data?.startDate) return;
    if (new Date(data?.startDate) < new Date()) {
      changeCurrentDate(dashedDate(new Date()));
    } else {
      changeCurrentDate(data?.startDate);
    }

    if (!data?.planId) return;
    changePlanId(data?.planId);

    changeStartDate(data?.startDate);

    if (!data?.endDate) return;
    changeEndDate(data?.endDate);
  }, [data, changeCurrentDate, changePlanId, changeStartDate, changeEndDate]);

  const dayNumber = calculateDayNumber(startDate, currentDate);

  const handlePrevDate = (): void => {
    const prevDate: Date = new Date(currentDate);

    prevDate.setDate(prevDate.getDate() - 1);

    if (prevDate >= new Date(startDate)) {
      changeCurrentDate(dashedDate(prevDate));
    }
  };

  const handleNextDate = (): void => {
    const nextDate: Date = new Date(currentDate);

    nextDate.setDate(nextDate.getDate() + 1);

    if (nextDate <= new Date(endDate)) {
      changeCurrentDate(dashedDate(nextDate));
    }
  };
  const formattedDate = getDates(new Date(currentDate));

  return (
    <article className="max_min_width fixed top-[64px] left-1/2 -translate-x-1/2 z-50 w-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[53px] before:bg-primary after-content-[''] after:w-full after:h-[27px] after:absolute after:bottom-0 after:bg-gray-100 after:-z-10">
      <div className="mx-[16px] h-[80px] overflow-hidden rounded-[12px] relative shadow-[0_4px_10px_0px_rgba(204,231,223,0.4)] before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#ffffffef] before:backdrop-blur-[20.7px] before:border-2 before:border-white before:rounded-[12px] ">
        <div
          className={`w-full h-full relative z-[2] flex item-center justify-center text-center`}
        >
          <h2 className="relative z-10 flex flex-col justify-center">
            <strong className="block font-semibold text-primary">
              {dayNumber ? `Day${dayNumber}` : ''}
            </strong>
            <span className="text-[20px] font-semibold">
              {currentDate
                ? `${formattedDate.month}월 ${formattedDate.day}일 ${formattedDate.dayOfWeek}`
                : ''}
            </span>
          </h2>
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-[20px] ">
            <button onClick={handlePrevDate} className="ico_pravel ico_prev32">
              이전 날짜
            </button>
            <button onClick={handleNextDate} className="ico_pravel ico_next32">
              다음 날짜
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DateHeader;
