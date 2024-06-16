'use client';
import TabContentWrap from '../tab/TabContentWrap';
import SearchListItem from './SearchListItem';

import styled from './search.module.css';
import { searchList } from '../../_types/search.type';

import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import TagList from './TagList';

interface Props {
  searchList: searchList[];
}

const TAGLIST = {
  food: ['영업중', '식당', '카페', '술집'],
  tour: ['야외', '실내'],
  accommodation: ['호텔', '모텔', '게스트하우스'],
};

const SearchTabContent = ({ searchList }: Props) => {
  const [showType, setShowType] = useState('list');

  const tab = useAppSelector((state) => state.search.tab);

  return (
    <>
      {searchList.map((item, idx) => (
        <TabContentWrap
          key={`panel_${item.en}`}
          id={`panel_${item.en}`}
          className={`px-[16px] ${tab === item.en ? styled.cont_panel_on : styled.cont_panel}`}
        >
          <div className="flex justify-start py-[16px]">
            <div className="inline-block mr-[14px]">
              <h4 className="screen_out">보기 방식 선택</h4>
              <button
                type="button"
                className={`ico_pravel ico_map${showType === 'map' ? '_on' : ''}`}
                onClick={() => setShowType('map')}
              >
                지도로 보기
              </button>
              <button
                type="button"
                className={`ico_pravel ico_list${showType === 'list' ? '_on' : ''} ml-[10px]`}
                onClick={() => setShowType('list')}
              >
                리스트로 보기
              </button>
            </div>
            {/* <TagList list={TAGLIST[currentTab] || TAGLIST['food']}/> */}
          </div>
          <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
            1,000개의 매장
          </span>
          <SearchListItem type={item.ko} />
        </TabContentWrap>
      ))}
    </>
  );
};
export default SearchTabContent;
