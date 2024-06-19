import HeaderDetail from '@/app/_layout/header/HeaderDetail';
import ModalWrapper from '@/app/_layout/wrapper/ModalWrapper';
import IntroList from '../_components/search/IntroList';

const SearchIntro = () => {
  return (
    <ModalWrapper>
      <HeaderDetail />
      <IntroList />
    </ModalWrapper>
  );
};
export default SearchIntro;
