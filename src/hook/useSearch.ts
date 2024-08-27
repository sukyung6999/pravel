import { useQuery } from '@tanstack/react-query';

import getLocation from '@/services/api/location.api';
import * as searchApi from '@/services/api/search.api';

interface SearchProps {
  tab: string;
  pageNo: number;
}

interface DetailProps {
  tab: string;
  id: string;
}

export const useFetchSearchList = ({ tab, pageNo }: SearchProps) => {
  return useQuery({
    queryKey: [tab, pageNo],
    queryFn: async () => {
      // const { lat, lng } = await getLocation();
      const lat = 37.579617;
      const lng = 126.977041;

      if (tab === 'food') {
        return searchApi.fetchFood(lat, lng, pageNo);
      } else {
        return searchApi.fetchTour(lat, lng, pageNo);
      }
    },
  });
};

export const useFetchDetail = ({ tab, id }: DetailProps) => {
  return useQuery({
    queryKey: ['detail', tab, id],
    queryFn: () => {
      return searchApi.fetchDetail(tab, id);
    },
  });
};

export default {};
