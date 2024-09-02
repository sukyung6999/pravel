import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';

// import getLocation from '@/services/api/location.api';
import * as searchApi from '@/services/api/search.api';

interface SearchProps {
  tab: string;
}

interface DetailProps {
  tab: string;
  id: string;
}

export const useFetchSearchList = ({ tab }: SearchProps) => {
  return useSuspenseInfiniteQuery({
    queryKey: [tab],
    queryFn: async ({ pageParam = 1 }) => {
      let result;
      // const { lat, lng } = await getLocation();
      const lat = 37.579617;
      const lng = 126.977041;

      if (tab === 'food') {
        result = await searchApi.fetchFood(lat, lng, pageParam);
      } else {
        result = await searchApi.fetchTour(lat, lng, pageParam);
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
  });
};

export const useFetchDetail = ({ tab, id }: DetailProps) => {
  return useQuery({
    queryKey: [tab, 'detail', id],
    queryFn: () => {
      return searchApi.fetchDetail(tab, id);
    },
  });
};

export default {};
