'use server';

import { redirect } from 'next/navigation';

import createOnboarding from '@/services/api/onboarding.api';
import { OnboardingRequest } from '@/types/onboarding.type';

const createOnboardingAction = async (onboardingData: OnboardingRequest) => {
  await createOnboarding(onboardingData);

  return redirect('/');
};

export default createOnboardingAction;
