import HeaderDetail from '@/app/_layout/header/HeaderDetail';
import SearchTabList from '@/app/_components/search/SearchTabList';
import SearchTabContent from '@/app/_components/search/SearchTabContent';
import ModalWrapper from '@/app/_layout/wrapper/ModalWrapper';

const SearchPage = ({ params }: { params: { id: string } }) => {
  return (
    <ModalWrapper>
      <HeaderDetail />
      <SearchTabList tab={params.id} />
      <SearchTabContent tab={params.id} />
    </ModalWrapper>
  );
};
export default SearchPage;
