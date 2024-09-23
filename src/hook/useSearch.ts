import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import getLocation from '@/services/api/location.api';
import * as searchApi from '@/services/api/search.api';

export const useFetchSearchList = (tab: string) => {
  return useInfiniteQuery({
    queryKey: ['search', tab],
    queryFn: async ({ pageParam = 1 }) => {
      let result;
      const { lat, lng } = await getLocation();

      if (tab === 'food') {
        result = await searchApi.fetchFood({
          lat,
          lng,
          pageNo: pageParam,
        });
      } else {
        result = await searchApi.fetchTour({
          lat,
          lng,
          pageNo: pageParam,
        });
      }

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

export const useFetchKeywordList = (keyword: string) => {
  return useQuery({
    queryKey: ['search', keyword],
    queryFn: () => {
      return searchApi.fetchKeywordList(keyword);
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default {};
