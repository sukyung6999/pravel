import { Plan, RecommandPlan } from '@/types/plan.type';

import { baseURL, origin, setDefaultHeader } from '.';

const PLAN = '/plan';

export const getRecommandPlanList = (): Promise<RecommandPlan[]> =>
  fetch(`${origin}${baseURL}${PLAN}/recommand`, {
    headers: setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const getPlanHistoryList = (): Promise<Plan[]> =>
  fetch(`${origin}${baseURL}${PLAN}/history`, {
    headers: setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const getPlanRecord = (id: string): Promise<Plan> =>
  fetch(`${origin}${baseURL}${PLAN}/${id}/record`, {
    headers: setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });
