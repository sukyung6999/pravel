import Image from 'next/image';

import EmptySearch from '@/components/common/empty/EmptySearch';
import { useFetchDetailMenu } from '@/hook/useSearch';
import { TabCategory } from '@/types/search.type';

import style from '../detail.module.css';

interface MenuBoxProps {
  tab: string;
  id: string;
}

const MenuBox = ({ tab, id }: MenuBoxProps) => {
  const { data } = useFetchDetailMenu({ tab, id });

  const restBoxs = 3 - ((data?.length || 0) % 3);

  return (
    <div className={style.box_detail}>
      <strong className={style.tit_detail}>
        {tab === TabCategory.food ? '메뉴' : '전경'}
      </strong>
      {!data?.length && (
        <EmptySearch
          logoWidth={30}
          logoHeight={30}
          addClass=""
          text="이미지가 아직 등록되지 않았습니다.<br> 추후 확인해주세요"
        />
      )}
      <ul className="flex flex-wrap justify-between items-center gap-[8px]">
        {data?.map((item: string, idx: number) => (
          <li
            key={`img-${id}${idx}`}
            className="overflow-hidden relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:w-[calc(100%/3)] before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px] bg-gray-100"
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
              className="relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:w-[calc(100%/3)] before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px]"
            ></li>
          ))}
      </ul>
      {!!data?.length && (
        <button type="button" className="btn_bg_black mt-[40px]">
          메뉴 더보기
        </button>
      )}
    </div>
  );
};

export default MenuBox;
