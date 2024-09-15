import { useInfiniteQuery } from '@tanstack/react-query';

// import getLocation from '@/services/api/location.api';
import * as searchApi from '@/services/api/search.api';

interface SearchProps {
  tab: string;
}

export const useFetchSearchList = ({ tab }: SearchProps) => {
  return useInfiniteQuery({
    queryKey: ['search', tab],
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

export default {};
