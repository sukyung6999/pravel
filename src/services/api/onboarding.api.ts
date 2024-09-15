import { OnboardingRequest } from '@/types/onboarding.type';

import { baseURL, origin, setDefaultHeader } from '.';

const PLAN = '/plan';

const createOnboarding = async (
  onboardingData: OnboardingRequest,
): Promise<void> =>
  fetch(`${origin}${baseURL}${PLAN}`, {
    method: 'POST',
    headers: await setDefaultHeader(),
    body: JSON.stringify(onboardingData),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  });

export default createOnboarding;