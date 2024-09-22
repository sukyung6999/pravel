'use client';

import { useEffect, useRef } from 'react';

import { MypageTotalCountResponse } from '@/types/mypage.type';

type RewardListProps = Omit<MypageTotalCountResponse, 'currentEnergyCount'>;

const RewardList = ({
  currentCouponCount,
  currentGiftCount,
  totalRewardCount,
}: RewardListProps) => {
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!percentRef.current) return;
    percentRef.current.style.width = `${(1 / totalRewardCount) * 100}%`;
  }, [percentRef, currentCouponCount, currentGiftCount, totalRewardCount]);

  return (
    <div className="mt-[10px] p-[20px] bg-white rounded-[12px] bg-[url('/mypage/trophy.png')] bg-no-repeat bg-contain bg-right">
      <div className="flex justify-between items-center text-[13px] min-w-[165px] w-[calc(100%-159px)]">
        <span className="text-gray-600">획득한 리워드</span>
        <div>
          <span className="text-primary">
            {currentCouponCount + currentGiftCount}
          </span>
          <span className="text-gray-400">/{totalRewardCount}</span>
        </div>
      </div>
      <div className="relative mt-[10px] min-w-[165px] h-[5px] w-[calc(100%-159px)]">
        <div className="container h-full bg-gray-100 rounded-[15px]" />
        <div
          ref={percentRef}
          className={`absolute top-0 w-0 value h-full bg-primary rounded-[15px] transition-all`}
        />
      </div>
      <div className="w-[calc(100%-159px)] flex gap-[5px] mt-[16px]">
        <div className="flex-1 h-[54px] bg-gray-100 rounded-[8px] py-[6px] pl-[12px] pr-[19px]">
          <h3 className="font-semibold text-[13px] text-gray-600">쿠폰</h3>
          <div className="flex items-center justify-between">
            <i className="ico_pravel ico_coupon24 relative" />
            <span className="font-semibold text-gray-700">
              {currentCouponCount}
            </span>
          </div>
        </div>
        <div className="flex-1 h-[54px] bg-gray-100 rounded-[8px] py-[6px] pl-[12px] pr-[19px]">
          <h3 className="font-semibold text-[13px] text-gray-600">기념품</h3>
          <div className="flex items-center justify-between">
            <i className="ico_pravel ico_reward24 relative" />
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
