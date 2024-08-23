import styled from '@/components/search/search.module.css';
import TabButton from '@/components/tab/TabButton';
import TabList from '@/components/tab/TabList';
import { CATEGORY } from '@/lib/const/search';

interface SearchTabListProps {
  params: {
    tab: string;
  };
}

const SearchTabList = ({ params }: SearchTabListProps) => {
  return (
    <TabList
      titleId="searchCategory"
      title="탐색 카테고리"
      tablistClassName={styled.tablist_search}
    >
      {CATEGORY.map((item) => (
        <TabButton
          key={`tab${item.en}`}
          id={`tab${item.en}`}
          name={item.en}
          selected={params.tab === item.en}
        >
          {item.ko}
        </TabButton>
      ))}
    </TabList>
  );
};

export default SearchTabList;
