import createOnboardingAction from '@/lib/actions/onboarding-action';
import { useOnboardingStateStore, useOnboardingStepStore } from '@/store';
import { formattedDate } from '@/utils/getDates';

interface OnboardingLayoutProps {
  titlePrimary: string | React.ReactNode;
  title?: string;
  children: React.ReactNode;
}

const OnboardingLayout = ({
  titlePrimary,
  title: titleName,
  children,
}: OnboardingLayoutProps) => {
  const { step, prevStep, nextStep, moveToIntro } = useOnboardingStepStore();
  const {
    startDate,
    endDate,
    location,
    adult,
    child,
    startPoint,
    endPoint,
    title,
  } = useOnboardingStateStore();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createOnboardingAction({
      startDate: formattedDate(startDate!),
      endDate: formattedDate(endDate!),
      location,
      adult,
      child,
      startPoint,
      endPoint,
      title,
    });
  };

  return (
    <div className="relative flex flex-col min-h-dvh">
      <header className="flex justify-end pt-[21px] px-[16px]">
        <button
          onClick={moveToIntro}
          className="text-[14px] text-white bg-gray-900 rounded-2xl py-[6px] px-[18px]"
        >
          닫기
        </button>
      </header>

      {/* 진행 바 */}
      <div className="flex gap-2 mt-3 mb-14 px-[16px]" aria-hidden="true">
        <span
          className={`block w-full h-[5px] rounded-[30px] ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`}
        ></span>
        <span
          className={`block w-full h-[5px] rounded-[30px] ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}
        ></span>
        <span
          className={`block w-full h-[5px] rounded-[30px] ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}
        ></span>
      </div>

      <main className="px-[16px]">
        {typeof titlePrimary === 'string' ? (
          <h1 className="text-[26px] font-bold leading-[1.19] pb-[30px]">
            <p className="text-primary">{titlePrimary}</p>
            {titleName}
          </h1>
        ) : (
          titlePrimary
        )}

        <form id="onboardingForm" onSubmit={handleSubmit}>
          {children}
          <div className="flex text-[18px] absolute bottom-0 left-0 w-full">
            <button onClick={prevStep} className="w-1/2 bg-gray-200 py-6">
              이전
            </button>
            <button
              onClick={step !== 3 ? nextStep : () => {}}
              type={step === 3 ? 'submit' : 'button'}
              className="w-1/2 bg-primary text-white py-6"
            >
              {step === 3 ? '완료' : '다음'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default OnboardingLayout;
