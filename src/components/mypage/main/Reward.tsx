import Link from 'next/link';

import { MypageTotalCountResponse } from '@/types/mypage.type';

import RewardList from './RewordList';

type RewardProps = Omit<MypageTotalCountResponse, 'currentEnergyCount'>;

const Reward = (props: RewardProps) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-gray-600">리워드</h1>
        <Link
          href=""
          className="flex items-center gap-2 text-[14px] text-gray-900 font-semibold"
        >
          <span>사용하러 가기</span>
          <div className="w-4 h-4 bg-[url('/img_pravel.png')] rotate-180 bg-[length:180px_203px]" />
        </Link>
      </div>
      <RewardList {...props} />
    </div>
  );
};

export default Reward;
