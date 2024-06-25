import HeaderDetail from '@/layout/header/HeaderDetail';
import ModalWrapper from '@/layout/wrapper/ModalWrapper';
import IntroList from '../../components/search/IntroList';

const SearchIntro = () => {
  return (
    <ModalWrapper>
      <HeaderDetail />
      <IntroList />
    </ModalWrapper>
  );
};
export default SearchIntro;
