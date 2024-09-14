'use server';

import * as rewardApi from '../../services/api/reward.api';

const getMyRewardList = async (used: boolean) => {
  return rewardApi.getMyRewardList(used);
};

export default getMyRewardList;
