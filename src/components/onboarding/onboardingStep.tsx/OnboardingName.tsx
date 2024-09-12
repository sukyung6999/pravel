import { useOnboardingStateStore } from '@/store';

import OnboardingLayout from '../OnboardingLayout';

const OnboardingName = () => {
  const { title, onChange } = useOnboardingStateStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange('title', e.target.value);
  };

  return (
    <OnboardingLayout
      titlePrimary={
        <h1 className="text-gray-900 text-[26px] font-bold leading-[1.19] pb-[30px]">
          <span className="text-primary">이번 여행의 이름</span>을 정해보세요
          <br />
          (선택)
        </h1>
      }
    >
      <div>
        <label htmlFor="travelName" className="blind">
          여행 이름
        </label>
        <input
          id="travelName"
          type="text"
          className="relative mb-[10px] bg-gray-100 w-full py-[14px] px-[20px] rounded-lg font-semibold text-gray-600 outline-none"
          value={title}
          onChange={handleChange}
        />
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingName;
