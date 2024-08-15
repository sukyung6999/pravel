import ShowType from '@/components/search/box/ShowTypeBox';

import FilterTagList from '../list/FilterTagList';

const UtilBox = () => {
  return (
    <div className="flex py-[16px]">
      <ShowType />
      <FilterTagList list={['영업중', '식당', '카페', '술집/바']} />
    </div>
  );
};

export default UtilBox;
