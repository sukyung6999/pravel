import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import getLocation from '@/services/api/location.api';
import * as searchApi from '@/services/api/search.api';

interface SearchListProps {
  lat?: number;
  lng?: number;
  tab: string;
}

export const useFetchSearchList = ({ lat, lng, tab }: SearchListProps) => {
  return useInfiniteQuery({
    queryKey: ['search', lat?.toFixed(2), lng?.toFixed(2), tab],
    queryFn: async ({ pageParam = 1 }) => {
      let result;
      const { lat: initialLat, lng: initialLng } = await getLocation();

      result = await searchApi.fetchSearchList({
        tab,
        lat: lat || initialLat,
        lng: lng || initialLng,
        pageNo: pageParam,
      });

      if (result.nextCursor === undefined) {
        result.nextCursor = (pageParam as number) + 1;
      }

      return result;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.list.length === 1) {
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
