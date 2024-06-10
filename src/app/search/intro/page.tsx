'use client';
import SearchInput from '@/app/_components/common/form/SearchInput';
import HeaderDetail from '@/app/_layout/header_detail';
import { useRouter } from 'next/navigation';

const introList = [
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
  const router = useRouter();

  const handleNavButtonClick = (id: string) => {
    router.push(`/search/list/${id}`)
  }
  return (
    <div>
      <HeaderDetail />
      <div className="w-full px-[16px] box-border">
        <SearchInput />
        <h3 className="mt-[40px] mb-[16px] text-[20px] font-bold">탐색하기</h3>
        <ul className='w-full'>
          {introList.map((item,idx) => (
            <li className="mb-[10px]" key={item.alt}>
              <button className="w-full" type="button" onClick={() => handleNavButtonClick(item.id)}>
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
    </div>
  );
};
export default SearchIntro;
