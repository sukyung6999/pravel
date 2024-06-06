import ButtonIcon from '@/app/_components/common/button/ButtonIcon';
import TabButton from '@/app/_components/common/tab/TabButton';
import TabContentWrap from '@/app/_components/common/tab/TabContentWrap';
import TabList from '@/app/_components/common/tab/TabList';
import TagList from '@/app/_components/search/list/TagList';
import HeaderDetail from '@/app/_layout/header_detail';

const pageType = 'search';
const searchList = [
  {
    'ko': '맛집',
    'en': 'food',
  }, 
  {
    'ko': '관광',
    'en': 'tour'
  },
  {
    'ko': '숙소',
    'en': 'accommodation'
  }
];
const tagList = [
  ['영업중', '식당', '카페', '술집'],
  ['야외', '실내', ''],
  ['호텔', '모텔', '게스트하우스'],
]
const SearchPage = () => {
  return (
    <div>
      <HeaderDetail />
      <TabList
        titleId="searchCategory"
        title="탐색 카테고리"
        tablistClassName="tablist_search"
      >
        {searchList.map((item, idx) => (
          <TabButton
            key={`tab_search${idx}`}
            id={pageType + idx}
            selected={!idx ? true : false}
          >
            {item.ko}
          </TabButton>
        ))}
      </TabList>
      <div className="box_btns">
        <h4 className='screen_out'>보기 방식 선택</h4>
        <ButtonIcon className='ico_pravel ico_map'>지도로 보기</ButtonIcon>
        <ButtonIcon className='ico_pravel ico_list'>리스트로 보기</ButtonIcon>
      </div>
      {searchList.map((item, idx) => (
        <TabContentWrap key={`panel_search${idx}`} id={pageType + idx}>
          <TagList id={item.en} tagList={[]} />
        </TabContentWrap>
      ))}
    </div>
  );
};
export default SearchPage;
