import { LocationRequest } from '@/types/location.type';
import { Plan, PlanDetails, RecommandPlan } from '@/types/plan.type';

import { baseURL, setDefaultHeader } from '.';

const PLAN = '/plan';

export const getPlanTotalCount = async (): Promise<number> =>
  fetch(`${baseURL}${PLAN}/total`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

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
  fetch(`${baseURL}${PLAN}/schedule`, {
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

export const getPlanDetails = async (): Promise<PlanDetails> =>
  fetch(`${baseURL}${PLAN}`, {
    headers: await setDefaultHeader(),
    cache: 'no-cache',
  })
    .then((res) => {
      if (!res.ok) {
        return null;
      }
      return res.json();
    })
    .catch(() => null);

export const getPlanFutureList = async (): Promise<Plan[]> =>
  fetch(`${baseURL}${PLAN}/future`, {
    headers: await setDefaultHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        return null;
      }
      return res.json();
    })
    .catch(() => null);

export const deletePlan = async (id: string) =>
  fetch(`${baseURL}${PLAN}/${id}`, {
    method: 'DELETE',
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  });

export const activePlan = async (id: number) =>
  fetch(`${baseURL}${PLAN}/${id}`, {
    method: 'PATCH',
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  });
