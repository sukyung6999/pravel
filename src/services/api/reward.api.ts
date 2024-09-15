import { RewardResponse } from '@/types/reward.type';

import { baseURL, setDefaultHeader } from '.';

const REWARD = '/reward';

export const getMyRewardList = async (
  used: boolean = false,
): Promise<RewardResponse[]> =>
  fetch(`${baseURL}${REWARD}?used=${used}`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export default getMyRewardList;
