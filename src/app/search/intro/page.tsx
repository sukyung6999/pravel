'use client';
import IntroList from '@/app/_components/intro/IntroList';
import HeaderDetail from '@/app/_layout/header/HeaderDetail';
import ModalWrapper from '@/app/_layout/wrapper/ModalWrapper';

const INTRO = [
  {
    img: '/img_food.png',
    alt: '맛집',
    id: 'food'
  },
  {
    img: '/img_tour.png',
    alt: '관광',
    id: 'tour'
  },
  {
    img: '/img_accommodation.png',
    alt: '숙소',
    id: 'accommodation'
  },
];

const SearchIntro = () => {
  return (
    <ModalWrapper>
      <HeaderDetail />
      <IntroList list={INTRO}/>
    </ModalWrapper>
  );
};
export default SearchIntro;
