'use client';

import { useSearchParams } from 'next/navigation';

import { useFetchSearchList } from '@/hook/useSearch';
import { ShowTypeCategory } from '@/types/search.type';

import MapBox from '../../map/MapBox';
import UtilBox from '../box/UtilBox';

import TextList from './TextList';

interface ResultListProps {
  tab: string;
}

const ResultList = ({ tab }: ResultListProps) => {
  const showType = useSearchParams().get('type');

  const { data, isLoading } = useFetchSearchList({ tab, pageNo: 1 });

  if (isLoading) return <p>데이터를 불러오고 있습니다.</p>;

  return (
    <>
      <UtilBox />
      {showType === ShowTypeCategory.list && (
        <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
          {data.totalCount}개의 매장
        </span>
      )}
      <strong className="screen_out">{showType} 리스트</strong>
      {showType === ShowTypeCategory.list ? (
        <TextList tab={tab} list={data.list} />
      ) : (
        <MapBox key={tab} list={data.list} tab={tab} />
      )}
    </>
  );
};

export default ResultList;
