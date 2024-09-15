import { Plan, RecommandPlan } from '@/types/plan.type';

import { baseURL, origin, setDefaultHeader } from '.';

const PLAN = '/plan';

export const getRecommandPlanList = async (): Promise<RecommandPlan[]> =>
  fetch(`${origin}${baseURL}${PLAN}/recommand`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const getPlanHistoryList = async (): Promise<Plan[]> =>
  fetch(`${origin}${baseURL}${PLAN}/history`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const getPlanRecord = async (id: string): Promise<Plan> =>
  fetch(`${origin}${baseURL}${PLAN}/${id}/record`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });