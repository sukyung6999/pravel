import style from './MapCard.module.css';
import Image from 'next/image';
import LikeImg from '@/components/svg/ico_like.svg';
import StarImg from '@/components/svg/ico_star.svg';
import UtilBox from '../detail/box/UtilBox';
const MapCard = () => {
  return (
    <div className="absolute bottom-0 right-0 left-0 z-50 bg-white rounded-[12px] shadow-[0_-8px_10px_0px_rgba(0,0,0,0.15)] box-border">
      <div className="flex mb-[68px] px-[16px] pt-[24px] pb-[14px]">
        <Image
          src="/img_dummy.png"
          alt=""
          width={70}
          height={98}
          className="object-fill h-[98px]"
        />
        <div className="ml-[10px] w-full">
          <div className="flex justify-between items-center leading-[1.2]">
            <strong className="text-[20px] font-semibold">제목은여기에</strong>
            <span className="flex text-[14px] font-semibold">
              <StarImg width={16} height={16} alt="평점" className="mr-[4px]" />
              4.3
            </span>
          </div>
          <strong className="screen_out">태그 목록</strong>
          <ul className={style.list_tag}>
            <li className={style.tag_bg}>#파스타</li>
            <li className={style.tag_bg}>#리조또</li>
            <li className={style.tag_bg}>#타코</li>
            <li className={style.tag_bg}>#피자</li>
          </ul>
          <strong className="screen_out">영업 정보</strong>
          <div className="leading-[24px] text-gray-700 font-medium">
            <dl className={style.item_info}>
              <dt>
                <span className="ico_pravel ico_time24 mr-[4px]">영업시간</span>
              </dt>
              <dd>
                <em className="mr-[8px] font-bold not-italic">영업중</em>
                화-일 11:00 ~ 21:00
              </dd>
            </dl>
            <dl className={style.item_info}>
              <dt className="ico_pravel ico_place24 mr-[4px]">위치</dt>
              <dd>
                제주특별자치도 서귀포시 특별자치도, 안덕면 화순로 154 25 1층
                화순리 1053-128번지 1층
              </dd>
            </dl>
            <dl className={style.item_info}>
              <dt className="ico_pravel ico_site24 mr-[4px]">관련 사이트</dt>
              <dd>
                <a href="instagram.com" target="_blank">
                  instagram.com
                </a>
              </dd>
            </dl>
            <dl className={style.item_info}>
              <dt className="ico_pravel ico_phone24 mr-[4px]">연락처</dt>
              <dd className="font-bold text-primary">064-123-4567</dd>
            </dl>
          </div>
        </div>
      </div>
      {/* <div className='px-[16px] py-[20px] border-box'>
        <button type="button" className='align-top'>
          <LikeImg width={46} height={46} alt="위시리스트" />
        </button>
        <button className='w-[calc(100%-62px)] ml-[16px] px-[21px] py-[14px] font-bold text-[16px] text-white bg-primary rounded-[12px]'>장소 추가</button>
      </div> */}
      <UtilBox />
    </div>
  );
};

export default MapCard;
