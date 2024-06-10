import TabButton from "../common/tab/TabButton"
import TabList from "../common/tab/TabList"

import styled from './search.module.css';
import {searchList} from '../../_types/search.type';

interface Props {
  searchList: searchList[]
}

const SearchTabList = ({
  searchList
}: Props) => {
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
            // selected={currentTab.includes(item.en) ? true : false}
            // onChangeCurrentTab={(tab) => { setCurrentTab(tab)}}
          >
            {item.ko}
          </TabButton>
        ))}
      </TabList>
  )
}
export default SearchTabList;