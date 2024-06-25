'use client';

import styled from './search.module.css';

import { useState } from 'react';

const TagList = ({ list }: { list: [] }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
    <div className="overflow-x-auto scrollbar-hide w-[calc(100%-97px)] pl-[13px] mr-[-16px] border-l-[1px] border-solid border-[#E6E6E6] font-semibold text-[14px]">
      <strong className="screen_out">필터 태그 리스트</strong>
      <ul className="flex grow justify-start">
        {list.map((item, idx) => (
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
  );
};

export default TagList;
