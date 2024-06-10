import HeaderDetail from '@/app/_layout/header_detail';
import SearchTabList from '@/app/_components/search/SearchTabList';
import SearchTabContent from '@/app/_components/search/SearchTabContent';

const CATEGORY = [
  {
    ko: '맛집',
    en: 'food',
  },
  {
    ko: '관광',
    en: 'tour',
  },
  {
    ko: '숙소',
    en: 'accommodation',
  },
];

const SearchPage = () => {
  return (
    <div>
      <HeaderDetail />
      <SearchTabList searchList={CATEGORY} />
      <SearchTabContent searchList={CATEGORY}/>
    </div>
  );
};
export default SearchPage;
