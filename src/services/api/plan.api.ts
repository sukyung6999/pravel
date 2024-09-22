import { LocationRequest } from '@/types/location.type';
import { Plan, RecommandPlan } from '@/types/plan.type';

import { baseURL, setDefaultHeader } from '.';

const PLAN = '/plan';

export const getRecommandPlanList = async (): Promise<RecommandPlan[]> =>
  fetch(`${baseURL}${PLAN}/recommand`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const getPlanHistoryList = async (): Promise<Plan[]> =>
  fetch(`${baseURL}${PLAN}/history`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const getPlanRecord = async (id: string): Promise<Plan> =>
  fetch(`${baseURL}${PLAN}/${id}/record`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const addLocation = async (location: LocationRequest) => {
  fetch(`${baseURL}/location`, {
    method: 'POST',
    headers: await setDefaultHeader(),
    body: JSON.stringify(location),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  });
};

export const getPlanCount = async (): Promise<number> =>
  fetch(`${baseURL}${PLAN}/count`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });
