import { memo } from 'react';

import StarImg from '@/components/svg/ico_star.svg';
import { SanitizedInnerHTML } from '@/lib/const/sanitizedInnerHTML';
import { DetailData } from '@/types/search.type';

import IcoCategory from '../../util/category';

import style from '../detail.module.css';

interface InfoBoxProps {
  info: DetailData;
}

const InfoBox = ({ info }: InfoBoxProps) => {
  return (
    <div className={`${style.box_detail} text-[14px]`}>
      <div>
        <span className="inline-flex gap-[4px] mb-[8px] px-[6px] rounded-[4px] bg-[#DAF1EC] font-medium text-[13px] leading-[24px]">
          <IcoCategory category={info.category} />
          {info.category}
        </span>
        <div className="mb-[20px]">
          <strong className="inline-block mr-[12px] font-semibold text-[24px]">
            {info.title}
          </strong>
          <span className=" text-gray-600">{info.addr1}</span>
        </div>
        <div className="mb-[20px] pb-[20px] border-b border-gray-200">
          <span className="inline-flex gap-[4px] items-center mr-[12px] pr-[12px] border-r border-gray-300 font-semibold text-[16px] leading-[19px]">
            <StarImg width={14} height={14} alt="평점" />
            {info.rating.toFixed(1)}
          </span>
          <span className="text-gray-600 text-[15px] leading-[19px] align-top">
            리뷰 {info.review}개
          </span>
          {info.hashtags && (
            <>
              <strong className="screen_out">태그 목록</strong>
              <ul className={style.list_tag}>
                {info.hashtags.map((tag) => (
                  <li key={tag} className={style.tag_bg}>
                    #{tag}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <strong className="screen_out">영업 정보</strong>
      <div className="leading-[24px] text-gray-700 font-medium">
        {info.playtime && (
          <dl className={style.item_info}>
            <dt>
              <span className="ico_pravel ico_time24 mr-[4px]">영업시간</span>
            </dt>
            <dd>{SanitizedInnerHTML(info.playtime)}</dd>
          </dl>
        )}
        <dl className={style.item_info}>
          <dt className="ico_pravel ico_place24 mr-[4px]">위치</dt>
          <dd>
            {info.addr1}
            {info.addr2}
          </dd>
        </dl>
        {info.homepage && (
          <dl className={style.item_info}>
            <dt className="ico_pravel ico_site24 mr-[4px]">관련 사이트</dt>
            <dd className="font-bold text-primary">
              {SanitizedInnerHTML(info.homepage)}
            </dd>
          </dl>
        )}
        {info.tel && (
          <dl className={style.item_info}>
            <dt className="ico_pravel ico_phone24 mr-[4px]">연락처</dt>
            <dd className="font-bold text-primary">{info.tel}</dd>
          </dl>
        )}
      </div>
    </div>
  );
};

export default memo(InfoBox);
