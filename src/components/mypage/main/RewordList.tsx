import Image from 'next/image';

import { MypageTotalCountResponse } from '@/types/mypage.type';

type RewardListProps = Omit<MypageTotalCountResponse, 'currentEnergyCount'>;

const RewardList = ({
  currentCouponCount,
  currentGiftCount,
  totalRewardCount,
}: RewardListProps) => {
  return (
    <div className="mt-[10px] p-5 bg-white rounded-xl bg-[url('/mypage/trophy.png')] bg-no-repeat bg-right">
      <div className="flex justify-between items-center text-[13px] w-[165px]">
        <span className="text-gray-600">획득한 리워드</span>
        <div>
          <span className="text-primary">
            {currentCouponCount + currentGiftCount}
          </span>
          <span className="text-gray-400">/{totalRewardCount}</span>
        </div>
      </div>
      <div className="relative mt-[10px] w-[165px] h-[5px]">
        <div className="container h-full bg-gray-100 rounded-[15px]" />
        <div className="absolute w-[60%] top-0 value h-full bg-primary rounded-[15px]" />
      </div>
      <div className="flex gap-[5px] mt-[10px]">
        <div className="w-20 h-[54px] bg-gray-100 rounded-lg py-[6px] pl-3 pr-[19px]">
          <h3 className="font-semibold text-[13px] text-gray-600">쿠폰</h3>
          <div className="flex items-center justify-between">
            <div className="w-6 h-6 relative">
              <Image src="/mypage/coupon.png" alt="쿠폰" fill />
            </div>
            <span className="font-semibold text-gray-700">
              {currentCouponCount}
            </span>
          </div>
        </div>
        <div className="w-20 h-[54px] bg-gray-100 rounded-lg py-[6px] pl-3 pr-[19px]">
          <h3 className="font-semibold text-[13px] text-gray-600">기념품</h3>
          <div className="flex items-center justify-between">
            <div className="w-6 h-6 relative">
              <Image src="/mypage/reward.png" alt="기념품" fill />
            </div>
            <span className="font-semibold text-gray-700">
              {currentGiftCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardList;
