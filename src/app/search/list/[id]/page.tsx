import HeaderDetail from '@/app/_layout/header/HeaderDetail';
import SearchTabList from '@/app/_components/search/SearchTabList';
import SearchTabContent from '@/app/_components/search/SearchTabContent';
import ModalWrapper from '@/app/_layout/wrapper/ModalWrapper';

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
    <ModalWrapper>
      <HeaderDetail />
      <SearchTabList searchList={CATEGORY} />
      <SearchTabContent searchList={CATEGORY}/>
    </ModalWrapper>
  );
};
export default SearchPage;
