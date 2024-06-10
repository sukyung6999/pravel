'use client';
import IntroList from '@/app/_components/intro/IntroList';
import HeaderDetail from '@/app/_layout/header_detail';

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
    <div>
      <HeaderDetail />
      <IntroList list={INTRO}/>
    </div>
  );
};
export default SearchIntro;
