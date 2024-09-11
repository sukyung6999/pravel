import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import * as detailApi from '@/services/api/detail.api';
// import getLocation from '@/services/api/location.api';
import * as searchApi from '@/services/api/search.api';

interface SearchProps {
  tab: string;
  radius?: number;
}

interface DetailProps {
  tab: string;
  id: string;
}

export const useFetchSearchList = ({ tab, radius }: SearchProps) => {
  return useInfiniteQuery({
    queryKey: ['search', tab, radius],
    queryFn: async ({ pageParam = 1 }) => {
      let result;
      // const { lat, lng } = await getLocation();
      const lat = 37.5696765;
      const lng = 126.976177;

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

      if (radius) result.nextCursor = 1;

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

export const useFetchDetail = ({ tab, id }: DetailProps) => {
  return useQuery({
    queryKey: [tab, 'detail', id, 'info'],
    queryFn: () => {
      return searchApi.fetchDetail(tab, id);
    },
  });
};

export const useFetchDetailMenu = ({ tab, id }: DetailProps) => {
  return useQuery({
    queryKey: [tab, 'detail', id, 'image'],
    queryFn: () => {
      return detailApi.fetchMenuList(tab, id);
    },
  });
};

export default {};
