import { tabCategory } from '@/types/search.type';

import FilterTagList from '../list/FilterTagList';

import ShowTypeBox from './ShowTypeBox';

interface UtilBoxProps {
  tab: string;
}

const UtilBox = ({ tab }: UtilBoxProps) => {
  const list =
    tab === tabCategory.food
      ? ['전체', '한식', '중식', '일식', '양식', '카페']
      : ['전체'];

  return (
    <div className="flex py-[16px]">
      <ShowTypeBox />
      <FilterTagList list={list} />
    </div>
  );
};

export default UtilBox;
