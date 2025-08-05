'use client';

import { useEffect } from 'react';

import OnboardingIntro from '@/components/onboarding/OnboardingIntro';
import OnboardingDetails from '@/components/onboarding/onboardingStep.tsx/OnboardingDetails';
import OnboardingLocation from '@/components/onboarding/onboardingStep.tsx/OnboardingLocation';
import OnboardingName from '@/components/onboarding/onboardingStep.tsx/OnboardingName';
import { useGnbStateStore, useOnboardingStepStore } from '@/store';

const OnBoardingPage = () => {
  const { step } = useOnboardingStepStore();
  const { changeGnbVisible } = useGnbStateStore();

  useEffect(() => {
    changeGnbVisible(false);

    return () => {
      changeGnbVisible(true);
    };
  }, [changeGnbVisible]);

  return (
    <>
      {step === 0 && <OnboardingIntro />}
      {step === 1 && <OnboardingDetails />}
      {step === 2 && <OnboardingLocation />}
      {step === 3 && <OnboardingName />}
    </>
  );
};

export default OnBoardingPage;
