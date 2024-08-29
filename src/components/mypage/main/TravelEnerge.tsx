import Link from 'next/link';

import EnergeProgress from './EnergeProgress';

interface TravelEnergeProps {
  currentEnergyCount: number;
}

const TravelEnerge = ({ currentEnergyCount }: TravelEnergeProps) => {
  return (
    <>
      <div className="relative h-[250px] mt-10">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full overflow-hidden">
          <div className="relative w-44 h-44 bg-white z-10 shadow-md flex flex-col items-center justify-center">
            <span className="text-gray-600 text-[13px] font-bold flex gap-1 items-center">
              <i className="ico_pravel ico_energy10_16" />
              <span>여행 에너지</span>
            </span>
            <span className="text-primary text-[46px] font-semibold leading-[55.2px]">
              {currentEnergyCount}%
            </span>
          </div>
        </div>
        <EnergeProgress progressNumber={currentEnergyCount} />
      </div>
      <div className="mt-10 w-full px-4">
        <Link
          href="/mypage/energy-history"
          className="flex items-center justify-center w-full h-[54px] bg-gray-900 rounded-lg text-white gap-5"
        >
          에너지 히스토리
          <i className="ico_pravel ico_white_arrow16" />
        </Link>
      </div>
    </>
  );
};

export default TravelEnerge;
