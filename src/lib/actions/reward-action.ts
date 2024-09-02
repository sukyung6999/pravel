'use server';

import * as rewardApi from '../../services/api/reward.api';
import { getToken } from '../auth';

const getMyRewardList = async (used: boolean) => {
  const token = await getToken();

  return rewardApi.getMyRewardList(token, used);
};

export default getMyRewardList;
