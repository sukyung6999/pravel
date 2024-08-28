'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styled from '../search.module.css';

interface FilterTagListProps {
  list: {
    id: string;
    text: string;
  }[];
}

const FilterTagList = ({ list }: FilterTagListProps) => {
  const typeParam = useSearchParams().get('type');
  const filterParam = useSearchParams().get('filter');
  const router = useRouter();
  const pathname = usePathname();

  const filters = filterParam?.split(',') || [];

  const [filterList, setFilterList] = useState<string[]>(filters);

  useEffect(() => {
    router.replace(
      `${pathname}/?type=${typeParam}&filter=${filterList.join(',')}`,
    );
  }, [filterList]);

  const handleTagButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    const { className, innerText } = event.target as HTMLButtonElement;

    if (className.includes('on')) {
      if (innerText !== '전체') {
        setFilterList((prev) => [...prev].filter((item) => item !== id));
      }
    } else if (filterList?.length === 4) {
      setFilterList(['all']);
    } else {
      setFilterList((prev) => {
        let newList = [...prev].filter((item) => item !== 'all');
        return [...newList, id];
      });
    }
  };

  return (
    <div className="overflow-x-auto scrollbar-hide w-[calc(100%-97px)] pl-[13px] mr-[-16px] border-l-[1px] border-solid border-[#E6E6E6] font-semibold text-[14px]">
      <strong className="screen_out">필터 태그 리스트</strong>
      <ul className="flex grow justify-start">
        {list.map((item, idx) => (
          <li key={`tag_type${idx}`}>
            <button
              className={`${styled.btn_tag} ${filterList.some((f) => item.id === f) ? styled.on : ''}`}
              onClick={(event) => handleTagButtonClick(event, item.id)}
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
