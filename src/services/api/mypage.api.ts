import { MypageTotalCountResponse } from '@/types/mypage.type';

import { baseURL, origin, setDefaultHeader } from '.';

const MYPAGE = '/mypage';

export const getMypageInfo = (
  token: string,
): Promise<MypageTotalCountResponse> =>
  fetch(`${origin}${baseURL}${MYPAGE}`, {
    headers: setDefaultHeader(token),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export default getMypageInfo;
