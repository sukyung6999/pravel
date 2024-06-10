'use client';
import HeaderDetail from '@/app/_layout/header_detail';
// import SearchTabList from '@/app/_components/search/SearchTabList';
// import SearchTabContent from '@/app/_components/search/SearchTabContent';

import { useEffect } from 'react';

const LIST = [
  {
    ko: '맛집',
    en: 'food',
  },
  {
    ko: '관광',
    en: 'tour',
  },
  {
    ko: '숙소',
    en: 'accommodation',
  },
];

const SearchPage = ({ params }: { params: { slug: string } }) => {
  // const [currentTab, setCurrentTab] = useState('tab_food');
  
  useEffect(() => {
    // setCurrentTab(`tab_${params.slug}`)
  }, [params]);

  return (
    <div>
      <HeaderDetail />
      {/* <SearchTabList searchList={LIST} /> */}
      {/* <SearchTabContent searchList={searchList}/> */}
    </div>
  );
};
export default SearchPage;
