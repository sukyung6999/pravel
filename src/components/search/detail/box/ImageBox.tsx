'use client';

import { useEffect, useState } from 'react';

import { useFetchFoodDetail, useFetchTourDetail } from '@/hook/useSearch';
import { tabCategory } from '@/types/search.type';

interface ImageBoxProps {
  tab: string;
  detailId: string;
}

const ImageBox = ({ tab, detailId }: ImageBoxProps) => {
  const [data, setData] = useState(null);

  const { data: foodData } = useFetchFoodDetail(detailId);
  const { data: tourData } = useFetchTourDetail(detailId);

  useEffect(() => {
    if (tab === tabCategory.food) {
      setData(foodData);
    } else {
      setData(tourData);
    }
  }, [tab, detailId, foodData, tourData]);
  return (
    <div className="relative">
      {/* <img src={data.firstImage} alt="" className="object-cover bg-gray-700" /> */}
      <button
        type="button"
        className="absolute bottom-[16px] right-[16px] w-[32px] h-[32px] p-[4px] bg-[#1A1E27B2] box-border rounded-full leading-[22px]"
      >
        <span className="ico_pravel ico_share24">공유하기</span>
      </button>
    </div>
  );
};

export default ImageBox;
