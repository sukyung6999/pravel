import { EnergyResponse } from '@/types/enrgy.type';

import { baseURL, setDefaultHeader } from '.';

const ENERGY = '/energy';

export const getMyEnergyList = async (
  used: boolean = false,
): Promise<EnergyResponse[]> =>
  fetch(`${baseURL}${ENERGY}?used=${used}`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const isRewardAvailable = async (): Promise<boolean> =>
  fetch(`${baseURL}${ENERGY}/availability`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export default getMyEnergyList;
