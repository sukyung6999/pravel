'use server';

import * as energyApi from '../../services/api/energy.api';

const getMyEnergyList = async (used: boolean) => {
  return energyApi.getMyEnergyList(used);
};

export default getMyEnergyList;
