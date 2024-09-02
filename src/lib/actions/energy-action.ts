'use server';

import * as energyApi from '../../services/api/energy.api';
import { getToken } from '../auth';

const getMyEnergyList = async (used: boolean) => {
  const token = await getToken();

  return energyApi.getMyEnergyList(token, used);
};

export default getMyEnergyList;
