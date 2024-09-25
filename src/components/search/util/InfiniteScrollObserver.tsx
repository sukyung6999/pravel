'use client';

import { memo, useEffect, useRef } from 'react';

interface ObserverProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isTotalLeft: boolean;
}

const InfiniteScrollObserver = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  isTotalLeft,
}: ObserverProps) => {
  const observerTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        hasNextPage &&
        !isFetchingNextPage &&
        isTotalLeft
      ) {
        fetchNextPage();
      }
    });

    if (observerTargetRef.current) {
      observer.observe(observerTargetRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
  return <div ref={observerTargetRef}></div>;
};

export default memo(InfiniteScrollObserver);
