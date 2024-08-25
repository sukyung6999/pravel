'use server';

import * as myageApi from '../../services/api/mypage.api';
import { getToken } from '../auth';

const getMypageInfo = async () => {
  const token = await getToken();

  return myageApi.getMypageInfo(token);
};

export default getMypageInfo;
