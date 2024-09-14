import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import * as detailApi from '@/services/api/detail.api';

interface DetailProps {
  tab: string;
  id: string;
}

export const useFetchDetail = ({ tab, id }: DetailProps) => {
  return useQuery({
    queryKey: [tab, 'detail', id, 'info'],
    queryFn: () => {
      return detailApi.fetchDetail({ tab, id });
    },
  });
};

export const useFetchDetailMenu = ({ tab, id }: DetailProps) => {
  return useInfiniteQuery({
    queryKey: [tab, 'detail', id, 'image'],
    queryFn: async ({ pageParam = 1 }) => {
      const result = await detailApi.fetchMenuList({
        tab,
        id,
        pageNo: pageParam,
      });

      if (result.nextCursor === undefined) {
        result.nextCursor = (pageParam as number) + 1;
      }

      return result;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.list.length === 0) {
        return undefined;
      }
      return lastPage.nextCursor;
    },
    initialPageParam: 1,
    gcTime: 20 * 60 * 1000,
    staleTime: 20 * 60 * 1000,
  });
};
