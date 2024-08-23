import { useQuery } from '@tanstack/react-query';

import getLocation from '@/services/api/location.api';
import * as searchApi from '@/services/api/search.api';

interface SearchProps {
  tab: string;
  pageNo: number;
}

export const useFetchSearchList = ({ tab, pageNo }: SearchProps) => {
  return useQuery({
    queryKey: [tab, pageNo],
    queryFn: async () => {
      const { lat, lng } = await getLocation();

      if (tab === 'food') {
        return searchApi.fetchFood(lat, lng, pageNo);
      } else {
        return searchApi.fetchTour(lat, lng, pageNo);
      }
    },
  });
};

export const useFetchTourDetail = (id: string) => {
  return useQuery({
    queryKey: ['tour', 'detail', id],
    queryFn: () => {
      return searchApi.fetchTourDetail(id);
    },
  });
};

export const useFetchFoodDetail = (id: string) => {
  return useQuery({
    queryKey: ['food', 'detail', id],
    queryFn: () => searchApi.fetchFoodDetail(id),
  });
};

export default {};
