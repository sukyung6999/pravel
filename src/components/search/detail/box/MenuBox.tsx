import { memo } from 'react';
import Image from 'next/image';

import EmptySearch from '@/components/common/empty/EmptySearch';
import ImageSkeleton from '@/components/common/skeleton/ImageSkeleton';
import { useFetchDetailMenu } from '@/hook/useDetail';
import { TabCategory } from '@/types/search.type';

import style from '../detail.module.css';

interface MenuBoxProps {
  tab: string;
  id: string;
}

const MenuBox = ({ tab, id }: MenuBoxProps) => {
  const { data, isFetching, fetchNextPage } = useFetchDetailMenu({
    tab,
    id,
  });

  const allImages = data?.pages.flatMap((page) => page.list) || [];
  const menuListLength = allImages.length;
  const totalImages = data?.pages[0].totalCount as number;

  const restBoxs = 3 - ((menuListLength || 0) % 3);

  const handleClickMore = () => {
    if (totalImages > menuListLength) fetchNextPage();
  };

  return (
    <div className={style.box_detail}>
      <strong className={style.tit_detail}>
        {tab === TabCategory.food ? '메뉴' : '전경'}
      </strong>
      {!menuListLength ? (
        <EmptySearch
          logoWidth={30}
          logoHeight={30}
          addClass=""
          text="이미지가 아직 등록되지 않았습니다.<br> 추후 확인해주세요"
        />
      ) : (
        <ul className="flex flex-wrap justify-between items-center gap-[8px]">
          {isFetching &&
            Array.from({ length: 9 }).map((_, idx) => (
              <li
                key={`skeleton-${id}${idx}`}
                className="overflow-hidden relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px] bg-gray-100"
              >
                <ImageSkeleton width="100%" height="100%" />
              </li>
            ))}
          {allImages.map((item: string, idx: number) => (
            <li
              key={`img-${id}${idx}`}
              className="overflow-hidden relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px] bg-gray-100"
            >
              <Image
                src={item}
                alt=""
                fill
                sizes="(max-width: 780px) 100vw, 80vw"
                className="absolute left-0 top-0 w-full h-full"
              />
            </li>
          ))}
          {restBoxs < 3 &&
            Array.from({ length: restBoxs }, (_, idx) => (
              <li
                key={idx}
                className="relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px]"
              ></li>
            ))}
        </ul>
      )}
      {totalImages > menuListLength && (
        <button
          type="button"
          className="btn_bg_black mt-[40px]"
          onClick={handleClickMore}
        >
          메뉴 더보기
        </button>
      )}
    </div>
  );
};

export default memo(MenuBox);
