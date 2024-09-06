'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import useLocalStorage from 'use-local-storage';

import LoadingSpinner from '@/components/common/loading/LoadingSpinner';
import { useFetchSearchList } from '@/hook/useSearch';
import { ShowTypeCategory } from '@/types/search.type';

import MapBox from '../../map/MapBox';
import UtilBox from '../util/UtilBox';

import TextList from './TextList';

interface ResultListProps {
  tab: string;
  type: string;
}

const ResultList = ({ tab, type }: ResultListProps) => {
  const filters = useSearchParams().get('filter')?.split(',');
  const observerTargetRef = useRef<HTMLDivElement>(null);

  const {
    data,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useFetchSearchList({ tab });
  const [scrollY] = useLocalStorage('places_list_scroll', 0);

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, scrollY);
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    if (observerTargetRef.current) {
      observer.observe(observerTargetRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage]);

  if (status === 'error') return <div>에러가 발생했습니다</div>;

  const allItems = data?.pages.flatMap((page) => page.list) || [];
  const totalCount = data?.pages[0]?.totalCount || 0;

  return (
    <>
      <UtilBox tab={tab} />
      {type === ShowTypeCategory.list && (
        <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
          {totalCount}개의 매장
        </span>
      )}
      <strong className="screen_out">{tab} 리스트</strong>
      {type === ShowTypeCategory.list ? (
        <>
          <TextList tab={tab} list={allItems} filters={filters} />
          <div ref={observerTargetRef}></div>
          {isFetching && <LoadingSpinner style="my-[20px] text-center" />}
        </>
      ) : (
        <MapBox
          key={tab}
          list={allItems}
          tab={tab}
          fetchNextPage={fetchNextPage}
        />
      )}
    </>
  );
};

export default ResultList;
