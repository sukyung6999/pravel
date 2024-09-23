import Image from 'next/image';

import { Plan } from '@/types/plan.type';

import BackButton from '../common/back/BackButton';

interface TravelRecordDetailProps extends Plan {}

const TravelRecordDetailComponent = ({
  url,
  location,
  startDate,
  endDate,
}: TravelRecordDetailProps) => {
  return (
    <div className="pt-[40px] px-[16px] absolute top-0 bg-gray-100 w-full h-full min-h-dvh z-10">
      <div>
        <BackButton />
        <h1 className="font-semibold text-[18px] text-gray-900 flex items-center justify-center">
          <i className="ico_pravel ico_black_marker24" />
          {location}
        </h1>
        <p className="font-rajdhani text-[14px] text-center font-semibold mt-[4px] text-gray-700">
          {startDate} ~ {endDate}
        </p>
      </div>
      <div className="flex justify-center mt-[29px]">
        <Image
          src={`/record/travel/${url}`}
          width={246}
          height={362}
          alt="travel-record"
        />
      </div>
      <div className="mt-[40px]">
        <h2 className="font-semibold text-gray-600">여행 발자취</h2>
      </div>
    </div>
  );
};

export default TravelRecordDetailComponent;
