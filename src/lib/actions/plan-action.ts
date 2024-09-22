import * as planApi from '@/services/api/plan.api';

export const getRecommandPlanList = async () => {
  return planApi.getRecommandPlanList();
};

export const getPlanHistoryList = async () => {
  return planApi.getPlanHistoryList();
};

export const getPlanRecord = async (id: string) => {
  return planApi.getPlanRecord(id);
};

export const getPlanCount = async () => {
  return planApi.getPlanCount();
};
