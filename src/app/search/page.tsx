import IntroList from '@/components/search/IntroList';
import HeaderDetail from '@/layout/header/HeaderDetail';
import ModalWrapper from '@/layout/wrapper/ModalWrapper';

const SearchIntro = () => {
  return (
    <ModalWrapper>
      <HeaderDetail />
      <IntroList />
    </ModalWrapper>
  );
};

export default SearchIntro;
