'use client';
import TabButton from '../tab/TabButton';
import TabList from '../tab/TabList';
import { CATEGORY } from '@/app/_lib/const/search';

import styled from './search.module.css';

import { useRouter } from 'next/navigation';

interface Props {
  tab: string;
}

const SearchTabList = ({ tab }: Props) => {
  const router = useRouter();

  return (
    <TabList
      titleId="searchCategory"
      title="탐색 카테고리"
      tablistClassName={styled.tablist_search}
    >
      {CATEGORY.map((item) => (
        <TabButton
          key={`tab_${item.en}`}
          id={`tab_${item.en}`}
          selected={tab === item.en}
          onClick={() => {
            router.push(`/search/list/${item.en}`);
          }}
        >
          {item.ko}
        </TabButton>
      ))}
    </TabList>
  );
};
export default SearchTabList;
