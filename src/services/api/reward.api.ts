import { RewardResponse } from '@/types/reward.type';

import { baseURL, origin, setDefaultHeader } from '.';

const REWARD = '/reward';

export const getMyRewardList = (
  token: string,
  used: boolean = false,
): Promise<RewardResponse[]> =>
  fetch(`${origin}${baseURL}${REWARD}?used=${used}`, {
    headers: setDefaultHeader(token),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export default getMyRewardList;
