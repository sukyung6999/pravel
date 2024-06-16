'use client';
import TabButton from '../tab/TabButton';
import TabList from '../tab/TabList';

import styled from './search.module.css';
import { searchList } from '../../_types/search.type';

import { useAppSelector, useAppDispatch } from '../../../lib/hooks';
import { setCurrentTab } from '@/lib/features/search/searchSlice';
import { useRouter } from 'next/navigation';

interface Props {
  searchList: searchList[];
}

const SearchTabList = ({ searchList }: Props) => {
  const router = useRouter();
  const tab = useAppSelector((state) => state.search.tab);
  const dispatch = useAppDispatch();
  return (
    <TabList
      titleId="searchCategory"
      title="탐색 카테고리"
      tablistClassName={styled.tablist_search}
    >
      {searchList.map((item: searchList) => (
        <TabButton
          key={`tab_${item.en}`}
          id={`tab_${item.en}`}
          selected={tab === item.en}
          onClick={() => {
            dispatch(setCurrentTab(item.en));
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
