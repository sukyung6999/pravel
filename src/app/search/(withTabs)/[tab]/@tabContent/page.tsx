import ResultList from '@/components/search/list/ResultList';
import styled from '@/components/search/search.module.css';
import TabContentWrap from '@/components/tab/TabContentWrap';
import { CATEGORY } from '@/lib/const/search';

interface SearchTabContentProps {
  params: {
    tab: string;
  };
}

const SearchTabContent = ({ params }: SearchTabContentProps) => {
  return (
    <>
      {CATEGORY.map((item) => (
        <TabContentWrap
          key={`panel${item.en}`}
          id={`panel${item.en}`}
          className={`px-[16px] ${params.tab === item.en ? styled.cont_panel_on : styled.cont_panel}`}
        >
          <ResultList tab={params.tab} />
        </TabContentWrap>
      ))}
    </>
  );
};

export default SearchTabContent;
