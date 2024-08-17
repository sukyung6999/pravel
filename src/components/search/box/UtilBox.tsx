import FilterTagList from '../list/FilterTagList';

import ShowTypeBox from './ShowTypeBox';

const UtilBox = () => {
  return (
    <div className="flex py-[16px]">
      <ShowTypeBox />
      <FilterTagList list={['영업중', '식당', '카페', '술집/바']} />
    </div>
  );
};

export default UtilBox;
