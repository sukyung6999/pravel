'use client';
import { useFetchSearchList } from '@/hook/useSearch';
import { ShowTypeCategory } from '@/types/search.type';

import MapBox from '../../map/MapBox';
import UtilBox from '../box/UtilBox';

import TextList from './TextList';

interface ResultListProps {
  tab: string;
  type: string;
}

const ResultList = ({ tab, type }: ResultListProps) => {
  const { data, isLoading } = useFetchSearchList({ tab, pageNo: 1 });

  if (isLoading) return <p>데이터를 불러오고 있습니다.</p>;

  return (
    <>
      <UtilBox />
      {type === ShowTypeCategory.list && (
        <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
          {data.totalCount}개의 매장
        </span>
      )}
      <strong className="screen_out">{type} 리스트</strong>
      {type === ShowTypeCategory.list ? (
        <TextList tab={tab} list={data.list} />
      ) : (
        <MapBox key={tab} list={data.list} tab={tab} />
      )}
    </>
  );
};

export default ResultList;
