'use server';

import * as myageApi from '../../services/api/mypage.api';

const getMypageInfo = async () => {
  return myageApi.getMypageInfo();
};

export default getMypageInfo;
