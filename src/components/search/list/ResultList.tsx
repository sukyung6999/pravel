'use client';

import { useState } from 'react';

import LoadingSpinner from '@/components/common/loading/LoadingSpinner';
import { useFetchSearchList } from '@/hook/useSearch';
import { FOOD_FILTER } from '@/lib/const/search';
import { LocationData, ShowTypeCategory } from '@/types/search.type';

import MapBox from '../../map/MapBox';
import InfiniteScrollObserver from '../util/InfiniteScrollObserver';
import UtilBox from '../util/UtilBox';

import TextList from './TextList';

interface ResultListProps {
  tab: string;
  type: string;
  filters: string;
}

const ResultList = ({ tab, type, filters }: ResultListProps) => {
  const filterList = filters?.split(',');
  const [location, setLocation] = useState<LocationData>();

  const {
    data,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useFetchSearchList({
    lat: Number(location?.lat.toFixed(2)),
    lng: Number(location?.lng.toFixed(2)),
    tab,
  });

  if (status === 'error') return <div>데이터를 불러오는데 실패했습니다.</div>;

  const allItems = data?.pages.flatMap((page) => page.list) || [];
  const totalCount = data?.pages[0]?.totalCount || 0;

  const newList = allItems.filter((item) => {
    if (filterList?.includes('all') || !filterList.length) return true;
    else
      return filterList?.includes(
        FOOD_FILTER[item.category as keyof typeof FOOD_FILTER],
      );
  });

  return (
    <>
      <UtilBox tab={tab} type={type} filterList={filterList} />
      {type === ShowTypeCategory.list && (
        <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
          {totalCount}개의 매장
        </span>
      )}
      <strong className="screen_out">{tab} 리스트</strong>
      {type === ShowTypeCategory.list ? (
        <>
          {!newList.length ? (
            <p className="py-[50px] text-gray-500 text-center">
              해당 필터 조건으로 검색된 결과가 존재하지 않습니다.
            </p>
          ) : (
            <>
              <TextList tab={tab} list={newList} />
              <InfiniteScrollObserver
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                isTotalLeft={totalCount > allItems.length}
              />
            </>
          )}
        </>
      ) : (
        <MapBox
          key={tab}
          tab={tab}
          list={newList}
          pageLeft={Math.min(Math.ceil(totalCount / 10), 5)}
          isFetching={isFetching}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          onClickRefetch={setLocation}
        />
      )}
      {isFetching && <LoadingSpinner className="mt-[100px] text-center" />}
    </>
  );
};

export default ResultList;
