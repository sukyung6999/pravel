'use client';

import Image from 'next/image';

import { useFetchPlan } from '@/hook/usePlan';

const MainTravel = () => {
  const { data } = useFetchPlan();

  if (!data) return null;

  return (
    <div className="relative mb-[30px] before:contents-[''] before:block before:w-full before:h-[105px] before:absolute before:top-0 before:left-0 before:bg-primary">
      <div className="relative mx-[16px] overflow-hidden shadow-[0_4px_10px_0px_rgba(204,231,223,0.4)] before:content-[''] before:w-full before:h-full before:absolute before:top before:left-0 before:bg-[#ffffffef] before:backdrop-blur-[20.7px] before:border-2 before:border-white before:rounded-[12px] ">
        {/* TODO */}
        {/* <button className="flex items-center absolute top-[10px] right-[20px] z-20 ico_pravel_before before:block before:w-[24px] before:h-[24px] before:bg-[-168px_-96px]  text-[12px] text-semibold text-gray-700">
          수정하기
        </button> */}

        <div className="relative z-10 mt-[30px] flex justify-center items-end">
          <Image
            src={`/${data.url}`}
            alt="test"
            width={160}
            height={160}
            className="rounded-[5px_5px_45px_5px]"
          />
          {/* TODO */}
          {/* <button className="ico_pravel ico_change24 ml-[-4px]">
            이미지 수정하기
          </button> */}
        </div>
        <ul className="flex flex-col relative z-10 max-w-[250px] mx-auto pt-[25px] pb-[30px] gap-[5px]">
          <li className="flex gap-[20px] text-[14px] text-gray-600">
            <strong className="basis-[43px] text-gray-800">장소</strong>
            {data.location}
          </li>
          <li className="flex gap-[20px] text-[14px] text-gray-600">
            <strong className="basis-[43px] text-gray-800">날짜</strong>
            {data.startDate} - {data.endDate}
          </li>
          <li className="flex gap-[20px] text-[14px] text-gray-600">
            <strong className="basis-[43px] text-gray-800">시작-끝</strong>
            <div>
              <strong className="inline-block w-[30px]">In</strong>{' '}
              {data.startPoint}
            </div>
          </li>
          <li className="flex gap-[20px] text-[14px] text-gray-600">
            <strong className="basis-[43px] text-gray-800"></strong>
            <div>
              <strong className="inline-block w-[30px]">Out</strong>{' '}
              {data.endPoint}
            </div>
          </li>
          <li className="flex gap-[20px] text-[14px] text-gray-600">
            <strong className="basis-[43px] text-gray-800">인원</strong>성인
            {data.adult}명{data.child > 0 && ` / 어린이 ${data.child}명`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainTravel;
