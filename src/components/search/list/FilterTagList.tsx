'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import styled from '../search.module.css';

interface FilterTagListProps {
  tab: string;
  type: string;
  filterList: string[] | [];
  taglist: {
    id: string;
    text: string;
  }[];
}

const FilterTagList = ({
  tab,
  type,
  filterList,
  taglist,
}: FilterTagListProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [filterLists, setFilterLists] = useState<string[]>(filterList);

  useEffect(() => {
    router.replace(
      `${pathname}/?type=${type}&filter=${filterLists.join(',')}`,
      {
        scroll: false,
      },
    );
  }, [filterLists]);

  useEffect(() => {
    setFilterLists(['all']);
  }, [tab]);

  const handleTagButtonClick = (id: string) => {
    if (id === 'all' || filterLists?.length === 5) {
      setFilterLists(['all']);
    } else if (filterLists.includes(id)) {
      setFilterLists((prev) => prev.filter((item) => item !== id));
    } else {
      setFilterLists((prev) => {
        const newList = prev.filter((item) => item !== 'all');

        return [...newList, id];
      });
    }
  };

  return (
    <div className="overflow-x-auto scrollbar-hide w-[calc(100%-97px)] pl-[13px] mr-[-16px] border-l-[1px] border-solid border-[#E6E6E6] font-semibold text-[14px]">
      <strong className="screen_out">필터 태그 리스트</strong>
      <ul className="flex grow justify-start">
        {taglist.map((item, idx) => (
          <li key={`tag_type${idx}`}>
            <button
              className={`${styled.btn_tag} ${filterLists.includes(item.id) ? styled.on : ''}`}
              onClick={() => handleTagButtonClick(item.id)}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterTagList;
