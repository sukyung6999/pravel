import IntroList from '@/app/_components/search/IntroList';
import HeaderDetail from '@/app/_layout/header/HeaderDetail';
import ModalWrapper from '@/app/_layout/wrapper/ModalWrapper';

const SearchIntro = () => {
  return (
    <ModalWrapper>
      <HeaderDetail />
      <IntroList />
    </ModalWrapper>
  );
};
export default SearchIntro;
