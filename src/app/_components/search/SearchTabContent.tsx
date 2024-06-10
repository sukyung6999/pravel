'use client';
import TabContentWrap from "../common/tab/TabContentWrap";
import List from "./List";

import styled from './search.module.css';
import {searchList} from '../../_types/search.type';

import { useState } from 'react';

interface Props {
  searchList: searchList[]
}

const SearchTabContent = ({
  searchList
}: Props) => {
  const [showType, setShowType] = useState('list');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tagList = [
    ['영업중', '식당', '카페', '술집'],
    ['야외', '실내'],
    ['호텔', '모텔', '게스트하우스'],
  ];

  const handleTagButtonClick = (
    text: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const { className } = event.target as HTMLButtonElement;

    if (className.includes('on')) {
      setSelectedTags((prev) => [...prev].filter((item) => item !== text));
    } else {
      setSelectedTags((prev) => [...prev, text]);
    }
  };

  return (
    <>
      {searchList.map((item, idx) => (
        <TabContentWrap
          key={`panel_${item.en}`}
          id={`panel_${item.en}`}
          // className={`px-[16px] ${currentTab.includes(item.en) ? 'block' : 'hidden'}`}
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
            <div className="overflow-x-auto scrollbar-hide w-[calc(100%-97px)] pl-[13px] mr-[-16px] border-l-[1px] border-solid border-[#E6E6E6] font-semibold text-[14px]">
              <strong className="screen_out">필터 태그 리스트</strong>
              <ul className="flex grow justify-start">
                {tagList[idx].map((item, idx) => (
                  <li key={`tag_type${idx}`}>
                    <button
                      className={`${styled.btn_tag} ${selectedTags.includes(item) ? styled.on : ''}`}
                      onClick={(event) => handleTagButtonClick(item, event)}
                    >
                      {item}
                    </button>
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
    </>
  )
}
export default SearchTabContent;