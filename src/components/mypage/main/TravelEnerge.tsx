import Link from 'next/link';

import FullEnergy from './energy/FullEnergy';
import PartialEnergy from './energy/PartialEnergy';
import EnergeProgress from './EnergeProgress';

interface TravelEnergeProps {
  currentEnergyCount: number;
}

const TravelEnerge = ({ currentEnergyCount }: TravelEnergeProps) => {
  return (
    <>
      <div className="relative h-[250px] mt-[40px]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full overflow-hidden z-10">
          {currentEnergyCount < 100 ? (
            <PartialEnergy energy={currentEnergyCount} />
          ) : (
            <FullEnergy />
          )}
        </div>
        <EnergeProgress progressNumber={currentEnergyCount} />
      </div>
      <div className="mt-[40px] w-full px-[12px]">
        <Link
          href="/mypage/energy-history"
          className="flex items-center justify-center w-full h-[54px] bg-gray-900 rounded-[8px] text-white gap-[20px]"
        >
          에너지 히스토리
          <i className="ico_pravel ico_white_arrow16" />
        </Link>
      </div>
    </>
  );
};

export default TravelEnerge;
