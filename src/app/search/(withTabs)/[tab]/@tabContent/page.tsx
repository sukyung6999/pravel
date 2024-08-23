import ResultList from '@/components/search/list/ResultList';
import TabContentWrap from '@/components/tab/TabContentWrap';
import { useFetchKeyword } from '@/hook/useKogpt';
import { ListData } from '@/types/search.type';

interface Params {
  tab: string;
}
interface SearchParams {
  [key: string]: string;
}

interface SearchTabContentProps {
  params: Params;
  searchParams: SearchParams;
}
const SearchTabContent = ({ params, searchParams }: SearchTabContentProps) => {
  return (
    <>
      <TabContentWrap className={'px-[16px]'}>
        <ResultList tab={params.tab} type={searchParams.type} />
      </TabContentWrap>
    </>
  );
};

export default SearchTabContent;
