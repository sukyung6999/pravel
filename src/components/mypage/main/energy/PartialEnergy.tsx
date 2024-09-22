interface PartialEnergyProps {
  energy: number;
}

const PartialEnergy = ({ energy }: PartialEnergyProps) => (
  <div className="relative w-[176px] h-[176px] bg-white z-10 shadow-md flex flex-col items-center justify-center">
    <span className="text-gray-600 text-[13px] font-bold flex gap-[4px] items-center">
      <i className="ico_pravel ico_energy10_16" />
      <span>여행 에너지</span>
    </span>
    <span className="text-primary text-[46px] font-semibold leading-[55.2px]">
      {energy}%
    </span>
  </div>
);

export default PartialEnergy;
