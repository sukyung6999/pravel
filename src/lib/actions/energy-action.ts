'use server';

import * as energyApi from '../../services/api/energy.api';
import { getToken } from '../auth';

const getEnergyList = async (used: boolean) => {
  const token = await getToken();

  return energyApi.getEnergyList(token, used);
};

export default getEnergyList;
