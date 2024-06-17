'use client';
import SearchInput from '../form/SearchInput';

import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/hooks';
import { setCurrentTab } from '@/lib/features/search/searchSlice';

const INTRO = [
  {
    img: '/img_food.png',
    alt: '맛집',
    id: 'food',
  },
  {
    img: '/img_tour.png',
    alt: '관광',
    id: 'tour',
  },
  {
    img: '/img_accommodation.png',
    alt: '숙소',
    id: 'accommodation',
  },
];

const IntroList = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleNavButtonClick = (id: string) => {
    router.push(`/search/list/${id}`);
    dispatch(setCurrentTab(id));
  };
  return (
    <div className="w-full px-[16px] box-border">
      <SearchInput />
      <h3 className="mt-[40px] mb-[16px] text-[20px] font-bold">탐색하기</h3>
      <ul className="w-full">
        {INTRO.map((item) => (
          <li className="mb-[10px]" key={item.alt}>
            <button
              className="w-full"
              type="button"
              onClick={() => handleNavButtonClick(item.id)}
            >
              <img
                className="w-full"
                src={item.img}
                alt={`${item.alt} 탐색하기`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default IntroList;
