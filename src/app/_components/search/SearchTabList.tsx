'use client';
import TabButton from "../tab/TabButton"
import TabList from "../tab/TabList"

import styled from './search.module.css';
import {SearchState, searchList} from '../../_types/search.type';

import { useDispatch, useSelector } from "react-redux";
import { setCurrentTab } from "@/app/_store/slice/search";
interface Props {
  searchList: searchList[]
}

const SearchTabList = ({
  searchList
}: Props) => {
  const currentTab = useSelector((state: SearchState) => state.search.tab);
  const dispatch = useDispatch();
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
            selected={currentTab === item.en}
            onClick={() => { dispatch(setCurrentTab({data: item.en})) }}
          >
            {item.ko}
          </TabButton>
        ))}
      </TabList>
  )
}
export default SearchTabList;