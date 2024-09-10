import * as planApi from '@/services/api/plan.api';

import { getToken } from '../auth';

export const getRecommandPlanList = async () => {
  const token = await getToken();

  return planApi.getRecommandPlanList(token);
};

export const getPlanHistoryList = async () => {
  const token = await getToken();

  return planApi.getPlanHistoryList(token);
};

export const getPlanRecord = async (id: string) => {
  const token = await getToken();

  return planApi.getPlanRecord(token, id);
};
