import Image from 'next/image';
import Link from 'next/link';

import DefaultImg from '@/components/img/DefaultImg';
import StarImg from '@/components/svg/ico_star.svg';
import { ListData } from '@/types/search.type';

interface TextListProps {
  tab: string;
  list: ListData[];
}

const TextList = ({ tab, list }: TextListProps) => {
  if (!Array.isArray(list)) return <p>리스트를 불러오고 있는 중입니다.</p>;
  return (
    <>
      <ul>
        {list.map((item) => {
          return (
            <li
              key={item.contentId}
              className="flex items-center border-solid border-b-[1px] border-gray-300"
            >
              <Link
                href={`/search/${tab}/detail/${item.contentId}`}
                className="flex grow justify-start py-[20px]"
              >
                <div className="relative overflow-hidden inline-block w-[65px] h-[65px] mr-[12px] rounded-[20px] rounded-bl-[5px]">
                  {item.thumbnail ? (
                    <Image src={item.thumbnail} fill alt="..." className="" />
                  ) : (
                    <DefaultImg
                      boxClass="relative w-[65px] h-[65px]"
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
                      {item.hashtags?.map((tag) => (
                        <li
                          key={tag}
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
                <button type="button">
                  <span className="ico_pravel ico_like32_on">좋아요</span>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TextList;
