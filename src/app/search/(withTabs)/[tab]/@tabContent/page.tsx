import ResultList from '@/components/search/list/ResultList';
import TabContentWrap from '@/components/tab/TabContentWrap';

interface SearchTabContentProps {
  params: {
    tab: string;
  };
}

const SearchTabContent = ({ params }: SearchTabContentProps) => {
  return (
    <>
      <TabContentWrap className={'px-[16px]'}>
        <ResultList tab={params.tab} />
      </TabContentWrap>
    </>
  );
};

export default SearchTabContent;
