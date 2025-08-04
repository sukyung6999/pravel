'use client';

import { useEffect } from 'react';

import { useFetchPlan } from '@/hook/usePlan';
import { usePlanStateStore } from '@/store';
import getDates, {
  calculateDayNumber,
  formattedDate as dashedDate,
} from '@/utils/getDates';

import ScheduleList from './Schedule/ScheduleList';

const ScheduleNav = () => {
  const { data } = useFetchPlan();
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
    <article className="max_min_width w-full pb-[134px] bg-gray-100">
      <div className="fixed top-[64px] left-0 right-0 mx-auto px-[16px] w-[calc(100%-32px)] max-w-[780px] h-[80px] overflow-hidden z-[10]">
        <div
          className={`w-full h-full relative flex item-center justify-center text-center rounded-[12px] shadow-[0_4px_10px_0px_rgba(204,231,223,0.4)] bg-[#FFFFFFE5]`}
        >
          <h2 className="relative flex flex-col justify-center">
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
      <ScheduleList currentDate={currentDate} />
    </article>
  );
};

export default ScheduleNav;
