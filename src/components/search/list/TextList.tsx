import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useLocalStorage from 'use-local-storage';

import DefaultImg from '@/components/common/empty/DefaultImg';
import StarImg from '@/components/svg/ico_star.svg';
import { ListData } from '@/types/search.type';

import WishBtn from '../util/WishBtn';

interface TextListProps {
  tab: string;
  list: ListData[];
  isLoading: boolean;
}

const TextList = ({ tab, list, isLoading }: TextListProps) => {
  const [scrollY, setScrollY] = useLocalStorage('places_list_scroll', 0);

  useEffect(() => {
    window.scrollTo(0, scrollY);
  }, [scrollY]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  return (
    <ul>
      {list.map((item, idx) => {
        return (
          <li
            key={`${item.contentId}${idx}`}
            className="flex items-center border-solid border-b-[1px] border-gray-300"
          >
            <Link
              href={`/search/${tab}/detail/${item.contentId}`}
              className="flex grow justify-start py-[20px]"
              onClick={() => setScrollY(window.scrollY)}
            >
              <div className="relative overflow-hidden shrink-0 inline-block w-[65px] h-[65px] mr-[12px] rounded-[20px] rounded-bl-[5px]">
                {isLoading && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-[20px] rounded-bl-[5px]" />
                )}
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    fill
                    alt="..."
                    className=""
                    sizes="80vw"
                    priority
                  />
                ) : (
                  <DefaultImg
                    addClass="relative w-[65px] h-[65px]"
                    logoWidth={30}
                    logoHeight={30}
                  />
                )}
              </div>

              <div className="text-left font-semibold">
                <strong className="inline-block mb-[8px] text-[18px] leading-[30px] font-semibold text-gray-900">
                  {item.title}
                </strong>
                <div className="flex mb-[6px] text-gray-700 text-[14px]">
                  {item.category && (
                    <span className="mr-[8px]">{item.category}</span>
                  )}
                  <span className="flex items-center mr-[8px]">
                    <StarImg
                      width={14}
                      height={14}
                      alt="평점"
                      className="mr-[4px]"
                    />
                    {item.rating.toFixed(1)}
                  </span>
                  <span className="pl-[8px] border-l-[1px] border-solid border-gray-300 text-gray-500">
                    리뷰 {item.review}개
                  </span>
                </div>
                <div>
                  <ul>
                    {item.hashtags?.map((tag, idx2) => (
                      <li
                        key={`${tag}${idx2}`}
                        className="inline-block mr-[4px] px-[6px] py-[3px] rounded-[4px] bg-gray-100 text-gray-600 text-[12px]"
                      >
                        #{tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
            <div className="w-[43px] ml-[10px] text-center">
              <WishBtn
                category={tab}
                contentId={item.contentId}
                like={item.wish}
                size={32}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TextList;
