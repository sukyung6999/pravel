'use server';

import { redirect } from 'next/navigation';

import createOnboarding from '@/services/api/onboarding.api';
import { OnboardingRequest } from '@/types/onboarding.type';

import { getToken } from '../auth';

const createOnboardingAction = async (onboardingData: OnboardingRequest) => {
  const token = await getToken();

  await createOnboarding(token, onboardingData);

  return redirect('/');
};

export default createOnboardingAction;
