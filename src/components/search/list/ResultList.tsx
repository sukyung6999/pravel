'use client';

import { useCallback } from 'react';

import LoadingSpinner from '@/components/common/loading/LoadingSpinner';
import { useFetchSearchList } from '@/hook/useSearch';
import { FOOD_FILTER } from '@/lib/const/search';
import { ShowTypeCategory } from '@/types/search.type';

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

  const {
    data,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useFetchSearchList(tab);
  const fetchNextPageCallback = useCallback(fetchNextPage, []);

  if (status === 'error') return <div>에러가 발생했습니다</div>;

  const allItems = data?.pages.flatMap((page) => page.list) || [];
  const totalCount = data?.pages[0]?.totalCount || 0;

  const newList = allItems.filter((item) => {
    if (filterList?.includes('all')) return true;
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
          <TextList tab={tab} list={newList} />
          <InfiniteScrollObserver
            fetchNextPage={fetchNextPageCallback}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isTotalLeft={totalCount > allItems.length}
          />
        </>
      ) : (
        <MapBox
          key={tab}
          tab={tab}
          list={newList}
          isFetching={isFetching}
          fetchNextPage={fetchNextPage}
        />
      )}
      {isFetching && <LoadingSpinner className="my-[20px] text-center" />}
    </>
  );
};

export default ResultList;
