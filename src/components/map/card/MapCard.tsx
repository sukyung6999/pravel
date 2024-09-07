import Image from 'next/image';
import Link from 'next/link';

import DefaultImg from '@/components/common/empty/DefaultImg';
import StarImg from '@/components/svg/ico_star.svg';
import { SanitizedInnerHTML } from '@/lib/const/sanitizedInnerHTMl';
import { ListData } from '@/types/search.type';

import ButtonBox from '../../search/util/ButtonBox';

import style from './MapCard.module.css';

interface MapCardProps {
  item: ListData;
  tab: string;
}

const MapCard = ({ item, tab }: MapCardProps) => {
  return (
    <div className="absolute bottom-0 right-0 left-0 z-50 bg-white rounded-[12px] shadow-[0_-8px_10px_0px_rgba(0,0,0,0.15)] box-border">
      <Link
        href={`/search/${tab}/detail/${item.contentId}`}
        className="flex mb-[68px] px-[16px] pt-[24px] pb-[14px]"
      >
        <div className="overflow-hidden relative shrink-0 w-[70px] h-[98px] rounded-[12px] rounded-bl-[5px]">
          {item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt=""
              fill
              className="object-fill"
              sizes="80vw"
            />
          ) : (
            <DefaultImg boxClass="h-[100%]" logoWidth={30} logoHeight={30} />
          )}
        </div>

        <div className="ml-[10px] w-full">
          <div className="flex justify-between items-center leading-[1.2]">
            <strong className="text-[20px] font-semibold">{item.title}</strong>
            <span className="flex text-[14px] font-semibold">
              <StarImg width={16} height={16} alt="평점" className="mr-[4px]" />
              {item.rating}
            </span>
          </div>
          <strong className="screen_out">태그 목록</strong>
          <ul className={style.list_tag}>
            {item.hashtags?.map((tag) => (
              <li key={tag} className={style.tag_bg}>
                #{tag}
              </li>
            ))}
          </ul>
          <strong className="screen_out">영업 정보</strong>
          <div className="leading-[24px] text-gray-700 font-medium">
            {item.playtime && (
              <dl className={style.item_info}>
                <dt>
                  <span className="ico_pravel ico_time24 mr-[4px]">
                    영업시간
                  </span>
                </dt>
                <dd>{SanitizedInnerHTML(item.playtime)}</dd>
              </dl>
            )}
            <dl className={style.item_info}>
              <dt className="ico_pravel ico_place24 mr-[4px]">위치</dt>
              <dd>{item.address}</dd>
            </dl>
            {item.tel && (
              <dl className={style.item_info}>
                <dt className="ico_pravel ico_phone24 mr-[4px]">연락처</dt>
                <dd>{item.tel}</dd>
              </dl>
            )}
          </div>
        </div>
      </Link>
      <ButtonBox like={item.like} />
    </div>
  );
};

export default MapCard;
