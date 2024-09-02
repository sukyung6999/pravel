'use client';

import { useEffect, useRef } from 'react';

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
  const textListRef = useRef<HTMLUListElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useFetchSearchList({ tab });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    if (textListRef.current) {
      observer.observe(textListRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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
        <TextList
          ref={textListRef}
          tab={tab}
          list={allItems}
          isLoading={isFetchingNextPage}
        />
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
