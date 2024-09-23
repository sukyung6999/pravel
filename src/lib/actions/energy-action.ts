'use server';

import * as energyApi from '../../services/api/energy.api';

export const getMyEnergyList = async (used: boolean) => {
  return energyApi.getMyEnergyList(used);
};

export const isRewardAvailable = async () => {
  return energyApi.isRewardAvailable();
};
