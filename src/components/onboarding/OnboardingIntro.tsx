import { useOnboardingStepStore } from '@/store';

const OnboardingIntro = () => {
  const { nextStep } = useOnboardingStepStore();

  return (
    <section className="relative w-full h-dvh overflow-hidden bg-[#f9f9fb] bg-[url('/bg_pravel.png')] bg-center bg-cover	">
      <div className="absolute bottom-0 left-0 w-full h-[441px] flex flex-col justify-center items-center px-[16px]">
        <h1 className="text-primary font-semibold text-[24px] leading-[28.8px] text-center box-border">
          여행을 떠나볼까요?
          <br />
          여행 정보를 알려주세요
        </h1>
        <p className="mt-[20px] mb-[40px] text-gray-700 text-[16px]">
          {/* 여행 테마에 맞춰 코스를 선택하세요 */}
        </p>
        <button
          onClick={nextStep}
          className="w-full py-[1em] bg-primary text-white text-center rounded-[16px_16px_16px_5px]"
        >
          시작하기
        </button>
      </div>
    </section>
  );
};

export default OnboardingIntro;
