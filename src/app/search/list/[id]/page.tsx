import SearchTabContent from '@/components/search/SearchTabContent';
import SearchTabList from '@/components/search/SearchTabList';
import HeaderDetail from '@/layout/header/HeaderDetail';
import ModalWrapper from '@/layout/wrapper/ModalWrapper';

const SearchPage = ({ params }: { params: { id: string } }) => {
  return (
    <ModalWrapper>
      <HeaderDetail moveTo="/search" />
      <SearchTabList tab={params.id} />
      <SearchTabContent tab={params.id} />
    </ModalWrapper>
  );
};

export default SearchPage;
