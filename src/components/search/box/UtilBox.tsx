import FilterTagList from '../list/FilterTagList';

import ShowTypeBox from './ShowTypeBox';

const UtilBox = () => {
  return (
    <div className="flex py-[16px]">
      <ShowTypeBox />
      <FilterTagList list={['한식', '중식', '일식', '양식', '카페']} />
    </div>
  );
};

export default UtilBox;
