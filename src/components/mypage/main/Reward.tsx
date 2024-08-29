import Link from 'next/link';

import { MypageTotalCountResponse } from '@/types/mypage.type';

import RewardList from './RewardList';

type RewardProps = Omit<MypageTotalCountResponse, 'currentEnergyCount'>;

const Reward = (props: RewardProps) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-gray-600">리워드</h1>
        <Link
          href="/mypage/reward-history"
          className="flex items-center gap-2 text-[14px] text-gray-900 font-semibold"
        >
          <span>사용하러 가기</span>
          <i className="ico_pravel ico_black_arrow16" />
        </Link>
      </div>
      <RewardList {...props} />
    </div>
  );
};

export default Reward;
