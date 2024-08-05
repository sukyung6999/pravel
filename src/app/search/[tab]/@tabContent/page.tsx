import SearchList from '@/components/search/list/SearchList';
import ShowTypeList from '@/components/search/list/ShowTypeList';
import styled from '@/components/search/search.module.css';
import TabContentWrap from '@/components/tab/TabContentWrap';
import CATEGORY from '@/lib/const/search';

interface Props {
  params: {
    tab: string;
  };
}

// const TAGLIST = {
//   food: ['영업중', '식당', '카페', '술집'],
//   tour: ['야외', '실내'],
//   accommodation: ['호텔', '모텔', '게스트하우스'],
// };

const SearchTabContent = ({ params }: Props) => {
  return (
    <>
      {CATEGORY.map((item) => (
        <TabContentWrap
          key={`panel_${item.en}`}
          id={`panel_${item.en}`}
          className={`px-[16px] ${params.tab === item.en ? styled.cont_panel_on : styled.cont_panel}`}
        >
          <ShowTypeList />
          <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
            1,000개의 매장
          </span>
          <SearchList type={item.ko} />
        </TabContentWrap>
      ))}
    </>
  );
};

export default SearchTabContent;
