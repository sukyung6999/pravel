'use client';
import ButtonIcon from '@/app/_components/common/button/ButtonIcon';
import TabButton from '@/app/_components/common/tab/TabButton';
import TabContentWrap from '@/app/_components/common/tab/TabContentWrap';
import TabList from '@/app/_components/common/tab/TabList';
import List from '@/app/_components/search/list/List';
import HeaderDetail from '@/app/_layout/header_detail';

import styled from '../search.module.css';
import { useState } from 'react';

const pageType = 'search';
const searchList = [
  {
    ko: '맛집',
    en: 'food',
  },
  {
    ko: '관광',
    en: 'tour',
  },
  {
    ko: '숙소',
    en: 'accommodation',
  },
];
const tagList = [
  ['영업중', '식당', '카페', '술집'],
  ['야외', '실내'],
  ['호텔', '모텔', '게스트하우스'],
];
const SearchPage = () => {
  const [currentTab, setCurrentTab] = useState('tab_food');
  return (
    <div>
      <HeaderDetail />
      <TabList
        titleId="searchCategory"
        title="탐색 카테고리"
        tablistClassName={styled.tablist_search}
      >
        {searchList.map(item => (
          <TabButton
            key={`tab_${item.en}`}
            id={`tab_${item.en}`}
            selected={currentTab.includes(item.en) ? true : false}
            onChangeCurrentTab={(tab) => { setCurrentTab(tab)}}
          >
            {item.ko}
          </TabButton>
        ))}
      </TabList>
      {searchList.map((item, idx) => (
        <TabContentWrap
          key={`panel_${item.en}`}
          id={`panel_${item.en}`}
          className={`px-[16px] ${currentTab.includes(item.en) ? 'block' : 'hidden'}`}
        >
          <div className="flex justify-start py-[16px]">
            <div className="inline-block mr-[14px]">
              <h4 className="screen_out">보기 방식 선택</h4>
              <ButtonIcon className="ico_pravel ico_map">
                지도로 보기
              </ButtonIcon>
              <ButtonIcon className="ico_pravel ico_list ml-[10px]">
                리스트로 보기
              </ButtonIcon>
            </div>
            <div className="overflow-x-auto scrollbar-hide w-[calc(100%-97px)] pl-[13px] mr-[-16px] border-l-[1px] border-solid border-[#E6E6E6] font-semibold text-[14px]">
              <strong className="screen_out">필터 태그 리스트</strong>
              <ul className="flex grow justify-start">
                {tagList[idx].map((item, idx) => (
                  <li key={`tag_type${idx}`}>
                    <button className={`${styled.btn_tag}`}>{item}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
            1,000개의 매장
          </span>
          <List type={item.ko} />
        </TabContentWrap>
      ))}
    </div>
  );
};
export default SearchPage;
