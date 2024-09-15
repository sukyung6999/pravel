import { MypageTotalCountResponse } from '@/types/mypage.type';

import { baseURL, setDefaultHeader } from '.';

const MYPAGE = '/mypage';

export const getMypageInfo = async (): Promise<MypageTotalCountResponse> =>
  fetch(`${baseURL}${MYPAGE}`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export default getMypageInfo;
